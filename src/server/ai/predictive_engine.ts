import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide';
import {
    UserSessionContext,
    OperationalContextSnapshot,
    GuestContextSnapshot,
    AIOperationalInsightsResponse,
    AIGuestRecommendationsResponse,
    AIPredictionItem,
    AIRecommendationItem,
    PredictionType,
    RecommendationType,
    PriorityLevel,
} from './types';
import { AIContextBuilders } from './context_builders';
import { GeminiService } from './gemini_service';

/**
 * Phase 5D: Predictive & Recommendation Engine
 * Strictly validates and persists grounded predictions and recommendations.
 */
export class PredictiveEngine {
    private static readonly ALLOWED_PRED_TYPES: PredictionType[] = [
        'housekeeping_workload',
        'service_request_volume',
        'maintenance_workload',
        'inventory_reorder_risk',
        'restaurant_demand',
        'other',
    ];

    private static readonly ALLOWED_REC_TYPES: RecommendationType[] = [
        'dining',
        'room_service',
        'amenity',
        'service_catalog',
        'housekeeping',
        'maintenance',
        'inventory_reorder',
        'staff_allocation',
        'other',
    ];

    private static readonly ALLOWED_PRIORITIES: PriorityLevel[] = ['low', 'medium', 'high', 'critical'];

    /**
     * Generates grounded operational intelligence & predictions for managers
     */
    public static generateOperationalInsights(session: UserSessionContext): AIOperationalInsightsResponse {
        // Enforce role: manager or admin
        if (session.activeRole !== 'manager' && session.activeRole !== 'admin') {
            throw new Error('Access denied: Manager or Administrator role required for operational insights.');
        }

        const snapshot = AIContextBuilders.buildOperationalSnapshot();
        const generatedAt = new GlideDateTime().getDisplayValue();

        // Grounding check: verify sufficient data exists
        if (!AIContextBuilders.isOperationalDataSufficient(snapshot)) {
            return {
                status: 'INSUFFICIENT_DATA',
                summary: 'Operational metrics snapshot contains insufficient active hotel transactions to formulate statistically meaningful predictions.',
                predictions: [],
                recommendations: [],
                criticalObservations: ['Insufficient room, task, or reservation activity recorded today.'],
                generatedAt: generatedAt,
                expiresAt: generatedAt,
            };
        }

        // Build deterministic prompt instruction
        const prompt = [
            'Analyze the following hotel operational snapshot for Athidhi Services:',
            JSON.stringify(snapshot, null, 2),
            '',
            'GROUNDING RULES:',
            '1. Every metric must be drawn from the provided snapshot. Do NOT invent numbers or counts.',
            '2. Provide 2 to 4 operational predictions (workload, service volume, maintenance, reorder risk, dining).',
            '3. Provide 2 to 4 operational recommendations for hotel staff/management.',
            '4. Identify any critical observations (overdue tasks, low-stock items, inspection delays).',
            '5. Output MUST be strictly valid JSON adhering to this schema:',
            '{',
            '  "summary": "High-level 2-sentence executive summary of current operations",',
            '  "criticalObservations": ["observation 1", "observation 2"],',
            '  "predictions": [',
            '    {',
            '      "predictionType": "housekeeping_workload|service_request_volume|maintenance_workload|inventory_reorder_risk|restaurant_demand|other",',
            '      "prediction": "Clear concise prediction statement",',
            '      "confidence": 0.85,',
            '      "severity": "low|medium|high|critical",',
            '      "reasoningSummary": "Grounded reasoning referencing snapshot metrics"',
            '    }',
            '  ],',
            '  "recommendations": [',
            '    {',
            '      "audience": "manager|staff|all",',
            '      "recommendationType": "housekeeping|maintenance|inventory_reorder|staff_allocation|dining|other",',
            '      "recommendation": "Actionable recommendation statement",',
            '      "priority": "low|medium|high|critical",',
            '      "rationale": "Reasoning based on snapshot data"',
            '    }',
            '  ]',
            '}',
        ].join('\n');

        const geminiRes = GeminiService.generateContent(
            prompt,
            'You are the Chief AI Operations Intelligence Analyst for Athidhi Services Smart Hotel Management System. You only return valid, parseable JSON conforming strictly to the requested schema. No conversational preamble or code markdown fencing.'
        );

        if (!geminiRes.success || !geminiRes.text) {
            throw new Error('AI Provider error while generating operational insights: ' + (geminiRes.error || 'No response from model'));
        }

        // Parse and validate structured output
        const parsed = PredictiveEngine.parseJsonSafe(geminiRes.text);
        if (!parsed || !parsed.predictions || !parsed.recommendations) {
            throw new Error('Malformed AI response: Output did not contain valid predictions or recommendations structures.');
        }

        const validPredictions: AIPredictionItem[] = [];
        for (const p of parsed.predictions) {
            if (PredictiveEngine.validatePredictionItem(p)) {
                validPredictions.push({
                    predictionType: p.predictionType,
                    prediction: String(p.prediction).slice(0, 1000),
                    confidence: Math.min(1.0, Math.max(0.0, parseFloat(p.confidence) || 0.8)),
                    severity: p.severity,
                    reasoningSummary: String(p.reasoningSummary || '').slice(0, 1000),
                    targetTable: p.targetTable || 'x_2120492_athidhi_room',
                });
            }
        }

        const validRecommendations: AIRecommendationItem[] = [];
        for (const r of parsed.recommendations) {
            if (PredictiveEngine.validateRecommendationItem(r)) {
                validRecommendations.push({
                    audience: r.audience || 'manager',
                    recommendationType: r.recommendationType,
                    recommendation: String(r.recommendation).slice(0, 1000),
                    priority: r.priority,
                    rationale: String(r.rationale || '').slice(0, 1000),
                    targetTable: r.targetTable || 'x_2120492_athidhi_room',
                });
            }
        }

        if (validPredictions.length === 0 && validRecommendations.length === 0) {
            throw new Error('Validation failed: No valid structured predictions or recommendations could be extracted.');
        }

        // Calculate 24-hour expiry
        const expiresGdt = new GlideDateTime();
        expiresGdt.addDaysLocalTime(1);
        const expiresAt = expiresGdt.getDisplayValue();

        // Persist validated records to ServiceNow tables
        PredictiveEngine.persistPredictions(validPredictions, expiresAt);
        PredictiveEngine.persistRecommendations(validRecommendations, 'manager', undefined, undefined, expiresAt);

        return {
            status: 'SUCCESS',
            summary: String(parsed.summary || 'Hotel operations analyzed successfully.').slice(0, 500),
            predictions: validPredictions,
            recommendations: validRecommendations,
            criticalObservations: Array.isArray(parsed.criticalObservations)
                ? parsed.criticalObservations.map((o: any) => String(o).slice(0, 300))
                : [],
            generatedAt,
            expiresAt,
        };
    }

    /**
     * Generates personalized, grounded recommendations for the authenticated guest
     */
    public static generateGuestRecommendations(session: UserSessionContext): AIGuestRecommendationsResponse {
        const guestSnapshot = AIContextBuilders.buildGuestSnapshot(session);
        const generatedAt = new GlideDateTime().getDisplayValue();

        // Grounding check: Must have verified stay
        if (!guestSnapshot.stay) {
            return {
                status: 'INSUFFICIENT_DATA',
                guestName: guestSnapshot.guestName,
                recommendations: [],
                generatedAt,
                expiresAt: generatedAt,
            };
        }

        const prompt = [
            'Create personalized guest recommendations for the following in-house hotel guest at Athidhi Services:',
            JSON.stringify(guestSnapshot, null, 2),
            '',
            'GROUNDING RULES:',
            '1. Only recommend active dining menu items or available service catalog items supplied in the snapshot.',
            '2. Honor guest preferences (dietary, room, amenities).',
            '3. Never recommend items for other guests.',
            '4. Output MUST be strictly valid JSON adhering to this schema:',
            '{',
            '  "recommendations": [',
            '    {',
            '      "recommendationType": "dining|room_service|amenity|service_catalog",',
            '      "recommendation": "Tailored, hospitable recommendation statement for guest",',
            '      "priority": "low|medium|high",',
            '      "rationale": "Why this recommendation suits the guest preferences or stay"',
            '    }',
            '  ]',
            '}',
        ].join('\n');

        const geminiRes = GeminiService.generateContent(
            prompt,
            'You are the Luxury Guest Experience AI Concierge for Athidhi Services. Return strictly valid JSON adhering to the specified schema with no markdown or explanation.'
        );

        if (!geminiRes.success || !geminiRes.text) {
            throw new Error('AI Provider error while generating guest recommendations: ' + (geminiRes.error || 'No response from model'));
        }

        const parsed = PredictiveEngine.parseJsonSafe(geminiRes.text);
        if (!parsed || !Array.isArray(parsed.recommendations)) {
            throw new Error('Malformed AI response: Output did not contain valid recommendations array.');
        }

        const validRecs: AIRecommendationItem[] = [];
        for (const r of parsed.recommendations) {
            if (PredictiveEngine.validateRecommendationItem(r)) {
                validRecs.push({
                    audience: 'guest',
                    recommendationType: r.recommendationType,
                    recommendation: String(r.recommendation).slice(0, 1000),
                    priority: r.priority,
                    rationale: String(r.rationale || '').slice(0, 1000),
                });
            }
        }

        const expiresGdt = new GlideDateTime();
        expiresGdt.addDaysLocalTime(1);
        const expiresAt = expiresGdt.getDisplayValue();

        // Persist recommendations scoped strictly to this authenticated guest
        let staySysId: string | undefined = undefined;
        if (guestSnapshot.stay) {
            const stayLookupGr = new GlideRecord('x_2120492_athidhi_stay');
            stayLookupGr.addQuery('stay_number', guestSnapshot.stay.stayNumber);
            stayLookupGr.setLimit(1);
            stayLookupGr.query();
            if (stayLookupGr.next()) {
                staySysId = stayLookupGr.getUniqueValue();
            }
        }

        PredictiveEngine.persistRecommendations(
            validRecs,
            'guest',
            guestSnapshot.guestSysId,
            staySysId,
            expiresAt
        );

        return {
            status: 'SUCCESS',
            guestName: guestSnapshot.guestName,
            recommendations: validRecs,
            generatedAt,
            expiresAt,
        };
    }

    /**
     * Persists prediction records to x_2120492_athidhi_ai_prediction
     */
    private static persistPredictions(items: AIPredictionItem[], expiresAt: string): void {
        for (const item of items) {
            try {
                const gr = new GlideRecord('x_2120492_athidhi_ai_prediction');
                gr.initialize();
                gr.setValue('prediction_type', item.predictionType);
                gr.setValue('prediction', item.prediction);
                gr.setValue('confidence', item.confidence);
                gr.setValue('severity', item.severity);
                gr.setValue('reasoning_summary', item.reasoningSummary);
                gr.setValue('status', 'active');
                if (item.targetTable) gr.setValue('target_table', item.targetTable);
                if (item.targetRecord) gr.setValue('target_record', item.targetRecord);
                if (expiresAt) gr.setValue('expires_at', expiresAt);
                gr.insert();
            } catch (err: any) {
                gs.error('Failed to persist AI prediction: ' + err.message);
            }
        }
    }

    /**
     * Persists recommendation records to x_2120492_athidhi_ai_recommendation
     */
    private static persistRecommendations(
        items: AIRecommendationItem[],
        audience: 'guest' | 'staff' | 'manager' | 'all',
        guestSysId?: string,
        staySysId?: string,
        expiresAt?: string
    ): void {
        for (const item of items) {
            try {
                const gr = new GlideRecord('x_2120492_athidhi_ai_recommendation');
                gr.initialize();
                gr.setValue('audience', audience);
                if (guestSysId) gr.setValue('guest', guestSysId);
                if (staySysId) gr.setValue('stay', staySysId);
                gr.setValue('recommendation_type', item.recommendationType);
                gr.setValue('recommendation', item.recommendation);
                gr.setValue('rationale', item.rationale);
                gr.setValue('priority', item.priority);
                gr.setValue('status', 'active');
                if (item.targetTable) gr.setValue('target_table', item.targetTable);
                if (item.targetRecord) gr.setValue('target_record', item.targetRecord);
                if (expiresAt) gr.setValue('expires_at', expiresAt);
                gr.insert();
            } catch (err: any) {
                gs.error('Failed to persist AI recommendation: ' + err.message);
            }
        }
    }

    public static validatePredictionItem(item: any): boolean {
        if (!item || typeof item !== 'object') return false;
        if (!item.prediction || typeof item.prediction !== 'string' || item.prediction.trim() === '') return false;
        if (!PredictiveEngine.ALLOWED_PRED_TYPES.includes(item.predictionType)) return false;
        if (typeof item.confidence !== 'number' && isNaN(parseFloat(item.confidence))) return false;
        if (!PredictiveEngine.ALLOWED_PRIORITIES.includes(item.severity)) return false;
        return true;
    }

    public static validateRecommendationItem(item: any): boolean {
        if (!item || typeof item !== 'object') return false;
        if (!item.recommendation || typeof item.recommendation !== 'string' || item.recommendation.trim() === '') return false;
        if (!PredictiveEngine.ALLOWED_REC_TYPES.includes(item.recommendationType)) return false;
        if (!PredictiveEngine.ALLOWED_PRIORITIES.includes(item.priority)) return false;
        return true;
    }

    public static parseJsonSafe(raw: string): any {
        if (!raw) return null;
        let cleaned = raw.trim();
        // Remove markdown code fence if present
        if (cleaned.startsWith('```json')) {
            cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '');
        } else if (cleaned.startsWith('```')) {
            cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
        }
        try {
            return JSON.parse(cleaned);
        } catch (e) {
            return null;
        }
    }
}

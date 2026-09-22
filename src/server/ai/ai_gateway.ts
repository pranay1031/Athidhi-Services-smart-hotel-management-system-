import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide';
/**
 * Phase 5B — Central Server-Side AI Gateway
 * Authenticates user session, filters context, validates intent with allowlist,
 * invokes server-side business logic, logs audit entries, and returns controlled responses.
 */

import {
    AIGatewayRequest,
    AIGatewayResponse,
    AIResponseCategory,
    UserSessionContext,
} from './types';
import {
    getActionDefinition,
    isActionAllowedForRole,
    validateActionParameters,
} from './action_registry';
import { AIActionHandlers } from './action_handlers';
import { GeminiService } from './gemini_service';

export class AIGateway {
    /**
     * Resolves authenticated user session without trusting client inputs
     */
    public static resolveSessionContext(): UserSessionContext {
        const user = gs.getUser();
        const userId = gs.getUserID();
        const userName = user.getName() || 'Unknown';
        const userEmail = user.getEmail() || '';

        // Determine active application role
        let activeRole = 'guest';
        if (user.hasRole('x_2120492_athidhi.admin') || user.hasRole('admin')) {
            activeRole = 'admin';
        } else if (user.hasRole('x_2120492_athidhi.manager')) {
            activeRole = 'manager';
        } else if (user.hasRole('x_2120492_athidhi.receptionist')) {
            activeRole = 'receptionist';
        } else if (user.hasRole('x_2120492_athidhi.restaurant')) {
            activeRole = 'restaurant';
        } else if (user.hasRole('x_2120492_athidhi.housekeeping')) {
            activeRole = 'housekeeping';
        } else if (user.hasRole('x_2120492_athidhi.maintenance')) {
            activeRole = 'maintenance';
        } else if (user.hasRole('x_2120492_athidhi.guest')) {
            activeRole = 'guest';
        }

        let guestSysId = '';
        let guestName = userName;

        // For guest, look up by session email
        if (userEmail) {
            const guestGr = new GlideRecord('x_2120492_athidhi_guest');
            guestGr.addQuery('email', userEmail);
            guestGr.setLimit(1);
            guestGr.query();
            if (guestGr.next()) {
                guestSysId = guestGr.getUniqueValue();
                guestName = String(guestGr.getValue('first_name') + ' ' + (guestGr.getValue('last_name') || '')).trim();
            }
        }

        return {
            userId: userId,
            userName: userName,
            userEmail: userEmail,
            roles: [activeRole],
            activeRole: activeRole,
            guestSysId: guestSysId,
            guestName: guestName,
        };
    }

    /**
     * Processes a user AI request end-to-end
     */
    public static processRequest(request: AIGatewayRequest): AIGatewayResponse {
        const startTime = Date.now();
        const session = AIGateway.resolveSessionContext();

        if (!request || !request.userQuery || request.userQuery.trim() === '') {
            return AIGateway.createResponse(
                false,
                'VALIDATION_ERROR',
                'User query cannot be empty.',
                session,
                startTime,
                'Empty Query'
            );
        }

        const query = request.userQuery.trim();

        // Security filter: check for obvious malicious execution requests
        if (new RegExp('(gr\\.|gliderecord|eval\\(|<script|select\\s+.*\\s+from|delete\\s+from)', 'i').test(query)) {
            return AIGateway.createResponse(
                false,
                'VALIDATION_ERROR',
                'Arbitrary database operations or script execution requests are strictly rejected.',
                session,
                startTime,
                'Security Violation: Code/Query Injection Attempt',
                undefined,
                undefined,
                'SECURITY_INJECTION_REJECTED'
            );
        }

        // Build role-scoped system prompt
        const systemInstruction = [
            'You are the intelligent AI Concierge for Athidhi Services Smart Hotel Management System.',
            'Current User: ' + session.userName + ' (Role: ' + session.activeRole + ').',
            'You must assist guests and workers using ONLY the available tool functions.',
            'Never reveal database table names, internal sys_ids, API keys, or ServiceNow implementation details.',
            'If asked for information or actions that do not exist in your tool declarations, politely decline.',
            'Never guess or invent guest reservations or room numbers.',
        ].join(' ');

        // Call Gemini Service
        const geminiRes = GeminiService.generateContent(query, systemInstruction);

        if (!geminiRes.success) {
            let cat: AIResponseCategory = 'PROVIDER_ERROR';
            if (geminiRes.isTimeout) cat = 'TIMEOUT';
            if (geminiRes.isRateLimited) cat = 'RATE_LIMITED';

            return AIGateway.createResponse(
                false,
                cat,
                geminiRes.error || 'AI intelligence provider is temporarily unavailable. Please try again shortly.',
                session,
                startTime,
                'Gemini Service Failure',
                undefined,
                undefined,
                cat
            );
        }

        // If Gemini resolved to a tool function call
        if (geminiRes.functionCall) {
            const actionName = geminiRes.functionCall.name;
            const actionDef = getActionDefinition(actionName);

            // Step 1: Allowlist validation
            if (!actionDef) {
                return AIGateway.createResponse(
                    false,
                    'UNSUPPORTED_ACTION',
                    'The requested action "' + actionName + '" is not recognized or permitted in the hotel action registry.',
                    session,
                    startTime,
                    'Unsupported Action: ' + actionName,
                    actionName,
                    undefined,
                    'UNSUPPORTED_ACTION'
                );
            }

            // Step 2: Role authorization
            if (!isActionAllowedForRole(actionDef, session.activeRole)) {
                return AIGateway.createResponse(
                    false,
                    'UNAUTHORIZED',
                    'Your role (' + session.activeRole + ') is not authorized to execute "' + actionName + '".',
                    session,
                    startTime,
                    'Role Unauthorized: ' + actionName,
                    actionName,
                    undefined,
                    'ROLE_UNAUTHORIZED'
                );
            }

            // Step 3: Parameter validation
            const valResult = validateActionParameters(actionDef, geminiRes.functionCall.args || {});
            if (!valResult.valid) {
                return AIGateway.createResponse(
                    false,
                    'VALIDATION_ERROR',
                    valResult.error || 'Parameter validation failed for action.',
                    session,
                    startTime,
                    'Parameter Validation Error',
                    actionName,
                    undefined,
                    'INVALID_PARAMETERS'
                );
            }

            // Step 4: Execute deterministic server-side handler
            try {
                const handlerResult = AIGateway.dispatchAction(actionName, session, geminiRes.functionCall.args || {});
                return AIGateway.createResponse(
                    true,
                    'SUCCESS',
                    handlerResult.message || 'Action executed successfully.',
                    session,
                    startTime,
                    'Action ' + actionName + ' completed successfully',
                    actionName,
                    handlerResult
                );
            } catch (err: any) {
                return AIGateway.createResponse(
                    false,
                    'SYSTEM_ERROR',
                    'An error occurred during hotel operation execution.',
                    session,
                    startTime,
                    'Handler Error: ' + (err.message || String(err)),
                    actionName,
                    undefined,
                    'EXECUTION_FAILURE'
                );
            }
        }

        // If Gemini returned conversational or FAQ text
        return AIGateway.createResponse(
            true,
            'INFORMATION',
            geminiRes.text || 'I am happy to assist you with your stay at Athidhi Services.',
            session,
            startTime,
            'Informational Inquiry Answered'
        );
    }

    /**
     * Dispatches action to appropriate static handler
     */
    private static dispatchAction(
        actionName: string,
        session: UserSessionContext,
        params: Record<string, any>
    ): any {
        switch (actionName) {
            case 'get_current_guest_stay':
                return AIActionHandlers.getCurrentGuestStay(session, params);
            case 'get_guest_reservations':
                return AIActionHandlers.getGuestReservations(session, params);
            case 'get_room_information':
                return AIActionHandlers.getRoomInformation(session, params);
            case 'get_room_availability':
                return AIActionHandlers.getRoomAvailability(session, params);
            case 'get_active_menu':
                return AIActionHandlers.getActiveMenu(session, params);
            case 'get_food_order_status':
                return AIActionHandlers.getFoodOrderStatus(session, params);
            case 'get_guest_service_requests':
                return AIActionHandlers.getGuestServiceRequests(session, params);
            case 'get_service_catalog':
                return AIActionHandlers.getServiceCatalog(session, params);
            case 'get_hotel_faq':
                return AIActionHandlers.getHotelFaq(session, params);
            case 'create_housekeeping_request':
                return AIActionHandlers.createHousekeepingRequest(session, params);
            case 'create_maintenance_request':
                return AIActionHandlers.createMaintenanceRequest(session, params);
            case 'create_room_service_request':
                return AIActionHandlers.createRoomServiceRequest(session, params);
            case 'create_guest_service_request':
                return AIActionHandlers.createGuestServiceRequest(session, params);
            default:
                throw new Error('Unsupported action dispatch: ' + actionName);
        }
    }

    /**
     * Constructs normalized response and creates audit log
     */
    private static createResponse(
        success: boolean,
        category: AIResponseCategory,
        message: string,
        session: UserSessionContext,
        startTime: number,
        summary: string,
        action?: string,
        data?: any,
        errorCategory?: string
    ): AIGatewayResponse {
        const durationMs = Date.now() - startTime;

        // Record audit log
        AIGateway.recordAuditLog(session, category, action || 'none', success, durationMs, summary, errorCategory);

        return {
            success: success,
            category: category,
            message: message,
            action: action,
            data: data,
            durationMs: durationMs,
            errorCategory: errorCategory,
        };
    }

    /**
     * Creates an entry in x_2120492_athidhi_ai_interaction_log
     */
    private static recordAuditLog(
        session: UserSessionContext,
        actionResult: AIResponseCategory,
        actionName: string,
        success: boolean,
        durationMs: number,
        summary: string,
        errorCategory?: string
    ): void {
        const auditEnabled = gs.getProperty('x_2120492_athidhi.ai.audit_enabled') !== 'false';
        if (!auditEnabled) return;

        try {
            let reqCategory = 'unknown';
            if (errorCategory === 'SECURITY_INJECTION_REJECTED') {
                reqCategory = 'security_violation';
            } else if (actionName.includes('faq')) {
                reqCategory = 'faq';
            } else if (actionName.includes('stay')) {
                reqCategory = 'stay';
            } else if (actionName.includes('reservation')) {
                reqCategory = 'reservation';
            } else if (actionName.includes('menu') || actionName.includes('food') || actionName.includes('room_service')) {
                reqCategory = 'dining';
            } else if (actionName.includes('housekeeping')) {
                reqCategory = 'housekeeping';
            } else if (actionName.includes('maintenance')) {
                reqCategory = 'maintenance';
            } else if (actionName.includes('service_catalog') || actionName.includes('guest_service')) {
                reqCategory = 'service_catalog';
            } else if (actionName.includes('room')) {
                reqCategory = 'stay';
            }

            const logGr = new GlideRecord('x_2120492_athidhi_ai_interaction_log');
            logGr.initialize();
            if (session.userId) logGr.setValue('user', session.userId);
            logGr.setValue('user_role', session.activeRole);
            logGr.setValue('request_category', reqCategory);
            logGr.setValue('requested_action', actionName);
            logGr.setValue('action_result', actionResult);
            logGr.setValue('success', success);
            logGr.setValue('execution_duration_ms', durationMs);
            logGr.setValue('provider', gs.getProperty('x_2120492_athidhi.ai_provider') || 'Google Gemini');
            logGr.setValue('model', gs.getProperty('x_2120492_athidhi.gemini_model') || 'gemini-2.5-flash');
            if (errorCategory) logGr.setValue('error_category', errorCategory);
            logGr.setValue('summary', summary.slice(0, 1000));
            logGr.setValue('logged_at', new GlideDateTime());
            logGr.insert();
        } catch (e: any) {
            gs.error('Failed to write AI interaction audit log: ' + e.message);
        }
    }
}

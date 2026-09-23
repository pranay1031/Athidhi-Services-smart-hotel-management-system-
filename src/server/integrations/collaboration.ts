import { IntegrationClient } from './framework/integration_client.ts';
import { IntegrationResponse } from './framework/types';

declare const gs: any;

export interface CollaborationAlert {
    title: string;
    summary: string;
    severity: 'INFO' | 'WARNING' | 'CRITICAL';
    category: 'incident' | 'maintenance' | 'housekeeping' | 'inventory' | 'operational_insight';
    sourceRecord?: string;
    details?: Record<string, string>;
}

export class CollaborationIntegration {
    /**
     * Dispatch alert to Microsoft Teams via Incoming Webhook
     */
    public static sendTeamsNotification(alert: CollaborationAlert): IntegrationResponse {
        const dedupKey = 'teams:' + (alert.sourceRecord || alert.category) + ':' + alert.severity;
        if (IntegrationClient.checkAndRecordDeduplication(dedupKey, 600)) {
            return {
                success: true,
                status: 'SUCCESS',
                httpStatus: 200,
                data: { message: 'Duplicate Teams notification suppressed' },
                correlationId: IntegrationClient.generateCorrelationId(),
                durationMs: 0,
                retriesAttempted: 0,
            };
        }

        const webhookUrl = (typeof gs !== 'undefined' && gs.getProperty)
            ? gs.getProperty('x_2120492_athidhi.integration.teams.webhook_url', 'https://outlook.office.com/webhook')
            : 'https://outlook.office.com/webhook';

        // Construct Adaptive Card payload (never containing private credentials or raw tokens)
        const payload = {
            '@type': 'MessageCard',
            '@context': 'http://schema.org/extensions',
            themeColor: alert.severity === 'CRITICAL' ? 'FF0000' : alert.severity === 'WARNING' ? 'FFA500' : '0078D7',
            summary: alert.title,
            sections: [
                {
                    activityTitle: '🚨 ' + alert.title,
                    activitySubtitle: 'Category: ' + alert.category.toUpperCase() + ' | Severity: ' + alert.severity,
                    text: alert.summary,
                    facts: alert.details
                        ? Object.keys(alert.details).map((k) => ({ name: k, value: alert.details![k] }))
                        : [],
                    markdown: true,
                },
            ],
        };

        return IntegrationClient.execute({
            integrationName: 'teams',
            operation: 'send_teams_alert',
            endpoint: webhookUrl,
            httpMethod: 'POST',
            externalSystem: 'microsoft_teams',
            headers: { 'Content-Type': 'application/json' },
            body: payload,
            sourceRecord: alert.sourceRecord,
            isIdempotent: false,
        });
    }

    /**
     * Dispatch alert to Slack via Incoming Webhook
     */
    public static sendSlackNotification(alert: CollaborationAlert): IntegrationResponse {
        const dedupKey = 'slack:' + (alert.sourceRecord || alert.category) + ':' + alert.severity;
        if (IntegrationClient.checkAndRecordDeduplication(dedupKey, 600)) {
            return {
                success: true,
                status: 'SUCCESS',
                httpStatus: 200,
                data: { message: 'Duplicate Slack notification suppressed' },
                correlationId: IntegrationClient.generateCorrelationId(),
                durationMs: 0,
                retriesAttempted: 0,
            };
        }

        const webhookUrl = (typeof gs !== 'undefined' && gs.getProperty)
            ? gs.getProperty('x_2120492_athidhi.integration.slack.webhook_url', 'https://hooks.slack.com/services')
            : 'https://hooks.slack.com/services';

        // Construct Block Kit payload
        const payload = {
            text: alert.title + ': ' + alert.summary,
            blocks: [
                {
                    type: 'header',
                    text: {
                        type: 'plain_text',
                        text: (alert.severity === 'CRITICAL' ? '🚨 ' : '🔔 ') + alert.title,
                    },
                },
                {
                    type: 'section',
                    fields: [
                        { type: 'mrkdwn', text: '*Severity:*\n' + alert.severity },
                        { type: 'mrkdwn', text: '*Category:*\n' + alert.category.toUpperCase() },
                    ],
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: alert.summary,
                    },
                },
            ],
        };

        return IntegrationClient.execute({
            integrationName: 'slack',
            operation: 'send_slack_alert',
            endpoint: webhookUrl,
            httpMethod: 'POST',
            externalSystem: 'slack',
            headers: { 'Content-Type': 'application/json' },
            body: payload,
            sourceRecord: alert.sourceRecord,
            isIdempotent: false,
        });
    }
}

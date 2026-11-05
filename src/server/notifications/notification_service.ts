import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide';

export interface NotificationParams {
    recipient?: string;
    recipientRole?: 'guest' | 'manager' | 'admin' | 'receptionist' | 'housekeeping' | 'restaurant' | 'maintenance' | 'all';
    notificationType: 'service_request' | 'reservation' | 'food_order' | 'incident' | 'housekeeping' | 'maintenance' | 'inventory' | 'system';
    severity: 'info' | 'warning' | 'critical';
    title: string;
    message: string;
    sourceTable?: string;
    sourceSysId?: string;
    actionUrl?: string;
    deduplicationKey?: string;
}

export class NotificationService {
    public static createNotification(params: NotificationParams): string | null {
        try {
            if (params.deduplicationKey) {
                const dupGr = new GlideRecord('x_2120492_athidhi_notification');
                dupGr.addQuery('deduplication_key', params.deduplicationKey);
                dupGr.addQuery('is_read', false);
                dupGr.query();
                if (dupGr.hasNext()) {
                    return null;
                }
            }

            let safeTitle = params.title || '';
            let safeMessage = params.message || '';
            const forbiddenPatterns = [
                /(?:api[_-]?key|password|bearer|auth[_-]?token)\s*[:=]\s*['"][^'"]+['"]/gi,
                /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g,
            ];
            for (const pat of forbiddenPatterns) {
                safeTitle = safeTitle.replace(pat, '[REDACTED]');
                safeMessage = safeMessage.replace(pat, '[REDACTED]');
            }

            const gr = new GlideRecord('x_2120492_athidhi_notification');
            gr.initialize();
            if (params.recipient) gr.setValue('recipient', params.recipient);
            gr.setValue('recipient_role', params.recipientRole || 'all');
            gr.setValue('notification_type', params.notificationType);
            gr.setValue('severity', params.severity || 'info');
            gr.setValue('title', safeTitle.substring(0, 100));
            gr.setValue('message', safeMessage.substring(0, 500));
            if (params.sourceTable) gr.setValue('source_table', params.sourceTable);
            if (params.sourceSysId) gr.setValue('source_sys_id', params.sourceSysId);
            if (params.actionUrl) gr.setValue('action_url', params.actionUrl);
            if (params.deduplicationKey) gr.setValue('deduplication_key', params.deduplicationKey);
            gr.setValue('is_read', false);
            gr.setValue('created_at', new GlideDateTime().getValue());

            const sysId = gr.insert();
            return sysId;
        } catch (e: any) {
            gs.error('NotificationService error: ' + (e.message || String(e)));
            return null;
        }
    }
}

import { IntegrationClient } from './framework/integration_client';
import { IntegrationResponse } from './framework/types';

declare const gs: any;

export interface ReservationNotificationParams {
    type: 'booking_confirmation' | 'cancellation' | 'check_in_reminder' | 'check_out_reminder';
    reservationId: string;
    guestName: string;
    guestEmail?: string;
    guestPhone?: string;
    roomType: string;
    checkInDate: string;
    checkOutDate: string;
}

export interface ServiceRequestNotificationParams {
    type: 'created' | 'accepted' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
    requestId: string;
    category: string;
    roomNumber: string;
    guestName: string;
}

export interface FoodOrderNotificationParams {
    type: 'accepted' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
    orderId: string;
    roomNumber: string;
    itemCount: number;
    totalAmount: number;
}

export interface HousekeepingNotificationParams {
    type: 'cleaning_completed' | 'inspection_required' | 'room_ready';
    roomNumber: string;
    taskId: string;
    housekeeperName?: string;
}

export interface MaintenanceNotificationParams {
    type: 'created' | 'assigned' | 'resolved';
    requestId: string;
    roomNumber: string;
    priority: string;
    issue: string;
}

export interface IncidentNotificationParams {
    type: 'critical_notification' | 'manager_escalation';
    incidentId: string;
    priority: string;
    category: string;
    summary: string;
}

export class CommunicationIntegration {
    /**
     * Dispatch notification with deduplication & channel selection
     */
    public static sendNotification(
        channel: 'email' | 'sms' | 'whatsapp',
        sourceRecord: string,
        eventType: string,
        recipient: { email?: string; phone?: string; name: string },
        subject: string,
        message: string
    ): IntegrationResponse {
        const dedupKey = channel + ':' + sourceRecord + ':' + eventType;
        if (IntegrationClient.checkAndRecordDeduplication(dedupKey, 300)) {
            return {
                success: true,
                status: 'SUCCESS',
                httpStatus: 200,
                data: { message: 'Duplicate notification suppressed', dedupKey: dedupKey },
                correlationId: IntegrationClient.generateCorrelationId(),
                durationMs: 0,
                retriesAttempted: 0,
            };
        }

        let endpoint = '';
        let extSystem = '';
        let headers: Record<string, string> = { 'Content-Type': 'application/json' };

        if (channel === 'email') {
            endpoint = (typeof gs !== 'undefined' && gs.getProperty)
                ? gs.getProperty('x_2120492_athidhi.integration.email.endpoint', 'https://api.sendgrid.com/v3/mail/send')
                : 'https://api.sendgrid.com/v3/mail/send';
            extSystem = 'sendgrid';
            headers['Authorization'] = 'Bearer [CONFIGURED_KEY]';
        } else if (channel === 'sms') {
            endpoint = (typeof gs !== 'undefined' && gs.getProperty)
                ? gs.getProperty('x_2120492_athidhi.integration.sms.endpoint', 'https://api.twilio.com/2010-04-01/Accounts')
                : 'https://api.twilio.com/2010-04-01/Accounts';
            extSystem = 'twilio';
            headers['Authorization'] = 'Basic [CONFIGURED_TOKEN]';
        } else {
            endpoint = (typeof gs !== 'undefined' && gs.getProperty)
                ? gs.getProperty('x_2120492_athidhi.integration.whatsapp.endpoint', 'https://graph.facebook.com/v18.0')
                : 'https://graph.facebook.com/v18.0';
            extSystem = 'meta_whatsapp';
            headers['Authorization'] = 'Bearer [CONFIGURED_TOKEN]';
        }

        return IntegrationClient.execute({
            integrationName: channel,
            operation: 'send_' + eventType,
            endpoint: endpoint,
            httpMethod: 'POST',
            externalSystem: extSystem,
            headers: headers,
            body: {
                recipient_name: recipient.name,
                destination: channel === 'email' ? recipient.email : recipient.phone,
                subject: subject,
                content: message,
            },
            sourceRecord: sourceRecord,
            isIdempotent: false,
        });
    }

    public static handleReservation(params: ReservationNotificationParams): IntegrationResponse {
        const subject = 'Reservation ' + params.reservationId + ' Update: ' + params.type.replace(/_/g, ' ').toUpperCase();
        const msg = 'Dear ' + params.guestName + ', your booking ' + params.reservationId +
            ' for ' + params.roomType + ' from ' + params.checkInDate + ' to ' + params.checkOutDate +
            ' has status update: ' + params.type;
        return this.sendNotification('email', params.reservationId, params.type, {
            email: params.guestEmail,
            phone: params.guestPhone,
            name: params.guestName,
        }, subject, msg);
    }

    public static handleServiceRequest(params: ServiceRequestNotificationParams): IntegrationResponse {
        const subject = 'Service Request ' + params.requestId + ': ' + params.type.toUpperCase();
        const msg = 'Service request for room ' + params.roomNumber + ' (' + params.category + ') is now ' + params.type;
        return this.sendNotification('sms', params.requestId, params.type, {
            name: params.guestName,
        }, subject, msg);
    }

    public static handleFoodOrder(params: FoodOrderNotificationParams): IntegrationResponse {
        const subject = 'Food Order ' + params.orderId + ': ' + params.type.toUpperCase();
        const msg = 'Food order ' + params.orderId + ' for Room ' + params.roomNumber + ' (' + params.itemCount + ' items) is ' + params.type;
        return this.sendNotification('sms', params.orderId, params.type, {
            name: 'Room ' + params.roomNumber,
        }, subject, msg);
    }

    public static handleHousekeeping(params: HousekeepingNotificationParams): IntegrationResponse {
        const subject = 'Housekeeping Room ' + params.roomNumber + ': ' + params.type.toUpperCase();
        const msg = 'Housekeeping task ' + params.taskId + ' for Room ' + params.roomNumber + ' updated to ' + params.type;
        return this.sendNotification('sms', params.taskId, params.type, {
            name: 'Housekeeping Staff',
        }, subject, msg);
    }

    public static handleMaintenance(params: MaintenanceNotificationParams): IntegrationResponse {
        const subject = 'Maintenance Request ' + params.requestId + ' [' + params.priority + ']: ' + params.type.toUpperCase();
        const msg = 'Maintenance in Room ' + params.roomNumber + ' (' + params.issue + ') updated to ' + params.type;
        return this.sendNotification('email', params.requestId, params.type, {
            name: 'Maintenance Lead',
        }, subject, msg);
    }

    public static handleIncident(params: IncidentNotificationParams): IntegrationResponse {
        const subject = 'CRITICAL INCIDENT ' + params.incidentId + ' [' + params.priority + ']: ' + params.category;
        const msg = 'Escalation Alert: ' + params.summary;
        return this.sendNotification('email', params.incidentId, params.type, {
            name: 'Operations Manager',
        }, subject, msg);
    }

    public static handleAiOperationalSummary(summary: string, priority: string): IntegrationResponse {
        const subject = 'AI Operational Intelligence Briefing [' + priority.toUpperCase() + ']';
        const msg = 'Automated Operations Summary: ' + summary;
        return this.sendNotification('email', 'ai_summary_' + Date.now(), 'operational_briefing', {
            name: 'General Manager',
        }, subject, msg);
    }
}

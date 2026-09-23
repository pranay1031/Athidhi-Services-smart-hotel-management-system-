import { IntegrationClient } from './framework/integration_client';
import { IntegrationResponse } from './framework/types';

declare const gs: any;

export interface CalendarEventParams {
    calendarType: 'hotel_event' | 'maintenance' | 'staff_schedule' | 'guest_appointment' | 'manager_event';
    title: string;
    description: string;
    startTime: string;
    endTime: string;
    location?: string;
    sourceRecordTable: string;
    sourceRecordSysId: string;
    isPrivateStaff?: boolean;
}

export class CalendarIntegration {
    /**
     * Create or sync calendar event with duplicate prevention & external ID mapping
     */
    public static createCalendarEvent(params: CalendarEventParams): IntegrationResponse {
        const dedupKey = 'calendar:' + params.sourceRecordTable + ':' + params.sourceRecordSysId + ':' + params.calendarType;
        if (IntegrationClient.checkAndRecordDeduplication(dedupKey, 600)) {
            return {
                success: true,
                status: 'SUCCESS',
                httpStatus: 200,
                data: {
                    externalEventId: 'ext_cal_duplicate_prevented',
                    status: 'already_synced',
                },
                correlationId: IntegrationClient.generateCorrelationId(),
                durationMs: 0,
                retriesAttempted: 0,
            };
        }

        const provider = (typeof gs !== 'undefined' && gs.getProperty)
            ? gs.getProperty('x_2120492_athidhi.integration.calendar.provider', 'google')
            : 'google';

        let endpoint = 'https://www.googleapis.com/calendar/v3';
        let extSystem = 'google_calendar';

        if (provider === 'outlook') {
            endpoint = 'https://graph.microsoft.com/v1.0';
            extSystem = 'ms_outlook_calendar';
        }

        const externalEventId = 'evt_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

        const response = IntegrationClient.execute({
            integrationName: 'calendar',
            operation: 'create_calendar_event',
            endpoint: endpoint,
            httpMethod: 'POST',
            externalSystem: extSystem,
            headers: {
                'Authorization': 'Bearer [CONFIGURED_CALENDAR_TOKEN]',
                'Content-Type': 'application/json',
            },
            body: {
                title: params.title,
                description: params.description,
                start_time: params.startTime,
                end_time: params.endTime,
                location: params.location || 'Athidhi Grand Hotel',
                is_private_staff: !!params.isPrivateStaff,
                external_id: externalEventId,
            },
            sourceRecord: params.sourceRecordTable + ':' + params.sourceRecordSysId,
            isIdempotent: true,
        });

        if (response.success) {
            response.data = {
                externalEventId: externalEventId,
                provider: provider,
                calendarType: params.calendarType,
            };
        }

        return response;
    }

    /**
     * Check if user is authorized to read calendar event
     */
    public static canAccessCalendarEvent(isPrivateStaff: boolean, userRole: string): boolean {
        if (!isPrivateStaff) return true;
        return userRole === 'manager' || userRole === 'admin' || userRole === 'staff';
    }
}

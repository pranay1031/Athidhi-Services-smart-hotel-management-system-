import { Table, StringColumn, BooleanColumn, IntegerColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core';

export const x_2120492_athidhi_ai_interaction_log = Table({
    name: 'x_2120492_athidhi_ai_interaction_log',
    label: 'AI Interaction Log',
    display: 'log_number',
    autoNumber: {
        prefix: 'AIL',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        log_number: StringColumn({
            label: 'Log Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        user: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
        }),
        user_role: StringColumn({
            label: 'User Role',
            maxLength: 50,
        }),
        request_category: StringColumn({
            label: 'Request Category',
            maxLength: 50,
            choices: {
                faq: { label: 'FAQ / Information' },
                stay: { label: 'Guest Stay' },
                reservation: { label: 'Reservation' },
                dining: { label: 'Dining & Room Service' },
                housekeeping: { label: 'Housekeeping' },
                maintenance: { label: 'Maintenance' },
                service_catalog: { label: 'Service Catalog' },
                operations: { label: 'Hotel Operations' },
                security_violation: { label: 'Security Violation' },
                unknown: { label: 'Unknown' },
            },
            dropdown: 'dropdown_without_none',
        }),
        requested_action: StringColumn({
            label: 'Requested Action',
            maxLength: 100,
        }),
        action_result: StringColumn({
            label: 'Action Result',
            maxLength: 50,
            choices: {
                SUCCESS: { label: 'Success' },
                INFORMATION: { label: 'Information' },
                ACTION_REQUIRED: { label: 'Action Required' },
                UNAUTHORIZED: { label: 'Unauthorized' },
                VALIDATION_ERROR: { label: 'Validation Error' },
                UNSUPPORTED_ACTION: { label: 'Unsupported Action' },
                PROVIDER_ERROR: { label: 'Provider Error' },
                TIMEOUT: { label: 'Timeout' },
                RATE_LIMITED: { label: 'Rate Limited' },
                SYSTEM_ERROR: { label: 'System Error' },
            },
            dropdown: 'dropdown_without_none',
        }),
        success: BooleanColumn({
            label: 'Success',
            default: true,
        }),
        execution_duration_ms: IntegerColumn({
            label: 'Execution Duration (ms)',
            default: 0,
        }),
        provider: StringColumn({
            label: 'AI Provider',
            maxLength: 50,
            default: 'Google Gemini',
        }),
        model: StringColumn({
            label: 'Model Identifier',
            maxLength: 100,
        }),
        error_category: StringColumn({
            label: 'Error Category',
            maxLength: 100,
        }),
        summary: StringColumn({
            label: 'Sanitized Interaction Summary',
            maxLength: 1000,
        }),
        logged_at: DateTimeColumn({
            label: 'Logged At',
            default: 'javascript:gs.nowDateTime();',
        }),
    },
});

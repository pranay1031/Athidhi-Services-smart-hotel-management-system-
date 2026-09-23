import { Table, StringColumn, IntegerColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core';

export const x_2120492_athidhi_integration_log = Table({
    name: 'x_2120492_athidhi_integration_log',
    label: 'Integration Audit Log',
    display: 'log_number',
    autoNumber: {
        prefix: 'INT',
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
        integration_name: StringColumn({
            label: 'Integration Name',
            maxLength: 50,
            choices: {
                email: { label: 'Email Communication' },
                sms: { label: 'SMS Messaging' },
                whatsapp: { label: 'WhatsApp Messaging' },
                calendar: { label: 'Calendar Scheduling' },
                maps: { label: 'Maps & Location' },
                teams: { label: 'Microsoft Teams' },
                slack: { label: 'Slack Collaboration' },
                workspace: { label: 'Workspace Documents' },
                webhook: { label: 'Generic Webhook' },
                rest_service: { label: 'REST Service' },
            },
            dropdown: 'dropdown_without_none',
            mandatory: true,
        }),
        operation: StringColumn({
            label: 'Operation',
            maxLength: 100,
            mandatory: true,
        }),
        external_system: StringColumn({
            label: 'External System',
            maxLength: 100,
        }),
        endpoint: StringColumn({
            label: 'Endpoint',
            maxLength: 500,
        }),
        request_payload_redacted: StringColumn({
            label: 'Request Payload (Redacted)',
            maxLength: 4000,
        }),
        response_status: IntegerColumn({
            label: 'HTTP Response Status',
            default: 0,
        }),
        duration_ms: IntegerColumn({
            label: 'Duration (ms)',
            default: 0,
        }),
        correlation_id: StringColumn({
            label: 'Correlation ID',
            maxLength: 100,
            mandatory: true,
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 50,
            choices: {
                SUCCESS: { label: 'Success' },
                TIMEOUT: { label: 'Timeout' },
                RATE_LIMITED: { label: 'Rate Limited' },
                AUTHENTICATION_ERROR: { label: 'Authentication Error' },
                AUTHORIZATION_ERROR: { label: 'Authorization Error' },
                VALIDATION_ERROR: { label: 'Validation Error' },
                NOT_FOUND: { label: 'Not Found' },
                PROVIDER_ERROR: { label: 'Provider Error' },
                NETWORK_ERROR: { label: 'Network Error' },
                CONFIGURATION_ERROR: { label: 'Configuration Error' },
            },
            dropdown: 'dropdown_without_none',
            mandatory: true,
        }),
        error_category: StringColumn({
            label: 'Error Category',
            maxLength: 100,
        }),
        error_message: StringColumn({
            label: 'Error Message',
            maxLength: 1000,
        }),
        source_record: StringColumn({
            label: 'Source Record',
            maxLength: 120,
        }),
        requesting_user: ReferenceColumn({
            label: 'Requesting User',
            referenceTable: 'sys_user',
        }),
        logged_at: DateTimeColumn({
            label: 'Logged At',
            default: 'javascript:gs.nowDateTime();',
        }),
    },
});

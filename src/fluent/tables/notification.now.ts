import { Table, StringColumn, DateTimeColumn, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_notification = Table({
    name: 'x_2120492_athidhi_notification',
    label: 'Notification',
    display: 'title',
    autoNumber: {
        prefix: 'NTF',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        notification_number: StringColumn({
            label: 'Notification Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        recipient: ReferenceColumn({
            label: 'Recipient',
            referenceTable: 'sys_user',
        }),
        recipient_role: StringColumn({
            label: 'Recipient Role',
            maxLength: 50,
            choices: {
                guest: { label: 'Guest' },
                manager: { label: 'Manager' },
                admin: { label: 'Admin' },
                receptionist: { label: 'Receptionist / Front Desk' },
                housekeeping: { label: 'Housekeeping' },
                restaurant: { label: 'Restaurant / Kitchen' },
                maintenance: { label: 'Maintenance' },
                all: { label: 'All Roles' },
            },
        }),
        notification_type: StringColumn({
            label: 'Notification Type',
            maxLength: 50,
            choices: {
                service_request: { label: 'Service Request' },
                reservation: { label: 'Reservation' },
                food_order: { label: 'Food Order' },
                incident: { label: 'Incident' },
                housekeeping: { label: 'Housekeeping' },
                maintenance: { label: 'Maintenance' },
                inventory: { label: 'Inventory' },
                system: { label: 'System Notice' },
            },
        }),
        severity: StringColumn({
            label: 'Severity',
            maxLength: 20,
            choices: {
                info: { label: 'Info' },
                warning: { label: 'Warning' },
                critical: { label: 'Critical' },
            },
        }),
        title: StringColumn({
            label: 'Title',
            maxLength: 100,
            mandatory: true,
        }),
        message: StringColumn({
            label: 'Message',
            maxLength: 500,
            mandatory: true,
        }),
        source_table: StringColumn({
            label: 'Source Table',
            maxLength: 80,
        }),
        source_sys_id: StringColumn({
            label: 'Source Sys ID',
            maxLength: 32,
        }),
        action_url: StringColumn({
            label: 'Action URL',
            maxLength: 255,
        }),
        is_read: BooleanColumn({
            label: 'Is Read',
            default: false,
        }),
        read_at: DateTimeColumn({
            label: 'Read At',
        }),
        created_at: DateTimeColumn({
            label: 'Created At',
        }),
        expires_at: DateTimeColumn({
            label: 'Expires At',
        }),
        deduplication_key: StringColumn({
            label: 'Deduplication Key',
            maxLength: 100,
        }),
    },
})

import { Table, StringColumn, DateTimeColumn, ReferenceColumn, DecimalColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_service_request = Table({
    name: 'x_2120492_athidhi_service_request',
    label: 'Service Request',
    display: 'request_number',
    autoNumber: {
        prefix: 'SRV',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        request_number: StringColumn({
            label: 'Request Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        guest: ReferenceColumn({
            label: 'Guest',
            referenceTable: 'x_2120492_athidhi_guest',
            mandatory: true,
        }),
        stay: ReferenceColumn({
            label: 'Stay',
            referenceTable: 'x_2120492_athidhi_stay',
        }),
        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_2120492_athidhi_room',
        }),
        request_type: StringColumn({
            label: 'Request Type',
            maxLength: 50,
            mandatory: true,
            choices: {
                housekeeping: { label: 'Housekeeping' },
                maintenance: { label: 'Maintenance' },
                room_service: { label: 'Room Service' },
                food_and_beverage: { label: 'Food & Beverage' },
                concierge: { label: 'Concierge' },
                luggage: { label: 'Luggage' },
                wake_up_call: { label: 'Wake Up Call' },
                transportation: { label: 'Transportation' },
                other: { label: 'Other' },
            },
            dropdown: 'dropdown_without_none',
        }),
        priority: StringColumn({
            label: 'Priority',
            maxLength: 20,
            default: 'medium',
            choices: {
                low: { label: 'Low' },
                medium: { label: 'Medium' },
                high: { label: 'High' },
                critical: { label: 'Critical' },
            },
            dropdown: 'dropdown_without_none',
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000,
            mandatory: true,
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 40,
            default: 'new',
            choices: {
                new: { label: 'New' },
                accepted: { label: 'Accepted' },
                in_progress: { label: 'In Progress' },
                on_hold: { label: 'On Hold' },
                completed: { label: 'Completed' },
                cancelled: { label: 'Cancelled' },
            },
            dropdown: 'dropdown_without_none',
        }),
        requested_at: DateTimeColumn({
            label: 'Requested At',
        }),
        due_at: DateTimeColumn({
            label: 'Due At',
        }),
        assigned_group: ReferenceColumn({
            label: 'Assigned Group',
            referenceTable: 'sys_user_group',
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
        }),
        completed_at: DateTimeColumn({
            label: 'Completed At',
        }),
        resolution_notes: StringColumn({
            label: 'Resolution Notes',
            maxLength: 1000,
        }),
        catalog_item: ReferenceColumn({
            label: 'Catalog Item',
            referenceTable: 'x_2120492_athidhi_service_catalog_item',
        }),
        department: ReferenceColumn({
            label: 'Department',
            referenceTable: 'x_2120492_athidhi_department',
        }),
        charge: DecimalColumn({
            label: 'Charge',
            scale: 2,
            default: 0.0,
        }),
    },
})

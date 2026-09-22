import { Table, StringColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_maintenance_request = Table({
    name: 'x_2120492_athidhi_maintenance_request',
    label: 'Maintenance Request',
    display: 'request_number',
    autoNumber: {
        prefix: 'MNT',
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
        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_2120492_athidhi_room',
            mandatory: true,
        }),
        service_request: ReferenceColumn({
            label: 'Service Request',
            referenceTable: 'x_2120492_athidhi_service_request',
        }),
        category: StringColumn({
            label: 'Category',
            maxLength: 50,
            mandatory: true,
            choices: {
                plumbing: { label: 'Plumbing' },
                electrical: { label: 'Electrical' },
                hvac: { label: 'HVAC' },
                furniture: { label: 'Furniture' },
                appliance: { label: 'Appliance' },
                network: { label: 'Network' },
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
                assigned: { label: 'Assigned' },
                in_progress: { label: 'In Progress' },
                waiting: { label: 'Waiting' },
                resolved: { label: 'Resolved' },
                cancelled: { label: 'Cancelled' },
            },
            dropdown: 'dropdown_without_none',
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
        }),
        reported_at: DateTimeColumn({
            label: 'Reported At',
        }),
        resolved_at: DateTimeColumn({
            label: 'Resolved At',
        }),
        resolution_notes: StringColumn({
            label: 'Resolution Notes',
            maxLength: 1000,
        }),
    },
})

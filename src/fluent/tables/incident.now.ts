import { Table, StringColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_incident = Table({
    name: 'x_2120492_athidhi_incident',
    label: 'Hotel Incident',
    display: 'incident_number',
    autoNumber: {
        prefix: 'INC',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        incident_number: StringColumn({
            label: 'Incident Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        guest: ReferenceColumn({
            label: 'Guest',
            referenceTable: 'x_2120492_athidhi_guest',
        }),
        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_2120492_athidhi_room',
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
                guest_issue: { label: 'Guest Issue' },
                room_issue: { label: 'Room Issue' },
                safety: { label: 'Safety' },
                security: { label: 'Security' },
                technical: { label: 'Technical' },
                facility: { label: 'Facility' },
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
        short_description: StringColumn({
            label: 'Short Description',
            maxLength: 160,
            mandatory: true,
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000,
        }),
        state: StringColumn({
            label: 'State',
            maxLength: 40,
            default: 'new',
            choices: {
                new: { label: 'New' },
                assigned: { label: 'Assigned' },
                in_progress: { label: 'In Progress' },
                on_hold: { label: 'On Hold' },
                resolved: { label: 'Resolved' },
                closed: { label: 'Closed' },
                cancelled: { label: 'Cancelled' },
            },
            dropdown: 'dropdown_without_none',
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
        }),
        opened_at: DateTimeColumn({
            label: 'Opened At',
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

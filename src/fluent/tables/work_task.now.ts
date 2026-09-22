import { Table, StringColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_work_task = Table({
    name: 'x_2120492_athidhi_work_task',
    label: 'Hotel Work Task',
    display: 'task_number',
    autoNumber: {
        prefix: 'TSK',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        task_number: StringColumn({
            label: 'Task Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        service_request: ReferenceColumn({
            label: 'Service Request',
            referenceTable: 'x_2120492_athidhi_service_request',
            mandatory: true,
        }),
        task_type: StringColumn({
            label: 'Task Type',
            maxLength: 50,
            mandatory: true,
            choices: {
                housekeeping: { label: 'Housekeeping' },
                maintenance: { label: 'Maintenance' },
                restaurant: { label: 'Restaurant' },
                concierge: { label: 'Concierge' },
                front_desk: { label: 'Front Desk' },
                other: { label: 'Other' },
            },
            dropdown: 'dropdown_without_none',
        }),
        assignment_group: ReferenceColumn({
            label: 'Assignment Group',
            referenceTable: 'sys_user_group',
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
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
        state: StringColumn({
            label: 'State',
            maxLength: 40,
            default: 'open',
            choices: {
                open: { label: 'Open' },
                assigned: { label: 'Assigned' },
                in_progress: { label: 'In Progress' },
                blocked: { label: 'Blocked' },
                completed: { label: 'Completed' },
                cancelled: { label: 'Cancelled' },
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
        opened_at: DateTimeColumn({
            label: 'Opened At',
        }),
        started_at: DateTimeColumn({
            label: 'Started At',
        }),
        completed_at: DateTimeColumn({
            label: 'Completed At',
        }),
        resolution_notes: StringColumn({
            label: 'Resolution Notes',
            maxLength: 1000,
        }),
    },
})

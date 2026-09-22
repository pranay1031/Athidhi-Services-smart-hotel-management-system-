import { Table, StringColumn, BooleanColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_housekeeping_task = Table({
    name: 'x_2120492_athidhi_housekeeping_task',
    label: 'Housekeeping Task',
    display: 'task_number',
    autoNumber: {
        prefix: 'HKT',
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
        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_2120492_athidhi_room',
            mandatory: true,
        }),
        stay: ReferenceColumn({
            label: 'Stay',
            referenceTable: 'x_2120492_athidhi_stay',
        }),
        task_type: StringColumn({
            label: 'Task Type',
            maxLength: 50,
            default: 'standard_cleaning',
            choices: {
                standard_cleaning: { label: 'Standard Cleaning' },
                deep_cleaning: { label: 'Deep Cleaning' },
                check_in_preparation: { label: 'Check-In Preparation' },
                check_out_cleaning: { label: 'Check-Out Cleaning' },
                turn_down: { label: 'Turn Down' },
                inspection: { label: 'Inspection' },
                maintenance_followup: { label: 'Maintenance Follow-up' },
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
        status: StringColumn({
            label: 'Status',
            maxLength: 40,
            default: 'pending',
            choices: {
                pending: { label: 'Pending' },
                assigned: { label: 'Assigned' },
                in_progress: { label: 'In Progress' },
                completed: { label: 'Completed' },
                cancelled: { label: 'Cancelled' },
            },
            dropdown: 'dropdown_without_none',
        }),
        assigned_to: ReferenceColumn({
            label: 'Assigned To',
            referenceTable: 'sys_user',
        }),
        scheduled_start: DateTimeColumn({
            label: 'Scheduled Start',
        }),
        completed_at: DateTimeColumn({
            label: 'Completed At',
        }),
        inspection_required: BooleanColumn({
            label: 'Inspection Required',
            default: false,
        }),
        inspection_status: StringColumn({
            label: 'Inspection Status',
            maxLength: 40,
            default: 'not_required',
            choices: {
                not_required: { label: 'Not Required' },
                pending: { label: 'Pending' },
                passed: { label: 'Passed' },
                failed: { label: 'Failed' },
            },
            dropdown: 'dropdown_without_none',
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 1000,
        }),
    },
})

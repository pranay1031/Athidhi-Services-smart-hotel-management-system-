import { Table, StringColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_staff_profile = Table({
    name: 'x_2120492_athidhi_staff_profile',
    label: 'Hotel Staff Profile',
    display: 'employee_number',
    autoNumber: {
        prefix: 'STF',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        employee: ReferenceColumn({
            label: 'Employee',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        employee_number: StringColumn({
            label: 'Employee Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        department: ReferenceColumn({
            label: 'Department',
            referenceTable: 'x_2120492_athidhi_department',
            mandatory: true,
        }),
        job_title: StringColumn({
            label: 'Job Title',
            maxLength: 100,
        }),
        phone: StringColumn({
            label: 'Phone',
            maxLength: 40,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 1000,
        }),
    },
})

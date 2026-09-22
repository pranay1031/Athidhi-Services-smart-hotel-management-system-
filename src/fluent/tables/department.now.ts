import { Table, StringColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_department = Table({
    name: 'x_2120492_athidhi_department',
    label: 'Hotel Department',
    display: 'name',
    autoNumber: {
        prefix: 'DEP',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        code: StringColumn({
            label: 'Code',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        name: StringColumn({
            label: 'Name',
            maxLength: 100,
            mandatory: true,
            choices: {
                front_desk: { label: 'Front Desk' },
                housekeeping: { label: 'Housekeeping' },
                maintenance: { label: 'Maintenance' },
                restaurant: { label: 'Restaurant' },
                management: { label: 'Management' },
                concierge: { label: 'Concierge' },
                it: { label: 'IT' },
            },
            dropdown: 'dropdown_without_none',
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000,
        }),
        manager: ReferenceColumn({
            label: 'Manager',
            referenceTable: 'sys_user',
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})

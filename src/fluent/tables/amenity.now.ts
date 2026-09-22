import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_amenity = Table({
    name: 'x_2120492_athidhi_amenity',
    label: 'Amenity',
    display: 'name',
    autoNumber: {
        prefix: 'AMN',
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
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 1000,
        }),
        category: StringColumn({
            label: 'Category',
            maxLength: 50,
            mandatory: true,
            choices: {
                room: { label: 'Room' },
                bathroom: { label: 'Bathroom' },
                food: { label: 'Food' },
                recreation: { label: 'Recreation' },
                business: { label: 'Business' },
                accessibility: { label: 'Accessibility' },
                other: { label: 'Other' },
            },
            dropdown: 'dropdown_without_none',
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})

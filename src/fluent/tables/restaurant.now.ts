import { Table, StringColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_restaurant = Table({
    name: 'x_2120492_athidhi_restaurant',
    label: 'Restaurant',
    display: 'name',
    autoNumber: {
        prefix: 'RST',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        restaurant_number: StringColumn({
            label: 'Restaurant Number',
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
            maxLength: 500,
        }),
        location: StringColumn({
            label: 'Location',
            maxLength: 100,
        }),
        opening_time: StringColumn({
            label: 'Opening Time',
            maxLength: 20,
        }),
        closing_time: StringColumn({
            label: 'Closing Time',
            maxLength: 20,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})

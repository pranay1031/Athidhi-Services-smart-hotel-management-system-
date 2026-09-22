import { Table, StringColumn, IntegerColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_room_type = Table({
    name: 'x_2120492_athidhi_room_type',
    label: 'Room Type',
    display: 'name',
    autoNumber: {
        prefix: 'RTY',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        code: StringColumn({
            label: 'Code',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
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
        bed_type: StringColumn({
            label: 'Bed Type',
            maxLength: 50,
            choices: {
                single: { label: 'Single' },
                double: { label: 'Double' },
                queen: { label: 'Queen' },
                king: { label: 'King' },
                suite: { label: 'Suite' },
            },
            dropdown: 'dropdown_with_none',
        }),
        capacity: IntegerColumn({
            label: 'Capacity',
            default: 2,
            mandatory: true,
        }),
        base_price: DecimalColumn({
            label: 'Base Price',
            scale: 2,
            mandatory: true,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
        amenities: StringColumn({
            label: 'Amenities',
            maxLength: 1000,
        }),
    },
})

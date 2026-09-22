import { Table, StringColumn, BooleanColumn, DateColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_menu = Table({
    name: 'x_2120492_athidhi_menu',
    label: 'Menu',
    display: 'name',
    autoNumber: {
        prefix: 'MNU',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        menu_number: StringColumn({
            label: 'Menu Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        restaurant: ReferenceColumn({
            label: 'Restaurant',
            referenceTable: 'x_2120492_athidhi_restaurant',
            mandatory: true,
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
        menu_type: StringColumn({
            label: 'Menu Type',
            maxLength: 50,
            mandatory: true,
            choices: {
                breakfast: { label: 'Breakfast' },
                lunch: { label: 'Lunch' },
                dinner: { label: 'Dinner' },
                all_day: { label: 'All Day' },
                room_service: { label: 'Room Service' },
                special: { label: 'Special' },
            },
            dropdown: 'dropdown_without_none',
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
        valid_from: DateColumn({
            label: 'Valid From',
        }),
        valid_to: DateColumn({
            label: 'Valid To',
        }),
    },
})

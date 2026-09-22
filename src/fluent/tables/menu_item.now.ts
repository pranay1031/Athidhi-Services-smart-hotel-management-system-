import { Table, StringColumn, IntegerColumn, DecimalColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_menu_item = Table({
    name: 'x_2120492_athidhi_menu_item',
    label: 'Menu Item',
    display: 'name',
    autoNumber: {
        prefix: 'ITM',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        item_number: StringColumn({
            label: 'Item Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        menu: ReferenceColumn({
            label: 'Menu',
            referenceTable: 'x_2120492_athidhi_menu',
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
        category: StringColumn({
            label: 'Category',
            maxLength: 50,
            mandatory: true,
            choices: {
                starter: { label: 'Starter' },
                main_course: { label: 'Main Course' },
                side: { label: 'Side' },
                dessert: { label: 'Dessert' },
                beverage: { label: 'Beverage' },
                snack: { label: 'Snack' },
            },
            dropdown: 'dropdown_without_none',
        }),
        price: DecimalColumn({
            label: 'Price',
            scale: 2,
            mandatory: true,
            default: 0.0,
        }),
        dietary_type: StringColumn({
            label: 'Dietary Type',
            maxLength: 50,
            choices: {
                vegetarian: { label: 'Vegetarian' },
                non_vegetarian: { label: 'Non Vegetarian' },
                vegan: { label: 'Vegan' },
                gluten_free: { label: 'Gluten Free' },
                jain: { label: 'Jain' },
                other: { label: 'Other' },
            },
            dropdown: 'dropdown_without_none',
        }),
        preparation_time: IntegerColumn({
            label: 'Preparation Time (mins)',
        }),
        available: BooleanColumn({
            label: 'Available',
            default: true,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})

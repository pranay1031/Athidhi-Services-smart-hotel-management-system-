import { Table, StringColumn, IntegerColumn, DecimalColumn, BooleanColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_inventory_item = Table({
    name: 'x_2120492_athidhi_inventory_item',
    label: 'Inventory Item',
    display: 'name',
    autoNumber: {
        prefix: 'INV',
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
        name: StringColumn({
            label: 'Name',
            maxLength: 100,
            mandatory: true,
        }),
        category: StringColumn({
            label: 'Category',
            maxLength: 50,
            mandatory: true,
            choices: {
                food: { label: 'Food' },
                beverage: { label: 'Beverage' },
                linen: { label: 'Linen' },
                bathroom: { label: 'Bathroom' },
                cleaning: { label: 'Cleaning' },
                minibar: { label: 'Minibar' },
                maintenance: { label: 'Maintenance' },
                other: { label: 'Other' },
            },
            dropdown: 'dropdown_without_none',
        }),
        unit: StringColumn({
            label: 'Unit',
            maxLength: 30,
            mandatory: true,
        }),
        current_quantity: IntegerColumn({
            label: 'Current Quantity',
            default: 0,
        }),
        minimum_quantity: IntegerColumn({
            label: 'Minimum Quantity',
            default: 0,
        }),
        reorder_quantity: IntegerColumn({
            label: 'Reorder Quantity',
            default: 0,
        }),
        unit_cost: DecimalColumn({
            label: 'Unit Cost',
            scale: 2,
            default: 0.0,
        }),
        storage_location: StringColumn({
            label: 'Storage Location',
            maxLength: 100,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})

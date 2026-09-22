import { Table, StringColumn, IntegerColumn, DecimalColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_food_order_item = Table({
    name: 'x_2120492_athidhi_food_order_item',
    label: 'Food Order Item',
    schema: {
        order: ReferenceColumn({
            label: 'Order',
            referenceTable: 'x_2120492_athidhi_food_order',
            mandatory: true,
        }),
        menu_item: ReferenceColumn({
            label: 'Menu Item',
            referenceTable: 'x_2120492_athidhi_menu_item',
            mandatory: true,
        }),
        quantity: IntegerColumn({
            label: 'Quantity',
            mandatory: true,
            default: 1,
        }),
        unit_price: DecimalColumn({
            label: 'Unit Price',
            scale: 2,
            mandatory: true,
            default: 0.0,
        }),
        total_price: DecimalColumn({
            label: 'Total Price',
            scale: 2,
            mandatory: true,
            default: 0.0,
        }),
        special_instructions: StringColumn({
            label: 'Special Instructions',
            maxLength: 300,
        }),
    },
})

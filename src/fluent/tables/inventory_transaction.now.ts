import { Table, StringColumn, IntegerColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_inventory_transaction = Table({
    name: 'x_2120492_athidhi_inventory_transaction',
    label: 'Inventory Transaction',
    display: 'transaction_number',
    autoNumber: {
        prefix: 'ITX',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        transaction_number: StringColumn({
            label: 'Transaction Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        inventory_item: ReferenceColumn({
            label: 'Inventory Item',
            referenceTable: 'x_2120492_athidhi_inventory_item',
            mandatory: true,
        }),
        transaction_type: StringColumn({
            label: 'Transaction Type',
            maxLength: 50,
            mandatory: true,
            choices: {
                stock_in: { label: 'Stock In' },
                stock_out: { label: 'Stock Out' },
                adjustment: { label: 'Adjustment' },
                transfer: { label: 'Transfer' },
                waste: { label: 'Waste' },
                return: { label: 'Return' },
            },
            dropdown: 'dropdown_without_none',
        }),
        quantity: IntegerColumn({
            label: 'Quantity',
            mandatory: true,
        }),
        reference_type: StringColumn({
            label: 'Reference Type',
            maxLength: 50,
        }),
        reference_number: StringColumn({
            label: 'Reference Number',
            maxLength: 50,
        }),
        performed_by: ReferenceColumn({
            label: 'Performed By',
            referenceTable: 'sys_user',
        }),
        transaction_date: DateTimeColumn({
            label: 'Transaction Date',
            default: 'javascript:gs.nowDateTime();',
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 500,
        }),
    },
})

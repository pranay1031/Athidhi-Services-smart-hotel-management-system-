import { Table, StringColumn, IntegerColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_inventory_reorder = Table({
    name: 'x_2120492_athidhi_inventory_reorder',
    label: 'Inventory Reorder',
    display: 'reorder_number',
    autoNumber: {
        prefix: 'RDR',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        reorder_number: StringColumn({
            label: 'Reorder Number',
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
        requested_quantity: IntegerColumn({
            label: 'Requested Quantity',
            mandatory: true,
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 50,
            default: 'requested',
            choices: {
                draft: { label: 'Draft' },
                requested: { label: 'Requested' },
                approved: { label: 'Approved' },
                ordered: { label: 'Ordered' },
                received: { label: 'Received' },
                cancelled: { label: 'Cancelled' },
            },
            dropdown: 'dropdown_without_none',
        }),
        requested_by: ReferenceColumn({
            label: 'Requested By',
            referenceTable: 'sys_user',
        }),
        requested_at: DateTimeColumn({
            label: 'Requested At',
            default: 'javascript:gs.nowDateTime();',
        }),
        approved_by: ReferenceColumn({
            label: 'Approved By',
            referenceTable: 'sys_user',
        }),
        approved_at: DateTimeColumn({
            label: 'Approved At',
        }),
        received_at: DateTimeColumn({
            label: 'Received At',
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 500,
        }),
    },
})

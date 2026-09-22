import { Table, StringColumn, IntegerColumn, DecimalColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_service_request_item = Table({
    name: 'x_2120492_athidhi_service_request_item',
    label: 'Service Request Item',
    schema: {
        request: ReferenceColumn({
            label: 'Service Request',
            referenceTable: 'x_2120492_athidhi_service_request',
            mandatory: true,
        }),
        catalog_item: ReferenceColumn({
            label: 'Catalog Item',
            referenceTable: 'x_2120492_athidhi_service_catalog_item',
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
            default: 0.0,
        }),
        total_price: DecimalColumn({
            label: 'Total Price',
            scale: 2,
            default: 0.0,
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 500,
        }),
    },
})

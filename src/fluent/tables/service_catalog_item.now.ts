import { Table, StringColumn, IntegerColumn, DecimalColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_service_catalog_item = Table({
    name: 'x_2120492_athidhi_service_catalog_item',
    label: 'Service Catalog Item',
    display: 'name',
    autoNumber: {
        prefix: 'CAT',
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
                housekeeping: { label: 'Housekeeping' },
                maintenance: { label: 'Maintenance' },
                concierge: { label: 'Concierge' },
                food_and_beverage: { label: 'Food & Beverage' },
                transportation: { label: 'Transportation' },
                guest_services: { label: 'Guest Services' },
                other: { label: 'Other' },
            },
            dropdown: 'dropdown_without_none',
        }),
        description: StringColumn({
            label: 'Description',
            maxLength: 500,
        }),
        department: ReferenceColumn({
            label: 'Department',
            referenceTable: 'x_2120492_athidhi_department',
        }),
        default_priority: StringColumn({
            label: 'Default Priority',
            maxLength: 20,
            default: 'medium',
            choices: {
                low: { label: 'Low' },
                medium: { label: 'Medium' },
                high: { label: 'High' },
                critical: { label: 'Critical' },
            },
            dropdown: 'dropdown_without_none',
        }),
        estimated_minutes: IntegerColumn({
            label: 'Estimated Minutes',
        }),
        chargeable: BooleanColumn({
            label: 'Chargeable',
            default: false,
        }),
        price: DecimalColumn({
            label: 'Price',
            scale: 2,
            default: 0.0,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})

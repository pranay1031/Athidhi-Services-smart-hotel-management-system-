import { Table, StringColumn, DecimalColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_food_order = Table({
    name: 'x_2120492_athidhi_food_order',
    label: 'Food Order',
    display: 'order_number',
    autoNumber: {
        prefix: 'FOD',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        order_number: StringColumn({
            label: 'Order Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        guest: ReferenceColumn({
            label: 'Guest',
            referenceTable: 'x_2120492_athidhi_guest',
            mandatory: true,
        }),
        stay: ReferenceColumn({
            label: 'Stay',
            referenceTable: 'x_2120492_athidhi_stay',
        }),
        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_2120492_athidhi_room',
        }),
        restaurant: ReferenceColumn({
            label: 'Restaurant',
            referenceTable: 'x_2120492_athidhi_restaurant',
            mandatory: true,
        }),
        order_type: StringColumn({
            label: 'Order Type',
            maxLength: 50,
            mandatory: true,
            choices: {
                dine_in: { label: 'Dine In' },
                room_service: { label: 'Room Service' },
                takeaway: { label: 'Takeaway' },
            },
            dropdown: 'dropdown_without_none',
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 50,
            default: 'new',
            choices: {
                new: { label: 'New' },
                accepted: { label: 'Accepted' },
                preparing: { label: 'Preparing' },
                ready: { label: 'Ready' },
                out_for_delivery: { label: 'Out for Delivery' },
                delivered: { label: 'Delivered' },
                cancelled: { label: 'Cancelled' },
            },
            dropdown: 'dropdown_without_none',
        }),
        priority: StringColumn({
            label: 'Priority',
            maxLength: 20,
            default: 'normal',
            choices: {
                normal: { label: 'Normal' },
                high: { label: 'High' },
                urgent: { label: 'Urgent' },
            },
            dropdown: 'dropdown_without_none',
        }),
        ordered_at: DateTimeColumn({
            label: 'Ordered At',
            default: 'javascript:gs.nowDateTime();',
        }),
        requested_delivery_time: DateTimeColumn({
            label: 'Requested Delivery Time',
        }),
        subtotal: DecimalColumn({
            label: 'Subtotal',
            scale: 2,
            default: 0.0,
        }),
        tax: DecimalColumn({
            label: 'Tax',
            scale: 2,
            default: 0.0,
        }),
        total: DecimalColumn({
            label: 'Total',
            scale: 2,
            default: 0.0,
        }),
        special_instructions: StringColumn({
            label: 'Special Instructions',
            maxLength: 500,
        }),
        service_request: ReferenceColumn({
            label: 'Service Request',
            referenceTable: 'x_2120492_athidhi_service_request',
        }),
    },
})

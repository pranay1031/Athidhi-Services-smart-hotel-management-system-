import { Table, StringColumn, IntegerColumn, DecimalColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_reservation = Table({
    name: 'x_2120492_athidhi_reservation',
    label: 'Reservation',
    display: 'reservation_number',
    autoNumber: {
        prefix: 'RES',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        reservation_number: StringColumn({
            label: 'Reservation Number',
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
        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_2120492_athidhi_room',
        }),
        room_type: ReferenceColumn({
            label: 'Room Type',
            referenceTable: 'x_2120492_athidhi_room_type',
            mandatory: true,
        }),
        check_in: DateTimeColumn({
            label: 'Check-In',
            mandatory: true,
        }),
        check_out: DateTimeColumn({
            label: 'Check-Out',
            mandatory: true,
        }),
        adults: IntegerColumn({
            label: 'Adults',
            default: 1,
            mandatory: true,
        }),
        children: IntegerColumn({
            label: 'Children',
            default: 0,
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 40,
            default: 'draft',
            choices: {
                draft: { label: 'Draft' },
                confirmed: { label: 'Confirmed' },
                checked_in: { label: 'Checked In' },
                checked_out: { label: 'Checked Out' },
                cancelled: { label: 'Cancelled' },
                no_show: { label: 'No Show' },
            },
            dropdown: 'dropdown_without_none',
        }),
        booking_source: StringColumn({
            label: 'Booking Source',
            maxLength: 50,
            default: 'direct',
            choices: {
                direct: { label: 'Direct' },
                website: { label: 'Website' },
                phone: { label: 'Phone' },
                walk_in: { label: 'Walk In' },
                travel_agency: { label: 'Travel Agency' },
                corporate: { label: 'Corporate' },
            },
            dropdown: 'dropdown_without_none',
        }),
        special_requests: StringColumn({
            label: 'Special Requests',
            maxLength: 1000,
        }),
        total_amount: DecimalColumn({
            label: 'Total Amount',
            scale: 2,
        }),
        payment_status: StringColumn({
            label: 'Payment Status',
            maxLength: 40,
            default: 'pending',
            choices: {
                pending: { label: 'Pending' },
                partially_paid: { label: 'Partially Paid' },
                paid: { label: 'Paid' },
                refunded: { label: 'Refunded' },
            },
            dropdown: 'dropdown_without_none',
        }),
        confirmation_date: DateTimeColumn({
            label: 'Confirmation Date',
        }),
    },
})

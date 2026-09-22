import { Table, StringColumn, DecimalColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_payment = Table({
    name: 'x_2120492_athidhi_payment',
    label: 'Payment',
    display: 'payment_number',
    autoNumber: {
        prefix: 'PAY',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        payment_number: StringColumn({
            label: 'Payment Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        reservation: ReferenceColumn({
            label: 'Reservation',
            referenceTable: 'x_2120492_athidhi_reservation',
            mandatory: true,
        }),
        amount: DecimalColumn({
            label: 'Amount',
            scale: 2,
            mandatory: true,
        }),
        payment_method: StringColumn({
            label: 'Payment Method',
            maxLength: 50,
            mandatory: true,
            choices: {
                cash: { label: 'Cash' },
                card: { label: 'Card' },
                upi: { label: 'UPI' },
                bank_transfer: { label: 'Bank Transfer' },
                online_gateway: { label: 'Online Gateway' },
            },
            dropdown: 'dropdown_without_none',
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 40,
            default: 'pending',
            choices: {
                pending: { label: 'Pending' },
                authorized: { label: 'Authorized' },
                paid: { label: 'Paid' },
                failed: { label: 'Failed' },
                refunded: { label: 'Refunded' },
                partially_refunded: { label: 'Partially Refunded' },
            },
            dropdown: 'dropdown_without_none',
        }),
        transaction_reference: StringColumn({
            label: 'Transaction Reference',
            maxLength: 100,
        }),
        payment_date: DateTimeColumn({
            label: 'Payment Date',
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 1000,
        }),
    },
})

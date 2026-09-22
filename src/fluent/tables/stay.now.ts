import { Table, StringColumn, IntegerColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_stay = Table({
    name: 'x_2120492_athidhi_stay',
    label: 'Guest Stay',
    display: 'stay_number',
    autoNumber: {
        prefix: 'STY',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        stay_number: StringColumn({
            label: 'Stay Number',
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
        guest: ReferenceColumn({
            label: 'Guest',
            referenceTable: 'x_2120492_athidhi_guest',
            mandatory: true,
        }),
        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_2120492_athidhi_room',
            mandatory: true,
        }),
        actual_check_in: DateTimeColumn({
            label: 'Actual Check-In',
        }),
        expected_check_out: DateTimeColumn({
            label: 'Expected Check-Out',
        }),
        actual_check_out: DateTimeColumn({
            label: 'Actual Check-Out',
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 40,
            default: 'scheduled',
            choices: {
                scheduled: { label: 'Scheduled' },
                checked_in: { label: 'Checked In' },
                checked_out: { label: 'Checked Out' },
                cancelled: { label: 'Cancelled' },
            },
            dropdown: 'dropdown_without_none',
        }),
        adults: IntegerColumn({
            label: 'Adults',
            default: 1,
        }),
        children: IntegerColumn({
            label: 'Children',
            default: 0,
        }),
        special_notes: StringColumn({
            label: 'Special Notes',
            maxLength: 1000,
        }),
    },
})

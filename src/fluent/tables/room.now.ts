import { Table, StringColumn, IntegerColumn, DecimalColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_room = Table({
    name: 'x_2120492_athidhi_room',
    label: 'Room',
    display: 'room_number',
    autoNumber: {
        prefix: 'RM',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        room_number: StringColumn({
            label: 'Room Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
        }),
        room_type: ReferenceColumn({
            label: 'Room Type',
            referenceTable: 'x_2120492_athidhi_room_type',
            mandatory: true,
        }),
        floor: IntegerColumn({
            label: 'Floor',
            default: 1,
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 40,
            default: 'available',
            choices: {
                available: { label: 'Available' },
                occupied: { label: 'Occupied' },
                reserved: { label: 'Reserved' },
                cleaning: { label: 'Cleaning' },
                maintenance: { label: 'Maintenance' },
                out_of_service: { label: 'Out of Service' },
            },
            dropdown: 'dropdown_without_none',
        }),
        housekeeping_status: StringColumn({
            label: 'Housekeeping Status',
            maxLength: 40,
            default: 'clean',
            choices: {
                clean: { label: 'Clean' },
                dirty: { label: 'Dirty' },
                in_progress: { label: 'In Progress' },
                inspected: { label: 'Inspected' },
            },
            dropdown: 'dropdown_without_none',
        }),
        occupancy_status: StringColumn({
            label: 'Occupancy Status',
            maxLength: 40,
            default: 'vacant',
            choices: {
                vacant: { label: 'Vacant' },
                occupied: { label: 'Occupied' },
            },
            dropdown: 'dropdown_without_none',
        }),
        base_price: DecimalColumn({
            label: 'Base Price',
            scale: 2,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 1000,
        }),
    },
})

import { Table, StringColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_room_amenity = Table({
    name: 'x_2120492_athidhi_room_amenity',
    label: 'Room Amenity',
    schema: {
        room: ReferenceColumn({
            label: 'Room',
            referenceTable: 'x_2120492_athidhi_room',
            mandatory: true,
        }),
        amenity: ReferenceColumn({
            label: 'Amenity',
            referenceTable: 'x_2120492_athidhi_amenity',
            mandatory: true,
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 500,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})

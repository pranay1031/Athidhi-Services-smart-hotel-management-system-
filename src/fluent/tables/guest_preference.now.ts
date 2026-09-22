import { Table, StringColumn, BooleanColumn, ReferenceColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_guest_preference = Table({
    name: 'x_2120492_athidhi_guest_preference',
    label: 'Guest Preference',
    display: 'preference_value',
    schema: {
        guest: ReferenceColumn({
            label: 'Guest',
            referenceTable: 'x_2120492_athidhi_guest',
            mandatory: true,
        }),
        preference_type: StringColumn({
            label: 'Preference Type',
            maxLength: 50,
            mandatory: true,
            choices: {
                room: { label: 'Room' },
                food: { label: 'Food' },
                beverage: { label: 'Beverage' },
                accessibility: { label: 'Accessibility' },
                communication: { label: 'Communication' },
                other: { label: 'Other' },
            },
            dropdown: 'dropdown_without_none',
        }),
        preference_value: StringColumn({
            label: 'Preference Value',
            maxLength: 255,
            mandatory: true,
        }),
        notes: StringColumn({
            label: 'Notes',
            maxLength: 1000,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})

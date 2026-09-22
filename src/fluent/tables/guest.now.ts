import { Table, StringColumn, BooleanColumn, DateColumn } from '@servicenow/sdk/core'

export const x_2120492_athidhi_guest = Table({
    name: 'x_2120492_athidhi_guest',
    label: 'Guest',
    display: 'last_name',
    autoNumber: {
        prefix: 'GST',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        guest_number: StringColumn({
            label: 'Guest Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        first_name: StringColumn({
            label: 'First Name',
            maxLength: 100,
            mandatory: true,
        }),
        last_name: StringColumn({
            label: 'Last Name',
            maxLength: 100,
            mandatory: true,
        }),
        email: StringColumn({
            label: 'Email',
            maxLength: 100,
        }),
        phone: StringColumn({
            label: 'Phone',
            maxLength: 40,
        }),
        date_of_birth: DateColumn({
            label: 'Date of Birth',
        }),
        address: StringColumn({
            label: 'Address',
            maxLength: 255,
        }),
        city: StringColumn({
            label: 'City',
            maxLength: 100,
        }),
        state: StringColumn({
            label: 'State / Province',
            maxLength: 100,
        }),
        country: StringColumn({
            label: 'Country',
            maxLength: 100,
        }),
        identification_type: StringColumn({
            label: 'Identification Type',
            maxLength: 50,
            choices: {
                passport: { label: 'Passport' },
                driving_license: { label: 'Driving License' },
                national_id: { label: 'National ID' },
                other: { label: 'Other' },
            },
            dropdown: 'dropdown_with_none',
        }),
        identification_number: StringColumn({
            label: 'Identification Number',
            maxLength: 100,
        }),
        nationality: StringColumn({
            label: 'Nationality',
            maxLength: 100,
        }),
        loyalty_tier: StringColumn({
            label: 'Loyalty Tier',
            maxLength: 50,
            default: 'standard',
            choices: {
                standard: { label: 'Standard' },
                silver: { label: 'Silver' },
                gold: { label: 'Gold' },
                platinum: { label: 'Platinum' },
            },
            dropdown: 'dropdown_without_none',
        }),
        preferences: StringColumn({
            label: 'Preferences',
            maxLength: 1000,
        }),
        active: BooleanColumn({
            label: 'Active',
            default: true,
        }),
    },
})

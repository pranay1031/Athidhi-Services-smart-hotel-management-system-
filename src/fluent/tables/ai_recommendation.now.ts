import { Table, StringColumn, DateTimeColumn, ReferenceColumn } from '@servicenow/sdk/core';

export const x_2120492_athidhi_ai_recommendation = Table({
    name: 'x_2120492_athidhi_ai_recommendation',
    label: 'AI Recommendation',
    display: 'recommendation_number',
    autoNumber: {
        prefix: 'REC',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        recommendation_number: StringColumn({
            label: 'Recommendation Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        audience: StringColumn({
            label: 'Audience',
            maxLength: 30,
            mandatory: true,
            default: 'guest',
            choices: {
                guest: { label: 'Guest' },
                staff: { label: 'Staff' },
                manager: { label: 'Manager' },
                all: { label: 'All' },
            },
            dropdown: 'dropdown_without_none',
        }),
        guest: ReferenceColumn({
            label: 'Target Guest',
            referenceTable: 'x_2120492_athidhi_guest',
        }),
        stay: ReferenceColumn({
            label: 'Associated Stay',
            referenceTable: 'x_2120492_athidhi_stay',
        }),
        recommendation_type: StringColumn({
            label: 'Recommendation Type',
            maxLength: 50,
            mandatory: true,
            choices: {
                dining: { label: 'Dining' },
                room_service: { label: 'Room Service' },
                amenity: { label: 'Amenity' },
                service_catalog: { label: 'Service Catalog' },
                housekeeping: { label: 'Housekeeping' },
                maintenance: { label: 'Maintenance' },
                inventory_reorder: { label: 'Inventory Reorder' },
                staff_allocation: { label: 'Staff Allocation' },
                other: { label: 'Other' },
            },
            dropdown: 'dropdown_without_none',
        }),
        target_table: StringColumn({
            label: 'Target Table',
            maxLength: 80,
        }),
        target_record: StringColumn({
            label: 'Target Record Sys ID',
            maxLength: 40,
        }),
        recommendation: StringColumn({
            label: 'Recommendation',
            maxLength: 1000,
            mandatory: true,
        }),
        rationale: StringColumn({
            label: 'Rationale',
            maxLength: 1000,
        }),
        priority: StringColumn({
            label: 'Priority',
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
        status: StringColumn({
            label: 'Status',
            maxLength: 30,
            default: 'active',
            choices: {
                active: { label: 'Active' },
                applied: { label: 'Applied' },
                dismissed: { label: 'Dismissed' },
                expired: { label: 'Expired' },
            },
            dropdown: 'dropdown_without_none',
        }),
        generated_at: DateTimeColumn({
            label: 'Generated At',
            default: 'javascript:gs.nowDateTime();',
        }),
        expires_at: DateTimeColumn({
            label: 'Expires At',
        }),
    },
});

import { Table, StringColumn, DecimalColumn, DateTimeColumn } from '@servicenow/sdk/core';

export const x_2120492_athidhi_ai_prediction = Table({
    name: 'x_2120492_athidhi_ai_prediction',
    label: 'AI Prediction',
    display: 'prediction_number',
    autoNumber: {
        prefix: 'PRD',
        number: 1,
        numberOfDigits: 6,
    },
    schema: {
        prediction_number: StringColumn({
            label: 'Prediction Number',
            maxLength: 40,
            mandatory: true,
            default: 'javascript:global.getNextObjNumberPadded();',
            readOnly: true,
        }),
        prediction_type: StringColumn({
            label: 'Prediction Type',
            maxLength: 50,
            mandatory: true,
            choices: {
                housekeeping_workload: { label: 'Housekeeping Workload' },
                service_request_volume: { label: 'Service Request Volume' },
                maintenance_workload: { label: 'Maintenance Workload' },
                inventory_reorder_risk: { label: 'Inventory Reorder Risk' },
                restaurant_demand: { label: 'Restaurant Demand' },
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
        prediction: StringColumn({
            label: 'Prediction Summary',
            maxLength: 1000,
            mandatory: true,
        }),
        confidence: DecimalColumn({
            label: 'Confidence Score (0.00 - 1.00)',
            scale: 2,
            default: 0.0,
        }),
        severity: StringColumn({
            label: 'Severity / Impact',
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
        reasoning_summary: StringColumn({
            label: 'Reasoning Summary',
            maxLength: 1000,
        }),
        status: StringColumn({
            label: 'Status',
            maxLength: 30,
            default: 'active',
            choices: {
                draft: { label: 'Draft' },
                active: { label: 'Active' },
                fulfilled: { label: 'Fulfilled' },
                expired: { label: 'Expired' },
                dismissed: { label: 'Dismissed' },
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

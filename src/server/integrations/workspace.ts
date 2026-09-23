import { IntegrationClient } from './framework/integration_client';
import { IntegrationResponse } from './framework/types';

declare const gs: any;

export interface WorkspaceExportParams {
    reportType: 'daily_operations' | 'occupancy_summary' | 'revenue_audit' | 'maintenance_log';
    title: string;
    data: any;
    format: 'pdf' | 'spreadsheet' | 'doc';
    requestingUserRole: string;
}

export class WorkspaceIntegration {
    /**
     * Export manager report to Google Workspace / Microsoft 365 Document storage
     */
    public static exportManagerReport(params: WorkspaceExportParams): IntegrationResponse {
        // Enforce Role authorization: only manager or admin can export operational reports
        if (params.requestingUserRole !== 'manager' && params.requestingUserRole !== 'admin') {
            return {
                success: false,
                status: 'AUTHORIZATION_ERROR',
                httpStatus: 403,
                errorCategory: 'ROLE_UNAUTHORIZED',
                errorMessage: 'Only managers and administrators are authorized to export workspace reports.',
                correlationId: IntegrationClient.generateCorrelationId(),
                durationMs: 0,
                retriesAttempted: 0,
            };
        }

        const endpoint = (typeof gs !== 'undefined' && gs.getProperty)
            ? gs.getProperty('x_2120492_athidhi.integration.workspace.endpoint', 'https://www.googleapis.com/drive/v3')
            : 'https://www.googleapis.com/drive/v3';

        return IntegrationClient.execute({
            integrationName: 'workspace',
            operation: 'export_report',
            endpoint: endpoint,
            httpMethod: 'POST',
            externalSystem: 'google_workspace',
            headers: {
                'Authorization': 'Bearer [CONFIGURED_WORKSPACE_TOKEN]',
                'Content-Type': 'application/json',
            },
            body: {
                report_title: params.title,
                report_type: params.reportType,
                format: params.format,
                generated_at: new Date().toISOString(),
                data_summary: typeof params.data === 'string' ? params.data : JSON.stringify(params.data),
            },
            isIdempotent: false,
        });
    }

    /**
     * Share operational document with appropriate staff team
     */
    public static shareOperationalDocument(
        documentId: string,
        targetRole: string,
        requestingUserRole: string
    ): IntegrationResponse {
        if (requestingUserRole !== 'manager' && requestingUserRole !== 'admin') {
            return {
                success: false,
                status: 'AUTHORIZATION_ERROR',
                httpStatus: 403,
                errorCategory: 'ROLE_UNAUTHORIZED',
                errorMessage: 'Only managers and administrators can share operational documents.',
                correlationId: IntegrationClient.generateCorrelationId(),
                durationMs: 0,
                retriesAttempted: 0,
            };
        }

        const endpoint = (typeof gs !== 'undefined' && gs.getProperty)
            ? gs.getProperty('x_2120492_athidhi.integration.workspace.endpoint', 'https://www.googleapis.com/drive/v3')
            : 'https://www.googleapis.com/drive/v3';

        return IntegrationClient.execute({
            integrationName: 'workspace',
            operation: 'share_document',
            endpoint: endpoint,
            httpMethod: 'POST',
            externalSystem: 'google_workspace',
            headers: {
                'Authorization': 'Bearer [CONFIGURED_WORKSPACE_TOKEN]',
                'Content-Type': 'application/json',
            },
            body: {
                document_id: documentId,
                target_role: targetRole,
            },
            isIdempotent: true,
        });
    }
}

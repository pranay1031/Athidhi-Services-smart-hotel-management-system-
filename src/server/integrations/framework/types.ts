// Phase 6 External Integration Types and Enums

export type IntegrationStatus =
    | 'SUCCESS'
    | 'TIMEOUT'
    | 'RATE_LIMITED'
    | 'AUTHENTICATION_ERROR'
    | 'AUTHORIZATION_ERROR'
    | 'VALIDATION_ERROR'
    | 'NOT_FOUND'
    | 'PROVIDER_ERROR'
    | 'NETWORK_ERROR'
    | 'CONFIGURATION_ERROR';

export type IntegrationName =
    | 'email'
    | 'sms'
    | 'whatsapp'
    | 'calendar'
    | 'maps'
    | 'teams'
    | 'slack'
    | 'workspace'
    | 'webhook'
    | 'rest_service';

export interface IntegrationRequest {
    integrationName: IntegrationName;
    operation: string;
    endpoint: string;
    httpMethod?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers?: Record<string, string>;
    queryParams?: Record<string, string>;
    body?: any;
    externalSystem?: string;
    sourceRecord?: string;
    correlationId?: string;
    timeoutMs?: number;
    maxRetries?: number;
    isIdempotent?: boolean;
    userId?: string;
}

export interface IntegrationResponse<T = any> {
    success: boolean;
    status: IntegrationStatus;
    httpStatus: number;
    data?: T;
    errorCategory?: string;
    errorMessage?: string;
    correlationId: string;
    durationMs: number;
    retriesAttempted: number;
}

export interface IntegrationAuditLogEntry {
    integrationName: IntegrationName;
    operation: string;
    externalSystem: string;
    endpoint: string;
    requestPayloadRedacted: string;
    responseStatus: number;
    durationMs: number;
    correlationId: string;
    status: IntegrationStatus;
    errorCategory?: string;
    errorMessage?: string;
    sourceRecord?: string;
    userId?: string;
}

export const ALLOWLISTED_DOMAINS: string[] = [
    'api.sendgrid.com',
    'api.twilio.com',
    'graph.facebook.com',
    'www.googleapis.com',
    'maps.googleapis.com',
    'outlook.office.com',
    'graph.microsoft.com',
    'hooks.slack.com',
    'generativelanguage.googleapis.com',
];

export const SENSITIVE_KEY_PATTERNS: RegExp[] = [
    /api[-_]?key/i,
    /auth[-_]?token/i,
    /bearer/i,
    /password/i,
    /secret/i,
    /private[-_]?key/i,
    /credentials/i,
    /webhook[-_]?url/i,
    /access[-_]?token/i,
];

/**
 * Phase 5B — Athidhi Services AI Type Definitions
 */

export type AIResponseCategory =
    | 'SUCCESS'
    | 'INFORMATION'
    | 'ACTION_REQUIRED'
    | 'UNAUTHORIZED'
    | 'VALIDATION_ERROR'
    | 'UNSUPPORTED_ACTION'
    | 'PROVIDER_ERROR'
    | 'TIMEOUT'
    | 'RATE_LIMITED'
    | 'SYSTEM_ERROR';

export type ActionClassification = 'READ' | 'WRITE';

export interface AIActionParameterDefinition {
    name: string;
    type: 'string' | 'number' | 'boolean' | 'integer';
    required: boolean;
    description: string;
    allowedValues?: string[];
}

export interface AIActionDefinition {
    name: string;
    description: string;
    classification: ActionClassification;
    allowedRoles: string[];
    requiredParams: string[];
    optionalParams?: string[];
    parameterDefinitions: AIActionParameterDefinition[];
    targetTable: string;
    auditRequired: boolean;
}

export interface UserSessionContext {
    userId: string;
    userName: string;
    userEmail: string;
    roles: string[];
    activeRole: string;
    guestSysId?: string;
    guestName?: string;
}

export interface AIGatewayRequest {
    userQuery: string;
    requestCategory?: string;
    clientContext?: Record<string, any>;
}

export interface AIGatewayResponse {
    success: boolean;
    category: AIResponseCategory;
    message: string;
    action?: string;
    data?: any;
    durationMs: number;
    errorCategory?: string;
}

export interface GeminiFunctionCall {
    name: string;
    args: Record<string, any>;
}

export interface GeminiServiceResponse {
    success: boolean;
    text?: string;
    functionCall?: GeminiFunctionCall;
    rawStatus: number;
    isTimeout: boolean;
    isRateLimited: boolean;
    error?: string;
}

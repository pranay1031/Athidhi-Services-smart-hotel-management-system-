import { Property } from '@servicenow/sdk/core';

export const hotelNameProperty = Property({
    $id: Now.ID['prop_hotel_name'],
    name: 'x_2120492_athidhi.hotel_name',
    type: 'string',
    value: 'Athidhi Services - Smart Hotel',
    description: 'Operating Hotel Name for Athidhi Services',
});

export const brandProperty = Property({
    $id: Now.ID['prop_brand'],
    name: 'x_2120492_athidhi.brand',
    type: 'string',
    value: 'Athidhi',
    description: 'Hotel Brand Identity',
});

export const environmentProperty = Property({
    $id: Now.ID['prop_environment'],
    name: 'x_2120492_athidhi.environment',
    type: 'string',
    value: 'development',
    description: 'Application environment (development, staging, production)',
});

export const aiProviderProperty = Property({
    $id: Now.ID['prop_ai_provider'],
    name: 'x_2120492_athidhi.ai_provider',
    type: 'string',
    value: 'Google Gemini',
    description: 'Primary AI intelligence provider',
});

export const geminiModelProperty = Property({
    $id: Now.ID['prop_gemini_model'],
    name: 'x_2120492_athidhi.gemini_model',
    type: 'string',
    value: 'gemini-2.5-flash',
    description: 'Target Gemini AI model identifier',
});

export const geminiApiKeyProperty = Property({
    $id: Now.ID['prop_gemini_api_key'],
    name: 'x_2120492_athidhi.gemini.api_key',
    type: 'password',
    description: 'Secure Google Gemini API Key for Athidhi Services AI integration (encrypted, private)',
    isPrivate: true,
});

export const geminiEndpointProperty = Property({
    $id: Now.ID['prop_gemini_endpoint'],
    name: 'x_2120492_athidhi.gemini.endpoint',
    type: 'string',
    value: 'https://generativelanguage.googleapis.com/v1beta/models',
    description: 'Base API endpoint URL for Google Gemini service',
});

export const geminiTimeoutProperty = Property({
    $id: Now.ID['prop_gemini_timeout'],
    name: 'x_2120492_athidhi.gemini.timeout_ms',
    type: 'integer',
    value: '10000',
    description: 'HTTP request timeout in milliseconds for Gemini API calls',
});

export const aiAuditEnabledProperty = Property({
    $id: Now.ID['prop_ai_audit_enabled'],
    name: 'x_2120492_athidhi.ai.audit_enabled',
    type: 'boolean',
    value: 'true',
    description: 'Flag to enable comprehensive audit logging for all AI interactions',
});

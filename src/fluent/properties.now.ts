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

// ==========================================
// PHASE 6: EXTERNAL INTEGRATIONS CONFIGURATION
// ==========================================

export const intEmailEnabledProperty = Property({
    $id: Now.ID['prop_int_email_enabled'],
    name: 'x_2120492_athidhi.integration.email.enabled',
    type: 'boolean',
    value: 'true',
    description: 'Enable outbound email communication integration',
});

export const intEmailEndpointProperty = Property({
    $id: Now.ID['prop_int_email_endpoint'],
    name: 'x_2120492_athidhi.integration.email.endpoint',
    type: 'string',
    value: 'https://api.sendgrid.com/v3/mail/send',
    description: 'Outbound email API endpoint URL',
});

export const intEmailApiKeyProperty = Property({
    $id: Now.ID['prop_int_email_api_key'],
    name: 'x_2120492_athidhi.integration.email.api_key',
    type: 'password',
    description: 'Secure API Key for email service provider (encrypted, private)',
    isPrivate: true,
});

export const intSmsEnabledProperty = Property({
    $id: Now.ID['prop_int_sms_enabled'],
    name: 'x_2120492_athidhi.integration.sms.enabled',
    type: 'boolean',
    value: 'true',
    description: 'Enable outbound SMS notification integration',
});

export const intSmsEndpointProperty = Property({
    $id: Now.ID['prop_int_sms_endpoint'],
    name: 'x_2120492_athidhi.integration.sms.endpoint',
    type: 'string',
    value: 'https://api.twilio.com/2010-04-01/Accounts',
    description: 'Outbound SMS API endpoint URL',
});

export const intSmsAuthTokenProperty = Property({
    $id: Now.ID['prop_int_sms_auth_token'],
    name: 'x_2120492_athidhi.integration.sms.auth_token',
    type: 'password',
    description: 'Secure Auth Token for SMS service provider (encrypted, private)',
    isPrivate: true,
});

export const intWhatsappEnabledProperty = Property({
    $id: Now.ID['prop_int_whatsapp_enabled'],
    name: 'x_2120492_athidhi.integration.whatsapp.enabled',
    type: 'boolean',
    value: 'false',
    description: 'Enable WhatsApp messaging integration',
});

export const intWhatsappEndpointProperty = Property({
    $id: Now.ID['prop_int_whatsapp_endpoint'],
    name: 'x_2120492_athidhi.integration.whatsapp.endpoint',
    type: 'string',
    value: 'https://graph.facebook.com/v18.0',
    description: 'WhatsApp Graph API endpoint URL',
});

export const intCalendarEnabledProperty = Property({
    $id: Now.ID['prop_int_calendar_enabled'],
    name: 'x_2120492_athidhi.integration.calendar.enabled',
    type: 'boolean',
    value: 'true',
    description: 'Enable calendar sync integration',
});

export const intCalendarProviderProperty = Property({
    $id: Now.ID['prop_int_calendar_provider'],
    name: 'x_2120492_athidhi.integration.calendar.provider',
    type: 'string',
    value: 'google',
    description: 'Primary calendar provider: google or outlook',
});

export const intCalendarEndpointProperty = Property({
    $id: Now.ID['prop_int_calendar_endpoint'],
    name: 'x_2120492_athidhi.integration.calendar.endpoint',
    type: 'string',
    value: 'https://www.googleapis.com/calendar/v3',
    description: 'Calendar API service endpoint URL',
});

export const intCalendarApiKeyProperty = Property({
    $id: Now.ID['prop_int_calendar_api_key'],
    name: 'x_2120492_athidhi.integration.calendar.api_key',
    type: 'password',
    description: 'Secure token / key for calendar provider (encrypted, private)',
    isPrivate: true,
});

export const intMapsEnabledProperty = Property({
    $id: Now.ID['prop_int_maps_enabled'],
    name: 'x_2120492_athidhi.integration.maps.enabled',
    type: 'boolean',
    value: 'true',
    description: 'Enable Maps and Location integration',
});

export const intMapsEndpointProperty = Property({
    $id: Now.ID['prop_int_maps_endpoint'],
    name: 'x_2120492_athidhi.integration.maps.endpoint',
    type: 'string',
    value: 'https://maps.googleapis.com/maps/api',
    description: 'Google Maps Web Services endpoint URL',
});

export const intMapsApiKeyProperty = Property({
    $id: Now.ID['prop_int_maps_api_key'],
    name: 'x_2120492_athidhi.integration.maps.api_key',
    type: 'password',
    description: 'Server-side API key for Google Maps Platform (encrypted, private)',
    isPrivate: true,
});

export const intTeamsEnabledProperty = Property({
    $id: Now.ID['prop_int_teams_enabled'],
    name: 'x_2120492_athidhi.integration.teams.enabled',
    type: 'boolean',
    value: 'true',
    description: 'Enable Microsoft Teams notification integration',
});

export const intTeamsWebhookProperty = Property({
    $id: Now.ID['prop_int_teams_webhook'],
    name: 'x_2120492_athidhi.integration.teams.webhook_url',
    type: 'string',
    value: 'https://outlook.office.com/webhook',
    description: 'Microsoft Teams incoming webhook URL connector',
});

export const intSlackEnabledProperty = Property({
    $id: Now.ID['prop_int_slack_enabled'],
    name: 'x_2120492_athidhi.integration.slack.enabled',
    type: 'boolean',
    value: 'true',
    description: 'Enable Slack collaboration integration',
});

export const intSlackWebhookProperty = Property({
    $id: Now.ID['prop_int_slack_webhook'],
    name: 'x_2120492_athidhi.integration.slack.webhook_url',
    type: 'string',
    value: 'https://hooks.slack.com/services',
    description: 'Slack incoming webhook URL',
});

export const intWorkspaceEnabledProperty = Property({
    $id: Now.ID['prop_int_workspace_enabled'],
    name: 'x_2120492_athidhi.integration.workspace.enabled',
    type: 'boolean',
    value: 'true',
    description: 'Enable Google/Microsoft Workspace document export',
});

export const intWorkspaceEndpointProperty = Property({
    $id: Now.ID['prop_int_workspace_endpoint'],
    name: 'x_2120492_athidhi.integration.workspace.endpoint',
    type: 'string',
    value: 'https://www.googleapis.com/drive/v3',
    description: 'Workspace document storage endpoint',
});

export const intWorkspaceApiKeyProperty = Property({
    $id: Now.ID['prop_int_workspace_api_key'],
    name: 'x_2120492_athidhi.integration.workspace.api_key',
    type: 'password',
    description: 'Workspace document storage API token (encrypted, private)',
    isPrivate: true,
});

export const intTimeoutMsProperty = Property({
    $id: Now.ID['prop_int_timeout_ms'],
    name: 'x_2120492_athidhi.integration.timeout_ms',
    type: 'integer',
    value: '8000',
    description: 'Default HTTP request timeout in milliseconds for external integrations',
});

export const intMaxRetriesProperty = Property({
    $id: Now.ID['prop_int_max_retries'],
    name: 'x_2120492_athidhi.integration.max_retries',
    type: 'integer',
    value: '3',
    description: 'Maximum retry attempts for transient errors with exponential backoff',
});

export const intAuditEnabledProperty = Property({
    $id: Now.ID['prop_int_audit_enabled'],
    name: 'x_2120492_athidhi.integration.audit_enabled',
    type: 'boolean',
    value: 'true',
    description: 'Enable comprehensive integration audit logging to x_2120492_athidhi_integration_log',
});

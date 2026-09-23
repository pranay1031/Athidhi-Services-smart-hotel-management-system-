# Athidhi Services — Phase 6 External Integrations Documentation

## Overview

Athidhi Services Smart Hotel Management System provides an enterprise-grade external integration layer supporting omnichannel guest communications, calendar synchronization, location/mapping services, staff collaboration, document management, and third-party webhook dispatching.

> **CRITICAL SECURITY NOTICE**: Payment processing and payment gateways (including Razorpay, Stripe, PayPal, Cashfree, UPI, banking APIs, and card processing) are **permanently excluded** from Phase 6. No payment tokens, card numbers, CVVs, or financial credentials are handled or stored by this integration layer.

---

## 1. Supported Integrations

| Sub-Phase | Integration Name | Target Provider(s) | Primary Use Cases |
| :--- | :--- | :--- | :--- |
| **6A** | Communication | SendGrid (Email), Twilio (SMS), Meta (WhatsApp) | Booking confirmations, service request alerts, food order status, housekeeping ready alerts, maintenance updates, critical incident escalations, AI operational summaries. |
| **6B** | Calendar | Google Calendar, Microsoft 365 Outlook Calendar | Hotel events, maintenance appointments, staff schedules, guest service appointments, manager operational meetings. |
| **6C** | Maps / Location | Google Maps Platform | Hotel location lookup, directions, nearby attractions, distance and travel time estimation. |
| **6D** | Enterprise Collaboration | Microsoft Teams, Slack | Critical incident alarms, high-priority maintenance escalations, housekeeping board notifications, inventory reorder alerts, manager briefs. |
| **6E** | Workspace Documents | Google Workspace (Drive), Microsoft 365 (OneDrive) | Manager operational reports export (daily ops, occupancy summary, revenue audit), operational procedure sharing. |
| **6F** | Generic REST / Webhooks | Custom Outbound Webhooks | Extensible REST messaging with allowlisting, correlation IDs, and credential redaction. |

---

## 2. Integration Architecture

All external integrations execute strictly on the ServiceNow server tier:

```
ServiceNow Server (Business Rules / Scheduled Jobs / Services)
                           │
                           ▼
          [IntegrationClient / Framework Layer]
                           │
            ├─ 1. Endpoint Allowlist Verification
            ├─ 2. Sensitive Data Redaction
            ├─ 3. Correlation ID Generation
            ├─ 4. Safe Retry & Backoff (Idempotency check)
                           │
                           ▼
               [Outbound REST Execution]
                           │
                           ▼
          [Response Normalization & Audit Logging]
              Table: x_2120492_athidhi_integration_log
```

### Absolute Boundaries
- **Browser Isolation**: Browser scripts and UI Pages never communicate with external integration endpoints directly.
- **Credential Protection**: Zero credentials in source code or client bundles. Secrets reside only in encrypted, private ServiceNow System Properties (`isPrivate: true`, `type: password`).
- **AI Boundary**: Gemini AI Concierge and Predictive Engine cannot invoke external integrations directly. AI interacts exclusively with the allowlisted Action Registry.

---

## 3. Configuration Properties

All properties are scoped under `x_2120492_athidhi.integration.*` and defined in `src/fluent/properties.now.ts`:

### Communications
- `x_2120492_athidhi.integration.email.enabled` (Boolean): Enable outbound email.
- `x_2120492_athidhi.integration.email.endpoint` (String): SendGrid mail endpoint.
- `x_2120492_athidhi.integration.email.api_key` (Password, Private): SendGrid API token.
- `x_2120492_athidhi.integration.sms.enabled` (Boolean): Enable outbound SMS.
- `x_2120492_athidhi.integration.sms.endpoint` (String): Twilio API endpoint.
- `x_2120492_athidhi.integration.sms.auth_token` (Password, Private): Twilio Auth Token.
- `x_2120492_athidhi.integration.whatsapp.enabled` (Boolean): Enable WhatsApp.
- `x_2120492_athidhi.integration.whatsapp.endpoint` (String): WhatsApp API endpoint.

### Calendar
- `x_2120492_athidhi.integration.calendar.enabled` (Boolean): Enable calendar sync.
- `x_2120492_athidhi.integration.calendar.provider` (String): `google` or `outlook`.
- `x_2120492_athidhi.integration.calendar.endpoint` (String): Calendar API URL.
- `x_2120492_athidhi.integration.calendar.api_key` (Password, Private): Calendar OAuth / API token.

### Maps & Location
- `x_2120492_athidhi.integration.maps.enabled` (Boolean): Enable Maps integration.
- `x_2120492_athidhi.integration.maps.endpoint` (String): Google Maps API endpoint.
- `x_2120492_athidhi.integration.maps.api_key` (Password, Private): Server-side Maps API key.

### Enterprise Collaboration
- `x_2120492_athidhi.integration.teams.enabled` (Boolean): Enable MS Teams webhooks.
- `x_2120492_athidhi.integration.teams.webhook_url` (String): Incoming webhook connector URL.
- `x_2120492_athidhi.integration.slack.enabled` (Boolean): Enable Slack webhooks.
- `x_2120492_athidhi.integration.slack.webhook_url` (String): Incoming webhook URL.

### Workspace Documents
- `x_2120492_athidhi.integration.workspace.enabled` (Boolean): Enable document export.
- `x_2120492_athidhi.integration.workspace.endpoint` (String): Google Drive / Microsoft Graph.
- `x_2120492_athidhi.integration.workspace.api_key` (Password, Private): Document API Token.

### Framework & Performance
- `x_2120492_athidhi.integration.timeout_ms` (Integer): Default timeout (8000 ms).
- `x_2120492_athidhi.integration.max_retries` (Integer): Max retry attempts (default 3).
- `x_2120492_athidhi.integration.audit_enabled` (Boolean): Enable audit logging (default true).

---

## 4. Security Model & Role Permissions

### ACL Controls
- **Table**: `x_2120492_athidhi_integration_log`
  - **Read**: `x_2120492_athidhi.manager`, `x_2120492_athidhi.admin`
  - **Create**: `x_2120492_athidhi.manager`, `x_2120492_athidhi.admin` (and elevated server contexts)
  - **Write**: `x_2120492_athidhi.admin`
  - **Delete**: `x_2120492_athidhi.admin`
  - **Guest Access**: Strictly **excluded** from read, create, write, and delete operations.

### Endpoint Allowlist
Outbound requests are strictly limited to approved domains:
- `api.sendgrid.com`
- `api.twilio.com`
- `graph.facebook.com`
- `www.googleapis.com`
- `maps.googleapis.com`
- `outlook.office.com`
- `graph.microsoft.com`
- `hooks.slack.com`
- `generativelanguage.googleapis.com`

Any attempt to call unlisted domains, localhost, loopback, or internal IP ranges is rejected immediately with status `VALIDATION_ERROR` and category `ENDPOINT_NOT_ALLOWLISTED`.

### Sensitive Data Minimization
- Maps queries never receive guest IDs, room numbers, or reservation details.
- Collaboration messages display sanitized titles, summaries, and severity badges without raw personal information.
- Audit logs automatically strip authorization headers, tokens, API keys, passwords, and secrets.

---

## 5. Failure Handling & Safe Retry

### Normalized Status Codes
1. `SUCCESS` (HTTP 200–299)
2. `VALIDATION_ERROR` (HTTP 400 or allowlist rejection)
3. `AUTHENTICATION_ERROR` (HTTP 401)
4. `AUTHORIZATION_ERROR` (HTTP 403)
5. `NOT_FOUND` (HTTP 404)
6. `RATE_LIMITED` (HTTP 429)
7. `TIMEOUT` (HTTP 408, 504, or socket timeout)
8. `PROVIDER_ERROR` (HTTP 500–599)
9. `NETWORK_ERROR` (Connection reset / unreachable)
10. `CONFIGURATION_ERROR` (Missing required endpoint/credentials)

### Retry Policy
- **Retryable**: `TIMEOUT`, `RATE_LIMITED`, `NETWORK_ERROR`, and `PROVIDER_ERROR` (5xx) for idempotent operations.
- **Non-Retryable**: `AUTHENTICATION_ERROR`, `AUTHORIZATION_ERROR`, `VALIDATION_ERROR`, `NOT_FOUND`, `CONFIGURATION_ERROR`, and non-idempotent operations without explicit idempotency assurance.
- **Backoff Algorithm**: Exponential backoff ($1000 \times 2^{\text{attempt}} + \text{jitter}$) capped at 5000 ms.

---

## 6. Deduplication & Idempotency

- **Communications**: Tracks composite key `channel:sourceRecord:eventType` with a 300-second window. Repeated sends within the window return status `SUCCESS` with `duplicatePrevented: true`.
- **Calendar**: Tracks composite key `calendar:sourceTable:sourceSysId:calendarType` to prevent duplicate external calendar events.
- **Collaboration**: Tracks composite key `platform:sourceRecord:severity` with a 600-second window to prevent notification floods during critical incidents.

---

## 7. Pre-Deployment Configuration Checklist

Before promoting to production:
1. Ensure the ServiceNow system properties have valid encrypted credentials entered in the ServiceNow System Properties console.
2. Confirm that network firewall and mid-server/outbound security rules permit HTTPS egress to allowlisted integration hostnames.
3. Validate that manager and admin roles are assigned to authorized staff.

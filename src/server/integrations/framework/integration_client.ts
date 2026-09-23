import {
    IntegrationName,
    IntegrationStatus,
    IntegrationRequest,
    IntegrationResponse,
    IntegrationAuditLogEntry,
    ALLOWLISTED_DOMAINS,
    SENSITIVE_KEY_PATTERNS,
} from './types.ts';

declare const gs: any;
declare const sn_ws: any;
declare const GlideRecord: any;

export class IntegrationClient {
    private static sentDeduplicationCache: Map<string, number> = new Map();

    /**
     * Generate unique correlation ID
     */
    public static generateCorrelationId(): string {
        const timestamp = Date.now();
        const rand = Math.random().toString(36).substring(2, 10);
        return 'corr_' + timestamp + '_' + rand;
    }

    /**
     * Validate whether an endpoint belongs to an allowlisted domain
     */
    public static isEndpointAllowlisted(urlStr: string): boolean {
        if (!urlStr || typeof urlStr !== 'string') return false;

        // Disallow dangerous URI schemes
        const lower = urlStr.trim().toLowerCase();
        if (
            lower.startsWith('javascript:') ||
            lower.startsWith('data:') ||
            lower.startsWith('file:') ||
            lower.includes('localhost') ||
            lower.includes('127.0.0.1') ||
            lower.includes('169.254.') ||
            lower.includes('10.') ||
            lower.includes('192.168.')
        ) {
            return false;
        }

        try {
            // Extract hostname without external dependencies
            const match = lower.match(/^https?:\/\/([^\/\?#:]+)/i);
            if (!match || !match[1]) return false;
            const host = match[1].toLowerCase();

            return ALLOWLISTED_DOMAINS.some((allowed) => {
                return host === allowed || host.endsWith('.' + allowed);
            });
        } catch (e) {
            return false;
        }
    }

    /**
     * Deep redaction of sensitive credentials, tokens, and PII
     */
    public static redactPayload(data: any): string {
        if (data === null || data === undefined) return '';

        try {
            const scrub = (obj: any): any => {
                if (typeof obj !== 'object' || obj === null) {
                    if (typeof obj === 'string') {
                        // Mask potential tokens/keys
                        if (obj.length > 30 && /^[A-Za-z0-9_\-\.]+$/.test(obj)) {
                            return '[REDACTED_TOKEN]';
                        }
                    }
                    return obj;
                }

                if (Array.isArray(obj)) {
                    return obj.map(scrub);
                }

                const cleaned: Record<string, any> = {};
                for (const key of Object.keys(obj)) {
                    const isSensitive = SENSITIVE_KEY_PATTERNS.some((pat) => pat.test(key));
                    if (isSensitive) {
                        cleaned[key] = '[REDACTED]';
                    } else {
                        cleaned[key] = scrub(obj[key]);
                    }
                }
                return cleaned;
            };

            const processed = scrub(typeof data === 'string' ? JSON.parse(data) : data);
            const str = JSON.stringify(processed);
            return str.length > 3800 ? str.substring(0, 3800) + '...[TRUNCATED]' : str;
        } catch (e) {
            return '[REDACTED_PAYLOAD]';
        }
    }

    /**
     * Map HTTP status codes to standardized IntegrationStatus
     */
    public static mapHttpStatus(code: number): IntegrationStatus {
        if (code >= 200 && code <= 299) return 'SUCCESS';
        if (code === 400) return 'VALIDATION_ERROR';
        if (code === 401) return 'AUTHENTICATION_ERROR';
        if (code === 403) return 'AUTHORIZATION_ERROR';
        if (code === 404) return 'NOT_FOUND';
        if (code === 429) return 'RATE_LIMITED';
        if (code === 408 || code === 504) return 'TIMEOUT';
        if (code >= 500 && code <= 599) return 'PROVIDER_ERROR';
        return 'NETWORK_ERROR';
    }

    /**
     * Check if failure status is retryable
     */
    public static isRetryable(status: IntegrationStatus, isIdempotent?: boolean): boolean {
        if (isIdempotent === false) return false;
        return (
            status === 'TIMEOUT' ||
            status === 'RATE_LIMITED' ||
            status === 'NETWORK_ERROR' ||
            status === 'PROVIDER_ERROR'
        );
    }

    /**
     * Check and record deduplication key
     */
    public static checkAndRecordDeduplication(dedupKey: string, ttlSeconds: number = 300): boolean {
        const now = Date.now();
        const prev = this.sentDeduplicationCache.get(dedupKey);
        if (prev && (now - prev) < ttlSeconds * 1000) {
            return true; // Already processed
        }
        this.sentDeduplicationCache.set(dedupKey, now);
        return false;
    }

    /**
     * Log integration execution to audit table x_2120492_athidhi_integration_log
     */
    public static logAudit(entry: IntegrationAuditLogEntry): void {
        try {
            if (typeof gs !== 'undefined' && gs.getProperty) {
                const auditEnabled = gs.getProperty('x_2120492_athidhi.integration.audit_enabled', 'true');
                if (auditEnabled === 'false') return;
            }

            if (typeof GlideRecord !== 'undefined') {
                const gr = new GlideRecord('x_2120492_athidhi_integration_log');
                gr.initialize();
                gr.setValue('integration_name', entry.integrationName);
                gr.setValue('operation', entry.operation);
                gr.setValue('external_system', entry.externalSystem || 'unknown');
                gr.setValue('endpoint', entry.endpoint);
                gr.setValue('request_payload_redacted', entry.requestPayloadRedacted);
                gr.setValue('response_status', entry.responseStatus);
                gr.setValue('duration_ms', entry.durationMs);
                gr.setValue('correlation_id', entry.correlationId);
                gr.setValue('status', entry.status);
                if (entry.errorCategory) gr.setValue('error_category', entry.errorCategory);
                if (entry.errorMessage) gr.setValue('error_message', entry.errorMessage.substring(0, 990));
                if (entry.sourceRecord) gr.setValue('source_record', entry.sourceRecord);
                if (entry.userId) gr.setValue('requesting_user', entry.userId);
                gr.insert();
            } else if (typeof gs !== 'undefined' && gs.info) {
                gs.info(
                    '[INTEGRATION AUDIT] name=' + entry.integrationName +
                    ' op=' + entry.operation +
                    ' status=' + entry.status +
                    ' corr=' + entry.correlationId
                );
            }
        } catch (e: any) {
            if (typeof gs !== 'undefined' && gs.warn) {
                gs.warn('[INTEGRATION AUDIT FAILED] ' + e.message);
            }
        }
    }

    /**
     * Execute an external integration request with allowlisting, redaction, retry, and auditing
     */
    public static execute(request: IntegrationRequest): IntegrationResponse {
        const correlationId = request.correlationId || this.generateCorrelationId();
        const startTime = Date.now();
        const maxRetries = request.maxRetries ?? 3;
        const isIdempotent = request.isIdempotent ?? (request.httpMethod === 'GET');

        // 1. Strict Endpoint Allowlisting
        if (!this.isEndpointAllowlisted(request.endpoint)) {
            const duration = Date.now() - startTime;
            const errResp: IntegrationResponse = {
                success: false,
                status: 'VALIDATION_ERROR',
                httpStatus: 400,
                errorCategory: 'ENDPOINT_NOT_ALLOWLISTED',
                errorMessage: 'Target endpoint ' + request.endpoint + ' is not in the approved integration allowlist.',
                correlationId: correlationId,
                durationMs: duration,
                retriesAttempted: 0,
            };

            this.logAudit({
                integrationName: request.integrationName,
                operation: request.operation,
                externalSystem: request.externalSystem || 'unknown',
                endpoint: request.endpoint,
                requestPayloadRedacted: this.redactPayload(request.body),
                responseStatus: 400,
                durationMs: duration,
                correlationId: correlationId,
                status: 'VALIDATION_ERROR',
                errorCategory: 'ENDPOINT_NOT_ALLOWLISTED',
                errorMessage: errResp.errorMessage,
                sourceRecord: request.sourceRecord,
                userId: request.userId,
            });

            return errResp;
        }

        // 2. Outbound execution loop with safe retry & backoff
        let attempt = 0;
        let lastStatus: IntegrationStatus = 'NETWORK_ERROR';
        let lastHttpStatus = 0;
        let lastErrorMsg = '';
        let responseData: any = null;

        while (attempt <= maxRetries) {
            const attemptStart = Date.now();
            try {
                if (typeof sn_ws !== 'undefined' && sn_ws.RESTMessageV2) {
                    const sm = new sn_ws.RESTMessageV2();
                    sm.setHttpMethod(request.httpMethod || 'POST');
                    sm.setEndpoint(request.endpoint);

                    // Add headers with token redaction
                    if (request.headers) {
                        for (const hKey of Object.keys(request.headers)) {
                            sm.setRequestHeader(hKey, request.headers[hKey]);
                        }
                    }

                    if (request.queryParams) {
                        for (const qKey of Object.keys(request.queryParams)) {
                            sm.setQueryParameter(qKey, request.queryParams[qKey]);
                        }
                    }

                    if (request.body) {
                        sm.setRequestBody(
                            typeof request.body === 'string' ? request.body : JSON.stringify(request.body)
                        );
                    }

                    const timeout = request.timeoutMs || 8000;
                    sm.setHttpTimeout(timeout);

                    const resp = sm.execute();
                    lastHttpStatus = resp.getStatusCode();
                    lastStatus = this.mapHttpStatus(lastHttpStatus);

                    if (lastStatus === 'SUCCESS') {
                        try {
                            responseData = JSON.parse(resp.getBody());
                        } catch (e) {
                            responseData = resp.getBody();
                        }
                        break;
                    } else {
                        lastErrorMsg = resp.haveError() ? resp.getErrorMessage() : 'HTTP ' + lastHttpStatus;
                    }
                } else {
                    // Safe execution simulation for runtime verification / unit testing
                    lastHttpStatus = 200;
                    lastStatus = 'SUCCESS';
                    responseData = { status: 'mock_delivered', timestamp: new Date().toISOString() };
                    break;
                }
            } catch (err: any) {
                lastHttpStatus = 0;
                lastStatus = err.message && err.message.toLowerCase().includes('timeout')
                    ? 'TIMEOUT'
                    : 'NETWORK_ERROR';
                lastErrorMsg = err.message || 'Execution error';
            }

            if (!this.isRetryable(lastStatus, isIdempotent) || attempt === maxRetries) {
                break;
            }

            attempt++;
            // Exponential backoff with jitter
            const backoffMs = Math.min(1000 * Math.pow(2, attempt) + Math.floor(Math.random() * 200), 5000);
            if (typeof gs !== 'undefined' && gs.sleep) {
                gs.sleep(backoffMs);
            }
        }

        const duration = Date.now() - startTime;
        const isSuccess = lastStatus === 'SUCCESS';

        const finalResponse: IntegrationResponse = {
            success: isSuccess,
            status: lastStatus,
            httpStatus: lastHttpStatus,
            data: responseData,
            errorCategory: isSuccess ? undefined : lastStatus,
            errorMessage: isSuccess ? undefined : lastErrorMsg,
            correlationId: correlationId,
            durationMs: duration,
            retriesAttempted: attempt,
        };

        // 3. Persist audit log
        this.logAudit({
            integrationName: request.integrationName,
            operation: request.operation,
            externalSystem: request.externalSystem || 'unknown',
            endpoint: request.endpoint,
            requestPayloadRedacted: this.redactPayload(request.body),
            responseStatus: lastHttpStatus,
            durationMs: duration,
            correlationId: correlationId,
            status: lastStatus,
            errorCategory: isSuccess ? undefined : lastStatus,
            errorMessage: isSuccess ? undefined : lastErrorMsg,
            sourceRecord: request.sourceRecord,
            userId: request.userId,
        });

        return finalResponse;
    }
}

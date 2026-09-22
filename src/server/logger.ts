import { gs } from '@servicenow/glide'

/**
 * Athidhi Services Safe Logger
 * Ensures sensitive data like API keys, tokens, and credentials are never logged.
 */
export function safeLog(message: string, context?: Record<string, unknown>): void {
    const sanitizedContext = context ? redactSensitive(context) : ''
    gs.info(`[Athidhi Services] ${message} ${sanitizedContext ? JSON.stringify(sanitizedContext) : ''}`)
}

function redactSensitive(obj: Record<string, unknown>): Record<string, unknown> {
    const sensitiveKeys = ['key', 'token', 'password', 'secret', 'auth', 'api_key', 'authorization']
    const result: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(obj)) {
        if (sensitiveKeys.some(s => k.toLowerCase().includes(s))) {
            result[k] = '[REDACTED]'
        } else {
            result[k] = v
        }
    }
    return result
}

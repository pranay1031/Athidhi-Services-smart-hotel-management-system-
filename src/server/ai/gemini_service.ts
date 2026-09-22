import { gs } from '@servicenow/glide';
import { RESTMessageV2 } from '@servicenow/glide/sn_ws';
/**
 * Phase 5B — Gemini Service Abstraction
 * Manages REST communication with Google Gemini, error redaction,
 * rate limit handling, and normalized response parsing.
 */

import { GeminiServiceResponse } from './types';
import { getGeminiToolDeclarations } from './action_registry';

export class GeminiService {
    private static redactSecrets(text: string): string {
        if (!text) return '';
        // Redacts API key header, query parameter, or bearer tokens
        return text
            .replace(/key=([a-zA-Z0-9_-]{10,})/gi, 'key=[REDACTED_API_KEY]')
            .replace(/x-goog-api-key[:=]\s*([a-zA-Z0-9_\-\.]{10,})/gi, 'x-goog-api-key: [REDACTED_API_KEY]')
            .replace(/Bearer\s+([a-zA-Z0-9_\-\.]{10,})/gi, 'Bearer [REDACTED_TOKEN]');
    }

    /**
     * Calls Google Gemini Generative Language API
     */
    public static generateContent(
        prompt: string,
        systemInstruction?: string
    ): GeminiServiceResponse {
        const apiKey = gs.getProperty('x_2120492_athidhi.gemini.api_key');
        if (!apiKey || apiKey.trim() === '') {
            return {
                success: false,
                rawStatus: 401,
                isTimeout: false,
                isRateLimited: false,
                error: 'Gemini API key is not configured in system property x_2120492_athidhi.gemini.api_key.',
            };
        }

        const model = gs.getProperty('x_2120492_athidhi.gemini_model') || 'gemini-2.5-flash';
        const timeoutMs = parseInt(gs.getProperty('x_2120492_athidhi.gemini.timeout_ms') || '10000', 10);
        // Endpoint URL strictly clean of credential query parameters
        const endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent';

        const tools = getGeminiToolDeclarations();

        const requestBody = {
            contents: [
                {
                    role: 'user',
                    parts: [{ text: prompt }],
                },
            ],
            tools: tools,
            generationConfig: {
                temperature: 0.1,
                maxOutputTokens: 1024,
            },
        };

        if (systemInstruction) {
            (requestBody as any).systemInstruction = {
                parts: [{ text: systemInstruction }],
            };
        }

        try {
            const rest = new RESTMessageV2();
            rest.setHttpMethod('POST');
            rest.setEndpoint(endpoint);
            rest.setRequestHeader('Content-Type', 'application/json');
            // Secure credential transport using official x-goog-api-key HTTP header
            rest.setRequestHeader('x-goog-api-key', apiKey);
            rest.setHttpTimeout(timeoutMs);
            rest.setRequestBody(JSON.stringify(requestBody));

            const response = rest.execute();
            const httpStatus = response.getStatusCode();
            const responseBody = response.getBody();

            if (response.haveError() || httpStatus === 0) {
                const err = response.getErrorMessage() || 'Connection failed or timed out';
                const isTimeout = err.toLowerCase().includes('timeout');
                return {
                    success: false,
                    rawStatus: httpStatus || 0,
                    isTimeout: isTimeout,
                    isRateLimited: false,
                    error: GeminiService.redactSecrets(err),
                };
            }

            if (httpStatus === 429) {
                return {
                    success: false,
                    rawStatus: 429,
                    isTimeout: false,
                    isRateLimited: true,
                    error: 'Gemini rate limit exceeded. Please retry after a brief moment.',
                };
            }

            if (httpStatus >= 400) {
                return {
                    success: false,
                    rawStatus: httpStatus,
                    isTimeout: false,
                    isRateLimited: false,
                    error: 'Gemini HTTP ' + httpStatus + ': ' + GeminiService.redactSecrets(responseBody),
                };
            }

            // Parse valid JSON response
            const parsed = JSON.parse(responseBody);
            const candidate = parsed.candidates && parsed.candidates[0];
            if (!candidate || !candidate.content || !candidate.content.parts) {
                return {
                    success: false,
                    rawStatus: httpStatus,
                    isTimeout: false,
                    isRateLimited: false,
                    error: 'Malformed response structure from Gemini API.',
                };
            }

            let textContent = '';
            let functionCallData: any = null;

            for (const part of candidate.content.parts) {
                if (part.text) {
                    textContent += part.text;
                }
                if (part.functionCall) {
                    functionCallData = {
                        name: part.functionCall.name,
                        args: part.functionCall.args || {},
                    };
                }
            }

            return {
                success: true,
                text: textContent.trim(),
                functionCall: functionCallData,
                rawStatus: httpStatus,
                isTimeout: false,
                isRateLimited: false,
            };
        } catch (e: any) {
            return {
                success: false,
                rawStatus: 500,
                isTimeout: false,
                isRateLimited: false,
                error: GeminiService.redactSecrets(e.message || String(e)),
            };
        }
    }
}

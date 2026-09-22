import { RestMessage } from '@servicenow/sdk/core';

export const geminiRestMessage = RestMessage({
    $id: Now.ID['rest_gemini_api'],
    name: 'Google Gemini API',
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models',
    description: 'Outbound REST Message integration for Google Gemini Generative Language API',
    access: 'packagePrivate',
    headers: [
        {
            $id: Now.ID['rm_hdr_content_type'],
            name: 'Content-Type',
            value: 'application/json',
        },
    ],
    functions: [
        {
            name: 'generateContent',
            httpMethod: 'POST',
            endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent',
            headers: [
                {
                    $id: Now.ID['rm_fn_hdr_content_type'],
                    name: 'Content-Type',
                    value: 'application/json',
                },
                {
                    $id: Now.ID['rm_fn_hdr_api_key'],
                    name: 'x-goog-api-key',
                    value: '${apiKey}',
                },
            ],
        },
    ],
});

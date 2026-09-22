import { Property } from '@servicenow/sdk/core'

export const hotelNameProperty = Property({
    $id: Now.ID['prop_hotel_name'],
    name: 'x_2120492_athidhi.hotel_name',
    type: 'string',
    value: 'Athidhi Services - Smart Hotel',
    description: 'Operating Hotel Name for Athidhi Services',
})

export const brandProperty = Property({
    $id: Now.ID['prop_brand'],
    name: 'x_2120492_athidhi.brand',
    type: 'string',
    value: 'Athidhi',
    description: 'Hotel Brand Identity',
})

export const environmentProperty = Property({
    $id: Now.ID['prop_environment'],
    name: 'x_2120492_athidhi.environment',
    type: 'string',
    value: 'development',
    description: 'Application environment (development, staging, production)',
})

export const aiProviderProperty = Property({
    $id: Now.ID['prop_ai_provider'],
    name: 'x_2120492_athidhi.ai_provider',
    type: 'string',
    value: 'Google Gemini',
    description: 'Primary AI intelligence provider',
})

export const geminiModelProperty = Property({
    $id: Now.ID['prop_gemini_model'],
    name: 'x_2120492_athidhi.gemini_model',
    type: 'string',
    value: 'gemini-3.5-flash-lite',
    description: 'Target Gemini AI model identifier',
})

export const geminiApiKeyProperty = Property({
    $id: Now.ID['prop_gemini_api_key'],
    name: 'x_2120492_athidhi.gemini.api_key',
    type: 'password',
    description: 'Secure Google Gemini API Key for Athidhi Services AI integration (encrypted)',
    isPrivate: true,
})

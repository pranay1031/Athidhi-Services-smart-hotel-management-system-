import { ScriptInclude } from '@servicenow/sdk/core';

export const siAiConciergeAjax = ScriptInclude({
    $id: Now.ID['si_ai_concierge_ajax'],
    name: 'AIConciergeAjax',
    clientCallable: true,
    active: true,
    accessibleFrom: 'public',
    description: 'Athidhi Services — AI Concierge Client-Callable Ajax Processor',
    script: Now.include('../../server/script-includes/ai_concierge_ajax.js'),
});

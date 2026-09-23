var AIConciergeAjax = Class.create();

AIConciergeAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    /**
     * Client-callable entry point for AI Concierge requests from Guest Portal UI.
     * Extracts parameters, delegates to AIGateway module, and returns normalized JSON response.
     */
    processChat: function() {
        var userQuery = this.getParameter('sysparm_user_query') || '';
        var confirmed = this.getParameter('sysparm_confirmed') === 'true';
        var pendingActionStr = this.getParameter('sysparm_pending_action');
        var pendingAction = null;

        if (pendingActionStr) {
            try {
                pendingAction = JSON.parse(pendingActionStr);
            } catch (e) {
                pendingAction = null;
            }
        }

        var req = {
            userQuery: String(userQuery).trim(),
            confirmed: confirmed,
            pendingAction: pendingAction
        };

        try {
            var gateway = null;
            var candidates = [
                'x_2120492_athidhi/smart-hotel-management-system/0.0.1/src/server/ai/ai_gateway.ts',
                './dist/modules/server/ai/ai_gateway.js',
                './src/server/ai/ai_gateway.js',
                '../ai/ai_gateway'
            ];

            for (var i = 0; i < candidates.length; i++) {
                try {
                    var mod = require(candidates[i]);
                    if (mod && mod.AIGateway) {
                        gateway = mod.AIGateway;
                        break;
                    }
                } catch (loadErr) {}
            }

            if (gateway) {
                var response = gateway.processRequest(req);
                return JSON.stringify(response);
            }
        } catch (ex) {
            gs.error('AIConciergeAjax execution exception: ' + (ex.message || String(ex)));
        }

        return JSON.stringify({
            success: false,
            category: 'SYSTEM_ERROR',
            message: 'AI Concierge service is currently unavailable. Please try again shortly or contact the Front Desk.',
            durationMs: 0,
            errorCategory: 'GATEWAY_UNAVAILABLE'
        });
    },

    type: 'AIConciergeAjax'
});

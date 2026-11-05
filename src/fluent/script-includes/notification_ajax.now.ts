import { ScriptInclude } from '@servicenow/sdk/core';

export const siNotificationAjax = ScriptInclude({
    $id: Now.ID['si_notification_ajax'],
    name: 'NotificationAjax',
    clientCallable: true,
    active: true,
    accessibleFrom: 'public',
    description: 'Athidhi Services — Notification Center Client-Callable Ajax Processor',
    script: Now.include('../../server/script-includes/notification_ajax.js'),
});

var NotificationAjax = Class.create();

NotificationAjax.prototype = Object.extendsObject(AbstractAjaxProcessor, {
    getNotifications: function() {
        var userId = gs.getUserID();
        var user = gs.getUser();
        var limit = parseInt(this.getParameter('sysparm_limit') || '10', 10);
        if (isNaN(limit) || limit <= 0 || limit > 50) limit = 10;

        var roles = [];
        var checkRoles = ['admin', 'manager', 'receptionist', 'housekeeping', 'restaurant', 'maintenance', 'guest'];
        for (var r = 0; r < checkRoles.length; r++) {
            if (user.hasRole('x_2120492_athidhi.' + checkRoles[r])) {
                roles.push(checkRoles[r]);
            }
        }

        var result = {
            unreadCount: 0,
            notifications: []
        };

        try {
            var countGr = new GlideRecord('x_2120492_athidhi_notification');
            countGr.addQuery('is_read', false);
            var qc = countGr.addQuery('recipient', userId);
            qc.addOrCondition('recipient_role', 'all');
            for (var i = 0; i < roles.length; i++) {
                qc.addOrCondition('recipient_role', roles[i]);
            }
            countGr.query();
            result.unreadCount = countGr.getRowCount();

            var notifGr = new GlideRecord('x_2120492_athidhi_notification');
            var q = notifGr.addQuery('recipient', userId);
            q.addOrCondition('recipient_role', 'all');
            for (var j = 0; j < roles.length; j++) {
                q.addOrCondition('recipient_role', roles[j]);
            }
            notifGr.orderByDesc('created_at');
            notifGr.setLimit(limit);
            notifGr.query();

            while (notifGr.next()) {
                var isReadVal = notifGr.getValue('is_read') === '1' || notifGr.getValue('is_read') === true;
                result.notifications.push({
                    sysId: notifGr.getUniqueValue(),
                    sys_id: notifGr.getUniqueValue(),
                    number: notifGr.getValue('notification_number'),
                    type: notifGr.getValue('notification_type'),
                    severity: notifGr.getValue('severity'),
                    title: notifGr.getValue('title'),
                    message: notifGr.getValue('message'),
                    sourceTable: notifGr.getValue('source_table'),
                    sourceSysId: notifGr.getValue('source_sys_id'),
                    actionUrl: notifGr.getValue('action_url'),
                    isRead: isReadVal,
                    is_read: isReadVal,
                    createdAt: notifGr.getValue('created_at'),
                    created_at: notifGr.getValue('created_at')
                });
            }
            result.unread_count = result.unreadCount;
            result.status = 'success';
        } catch (e) {
            gs.error('NotificationAjax.getNotifications error: ' + (e.message || String(e)));
        }

        return JSON.stringify(result);
    },

    getRecentNotifications: function() {
        return this.getNotifications();
    },

    markAsRead: function() {
        var notifId = this.getParameter('sysparm_notification_id') || this.getParameter('sysparm_sys_id');
        var userId = gs.getUserID();
        if (!notifId) return JSON.stringify({ success: false, error: 'Missing notification id' });

        try {
            var gr = new GlideRecord('x_2120492_athidhi_notification');
            if (gr.get(notifId)) {
                var recipient = gr.getValue('recipient');
                var role = gr.getValue('recipient_role');
                var authorized = (recipient === userId || role === 'all' || gs.hasRole('x_2120492_athidhi.admin') || (role && gs.hasRole('x_2120492_athidhi.' + role)));

                if (authorized) {
                    gr.setValue('is_read', true);
                    gr.setValue('read_at', new GlideDateTime().getValue());
                    gr.update();
                    return JSON.stringify({ success: true, sysId: notifId });
                } else {
                    return JSON.stringify({ success: false, error: 'Unauthorized to modify this notification' });
                }
            }
        } catch (e) {
            gs.error('NotificationAjax.markAsRead error: ' + (e.message || String(e)));
        }

        return JSON.stringify({ success: false, error: 'Notification not found' });
    },

    markAllAsRead: function() {
        var userId = gs.getUserID();
        var user = gs.getUser();
        var count = 0;

        try {
            var roles = [];
            var checkRoles = ['admin', 'manager', 'receptionist', 'housekeeping', 'restaurant', 'maintenance', 'guest'];
            for (var r = 0; r < checkRoles.length; r++) {
                if (user.hasRole('x_2120492_athidhi.' + checkRoles[r])) {
                    roles.push(checkRoles[r]);
                }
            }

            var gr = new GlideRecord('x_2120492_athidhi_notification');
            gr.addQuery('is_read', false);
            var q = gr.addQuery('recipient', userId);
            q.addOrCondition('recipient_role', 'all');
            for (var i = 0; i < roles.length; i++) {
                q.addOrCondition('recipient_role', roles[i]);
            }
            gr.query();

            var nowVal = new GlideDateTime().getValue();
            while (gr.next()) {
                gr.setValue('is_read', true);
                gr.setValue('read_at', nowVal);
                gr.update();
                count++;
            }
        } catch (e) {
            gs.error('NotificationAjax.markAllAsRead error: ' + (e.message || String(e)));
        }

        return JSON.stringify({ success: true, markedCount: count });
    },

    markRead: function() {
        return this.markAsRead();
    },

    markAllRead: function() {
        return this.markAllAsRead();
    },

    type: 'NotificationAjax'
});

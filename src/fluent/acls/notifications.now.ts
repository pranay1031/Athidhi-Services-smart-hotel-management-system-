import { Acl } from '@servicenow/sdk/core'
import {
    adminRole,
    managerRole,
    receptionistRole,
    housekeepingRole,
    restaurantRole,
    maintenanceRole,
    guestRole,
} from '../roles.now'

// Notification Read ACL
Acl({
    $id: Now.ID['acl_notif_read'],
    type: 'record',
    table: 'x_2120492_athidhi_notification',
    operation: 'read',
    roles: [
        adminRole,
        managerRole,
        receptionistRole,
        housekeepingRole,
        restaurantRole,
        maintenanceRole,
        guestRole,
    ],
    script: `answer = (current.recipient == gs.getUserID() || current.recipient_role == 'all' || gs.hasRole('x_2120492_athidhi.admin') || (current.recipient_role && gs.hasRole('x_2120492_athidhi.' + current.recipient_role)));`,
    description: 'Enforce role and recipient ownership for notifications',
})

// Notification Write ACL (Users mark their own notifications read)
Acl({
    $id: Now.ID['acl_notif_write'],
    type: 'record',
    table: 'x_2120492_athidhi_notification',
    operation: 'write',
    roles: [
        adminRole,
        managerRole,
        receptionistRole,
        housekeepingRole,
        restaurantRole,
        maintenanceRole,
        guestRole,
    ],
    script: `answer = (current.recipient == gs.getUserID() || gs.hasRole('x_2120492_athidhi.admin'));`,
    description: 'Allow users to update/mark read their own notifications',
})

// Notification Create ACL (System and staff operations)
Acl({
    $id: Now.ID['acl_notif_create'],
    type: 'record',
    table: 'x_2120492_athidhi_notification',
    operation: 'create',
    roles: [
        adminRole,
        managerRole,
        receptionistRole,
        housekeepingRole,
        restaurantRole,
        maintenanceRole,
        guestRole,
    ],
    description: 'Allow application roles and automated flows to generate notifications',
})

// Notification Delete ACL (Admin only)
Acl({
    $id: Now.ID['acl_notif_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_notification',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to purge expired notifications',
})

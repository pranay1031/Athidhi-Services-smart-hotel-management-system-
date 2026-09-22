import { Acl } from '@servicenow/sdk/core';
import {
    guestRole,
    receptionistRole,
    housekeepingRole,
    maintenanceRole,
    restaurantRole,
    managerRole,
    adminRole,
} from '../roles.now';

export const aclAiLogRead = Acl({
    $id: Now.ID['acl_ai_log_read'],
    table: 'x_2120492_athidhi_ai_interaction_log',
    type: 'record',
    operation: 'read',
    roles: [managerRole, adminRole],
    description: 'Only Managers and Admins may view AI interaction audit logs.',
});

export const aclAiLogCreate = Acl({
    $id: Now.ID['acl_ai_log_create'],
    table: 'x_2120492_athidhi_ai_interaction_log',
    type: 'record',
    operation: 'create',
    roles: [
        guestRole,
        receptionistRole,
        housekeepingRole,
        maintenanceRole,
        restaurantRole,
        managerRole,
        adminRole,
    ],
    description: 'Authenticated users can record AI interaction audit logs through the AI Gateway.',
});

export const aclAiLogWrite = Acl({
    $id: Now.ID['acl_ai_log_write'],
    table: 'x_2120492_athidhi_ai_interaction_log',
    type: 'record',
    operation: 'write',
    roles: [adminRole],
    description: 'Only Admins may update AI interaction logs.',
});

export const aclAiLogDelete = Acl({
    $id: Now.ID['acl_ai_log_delete'],
    table: 'x_2120492_athidhi_ai_interaction_log',
    type: 'record',
    operation: 'delete',
    roles: [adminRole],
    description: 'Only Admins may purge AI interaction logs.',
});

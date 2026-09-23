import { Acl } from '@servicenow/sdk/core';
import {
    managerRole,
    adminRole,
} from '../roles.now';

export const aclIntLogRead = Acl({
    $id: Now.ID['acl_int_log_read'],
    table: 'x_2120492_athidhi_integration_log',
    type: 'record',
    operation: 'read',
    roles: [managerRole, adminRole],
    description: 'Allow managers and administrators to view external integration audit logs. Guests and regular staff are strictly excluded.',
});

export const aclIntLogCreate = Acl({
    $id: Now.ID['acl_int_log_create'],
    table: 'x_2120492_athidhi_integration_log',
    type: 'record',
    operation: 'create',
    roles: [managerRole, adminRole],
    description: 'Allow managers, admins, and elevated integration background services to create audit logs.',
});

export const aclIntLogWrite = Acl({
    $id: Now.ID['acl_int_log_write'],
    table: 'x_2120492_athidhi_integration_log',
    type: 'record',
    operation: 'write',
    roles: [adminRole],
    description: 'Allow only administrators to modify integration audit logs.',
});

export const aclIntLogDelete = Acl({
    $id: Now.ID['acl_int_log_delete'],
    table: 'x_2120492_athidhi_integration_log',
    type: 'record',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow only administrators to purge integration audit logs.',
});

import { Acl } from '@servicenow/sdk/core'
import {
    adminRole,
    managerRole,
    receptionistRole,
    housekeepingRole,
    maintenanceRole,
    restaurantRole,
} from '../roles.now'

// --- Department ACLs ---
Acl({
    $id: Now.ID['acl_dept_read'],
    type: 'record',
    table: 'x_2120492_athidhi_department',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, restaurantRole],
    description: 'Allow hotel staff to view departments',
})

Acl({
    $id: Now.ID['acl_dept_create'],
    type: 'record',
    table: 'x_2120492_athidhi_department',
    operation: 'create',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to create departments',
})

Acl({
    $id: Now.ID['acl_dept_write'],
    type: 'record',
    table: 'x_2120492_athidhi_department',
    operation: 'write',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to update departments',
})

Acl({
    $id: Now.ID['acl_dept_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_department',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete departments',
})

// --- Staff Profile ACLs ---
Acl({
    $id: Now.ID['acl_staff_read_manager'],
    type: 'record',
    table: 'x_2120492_athidhi_staff_profile',
    operation: 'read',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to view all staff profiles',
})

Acl({
    $id: Now.ID['acl_staff_read_self'],
    type: 'record',
    table: 'x_2120492_athidhi_staff_profile',
    operation: 'read',
    roles: [receptionistRole, housekeepingRole, maintenanceRole, restaurantRole],
    script: `answer = (current.employee == gs.getUserID());`,
    description: 'Allow staff members to view their own staff profile record',
})

Acl({
    $id: Now.ID['acl_staff_create'],
    type: 'record',
    table: 'x_2120492_athidhi_staff_profile',
    operation: 'create',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to create staff profiles',
})

Acl({
    $id: Now.ID['acl_staff_write'],
    type: 'record',
    table: 'x_2120492_athidhi_staff_profile',
    operation: 'write',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to update staff profiles',
})

Acl({
    $id: Now.ID['acl_staff_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_staff_profile',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete staff profiles',
})

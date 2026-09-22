import { Acl } from '@servicenow/sdk/core'
import {
    adminRole,
    managerRole,
    receptionistRole,
    housekeepingRole,
    maintenanceRole,
    restaurantRole,
    guestRole,
} from '../roles.now'

// --- Stay ACLs ---
Acl({
    $id: Now.ID['acl_stay_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_stay',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to view all guest stay records',
})

Acl({
    $id: Now.ID['acl_stay_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_stay',
    operation: 'read',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to view only their own stay records',
})

Acl({
    $id: Now.ID['acl_stay_create'],
    type: 'record',
    table: 'x_2120492_athidhi_stay',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to create stay records upon check-in',
})

Acl({
    $id: Now.ID['acl_stay_write'],
    type: 'record',
    table: 'x_2120492_athidhi_stay',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to update stay records',
})

Acl({
    $id: Now.ID['acl_stay_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_stay',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete stay records',
})

// --- Service Request ACLs ---
Acl({
    $id: Now.ID['acl_srv_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, restaurantRole],
    description: 'Allow hotel operational staff to view guest service requests',
})

Acl({
    $id: Now.ID['acl_srv_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request',
    operation: 'read',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to view only their own service requests',
})

Acl({
    $id: Now.ID['acl_srv_create_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to log service requests on behalf of guests',
})

Acl({
    $id: Now.ID['acl_srv_create_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request',
    operation: 'create',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to submit service requests for their own stay',
})

Acl({
    $id: Now.ID['acl_srv_write_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, restaurantRole],
    description: 'Allow operational departments to update service request status and resolution notes',
})

Acl({
    $id: Now.ID['acl_srv_write_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request',
    operation: 'write',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail() && current.status == 'new');`,
    description: 'Allow guests to update their service request before it is accepted',
})

Acl({
    $id: Now.ID['acl_srv_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow managers and administrators to cancel or delete service requests',
})

// --- Work Task ACLs ---
Acl({
    $id: Now.ID['acl_work_task_read'],
    type: 'record',
    table: 'x_2120492_athidhi_work_task',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, restaurantRole],
    description: 'Allow all operational staff to view work tasks',
})

Acl({
    $id: Now.ID['acl_work_task_create'],
    type: 'record',
    table: 'x_2120492_athidhi_work_task',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, restaurantRole],
    description: 'Allow operational departments to create internal work tasks',
})

Acl({
    $id: Now.ID['acl_work_task_write'],
    type: 'record',
    table: 'x_2120492_athidhi_work_task',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, restaurantRole],
    description: 'Allow operational staff to update work task states and notes',
})

Acl({
    $id: Now.ID['acl_work_task_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_work_task',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow managers and administrators to delete work tasks',
})

// --- Housekeeping Task ACLs ---
Acl({
    $id: Now.ID['acl_hk_task_read'],
    type: 'record',
    table: 'x_2120492_athidhi_housekeeping_task',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole],
    description: 'Allow housekeeping staff and front desk to view housekeeping tasks',
})

Acl({
    $id: Now.ID['acl_hk_task_create'],
    type: 'record',
    table: 'x_2120492_athidhi_housekeeping_task',
    operation: 'create',
    roles: [adminRole, managerRole, housekeepingRole],
    description: 'Allow housekeeping supervisors and managers to schedule housekeeping tasks',
})

Acl({
    $id: Now.ID['acl_hk_task_write'],
    type: 'record',
    table: 'x_2120492_athidhi_housekeeping_task',
    operation: 'write',
    roles: [adminRole, managerRole, housekeepingRole],
    description: 'Allow housekeeping staff to update task status, completion, and inspection details',
})

Acl({
    $id: Now.ID['acl_hk_task_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_housekeeping_task',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow managers and administrators to delete housekeeping tasks',
})

// --- Maintenance Request ACLs ---
Acl({
    $id: Now.ID['acl_mnt_read'],
    type: 'record',
    table: 'x_2120492_athidhi_maintenance_request',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, maintenanceRole],
    description: 'Allow maintenance staff and front desk to view maintenance requests',
})

Acl({
    $id: Now.ID['acl_mnt_create'],
    type: 'record',
    table: 'x_2120492_athidhi_maintenance_request',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole, maintenanceRole],
    description: 'Allow staff to create maintenance requests',
})

Acl({
    $id: Now.ID['acl_mnt_write'],
    type: 'record',
    table: 'x_2120492_athidhi_maintenance_request',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole, maintenanceRole],
    description: 'Allow maintenance staff to update request status and resolution notes',
})

Acl({
    $id: Now.ID['acl_mnt_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_maintenance_request',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow managers and administrators to delete maintenance requests',
})

// --- Incident ACLs ---
Acl({
    $id: Now.ID['acl_inc_read'],
    type: 'record',
    table: 'x_2120492_athidhi_incident',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk and management to view hotel incidents',
})

Acl({
    $id: Now.ID['acl_inc_create'],
    type: 'record',
    table: 'x_2120492_athidhi_incident',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk and management to report incidents',
})

Acl({
    $id: Now.ID['acl_inc_write'],
    type: 'record',
    table: 'x_2120492_athidhi_incident',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow management and front desk to manage incidents',
})

Acl({
    $id: Now.ID['acl_inc_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_incident',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow only administrators to delete incident records',
})

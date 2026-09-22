import { Acl } from '@servicenow/sdk/core'
import {
    adminRole,
    managerRole,
    receptionistRole,
    housekeepingRole,
    restaurantRole,
    guestRole,
} from '../roles.now'

// --- Guest Profile ACLs ---
Acl({
    $id: Now.ID['acl_guest_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_guest',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow hotel front desk staff and managers to view guest records',
})

Acl({
    $id: Now.ID['acl_guest_read_self'],
    type: 'record',
    table: 'x_2120492_athidhi_guest',
    operation: 'read',
    roles: [guestRole],
    script: `answer = (current.email && current.email == gs.getUser().getEmail());`,
    description: 'Allow guests to securely view only their own profile',
})

Acl({
    $id: Now.ID['acl_guest_create_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_guest',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to create guest records',
})

Acl({
    $id: Now.ID['acl_guest_create_self'],
    type: 'record',
    table: 'x_2120492_athidhi_guest',
    operation: 'create',
    roles: [guestRole],
    description: 'Allow guests to register their own profile',
})

Acl({
    $id: Now.ID['acl_guest_write_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_guest',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to update guest records',
})

Acl({
    $id: Now.ID['acl_guest_write_self'],
    type: 'record',
    table: 'x_2120492_athidhi_guest',
    operation: 'write',
    roles: [guestRole],
    script: `answer = (current.email && current.email == gs.getUser().getEmail());`,
    description: 'Allow guests to update only their own profile information',
})

Acl({
    $id: Now.ID['acl_guest_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_guest',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow administrators and managers to delete guest records',
})

// --- Guest Preference ACLs ---
Acl({
    $id: Now.ID['acl_guest_pref_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_guest_preference',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, restaurantRole, housekeepingRole],
    description: 'Allow operational staff to view guest preferences for service delivery',
})

Acl({
    $id: Now.ID['acl_guest_pref_read_self'],
    type: 'record',
    table: 'x_2120492_athidhi_guest_preference',
    operation: 'read',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to view only their own preferences',
})

Acl({
    $id: Now.ID['acl_guest_pref_create_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_guest_preference',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff to record guest preferences',
})

Acl({
    $id: Now.ID['acl_guest_pref_create_self'],
    type: 'record',
    table: 'x_2120492_athidhi_guest_preference',
    operation: 'create',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to add preferences to their own profile',
})

Acl({
    $id: Now.ID['acl_guest_pref_write_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_guest_preference',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff to update guest preferences',
})

Acl({
    $id: Now.ID['acl_guest_pref_write_self'],
    type: 'record',
    table: 'x_2120492_athidhi_guest_preference',
    operation: 'write',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to update their own preferences',
})

Acl({
    $id: Now.ID['acl_guest_pref_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_guest_preference',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow managers and administrators to delete guest preference records',
})

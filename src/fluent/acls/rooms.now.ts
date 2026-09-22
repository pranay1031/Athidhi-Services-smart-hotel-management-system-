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

// --- Room Type ACLs ---
Acl({
    $id: Now.ID['acl_room_type_read'],
    type: 'record',
    table: 'x_2120492_athidhi_room_type',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, restaurantRole, guestRole],
    description: 'Allow staff and guests to view room types',
})

Acl({
    $id: Now.ID['acl_room_type_create'],
    type: 'record',
    table: 'x_2120492_athidhi_room_type',
    operation: 'create',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to create room types',
})

Acl({
    $id: Now.ID['acl_room_type_write'],
    type: 'record',
    table: 'x_2120492_athidhi_room_type',
    operation: 'write',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to update room types',
})

Acl({
    $id: Now.ID['acl_room_type_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_room_type',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete room types',
})

// --- Room ACLs ---
Acl({
    $id: Now.ID['acl_room_read'],
    type: 'record',
    table: 'x_2120492_athidhi_room',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole],
    description: 'Allow hotel operational staff to view room records',
})

Acl({
    $id: Now.ID['acl_room_create'],
    type: 'record',
    table: 'x_2120492_athidhi_room',
    operation: 'create',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to register rooms',
})

Acl({
    $id: Now.ID['acl_room_write'],
    type: 'record',
    table: 'x_2120492_athidhi_room',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole],
    description: 'Allow operational staff to update room status (housekeeping, occupancy, maintenance)',
})

Acl({
    $id: Now.ID['acl_room_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_room',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete room records',
})

// --- Amenity ACLs ---
Acl({
    $id: Now.ID['acl_amenity_read'],
    type: 'record',
    table: 'x_2120492_athidhi_amenity',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, restaurantRole, guestRole],
    description: 'Allow all roles to view hotel amenities',
})

Acl({
    $id: Now.ID['acl_amenity_create'],
    type: 'record',
    table: 'x_2120492_athidhi_amenity',
    operation: 'create',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to create amenities',
})

Acl({
    $id: Now.ID['acl_amenity_write'],
    type: 'record',
    table: 'x_2120492_athidhi_amenity',
    operation: 'write',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to update amenities',
})

Acl({
    $id: Now.ID['acl_amenity_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_amenity',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete amenities',
})

// --- Room Amenity ACLs ---
Acl({
    $id: Now.ID['acl_room_amenity_read'],
    type: 'record',
    table: 'x_2120492_athidhi_room_amenity',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, guestRole],
    description: 'Allow staff and guests to view room amenity assignments',
})

Acl({
    $id: Now.ID['acl_room_amenity_create'],
    type: 'record',
    table: 'x_2120492_athidhi_room_amenity',
    operation: 'create',
    roles: [adminRole, managerRole, housekeepingRole],
    description: 'Allow managers and housekeeping to assign amenities to rooms',
})

Acl({
    $id: Now.ID['acl_room_amenity_write'],
    type: 'record',
    table: 'x_2120492_athidhi_room_amenity',
    operation: 'write',
    roles: [adminRole, managerRole, housekeepingRole],
    description: 'Allow managers and housekeeping to update room amenity records',
})

Acl({
    $id: Now.ID['acl_room_amenity_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_room_amenity',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow managers and admins to remove room amenity records',
})

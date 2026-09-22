import { Acl } from '@servicenow/sdk/core'
import {
    adminRole,
    managerRole,
    receptionistRole,
    guestRole,
} from '../roles.now'

// --- Reservation ACLs ---
Acl({
    $id: Now.ID['acl_res_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_reservation',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to view all reservations',
})

Acl({
    $id: Now.ID['acl_res_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_reservation',
    operation: 'read',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to securely view only their own reservations',
})

Acl({
    $id: Now.ID['acl_res_create_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_reservation',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to create reservations',
})

Acl({
    $id: Now.ID['acl_res_create_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_reservation',
    operation: 'create',
    roles: [guestRole],
    description: 'Allow guests to create bookings for themselves',
})

Acl({
    $id: Now.ID['acl_res_write_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_reservation',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to update reservations',
})

Acl({
    $id: Now.ID['acl_res_write_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_reservation',
    operation: 'write',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail() && (current.status == 'draft' || current.status == 'confirmed'));`,
    description: 'Allow guests to modify their own upcoming/draft reservations',
})

Acl({
    $id: Now.ID['acl_res_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_reservation',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow administrators and managers to cancel or remove reservations',
})

// --- Payment ACLs ---
Acl({
    $id: Now.ID['acl_pay_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_payment',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to view payment transactions',
})

Acl({
    $id: Now.ID['acl_pay_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_payment',
    operation: 'read',
    roles: [guestRole],
    script: `answer = (current.reservation && current.reservation.guest && current.reservation.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to view payment records associated with their own reservations',
})

Acl({
    $id: Now.ID['acl_pay_create_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_payment',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to record payments',
})

Acl({
    $id: Now.ID['acl_pay_create_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_payment',
    operation: 'create',
    roles: [guestRole],
    script: `answer = (current.reservation && current.reservation.guest && current.reservation.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to submit payment for their own reservations',
})

Acl({
    $id: Now.ID['acl_pay_write_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_payment',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to update payment records',
})

Acl({
    $id: Now.ID['acl_pay_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_payment',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow only administrators to delete payment records',
})

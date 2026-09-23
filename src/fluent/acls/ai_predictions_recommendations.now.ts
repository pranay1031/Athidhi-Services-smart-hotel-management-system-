import { Acl } from '@servicenow/sdk/core';
import {
    guestRole,
    managerRole,
    adminRole,
} from '../roles.now';

// ==========================================
// AI PREDICTION ACLS
// ==========================================
export const aclPredReadStaff = Acl({
    $id: Now.ID['acl_pred_read_staff'],
    table: 'x_2120492_athidhi_ai_prediction',
    type: 'record',
    operation: 'read',
    roles: [managerRole, adminRole],
    description: 'Allow hotel managers and administrators to view operational predictions. Guests are strictly excluded.',
});

export const aclPredCreate = Acl({
    $id: Now.ID['acl_pred_create'],
    table: 'x_2120492_athidhi_ai_prediction',
    type: 'record',
    operation: 'create',
    roles: [managerRole, adminRole],
    description: 'Allow managers, admins, and operational intelligence services to generate predictions.',
});

export const aclPredWrite = Acl({
    $id: Now.ID['acl_pred_write'],
    table: 'x_2120492_athidhi_ai_prediction',
    type: 'record',
    operation: 'write',
    roles: [managerRole, adminRole],
    description: 'Allow managers and admins to update or dismiss predictions.',
});

export const aclPredDelete = Acl({
    $id: Now.ID['acl_pred_delete'],
    table: 'x_2120492_athidhi_ai_prediction',
    type: 'record',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow only administrators to delete prediction records.',
});

// ==========================================
// AI RECOMMENDATION ACLS
// ==========================================
export const aclRecReadStaff = Acl({
    $id: Now.ID['acl_rec_read_staff'],
    table: 'x_2120492_athidhi_ai_recommendation',
    type: 'record',
    operation: 'read',
    roles: [managerRole, adminRole],
    description: 'Allow managers and administrators to view all operational and guest recommendations.',
});

export const aclRecReadGuest = Acl({
    $id: Now.ID['acl_rec_read_guest'],
    table: 'x_2120492_athidhi_ai_recommendation',
    type: 'record',
    operation: 'read',
    roles: [guestRole],
    script: "answer = (current.audience == 'guest' && current.guest && current.guest.email == gs.getUser().getEmail());",
    description: 'Allow authenticated guests to view ONLY recommendations explicitly tailored for their verified profile.',
});

export const aclRecCreate = Acl({
    $id: Now.ID['acl_rec_create'],
    table: 'x_2120492_athidhi_ai_recommendation',
    type: 'record',
    operation: 'create',
    roles: [managerRole, adminRole],
    description: 'Allow managers, admins, and operational intelligence services to generate recommendations.',
});

export const aclRecWrite = Acl({
    $id: Now.ID['acl_rec_write'],
    table: 'x_2120492_athidhi_ai_recommendation',
    type: 'record',
    operation: 'write',
    roles: [managerRole, adminRole],
    description: 'Allow managers and admins to update recommendation status.',
});

export const aclRecDelete = Acl({
    $id: Now.ID['acl_rec_delete'],
    table: 'x_2120492_athidhi_ai_recommendation',
    type: 'record',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow only administrators to purge recommendation records.',
});

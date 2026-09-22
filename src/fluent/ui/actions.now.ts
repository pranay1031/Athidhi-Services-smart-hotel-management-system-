import { UiAction } from '@servicenow/sdk/core';
import {
    receptionistRole,
    housekeepingRole,
    maintenanceRole,
    restaurantRole,
    managerRole,
    adminRole,
} from '../roles.now';

// =========================================================================
// FRONT DESK / RECEPTIONIST UI ACTIONS
// =========================================================================

/**
 * Check In Guest: Transition reservation from confirmed to checked_in,
 * create Stay record with status checked_in, and update Room occupancy.
 */
export const actionCheckIn = UiAction({
    $id: Now.ID['ui_act_check_in'],
    table: 'x_2120492_athidhi_reservation',
    name: 'Check In',
    actionName: 'check_in_guest',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [receptionistRole, managerRole, adminRole],
    condition: "current.status == 'confirmed'",
    script: `
(function(current, previous) {
    if (!current.room) {
        gs.addErrorMessage("Cannot check in: No room assigned to this reservation.");
        current.setAbortAction(true);
        return;
    }

    current.status = 'checked_in';
    current.update();

    var stayGr = new GlideRecord('x_2120492_athidhi_stay');
    stayGr.initialize();
    stayGr.reservation = current.sys_id;
    stayGr.guest = current.guest;
    stayGr.room = current.room;
    stayGr.actual_check_in = new GlideDateTime();
    stayGr.expected_check_out = current.check_out;
    stayGr.status = 'checked_in';
    stayGr.adults = current.adults;
    stayGr.children = current.children;
    stayGr.special_notes = current.special_requests;
    var stayId = stayGr.insert();

    var roomGr = new GlideRecord('x_2120492_athidhi_room');
    if (roomGr.get(current.room)) {
        roomGr.status = 'occupied';
        roomGr.occupancy_status = 'occupied';
        roomGr.current_reservation = current.sys_id;
        roomGr.current_stay = stayId;
        roomGr.update();
    }

    gs.addInfoMessage("Guest checked in successfully. Stay " + stayGr.stay_number + " created.");
    action.setRedirectURL(current);
})(current, previous);
`,
});

/**
 * Check Out Guest: Transition stay to checked_out, update reservation,
 * mark room dirty, and create automated housekeeping check-out cleaning task.
 */
export const actionCheckOut = UiAction({
    $id: Now.ID['ui_act_check_out'],
    table: 'x_2120492_athidhi_stay',
    name: 'Check Out',
    actionName: 'check_out_guest',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [receptionistRole, managerRole, adminRole],
    condition: "current.status == 'checked_in'",
    script: `
(function(current, previous) {
    current.status = 'checked_out';
    current.actual_check_out = new GlideDateTime();
    current.update();

    if (current.reservation) {
        var resGr = new GlideRecord('x_2120492_athidhi_reservation');
        if (resGr.get(current.reservation)) {
            resGr.status = 'checked_out';
            resGr.update();
        }
    }

    if (current.room) {
        var roomGr = new GlideRecord('x_2120492_athidhi_room');
        if (roomGr.get(current.room)) {
            roomGr.status = 'cleaning';
            roomGr.occupancy_status = 'vacant';
            roomGr.housekeeping_status = 'dirty';
            roomGr.current_reservation = '';
            roomGr.current_stay = '';
            roomGr.update();
        }

        var hkGr = new GlideRecord('x_2120492_athidhi_housekeeping_task');
        hkGr.initialize();
        hkGr.room = current.room;
        hkGr.stay = current.sys_id;
        hkGr.task_type = 'check_out_cleaning';
        hkGr.priority = 'high';
        hkGr.status = 'pending';
        hkGr.notes = 'Automated check-out cleaning for Stay ' + current.stay_number;
        hkGr.insert();
    }

    gs.addInfoMessage("Guest checked out successfully. Housekeeping task dispatched.");
    action.setRedirectURL(current);
})(current, previous);
`,
});

// =========================================================================
// RESTAURANT / KITCHEN UI ACTIONS
// =========================================================================

export const actionAcceptFoodOrder = UiAction({
    $id: Now.ID['ui_act_food_accept'],
    table: 'x_2120492_athidhi_food_order',
    name: 'Accept Order',
    actionName: 'accept_food_order',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [restaurantRole, managerRole, adminRole],
    condition: "current.status == 'new'",
    script: `
current.status = 'accepted';
current.update();
gs.addInfoMessage("Order " + current.order_number + " accepted.");
action.setRedirectURL(current);
`,
});

export const actionPrepareFoodOrder = UiAction({
    $id: Now.ID['ui_act_food_prepare'],
    table: 'x_2120492_athidhi_food_order',
    name: 'Start Preparing',
    actionName: 'prepare_food_order',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [restaurantRole, managerRole, adminRole],
    condition: "current.status == 'accepted'",
    script: `
current.status = 'preparing';
current.update();
gs.addInfoMessage("Order " + current.order_number + " is now preparing.");
action.setRedirectURL(current);
`,
});

export const actionReadyFoodOrder = UiAction({
    $id: Now.ID['ui_act_food_ready'],
    table: 'x_2120492_athidhi_food_order',
    name: 'Order Ready',
    actionName: 'ready_food_order',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [restaurantRole, managerRole, adminRole],
    condition: "current.status == 'preparing'",
    script: `
current.status = 'ready';
current.update();
gs.addInfoMessage("Order " + current.order_number + " is ready.");
action.setRedirectURL(current);
`,
});

export const actionOutForDeliveryFoodOrder = UiAction({
    $id: Now.ID['ui_act_food_out_delivery'],
    table: 'x_2120492_athidhi_food_order',
    name: 'Out for Delivery',
    actionName: 'out_delivery_food_order',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [restaurantRole, managerRole, adminRole],
    condition: "current.status == 'ready' && current.order_type == 'room_service'",
    script: `
current.status = 'out_for_delivery';
current.update();
gs.addInfoMessage("Order " + current.order_number + " is out for delivery.");
action.setRedirectURL(current);
`,
});

export const actionDeliveredFoodOrder = UiAction({
    $id: Now.ID['ui_act_food_delivered'],
    table: 'x_2120492_athidhi_food_order',
    name: 'Mark Delivered',
    actionName: 'delivered_food_order',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [restaurantRole, managerRole, adminRole],
    condition: "current.status == 'out_for_delivery' || (current.status == 'ready' && current.order_type != 'room_service')",
    script: `
current.status = 'delivered';
current.update();
gs.addInfoMessage("Order " + current.order_number + " marked delivered.");
action.setRedirectURL(current);
`,
});

export const actionCancelFoodOrder = UiAction({
    $id: Now.ID['ui_act_food_cancel'],
    table: 'x_2120492_athidhi_food_order',
    name: 'Cancel Order',
    actionName: 'cancel_food_order',
    active: true,
    form: {
        showButton: true,
        style: 'destructive',
    },
    roles: [restaurantRole, managerRole, adminRole],
    condition: "current.status == 'new' || current.status == 'accepted'",
    script: `
current.status = 'cancelled';
current.update();
gs.addInfoMessage("Order " + current.order_number + " has been cancelled.");
action.setRedirectURL(current);
`,
});

// =========================================================================
// HOUSEKEEPING UI ACTIONS (STRICT INSPECTION SAFETY AUDITED)
// =========================================================================

export const actionStartCleaning = UiAction({
    $id: Now.ID['ui_act_hk_start'],
    table: 'x_2120492_athidhi_housekeeping_task',
    name: 'Start Cleaning',
    actionName: 'start_cleaning',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [housekeepingRole, managerRole, adminRole],
    condition: "current.status == 'pending' || current.status == 'assigned'",
    script: `
(function(current, previous) {
    current.status = 'in_progress';
    if (!current.assigned_to) {
        current.assigned_to = gs.getUserID();
    }
    current.update();

    if (current.room) {
        var rm = new GlideRecord('x_2120492_athidhi_room');
        if (rm.get(current.room)) {
            rm.housekeeping_status = 'in_progress';
            rm.update();
        }
    }
    gs.addInfoMessage("Cleaning in progress for " + current.task_number);
    action.setRedirectURL(current);
})(current, previous);
`,
});

/**
 * Complete Cleaning:
 * If inspection_required = true:
 * - MUST NOT mark room clean
 * - MUST NOT mark room available
 * - MUST NOT set inspection_status to passed
 * - Sets inspection_status to pending
 * - Keeps room status cleaning and housekeeping_status inspected (pending supervisor approval)
 * If inspection_required = false:
 * - Sets inspection_status to not_required
 * - Marks room clean and available
 */
export const actionCompleteCleaning = UiAction({
    $id: Now.ID['ui_act_hk_complete'],
    table: 'x_2120492_athidhi_housekeeping_task',
    name: 'Complete Cleaning',
    actionName: 'complete_cleaning',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [housekeepingRole, managerRole, adminRole],
    condition: "current.status == 'in_progress'",
    script: `
(function(current, previous) {
    current.status = 'completed';
    current.completed_at = new GlideDateTime();
    var isInspectReq = (current.inspection_required === true || current.inspection_required == 'true');
    
    if (isInspectReq) {
        current.inspection_status = 'pending';
    } else {
        current.inspection_status = 'not_required';
    }
    current.update();

    if (current.room) {
        var rm = new GlideRecord('x_2120492_athidhi_room');
        if (rm.get(current.room)) {
            if (isInspectReq) {
                // Inspection required: room is pending supervisor inspection; CANNOT be clean or available
                rm.housekeeping_status = 'inspected';
                rm.status = 'cleaning';
            } else {
                // No inspection required: room is immediately clean and available
                rm.housekeeping_status = 'clean';
                if (rm.status == 'cleaning' || rm.status == 'dirty') {
                    rm.status = 'available';
                }
            }
            rm.update();
        }
    }

    if (isInspectReq) {
        gs.addInfoMessage("Cleaning completed. Task " + current.task_number + " is now pending supervisor inspection. Room remains unavailable.");
    } else {
        gs.addInfoMessage("Housekeeping task " + current.task_number + " completed. Room is verified clean and available.");
    }
    action.setRedirectURL(current);
})(current, previous);
`,
});

/**
 * Pass Inspection:
 * Exclusively transitions room to clean + available + vacant
 */
export const actionPassInspection = UiAction({
    $id: Now.ID['ui_act_hk_pass_inspect'],
    table: 'x_2120492_athidhi_housekeeping_task',
    name: 'Pass Inspection',
    actionName: 'pass_inspection',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [housekeepingRole, managerRole, adminRole],
    condition: "current.status == 'completed' && current.inspection_status == 'pending'",
    script: `
(function(current, previous) {
    current.inspection_status = 'passed';
    current.inspected_by = gs.getUserID();
    current.update();

    if (current.room) {
        var rm = new GlideRecord('x_2120492_athidhi_room');
        if (rm.get(current.room)) {
            rm.housekeeping_status = 'clean';
            if (rm.occupancy_status != 'occupied') {
                rm.status = 'available';
                rm.occupancy_status = 'vacant';
            }
            rm.update();
        }
    }
    gs.addInfoMessage("Inspection passed for room. Room is verified clean and available.");
    action.setRedirectURL(current);
})(current, previous);
`,
});

/**
 * Fail Inspection:
 * Sets inspection_status to failed, returns task to in_progress rework state, keeps room dirty and unavailable
 */
export const actionFailInspection = UiAction({
    $id: Now.ID['ui_act_hk_fail_inspect'],
    table: 'x_2120492_athidhi_housekeeping_task',
    name: 'Fail Inspection',
    actionName: 'fail_inspection',
    active: true,
    form: {
        showButton: true,
        style: 'destructive',
    },
    roles: [housekeepingRole, managerRole, adminRole],
    condition: "current.status == 'completed' && current.inspection_status == 'pending'",
    script: `
(function(current, previous) {
    current.inspection_status = 'failed';
    current.status = 'in_progress';
    current.inspected_by = gs.getUserID();
    current.update();

    if (current.room) {
        var rm = new GlideRecord('x_2120492_athidhi_room');
        if (rm.get(current.room)) {
            rm.housekeeping_status = 'dirty';
            rm.status = 'cleaning';
            rm.update();
        }
    }
    gs.addErrorMessage("Inspection failed. Task reopened to in_progress for re-cleaning. Room remains unavailable.");
    action.setRedirectURL(current);
})(current, previous);
`,
});

// =========================================================================
// MAINTENANCE UI ACTIONS
// =========================================================================

export const actionStartMaintenance = UiAction({
    $id: Now.ID['ui_act_mnt_start'],
    table: 'x_2120492_athidhi_maintenance_request',
    name: 'Start Maintenance',
    actionName: 'start_maintenance',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [maintenanceRole, managerRole, adminRole],
    condition: "current.status == 'new' || current.status == 'assigned'",
    script: `
current.status = 'in_progress';
if (!current.assigned_to) {
    current.assigned_to = gs.getUserID();
}
current.update();
gs.addInfoMessage("Maintenance work started on " + current.request_number);
action.setRedirectURL(current);
`,
});

export const actionResolveMaintenance = UiAction({
    $id: Now.ID['ui_act_mnt_resolve'],
    table: 'x_2120492_athidhi_maintenance_request',
    name: 'Resolve Request',
    actionName: 'resolve_maintenance',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [maintenanceRole, managerRole, adminRole],
    condition: "current.status == 'in_progress' || current.status == 'waiting'",
    script: `
current.status = 'resolved';
current.resolved_at = new GlideDateTime();
if (!current.resolution_notes) {
    current.resolution_notes = 'Issue addressed and resolved by technician.';
}
current.update();
gs.addInfoMessage("Maintenance request " + current.request_number + " resolved.");
action.setRedirectURL(current);
`,
});

// =========================================================================
// SERVICE REQUEST UI ACTIONS
// =========================================================================

export const actionAcceptServiceRequest = UiAction({
    $id: Now.ID['ui_act_srv_accept'],
    table: 'x_2120492_athidhi_service_request',
    name: 'Accept Request',
    actionName: 'accept_service_request',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [receptionistRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
    condition: "current.status == 'new'",
    script: `
current.status = 'accepted';
if (!current.assigned_to) {
    current.assigned_to = gs.getUserID();
}
current.update();
gs.addInfoMessage("Service request " + current.request_number + " accepted.");
action.setRedirectURL(current);
`,
});

export const actionCompleteServiceRequest = UiAction({
    $id: Now.ID['ui_act_srv_complete'],
    table: 'x_2120492_athidhi_service_request',
    name: 'Complete Request',
    actionName: 'complete_service_request',
    active: true,
    form: {
        showButton: true,
        style: 'primary',
    },
    roles: [receptionistRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
    condition: "current.status == 'in_progress' || current.status == 'accepted'",
    script: `
current.status = 'completed';
current.completed_at = new GlideDateTime();
if (!current.resolution_notes) {
    current.resolution_notes = 'Service request fulfilled.';
}
current.update();
gs.addInfoMessage("Service request " + current.request_number + " completed.");
action.setRedirectURL(current);
`,
});

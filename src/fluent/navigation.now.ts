import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import {
    guestRole,
    receptionistRole,
    housekeepingRole,
    maintenanceRole,
    restaurantRole,
    managerRole,
    adminRole,
} from './roles.now'

// =========================================================================
// APPLICATION MENU: ATHIDHI SERVICES
// =========================================================================
export const athidhiApplicationMenu = ApplicationMenu({
    $id: Now.ID['app_menu_athidhi'],
    title: 'Athidhi Services',
    hint: 'Smart Hotel Management System',
    description: 'Athidhi Services Smart Hotel Management System Navigation',
    roles: [
        receptionistRole,
        housekeepingRole,
        maintenanceRole,
        restaurantRole,
        managerRole,
        adminRole,
        guestRole,
    ],
    active: true,
})

// =========================================================================
// MODULE GROUP 0 — GUEST SERVICES PORTAL (GUEST SELF-SERVICE)
// =========================================================================
Record({
    $id: Now.ID['mod_sep_guest'],
    table: 'sys_app_module',
    data: {
        title: 'Guest Self-Service',
        application: athidhiApplicationMenu,
        link_type: 'SEPARATOR',
        order: 10,
        roles: [guestRole],
        active: true,
    },
})


Record({
    $id: Now.ID['mod_guest_portal_hub'],
    table: 'sys_app_module',
    data: {
        title: 'Guest Portal Hub',
        application: athidhiApplicationMenu,
        link_type: 'DIRECT',
        query: 'x_2120492_athidhi_guest_portal.do',
        order: 12,
        roles: [guestRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_guest_active_stay'],
    table: 'sys_app_module',
    data: {
        title: 'My Active Stay',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_stay',
        link_type: 'LIST',
        filter: 'status=checked_in',
        order: 20,
        roles: [guestRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_guest_reservations'],
    table: 'sys_app_module',
    data: {
        title: 'My Reservations',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_reservation',
        link_type: 'LIST',
        order: 30,
        roles: [guestRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_guest_dining'],
    table: 'sys_app_module',
    data: {
        title: 'Dining & Room Service Menus',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_menu',
        link_type: 'LIST',
        filter: 'active=true',
        order: 40,
        roles: [guestRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_guest_food_orders'],
    table: 'sys_app_module',
    data: {
        title: 'My Food Orders',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_food_order',
        link_type: 'LIST',
        order: 50,
        roles: [guestRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_guest_service_catalog'],
    table: 'sys_app_module',
    data: {
        title: 'Guest Service Catalog',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_service_catalog_item',
        link_type: 'LIST',
        filter: 'active=true',
        order: 60,
        roles: [guestRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_guest_service_requests'],
    table: 'sys_app_module',
    data: {
        title: 'My Service Requests',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_service_request',
        link_type: 'LIST',
        order: 70,
        roles: [guestRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_guest_payments'],
    table: 'sys_app_module',
    data: {
        title: 'My Folio & Payments',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_payment',
        link_type: 'LIST',
        order: 80,
        roles: [guestRole],
        active: true,
    },
})

// =========================================================================
// MODULE GROUP 1 — FRONT DESK
// =========================================================================
Record({
    $id: Now.ID['mod_sep_front_desk'],
    table: 'sys_app_module',
    data: {
        title: 'Front Desk',
        application: athidhiApplicationMenu,
        link_type: 'SEPARATOR',
        order: 100,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})


Record({
    $id: Now.ID['mod_fd_workspace_page'],
    table: 'sys_app_module',
    data: {
        title: 'Front Desk Workspace',
        application: athidhiApplicationMenu,
        link_type: 'DIRECT',
        query: 'x_2120492_athidhi_receptionist_workspace.do',
        order: 105,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fd_dashboard'],
    table: 'sys_app_module',
    data: {
        title: 'Front Desk Dashboard',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_stay',
        link_type: 'LIST',
        filter: 'status=checked_in',
        order: 110,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fd_reservations'],
    table: 'sys_app_module',
    data: {
        title: 'Reservations',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_reservation',
        link_type: 'LIST',
        order: 120,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fd_guests'],
    table: 'sys_app_module',
    data: {
        title: 'Guests',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_guest',
        link_type: 'LIST',
        order: 130,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fd_stays'],
    table: 'sys_app_module',
    data: {
        title: 'Stays',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_stay',
        link_type: 'LIST',
        order: 140,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fd_checkin_checkout'],
    table: 'sys_app_module',
    data: {
        title: 'Check-In / Check-Out',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_reservation',
        link_type: 'LIST',
        filter: 'statusINconfirmed,checked_in',
        order: 150,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fd_payments'],
    table: 'sys_app_module',
    data: {
        title: 'Payments',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_payment',
        link_type: 'LIST',
        order: 160,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fd_service_requests'],
    table: 'sys_app_module',
    data: {
        title: 'Service Requests',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_service_request',
        link_type: 'LIST',
        order: 170,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fd_incidents'],
    table: 'sys_app_module',
    data: {
        title: 'Incidents',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_incident',
        link_type: 'LIST',
        order: 180,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

// =========================================================================
// MODULE GROUP 2 — ROOMS & HOUSEKEEPING
// =========================================================================
Record({
    $id: Now.ID['mod_sep_rooms_housekeeping'],
    table: 'sys_app_module',
    data: {
        title: 'Rooms & Housekeeping',
        application: athidhiApplicationMenu,
        link_type: 'SEPARATOR',
        order: 200,
        roles: [housekeepingRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})


Record({
    $id: Now.ID['mod_hk_room_board'],
    table: 'sys_app_module',
    data: {
        title: 'Housekeeping Room Board',
        application: athidhiApplicationMenu,
        link_type: 'DIRECT',
        query: 'x_2120492_athidhi_housekeeping_workspace.do',
        order: 205,
        roles: [housekeepingRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_rooms_list'],
    table: 'sys_app_module',
    data: {
        title: 'Rooms',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_room',
        link_type: 'LIST',
        order: 210,
        roles: [housekeepingRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_room_types'],
    table: 'sys_app_module',
    data: {
        title: 'Room Types',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_room_type',
        link_type: 'LIST',
        order: 220,
        roles: [receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_housekeeping_tasks'],
    table: 'sys_app_module',
    data: {
        title: 'Housekeeping Tasks',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_housekeeping_task',
        link_type: 'LIST',
        order: 230,
        roles: [housekeepingRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_room_availability'],
    table: 'sys_app_module',
    data: {
        title: 'Room Availability',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_room',
        link_type: 'LIST',
        filter: 'status=available^housekeeping_status=inspected',
        order: 240,
        roles: [housekeepingRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})

// =========================================================================
// MODULE GROUP 3 — FOOD & BEVERAGE
// =========================================================================
Record({
    $id: Now.ID['mod_sep_fnb'],
    table: 'sys_app_module',
    data: {
        title: 'Food & Beverage',
        application: athidhiApplicationMenu,
        link_type: 'SEPARATOR',
        order: 300,
        roles: [restaurantRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})


Record({
    $id: Now.ID['mod_kitchen_kds'],
    table: 'sys_app_module',
    data: {
        title: 'Kitchen Display System',
        application: athidhiApplicationMenu,
        link_type: 'DIRECT',
        query: 'x_2120492_athidhi_kitchen_workspace.do',
        order: 305,
        roles: [restaurantRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fnb_restaurants'],
    table: 'sys_app_module',
    data: {
        title: 'Restaurants',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_restaurant',
        link_type: 'LIST',
        order: 310,
        roles: [restaurantRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fnb_menus'],
    table: 'sys_app_module',
    data: {
        title: 'Menus',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_menu',
        link_type: 'LIST',
        order: 320,
        roles: [restaurantRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fnb_menu_items'],
    table: 'sys_app_module',
    data: {
        title: 'Menu Items',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_menu_item',
        link_type: 'LIST',
        order: 330,
        roles: [restaurantRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fnb_food_orders'],
    table: 'sys_app_module',
    data: {
        title: 'Food Orders',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_food_order',
        link_type: 'LIST',
        order: 340,
        roles: [restaurantRole, receptionistRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fnb_kitchen_orders'],
    table: 'sys_app_module',
    data: {
        title: 'Kitchen Orders Queue',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_food_order',
        link_type: 'LIST',
        filter: 'statusINnew,accepted,preparing,ready,out_for_delivery',
        order: 350,
        roles: [restaurantRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_fnb_food_order_items'],
    table: 'sys_app_module',
    data: {
        title: 'Food Order Items',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_food_order_item',
        link_type: 'LIST',
        order: 360,
        roles: [restaurantRole, managerRole, adminRole],
        active: true,
    },
})

// =========================================================================
// MODULE GROUP 4 — INVENTORY
// =========================================================================
Record({
    $id: Now.ID['mod_sep_inventory'],
    table: 'sys_app_module',
    data: {
        title: 'Inventory',
        application: athidhiApplicationMenu,
        link_type: 'SEPARATOR',
        order: 400,
        roles: [restaurantRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_inv_items'],
    table: 'sys_app_module',
    data: {
        title: 'Inventory Items',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_inventory_item',
        link_type: 'LIST',
        order: 410,
        roles: [restaurantRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_inv_transactions'],
    table: 'sys_app_module',
    data: {
        title: 'Inventory Transactions',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_inventory_transaction',
        link_type: 'LIST',
        order: 420,
        roles: [restaurantRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_inv_low_stock'],
    table: 'sys_app_module',
    data: {
        title: 'Low Stock Items',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_inventory_item',
        link_type: 'LIST',
        filter: 'active=true^ORDERBYcurrent_quantity',
        order: 430,
        roles: [restaurantRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_inv_reorders'],
    table: 'sys_app_module',
    data: {
        title: 'Reorders',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_inventory_reorder',
        link_type: 'LIST',
        order: 440,
        roles: [restaurantRole, managerRole, adminRole],
        active: true,
    },
})

// =========================================================================
// MODULE GROUP 5 — GUEST SERVICES
// =========================================================================
Record({
    $id: Now.ID['mod_sep_guest_services'],
    table: 'sys_app_module',
    data: {
        title: 'Guest Services',
        application: athidhiApplicationMenu,
        link_type: 'SEPARATOR',
        order: 500,
        roles: [receptionistRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_gs_catalog'],
    table: 'sys_app_module',
    data: {
        title: 'Service Catalog',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_service_catalog_item',
        link_type: 'LIST',
        order: 510,
        roles: [receptionistRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_gs_requests'],
    table: 'sys_app_module',
    data: {
        title: 'Service Requests',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_service_request',
        link_type: 'LIST',
        order: 520,
        roles: [receptionistRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_gs_request_items'],
    table: 'sys_app_module',
    data: {
        title: 'Service Request Items',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_service_request_item',
        link_type: 'LIST',
        order: 530,
        roles: [receptionistRole, housekeepingRole, maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

// =========================================================================
// MODULE GROUP 6 — MAINTENANCE
// =========================================================================
Record({
    $id: Now.ID['mod_sep_maintenance'],
    table: 'sys_app_module',
    data: {
        title: 'Maintenance',
        application: athidhiApplicationMenu,
        link_type: 'SEPARATOR',
        order: 600,
        roles: [maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_maint_requests'],
    table: 'sys_app_module',
    data: {
        title: 'Maintenance Requests',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_maintenance_request',
        link_type: 'LIST',
        order: 610,
        roles: [maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_maint_tasks'],
    table: 'sys_app_module',
    data: {
        title: 'Maintenance Work Tasks',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_work_task',
        link_type: 'LIST',
        filter: 'task_type=maintenance',
        order: 620,
        roles: [maintenanceRole, managerRole, adminRole],
        active: true,
    },
})

// =========================================================================
// MODULE GROUP 7 — MANAGEMENT
// =========================================================================
Record({
    $id: Now.ID['mod_sep_management'],
    table: 'sys_app_module',
    data: {
        title: 'Management',
        application: athidhiApplicationMenu,
        link_type: 'SEPARATOR',
        order: 700,
        roles: [managerRole, adminRole],
        active: true,
    },
})


Record({
    $id: Now.ID['mod_mgr_command_center'],
    table: 'sys_app_module',
    data: {
        title: 'Operations Command Center',
        application: athidhiApplicationMenu,
        link_type: 'DIRECT',
        query: 'x_2120492_athidhi_manager_dashboard.do',
        order: 705,
        roles: [managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_mgr_dashboard'],
    table: 'sys_app_module',
    data: {
        title: 'Manager Operations Dashboard',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_stay',
        link_type: 'LIST',
        filter: 'status=checked_in',
        order: 710,
        roles: [managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_mgr_open_incidents'],
    table: 'sys_app_module',
    data: {
        title: 'Open Incidents & Safety',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_incident',
        link_type: 'LIST',
        filter: 'stateINnew,assigned,in_progress,on_hold',
        order: 720,
        roles: [managerRole, adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_mgr_pending_ops'],
    table: 'sys_app_module',
    data: {
        title: 'Pending Operations & Service',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_service_request',
        link_type: 'LIST',
        filter: 'statusINnew,accepted,in_progress',
        order: 730,
        roles: [managerRole, adminRole],
        active: true,
    },
})

// =========================================================================
// MODULE GROUP 8 — ADMINISTRATION
// =========================================================================
Record({
    $id: Now.ID['mod_sep_admin'],
    table: 'sys_app_module',
    data: {
        title: 'Administration',
        application: athidhiApplicationMenu,
        link_type: 'SEPARATOR',
        order: 800,
        roles: [adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_admin_staff'],
    table: 'sys_app_module',
    data: {
        title: 'Staff Profiles',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_staff_profile',
        link_type: 'LIST',
        order: 810,
        roles: [adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_admin_departments'],
    table: 'sys_app_module',
    data: {
        title: 'Departments',
        application: athidhiApplicationMenu,
        name: 'x_2120492_athidhi_department',
        link_type: 'LIST',
        order: 820,
        roles: [adminRole],
        active: true,
    },
})

Record({
    $id: Now.ID['mod_admin_config'],
    table: 'sys_app_module',
    data: {
        title: 'System Configuration',
        application: athidhiApplicationMenu,
        name: 'sys_properties',
        link_type: 'LIST',
        filter: 'nameSTARTSWITHx_2120492_athidhi',
        order: 830,
        roles: [adminRole],
        active: true,
    },
})

import { Acl } from '@servicenow/sdk/core'
import {
    adminRole,
    managerRole,
    restaurantRole,
    receptionistRole,
    housekeepingRole,
    maintenanceRole,
    guestRole,
} from '../roles.now'

// ==========================================
// 1. Restaurant ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_restaurant_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_restaurant',
    operation: 'read',
    roles: [adminRole, managerRole, restaurantRole, receptionistRole],
    description: 'Allow hotel staff and management to view restaurant details',
})

Acl({
    $id: Now.ID['acl_restaurant_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_restaurant',
    operation: 'read',
    roles: [guestRole],
    condition: 'active=true',
    description: 'Allow guests to view active restaurants and operating hours',
})

Acl({
    $id: Now.ID['acl_restaurant_write'],
    type: 'record',
    table: 'x_2120492_athidhi_restaurant',
    operation: 'write',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow restaurant staff and managers to update restaurant details',
})

Acl({
    $id: Now.ID['acl_restaurant_create'],
    type: 'record',
    table: 'x_2120492_athidhi_restaurant',
    operation: 'create',
    roles: [adminRole, managerRole],
    description: 'Allow managers and administrators to create new restaurants',
})

Acl({
    $id: Now.ID['acl_restaurant_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_restaurant',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete restaurant records',
})

// ==========================================
// 2. Menu ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_menu_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_menu',
    operation: 'read',
    roles: [adminRole, managerRole, restaurantRole, receptionistRole],
    description: 'Allow staff to view menus',
})

Acl({
    $id: Now.ID['acl_menu_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_menu',
    operation: 'read',
    roles: [guestRole],
    condition: 'active=true',
    description: 'Allow guests to view active menus',
})

Acl({
    $id: Now.ID['acl_menu_create_write'],
    type: 'record',
    table: 'x_2120492_athidhi_menu',
    operation: 'write',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow restaurant staff and managers to update menus',
})

Acl({
    $id: Now.ID['acl_menu_create'],
    type: 'record',
    table: 'x_2120492_athidhi_menu',
    operation: 'create',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow restaurant staff and managers to create menus',
})

Acl({
    $id: Now.ID['acl_menu_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_menu',
    operation: 'delete',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow restaurant managers and administrators to delete menus',
})

// ==========================================
// 3. Menu Item ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_menu_item_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_menu_item',
    operation: 'read',
    roles: [adminRole, managerRole, restaurantRole, receptionistRole],
    description: 'Allow staff to view menu items',
})

Acl({
    $id: Now.ID['acl_menu_item_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_menu_item',
    operation: 'read',
    roles: [guestRole],
    condition: 'active=true^available=true',
    description: 'Allow guests to view active and available menu items',
})

Acl({
    $id: Now.ID['acl_menu_item_write'],
    type: 'record',
    table: 'x_2120492_athidhi_menu_item',
    operation: 'write',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow restaurant staff and managers to update menu items',
})

Acl({
    $id: Now.ID['acl_menu_item_create'],
    type: 'record',
    table: 'x_2120492_athidhi_menu_item',
    operation: 'create',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow restaurant staff and managers to create menu items',
})

Acl({
    $id: Now.ID['acl_menu_item_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_menu_item',
    operation: 'delete',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow restaurant managers to delete menu items',
})

// ==========================================
// 4. Food Order ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_food_order_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order',
    operation: 'read',
    roles: [adminRole, managerRole, restaurantRole, receptionistRole],
    description: 'Allow restaurant staff and front desk to view food orders',
})

Acl({
    $id: Now.ID['acl_food_order_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order',
    operation: 'read',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to view only their own food orders',
})

Acl({
    $id: Now.ID['acl_food_order_create_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order',
    operation: 'create',
    roles: [adminRole, managerRole, restaurantRole, receptionistRole],
    description: 'Allow staff to create food orders for guests',
})

Acl({
    $id: Now.ID['acl_food_order_create_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order',
    operation: 'create',
    roles: [guestRole],
    description: 'Allow guests to place food orders',
})

Acl({
    $id: Now.ID['acl_food_order_write_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order',
    operation: 'write',
    roles: [adminRole, managerRole, restaurantRole, receptionistRole],
    description: 'Allow staff to update order status, items, and delivery info',
})

Acl({
    $id: Now.ID['acl_food_order_write_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order',
    operation: 'write',
    roles: [guestRole],
    script: `answer = (current.guest && current.guest.email == gs.getUser().getEmail() && current.status == 'new');`,
    description: 'Allow guests to update their own new orders before preparation starts',
})

Acl({
    $id: Now.ID['acl_food_order_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow managers and administrators to delete food orders',
})

// ==========================================
// 5. Food Order Item ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_food_order_item_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order_item',
    operation: 'read',
    roles: [adminRole, managerRole, restaurantRole, receptionistRole],
    description: 'Allow staff to view order line items',
})

Acl({
    $id: Now.ID['acl_food_order_item_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order_item',
    operation: 'read',
    roles: [guestRole],
    script: `answer = (current.order && current.order.guest && current.order.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to view items on their own food orders',
})

Acl({
    $id: Now.ID['acl_food_order_item_create_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order_item',
    operation: 'create',
    roles: [adminRole, managerRole, restaurantRole, receptionistRole],
    description: 'Allow staff to add items to food orders',
})

Acl({
    $id: Now.ID['acl_food_order_item_create_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order_item',
    operation: 'create',
    roles: [guestRole],
    description: 'Allow guests to add items to their food orders',
})

Acl({
    $id: Now.ID['acl_food_order_item_write'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order_item',
    operation: 'write',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow restaurant staff and managers to modify food order items',
})

Acl({
    $id: Now.ID['acl_food_order_item_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_food_order_item',
    operation: 'delete',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow restaurant staff to remove items from orders',
})

// ==========================================
// 6. Inventory Item ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_inv_item_read'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_item',
    operation: 'read',
    roles: [adminRole, managerRole, restaurantRole, housekeepingRole, maintenanceRole],
    description: 'Allow operational staff to view inventory items relevant to their department',
})

Acl({
    $id: Now.ID['acl_inv_item_create'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_item',
    operation: 'create',
    roles: [adminRole, managerRole],
    description: 'Allow inventory managers and administrators to define inventory items',
})

Acl({
    $id: Now.ID['acl_inv_item_write'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_item',
    operation: 'write',
    roles: [adminRole, managerRole],
    description: 'Allow managers to update inventory definitions, thresholds, and costs',
})

Acl({
    $id: Now.ID['acl_inv_item_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_item',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete inventory item definitions',
})

// ==========================================
// 7. Inventory Transaction ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_inv_tx_read'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_transaction',
    operation: 'read',
    roles: [adminRole, managerRole, restaurantRole, housekeepingRole, maintenanceRole],
    description: 'Allow operational staff to view inventory movement and audit transactions',
})

Acl({
    $id: Now.ID['acl_inv_tx_create'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_transaction',
    operation: 'create',
    roles: [adminRole, managerRole, restaurantRole, housekeepingRole, maintenanceRole],
    description: 'Allow operational staff to log stock in, stock out, waste, and adjustments',
})

Acl({
    $id: Now.ID['acl_inv_tx_write'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_transaction',
    operation: 'write',
    roles: [adminRole, managerRole],
    description: 'Allow managers to correct inventory transaction notes',
})

Acl({
    $id: Now.ID['acl_inv_tx_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_transaction',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete inventory transaction records',
})

// ==========================================
// 8. Inventory Reorder ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_inv_reorder_read'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_reorder',
    operation: 'read',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow managers and departmental leads to view stock reorders',
})

Acl({
    $id: Now.ID['acl_inv_reorder_create'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_reorder',
    operation: 'create',
    roles: [adminRole, managerRole, restaurantRole],
    description: 'Allow departmental staff and managers to create purchase reorders',
})

Acl({
    $id: Now.ID['acl_inv_reorder_write'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_reorder',
    operation: 'write',
    roles: [adminRole, managerRole],
    description: 'Allow managers to approve, order, and receive inventory reorders',
})

Acl({
    $id: Now.ID['acl_inv_reorder_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_inventory_reorder',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete inventory reorders',
})

// ==========================================
// 9. Service Catalog Item ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_cat_item_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_service_catalog_item',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole, restaurantRole],
    description: 'Allow hotel staff to view all service catalog items',
})

Acl({
    $id: Now.ID['acl_cat_item_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_service_catalog_item',
    operation: 'read',
    roles: [guestRole],
    condition: 'active=true',
    description: 'Allow hotel guests to browse active service catalog offerings',
})

Acl({
    $id: Now.ID['acl_cat_item_create'],
    type: 'record',
    table: 'x_2120492_athidhi_service_catalog_item',
    operation: 'create',
    roles: [adminRole, managerRole],
    description: 'Allow managers to create new catalog service items',
})

Acl({
    $id: Now.ID['acl_cat_item_write'],
    type: 'record',
    table: 'x_2120492_athidhi_service_catalog_item',
    operation: 'write',
    roles: [adminRole, managerRole],
    description: 'Allow managers to edit catalog items, pricing, and priorities',
})

Acl({
    $id: Now.ID['acl_cat_item_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_service_catalog_item',
    operation: 'delete',
    roles: [adminRole],
    description: 'Allow administrators to delete service catalog items',
})

// ==========================================
// 10. Service Request Item ACLs
// ==========================================
Acl({
    $id: Now.ID['acl_srv_item_read_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request_item',
    operation: 'read',
    roles: [adminRole, managerRole, receptionistRole, housekeepingRole, maintenanceRole],
    description: 'Allow hotel operational staff to view service request line items',
})

Acl({
    $id: Now.ID['acl_srv_item_read_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request_item',
    operation: 'read',
    roles: [guestRole],
    script: `answer = (current.request && current.request.guest && current.request.guest.email == gs.getUser().getEmail());`,
    description: 'Allow guests to view line items for their own service requests',
})

Acl({
    $id: Now.ID['acl_srv_item_create_staff'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request_item',
    operation: 'create',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk staff and managers to add items to service requests',
})

Acl({
    $id: Now.ID['acl_srv_item_create_guest'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request_item',
    operation: 'create',
    roles: [guestRole],
    description: 'Allow guests to request specific catalog items',
})

Acl({
    $id: Now.ID['acl_srv_item_write'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request_item',
    operation: 'write',
    roles: [adminRole, managerRole, receptionistRole],
    description: 'Allow front desk and managers to update request items',
})

Acl({
    $id: Now.ID['acl_srv_item_delete'],
    type: 'record',
    table: 'x_2120492_athidhi_service_request_item',
    operation: 'delete',
    roles: [adminRole, managerRole],
    description: 'Allow managers and administrators to remove request items',
})

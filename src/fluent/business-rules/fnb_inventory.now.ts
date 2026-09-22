import { BusinessRule } from '@servicenow/sdk/core'
import {
    validateFoodOrder,
    processFoodOrderItem,
    rollupFoodOrderTotal,
    processInventoryTransaction,
    checkLowStockAndReorder,
    handleInventoryReorder,
    handleRoomServiceOrder,
    handleServiceCatalogRequest,
    processServiceRequestItem,
} from '../../server/business-rules/fnb_inventory'

export const validateFoodOrderRule = BusinessRule({
    $id: Now.ID['br_validate_food_order'],
    name: 'Athidhi - Validate Food Order',
    table: 'x_2120492_athidhi_food_order',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    script: validateFoodOrder,
    description: 'Deterministic validation of food order guest, room service location, non-negative amounts, and cancelled status transitions.',
})

export const processFoodOrderItemRule = BusinessRule({
    $id: Now.ID['br_process_food_order_item'],
    name: 'Athidhi - Process Food Order Item',
    table: 'x_2120492_athidhi_food_order_item',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    script: processFoodOrderItem,
    description: 'Validates quantity > 0 and calculates food order item total price from unit price.',
})

export const rollupFoodOrderTotalRule = BusinessRule({
    $id: Now.ID['br_rollup_food_order_total'],
    name: 'Athidhi - Rollup Food Order Total',
    table: 'x_2120492_athidhi_food_order_item',
    when: 'after',
    action: ['insert', 'update', 'delete'],
    order: 200,
    script: rollupFoodOrderTotal,
    description: 'Deterministically recalculates parent food order subtotal, tax, and total.',
})

export const inventoryStockControlRule = BusinessRule({
    $id: Now.ID['br_inventory_stock_control'],
    name: 'Athidhi - Inventory Stock Control',
    table: 'x_2120492_athidhi_inventory_transaction',
    when: 'before',
    action: ['insert'],
    order: 100,
    script: processInventoryTransaction,
    description: 'Enforces stock updates on transactions and strictly prevents stock from becoming negative.',
})

export const lowStockDetectionRule = BusinessRule({
    $id: Now.ID['br_low_stock_detection'],
    name: 'Athidhi - Low Stock Detection & Reorder',
    table: 'x_2120492_athidhi_inventory_item',
    when: 'after',
    action: ['insert', 'update'],
    order: 200,
    script: checkLowStockAndReorder,
    description: 'Automatically creates an active inventory reorder when current quantity is at or below minimum threshold.',
})

export const inventoryReorderReceivingRule = BusinessRule({
    $id: Now.ID['br_inventory_reorder_receiving'],
    name: 'Athidhi - Inventory Reorder Receiving',
    table: 'x_2120492_athidhi_inventory_reorder',
    when: 'before',
    action: ['update'],
    order: 100,
    script: handleInventoryReorder,
    description: 'Increments inventory stock, records received timestamp, and prevents duplicate receiving upon receipt.',
})

export const roomServiceOrderDispatchRule = BusinessRule({
    $id: Now.ID['br_room_service_dispatch'],
    name: 'Athidhi - Room Service Dispatch',
    table: 'x_2120492_athidhi_food_order',
    when: 'after',
    action: ['insert', 'update'],
    order: 300,
    script: handleRoomServiceOrder,
    description: 'Automatically creates and links a Service Request record for Room Service food orders.',
})

export const serviceCatalogRequestRule = BusinessRule({
    $id: Now.ID['br_service_catalog_request'],
    name: 'Athidhi - Service Catalog Request Defaults',
    table: 'x_2120492_athidhi_service_request',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    script: handleServiceCatalogRequest,
    description: 'Propagates catalog priority, department, and pricing when referencing a service catalog item.',
})

export const serviceRequestItemPricingRule = BusinessRule({
    $id: Now.ID['br_service_request_item_pricing'],
    name: 'Athidhi - Service Request Item Pricing',
    table: 'x_2120492_athidhi_service_request_item',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    script: processServiceRequestItem,
    description: 'Validates quantity and calculates item line totals for service request items.',
})

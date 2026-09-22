import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

/**
 * 1. Food Order Validation
 * Validates guest existence, stay/room for room service, non-negative amounts,
 * ensures room belongs to guest's active stay, and prevents cancelled orders
 * from transitioning back to active states.
 */
export function validateFoodOrder(current: any, previous: any): void {
    const guest = current.getValue('guest')
    if (!guest) {
        gs.addErrorMessage('A valid Guest must be specified for every Food Order.')
        current.setAbortAction(true)
        return
    }

    const orderType = current.getValue('order_type')
    const room = current.getValue('room')

    if (orderType === 'room_service') {
        if (!room) {
            gs.addErrorMessage('Room number is mandatory for Room Service orders.')
            current.setAbortAction(true)
            return
        }

        // Validate that room belongs to the guest's active stay (prevent unauthorized orders)
        const stayGR = new GlideRecord('x_2120492_athidhi_stay')
        stayGR.addQuery('guest', guest)
        stayGR.addQuery('status', 'checked_in')
        stayGR.query()
        if (stayGR.next()) {
            const assignedRoom = stayGR.getValue('room')
            if (assignedRoom && assignedRoom !== room) {
                gs.addErrorMessage('Room service orders can only be placed for the room assigned to your active stay.')
                current.setAbortAction(true)
                return
            }
            if (!current.getValue('stay')) {
                current.setValue('stay', stayGR.getUniqueValue())
            }
        }
    }

    const subtotal = parseFloat(current.getValue('subtotal') || '0')
    const tax = parseFloat(current.getValue('tax') || '0')
    const total = parseFloat(current.getValue('total') || '0')

    if (subtotal < 0 || tax < 0 || total < 0) {
        gs.addErrorMessage('Food order financial amounts (subtotal, tax, total) cannot be negative.')
        current.setAbortAction(true)
        return
    }

    // State transition guard: Cancelled orders cannot move back to preparing or any active state
    if (previous) {
        const prevStatus = previous.getValue('status')
        const currentStatus = current.getValue('status')
        if (prevStatus === 'cancelled' && currentStatus !== 'cancelled') {
            gs.addErrorMessage('Cancelled food orders cannot be reopened or transitioned back to active states.')
            current.setAbortAction(true)
            return
        }
    }
}

/**
 * 2. Food Order Item Validation & Price Calculation
 * Ensures quantities > 0, unit prices >= 0, auto-populates price from menu item if missing,
 * and calculates total_price = quantity * unit_price.
 */
export function processFoodOrderItem(current: any, previous: any): void {
    const quantity = parseInt(current.getValue('quantity') || '0', 10)
    if (quantity <= 0) {
        gs.addErrorMessage('Order item quantity must be strictly greater than zero.')
        current.setAbortAction(true)
        return
    }

    let unitPrice = parseFloat(current.getValue('unit_price') || '0')
    const menuItemId = current.getValue('menu_item')

    if (unitPrice <= 0 && menuItemId) {
        const itemGr = new GlideRecord('x_2120492_athidhi_menu_item')
        if (itemGr.get(menuItemId)) {
            unitPrice = parseFloat(itemGr.getValue('price') || '0')
            current.setValue('unit_price', unitPrice.toFixed(2))
        }
    }

    if (unitPrice < 0) {
        gs.addErrorMessage('Unit price cannot be negative.')
        current.setAbortAction(true)
        return
    }

    const totalPrice = Math.round(quantity * unitPrice * 100) / 100
    current.setValue('total_price', totalPrice.toFixed(2))
}

/**
 * 3. Food Order Item Rollup
 * Recalculates subtotal, tax, and total on the parent Food Order deterministically.
 */
export function rollupFoodOrderTotal(current: any, previous: any): void {
    const orderId = current.getValue('order') || (previous ? previous.getValue('order') : null)
    if (!orderId) {
        return
    }

    const itemGr = new GlideRecord('x_2120492_athidhi_food_order_item')
    itemGr.addQuery('order', orderId)
    itemGr.query()

    let subtotal = 0
    while (itemGr.next()) {
        subtotal += parseFloat(itemGr.getValue('total_price') || '0')
    }
    subtotal = Math.round(subtotal * 100) / 100

    const orderGr = new GlideRecord('x_2120492_athidhi_food_order')
    if (orderGr.get(orderId)) {
        const currentTax = parseFloat(orderGr.getValue('tax') || '0')
        // Standard 5% tax if not manually customized
        const tax = currentTax > 0 ? currentTax : Math.round(subtotal * 0.05 * 100) / 100
        const total = Math.round((subtotal + tax) * 100) / 100

        orderGr.setValue('subtotal', subtotal.toFixed(2))
        orderGr.setValue('tax', tax.toFixed(2))
        orderGr.setValue('total', total.toFixed(2))
        orderGr.update()
    }
}

/**
 * 4. Inventory Stock Control (Deterministic & Auditable)
 * Enforces single source of truth for stock movement.
 * Validates active item status, strictly prevents negative stock,
 * and maintains consistent quantities.
 */
export function processInventoryTransaction(current: any, previous: any): void {
    const itemId = current.getValue('inventory_item')
    const txType = current.getValue('transaction_type')
    const qty = parseInt(current.getValue('quantity') || '0', 10)

    if (qty <= 0) {
        gs.addErrorMessage('Inventory transaction quantity must be strictly greater than zero.')
        current.setAbortAction(true)
        return
    }

    if (!itemId) {
        gs.addErrorMessage('A valid Inventory Item must be specified.')
        current.setAbortAction(true)
        return
    }

    const itemGr = new GlideRecord('x_2120492_athidhi_inventory_item')
    if (!itemGr.get(itemId)) {
        gs.addErrorMessage('Referenced Inventory Item does not exist.')
        current.setAbortAction(true)
        return
    }

    const isActive = itemGr.getValue('active') === '1' || itemGr.getValue('active') === 'true'
    if (!isActive) {
        gs.addErrorMessage('Cannot perform inventory transactions on an inactive inventory item.')
        current.setAbortAction(true)
        return
    }

    const currentStock = parseInt(itemGr.getValue('current_quantity') || '0', 10)
    let newStock = currentStock

    switch (txType) {
        case 'stock_in':
        case 'return':
            newStock = currentStock + qty
            break

        case 'stock_out':
        case 'waste':
            if (currentStock - qty < 0) {
                gs.addErrorMessage(
                    'Insufficient inventory for ' +
                        txType +
                        '. Current stock: ' +
                        currentStock +
                        ', requested deduction: ' +
                        qty +
                        '.'
                )
                current.setAbortAction(true)
                return
            }
            newStock = currentStock - qty
            break

        case 'adjustment': {
            // Deterministic adjustment semantics:
            // Check notes for direction (reduction/loss vs increase/found)
            const notes = (current.getValue('notes') || '').toLowerCase()
            const isDecrease =
                notes.includes('decrease') ||
                notes.includes('reduction') ||
                notes.includes('shortage') ||
                notes.includes('loss') ||
                notes.includes('shrinkage') ||
                notes.includes('negative')

            if (isDecrease) {
                if (currentStock - qty < 0) {
                    gs.addErrorMessage(
                        'Adjustment deduction exceeds current stock (' + currentStock + '). Cannot reduce below zero.'
                    )
                    current.setAbortAction(true)
                    return
                }
                newStock = currentStock - qty
            } else {
                newStock = currentStock + qty
            }
            break
        }

        case 'transfer':
            // The single-item model tracks total enterprise inventory on hand.
            // Relocation across rooms/floors preserves total count without unexplained loss.
            newStock = currentStock
            break

        default:
            gs.addErrorMessage('Unknown transaction type: ' + txType)
            current.setAbortAction(true)
            return
    }

    itemGr.setValue('current_quantity', newStock)
    itemGr.update()
}

/**
 * 5. Low Stock Detection & Automated Reorder
 * Triggers when current_quantity <= minimum_quantity.
 * Automatically generates one open reorder record if one does not already exist.
 */
export function checkLowStockAndReorder(current: any, previous: any): void {
    const isActive = current.getValue('active') === true || current.getValue('active') === '1'
    if (!isActive) {
        return
    }

    const currentQty = parseInt(current.getValue('current_quantity') || '0', 10)
    const minQty = parseInt(current.getValue('minimum_quantity') || '0', 10)

    if (minQty > 0 && currentQty <= minQty) {
        const itemId = current.getUniqueValue()
        const reorderGr = new GlideRecord('x_2120492_athidhi_inventory_reorder')
        reorderGr.addQuery('inventory_item', itemId)
        reorderGr.addQuery('status', 'IN', 'draft,requested,approved,ordered')
        reorderGr.query()

        if (!reorderGr.hasNext()) {
            const reorderQty = parseInt(current.getValue('reorder_quantity') || '0', 10)
            const requestedQty = reorderQty > 0 ? reorderQty : minQty * 2

            const newReorder = new GlideRecord('x_2120492_athidhi_inventory_reorder')
            newReorder.initialize()
            newReorder.setValue('inventory_item', itemId)
            newReorder.setValue('requested_quantity', requestedQty)
            newReorder.setValue('status', 'requested')
            newReorder.setValue(
                'notes',
                'Automated reorder created due to low stock: current quantity ' +
                    currentQty +
                    ' <= minimum quantity ' +
                    minQty
            )
            newReorder.insert()
            gs.addInfoMessage(
                'Automated inventory reorder created for low stock item: ' + current.getValue('name')
            )
        }
    }
}

/**
 * 6. Inventory Reorder Receiving (Single Source of Truth)
 * When reorder status transitions to Received, populates received_at,
 * and creates an audit stock_in transaction.
 * The transaction triggers processInventoryTransaction to increment stock ONCE,
 * preventing duplicate stock application and eliminating recursion.
 */
export function handleInventoryReorder(current: any, previous: any): void {
    const currentStatus = current.getValue('status')
    const prevStatus = previous ? previous.getValue('status') : ''

    if (currentStatus === 'received' && prevStatus !== 'received') {
        if (!current.getValue('received_at')) {
            const gdt = new GlideDateTime()
            current.setValue('received_at', gdt.getValue())
        }

        const itemId = current.getValue('inventory_item')
        const qty = parseInt(current.getValue('requested_quantity') || '0', 10)

        if (itemId && qty > 0) {
            // Note: Single source of truth.
            // Inserting this audit transaction triggers processInventoryTransaction
            // which safely and deterministically increments current_quantity on the item.
            // Do NOT manually increment itemGr here to prevent duplicate stock application.
            const txGr = new GlideRecord('x_2120492_athidhi_inventory_transaction')
            txGr.initialize()
            txGr.setValue('inventory_item', itemId)
            txGr.setValue('transaction_type', 'stock_in')
            txGr.setValue('quantity', qty)
            txGr.setValue('reference_type', 'reorder')
            txGr.setValue('reference_number', current.getValue('reorder_number'))
            txGr.setValue('notes', 'Stock received from Reorder ' + current.getValue('reorder_number'))
            txGr.insert()
        }
    }
}

/**
 * 7. Room Service Food Order -> Service Request Linkage
 * Automatically generates or links a room service Service Request record,
 * preventing duplicate service requests upon subsequent updates.
 */
export function handleRoomServiceOrder(current: any, previous: any): void {
    const orderType = current.getValue('order_type')
    if (orderType !== 'room_service') {
        return
    }

    if (current.getValue('service_request')) {
        return
    }

    const orderNumber = current.getValue('order_number')
    const guest = current.getValue('guest')
    const room = current.getValue('room')

    // Check if an existing open service request already matches this order
    const srvCheck = new GlideRecord('x_2120492_athidhi_service_request')
    srvCheck.addQuery('request_type', 'room_service')
    srvCheck.addQuery('room', room)
    srvCheck.addQuery('status', 'IN', 'new,accepted,in_progress')
    srvCheck.addQuery('description', 'CONTAINS', orderNumber)
    srvCheck.query()

    if (srvCheck.next()) {
        current.setValue('service_request', srvCheck.getUniqueValue())
        current.update()
        return
    }

    // Create linked Service Request
    const srv = new GlideRecord('x_2120492_athidhi_service_request')
    srv.initialize()
    srv.setValue('guest', guest)
    if (current.getValue('stay')) {
        srv.setValue('stay', current.getValue('stay'))
    }
    srv.setValue('room', room)
    srv.setValue('request_type', 'room_service')

    const orderPrio = current.getValue('priority')
    let srvPrio = 'medium'
    if (orderPrio === 'urgent') {
        srvPrio = 'critical'
    } else if (orderPrio === 'high') {
        srvPrio = 'high'
    }
    srv.setValue('priority', srvPrio)

    const specialInst = current.getValue('special_instructions')
    srv.setValue(
        'description',
        'Room Service Delivery for Food Order: ' + orderNumber + (specialInst ? ' - ' + specialInst : '')
    )
    srv.setValue('status', 'new')
    srv.setValue('requested_at', current.getValue('ordered_at') || new GlideDateTime().getValue())

    if (current.getValue('requested_delivery_time')) {
        srv.setValue('due_at', current.getValue('requested_delivery_time'))
    }

    const srvId = srv.insert()
    current.setValue('service_request', srvId)
    current.update()
}

/**
 * 8. Service Catalog Request Propagation
 * When a Service Request references a Service Catalog Item:
 * - Copies default priority without overriding manually chosen higher priority
 * - Copies department assignment
 * - Sets default chargeable amount
 */
export function handleServiceCatalogRequest(current: any, previous: any): void {
    const catalogItemId = current.getValue('catalog_item')
    if (!catalogItemId) {
        return
    }

    const catGr = new GlideRecord('x_2120492_athidhi_service_catalog_item')
    if (catGr.get(catalogItemId)) {
        // Priority weight comparison
        const priorityRank: Record<string, number> = {
            low: 1,
            medium: 2,
            high: 3,
            critical: 4,
        }

        const currentPrio = current.getValue('priority') || 'medium'
        const catDefaultPrio = catGr.getValue('default_priority') || 'medium'

        const currentRank = priorityRank[currentPrio] || 2
        const catRank = priorityRank[catDefaultPrio] || 2

        // Only promote to catalog default priority if current is lower or unset
        if (!current.getValue('priority') || currentRank < catRank) {
            current.setValue('priority', catDefaultPrio)
        }

        // Copy department if unassigned
        const catDept = catGr.getValue('department')
        if (catDept && !current.getValue('department')) {
            current.setValue('department', catDept)
        }

        // Calculate charge if chargeable
        const isChargeable = catGr.getValue('chargeable') === '1' || catGr.getValue('chargeable') === 'true'
        if (isChargeable) {
            const price = parseFloat(catGr.getValue('price') || '0')
            const existingCharge = parseFloat(current.getValue('charge') || '0')
            if (price > 0 && existingCharge === 0) {
                current.setValue('charge', price.toFixed(2))
            }
        }
    }
}

/**
 * 9. Service Request Item Processing
 * Validates quantity > 0, pulls catalog price if unit_price is 0,
 * and deterministically calculates total_price.
 */
export function processServiceRequestItem(current: any, previous: any): void {
    const quantity = parseInt(current.getValue('quantity') || '1', 10)
    if (quantity <= 0) {
        gs.addErrorMessage('Service request item quantity must be greater than zero.')
        current.setAbortAction(true)
        return
    }

    let unitPrice = parseFloat(current.getValue('unit_price') || '0')
    const catalogItemId = current.getValue('catalog_item')

    if (unitPrice === 0 && catalogItemId) {
        const catGr = new GlideRecord('x_2120492_athidhi_service_catalog_item')
        if (catGr.get(catalogItemId)) {
            unitPrice = parseFloat(catGr.getValue('price') || '0')
            current.setValue('unit_price', unitPrice.toFixed(2))
        }
    }

    const totalPrice = Math.round(quantity * unitPrice * 100) / 100
    current.setValue('total_price', totalPrice.toFixed(2))
}

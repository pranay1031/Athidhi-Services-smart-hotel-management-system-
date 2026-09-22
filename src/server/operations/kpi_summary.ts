import { GlideRecord, GlideAggregate, gs } from '@servicenow/glide'

/**
 * Operational KPI Summary
 * Provides deterministic metrics for Hotel Management Dashboard.
 * No AI or predictive modeling used — strictly real-time database counts.
 */
export interface HotelKPIs {
    totalRooms: number
    availableRooms: number
    occupiedRooms: number
    roomsCleaning: number
    todaysArrivals: number
    todaysDepartures: number
    activeServiceRequests: number
    openMaintenanceRequests: number
    openIncidents: number
    pendingFoodOrders: number
    lowStockItems: number
    pendingReorders: number
}

export function getHotelOperationalKPIs(): HotelKPIs {
    return {
        totalRooms: getCount('x_2120492_athidhi_room', 'active=true'),
        availableRooms: getCount('x_2120492_athidhi_room', 'status=available'),
        occupiedRooms: getCount('x_2120492_athidhi_room', 'status=occupied'),
        roomsCleaning: getCount(
            'x_2120492_athidhi_room',
            'housekeeping_statusINdirty,in_progress'
        ),
        todaysArrivals: getCount(
            'x_2120492_athidhi_reservation',
            'status=confirmed^check_inONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()'
        ),
        todaysDepartures: getCount(
            'x_2120492_athidhi_stay',
            'status=checked_in^expected_check_outONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()'
        ),
        activeServiceRequests: getCount(
            'x_2120492_athidhi_service_request',
            'statusINnew,accepted,in_progress'
        ),
        openMaintenanceRequests: getCount(
            'x_2120492_athidhi_maintenance_request',
            'statusINnew,assigned,in_progress,waiting'
        ),
        openIncidents: getCount(
            'x_2120492_athidhi_incident',
            'stateINnew,assigned,in_progress,on_hold'
        ),
        pendingFoodOrders: getCount(
            'x_2120492_athidhi_food_order',
            'statusINnew,accepted,preparing'
        ),
        lowStockItems: getLowStockCount(),
        pendingReorders: getCount(
            'x_2120492_athidhi_inventory_reorder',
            'statusINdraft,requested,approved,ordered'
        ),
    }
}

function getCount(tableName: string, queryFilter: string): number {
    const gr = new GlideRecord(tableName)
    if (queryFilter) {
        gr.addEncodedQuery(queryFilter)
    }
    gr.query()
    let count = 0
    while (gr.next()) {
        count++
    }
    return count
}

function getLowStockCount(): number {
    const gr = new GlideRecord('x_2120492_athidhi_inventory_item')
    gr.addQuery('active', '1')
    gr.query()
    let count = 0
    while (gr.next()) {
        const cur = parseInt(gr.getValue('current_quantity') || '0', 10)
        const min = parseInt(gr.getValue('minimum_quantity') || '0', 10)
        if (min > 0 && cur <= min) {
            count++
        }
    }
    return count
}

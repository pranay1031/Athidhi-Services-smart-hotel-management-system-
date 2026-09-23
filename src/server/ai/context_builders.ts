import { GlideRecord, GlideDateTime, gs } from '@servicenow/glide';
import {
    OperationalContextSnapshot,
    GuestContextSnapshot,
    UserSessionContext,
} from './types';

/**
 * Phase 5D: Deterministic AI Context Builders
 * Aggregates factual ServiceNow operational and guest data without relying on AI hallucination.
 */
export class AIContextBuilders {
    /**
     * Builds comprehensive operational context for hotel managers
     */
    public static buildOperationalSnapshot(): OperationalContextSnapshot {
        const nowStr = new GlideDateTime().getDisplayValue();

        // 1. Rooms & Occupancy
        const totalRooms = AIContextBuilders.getCount('x_2120492_athidhi_room', 'active=true');
        const availableRooms = AIContextBuilders.getCount('x_2120492_athidhi_room', 'status=available');
        const occupiedRooms = AIContextBuilders.getCount('x_2120492_athidhi_room', 'status=occupied');
        const todaysArrivals = AIContextBuilders.getCount(
            'x_2120492_athidhi_reservation',
            'status=confirmed^check_inONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()'
        );
        const todaysDepartures = AIContextBuilders.getCount(
            'x_2120492_athidhi_stay',
            'status=checked_in^expected_check_outONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()'
        );
        const occupancyRate = totalRooms > 0 ? Math.round((occupiedRooms / totalRooms) * 100) : 0;

        // 2. Housekeeping Workload
        const dirtyRooms = AIContextBuilders.getCount(
            'x_2120492_athidhi_room',
            'housekeeping_status=dirty'
        );
        const cleaningInProgress = AIContextBuilders.getCount(
            'x_2120492_athidhi_room',
            'housekeeping_status=in_progress'
        );
        const pendingInspections = AIContextBuilders.getCount(
            'x_2120492_athidhi_housekeeping_task',
            'status=completed^inspection_required=true^inspection_status=pending'
        );
        const overdueHkTasks = AIContextBuilders.getCount(
            'x_2120492_athidhi_housekeeping_task',
            'statusINpending,assigned,in_progress^scheduled_start<javascript:gs.nowDateTime()'
        );
        const totalOpenHk = AIContextBuilders.getCount(
            'x_2120492_athidhi_housekeeping_task',
            'statusINpending,assigned,in_progress'
        );

        // 3. Service Requests
        const newRequests = AIContextBuilders.getCount('x_2120492_athidhi_service_request', 'status=new');
        const inProgressRequests = AIContextBuilders.getCount('x_2120492_athidhi_service_request', 'statusINaccepted,in_progress');
        const overdueRequests = AIContextBuilders.getCount(
            'x_2120492_athidhi_service_request',
            'statusINnew,accepted,in_progress^due_at<javascript:gs.nowDateTime()'
        );
        const totalOpenRequests = newRequests + inProgressRequests;

        const reqTypeCounts: Record<string, number> = {};
        const reqTypes = ['housekeeping', 'maintenance', 'room_service', 'concierge', 'luggage', 'wake_up_call', 'transportation'];
        for (const t of reqTypes) {
            const c = AIContextBuilders.getCount('x_2120492_athidhi_service_request', 'statusINnew,accepted,in_progress^request_type=' + t);
            if (c > 0) reqTypeCounts[t] = c;
        }

        const reqPriCounts: Record<string, number> = {};
        const priorities = ['low', 'medium', 'high', 'critical'];
        for (const p of priorities) {
            const c = AIContextBuilders.getCount('x_2120492_athidhi_service_request', 'statusINnew,accepted,in_progress^priority=' + p);
            if (c > 0) reqPriCounts[p] = c;
        }

        // 4. Maintenance Workload
        const openMnt = AIContextBuilders.getCount(
            'x_2120492_athidhi_maintenance_request',
            'statusINnew,assigned,in_progress,waiting'
        );
        const criticalMnt = AIContextBuilders.getCount(
            'x_2120492_athidhi_maintenance_request',
            'statusINnew,assigned,in_progress,waiting^priorityINhigh,critical'
        );

        const mntCatCounts: Record<string, number> = {};
        const mntCats = ['plumbing', 'electrical', 'hvac', 'furniture', 'appliance', 'network', 'other'];
        for (const mc of mntCats) {
            const c = AIContextBuilders.getCount('x_2120492_athidhi_maintenance_request', 'statusINnew,assigned,in_progress,waiting^category=' + mc);
            if (c > 0) mntCatCounts[mc] = c;
        }

        const affectedRooms: string[] = [];
        const mntGr = new GlideRecord('x_2120492_athidhi_maintenance_request');
        mntGr.addEncodedQuery('statusINnew,assigned,in_progress,waiting');
        mntGr.setLimit(10);
        mntGr.query();
        while (mntGr.next()) {
            const rmDisplay = mntGr.getDisplayValue('room');
            if (rmDisplay && !affectedRooms.includes(rmDisplay)) {
                affectedRooms.push(rmDisplay);
            }
        }

        // 5. Food & Beverage
        const pendingFoodOrders = AIContextBuilders.getCount(
            'x_2120492_athidhi_food_order',
            'statusINnew,accepted,preparing'
        );
        const foodOrdersToday = AIContextBuilders.getCount(
            'x_2120492_athidhi_food_order',
            'sys_created_onONToday@javascript:gs.beginningOfToday()@javascript:gs.endOfToday()'
        );
        const activeMenuItems = AIContextBuilders.getCount(
            'x_2120492_athidhi_menu_item',
            'active=true^available=true'
        );

        // 6. Inventory & Low Stock
        const totalInventory = AIContextBuilders.getCount('x_2120492_athidhi_inventory_item', 'active=true');
        const lowStockNames: string[] = [];
        const invGr = new GlideRecord('x_2120492_athidhi_inventory_item');
        invGr.addQuery('active', true);
        invGr.query();
        while (invGr.next()) {
            const cur = parseInt(invGr.getValue('current_quantity') || '0', 10);
            const min = parseInt(invGr.getValue('minimum_quantity') || '0', 10);
            if (min > 0 && cur <= min) {
                lowStockNames.push(invGr.getValue('name') + ' (qty: ' + cur + '/' + min + ')');
            }
        }

        const pendingReorders = AIContextBuilders.getCount(
            'x_2120492_athidhi_inventory_reorder',
            'statusINdraft,requested,approved,ordered'
        );

        return {
            timestamp: nowStr,
            occupancy: {
                totalRooms,
                availableRooms,
                occupiedRooms,
                occupancyRatePercent: occupancyRate,
                todaysArrivals,
                todaysDepartures,
            },
            housekeeping: {
                totalOccupied: occupiedRooms,
                dirtyRooms,
                cleaningInProgress,
                pendingInspections,
                overdueTasks: overdueHkTasks,
                totalOpenTasks: totalOpenHk,
            },
            serviceRequests: {
                newRequests,
                inProgressRequests,
                overdueRequests,
                totalOpen: totalOpenRequests,
                byType: reqTypeCounts,
                byPriority: reqPriCounts,
            },
            maintenance: {
                openRequests: openMnt,
                urgentOrCritical: criticalMnt,
                byCategory: mntCatCounts,
                affectedRooms,
            },
            foodAndBeverage: {
                pendingOrders: pendingFoodOrders,
                ordersToday: foodOrdersToday,
                activeMenuItemsCount: activeMenuItems,
            },
            inventory: {
                totalTrackedItems: totalInventory,
                lowStockItemsCount: lowStockNames.length,
                lowStockItemNames: lowStockNames,
                pendingReordersCount: pendingReorders,
            },
        };
    }

    /**
     * Checks if current operational data is sufficient to formulate grounded predictions
     */
    public static isOperationalDataSufficient(snapshot: OperationalContextSnapshot): boolean {
        if (!snapshot || snapshot.occupancy.totalRooms === 0) {
            return false;
        }
        // At least some active operations (occupancy, arrivals, departures, or active tasks)
        const hasActivity =
            snapshot.occupancy.occupiedRooms > 0 ||
            snapshot.occupancy.todaysArrivals > 0 ||
            snapshot.occupancy.todaysDepartures > 0 ||
            snapshot.serviceRequests.totalOpen > 0 ||
            snapshot.housekeeping.totalOpenTasks > 0 ||
            snapshot.maintenance.openRequests > 0;

        return hasActivity;
    }

    /**
     * Builds guest context strictly for the authenticated session guest
     */
    public static buildGuestSnapshot(session: UserSessionContext): GuestContextSnapshot {
        if (!session.guestSysId) {
            return {
                guestSysId: '',
                guestName: session.userName,
                guestEmail: session.userEmail,
                stay: null,
                preferences: [],
                recentOrders: [],
                recentRequests: [],
                availableMenus: [],
                serviceCatalog: [],
            };
        }

        // Active Stay
        let stayData: { stayNumber: string; roomNumber: string; checkIn: string; expectedCheckOut: string } | null = null;
        const stayGr = new GlideRecord('x_2120492_athidhi_stay');
        stayGr.addQuery('guest', session.guestSysId);
        stayGr.addQuery('status', 'checked_in');
        stayGr.setLimit(1);
        stayGr.query();
        if (stayGr.next()) {
            stayData = {
                stayNumber: String(stayGr.getValue('stay_number')),
                roomNumber: stayGr.getDisplayValue('room'),
                checkIn: String(stayGr.getValue('actual_check_in') || ''),
                expectedCheckOut: String(stayGr.getValue('expected_check_out') || ''),
            };
        }

        // Guest Preferences
        const preferences: Array<{ type: string; value: string }> = [];
        const prefGr = new GlideRecord('x_2120492_athidhi_guest_preference');
        prefGr.addQuery('guest', session.guestSysId);
        prefGr.addQuery('active', true);
        prefGr.query();
        while (prefGr.next()) {
            preferences.push({
                type: String(prefGr.getValue('preference_type')),
                value: String(prefGr.getValue('preference_value')),
            });
        }

        // Recent Orders
        const recentOrders: Array<{ orderNumber: string; status: string; items: string[] }> = [];
        const orderGr = new GlideRecord('x_2120492_athidhi_food_order');
        orderGr.addQuery('guest', session.guestSysId);
        orderGr.orderByDesc('sys_created_on');
        orderGr.setLimit(3);
        orderGr.query();
        while (orderGr.next()) {
            recentOrders.push({
                orderNumber: String(orderGr.getValue('order_number')),
                status: String(orderGr.getValue('status')),
                items: [],
            });
        }

        // Recent Service Requests
        const recentRequests: Array<{ requestNumber: string; type: string; status: string }> = [];
        const reqGr = new GlideRecord('x_2120492_athidhi_service_request');
        reqGr.addQuery('guest', session.guestSysId);
        reqGr.orderByDesc('sys_created_on');
        reqGr.setLimit(3);
        reqGr.query();
        while (reqGr.next()) {
            recentRequests.push({
                requestNumber: String(reqGr.getValue('request_number')),
                type: String(reqGr.getValue('request_type')),
                status: String(reqGr.getValue('status')),
            });
        }

        // Active Menus (limit to active highlights)
        const availableMenus: Array<{ name: string; category: string; price: number; dietary: string }> = [];
        const itemGr = new GlideRecord('x_2120492_athidhi_menu_item');
        itemGr.addQuery('active', true);
        itemGr.addQuery('available', true);
        itemGr.setLimit(10);
        itemGr.query();
        while (itemGr.next()) {
            availableMenus.push({
                name: String(itemGr.getValue('name')),
                category: String(itemGr.getValue('category')),
                price: parseFloat(itemGr.getValue('price') || '0'),
                dietary: String(itemGr.getValue('dietary_type') || 'other'),
            });
        }

        // Service Catalog Highlights
        const serviceCatalog: Array<{ name: string; category: string; price: number }> = [];
        const catGr = new GlideRecord('x_2120492_athidhi_service_catalog_item');
        catGr.addQuery('active', true);
        catGr.setLimit(8);
        catGr.query();
        while (catGr.next()) {
            serviceCatalog.push({
                name: String(catGr.getValue('name')),
                category: String(catGr.getValue('category')),
                price: parseFloat(catGr.getValue('price') || '0'),
            });
        }

        return {
            guestSysId: session.guestSysId,
            guestName: session.guestName || session.userName,
            guestEmail: session.userEmail,
            stay: stayData,
            preferences,
            recentOrders,
            recentRequests,
            availableMenus,
            serviceCatalog,
        };
    }

    private static getCount(tableName: string, queryFilter: string): number {
        const gr = new GlideRecord(tableName);
        if (queryFilter) {
            gr.addEncodedQuery(queryFilter);
        }
        gr.query();
        let count = 0;
        while (gr.next()) {
            count++;
        }
        return count;
    }
}

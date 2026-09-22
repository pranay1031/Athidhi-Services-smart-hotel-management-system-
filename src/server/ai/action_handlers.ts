import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide';
/**
 * Phase 5B — Deterministic Server-Side Action Handlers
 * Executes strictly authorized operations respecting ServiceNow database ACLs,
 * guest isolation, and server-calculated rates.
 */

import { UserSessionContext } from './types';

export class AIActionHandlers {
    /**
     * 1. get_current_guest_stay
     */
    public static getCurrentGuestStay(session: UserSessionContext, params: Record<string, any>): any {
        if (!session.guestSysId && session.activeRole === 'guest') {
            return { found: false, message: 'No guest profile found matching authenticated user.' };
        }

        const stayGr = new GlideRecord('x_2120492_athidhi_stay');
        stayGr.addQuery('status', 'checked_in');
        if (session.activeRole === 'guest') {
            stayGr.addQuery('guest', session.guestSysId);
        }
        stayGr.setLimit(1);
        stayGr.query();

        if (stayGr.next()) {
            return {
                found: true,
                stay_number: String(stayGr.getValue('stay_number')),
                room_number: stayGr.getDisplayValue('room'),
                check_in: String(stayGr.getValue('actual_check_in')),
                expected_check_out: String(stayGr.getValue('expected_check_out')),
                status: 'checked_in',
                adults: Number(stayGr.getValue('adults') || 1),
                children: Number(stayGr.getValue('children') || 0),
            };
        }

        return { found: false, message: 'No active checked-in stay found for the current user.' };
    }

    /**
     * 2. get_guest_reservations
     */
    public static getGuestReservations(session: UserSessionContext, params: Record<string, any>): any {
        if (!session.guestSysId && session.activeRole === 'guest') {
            return { reservations: [], message: 'No guest profile found for authenticated user.' };
        }

        const resGr = new GlideRecord('x_2120492_athidhi_reservation');
        if (session.activeRole === 'guest') {
            resGr.addQuery('guest', session.guestSysId);
        }
        if (params.status) {
            resGr.addQuery('status', String(params.status).toLowerCase());
        }
        resGr.orderByDesc('check_in');
        resGr.setLimit(5);
        resGr.query();

        const results: any[] = [];
        while (resGr.next()) {
            results.push({
                reservation_number: String(resGr.getValue('reservation_number')),
                room_type: resGr.getDisplayValue('room_type'),
                room: resGr.getDisplayValue('room') || 'Unassigned',
                check_in: String(resGr.getValue('check_in')),
                check_out: String(resGr.getValue('check_out')),
                status: String(resGr.getValue('status')),
                payment_status: String(resGr.getValue('payment_status')),
            });
        }

        return { reservations: results, count: results.length };
    }

    /**
     * 3. get_room_information
     */
    public static getRoomInformation(session: UserSessionContext, params: Record<string, any>): any {
        const rtGr = new GlideRecord('x_2120492_athidhi_room_type');
        if (params.room_type) {
            rtGr.addQuery('name', 'CONTAINS', String(params.room_type));
        }
        rtGr.setLimit(5);
        rtGr.query();

        const types: any[] = [];
        while (rtGr.next()) {
            types.push({
                name: String(rtGr.getValue('name')),
                code: String(rtGr.getValue('code')),
                description: String(rtGr.getValue('description') || ''),
                base_price: Number(rtGr.getValue('base_price') || 0),
                capacity: Number(rtGr.getValue('capacity') || 2),
            });
        }

        return { room_types: types };
    }

    /**
     * 4. get_room_availability
     */
    public static getRoomAvailability(session: UserSessionContext, params: Record<string, any>): any {
        const roomGr = new GlideRecord('x_2120492_athidhi_room');
        roomGr.addQuery('status', 'available');
        roomGr.addQuery('housekeeping_status', 'clean');
        if (params.room_type) {
            roomGr.addQuery('room_type.name', 'CONTAINS', String(params.room_type));
        }
        roomGr.setLimit(20);
        roomGr.query();

        let availableCount = 0;
        const availableRooms: any[] = [];
        while (roomGr.next()) {
            availableCount++;
            if (availableRooms.length < 5) {
                availableRooms.push({
                    room_number: String(roomGr.getValue('room_number')),
                    room_type: roomGr.getDisplayValue('room_type'),
                    floor: String(roomGr.getValue('floor')),
                });
            }
        }

        return {
            available_count: availableCount,
            sample_available_rooms: availableRooms,
        };
    }

    /**
     * 5. get_active_menu
     */
    public static getActiveMenu(session: UserSessionContext, params: Record<string, any>): any {
        const itemGr = new GlideRecord('x_2120492_athidhi_menu_item');
        itemGr.addQuery('active', true);
        itemGr.addQuery('available', true);
        if (params.category) {
            itemGr.addQuery('category', String(params.category).toLowerCase());
        }
        if (params.dietary_type) {
            itemGr.addQuery('dietary_type', String(params.dietary_type).toLowerCase());
        }
        itemGr.orderBy('category');
        itemGr.setLimit(15);
        itemGr.query();

        const items: any[] = [];
        while (itemGr.next()) {
            items.push({
                name: String(itemGr.getValue('name')),
                category: String(itemGr.getValue('category')),
                price: Number(itemGr.getValue('price') || 0),
                dietary_type: String(itemGr.getValue('dietary_type') || 'Standard'),
                preparation_time: Number(itemGr.getValue('preparation_time') || 20),
            });
        }

        return { menu_items: items, count: items.length };
    }

    /**
     * 6. get_food_order_status
     */
    public static getFoodOrderStatus(session: UserSessionContext, params: Record<string, any>): any {
        const orderGr = new GlideRecord('x_2120492_athidhi_food_order');
        if (session.activeRole === 'guest') {
            orderGr.addQuery('guest', session.guestSysId);
        }
        if (params.order_number) {
            orderGr.addQuery('order_number', String(params.order_number).trim());
        }
        orderGr.orderByDesc('ordered_at');
        orderGr.setLimit(5);
        orderGr.query();

        const orders: any[] = [];
        while (orderGr.next()) {
            orders.push({
                order_number: String(orderGr.getValue('order_number')),
                restaurant: orderGr.getDisplayValue('restaurant'),
                status: String(orderGr.getValue('status')),
                total: Number(orderGr.getValue('total') || 0),
                ordered_at: String(orderGr.getValue('ordered_at')),
                order_type: String(orderGr.getValue('order_type')),
            });
        }

        return { food_orders: orders, count: orders.length };
    }

    /**
     * 7. get_guest_service_requests
     */
    public static getGuestServiceRequests(session: UserSessionContext, params: Record<string, any>): any {
        const srvGr = new GlideRecord('x_2120492_athidhi_service_request');
        if (session.activeRole === 'guest') {
            srvGr.addQuery('guest', session.guestSysId);
        }
        if (params.status) {
            srvGr.addQuery('status', String(params.status).toLowerCase());
        }
        srvGr.orderByDesc('requested_at');
        srvGr.setLimit(5);
        srvGr.query();

        const requests: any[] = [];
        while (srvGr.next()) {
            requests.push({
                request_number: String(srvGr.getValue('request_number')),
                request_type: String(srvGr.getValue('request_type')),
                description: String(srvGr.getValue('description')),
                status: String(srvGr.getValue('status')),
                priority: String(srvGr.getValue('priority')),
                requested_at: String(srvGr.getValue('requested_at')),
            });
        }

        return { service_requests: requests, count: requests.length };
    }

    /**
     * 8. get_service_catalog
     */
    public static getServiceCatalog(session: UserSessionContext, params: Record<string, any>): any {
        const catGr = new GlideRecord('x_2120492_athidhi_service_catalog_item');
        catGr.addQuery('active', true);
        if (params.category) {
            catGr.addQuery('category', String(params.category).toLowerCase());
        }
        catGr.orderBy('category');
        catGr.setLimit(15);
        catGr.query();

        const catalog: any[] = [];
        while (catGr.next()) {
            catalog.push({
                name: String(catGr.getValue('name')),
                category: String(catGr.getValue('category')),
                description: String(catGr.getValue('description') || ''),
                chargeable: catGr.getValue('chargeable') === 'true' || catGr.getValue('chargeable') === '1',
                price: Number(catGr.getValue('price') || 0),
                estimated_minutes: Number(catGr.getValue('estimated_minutes') || 30),
            });
        }

        return { catalog_items: catalog, count: catalog.length };
    }

    /**
     * 9. get_hotel_faq
     */
    public static getHotelFaq(session: UserSessionContext, params: Record<string, any>): any {
        const topic = String(params.topic || '').toLowerCase();
        let answer = "Athidhi Services check-in time is 2:00 PM and check-out time is 11:00 AM. In-room dining and front desk support operate 24/7. High-speed Wi-Fi and breakfast are complimentary for all registered guests.";

        if (topic.includes('breakfast') || topic.includes('dining')) {
            answer = "Breakfast is served daily from 6:30 AM to 10:30 AM at the Athidhi Main Restaurant. 24-hour Room Service is available via the Guest Portal or room phone.";
        } else if (topic.includes('wifi') || topic.includes('internet')) {
            answer = "Complimentary high-speed Wi-Fi is available throughout the hotel property. Network name: Athidhi_Guest (no password required; authenticate with room number and last name).";
        } else if (topic.includes('pool') || topic.includes('gym') || topic.includes('fitness')) {
            answer = "The rooftop swimming pool and fitness center are located on Floor 5 and open daily from 6:00 AM to 10:00 PM.";
        }

        return { topic: topic, answer: answer };
    }

    /**
     * 10. create_housekeeping_request
     */
    public static createHousekeepingRequest(session: UserSessionContext, params: Record<string, any>): any {
        // Resolve guest's active stay
        const stayGr = new GlideRecord('x_2120492_athidhi_stay');
        stayGr.addQuery('guest', session.guestSysId);
        stayGr.addQuery('status', 'checked_in');
        stayGr.setLimit(1);
        stayGr.query();

        if (!stayGr.next()) {
            return {
                success: false,
                message: 'Cannot create housekeeping request: No active checked-in stay found for your guest profile.',
            };
        }

        const srvGr = new GlideRecord('x_2120492_athidhi_service_request');
        srvGr.initialize();
        srvGr.setValue('guest', session.guestSysId);
        srvGr.setValue('stay', stayGr.getUniqueValue());
        srvGr.setValue('room', stayGr.getValue('room'));
        srvGr.setValue('request_type', 'housekeeping');
        srvGr.setValue('description', String(params.notes));
        srvGr.setValue('priority', params.priority || 'medium');
        srvGr.setValue('status', 'new');
        srvGr.setValue('requested_at', new GlideDateTime());
        const srvId = srvGr.insert();

        // Retrieve auto-numbered request number
        const numGr = new GlideRecord('x_2120492_athidhi_service_request');
        let reqNum = 'Created';
        if (numGr.get(srvId)) {
            reqNum = String(numGr.getValue('request_number'));
        }

        return {
            success: true,
            request_number: reqNum,
            room: stayGr.getDisplayValue('room'),
            status: 'new',
            message: 'Housekeeping request ' + reqNum + ' has been logged and dispatched to floor attendants.',
        };
    }

    /**
     * 11. create_maintenance_request
     */
    public static createMaintenanceRequest(session: UserSessionContext, params: Record<string, any>): any {
        const stayGr = new GlideRecord('x_2120492_athidhi_stay');
        stayGr.addQuery('guest', session.guestSysId);
        stayGr.addQuery('status', 'checked_in');
        stayGr.setLimit(1);
        stayGr.query();

        if (!stayGr.next()) {
            return {
                success: false,
                message: 'Cannot report maintenance: No active checked-in stay found for your guest profile.',
            };
        }

        // Create guest Service Request which seamlessly invokes handleServiceRequestCreated Business Rule
        // This ensures authoritative Work Task & Maintenance Request creation without duplicates
        const srvGr = new GlideRecord('x_2120492_athidhi_service_request');
        srvGr.initialize();
        srvGr.setValue('guest', session.guestSysId);
        srvGr.setValue('stay', stayGr.getUniqueValue());
        srvGr.setValue('room', stayGr.getValue('room'));
        srvGr.setValue('request_type', 'maintenance');
        srvGr.setValue('description', `[${String(params.category).toUpperCase()}] ${params.description}`);
        srvGr.setValue('priority', params.priority || 'medium');
        srvGr.setValue('status', 'new');
        srvGr.setValue('requested_at', new GlideDateTime());
        const srvId = srvGr.insert();

        // Retrieve auto-numbered request number from the created service request
        const numGr = new GlideRecord('x_2120492_athidhi_service_request');
        let reqNum = 'Created';
        if (numGr.get(srvId)) {
            reqNum = String(numGr.getValue('request_number'));
        }

        // Locate the linked Maintenance Request created by the Service Request Intake Business Rule
        const mntGr = new GlideRecord('x_2120492_athidhi_maintenance_request');
        mntGr.addQuery('service_request', srvId);
        mntGr.query();
        let mntNum = reqNum;
        if (mntGr.next()) {
            mntGr.setValue('category', String(params.category).toLowerCase());
            mntGr.update();
            mntNum = String(mntGr.getValue('request_number'));
        }

        return {
            success: true,
            request_number: mntNum,
            service_request_number: reqNum,
            room: stayGr.getDisplayValue('room'),
            status: 'new',
            message: 'Maintenance ticket ' + mntNum + ' has been assigned to technical services.',
        };
    }

    /**
     * 12. create_room_service_request
     */
    public static createRoomServiceRequest(session: UserSessionContext, params: Record<string, any>): any {
        const stayGr = new GlideRecord('x_2120492_athidhi_stay');
        stayGr.addQuery('guest', session.guestSysId);
        stayGr.addQuery('status', 'checked_in');
        stayGr.setLimit(1);
        stayGr.query();

        if (!stayGr.next()) {
            return {
                success: false,
                message: 'Cannot place room service: No active checked-in stay found for your guest profile.',
            };
        }

        // Validate menu item exists and is active
        const itemGr = new GlideRecord('x_2120492_athidhi_menu_item');
        itemGr.addQuery('name', 'CONTAINS', String(params.menu_item_name));
        itemGr.addQuery('active', true);
        itemGr.addQuery('available', true);
        itemGr.setLimit(1);
        itemGr.query();

        if (!itemGr.next()) {
            return {
                success: false,
                message: 'Item "' + params.menu_item_name + '" is not available on the active dining menu.',
            };
        }

        const quantity = Math.max(1, parseInt(params.quantity, 10) || 1);
        const unitPrice = parseFloat(itemGr.getValue('price') || '0');

        // Resolve restaurant from menu with safe fallback
        let restaurantId = '';
        const menuGr = new GlideRecord('x_2120492_athidhi_menu');
        if (menuGr.get(itemGr.getValue('menu'))) {
            restaurantId = menuGr.getValue('restaurant') || '';
        }
        if (!restaurantId) {
            const restGr = new GlideRecord('x_2120492_athidhi_restaurant');
            restGr.setLimit(1);
            restGr.query();
            if (restGr.next()) {
                restaurantId = restGr.getUniqueValue();
            }
        }

        const orderGr = new GlideRecord('x_2120492_athidhi_food_order');
        orderGr.initialize();
        orderGr.setValue('guest', session.guestSysId);
        orderGr.setValue('stay', stayGr.getUniqueValue());
        orderGr.setValue('room', stayGr.getValue('room'));
        if (restaurantId) orderGr.setValue('restaurant', restaurantId);
        orderGr.setValue('order_type', 'room_service');
        orderGr.setValue('status', 'new');
        orderGr.setValue('priority', 'normal');
        orderGr.setValue('special_instructions', params.special_instructions || '');
        const orderId = orderGr.insert();

        // Create Food Order Item (triggers server-side pricing Business Rule)
        const orderItemGr = new GlideRecord('x_2120492_athidhi_food_order_item');
        orderItemGr.initialize();
        orderItemGr.setValue('order', orderId);
        orderItemGr.setValue('menu_item', itemGr.getUniqueValue());
        orderItemGr.setValue('quantity', quantity);
        orderItemGr.setValue('unit_price', unitPrice);
        orderItemGr.setValue('total_price', unitPrice * quantity);
        orderItemGr.insert();

        // Fetch refreshed order number
        const refOrderGr = new GlideRecord('x_2120492_athidhi_food_order');
        let ordNum = 'Created';
        if (refOrderGr.get(orderId)) {
            ordNum = String(refOrderGr.getValue('order_number'));
        }

        return {
            success: true,
            order_number: ordNum,
            item: itemGr.getValue('name'),
            quantity: quantity,
            room: stayGr.getDisplayValue('room'),
            status: 'new',
            message: 'Room service order ' + ordNum + ' placed successfully and sent to kitchen.',
        };
    }

    /**
     * 13. create_guest_service_request
     */
    public static createGuestServiceRequest(session: UserSessionContext, params: Record<string, any>): any {
        const stayGr = new GlideRecord('x_2120492_athidhi_stay');
        stayGr.addQuery('guest', session.guestSysId);
        stayGr.addQuery('status', 'checked_in');
        stayGr.setLimit(1);
        stayGr.query();

        if (!stayGr.next()) {
            return {
                success: false,
                message: 'Cannot request service: No active checked-in stay found for your guest profile.',
            };
        }

        const srvGr = new GlideRecord('x_2120492_athidhi_service_request');
        srvGr.initialize();
        srvGr.setValue('guest', session.guestSysId);
        srvGr.setValue('stay', stayGr.getUniqueValue());
        srvGr.setValue('room', stayGr.getValue('room'));
        srvGr.setValue('request_type', String(params.request_type).toLowerCase());
        srvGr.setValue('description', String(params.description));
        srvGr.setValue('priority', params.priority || 'medium');
        srvGr.setValue('status', 'new');
        srvGr.setValue('requested_at', new GlideDateTime());
        const srvId = srvGr.insert();

        const numGr = new GlideRecord('x_2120492_athidhi_service_request');
        let reqNum = 'Created';
        if (numGr.get(srvId)) {
            reqNum = String(numGr.getValue('request_number'));
        }

        return {
            success: true,
            request_number: reqNum,
            room: stayGr.getDisplayValue('room'),
            status: 'new',
            message: 'Service request ' + reqNum + ' created successfully.',
        };
    }
}

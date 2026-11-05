import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide'

interface EmitNotificationParams {
    recipient?: string;
    recipientRole?: 'guest' | 'manager' | 'admin' | 'receptionist' | 'housekeeping' | 'restaurant' | 'maintenance' | 'all';
    notificationType: 'service_request' | 'reservation' | 'food_order' | 'incident' | 'housekeeping' | 'maintenance' | 'inventory' | 'system';
    severity?: 'info' | 'warning' | 'critical';
    title: string;
    message: string;
    sourceTable?: string;
    sourceSysId?: string;
    actionUrl?: string;
    deduplicationKey?: string;
}

function emitNotification(params: EmitNotificationParams): void {
    try {
        if (params.deduplicationKey) {
            const dupGr = new GlideRecord('x_2120492_athidhi_notification');
            dupGr.addQuery('deduplication_key', params.deduplicationKey);
            dupGr.addQuery('is_read', false);
            dupGr.query();
            if (dupGr.hasNext()) {
                return;
            }
        }
        const gr = new GlideRecord('x_2120492_athidhi_notification');
        gr.initialize();
        if (params.recipient) gr.setValue('recipient', params.recipient);
        gr.setValue('recipient_role', params.recipientRole || 'all');
        gr.setValue('notification_type', params.notificationType);
        gr.setValue('severity', params.severity || 'info');
        gr.setValue('title', (params.title || '').substring(0, 100));
        gr.setValue('message', (params.message || '').substring(0, 500));
        if (params.sourceTable) gr.setValue('source_table', params.sourceTable);
        if (params.sourceSysId) gr.setValue('source_sys_id', params.sourceSysId);
        if (params.actionUrl) gr.setValue('action_url', params.actionUrl);
        if (params.deduplicationKey) gr.setValue('deduplication_key', params.deduplicationKey);
        gr.setValue('is_read', false);
        gr.setValue('created_at', new GlideDateTime().getValue());
        gr.insert();
    } catch (e: any) {
        gs.warn('emitNotification failed: ' + (e.message || String(e)));
    }
}

/**
 * 1. Reservation Validation
 * Validates dates, guest, room status, room type compatibility, and overlapping reservations.
 */
export function validateReservation(current: any, previous: any): void {
    const checkIn = current.getValue('check_in')
    const checkOut = current.getValue('check_out')

    if (checkIn && checkOut && checkOut <= checkIn) {
        gs.addErrorMessage('Check-out date/time must be strictly after Check-in date/time.')
        current.setAbortAction(true)
        return
    }

    const adults = parseInt(current.getValue('adults') || '0', 10)
    const children = parseInt(current.getValue('children') || '0', 10)

    if (adults < 1) {
        gs.addErrorMessage('Reservation must have at least 1 adult guest.')
        current.setAbortAction(true)
        return
    }

    if (children < 0) {
        gs.addErrorMessage('Children count cannot be negative.')
        current.setAbortAction(true)
        return
    }

    const totalAmount = parseFloat(current.getValue('total_amount') || '0')
    if (totalAmount < 0) {
        gs.addErrorMessage('Total reservation amount cannot be negative.')
        current.setAbortAction(true)
        return
    }

    const roomId = current.getValue('room')
    const roomTypeId = current.getValue('room_type')

    if (roomId) {
        const roomGR = new GlideRecord('x_2120492_athidhi_room')
        if (roomGR.get(roomId)) {
            const roomStatus = roomGR.getValue('status')
            if (roomStatus === 'out_of_service') {
                gs.addErrorMessage('Cannot reserve a room that is Out of Service.')
                current.setAbortAction(true)
                return
            }
            if (roomStatus === 'maintenance') {
                gs.addErrorMessage('Cannot reserve a room that is currently under Maintenance.')
                current.setAbortAction(true)
                return
            }

            const assignedRoomType = roomGR.getValue('room_type')
            if (roomTypeId && assignedRoomType && assignedRoomType !== roomTypeId) {
                gs.addErrorMessage('Assigned room category does not match the selected Room Type.')
                current.setAbortAction(true)
                return
            }
        }

        const resStatus = current.getValue('status')
        if (resStatus === 'confirmed' || resStatus === 'checked_in') {
            const overlapGR = new GlideRecord('x_2120492_athidhi_reservation')
            overlapGR.addQuery('room', roomId)
            overlapGR.addQuery('sys_id', '!=', current.getUniqueValue())
            overlapGR.addQuery('status', 'IN', 'confirmed,checked_in')
            overlapGR.addQuery('check_in', '<', checkOut)
            overlapGR.addQuery('check_out', '>', checkIn)
            overlapGR.query()

            if (overlapGR.hasNext()) {
                gs.addErrorMessage('The selected room is already booked for overlapping dates.')
                current.setAbortAction(true)
                return
            }
        }
    }
}

/**
 * 2. Check-In Handler
 * When reservation status transitions to checked_in, creates active Stay and sets room to occupied.
 */
export function handleReservationCheckIn(current: any, previous: any): void {
    const prevStatus = previous ? previous.getValue('status') : ''
    const currStatus = current.getValue('status')

    if (currStatus !== 'checked_in' || prevStatus === 'checked_in') {
        return
    }

    const guestId = current.getValue('guest')
    const roomId = current.getValue('room')

    if (!guestId || !roomId) {
        gs.addErrorMessage('Cannot complete check-in without an assigned Guest and Room.')
        current.setAbortAction(true)
        return
    }

    const existingStayGR = new GlideRecord('x_2120492_athidhi_stay')
    existingStayGR.addQuery('reservation', current.getUniqueValue())
    existingStayGR.addQuery('status', 'checked_in')
    existingStayGR.query()

    if (!existingStayGR.hasNext()) {
        const stayGR = new GlideRecord('x_2120492_athidhi_stay')
        stayGR.initialize()
        stayGR.setValue('reservation', current.getUniqueValue())
        stayGR.setValue('guest', guestId)
        stayGR.setValue('room', roomId)
        stayGR.setValue('actual_check_in', new GlideDateTime().getValue())
        stayGR.setValue('expected_check_out', current.getValue('check_out'))
        stayGR.setValue('status', 'checked_in')
        stayGR.setValue('adults', current.getValue('adults') || 1)
        stayGR.setValue('children', current.getValue('children') || 0)
        stayGR.setValue('special_notes', current.getValue('special_requests'))
        stayGR.insert()
    }

    const roomGR = new GlideRecord('x_2120492_athidhi_room')
    if (roomGR.get(roomId)) {
        roomGR.setValue('status', 'occupied')
        roomGR.setValue('occupancy_status', 'occupied')
        roomGR.update()
    }

    emitNotification({
        recipient: guestId,
        recipientRole: 'guest',
        notificationType: 'reservation',
        severity: 'info',
        title: 'Welcome to Athidhi!',
        message: 'Your check-in is complete. Room is ready. Enjoy your stay!',
        sourceTable: 'x_2120492_athidhi_reservation',
        sourceSysId: current.getUniqueValue(),
        deduplicationKey: 'checkin_guest_' + current.getUniqueValue(),
    })
    emitNotification({
        recipientRole: 'manager',
        notificationType: 'reservation',
        severity: 'info',
        title: 'Guest Check-In',
        message: 'Guest checked in for reservation ' + (current.getDisplayValue('reservation_number') || current.getUniqueValue()),
        sourceTable: 'x_2120492_athidhi_reservation',
        sourceSysId: current.getUniqueValue(),
        deduplicationKey: 'checkin_mgr_' + current.getUniqueValue(),
    })
}

/**
 * 3. Check-Out Handler
 * When Stay transitions to checked_out, vacates room, schedules Check-Out Cleaning, and marks reservation checked_out.
 */
export function handleStayCheckOut(current: any, previous: any): void {
    const prevStatus = previous ? previous.getValue('status') : ''
    const currStatus = current.getValue('status')

    if (currStatus !== 'checked_out' || prevStatus === 'checked_out') {
        return
    }

    const roomId = current.getValue('room')
    if (roomId) {
        const roomGR = new GlideRecord('x_2120492_athidhi_room')
        if (roomGR.get(roomId)) {
            roomGR.setValue('occupancy_status', 'vacant')
            roomGR.setValue('status', 'cleaning')
            roomGR.setValue('housekeeping_status', 'dirty')
            roomGR.update()
        }

        const existingTaskGR = new GlideRecord('x_2120492_athidhi_housekeeping_task')
        existingTaskGR.addQuery('stay', current.getUniqueValue())
        existingTaskGR.addQuery('task_type', 'check_out_cleaning')
        existingTaskGR.query()

        if (!existingTaskGR.hasNext()) {
            const hkGR = new GlideRecord('x_2120492_athidhi_housekeeping_task')
            hkGR.initialize()
            hkGR.setValue('room', roomId)
            hkGR.setValue('stay', current.getUniqueValue())
            hkGR.setValue('task_type', 'check_out_cleaning')
            hkGR.setValue('priority', 'high')
            hkGR.setValue('status', 'pending')
            hkGR.setValue('inspection_required', true)
            hkGR.setValue('inspection_status', 'pending')
            hkGR.setValue('scheduled_start', new GlideDateTime().getValue())
            hkGR.setValue('notes', 'Automated check-out cleaning generated from stay departure.')
            hkGR.insert()
        }
    }

    const reservationId = current.getValue('reservation')
    if (reservationId) {
        const resGR = new GlideRecord('x_2120492_athidhi_reservation')
        if (resGR.get(reservationId)) {
            resGR.setValue('status', 'checked_out')
            resGR.update()
        }
    }

    emitNotification({
        recipientRole: 'housekeeping',
        notificationType: 'housekeeping',
        severity: 'warning',
        title: 'Turnover Cleaning Required',
        message: 'Stay completed for Room. Turnover cleaning task scheduled.',
        sourceTable: 'x_2120492_athidhi_stay',
        sourceSysId: current.getUniqueValue(),
        deduplicationKey: 'checkout_hk_' + current.getUniqueValue(),
    })
    emitNotification({
        recipientRole: 'manager',
        notificationType: 'reservation',
        severity: 'info',
        title: 'Guest Check-Out',
        message: 'Stay checkout completed for stay record ' + current.getUniqueValue(),
        sourceTable: 'x_2120492_athidhi_stay',
        sourceSysId: current.getUniqueValue(),
        deduplicationKey: 'checkout_mgr_' + current.getUniqueValue(),
    })
}

/**
 * 4. Housekeeping Completion & Inspection Handler
 * When cleaning completes, updates room state. If inspection is required and passed, marks room Available.
 */
export function handleHousekeepingCompletion(current: any, previous: any): void {
    const roomId = current.getValue('room')
    if (!roomId) return

    const taskStatus = current.getValue('status')
    const rawInspReq = current.getValue('inspection_required')
    const inspectionRequired = rawInspReq === '1' || rawInspReq === 1 || rawInspReq === 'true' || rawInspReq === true
    const inspectionStatus = current.getValue('inspection_status')

    const roomGR = new GlideRecord('x_2120492_athidhi_room')
    if (!roomGR.get(roomId)) return

    if (taskStatus === 'completed') {
        if (inspectionStatus === 'failed') {
            roomGR.setValue('status', 'cleaning')
            roomGR.setValue('housekeeping_status', 'dirty')
            roomGR.update()
        } else if (!inspectionRequired || inspectionStatus === 'passed') {
            roomGR.setValue('housekeeping_status', 'clean')
            roomGR.setValue('status', 'available')
            roomGR.setValue('occupancy_status', 'vacant')
            roomGR.update()

            emitNotification({
                recipientRole: 'receptionist',
                notificationType: 'housekeeping',
                severity: 'info',
                title: 'Room Ready for Check-In',
                message: 'Room ' + (roomGR.getValue('room_number') || roomId) + ' is clean, inspected, and ready for check-in.',
                sourceTable: 'x_2120492_athidhi_room',
                sourceSysId: roomId,
                deduplicationKey: 'room_ready_' + roomId + '_' + current.getUniqueValue(),
            })
        } else {
            roomGR.setValue('housekeeping_status', 'inspected')
            roomGR.setValue('status', 'cleaning')
            roomGR.update()
        }
    } else if (inspectionStatus === 'failed') {
        roomGR.setValue('status', 'cleaning')
        roomGR.setValue('housekeeping_status', 'dirty')
        roomGR.update()
    }
}

/**
 * 5. Service Request Intake & Work Task Creation
 * Maps request type to operational department and generates internal Work Task.
 * If maintenance request, also creates a linked Maintenance Request record.
 */
export function handleServiceRequestCreated(current: any, previous: any): void {
    const reqType = current.getValue('request_type') || 'other'
    let mappedTaskType = 'front_desk'

    switch (reqType) {
        case 'housekeeping':
            mappedTaskType = 'housekeeping'
            break
        case 'maintenance':
            mappedTaskType = 'maintenance'
            break
        case 'room_service':
        case 'food_and_beverage':
            mappedTaskType = 'restaurant'
            break
        case 'concierge':
        case 'transportation':
            mappedTaskType = 'concierge'
            break
        case 'luggage':
        case 'wake_up_call':
        case 'other':
        default:
            mappedTaskType = 'front_desk'
            break
    }

    const existingWorkTask = new GlideRecord('x_2120492_athidhi_work_task')
    existingWorkTask.addQuery('service_request', current.getUniqueValue())
    existingWorkTask.query()

    if (!existingWorkTask.hasNext()) {
        const wtGR = new GlideRecord('x_2120492_athidhi_work_task')
        wtGR.initialize()
        wtGR.setValue('service_request', current.getUniqueValue())
        wtGR.setValue('task_type', mappedTaskType)
        wtGR.setValue('priority', current.getValue('priority') || 'medium')
        wtGR.setValue('short_description', `Service Request [${reqType}]: ` + (current.getValue('description') || '').substring(0, 100))
        wtGR.setValue('description', current.getValue('description'))
        wtGR.setValue('state', 'open')
        wtGR.setValue('opened_at', new GlideDateTime().getValue())
        wtGR.insert()
    }

    if (current.getValue('request_type') === 'maintenance' && current.getValue('room')) {
        const existingMnt = new GlideRecord('x_2120492_athidhi_maintenance_request')
        existingMnt.addQuery('service_request', current.getUniqueValue())
        existingMnt.query()

        if (!existingMnt.hasNext()) {
            const mntGR = new GlideRecord('x_2120492_athidhi_maintenance_request')
            mntGR.initialize()
            mntGR.setValue('room', current.getValue('room'))
            mntGR.setValue('service_request', current.getUniqueValue())
            mntGR.setValue('category', 'other')
            mntGR.setValue('priority', current.getValue('priority') || 'medium')
            mntGR.setValue('description', current.getValue('description'))
            mntGR.setValue('status', 'new')
            mntGR.setValue('reported_at', new GlideDateTime().getValue())
            mntGR.insert()
        }
    }

    const guestId = current.getValue('guest')
    if (guestId) {
        emitNotification({
            recipient: guestId,
            recipientRole: 'guest',
            notificationType: 'service_request',
            severity: 'info',
            title: 'Service Request Dispatched',
            message: 'Your ' + reqType + ' request has been received and assigned to hotel staff.',
            sourceTable: 'x_2120492_athidhi_service_request',
            sourceSysId: current.getUniqueValue(),
            deduplicationKey: 'sr_guest_' + current.getUniqueValue(),
        })
    }
    emitNotification({
        recipientRole: 'manager',
        notificationType: 'service_request',
        severity: current.getValue('priority') === 'high' ? 'warning' : 'info',
        title: 'New Service Request',
        message: 'New ' + reqType + ' request: ' + (current.getValue('description') || '').substring(0, 80),
        sourceTable: 'x_2120492_athidhi_service_request',
        sourceSysId: current.getUniqueValue(),
        deduplicationKey: 'sr_mgr_' + current.getUniqueValue(),
    })
    const deptRole = mappedTaskType === 'restaurant' ? 'restaurant' : mappedTaskType === 'housekeeping' ? 'housekeeping' : mappedTaskType === 'maintenance' ? 'maintenance' : 'receptionist'
    emitNotification({
        recipientRole: deptRole as any,
        notificationType: 'service_request',
        severity: current.getValue('priority') === 'high' ? 'warning' : 'info',
        title: 'Task Assigned [' + reqType + ']',
        message: current.getValue('description') || 'New task assigned to department',
        sourceTable: 'x_2120492_athidhi_service_request',
        sourceSysId: current.getUniqueValue(),
        deduplicationKey: 'sr_dept_' + current.getUniqueValue(),
    })
}

/**
 * 6. Maintenance Resolution Handler
 * When maintenance request resolves, closes work task, service request, and checks room availability.
 */
export function handleMaintenanceResolved(current: any, previous: any): void {
    const prevStatus = previous ? previous.getValue('status') : ''
    const currStatus = current.getValue('status')

    if (currStatus !== 'resolved' || prevStatus === 'resolved') {
        return
    }

    const serviceRequestId = current.getValue('service_request')
    if (serviceRequestId) {
        const wtGR = new GlideRecord('x_2120492_athidhi_work_task')
        wtGR.addQuery('service_request', serviceRequestId)
        wtGR.query()
        while (wtGR.next()) {
            wtGR.setValue('state', 'completed')
            wtGR.setValue('completed_at', new GlideDateTime().getValue())
            wtGR.setValue('resolution_notes', current.getValue('resolution_notes') || 'Resolved by maintenance technician')
            wtGR.update()
        }

        const srGR = new GlideRecord('x_2120492_athidhi_service_request')
        if (srGR.get(serviceRequestId)) {
            srGR.setValue('status', 'completed')
            srGR.setValue('completed_at', new GlideDateTime().getValue())
            srGR.setValue('resolution_notes', current.getValue('resolution_notes') || 'Resolved by maintenance technician')
            srGR.update()

            const guestId = srGR.getValue('guest')
            if (guestId) {
                emitNotification({
                    recipient: guestId,
                    recipientRole: 'guest',
                    notificationType: 'maintenance',
                    severity: 'info',
                    title: 'Maintenance Issue Resolved',
                    message: 'Maintenance reported for your room has been resolved.',
                    sourceTable: 'x_2120492_athidhi_maintenance_request',
                    sourceSysId: current.getUniqueValue(),
                    deduplicationKey: 'mnt_guest_' + current.getUniqueValue(),
                })
            }
        }
    }

    const roomId = current.getValue('room')
    if (roomId) {
        const roomGR = new GlideRecord('x_2120492_athidhi_room')
        if (roomGR.get(roomId)) {
            if (roomGR.getValue('status') === 'maintenance') {
                const hkStatus = roomGR.getValue('housekeeping_status')
                const occStatus = roomGR.getValue('occupancy_status')
                if (hkStatus === 'clean' && occStatus === 'vacant') {
                    roomGR.setValue('status', 'available')
                } else if (hkStatus === 'dirty') {
                    roomGR.setValue('status', 'cleaning')
                }
                roomGR.update()
            }
        }
    }

    emitNotification({
        recipientRole: 'receptionist',
        notificationType: 'maintenance',
        severity: 'info',
        title: 'Maintenance Task Completed',
        message: 'Maintenance task completed for Room. Room status restored.',
        sourceTable: 'x_2120492_athidhi_maintenance_request',
        sourceSysId: current.getUniqueValue(),
        deduplicationKey: 'mnt_rec_' + current.getUniqueValue(),
    })
}

/**
 * 7. Incident Escalation Handler
 * When Service Request is escalated to critical priority, creates a linked incident.
 */
export function handleServiceRequestEscalated(current: any, previous: any): void {
    const prevPriority = previous ? previous.getValue('priority') : ''
    const currPriority = current.getValue('priority')

    if (currPriority !== 'critical' || prevPriority === 'critical') {
        return
    }

    const existingInc = new GlideRecord('x_2120492_athidhi_incident')
    existingInc.addQuery('service_request', current.getUniqueValue())
    existingInc.query()

    if (!existingInc.hasNext()) {
        const incGR = new GlideRecord('x_2120492_athidhi_incident')
        incGR.initialize()
        incGR.setValue('service_request', current.getUniqueValue())
        incGR.setValue('guest', current.getValue('guest'))
        incGR.setValue('room', current.getValue('room'))
        incGR.setValue('category', 'guest_issue')
        incGR.setValue('priority', 'critical')
        incGR.setValue('short_description', 'Escalated Service Request: ' + (current.getDisplayValue('request_number') || current.getUniqueValue()))
        incGR.setValue('description', current.getValue('description'))
        incGR.setValue('state', 'new')
        incGR.setValue('opened_at', new GlideDateTime().getValue())
        incGR.insert()

        emitNotification({
            recipientRole: 'manager',
            notificationType: 'incident',
            severity: 'critical',
            title: 'CRITICAL: Service Request Escalated',
            message: 'Service request ' + (current.getDisplayValue('request_number') || current.getUniqueValue()) + ' escalated to critical hotel incident.',
            sourceTable: 'x_2120492_athidhi_incident',
            sourceSysId: incGR.getUniqueValue(),
            deduplicationKey: 'esc_mgr_' + current.getUniqueValue(),
        })
        emitNotification({
            recipientRole: 'admin',
            notificationType: 'incident',
            severity: 'critical',
            title: 'CRITICAL: Hotel Incident Created',
            message: 'Critical incident logged from service request ' + (current.getDisplayValue('request_number') || current.getUniqueValue()),
            sourceTable: 'x_2120492_athidhi_incident',
            sourceSysId: incGR.getUniqueValue(),
            deduplicationKey: 'esc_adm_' + current.getUniqueValue(),
        })
    }
}

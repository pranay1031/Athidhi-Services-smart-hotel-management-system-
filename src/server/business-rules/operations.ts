import { gs, GlideRecord } from '@servicenow/glide'

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
        stayGR.setValue('actual_check_in', gs.nowDateTime())
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
            hkGR.setValue('scheduled_start', gs.nowDateTime())
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
}

/**
 * 4. Housekeeping Completion & Inspection Handler
 * When cleaning completes, updates room state. If inspection is required and passed, marks room Available.
 */
export function handleHousekeepingCompletion(current: any, previous: any): void {
    const roomId = current.getValue('room')
    if (!roomId) return

    const taskStatus = current.getValue('status')
    const inspectionRequired = current.getValue('inspection_required') === 'true' || current.getValue('inspection_required') === true
    const inspectionStatus = current.getValue('inspection_status')

    const roomGR = new GlideRecord('x_2120492_athidhi_room')
    if (!roomGR.get(roomId)) return

    if (taskStatus === 'completed') {
        if (!inspectionRequired || inspectionStatus === 'passed') {
            roomGR.setValue('housekeeping_status', 'clean')
            roomGR.setValue('status', 'available')
            roomGR.setValue('occupancy_status', 'vacant')
            roomGR.update()
        } else if (inspectionRequired && inspectionStatus !== 'passed') {
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
    const existingWorkTask = new GlideRecord('x_2120492_athidhi_work_task')
    existingWorkTask.addQuery('service_request', current.getUniqueValue())
    existingWorkTask.query()

    if (!existingWorkTask.hasNext()) {
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

        const wtGR = new GlideRecord('x_2120492_athidhi_work_task')
        wtGR.initialize()
        wtGR.setValue('service_request', current.getUniqueValue())
        wtGR.setValue('task_type', mappedTaskType)
        wtGR.setValue('priority', current.getValue('priority') || 'medium')
        wtGR.setValue('short_description', `Service Request [${reqType}]: ` + (current.getValue('description') || '').substring(0, 100))
        wtGR.setValue('description', current.getValue('description'))
        wtGR.setValue('state', 'open')
        wtGR.setValue('opened_at', gs.nowDateTime())
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
            mntGR.setValue('reported_at', gs.nowDateTime())
            mntGR.insert()
        }
    }
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
            wtGR.setValue('completed_at', gs.nowDateTime())
            wtGR.setValue('resolution_notes', current.getValue('resolution_notes') || 'Resolved by maintenance technician')
            wtGR.update()
        }

        const srGR = new GlideRecord('x_2120492_athidhi_service_request')
        if (srGR.get(serviceRequestId)) {
            srGR.setValue('status', 'completed')
            srGR.setValue('completed_at', gs.nowDateTime())
            srGR.setValue('resolution_notes', current.getValue('resolution_notes') || 'Resolved by maintenance technician')
            srGR.update()
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
        incGR.setValue('short_description', 'Escalated Service Request: ' + current.getDisplayValue('request_number'))
        incGR.setValue('description', current.getValue('description'))
        incGR.setValue('state', 'new')
        incGR.setValue('opened_at', gs.nowDateTime())
        incGR.insert()
    }
}

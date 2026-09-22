import { BusinessRule } from '@servicenow/sdk/core'
import {
    validateReservation,
    handleReservationCheckIn,
    handleStayCheckOut,
    handleHousekeepingCompletion,
    handleServiceRequestCreated,
    handleMaintenanceResolved,
    handleServiceRequestEscalated,
} from '../../server/business-rules/operations'

export const validateReservationRule = BusinessRule({
    $id: Now.ID['br_validate_reservation'],
    name: 'Athidhi - Validate Reservation',
    table: 'x_2120492_athidhi_reservation',
    when: 'before',
    action: ['insert', 'update'],
    order: 100,
    script: validateReservation,
    description: 'Deterministic validation of dates, guest count, room status, compatibility, and room overlap.',
})

export const checkInReservationRule = BusinessRule({
    $id: Now.ID['br_checkin_reservation'],
    name: 'Athidhi - Process Check-In',
    table: 'x_2120492_athidhi_reservation',
    when: 'after',
    action: ['update'],
    order: 200,
    script: handleReservationCheckIn,
    description: 'Generates active Stay record and sets room to occupied upon reservation check-in.',
})

export const checkOutStayRule = BusinessRule({
    $id: Now.ID['br_checkout_stay'],
    name: 'Athidhi - Process Check-Out',
    table: 'x_2120492_athidhi_stay',
    when: 'after',
    action: ['update'],
    order: 200,
    script: handleStayCheckOut,
    description: 'Vacates room, generates check-out housekeeping task, and closes reservation upon stay departure.',
})

export const housekeepingCompletionRule = BusinessRule({
    $id: Now.ID['br_housekeeping_completion'],
    name: 'Athidhi - Housekeeping Completion & Inspection',
    table: 'x_2120492_athidhi_housekeeping_task',
    when: 'after',
    action: ['update'],
    order: 200,
    script: handleHousekeepingCompletion,
    description: 'Updates room cleanliness and marks room available only after successful cleaning and inspection.',
})

export const serviceRequestIntakeRule = BusinessRule({
    $id: Now.ID['br_service_request_intake'],
    name: 'Athidhi - Service Request Intake & Dispatch',
    table: 'x_2120492_athidhi_service_request',
    when: 'after',
    action: ['insert'],
    order: 100,
    script: handleServiceRequestCreated,
    description: 'Automatically creates corresponding internal Work Task and Maintenance Request from Service Requests.',
})

export const maintenanceResolutionRule = BusinessRule({
    $id: Now.ID['br_maintenance_resolution'],
    name: 'Athidhi - Maintenance Resolution Handler',
    table: 'x_2120492_athidhi_maintenance_request',
    when: 'after',
    action: ['update'],
    order: 200,
    script: handleMaintenanceResolved,
    description: 'Synchronizes resolved maintenance requests with related work tasks, service requests, and room availability.',
})

export const incidentEscalationRule = BusinessRule({
    $id: Now.ID['br_incident_escalation'],
    name: 'Athidhi - Escalate Service Request to Incident',
    table: 'x_2120492_athidhi_service_request',
    when: 'after',
    action: ['update'],
    order: 300,
    script: handleServiceRequestEscalated,
    description: 'Creates linked hotel incident record when a service request is escalated to critical priority.',
})

import { Role } from '@servicenow/sdk/core'

export const guestRole = Role({
    name: 'x_2120492_athidhi.guest',
    description: 'Athidhi Services: Hotel Guest with access to self-service portal, room amenities, and service requests',
})

export const receptionistRole = Role({
    name: 'x_2120492_athidhi.receptionist',
    description: 'Athidhi Services: Front Desk Receptionist for check-in, check-out, reservations, and guest management',
})

export const housekeepingRole = Role({
    name: 'x_2120492_athidhi.housekeeping',
    description: 'Athidhi Services: Housekeeping Staff for room cleaning, turn-down, and room status updates',
})

export const maintenanceRole = Role({
    name: 'x_2120492_athidhi.maintenance',
    description: 'Athidhi Services: Maintenance Technician for repairs, work orders, and facilities upkeep',
})

export const restaurantRole = Role({
    name: 'x_2120492_athidhi.restaurant',
    description: 'Athidhi Services: Food and Beverage staff for restaurant orders, dining reservations, and room service',
})

export const managerRole = Role({
    name: 'x_2120492_athidhi.manager',
    description: 'Athidhi Services: Hotel Operations Manager overseeing all departments, escalations, and reports',
    containsRoles: [
        receptionistRole,
        housekeepingRole,
        maintenanceRole,
        restaurantRole,
    ],
})

export const adminRole = Role({
    name: 'x_2120492_athidhi.admin',
    description: 'Athidhi Services: System Administrator with full application configuration and AI setup privileges',
    scopedAdmin: true,
    containsRoles: [managerRole],
})

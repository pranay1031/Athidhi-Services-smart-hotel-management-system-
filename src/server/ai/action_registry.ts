/**
 * Phase 5B — Explicit Allowlist AI Action Registry
 * Strictly enforces allowed actions, roles, parameters, and targets.
 */

import { AIActionDefinition } from './types';

export const AI_ACTION_REGISTRY: Record<string, AIActionDefinition> = {
    // ---------------------------------------------------------------------
    // READ ACTIONS (1 to 9)
    // ---------------------------------------------------------------------
    get_current_guest_stay: {
        name: 'get_current_guest_stay',
        description: "Retrieves the active checked-in stay details for the authenticated guest.",
        classification: 'READ',
        allowedRoles: ['guest', 'receptionist', 'manager', 'admin'],
        requiredParams: [],
        optionalParams: [],
        parameterDefinitions: [],
        targetTable: 'x_2120492_athidhi_stay',
        auditRequired: true,
    },
    get_guest_reservations: {
        name: 'get_guest_reservations',
        description: "Retrieves confirmed reservations for the authenticated guest.",
        classification: 'READ',
        allowedRoles: ['guest', 'receptionist', 'manager', 'admin'],
        requiredParams: [],
        optionalParams: ['status'],
        parameterDefinitions: [
            {
                name: 'status',
                type: 'string',
                required: false,
                description: 'Filter reservations by status',
                allowedValues: ['draft', 'confirmed', 'checked_in', 'checked_out', 'cancelled'],
            },
        ],
        targetTable: 'x_2120492_athidhi_reservation',
        auditRequired: true,
    },
    get_room_information: {
        name: 'get_room_information',
        description: "Retrieves public details about hotel room types and amenities.",
        classification: 'READ',
        allowedRoles: ['guest', 'receptionist', 'housekeeping', 'maintenance', 'restaurant', 'manager', 'admin'],
        requiredParams: [],
        optionalParams: ['room_type'],
        parameterDefinitions: [
            {
                name: 'room_type',
                type: 'string',
                required: false,
                description: 'Name or code of room type',
            },
        ],
        targetTable: 'x_2120492_athidhi_room_type',
        auditRequired: false,
    },
    get_room_availability: {
        name: 'get_room_availability',
        description: "Checks hotel room availability for specified room types.",
        classification: 'READ',
        allowedRoles: ['guest', 'receptionist', 'housekeeping', 'maintenance', 'restaurant', 'manager', 'admin'],
        requiredParams: [],
        optionalParams: ['room_type'],
        parameterDefinitions: [
            {
                name: 'room_type',
                type: 'string',
                required: false,
                description: 'Name or code of room type to check',
            },
        ],
        targetTable: 'x_2120492_athidhi_room',
        auditRequired: false,
    },
    get_active_menu: {
        name: 'get_active_menu',
        description: "Retrieves active dining menus and available menu items with prices and dietary tags.",
        classification: 'READ',
        allowedRoles: ['guest', 'receptionist', 'housekeeping', 'maintenance', 'restaurant', 'manager', 'admin'],
        requiredParams: [],
        optionalParams: ['category', 'dietary_type'],
        parameterDefinitions: [
            {
                name: 'category',
                type: 'string',
                required: false,
                description: 'Menu item category filter',
                allowedValues: ['starter', 'main_course', 'side', 'dessert', 'beverage', 'snack'],
            },
            {
                name: 'dietary_type',
                type: 'string',
                required: false,
                description: 'Dietary filter',
                allowedValues: ['vegetarian', 'non_vegetarian', 'vegan', 'gluten_free', 'jain', 'other'],
            },
        ],
        targetTable: 'x_2120492_athidhi_menu_item',
        auditRequired: false,
    },
    get_food_order_status: {
        name: 'get_food_order_status',
        description: "Retrieves the status of food orders for the authenticated guest.",
        classification: 'READ',
        allowedRoles: ['guest', 'restaurant', 'receptionist', 'manager', 'admin'],
        requiredParams: [],
        optionalParams: ['order_number'],
        parameterDefinitions: [
            {
                name: 'order_number',
                type: 'string',
                required: false,
                description: 'Optional specific order number (e.g. FOD000001)',
            },
        ],
        targetTable: 'x_2120492_athidhi_food_order',
        auditRequired: true,
    },
    get_guest_service_requests: {
        name: 'get_guest_service_requests',
        description: "Retrieves open and completed service requests for the authenticated guest.",
        classification: 'READ',
        allowedRoles: ['guest', 'receptionist', 'housekeeping', 'maintenance', 'manager', 'admin'],
        requiredParams: [],
        optionalParams: ['status'],
        parameterDefinitions: [
            {
                name: 'status',
                type: 'string',
                required: false,
                description: 'Filter requests by status',
                allowedValues: ['new', 'accepted', 'in_progress', 'on_hold', 'completed', 'cancelled'],
            },
        ],
        targetTable: 'x_2120492_athidhi_service_request',
        auditRequired: true,
    },
    get_service_catalog: {
        name: 'get_service_catalog',
        description: "Retrieves active hotel service catalog items (housekeeping, maintenance, concierge, etc.).",
        classification: 'READ',
        allowedRoles: ['guest', 'receptionist', 'housekeeping', 'maintenance', 'restaurant', 'manager', 'admin'],
        requiredParams: [],
        optionalParams: ['category'],
        parameterDefinitions: [
            {
                name: 'category',
                type: 'string',
                required: false,
                description: 'Filter catalog by category',
                allowedValues: ['housekeeping', 'maintenance', 'concierge', 'food_and_beverage', 'transportation', 'guest_services', 'other'],
            },
        ],
        targetTable: 'x_2120492_athidhi_service_catalog_item',
        auditRequired: false,
    },
    get_hotel_faq: {
        name: 'get_hotel_faq',
        description: "Provides answers to common hotel questions regarding amenities, policies, timings, and check-in/out.",
        classification: 'READ',
        allowedRoles: ['guest', 'receptionist', 'housekeeping', 'maintenance', 'restaurant', 'manager', 'admin'],
        requiredParams: ['topic'],
        optionalParams: [],
        parameterDefinitions: [
            {
                name: 'topic',
                type: 'string',
                required: true,
                description: 'Subject of hotel policy or FAQ inquiry',
            },
        ],
        targetTable: 'x_2120492_athidhi_amenity',
        auditRequired: false,
    },

    // ---------------------------------------------------------------------
    // CONTROLLED WRITE ACTIONS (10 to 13)
    // ---------------------------------------------------------------------
    create_housekeeping_request: {
        name: 'create_housekeeping_request',
        description: "Requests housekeeping service or extra room supplies for the authenticated guest's active stay.",
        classification: 'WRITE',
        allowedRoles: ['guest', 'receptionist', 'manager', 'admin'],
        requiredParams: ['notes'],
        optionalParams: ['priority'],
        parameterDefinitions: [
            {
                name: 'notes',
                type: 'string',
                required: true,
                description: 'Details of the housekeeping or supply request',
            },
            {
                name: 'priority',
                type: 'string',
                required: false,
                description: 'Requested urgency level',
                allowedValues: ['low', 'medium', 'high'],
            },
        ],
        targetTable: 'x_2120492_athidhi_service_request',
        auditRequired: true,
    },
    create_maintenance_request: {
        name: 'create_maintenance_request',
        description: "Reports a room maintenance issue (plumbing, electrical, AC, appliance) for the guest's active stay.",
        classification: 'WRITE',
        allowedRoles: ['guest', 'receptionist', 'manager', 'admin'],
        requiredParams: ['category', 'description'],
        optionalParams: ['priority'],
        parameterDefinitions: [
            {
                name: 'category',
                type: 'string',
                required: true,
                description: 'Maintenance category',
                allowedValues: ['plumbing', 'electrical', 'hvac', 'furniture', 'appliance', 'network', 'other'],
            },
            {
                name: 'description',
                type: 'string',
                required: true,
                description: 'Description of the maintenance defect',
            },
            {
                name: 'priority',
                type: 'string',
                required: false,
                description: 'Priority level',
                allowedValues: ['low', 'medium', 'high', 'critical'],
            },
        ],
        targetTable: 'x_2120492_athidhi_maintenance_request',
        auditRequired: true,
    },
    create_room_service_request: {
        name: 'create_room_service_request',
        description: "Places a room service order from active menu items for the guest's verified active stay.",
        classification: 'WRITE',
        allowedRoles: ['guest', 'receptionist', 'restaurant', 'manager', 'admin'],
        requiredParams: ['menu_item_name', 'quantity'],
        optionalParams: ['special_instructions'],
        parameterDefinitions: [
            {
                name: 'menu_item_name',
                type: 'string',
                required: true,
                description: 'Name of the menu item from active menu',
            },
            {
                name: 'quantity',
                type: 'integer',
                required: true,
                description: 'Quantity of items to order (integer >= 1)',
            },
            {
                name: 'special_instructions',
                type: 'string',
                required: false,
                description: 'Dietary or preparation instructions',
            },
        ],
        targetTable: 'x_2120492_athidhi_food_order',
        auditRequired: true,
    },
    create_guest_service_request: {
        name: 'create_guest_service_request',
        description: "Creates a general service request (concierge, luggage, wake-up call, transport) for the guest's active stay.",
        classification: 'WRITE',
        allowedRoles: ['guest', 'receptionist', 'manager', 'admin'],
        requiredParams: ['request_type', 'description'],
        optionalParams: ['priority'],
        parameterDefinitions: [
            {
                name: 'request_type',
                type: 'string',
                required: true,
                description: 'Type of guest service',
                allowedValues: ['concierge', 'luggage', 'wake_up_call', 'transportation', 'other'],
            },
            {
                name: 'description',
                type: 'string',
                required: true,
                description: 'Specific details of the guest service required',
            },
            {
                name: 'priority',
                type: 'string',
                required: false,
                description: 'Requested priority',
                allowedValues: ['low', 'medium', 'high'],
            },
        ],
        targetTable: 'x_2120492_athidhi_service_request',
        auditRequired: true,
    },
};

/**
 * Returns action definition or null if not registered
 */
export function getActionDefinition(actionName: string): AIActionDefinition | null {
    if (!actionName || typeof actionName !== 'string') return null;
    return AI_ACTION_REGISTRY[actionName.trim().toLowerCase()] || null;
}

/**
 * Checks whether user role is allowed to execute action
 */
export function isActionAllowedForRole(action: AIActionDefinition, userRole: string): boolean {
    if (!action || !userRole) return false;
    const normRole = userRole.toLowerCase().replace('x_2120492_athidhi.', '');
    return action.allowedRoles.includes(normRole) || normRole === 'admin';
}

/**
 * Validates parameters against action definition
 */
export function validateActionParameters(
    action: AIActionDefinition,
    params: Record<string, any>
): { valid: boolean; error?: string } {
    if (!params || typeof params !== 'object') {
        return { valid: false, error: 'Parameters object is required.' };
    }

    // Check required parameters
    for (const req of action.requiredParams) {
        if (params[req] === undefined || params[req] === null || params[req] === '') {
            return { valid: false, error: 'Missing required parameter: ' + req };
        }
    }

    // Validate parameter definitions & allowed values
    for (const def of action.parameterDefinitions) {
        const val = params[def.name];
        if (val !== undefined && val !== null && val !== '') {
            if (def.allowedValues && def.allowedValues.length > 0) {
                const strVal = String(val).toLowerCase();
                if (!def.allowedValues.includes(strVal)) {
                    return {
                        valid: false,
                        error: 'Parameter "' + def.name + '" has invalid value. Allowed: ' + def.allowedValues.join(', '),
                    };
                }
            }
            if (def.type === 'integer') {
                const num = Number(val);
                if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
                    return { valid: false, error: 'Parameter "' + def.name + '" must be a positive integer.' };
                }
            }
        }
    }

    return { valid: true };
}

/**
 * Generates tool declarations for Gemini REST payload
 */
export function getGeminiToolDeclarations(): any[] {
    const functionDeclarations: any[] = [];

    for (const key of Object.keys(AI_ACTION_REGISTRY)) {
        const action = AI_ACTION_REGISTRY[key];
        const properties: Record<string, any> = {};
        for (const p of action.parameterDefinitions) {
            properties[p.name] = {
                type: p.type === 'integer' ? 'integer' : p.type === 'number' ? 'number' : p.type === 'boolean' ? 'boolean' : 'string',
                description: p.description,
            };
            if (p.allowedValues) {
                properties[p.name].enum = p.allowedValues;
            }
        }

        functionDeclarations.push({
            name: action.name,
            description: action.description,
            parameters: {
                type: 'OBJECT',
                properties: properties,
                required: action.requiredParams,
            },
        });
    }

    return [{ function_declarations: functionDeclarations }];
}

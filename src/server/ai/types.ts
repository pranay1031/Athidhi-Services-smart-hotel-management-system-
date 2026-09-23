/**
 * Phase 5B / 5C / 5D — Athidhi Services AI Type Definitions
 */

export type AIResponseCategory =
    | 'SUCCESS'
    | 'INFORMATION'
    | 'ACTION_REQUIRED'
    | 'UNAUTHORIZED'
    | 'VALIDATION_ERROR'
    | 'UNSUPPORTED_ACTION'
    | 'PROVIDER_ERROR'
    | 'TIMEOUT'
    | 'RATE_LIMITED'
    | 'SYSTEM_ERROR';

export type ActionClassification = 'READ' | 'WRITE';

export interface AIActionParameterDefinition {
    name: string;
    type: 'string' | 'number' | 'boolean' | 'integer';
    required: boolean;
    description: string;
    allowedValues?: string[];
}

export interface AIActionDefinition {
    name: string;
    description: string;
    classification: ActionClassification;
    allowedRoles: string[];
    requiredParams: string[];
    optionalParams?: string[];
    parameterDefinitions: AIActionParameterDefinition[];
    targetTable: string;
    auditRequired: boolean;
}

export interface UserSessionContext {
    userId: string;
    userName: string;
    userEmail: string;
    roles: string[];
    activeRole: string;
    guestSysId?: string;
    guestName?: string;
}

export interface AIGatewayRequest {
    userQuery: string;
    requestCategory?: string;
    clientContext?: Record<string, any>;
    confirmed?: boolean;
    pendingAction?: {
        actionName: string;
        args: Record<string, any>;
    };
}

export interface AIGatewayResponse {
    success: boolean;
    category: AIResponseCategory;
    message: string;
    action?: string;
    data?: any;
    durationMs: number;
    errorCategory?: string;
    requiresConfirmation?: boolean;
    pendingAction?: {
        actionName: string;
        args: Record<string, any>;
    };
}

export interface GeminiFunctionCall {
    name: string;
    args: Record<string, any>;
}

export interface GeminiServiceResponse {
    success: boolean;
    text?: string;
    functionCall?: GeminiFunctionCall;
    rawStatus: number;
    isTimeout: boolean;
    isRateLimited: boolean;
    error?: string;
}

// -------------------------------------------------------------
// Phase 5D: Predictions & Recommendations Interfaces
// -------------------------------------------------------------

export type PredictionType =
    | 'housekeeping_workload'
    | 'service_request_volume'
    | 'maintenance_workload'
    | 'inventory_reorder_risk'
    | 'restaurant_demand'
    | 'other';

export type RecommendationType =
    | 'dining'
    | 'room_service'
    | 'amenity'
    | 'service_catalog'
    | 'housekeeping'
    | 'maintenance'
    | 'inventory_reorder'
    | 'staff_allocation'
    | 'other';

export type PriorityLevel = 'low' | 'medium' | 'high' | 'critical';

export interface AIPredictionItem {
    predictionType: PredictionType;
    prediction: string;
    confidence: number;
    severity: PriorityLevel;
    reasoningSummary: string;
    targetTable?: string;
    targetRecord?: string;
}

export interface AIRecommendationItem {
    audience: 'guest' | 'staff' | 'manager' | 'all';
    recommendationType: RecommendationType;
    recommendation: string;
    rationale: string;
    priority: PriorityLevel;
    targetTable?: string;
    targetRecord?: string;
}

export interface OperationalContextSnapshot {
    timestamp: string;
    occupancy: {
        totalRooms: number;
        availableRooms: number;
        occupiedRooms: number;
        occupancyRatePercent: number;
        todaysArrivals: number;
        todaysDepartures: number;
    };
    housekeeping: {
        totalOccupied: number;
        dirtyRooms: number;
        cleaningInProgress: number;
        pendingInspections: number;
        overdueTasks: number;
        totalOpenTasks: number;
    };
    serviceRequests: {
        newRequests: number;
        inProgressRequests: number;
        overdueRequests: number;
        totalOpen: number;
        byType: Record<string, number>;
        byPriority: Record<string, number>;
    };
    maintenance: {
        openRequests: number;
        urgentOrCritical: number;
        byCategory: Record<string, number>;
        affectedRooms: string[];
    };
    foodAndBeverage: {
        pendingOrders: number;
        ordersToday: number;
        activeMenuItemsCount: number;
    };
    inventory: {
        totalTrackedItems: number;
        lowStockItemsCount: number;
        lowStockItemNames: string[];
        pendingReordersCount: number;
    };
}

export interface GuestContextSnapshot {
    guestSysId: string;
    guestName: string;
    guestEmail: string;
    stay: {
        stayNumber: string;
        roomNumber: string;
        checkIn: string;
        expectedCheckOut: string;
    } | null;
    preferences: Array<{ type: string; value: string }>;
    recentOrders: Array<{ orderNumber: string; status: string; items: string[] }>;
    recentRequests: Array<{ requestNumber: string; type: string; status: string }>;
    availableMenus: Array<{ name: string; category: string; price: number; dietary: string }>;
    serviceCatalog: Array<{ name: string; category: string; price: number }>;
}

export interface AIOperationalInsightsResponse {
    status: 'SUCCESS' | 'INSUFFICIENT_DATA';
    summary: string;
    predictions: AIPredictionItem[];
    recommendations: AIRecommendationItem[];
    criticalObservations: string[];
    generatedAt: string;
    expiresAt: string;
}

export interface AIGuestRecommendationsResponse {
    status: 'SUCCESS' | 'INSUFFICIENT_DATA';
    guestName: string;
    recommendations: AIRecommendationItem[];
    generatedAt: string;
    expiresAt: string;
}

import { IntegrationClient } from './framework/integration_client.ts';
import { IntegrationResponse } from './framework/types';

declare const gs: any;

export interface HotelLocationInfo {
    hotelName: string;
    address: string;
    latitude: number;
    longitude: number;
    placeId: string;
}

export class MapsIntegration {
    private static readonly HOTEL_LOCATION: HotelLocationInfo = {
        hotelName: 'Athidhi Services - Smart Hotel',
        address: '100 Heritage Boulevard, Jubilee Hills, Hyderabad, Telangana 500033',
        latitude: 17.4326,
        longitude: 78.4071,
        placeId: 'ChIJ5bY82N0RzjsR0mN8q7K8jY0',
    };

    /**
     * Get verified hotel coordinates & location safely (no server API key leakage)
     */
    public static getHotelLocation(): HotelLocationInfo {
        return { ...this.HOTEL_LOCATION };
    }

    /**
     * Request directions to/from hotel with strict sensitive data minimization
     */
    public static getDirections(origin: string, destination: string, mode: string = 'driving'): IntegrationResponse {
        // Enforce sensitive data filtering: origin and destination must not contain booking/payment markers
        const forbiddenPatterns = [/booking/i, /reservation/i, /credit[-_]?card/i, /guest[-_]?id/i, /\d{16}/];
        for (const pat of forbiddenPatterns) {
            if (pat.test(origin) || pat.test(destination)) {
                return {
                    success: false,
                    status: 'VALIDATION_ERROR',
                    httpStatus: 400,
                    errorCategory: 'SENSITIVE_DATA_EXCLUDED',
                    errorMessage: 'Origin or destination contains forbidden sensitive records or payment markers.',
                    correlationId: IntegrationClient.generateCorrelationId(),
                    durationMs: 0,
                    retriesAttempted: 0,
                };
            }
        }

        const endpoint = (typeof gs !== 'undefined' && gs.getProperty)
            ? gs.getProperty('x_2120492_athidhi.integration.maps.endpoint', 'https://maps.googleapis.com/maps/api')
            : 'https://maps.googleapis.com/maps/api';

        return IntegrationClient.execute({
            integrationName: 'maps',
            operation: 'get_directions',
            endpoint: endpoint,
            httpMethod: 'GET',
            externalSystem: 'google_maps',
            queryParams: {
                origin: origin,
                destination: destination,
                mode: mode,
            },
            isIdempotent: true,
        });
    }

    /**
     * Retrieve curated nearby attractions
     */
    public static getNearbyAttractions(category?: string): IntegrationResponse {
        const endpoint = (typeof gs !== 'undefined' && gs.getProperty)
            ? gs.getProperty('x_2120492_athidhi.integration.maps.endpoint', 'https://maps.googleapis.com/maps/api')
            : 'https://maps.googleapis.com/maps/api';

        return IntegrationClient.execute({
            integrationName: 'maps',
            operation: 'get_nearby_attractions',
            endpoint: endpoint,
            httpMethod: 'GET',
            externalSystem: 'google_maps',
            queryParams: {
                location: this.HOTEL_LOCATION.latitude + ',' + this.HOTEL_LOCATION.longitude,
                radius: '10000',
                type: category || 'tourist_attraction',
            },
            isIdempotent: true,
        });
    }

    /**
     * Estimate travel distance & duration
     */
    public static estimateDistance(origin: string, destination: string): IntegrationResponse {
        const endpoint = (typeof gs !== 'undefined' && gs.getProperty)
            ? gs.getProperty('x_2120492_athidhi.integration.maps.endpoint', 'https://maps.googleapis.com/maps/api')
            : 'https://maps.googleapis.com/maps/api';

        return IntegrationClient.execute({
            integrationName: 'maps',
            operation: 'distance_matrix',
            endpoint: endpoint,
            httpMethod: 'GET',
            externalSystem: 'google_maps',
            queryParams: {
                origins: origin,
                destinations: destination,
            },
            isIdempotent: true,
        });
    }
}

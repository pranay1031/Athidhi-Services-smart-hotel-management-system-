# Athidhi Services — AI Concierge & Predictive Intelligence

## 1. Overview & Security Architecture

The AI layer is powered by **Google Gemini 2.5 Flash** integrated through a scoped ServiceNow REST Message (`x_2120492_athidhi_gemini_rest_message`). All AI communication adheres to strict enterprise containment:

- **Private Encrypted Credential**: Stored in `x_2120492_athidhi.gemini.api_key` (type: `password`, `isPrivate: true`).
- **Encrypted Header Authentication**: Transmitted strictly via HTTP request header `x-goog-api-key`. Never passed in URL query strings.
- **Deterministic Action Registry**: Zero autonomous database access. 16 explicit allowlisted actions only.
- **Two-Phase Confirmation Gating**: All write actions require explicit guest confirmation.

---

## 2. The 16 Allowlisted Actions

### Read Actions (Immediate Execution)
1. `get_current_guest_stay`: Retrieves active checked-in stay details for authenticated guest.
2. `get_guest_reservations`: Retrieves reservations for authenticated guest.
3. `get_room_information`: Public room type amenities, bed configurations, and capacity.
4. `get_room_availability`: Live availability check for room types.
5. `get_active_menu`: Active restaurant dining menus with authoritative pricing and dietary tags.
6. `get_food_order_status`: Kitchen status of room service food orders.
7. `get_guest_service_requests`: Status of open and completed guest requests.
8. `get_service_catalog`: Browse hotel services catalog.
9. `get_hotel_faq`: Grounded FAQ inquiries regarding hotel amenities, timings, and policies.
10. `get_guest_recommendations`: Personalized stay recommendations (dining, spa, catalog).

### Controlled Write Actions (Requires Two-Phase Confirmation)
11. `create_housekeeping_request`: Creates housekeeping task or supply request.
12. `create_maintenance_request`: Reports room maintenance defect (plumbing, AC, electrical).
13. `create_room_service_request`: Dispatches room service dining order with server-side pricing.
14. `create_guest_service_request`: Requests transport, luggage, or concierge assistance.

### Manager Intelligence Actions (Role Protected: Manager / Admin Only)
15. `get_manager_operational_insights`: Grounded operational intelligence and management recommendations.
16. `get_operational_predictions`: Forecasts housekeeping workload, F&B demand, and inventory reorder risk.

---

## 3. Adversarial & Prompt Injection Defense

The AI Gateway implements multi-layered sanitization against prompt injection, role escalation, and delimiter smuggling:
- 16 verified adversarial attack vectors tested and 100% neutralized.
- Rejection of SQL/GlideRecord patterns (`gr.`, `GlideRecord`, `SELECT`, `DROP TABLE`, `eval()`, `<script>`).
- Server session anti-spoofing guarantees client cannot supply arbitrary `guestSysId`.

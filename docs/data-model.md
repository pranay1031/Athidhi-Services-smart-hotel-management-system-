# Athidhi Services — Data Model Specification

## 1. Entity Architecture Overview

The Athidhi Services Smart Hotel Management System defines **30 scoped application tables** partitioned into 6 operational domains:

| Domain | Table Name | Purpose | Primary Reference Keys |
| :--- | :--- | :--- | :--- |
| **Foundation** | `x_2120492_athidhi_department` | Hotel departments (Front Desk, Housekeeping, etc.) | N/A |
| **Foundation** | `x_2120492_athidhi_staff_profile` | Staff records with department and active role | department -> `_department` |
| **Foundation** | `x_2120492_athidhi_room_type` | Room categories, capacities, bed types, base rates | N/A |
| **Foundation** | `x_2120492_athidhi_room` | Individual rooms with live occupancy & housekeeping status | room_type -> `_room_type` |
| **Foundation** | `x_2120492_athidhi_amenity` | Hotel amenities and facilities | N/A |
| **Foundation** | `x_2120492_athidhi_room_amenity` | Mapping of specific amenities to rooms | room -> `_room`, amenity -> `_amenity` |
| **Guest Ops** | `x_2120492_athidhi_guest` | Guest master profile, loyalty tiers, contact info | N/A |
| **Guest Ops** | `x_2120492_athidhi_guest_preference` | Room, pillow, floor, dietary preferences | guest -> `_guest` |
| **Guest Ops** | `x_2120492_athidhi_reservation` | Booking lifecycle (draft, confirmed, checked_in, etc.) | guest -> `_guest`, room -> `_room` |
| **Guest Ops** | `x_2120492_athidhi_stay` | Active in-house guest stay synchronization | reservation -> `_reservation`, guest, room |
| **Guest Ops** | `x_2120492_athidhi_payment` | **Internal Hotel Folio Ledger** (no external gateway) | reservation -> `_reservation` |
| **Operations** | `x_2120492_athidhi_service_catalog_item` | Catalog of guest services with department routing | department -> `_department` |
| **Operations** | `x_2120492_athidhi_service_request` | Guest-submitted requests (housekeeping, transport) | guest, stay, room |
| **Operations** | `x_2120492_athidhi_service_request_item`| Line items associated with service requests | service_request -> `_service_request` |
| **Operations** | `x_2120492_athidhi_work_task` | Departmental work orders assigned to staff | service_request, assigned_to -> `sys_user`|
| **Operations** | `x_2120492_athidhi_housekeeping_task` | Cleaning and inspection state machine | room -> `_room`, stay -> `_stay` |
| **Operations** | `x_2120492_athidhi_maintenance_request`| Defect management and asset repair lifecycle | room -> `_room`, service_request |
| **Operations** | `x_2120492_athidhi_incident` | Critical operational escalations | service_request, maintenance_request |
| **F&B Dining** | `x_2120492_athidhi_restaurant` | Dining outlets, banquets, and room service | N/A |
| **F&B Dining** | `x_2120492_athidhi_menu` | Menus by meal period (breakfast, lunch, dinner) | restaurant -> `_restaurant` |
| **F&B Dining** | `x_2120492_athidhi_menu_item` | Food items with authoritative prices & dietary tags | menu -> `_menu` |
| **F&B Dining** | `x_2120492_athidhi_food_order` | Kitchen food order dispatch and delivery tracking | guest, stay, room, restaurant |
| **F&B Dining** | `x_2120492_athidhi_food_order_item` | Food order line items with server price enforcement | order -> `_food_order`, menu_item |
| **Inventory** | `x_2120492_athidhi_inventory_item` | Stock items (linens, toiletries, F&B ingredients) | N/A |
| **Inventory** | `x_2120492_athidhi_inventory_transaction` | Stock-in, stock-out, adjustment audit trail | inventory_item -> `_inventory_item` |
| **Inventory** | `x_2120492_athidhi_inventory_reorder` | Automated replenishment requisitions | inventory_item -> `_inventory_item` |
| **AI Layer** | `x_2120492_athidhi_ai_recommendation` | Grounded guest personalized recommendations | guest, stay |
| **AI Layer** | `x_2120492_athidhi_ai_prediction` | Operational forecasts (workload, occupancy, demand) | N/A |
| **AI Layer** | `x_2120492_athidhi_ai_interaction_log`| Comprehensive AI interaction audit log | requesting_user -> `sys_user` |
| **Integration**| `x_2120492_athidhi_integration_log` | External API execution audit trail & correlation log | N/A |

---

## 2. Key Relationship & State Machine Rules

1. **Room State Synchronization**:
   - Check-in transitions room `status: occupied` and `occupancy_status: occupied`.
   - Check-out transitions room `status: cleaning` and `housekeeping_status: dirty`.
   - Housekeeping inspection completion transitions room to `status: available` and `housekeeping_status: clean` ONLY IF `inspection_status: passed` or no inspection is required.
   - A failed inspection strictly keeps room `status: cleaning` and `housekeeping_status: dirty`.
2. **Internal Folio Accounting Ledger**:
   - `x_2120492_athidhi_payment` holds internal settlement records. It contains NO credit card PANs, expiration dates, CVVs, or gateway auth tokens.

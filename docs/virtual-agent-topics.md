# Athidhi Services — Virtual Agent Conversational Architecture & Topic Specifications

## 1. Executive Summary & Instance Capability Assessment
- **Application Scope**: `x_2120492_athidhi`
- **Target Instance**: `dev420430.service-now.com` (Australia Patch 2 / SDK 4.8.1)
- **Plugin Capability Inspection**: The native ServiceNow Virtual Agent plugin (`com.glide.cs.chatbot`) was directly queried on instance `dev420430` via REST Table API and verified to be **INACTIVE** (`glideCsEnabled: null`).
- **Architectural Policy**: In compliance with rigorous engineering standards, Virtual Agent execution is **NOT faked** as active chat. Instead:
  1. The Guest Portal features a native Virtual Agent entry point with graceful fallback to instant, deterministic Service Request creation.
  2. All 16 conversational topics are formally specified below, defining their trigger utterances, user input parameters, Flow Designer subflows, table mutations, and Business Rule integrations.
  3. Once `com.glide.cs.chatbot` is activated on the instance, these topics can be imported directly into ServiceNow Studio / Conversation Builder without modifying application tables or Business Rules.

---

## 2. Topic Architecture Matrix

| # | Topic ID | Topic Name | Category | Primary Target Table | Flow Designer Action |
|---|---|---|---|---|---|
| 1 | `va_guest_checkin_inquiry` | Check-In Status & Digital Key | Front Desk | `x_2120492_athidhi_reservation` | Lookup active reservation & room ready status |
| 2 | `va_guest_checkout_request` | Express Check-Out & Luggage | Front Desk | `x_2120492_athidhi_stay` | Trigger check-out workflow & housekeeping dispatch |
| 3 | `va_room_service_order` | In-Room Dining & Beverage Order | Dining / F&B | `x_2120492_athidhi_food_order` | Create food order line items & dispatch kitchen task |
| 4 | `va_housekeeping_request` | Housekeeping & Extra Linens | Housekeeping | `x_2120492_athidhi_service_request` | Create SR (housekeeping) -> generate Work Task |
| 5 | `va_maintenance_report` | Maintenance & Facility Issue | Maintenance | `x_2120492_athidhi_service_request` | Create SR (maintenance) -> Maintenance Request |
| 6 | `va_amenity_booking` | Spa & Wellness Booking | Concierge | `x_2120492_athidhi_service_request` | Create SR (concierge) for wellness appointment |
| 7 | `va_wake_up_call` | Wake-Up Call Scheduling | Front Desk | `x_2120492_athidhi_service_request` | Schedule automated or staff wake-up call |
| 8 | `va_taxi_transport` | Airport Transfer & Taxi Dispatch | Concierge | `x_2120492_athidhi_service_request` | Dispatch bell desk / transportation ticket |
| 9 | `va_folio_inquiry` | Guest Folio & Balance Breakdown | Billing | `x_2120492_athidhi_folio` | Query itemized ledger; send statement summary |
| 10 | `va_wifi_tech_support` | Wi-Fi & Technical Support | IT / Guest Support | `x_2120492_athidhi_service_request` | Provide guest SSID details or create technician task |
| 11 | `va_hotel_facilities_faq` | Hotel Amenities & Hours FAQ | FAQ / Knowledge | `kb_knowledge` / Static | Return verified operational hours (pool, gym, dining) |
| 12 | `va_lost_and_found` | Lost & Found Property Report | Front Desk | `x_2120492_athidhi_service_request` | Log lost item report & notify housekeeping/security |
| 13 | `va_dining_reservation` | Restaurant Table Reservation | Restaurant | `x_2120492_athidhi_service_request` | Reserve restaurant seating and party details |
| 14 | `va_local_attractions` | Local City Guide & Attractions | Concierge | Knowledge / External | Curated concierge recommendations |
| 15 | `va_feedback_complaint` | Guest Feedback & Escalation | Management | `x_2120492_athidhi_incident` | High-priority issue intake -> trigger critical escalation |
| 16 | `va_connect_to_staff` | Connect to Front Desk Staff | Agent Transfer | `chat_queue` / Human | Human agent handover / front desk phone extension |

---

## 3. Detailed Topic Specifications

### Topic 1: va_guest_checkin_inquiry
- **Trigger Utterances**: "Check in time", "Is my room ready?", "Can I check in now?", "Digital room key", "Check in status"
- **User Inputs**:
  - `reservation_number` (String, Optional if guest session authenticated)
- **Flow Designer Subflow**: `Athidhi - Query Check-In Status`
- **Authoritative Business Rules**: Evaluates `x_2120492_athidhi_room` status for `clean` and `available`.
- **Response**: Confirms room readiness, standard check-in time (14:00), and front desk desk location.

### Topic 2: va_guest_checkout_request
- **Trigger Utterances**: "Check out", "I want to leave", "Express checkout", "Hold my bags", "Late checkout request"
- **User Inputs**:
  - `checkout_time_requested` (Choice: Now, 12:00 PM, 2:00 PM Late Request)
  - `luggage_assistance_needed` (Boolean)
- **Flow Designer Subflow**: `Athidhi - Process Guest Departure`
- **Authoritative Business Rules**: `Athidhi - Process Check-Out` (`br_checkout_stay`) -> sets room to `cleaning` and inserts `x_2120492_athidhi_housekeeping_task`.

### Topic 3: va_room_service_order
- **Trigger Utterances**: "Order food", "Room service menu", "Bring me coffee", "Order breakfast", "Dinner in room"
- **User Inputs**:
  - `menu_category` (Choice: Starters, Mains, Desserts, Beverages)
  - `item_selection` (Reference: `x_2120492_athidhi_menu`)
  - `special_instructions` (String, e.g. "no onions, extra dressing")
- **Flow Designer Subflow**: `Athidhi - Create Food Order`
- **Authoritative Business Rules**: Inserts `x_2120492_athidhi_food_order` -> updates folio ledger line items -> dispatches kitchen display task.

### Topic 4: va_housekeeping_request
- **Trigger Utterances**: "Extra towels", "Clean my room", "New pillows", "Shampoo and soap", "Empty trash"
- **User Inputs**:
  - `service_type` (Choice: Towels, Bedding, Full Clean, Trash Pickup, Toiletries)
  - `urgency` (Choice: Normal, Immediate)
- **Flow Designer Subflow**: `Athidhi - Route Service Request`
- **Authoritative Business Rules**: Inserts `x_2120492_athidhi_service_request` with `request_type=housekeeping` -> `br_service_request_intake` automatically generates `x_2120492_athidhi_work_task` for housekeeping.

### Topic 5: va_maintenance_report
- **Trigger Utterances**: "AC not working", "TV broken", "Shower leaking", "Toilet clogged", "Light bulb out"
- **User Inputs**:
  - `issue_category` (Choice: HVAC/AC, Plumbing, Electrical, Television/AV, Lock/Door)
  - `issue_description` (String)
- **Flow Designer Subflow**: `Athidhi - Route Maintenance Request`
- **Authoritative Business Rules**: Inserts `x_2120492_athidhi_service_request` -> creates linked `x_2120492_athidhi_maintenance_request` -> dispatches maintenance technician task.

### Topic 6: va_amenity_booking
- **Trigger Utterances**: "Book spa", "Reserve massage", "Gym access", "Pool cabana"
- **User Inputs**:
  - `amenity_name` (Choice: Wellness Spa, Sauna, Tennis Court, Pool Cabana)
  - `desired_time` (DateTime)
- **Flow Designer Subflow**: `Athidhi - Route Service Request` (Category: Concierge).

### Topic 7: va_wake_up_call
- **Trigger Utterances**: "Wake up call", "Alarm at 7 AM", "Morning call"
- **User Inputs**:
  - `call_time` (Time)
  - `call_date` (Date)
- **Flow Designer Subflow**: `Athidhi - Schedule Wake Up Call` (Routes to Front Desk queue).

### Topic 8: va_taxi_transport
- **Trigger Utterances**: "Call a cab", "Taxi to airport", "Need a ride", "Car rental"
- **User Inputs**:
  - `destination` (String)
  - `departure_time` (DateTime)
  - `passenger_count` (Integer)
- **Flow Designer Subflow**: `Athidhi - Route Transportation Request`.

### Topic 9: va_folio_inquiry
- **Trigger Utterances**: "What is my balance?", "Check my bill", "Room charges", "Send me receipt"
- **User Inputs**:
  - None (Resolved from active session `x_2120492_athidhi_stay`)
- **Flow Designer Subflow**: `Athidhi - Retrieve Guest Folio Summary`
- **Safety Policy**: Ledger totals and line item names displayed. Card numbers and CVVs are strictly absent.

### Topic 10: va_wifi_tech_support
- **Trigger Utterances**: "WiFi password", "Internet not working", "Connect to WiFi", "Slow internet"
- **User Inputs**:
  - `device_type` (Choice: Phone, Laptop, Tablet, Gaming/Streaming)
- **Flow Designer Subflow**: Returns guest network SSID and authentication instructions; creates IT work task if issue persists.

### Topic 11: va_hotel_facilities_faq
- **Trigger Utterances**: "When is breakfast?", "Pool hours", "Gym location", "Is parking free?", "Check out time"
- **User Inputs**:
  - `facility_query` (Choice: Breakfast, Pool, Fitness Center, Parking, Valet)
- **Flow Designer Subflow**: Returns deterministic operational facts verified against hotel property specifications.

### Topic 12: va_lost_and_found
- **Trigger Utterances**: "Lost my wallet", "Left sunglasses in lobby", "Found an item", "Lost property"
- **User Inputs**:
  - `item_description` (String)
  - `location_last_seen` (String)
  - `contact_phone` (String)
- **Flow Designer Subflow**: Inserts record into `x_2120492_athidhi_service_request` with `request_type=concierge` and notifies Security/Housekeeping.

### Topic 13: va_dining_reservation
- **Trigger Utterances**: "Reserve a table", "Table for 4 at 8pm", "Restaurant booking"
- **User Inputs**:
  - `restaurant_choice` (Choice: Main Dining Room, Terrace Lounge, Private Dining)
  - `party_size` (Integer)
  - `reservation_time` (DateTime)
- **Flow Designer Subflow**: Creates restaurant reservation record and dispatches confirmation notification.

### Topic 14: va_local_attractions
- **Trigger Utterances**: "What to see nearby", "Tourist places", "Best museum", "Shopping mall"
- **User Inputs**:
  - `interest` (Choice: Historical, Shopping, Dining, Nature/Parks)
- **Flow Designer Subflow**: Returns curated concierge spots using verified hotel location knowledge.

### Topic 15: va_feedback_complaint
- **Trigger Utterances**: "I have a complaint", "Unsatisfied with room", "Speak to manager", "Noisy neighbors"
- **User Inputs**:
  - `complaint_severity` (Choice: Minor, Moderate, Critical)
  - `details` (String)
- **Flow Designer Subflow**: `Athidhi - Escalate Service Request` -> If severity is Critical, inserts `x_2120492_athidhi_incident` and triggers `br_incident_escalation` to notify General Manager.

### Topic 16: va_connect_to_staff
- **Trigger Utterances**: "Speak to human", "Real person", "Call front desk", "Operator"
- **User Inputs**:
  - None
- **Flow Designer Subflow**: Connects user to ServiceNow live agent chat queue or displays direct internal telephone extension 0 / Front Desk WhatsApp direct line.

---

## 4. Flow Designer & Business Rule Integration Integrity
1. **Zero Direct Client Database Access**: Virtual Agent topics interact exclusively via Flow Designer subflows executing with elevated system rights.
2. **Business Rules as Supreme Authority**:
   - Creating a Service Request topic automatically triggers `br_service_request_intake` to dispatch `x_2120492_athidhi_work_task`.
   - Resolving maintenance automatically triggers `br_maintenance_resolution` to update room state.
   - Escalating complaints automatically triggers `br_incident_escalation` to notify executive management.
3. **Audit Trail**: Every conversational request outputs an audit event into `x_2120492_athidhi_audit_log`.

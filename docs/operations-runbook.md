# Athidhi Services — Standard Operating Procedures (SOP) & Operations Runbook

## 1. Front Desk Operations

### Guest Check-In Workflow
1. Navigate to **Athidhi Hotel Management > Reservations > Confirmed Reservations**.
2. Locate guest reservation record and open detail view.
3. Verify guest identification details against master guest profile.
4. Click UI Action **Check-In Guest**:
   - System automatically validates room availability.
   - Synchronizes Room `status: occupied` and `occupancy_status: occupied`.
   - Generates authoritative `x_2120492_athidhi_stay` record.
   - Duplicate check-in attempts on active stays are strictly blocked by Business Rules.

### Guest Departure & Check-Out Workflow
1. Open active Stay record in **Stays > Active Stays**.
2. Review linked folio line items in `x_2120492_athidhi_payment`.
3. Click UI Action **Check-Out Guest**:
   - System vacates room and updates `status: cleaning` and `housekeeping_status: dirty`.
   - Closes reservation record (`status: checked_out`).
   - Automatically generates `x_2120492_athidhi_housekeeping_task` with `inspection_required: true`.

---

## 2. Housekeeping & Room Inspection Safety

1. Housekeeping staff view tasks in **Housekeeping > Cleaning Tasks**.
2. Upon room cleaning completion, housekeeper sets `status: completed`.
3. **Safety Barrier**: The room remains `status: cleaning` until an inspector marks `inspection_status: passed`.
4. If an inspection fails, the system marks `status: cleaning` and `housekeeping_status: dirty`. The room can **never** be marked `available` from a failed inspection.

---

## 3. Incident Management & Escalation

1. High-priority maintenance or guest safety issues are logged under **Service Requests**.
2. When a service request priority is escalated to `critical`, Business Rule `handleServiceRequestEscalated` automatically generates an `x_2120492_athidhi_incident` record and dispatches Microsoft Teams and Slack alarms.
3. System duplicate prevention ensures repeated updates to critical service requests do not generate redundant incident records.

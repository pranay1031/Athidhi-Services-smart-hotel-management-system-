# Athidhi Services — End-to-End VIP Guest Journey Demo Script

## Scenario Overview
- **Guest**: Dr. Eleanor Vance (VIP Platinum Tier)
- **Room**: Executive Suite (Room 901)
- **Key Modules**: Reservation -> Receptionist Check-In -> AI Concierge -> Room Service Dining -> Housekeeping -> Maintenance -> Check-Out & Folio Reconciliation.

---

## 10-Step Interactive Demonstration

| Step | Action | Persona | Expected System Behavior |
| :---: | :--- | :--- | :--- |
| **1** | **Reservation Intake** | Guest / Front Desk | Create confirmed reservation for Executive Suite. |
| **2** | **Front Desk Check-In** | Receptionist | Click 'Check-In'. Room transitions to Occupied. Stay record STY000001 created. Collaboration VIP arrival alert posted to Teams. |
| **3** | **AI Concierge Greeting**| Guest (Guest Portal) | Guest opens AI Concierge. System retrieves authenticated stay and greets VIP guest by name. |
| **4** | **Dining Inquiry** | Guest | Guest asks: "What is on the dinner menu tonight?". AI returns active gourmet menu with prices and dietary tags. |
| **5** | **Room Service Order** | Guest | Guest requests Wagyu Ribeye. AI prompts: "Please confirm your order for 1x Wagyu Ribeye ($85.00)". |
| **6** | **Order Confirmation** | Guest | Guest confirms. Food Order FOD000001 dispatched to kitchen. Server-side price enforcement prevents client tampering. |
| **7** | **Housekeeping Request**| Guest | Guest requests extra towels. AI generates controlled service request. Work task routed to Housekeeping board. |
| **8** | **Maintenance Defect** | Guest | Guest reports AC thermostat issue. System auto-generates Maintenance Request and Work Task for engineering. |
| **9** | **Departure & Check-Out**| Receptionist | Receptionist clicks 'Check-Out'. Room transitions to Cleaning/Dirty. Automated inspection task generated. |
| **10**| **Folio Reconciliation**| Receptionist | Review internal folio ledger (`x_2120492_athidhi_payment`). All room and dining line items balanced. Zero external payment gateway dependency. |

# Athidhi Services — Security Architecture & Access Control

## 1. Security Overview

Athidhi Services enforces a **Zero-Trust Security Architecture** across all 30 tables, 16 Business Rules, 1 Script Include, and 5 UI Pages:

- **148 Scoped ACLs**: Explicit table-level and field-level permissions.
- **7-Role Hierarchical RBAC**: Strict separation of duties.
- **Zero Hardcoded Secrets**: All credentials stored in private, encrypted system properties.
- **SSRF Defenses**: Full blocking of internal IP ranges and metadata services.
- **Permanent Payment Exclusion**: Zero credit card fields, banking APIs, or external payment gateways.

---

## 2. 7-Role Application Security Hierarchy

| Role Name | Scope | Operational Responsibilities |
| :--- | :--- | :--- |
| `x_2120492_athidhi.admin` | Application Administrator | Full system configuration, properties, user management, audit review. |
| `x_2120492_athidhi.manager` | General / Duty Manager | Operational dashboards, managerial predictive AI, staff approvals, report export. |
| `x_2120492_athidhi.receptionist` | Front Desk Operations | Guest check-in, check-out, room allocation, stay management, folio ledger. |
| `x_2120492_athidhi.housekeeping` | Housekeeping Staff | Room cleaning tasks, inspection updates, linen replenishment. |
| `x_2120492_athidhi.restaurant` | F&B / Kitchen Staff | Menu management, kitchen preparation, room service dispatch. |
| `x_2120492_athidhi.maintenance` | Maintenance Technicians | Room defect resolution, HVAC calibration, facility repairs. |
| `x_2120492_athidhi.guest` | Registered Hotel Guest | Personal reservations, active stay portal, AI Concierge, room service orders. |

---

## 3. Permanent Payment Processing Exclusion Statement

> **ARCHITECTURAL MANDATE**: Payment gateway integrations (including Razorpay, Stripe, PayPal, Cashfree, Square, UPI, and banking APIs) are **permanently NOT implemented**. 
> 
> The `x_2120492_athidhi_payment` table functions solely as an internal accounting folio ledger record. No cardholder data (PAN, CVV, expiry), banking tokens, or financial payment gateways are integrated, handled, or stored.

# Athidhi Services — Final Live Portal Links & Access Directory

**Instance**: `https://dev420430.service-now.com/`  
**Application Scope**: `x_2120492_athidhi` (sys_id: `e7a62264d7294509b9d652b46d63950e`)  
**Release**: Australia Patch 2  
**Verification Date**: 2026-09-23  
**Overall Status**: **VERIFIED LIVE (HTTP 200)**

---

## 1. Primary Service Portal Architecture (`/athidhi`)

The Service Portal architecture provides unified routing, role awareness, mobile-responsive layout, and embedded notification integration under the single portal record `athidhi` (`sp_portal.sys_id`: `b3e7ae7073ab07505766fda14ab8b79b`).

| Portal / Role | URL | sys_id (`sp_page`) | Allowed Roles | Live HTTP Status | Description |
|---|---|---|---|---|---|
| **Portal Gateway / Home** | `https://dev420430.service-now.com/athidhi` | `71e76e7073ab07505766fda14ab8b718` | `public`, authenticated | `200 OK` | Master entry portal router and quick navigation |
| **Guest Portal** | `https://dev420430.service-now.com/athidhi?id=athidhi_guest` | `aae76e7073ab07505766fda14ab8b77b` | `x_2120492_athidhi.guest`, `admin` | `200 OK` | Guest self-service, dining order, requests, billing summary |
| **Manager Portal** | `https://dev420430.service-now.com/athidhi?id=athidhi_manager` | `2ee76e7073ab07505766fda14ab8b7ff` | `x_2120492_athidhi.manager`, `admin` | `200 OK` | Executive hotel dashboard, 8 KPI cards, AI forecasts |
| **Administrator Portal** | `https://dev420430.service-now.com/athidhi?id=athidhi_admin` | `3ae7ae7073ab07505766fda14ab8b707` | `x_2120492_athidhi.admin`, `admin` | `200 OK` | System properties, audit logs, user management, integrations |
| **Staff Operations Portal** | `https://dev420430.service-now.com/athidhi?id=athidhi_staff` | `d7e7ae7073ab07505766fda14ab8b74d` | `x_2120492_athidhi.staff`, `admin` | `200 OK` | Multi-department work task console, service ticket triaging |
| **Worker Task Board** | `https://dev420430.service-now.com/athidhi?id=athidhi_worker` | `e3e7ae7073ab07505766fda14ab8b755` | `x_2120492_athidhi.worker`, `admin` | `200 OK` | Field execution board for Housekeeping, Kitchen, Maintenance |

---

## 2. Standalone UI Page Endpoints (`sys_ui_page`)

For environments with direct UI Page workflows, workspaces, or iframe embeds, every role portal exists as an authoritative scoped UI Page:

| UI Page Name | Endpoint URL | `sys_id` | Role Access | Live HTTP Status | UI Features Verified |
|---|---|---|---|---|---|
| `guest_portal` | `https://dev420430.service-now.com/x_2120492_athidhi_guest_portal.do` | `5c02ecb073e307505766fda14ab8b7ad` | Guest, Admin | `200 OK` | Clean UI; Old floating AI Concierge removed; Notification Bell integrated |
| `manager_portal` | `https://dev420430.service-now.com/x_2120492_athidhi_manager_portal.do` | `77d7ea7073ab07505766fda14ab8b773` | Manager, Admin | `200 OK` | Executive KPIs, ADR/RevPAR, Occupancy rate, Notification Center |
| `admin_portal` | `https://dev420430.service-now.com/x_2120492_athidhi_admin_portal.do` | `94e72e7073ab07505766fda14ab8b74b` | Admin | `200 OK` | Integration status, security log audit, configuration matrix |
| `staff_portal` | `https://dev420430.service-now.com/x_2120492_athidhi_staff_portal.do` | `24e72e7073ab07505766fda14ab8b74f` | Staff, Admin | `200 OK` | Active dispatch board, SLA counters, room status toggles |
| `worker_portal` | `https://dev420430.service-now.com/x_2120492_athidhi_worker_portal.do` | `b0e72e7073ab07505766fda14ab8b753` | Worker, Admin | `200 OK` | One-touch "Start Task" / "Complete Task", offline queue indicators |
| `manager_dashboard` | `https://dev420430.service-now.com/x_2120492_athidhi_manager_dashboard.do` | `e99f5d38732707505766fda14ab8b7d4` | Manager, Admin | `200 OK` | Operational intelligence, Gemini forecast panel, revenue breakdown |

---

## 3. How to Access and Test

1. **Direct Browser Navigation**:
   - Log into `https://dev420430.service-now.com` with instance credentials (`admin` or impersonating test users).
   - Navigate to any of the links above.
2. **App Navigator Access**:
   - In ServiceNow Filter Navigator, search for `Athidhi Services`.
   - The unified modules point directly to both the Service Portal `/athidhi` and the corresponding role workspaces.
3. **Verification of AI Concierge Replacement**:
   - Navigate to `/athidhi?id=athidhi_guest` or `/x_2120492_athidhi_guest_portal.do`.
   - Observe that the previously reported floating circle button (`#ai-concierge-fab`) has been completely removed.
   - The Athidhi Assistant section now connects directly to the Virtual Agent client with graceful modal fallback.
4. **Verification of Notification Bell**:
   - Open any of the 6 portals or UI pages.
   - Click the Bell icon in the navigation header to view real-time notifications for the active user session.

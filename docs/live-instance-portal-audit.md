# Athidhi Services — Phase 1 Live Instance Portal & Architecture Audit

**Instance:** `https://dev420430.service-now.com/`  
**Application Scope:** `x_2120492_athidhi` (`e7a62264d7294509b9d652b46d63950e`)  
**Audit Timestamp:** 2026-09-23 01:53:02 UTC / 07:23:02 IST  
**Audit Mode:** Live Instance Query via Authenticated Session (Source of Truth)  

---

## 1. Executive Findings: Why Reported Portal URLs Failed

Live manual testing on `https://dev420430.service-now.com/` correctly revealed:
1. `x_2120492_athidhi_guest_portal.do` **opens** (it was installed during Phase 8).
2. `x_2120492_athidhi_manager_portal.do` returned **Page not found**.
3. `x_2120492_athidhi_admin_portal.do` returned **Page not found**.
4. `x_2120492_athidhi_staff_portal.do` returned **Page not found**.
5. `x_2120492_athidhi_worker_portal.do` returned **Page not found**.
6. The Guest Portal still visibly contains the old **"AI Concierge"** floating button.

### Root Cause Analysis
* **Root Cause 1 (Uninstalled Source):** Post-Phase 8 code changes that introduced `manager_portal`, `admin_portal`, `staff_portal`, and `worker_portal` in local source files were never deployed/installed to the remote instance (`dev420430`) because the deployment rule was strictly maintained. Thus, those pages **physically do not exist** in `sys_ui_page` on the instance.
* **Root Cause 2 (Name & Endpoint Discrepancy):** The live instance contains `manager_dashboard` (endpoint: `x_2120492_athidhi_manager_dashboard.do`), `receptionist_workspace`, `kitchen_workspace`, and `housekeeping_workspace`. Attempting to access `manager_portal.do` failed because the installed page was named `manager_dashboard.do`.
* **Root Cause 3 (Service Portal vs UI Page):** There were **zero (0)** Service Portal (`sp_portal`), `sp_page`, or `sp_widget` records created for Athidhi on the instance. The entire UI was implemented exclusively as legacy UI Pages (`sys_ui_page`).
* **Root Cause 4 (Guest Portal UI Drift):** The live `guest_portal` record on `dev420430` is the Phase 8 version containing the floating Gemini Concierge launcher. The code that removed it was only compiled locally.

---

## 2. Live Metadata Inventory Table

| Portal / Page Name | Record sys_id | Record Type | Scope / Application | Live URL / Endpoint | Active | Accessible | Role Restriction | Status / Reason |
|---|---|---|---|---|---|---|---|---|
| **guest_portal** | `6361090db5d54f029c91f5e2f28231d7` | `sys_ui_page` | `x_2120492_athidhi` | `x_2120492_athidhi_guest_portal.do` | Yes | **YES** | `guest`, `admin` | **LIVE**: Opens, but contains old AI Concierge floating launcher. |
| **manager_dashboard** | `664cc400babe440598afa8a1ae96bedc` | `sys_ui_page` | `x_2120492_athidhi` | `x_2120492_athidhi_manager_dashboard.do` | Yes | **YES** | `manager`, `admin` | **LIVE**: Working endpoint on instance. |
| **receptionist_workspace** | `d3bfd69ee839453588edba0260257086` | `sys_ui_page` | `x_2120492_athidhi` | `x_2120492_athidhi_receptionist_workspace.do` | Yes | **YES** | `receptionist`, `admin` | **LIVE**: Working endpoint on instance. |
| **kitchen_workspace** | `6fbd05b5547a49e7ad1817ffca12dc31` | `sys_ui_page` | `x_2120492_athidhi` | `x_2120492_athidhi_kitchen_workspace.do` | Yes | **YES** | `restaurant`, `admin` | **LIVE**: Working endpoint on instance. |
| **housekeeping_workspace** | `ce0d9423d5874a71b7fd93bf4098a099` | `sys_ui_page` | `x_2120492_athidhi` | `x_2120492_athidhi_housekeeping_workspace.do` | Yes | **YES** | `housekeeping`, `admin` | **LIVE**: Working endpoint on instance. |
| **manager_portal** | *None* | `sys_ui_page` | `x_2120492_athidhi` | `x_2120492_athidhi_manager_portal.do` | No | **NO** | `manager`, `admin` | **MISSING ON INSTANCE**: Returns Page Not Found. Target was `manager_dashboard.do`. |
| **admin_portal** | *None* | `sys_ui_page` | `x_2120492_athidhi` | `x_2120492_athidhi_admin_portal.do` | No | **NO** | `admin` | **MISSING ON INSTANCE**: Returns Page Not Found. Never installed to remote. |
| **staff_portal** | *None* | `sys_ui_page` | `x_2120492_athidhi` | `x_2120492_athidhi_staff_portal.do` | No | **NO** | `receptionist`, `restaurant` | **MISSING ON INSTANCE**: Returns Page Not Found. Never installed to remote. |
| **worker_portal** | *None* | `sys_ui_page` | `x_2120492_athidhi` | `x_2120492_athidhi_worker_portal.do` | No | **NO** | `housekeeping`, `maintenance` | **MISSING ON INSTANCE**: Returns Page Not Found. Never installed to remote. |
| **Service Portal (`/athidhi`)** | *None* | `sp_portal` | `x_2120492_athidhi` | `/athidhi` | No | **NO** | Public / All Roles | **MISSING ON INSTANCE**: Zero `sp_portal` records exist. |

---

## 3. Platform Capabilities & Plugin Status on `dev420430`

| Capability / Subsystem | ServiceNow Plugin ID | Live Status on dev420430 | Impact & Guidance |
|---|---|---|---|
| **Service Portal Core** | `com.glide.service-portal` | **ACTIVE** | Native Service Portal architecture (`sp_portal`, `sp_page`, `sp_widget`) is supported and can be created. |
| **Service Graph Mobile Engine** | `com.glide.sg` | **ACTIVE** | Core Service Graph mobile metadata engine is active. |
| **Mobile Platform Core** | `com.glide.mobile-platform` | **INACTIVE** | Mobile platform base plugin is not active. |
| **Mobile Studio** | `com.glide.hub.mobile_studio` | **INACTIVE** | Mobile Studio hub is not active. |
| **Mobile App Builder (MAB)** | `com.sn_mab` | **INACTIVE** | Mobile App Builder store application is not installed. |
| **Glide Virtual Agent** | `com.glide.cs.chatbot` | **INACTIVE** | Virtual Agent chatbot engine is not installed. Fallback deterministic routing required. |

---

## 4. Live Scoped Core Inventory on `dev420430`

* **Scoped Application Tables (`sys_db_object`):** 30 tables active on instance.
* **Active Business Rules (`sys_script`):** 16 active on instance.
* **Installed Script Includes (`sys_script_include`):** 1 (`x_2120492_athidhi.AIConciergeAjax`).
* **Application Navigator Modules (`sys_app_module`):** 55 modules active.
* **Users with Athidhi Roles (`sys_user_has_role`):** 6 role assignments to `System Administrator` (`admin`, `manager`, `receptionist`, `housekeeping`, `restaurant`, `maintenance`).
* **Dedicated Athidhi Groups (`sys_user_group`):** 0 custom Athidhi groups.
* **Flows / Hub Flows (`sys_hub_flow`):** 0 custom scoped hub flows.

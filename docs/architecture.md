# Athidhi Services — Architecture Specification

## 1. System Overview & Scope

The **Athidhi Services Smart Hotel Management System** (`x_2120492_athidhi`) is an enterprise-grade hospitality operations and guest experience platform built natively on the **ServiceNow Australia Patch 2** release using ServiceNow SDK 4.8.1. It unifies front-desk operations, guest reservation management, multi-department task dispatch (housekeeping, dining, maintenance, incident management), internal folio accounting, secure Google Gemini Generative AI, and enterprise integrations into a zero-trust architecture.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                   CLIENT TIER                                            │
│   ┌─────────────────────┐   ┌────────────────────────┐   ┌───────────────────────────┐   │
│   │ Guest Portal UI     │   │ Staff Operations Portal│   │ Management Dashboard      │   │
│   │ (AI Concierge Chat) │   │ (Front Desk Operations)│   │ (KPI & Analytics Hub)     │   │
│   └──────────┬──────────┘   └───────────┬────────────┘   └─────────────┬─────────────┘   │
└──────────────┼──────────────────────────┼──────────────────────────────┼─────────────────┘
               │ (GlideAjax /             │ (Form / List Views /         │ (Scoped UI Pages/
               │  AIConciergeAjax)        │  UI Actions)                 │  GlideRecord API)
┌──────────────▼──────────────────────────▼──────────────────────────────▼─────────────────┐
│                           SERVICENOW SCOPED SERVER APPLICATION                           │
│   Application Scope: x_2120492_athidhi  |  App SysID: e7a62264d7294509b9d652b46d63950e   │
│                                                                                          │
│   ┌──────────────────────────────────────────────────────────────────────────────────┐   │
│   │                       ACCESS CONTROL LAYER (148 Scoped ACLs)                     │   │
│   │       Roles: Admin | Manager | Receptionist | Housekeeping | Restaurant |        │   │
│   │              Maintenance | Guest                                                 │   │
│   └────────────────────────────────────────┬─────────────────────────────────────────┘   │
│                                            │                                             │
│   ┌────────────────────────────────────────▼─────────────────────────────────────────┐   │
│   │                     SECURE AI GATEWAY & ACTION REGISTRY                          │   │
│   │   • 16 Explicit Allowlisted Actions        • 2-Phase Confirmation Gating         │   │
│   │   • Server Session Anti-Spoofing           • 16-Vector Adversarial Defense       │   │
│   │   • Predictive Engine (Occupancy, Demand)  • Audit Logger (0 Credentials)        │   │
│   └────────────────────────────────────────┬─────────────────────────────────────────┘   │
│                                            │                                             │
│   ┌────────────────────────────────────────▼─────────────────────────────────────────┐   │
│   │                    BUSINESS RULE ENGINE (16 Authoritative BRs)                   │   │
│   │   • Check-In Stay Generation               • Inspection Safety Barrier           │   │
│   │   • Authoritative F&B Price Enforcement    • Non-Negative Inventory Ledger       │   │
│   │   • Critical Incident Escalation           • Task Department Routing             │   │
│   └────────────────────────────────────────┬─────────────────────────────────────────┘   │
│                                            │                                             │
│   ┌────────────────────────────────────────▼─────────────────────────────────────────┐   │
│   │                 DATA PERSISTENCE LAYER (30 Scoped Tables)                        │   │
│   │   • Foundation: Department, Staff, Room Type, Room, Amenity, Room Amenity        │   │
│   │   • Guest Operations: Guest, Preference, Reservation, Stay, Folio Payment        │   │
│   │   • Operational Tasks: Service Request, Item, Work Task, Maintenance, Incident   │   │
│   │   • Dining & Inventory: Restaurant, Menu, Item, Food Order, Item, Inv Item/Tx/Re │   │
│   │   • AI & Integrations: Recommendation, Prediction, AI Interaction, Int Log       │   │
│   └────────────────────────────────────────┬─────────────────────────────────────────┘   │
│                                            │                                             │
│   ┌────────────────────────────────────────▼─────────────────────────────────────────┐   │
│   │               EXTERNAL INTEGRATION ENGINE (IntegrationClient)                    │   │
│   │   • SSRF Protection & Domain Allowlist     • Recursive Token Redaction           │   │
│   │   • Multi-Channel Comms (Email/SMS/WA)     • Calendar Synchronization (.ics)     │   │
│   │   • Maps (Zero PII Routing)                • Teams & Slack Operational Alerts    │   │
│   │   • Workspace Document Reporting           • Deduplication & Circuit-Breakers    │   │
│   └────────────────────────────────────────┬─────────────────────────────────────────┘   │
└────────────────────────────────────────────┼─────────────────────────────────────────────┘
                                             │ Outbound HTTPS (Encrypted Header Auth)
┌────────────────────────────────────────────▼─────────────────────────────────────────────┐
│                                   EXTERNAL CLOUD SERVICES                                │
│   ┌──────────────────────┐  ┌───────────────────────┐  ┌─────────────────────────────┐   │
│   │ Google Gemini 2.5    │  │ SendGrid / Twilio /   │  │ Microsoft Teams / Slack /   │   │
│   │ Generative Language  │  │ Meta WhatsApp APIs    │  │ Google Calendar / Maps      │   │
│   └──────────────────────┘  └───────────────────────┘  └─────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Core Architectural Principles

1. **Zero-Trust Identity & Anti-Spoofing**: All guest identity, stay context, and operational permissions are derived strictly on the server tier using `gs.getUserID()` and session role checks. Client requests cannot supply arbitrary guest IDs.
2. **Deterministic Action Allowlisting**: AI cannot query arbitrary tables or run arbitrary JavaScript. Gemini triggers only 16 strictly validated actions in the Action Registry.
3. **Two-Phase Confirmation Gating**: State-mutating write actions (room service orders, housekeeping requests, maintenance tickets) require explicit user confirmation before database commit.
4. **Authoritative Server-Side Pricing**: Menu prices and stay charges are enforced by database records and Business Rules. Client-supplied prices are strictly discarded.
5. **SSRF & Egress Protection**: Outbound integrations block loopback, RFC 1918 private subnets, AWS metadata endpoints, and non-allowlisted domains.
6. **Permanent Payment Exclusion**: External payment gateways (Razorpay, Stripe, PayPal, UPI) are permanently excluded. `x_2120492_athidhi_payment` acts strictly as an internal folio ledger.

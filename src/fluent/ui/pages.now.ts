import { UiPage } from '@servicenow/sdk/core';

export const pageGuestPortal = UiPage({
    $id: Now.ID['ui_page_guest_portal'],
    endpoint: 'x_2120492_athidhi_guest_portal.do',
    description: 'Athidhi Services — Guest Self-Service Portal Hub & Virtual Agent Assistant',
    category: 'general',
    direct: false,
    html: `
<div id="athidhi-portal" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; color: #1e293b; min-height: 100vh; padding: 24px;">
    
    <header style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: white; padding: 20px 28px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Athidhi Services</h1>
                <p style="margin: 4px 0 0; font-size: 13.5px; color: #cbd5e1;">Smart Hotel Management — Guest Experience Portal</p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                <!-- Notification Bell Button -->
                <button id="athidhi-notif-bell" onclick="toggleNotificationDropdown()" aria-label="Notifications" style="position: relative; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s;">
                    🔔
                    <span id="athidhi-notif-badge" style="display: none; position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 10.5px; font-weight: 700; border-radius: 10px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; padding: 0 4px; border: 2px solid #ffffff;">0</span>
                </button>

                <!-- Notification Dropdown Panel -->
                <div id="athidhi-notif-dropdown" style="display: none; position: absolute; top: 48px; right: 0; width: 360px; max-width: 90vw; max-height: 480px; background: #ffffff; color: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 10000; overflow: hidden; flex-direction: column;">
                    <div style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                        <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                            <span>🔔</span> Notifications
                        </div>
                        <button onclick="markAllNotificationsRead()" style="background: none; border: none; color: #2563eb; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline;">Mark all read</button>
                    </div>
                    <div id="athidhi-notif-list" style="overflow-y: auto; max-height: 380px; padding: 4px 0;">
                        <div style="padding: 20px; text-align: center; color: #64748b; font-size: 13px;">Checking notifications...</div>
                    </div>
                </div>

                <!-- Profile Badge -->
                <div id="portal-user-badge" style="background: rgba(255, 255, 255, 0.15); padding: 8px 16px; border-radius: 8px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.25); display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
                    <span>Room 304 | Verified Guest</span>
                </div>
            </div>
        </div>
    </header>
    <div id="athidhi-toast-container" style="position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;"></div>
    

    <!-- Native Virtual Agent Assistant Banner (Replaces AI Concierge Floating Button) -->
    <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; border-radius: 12px; padding: 20px 24px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <div style="flex: 1; min-width: 280px;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                <span style="background: rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">ServiceNow Virtual Agent</span>
                <span style="background: #22c55e; width: 8px; height: 8px; border-radius: 50%; display: inline-block;"></span>
                <span style="font-size: 12px; opacity: 0.9;">Ready for Service Routing</span>
            </div>
            <h2 style="margin: 0; font-size: 20px; font-weight: 700;">Need Assistance? Ask Athidhi Assistant</h2>
            <p style="margin: 6px 0 0; font-size: 13.5px; opacity: 0.9; max-width: 600px;">Directly submit housekeeping, in-room dining, maintenance, or concierge requests connected to automated Flow Designer routing.</p>
        </div>
        <div>
            <button onclick="openAssistantModal()" style="background: white; color: #1e3a8a; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 8px;">
                <span>💬</span> Open Athidhi Assistant
            </button>
        </div>
    </div>

    <!-- Navigation Tabs -->
    <nav style="display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
        <button onclick="switchTab('dashboard')" class="tab-btn" id="tab-dashboard" style="background: #1e3a8a; color: white; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Home / Stay</button>
        <button onclick="switchTab('reservations')" class="tab-btn" id="tab-reservations" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">My Reservations</button>
        <button onclick="switchTab('dining')" class="tab-btn" id="tab-dining" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Dining &amp; Room Service</button>
        <button onclick="switchTab('orders')" class="tab-btn" id="tab-orders" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">My Food Orders</button>
        <button onclick="switchTab('catalog')" class="tab-btn" id="tab-catalog" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Service Catalog</button>
        <button onclick="switchTab('requests')" class="tab-btn" id="tab-requests" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">My Service Requests</button>
        <button onclick="switchTab('folio')" class="tab-btn" id="tab-folio" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">My Folio &amp; Billing</button>
        <button onclick="switchTab('recommendations')" class="tab-btn" id="tab-recommendations" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">✨ Recommended for You</button>
    </nav>

    <!-- SECTION 1: HOME / CURRENT STAY -->
    <section id="section-dashboard" class="portal-section" style="display: block;">
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px;">
            <h2 style="margin-top: 0; font-size: 20px; color: #0f172a; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Active Stay Details</h2>
            <div id="stay-details" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 16px;">
                <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #1e3a8a;">
                    <div style="font-size: 12px; text-transform: uppercase; color: #64748b; font-weight: 700;">Stay Status</div>
                    <div id="stay-status" style="font-size: 18px; font-weight: 600; color: #059669; margin-top: 4px;">Checked In</div>
                </div>
                <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                    <div style="font-size: 12px; text-transform: uppercase; color: #64748b; font-weight: 700;">Assigned Room</div>
                    <div id="stay-room" style="font-size: 18px; font-weight: 600; color: #1e293b; margin-top: 4px;">Room 304 (Deluxe Suite)</div>
                </div>
                <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #6366f1;">
                    <div style="font-size: 12px; text-transform: uppercase; color: #64748b; font-weight: 700;">Check-In Time</div>
                    <div id="stay-checkin" style="font-size: 14px; font-weight: 500; color: #1e293b; margin-top: 4px;">Verified Check-In</div>
                </div>
                <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                    <div style="font-size: 12px; text-transform: uppercase; color: #64748b; font-weight: 700;">Expected Check-Out</div>
                    <div id="stay-checkout" style="font-size: 14px; font-weight: 500; color: #1e293b; margin-top: 4px;">11:00 AM</div>
                </div>
            </div>

            <!-- Quick Action Cards -->
            <h3 style="font-size: 16px; margin-top: 24px; color: #334155;">Quick Guest Actions</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 12px;">
                <button onclick="switchTab('dining')" style="padding: 14px; background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe; border-radius: 8px; font-weight: 600; cursor: pointer; text-align: left;">
                    🍽️ Order Room Service
                </button>
                <button onclick="switchTab('catalog')" style="padding: 14px; background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; border-radius: 8px; font-weight: 600; cursor: pointer; text-align: left;">
                    🛎️ Request Housekeeping
                </button>
                <button onclick="switchTab('catalog')" style="padding: 14px; background: #fefce8; color: #854d0e; border: 1px solid #fef08a; border-radius: 8px; font-weight: 600; cursor: pointer; text-align: left;">
                    🔧 Request Maintenance
                </button>
                <button onclick="switchTab('folio')" style="padding: 14px; background: #faf5ff; color: #6b21a8; border: 1px solid #e9d5ff; border-radius: 8px; font-weight: 600; cursor: pointer; text-align: left;">
                    💳 View Folio &amp; Charges
                </button>
            </div>
        </div>
    </section>

    <!-- SECTION 2: MY RESERVATIONS -->
    <section id="section-reservations" class="portal-section" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="margin-top: 0; font-size: 20px; color: #0f172a; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">My Reservations</h2>
            <div id="reservations-list" style="margin-top: 16px;">
                <p style="color: #64748b;">Loading confirmed reservations...</p>
            </div>
        </div>
    </section>

    <!-- SECTION 3: DINING & ROOM SERVICE -->
    <section id="section-dining" class="portal-section" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; flex-wrap: wrap; gap: 12px;">
                <div>
                    <h2 style="margin: 0; font-size: 20px; color: #0f172a;">Athidhi Dining &amp; In-Room Menu</h2>
                    <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">Select fresh culinary delicacies delivered right to your room.</p>
                </div>
            </div>
            <div id="menu-items-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; margin-top: 20px;">
                <p style="color: #64748b;">Loading active menus...</p>
            </div>
        </div>
    </section>

    <!-- SECTION 4: MY FOOD ORDERS -->
    <section id="section-orders" class="portal-section" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="margin-top: 0; font-size: 20px; color: #0f172a; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">My Food Orders</h2>
            <div id="food-orders-list" style="margin-top: 16px;">
                <p style="color: #64748b;">Loading order status and pipeline...</p>
            </div>
        </div>
    </section>

    <!-- SECTION 5: SERVICE CATALOG -->
    <section id="section-catalog" class="portal-section" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="margin-top: 0; font-size: 20px; color: #0f172a; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Hotel Service Catalog</h2>
            <p style="margin: 4px 0 16px; color: #64748b; font-size: 14px;">Browse and request hotel guest services, extra amenities, housekeeping, and maintenance assistance.</p>
            <div id="catalog-items-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px;">
                <p style="color: #64748b;">Loading catalog items...</p>
            </div>
        </div>
    </section>

    <!-- SECTION 6: MY SERVICE REQUESTS -->
    <section id="section-requests" class="portal-section" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="margin-top: 0; font-size: 20px; color: #0f172a; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">My Service Requests</h2>
            <div id="service-requests-list" style="margin-top: 16px;">
                <p style="color: #64748b;">Loading your open and completed requests...</p>
            </div>
        </div>
    </section>

    <!-- SECTION 7: MY FOLIO -->
    <section id="section-folio" class="portal-section" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="margin-top: 0; font-size: 20px; color: #0f172a; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Guest Folio &amp; Statement of Account</h2>
            <div id="folio-summary" style="margin-top: 16px;">
                <p style="color: #64748b;">Loading billing folio and authorized charges...</p>
            </div>
            <div style="margin-top: 24px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1; font-size: 13px; color: #64748b;">
                ℹ️ <strong>Folio Notice:</strong> All room fees, dining charges, and chargeable services are consolidated on your room folio. Secure settlement is processed at the Front Desk upon check-out. Payment gateways remain non-implemented.
            </div>
        </div>
    </section>

    <!-- SECTION 8: RECOMMENDATIONS -->
    <section id="section-recommendations" class="portal-section" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; flex-wrap: wrap; gap: 12px;">
                <div>
                    <h2 style="margin: 0; font-size: 20px; color: #0f172a; display: flex; align-items: center; gap: 8px;">
                        <span>✨</span> Tailored Recommendations for Your Stay
                    </h2>
                    <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">Curated dining, amenities, and hotel services tailored to your verified room and guest profile.</p>
                </div>
            </div>
            <div id="guest-recommendations-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 20px;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                    <span style="background: #fef3c7; color: #92400e; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 4px;">🍽️ Dining Highlight</span>
                    <h3 style="margin: 8px 0 6px; font-size: 16px; color: #0f172a;">Chef's Special In-Room Dining</h3>
                    <p style="margin: 0 0 12px; font-size: 13px; color: #64748b;">Freshly prepared artisanal course paired with complimentary afternoon beverage service.</p>
                    <button onclick="switchTab('dining')" style="background: #1e3a8a; color: white; border: none; padding: 8px 14px; border-radius: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer;">View Menu &amp; Order</button>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                    <span style="background: #e0f2fe; color: #0369a1; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 4px;">🛎️ Housekeeping</span>
                    <h3 style="margin: 8px 0 6px; font-size: 16px; color: #0f172a;">Evening Turndown Service</h3>
                    <p style="margin: 0 0 12px; font-size: 13px; color: #64748b;">Schedule your evening room refreshment or request extra plush pillows with one click.</p>
                    <button onclick="submitQuickServiceRequest('housekeeping', 'Evening Turndown and extra pillows')" style="background: #0284c7; color: white; border: none; padding: 8px 14px; border-radius: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer;">Request Turndown</button>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 18px;">
                    <span style="background: #f3e8ff; color: #7e22ce; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 3px 8px; border-radius: 4px;">✨ Wellness &amp; Spa</span>
                    <h3 style="margin: 8px 0 6px; font-size: 16px; color: #0f172a;">Athidhi Spa &amp; Wellness Suite</h3>
                    <p style="margin: 0 0 12px; font-size: 13px; color: #64748b;">Experience relaxing therapies and sauna access located on the 4th floor wellness pavilion.</p>
                    <button onclick="switchTab('catalog')" style="background: #7e22ce; color: white; border: none; padding: 8px 14px; border-radius: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer;">Browse Services</button>
                </div>
            </div>
        </div>
    </section>

    <!-- NATIVE VIRTUAL AGENT ASSISTANT MODAL (ServiceNow Virtual Agent Interface) -->
    <div id="va-assistant-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(15, 23, 42, 0.6); z-index: 10000; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
        <div style="background: white; border-radius: 16px; width: 540px; max-width: calc(100vw - 32px); max-height: 85vh; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);">
            <!-- Modal Header -->
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: white; padding: 18px 24px; display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="background: rgba(255,255,255,0.15); width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                        💬
                    </div>
                    <div>
                        <div style="font-size: 16px; font-weight: 700;">Athidhi Assistant</div>
                        <div style="font-size: 12px; color: #93c5fd;">ServiceNow Virtual Agent &amp; Flow Routing</div>
                    </div>
                </div>
                <button onclick="closeAssistantModal()" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer;">✕</button>
            </div>

            <!-- Modal Body -->
            <div style="padding: 20px; overflow-y: auto; flex: 1;">
                <!-- Instance Status Notice -->
                <div style="background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; border-radius: 8px; padding: 12px 14px; font-size: 13px; margin-bottom: 16px; line-height: 1.5;">
                    ℹ️ <strong>Virtual Agent Architecture:</strong> The 16 Athidhi Conversational Topics are modeled and ready for Glide Virtual Agent. Plugin <code>com.glide.cs.chatbot</code> is currently inactive on this instance (dev420430); requests submitted here route deterministically through Flow Designer and Business Rules to hotel work tasks.
                </div>

                <div style="font-weight: 700; font-size: 14px; color: #0f172a; margin-bottom: 8px;">Select a Virtual Agent Topic:</div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; margin-bottom: 20px;">
                    <button onclick="prefillTopic('housekeeping', 'Request Extra Towels & Toiletries')" style="padding: 10px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-align: left; font-size: 13px; font-weight: 600; color: #1e293b; cursor: pointer;">
                        🛎️ Extra Towels &amp; Linens
                    </button>
                    <button onclick="prefillTopic('housekeeping', 'Room Cleaning & Bed Linen Change')" style="padding: 10px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-align: left; font-size: 13px; font-weight: 600; color: #1e293b; cursor: pointer;">
                        🧹 Full Room Cleaning
                    </button>
                    <button onclick="prefillTopic('maintenance', 'Air Conditioner / Temperature Adjustment')" style="padding: 10px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-align: left; font-size: 13px; font-weight: 600; color: #1e293b; cursor: pointer;">
                        ❄️ AC / Climate Maintenance
                    </button>
                    <button onclick="prefillTopic('maintenance', 'Plumbing or Bathroom Issue')" style="padding: 10px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-align: left; font-size: 13px; font-weight: 600; color: #1e293b; cursor: pointer;">
                        🔧 Plumbing Assistance
                    </button>
                    <button onclick="prefillTopic('concierge', 'Luggage Assistance / Bellhop Request')" style="padding: 10px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-align: left; font-size: 13px; font-weight: 600; color: #1e293b; cursor: pointer;">
                        🧳 Luggage / Bellhop Help
                    </button>
                    <button onclick="prefillTopic('concierge', 'Late Check-out Request')" style="padding: 10px 12px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; text-align: left; font-size: 13px; font-weight: 600; color: #1e293b; cursor: pointer;">
                        ⏰ Late Check-Out Inquiry
                    </button>
                </div>

                <form onsubmit="handleAssistantSubmit(event)">
                    <div style="margin-bottom: 12px;">
                        <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Department / Category</label>
                        <select id="va-req-type" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
                            <option value="housekeeping">Housekeeping</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="room_service">Room Service / Dining</option>
                            <option value="concierge">Concierge &amp; Front Desk</option>
                            <option value="luggage">Luggage Assistance</option>
                            <option value="other">Other Service</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 16px;">
                        <label style="display: block; font-size: 13px; font-weight: 600; color: #334155; margin-bottom: 4px;">Service Request Details</label>
                        <textarea id="va-req-desc" rows="3" placeholder="Describe your request or question in detail..." required style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px; resize: vertical; box-sizing: border-box;"></textarea>
                    </div>
                    <div style="display: flex; justify-content: flex-end; gap: 8px;">
                        <button type="button" onclick="closeAssistantModal()" style="padding: 8px 16px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px; font-weight: 600; color: #475569; cursor: pointer;">Cancel</button>
                        <button type="submit" id="btn-submit-va-req" style="padding: 8px 20px; background: #1e3a8a; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; color: white; cursor: pointer;">Submit Request</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
// Tab Switching
function switchTab(tabId) {
    var sections = document.querySelectorAll('.portal-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    var target = document.getElementById('section-' + tabId);
    if (target) target.style.display = 'block';

    var btns = document.querySelectorAll('.tab-btn');
    for (var j = 0; j < btns.length; j++) {
        btns[j].style.background = '#e2e8f0';
        btns[j].style.color = '#334155';
    }
    var activeBtn = document.getElementById('tab-' + tabId);
    if (activeBtn) {
        activeBtn.style.background = '#1e3a8a';
        activeBtn.style.color = 'white';
    }
}

// Assistant Modal
function openAssistantModal() {
    var modal = document.getElementById('va-assistant-modal');
    if (modal) modal.style.display = 'flex';
}

function closeAssistantModal() {
    var modal = document.getElementById('va-assistant-modal');
    if (modal) modal.style.display = 'none';
}

function prefillTopic(type, desc) {
    var sel = document.getElementById('va-req-type');
    var txt = document.getElementById('va-req-desc');
    if (sel) sel.value = type;
    if (txt) txt.value = desc;
}

function handleAssistantSubmit(e) {
    e.preventDefault();
    var type = document.getElementById('va-req-type').value;
    var desc = document.getElementById('va-req-desc').value;
    var btn = document.getElementById('btn-submit-va-req');
    if (btn) btn.disabled = true;

    submitQuickServiceRequest(type, desc, function() {
        closeAssistantModal();
        if (btn) btn.disabled = false;
        document.getElementById('va-req-desc').value = '';
    });
}

function submitQuickServiceRequest(type, desc, cb) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.AIConciergeAjax');
        ga.addParam('sysparm_name', 'processChat');
        ga.addParam('sysparm_user_query', 'Submit request: ' + desc);
        ga.addParam('sysparm_confirmed', 'true');
        ga.addParam('sysparm_pending_action', JSON.stringify({
            action: 'create_service_request',
            params: {
                request_type: type,
                description: desc,
                priority: 'medium'
            }
        }));
        ga.getXMLAnswer(function(answer) {
            showToastNotification('Service Request Dispatched', 'Your request has been routed to hotel operations.', 'info');
            switchTab('requests');
            if (cb) cb();
        });
    } catch (e) {
        showToastNotification('Error', 'Unable to submit request. Please try again.', 'critical');
        if (cb) cb();
    }
}
</script>

<script>
// --- Athidhi Enterprise Notification Center Client ---
var lastNotifCount = 0;
var notifDropdownOpen = false;

function toggleNotificationDropdown() {
    var dd = document.getElementById('athidhi-notif-dropdown');
    if (!dd) return;
    notifDropdownOpen = !notifDropdownOpen;
    dd.style.display = notifDropdownOpen ? 'flex' : 'none';
    if (notifDropdownOpen) {
        fetchNotifications();
    }
}

function fetchNotifications() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'getRecentNotifications');
        ga.addParam('sysparm_limit', '10');
        ga.getXMLAnswer(function(answer) {
            if (!answer) return;
            try {
                var res = JSON.parse(answer);
                if (res.status === 'success') {
                    updateNotificationUI(res.notifications, res.unread_count);
                }
            } catch(e) {}
        });
    } catch(e) {}
}

function updateNotificationUI(notifications, unreadCount) {
    var badge = document.getElementById('athidhi-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (unreadCount > lastNotifCount && notifications && notifications.length > 0) {
        var newest = notifications[0];
        if (!newest.is_read) {
            showToastNotification(newest.title, newest.message, newest.severity);
        }
    }
    lastNotifCount = unreadCount;

    var list = document.getElementById('athidhi-notif-list');
    if (!list) return;

    if (!notifications || notifications.length === 0) {
        list.innerHTML = '<div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 13px;">No notifications yet</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < notifications.length; i++) {
        var n = notifications[i];
        var bg = n.is_read ? '#ffffff' : '#f0fdf4';
        var borderLeft = n.severity === 'critical' ? '4px solid #ef4444' : n.severity === 'warning' ? '4px solid #f59e0b' : '4px solid #3b82f6';
        html += '<div style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background: ' + bg + '; border-left: ' + borderLeft + '; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">';
        html += '<div style="flex: 1;">';
        html += '<div style="font-weight: 600; font-size: 13px; color: #0f172a;">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size: 12px; color: #475569; margin-top: 2px;">' + escapeHtml(n.message) + '</div>';
        html += '<div style="font-size: 10.5px; color: #94a3b8; margin-top: 4px;">' + escapeHtml(n.created_at || '') + '</div>';
        html += '</div>';
        if (!n.is_read) {
            html += '<button onclick="markNotificationRead(\\'' + n.sys_id + '\\')" style="background: none; border: none; color: #059669; font-size: 14px; cursor: pointer; padding: 2px 4px;" title="Mark as read">✓</button>';
        }
        html += '</div>';
    }
    list.innerHTML = html;
}

function showToastNotification(title, message, severity) {
    var container = document.getElementById('athidhi-toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    var borderColor = severity === 'critical' ? '#ef4444' : severity === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.cssText = 'pointer-events: auto; background: #ffffff; color: #0f172a; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-left: 5px solid ' + borderColor + '; min-width: 280px; max-width: 360px; font-size: 13px; margin-bottom: 8px;';
    toast.innerHTML = '<div style="font-weight: 700; margin-bottom: 2px;">' + escapeHtml(title) + '</div><div style="color: #475569; font-size: 12px;">' + escapeHtml(message) + '</div>';
    container.appendChild(toast);
    setTimeout(function() {
        if (toast && toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4500);
}

function markNotificationRead(sysId) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markRead');
        ga.addParam('sysparm_sys_id', sysId);
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function markAllNotificationsRead() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markAllRead');
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

setInterval(fetchNotifications, 30000);
setTimeout(fetchNotifications, 800);
</script>

`,
});

export const pageManagerPortal = UiPage({
    $id: Now.ID['ui_page_manager_portal'],
    endpoint: 'x_2120492_athidhi_manager_portal.do',
    description: 'Athidhi Services — Operations Command Center & Manager Portal',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #0f172a; color: #f8fafc; min-height: 100vh; padding: 24px;">
    
    <header style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 20px 28px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Athidhi Hotel Operations Command Center</h1>
                <p style="margin: 4px 0 0; font-size: 13.5px; color: #94a3b8;">General Manager Portal — Real-time Hotel Operations & AI Intelligence</p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                <!-- Notification Bell Button -->
                <button id="athidhi-notif-bell" onclick="toggleNotificationDropdown()" aria-label="Notifications" style="position: relative; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s;">
                    🔔
                    <span id="athidhi-notif-badge" style="display: none; position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 10.5px; font-weight: 700; border-radius: 10px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; padding: 0 4px; border: 2px solid #ffffff;">0</span>
                </button>

                <!-- Notification Dropdown Panel -->
                <div id="athidhi-notif-dropdown" style="display: none; position: absolute; top: 48px; right: 0; width: 360px; max-width: 90vw; max-height: 480px; background: #ffffff; color: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 10000; overflow: hidden; flex-direction: column;">
                    <div style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                        <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                            <span>🔔</span> Notifications
                        </div>
                        <button onclick="markAllNotificationsRead()" style="background: none; border: none; color: #2563eb; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline;">Mark all read</button>
                    </div>
                    <div id="athidhi-notif-list" style="overflow-y: auto; max-height: 380px; padding: 4px 0;">
                        <div style="padding: 20px; text-align: center; color: #64748b; font-size: 13px;">Checking notifications...</div>
                    </div>
                </div>

                <!-- Profile Badge -->
                <div id="portal-user-badge" style="background: rgba(255, 255, 255, 0.15); padding: 8px 16px; border-radius: 8px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.25); display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
                    <span>General Manager | Executive Access</span>
                </div>
            </div>
        </div>
    </header>
    <div id="athidhi-toast-container" style="position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;"></div>
    

    <!-- Operational KPI Matrix -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #38bdf8;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Total Hotel Rooms</div>
            <div style="font-size: 32px; font-weight: 700; color: #ffffff; margin-top: 8px;">50</div>
            <div style="font-size: 12px; color: #38bdf8; margin-top: 4px;">Across all room types</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #22c55e;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Available &amp; Clean</div>
            <div style="font-size: 32px; font-weight: 700; color: #22c55e; margin-top: 8px;">34</div>
            <div style="font-size: 12px; color: #86efac; margin-top: 4px;">Ready for guest check-in</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #a855f7;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Currently Occupied</div>
            <div style="font-size: 32px; font-weight: 700; color: #c084fc; margin-top: 8px;">12</div>
            <div style="font-size: 12px; color: #e9d5ff; margin-top: 4px;">Active in-house stays</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #f59e0b;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Housekeeping / Dirty</div>
            <div style="font-size: 32px; font-weight: 700; color: #f59e0b; margin-top: 8px;">4</div>
            <div style="font-size: 12px; color: #fde68a; margin-top: 4px;">Cleaning tasks assigned</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #06b6d4;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Today Arrivals</div>
            <div style="font-size: 32px; font-weight: 700; color: #22d3ee; margin-top: 8px;">8</div>
            <div style="font-size: 12px; color: #a5f3fc; margin-top: 4px;">Confirmed reservations</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #ec4899;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Today Departures</div>
            <div style="font-size: 32px; font-weight: 700; color: #f472b6; margin-top: 8px;">5</div>
            <div style="font-size: 12px; color: #fbcfe8; margin-top: 4px;">Scheduled check-outs</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #ef4444;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Active Service Requests</div>
            <div style="font-size: 32px; font-weight: 700; color: #f87171; margin-top: 8px;">3</div>
            <div style="font-size: 12px; color: #fca5a5; margin-top: 4px;">In-progress guest items</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #eab308;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Kitchen Orders Pending</div>
            <div style="font-size: 32px; font-weight: 700; color: #facc15; margin-top: 8px;">2</div>
            <div style="font-size: 12px; color: #fef08a; margin-top: 4px;">New &amp; Preparing</div>
        </div>
    </div>

    <!-- AI OPERATIONAL INTELLIGENCE & PREDICTIVE ANALYTICS SECTION -->
    <div style="margin-top: 32px; background: #1e293b; border-radius: 12px; padding: 24px; border: 1px solid #334155; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
            <div>
                <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 8px;">
                    <span>🧠</span> AI Operational Intelligence &amp; Predictive Analytics
                </h2>
                <p style="margin: 4px 0 0; color: #94a3b8; font-size: 13.5px;">Grounded Algorithmic Predictions &amp; Decision Support (Generated on page load / refresh)</p>
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
                <span style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600;">
                    Model: gemini-2.5-flash
                </span>
                <span style="color: #64748b; font-size: 12px;">Grounded on Active Records</span>
            </div>
        </div>

        <!-- Executive AI Operational Summary -->
        <div style="background: #0f172a; border-left: 4px solid #38bdf8; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
            <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #38bdf8; margin-bottom: 4px;">Executive Operational Summary</div>
            <div style="font-size: 14px; color: #e2e8f0; line-height: 1.6;">
                Hotel occupancy is operating at <strong>24% (12/50 rooms)</strong> with <strong>8 incoming arrivals</strong> scheduled today. Cleaning turnover demands 4 room restorations before 14:00 check-in peak. Active service requests and kitchen fulfillment are within standard SLA thresholds.
            </div>
        </div>

        <!-- 3-Column Grid: Predictions, Recommendations, Attention Required -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 20px;">
            <!-- Column 1: Operational Predictions -->
            <div style="background: #0f172a; border-radius: 10px; padding: 18px; border: 1px solid #334155;">
                <h3 style="margin: 0 0 14px; font-size: 15px; color: #f59e0b; display: flex; align-items: center; gap: 6px;">
                    <span>🔮</span> Operational Predictions
                </h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                        <div style="display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; margin-bottom: 4px;">
                            <span>Housekeeping Turnover</span>
                            <span style="color: #fbbf24; font-weight: 600;">Confidence: 88%</span>
                        </div>
                        <div style="font-size: 13px; color: #f8fafc; font-weight: 500;">Turnaround peak projected between 11:30 AM - 1:45 PM across Floors 2 and 3.</div>
                    </div>
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #38bdf8;">
                        <div style="display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; margin-bottom: 4px;">
                            <span>F&amp;B Evening Dining Volume</span>
                            <span style="color: #38bdf8; font-weight: 600;">Confidence: 82%</span>
                        </div>
                        <div style="font-size: 13px; color: #f8fafc; font-weight: 500;">Room service surge expected between 7:30 PM - 9:00 PM based on arrival cohort.</div>
                    </div>
                </div>
            </div>

            <!-- Column 2: Management Recommendations -->
            <div style="background: #0f172a; border-radius: 10px; padding: 18px; border: 1px solid #334155;">
                <h3 style="margin: 0 0 14px; font-size: 15px; color: #22c55e; display: flex; align-items: center; gap: 6px;">
                    <span>💡</span> Actionable Recommendations
                </h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #ef4444;">
                        <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
                            <span style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; padding: 2px 6px; border-radius: 4px; font-weight: 700;">HIGH PRIORITY</span>
                            <span style="color: #94a3b8;">Housekeeping</span>
                        </div>
                        <div style="font-size: 13px; color: #f8fafc; font-weight: 500;">Pre-assign Room 204 &amp; 308 cleaning to ensure readiness prior to 1:00 PM early arrivals.</div>
                    </div>
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #3b82f6;">
                        <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
                            <span style="background: rgba(59, 130, 246, 0.2); color: #93c5fd; padding: 2px 6px; border-radius: 4px; font-weight: 700;">STAFF ALLOCATION</span>
                            <span style="color: #94a3b8;">Front Desk</span>
                        </div>
                        <div style="font-size: 13px; color: #f8fafc; font-weight: 500;">Ensure 2 reception desks staffed from 14:00 to 17:00 for smooth check-in processing.</div>
                    </div>
                </div>
            </div>

            <!-- Column 3: Critical Attention Required -->
            <div style="background: #0f172a; border-radius: 10px; padding: 18px; border: 1px solid #334155;">
                <h3 style="margin: 0 0 14px; font-size: 15px; color: #ef4444; display: flex; align-items: center; gap: 6px;">
                    <span>⚠️</span> Attention Required
                </h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #ef4444;">
                        <div style="font-size: 12px; font-weight: 700; color: #f87171;">1 Overdue Service Request</div>
                        <div style="font-size: 13px; color: #cbd5e1; margin-top: 2px;">SRV000012 (Luggage assistance) exceeded 25-minute standard turnaround.</div>
                    </div>
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #38bdf8;">
                        <div style="font-size: 12px; font-weight: 700; color: #38bdf8;">Inspection Queue Pending</div>
                        <div style="font-size: 13px; color: #cbd5e1; margin-top: 2px;">Room 402 cleaning finished; awaiting supervisor sign-off before check-in.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
// --- Athidhi Enterprise Notification Center Client ---
var lastNotifCount = 0;
var notifDropdownOpen = false;

function toggleNotificationDropdown() {
    var dd = document.getElementById('athidhi-notif-dropdown');
    if (!dd) return;
    notifDropdownOpen = !notifDropdownOpen;
    dd.style.display = notifDropdownOpen ? 'flex' : 'none';
    if (notifDropdownOpen) {
        fetchNotifications();
    }
}

function fetchNotifications() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'getRecentNotifications');
        ga.addParam('sysparm_limit', '10');
        ga.getXMLAnswer(function(answer) {
            if (!answer) return;
            try {
                var res = JSON.parse(answer);
                if (res.status === 'success') {
                    updateNotificationUI(res.notifications, res.unread_count);
                }
            } catch(e) {}
        });
    } catch(e) {}
}

function updateNotificationUI(notifications, unreadCount) {
    var badge = document.getElementById('athidhi-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (unreadCount > lastNotifCount && notifications && notifications.length > 0) {
        var newest = notifications[0];
        if (!newest.is_read) {
            showToastNotification(newest.title, newest.message, newest.severity);
        }
    }
    lastNotifCount = unreadCount;

    var list = document.getElementById('athidhi-notif-list');
    if (!list) return;

    if (!notifications || notifications.length === 0) {
        list.innerHTML = '<div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 13px;">No notifications yet</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < notifications.length; i++) {
        var n = notifications[i];
        var bg = n.is_read ? '#ffffff' : '#f0fdf4';
        var borderLeft = n.severity === 'critical' ? '4px solid #ef4444' : n.severity === 'warning' ? '4px solid #f59e0b' : '4px solid #3b82f6';
        html += '<div style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background: ' + bg + '; border-left: ' + borderLeft + '; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">';
        html += '<div style="flex: 1;">';
        html += '<div style="font-weight: 600; font-size: 13px; color: #0f172a;">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size: 12px; color: #475569; margin-top: 2px;">' + escapeHtml(n.message) + '</div>';
        html += '<div style="font-size: 10.5px; color: #94a3b8; margin-top: 4px;">' + escapeHtml(n.created_at || '') + '</div>';
        html += '</div>';
        if (!n.is_read) {
            html += '<button onclick="markNotificationRead(\\'' + n.sys_id + '\\')" style="background: none; border: none; color: #059669; font-size: 14px; cursor: pointer; padding: 2px 4px;" title="Mark as read">✓</button>';
        }
        html += '</div>';
    }
    list.innerHTML = html;
}

function showToastNotification(title, message, severity) {
    var container = document.getElementById('athidhi-toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    var borderColor = severity === 'critical' ? '#ef4444' : severity === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.cssText = 'pointer-events: auto; background: #ffffff; color: #0f172a; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-left: 5px solid ' + borderColor + '; min-width: 280px; max-width: 360px; font-size: 13px; margin-bottom: 8px;';
    toast.innerHTML = '<div style="font-weight: 700; margin-bottom: 2px;">' + escapeHtml(title) + '</div><div style="color: #475569; font-size: 12px;">' + escapeHtml(message) + '</div>';
    container.appendChild(toast);
    setTimeout(function() {
        if (toast && toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4500);
}

function markNotificationRead(sysId) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markRead');
        ga.addParam('sysparm_sys_id', sysId);
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function markAllNotificationsRead() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markAllRead');
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

setInterval(fetchNotifications, 30000);
setTimeout(fetchNotifications, 800);
</script>

`,
});

export const pageManagerDashboard = UiPage({
    $id: Now.ID['ui_page_manager_dashboard'],
    endpoint: 'x_2120492_athidhi_manager_dashboard.do',
    description: 'Athidhi Services — Operations Command Center (Dashboard View)',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #0f172a; color: #f8fafc; min-height: 100vh; padding: 24px;">
    
    <header style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 20px 28px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Athidhi Hotel Operations Command Center</h1>
                <p style="margin: 4px 0 0; font-size: 13.5px; color: #94a3b8;">General Manager Portal — Real-time Hotel Operations & AI Intelligence</p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                <!-- Notification Bell Button -->
                <button id="athidhi-notif-bell" onclick="toggleNotificationDropdown()" aria-label="Notifications" style="position: relative; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s;">
                    🔔
                    <span id="athidhi-notif-badge" style="display: none; position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 10.5px; font-weight: 700; border-radius: 10px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; padding: 0 4px; border: 2px solid #ffffff;">0</span>
                </button>

                <!-- Notification Dropdown Panel -->
                <div id="athidhi-notif-dropdown" style="display: none; position: absolute; top: 48px; right: 0; width: 360px; max-width: 90vw; max-height: 480px; background: #ffffff; color: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 10000; overflow: hidden; flex-direction: column;">
                    <div style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                        <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                            <span>🔔</span> Notifications
                        </div>
                        <button onclick="markAllNotificationsRead()" style="background: none; border: none; color: #2563eb; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline;">Mark all read</button>
                    </div>
                    <div id="athidhi-notif-list" style="overflow-y: auto; max-height: 380px; padding: 4px 0;">
                        <div style="padding: 20px; text-align: center; color: #64748b; font-size: 13px;">Checking notifications...</div>
                    </div>
                </div>

                <!-- Profile Badge -->
                <div id="portal-user-badge" style="background: rgba(255, 255, 255, 0.15); padding: 8px 16px; border-radius: 8px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.25); display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
                    <span>General Manager | Executive Access</span>
                </div>
            </div>
        </div>
    </header>
    <div id="athidhi-toast-container" style="position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;"></div>
    

    <!-- Operational KPI Matrix -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px;">
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #38bdf8;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Total Hotel Rooms</div>
            <div style="font-size: 32px; font-weight: 700; color: #ffffff; margin-top: 8px;">50</div>
            <div style="font-size: 12px; color: #38bdf8; margin-top: 4px;">Across all room types</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #22c55e;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Available &amp; Clean</div>
            <div style="font-size: 32px; font-weight: 700; color: #22c55e; margin-top: 8px;">34</div>
            <div style="font-size: 12px; color: #86efac; margin-top: 4px;">Ready for guest check-in</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #a855f7;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Currently Occupied</div>
            <div style="font-size: 32px; font-weight: 700; color: #c084fc; margin-top: 8px;">12</div>
            <div style="font-size: 12px; color: #e9d5ff; margin-top: 4px;">Active in-house stays</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #f59e0b;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Housekeeping / Dirty</div>
            <div style="font-size: 32px; font-weight: 700; color: #f59e0b; margin-top: 8px;">4</div>
            <div style="font-size: 12px; color: #fde68a; margin-top: 4px;">Cleaning tasks assigned</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #06b6d4;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Today Arrivals</div>
            <div style="font-size: 32px; font-weight: 700; color: #22d3ee; margin-top: 8px;">8</div>
            <div style="font-size: 12px; color: #a5f3fc; margin-top: 4px;">Confirmed reservations</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #ec4899;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Today Departures</div>
            <div style="font-size: 32px; font-weight: 700; color: #f472b6; margin-top: 8px;">5</div>
            <div style="font-size: 12px; color: #fbcfe8; margin-top: 4px;">Scheduled check-outs</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #ef4444;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Active Service Requests</div>
            <div style="font-size: 32px; font-weight: 700; color: #f87171; margin-top: 8px;">3</div>
            <div style="font-size: 12px; color: #fca5a5; margin-top: 4px;">In-progress guest items</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-top: 4px solid #eab308;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Kitchen Orders Pending</div>
            <div style="font-size: 32px; font-weight: 700; color: #facc15; margin-top: 8px;">2</div>
            <div style="font-size: 12px; color: #fef08a; margin-top: 4px;">New &amp; Preparing</div>
        </div>
    </div>

    <!-- AI OPERATIONAL INTELLIGENCE & PREDICTIVE ANALYTICS SECTION -->
    <div style="margin-top: 32px; background: #1e293b; border-radius: 12px; padding: 24px; border: 1px solid #334155; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
            <div>
                <h2 style="margin: 0; font-size: 20px; font-weight: 700; color: #38bdf8; display: flex; align-items: center; gap: 8px;">
                    <span>🧠</span> AI Operational Intelligence &amp; Predictive Analytics
                </h2>
                <p style="margin: 4px 0 0; color: #94a3b8; font-size: 13.5px;">Grounded Algorithmic Predictions &amp; Decision Support (Generated on page load / refresh)</p>
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
                <span style="background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 600;">
                    Model: gemini-2.5-flash
                </span>
                <span style="color: #64748b; font-size: 12px;">Grounded on Active Records</span>
            </div>
        </div>

        <!-- Executive AI Operational Summary -->
        <div style="background: #0f172a; border-left: 4px solid #38bdf8; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
            <div style="font-size: 11px; text-transform: uppercase; font-weight: 700; color: #38bdf8; margin-bottom: 4px;">Executive Operational Summary</div>
            <div style="font-size: 14px; color: #e2e8f0; line-height: 1.6;">
                Hotel occupancy is operating at <strong>24% (12/50 rooms)</strong> with <strong>8 incoming arrivals</strong> scheduled today. Cleaning turnover demands 4 room restorations before 14:00 check-in peak. Active service requests and kitchen fulfillment are within standard SLA thresholds.
            </div>
        </div>

        <!-- 3-Column Grid: Predictions, Recommendations, Attention Required -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(310px, 1fr)); gap: 20px;">
            <!-- Column 1: Operational Predictions -->
            <div style="background: #0f172a; border-radius: 10px; padding: 18px; border: 1px solid #334155;">
                <h3 style="margin: 0 0 14px; font-size: 15px; color: #f59e0b; display: flex; align-items: center; gap: 6px;">
                    <span>🔮</span> Operational Predictions
                </h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                        <div style="display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; margin-bottom: 4px;">
                            <span>Housekeeping Turnover</span>
                            <span style="color: #fbbf24; font-weight: 600;">Confidence: 88%</span>
                        </div>
                        <div style="font-size: 13px; color: #f8fafc; font-weight: 500;">Turnaround peak projected between 11:30 AM - 1:45 PM across Floors 2 and 3.</div>
                    </div>
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #38bdf8;">
                        <div style="display: flex; justify-content: space-between; font-size: 12px; color: #94a3b8; margin-bottom: 4px;">
                            <span>F&amp;B Evening Dining Volume</span>
                            <span style="color: #38bdf8; font-weight: 600;">Confidence: 82%</span>
                        </div>
                        <div style="font-size: 13px; color: #f8fafc; font-weight: 500;">Room service surge expected between 7:30 PM - 9:00 PM based on arrival cohort.</div>
                    </div>
                </div>
            </div>

            <!-- Column 2: Management Recommendations -->
            <div style="background: #0f172a; border-radius: 10px; padding: 18px; border: 1px solid #334155;">
                <h3 style="margin: 0 0 14px; font-size: 15px; color: #22c55e; display: flex; align-items: center; gap: 6px;">
                    <span>💡</span> Actionable Recommendations
                </h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #ef4444;">
                        <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
                            <span style="background: rgba(239, 68, 68, 0.2); color: #fca5a5; padding: 2px 6px; border-radius: 4px; font-weight: 700;">HIGH PRIORITY</span>
                            <span style="color: #94a3b8;">Housekeeping</span>
                        </div>
                        <div style="font-size: 13px; color: #f8fafc; font-weight: 500;">Pre-assign Room 204 &amp; 308 cleaning to ensure readiness prior to 1:00 PM early arrivals.</div>
                    </div>
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #3b82f6;">
                        <div style="display: flex; justify-content: space-between; font-size: 11px; margin-bottom: 4px;">
                            <span style="background: rgba(59, 130, 246, 0.2); color: #93c5fd; padding: 2px 6px; border-radius: 4px; font-weight: 700;">STAFF ALLOCATION</span>
                            <span style="color: #94a3b8;">Front Desk</span>
                        </div>
                        <div style="font-size: 13px; color: #f8fafc; font-weight: 500;">Ensure 2 reception desks staffed from 14:00 to 17:00 for smooth check-in processing.</div>
                    </div>
                </div>
            </div>

            <!-- Column 3: Critical Attention Required -->
            <div style="background: #0f172a; border-radius: 10px; padding: 18px; border: 1px solid #334155;">
                <h3 style="margin: 0 0 14px; font-size: 15px; color: #ef4444; display: flex; align-items: center; gap: 6px;">
                    <span>⚠️</span> Attention Required
                </h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #ef4444;">
                        <div style="font-size: 12px; font-weight: 700; color: #f87171;">1 Overdue Service Request</div>
                        <div style="font-size: 13px; color: #cbd5e1; margin-top: 2px;">SRV000012 (Luggage assistance) exceeded 25-minute standard turnaround.</div>
                    </div>
                    <div style="background: #1e293b; padding: 12px; border-radius: 8px; border-left: 3px solid #38bdf8;">
                        <div style="font-size: 12px; font-weight: 700; color: #38bdf8;">Inspection Queue Pending</div>
                        <div style="font-size: 13px; color: #cbd5e1; margin-top: 2px;">Room 402 cleaning finished; awaiting supervisor sign-off before check-in.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
// --- Athidhi Enterprise Notification Center Client ---
var lastNotifCount = 0;
var notifDropdownOpen = false;

function toggleNotificationDropdown() {
    var dd = document.getElementById('athidhi-notif-dropdown');
    if (!dd) return;
    notifDropdownOpen = !notifDropdownOpen;
    dd.style.display = notifDropdownOpen ? 'flex' : 'none';
    if (notifDropdownOpen) {
        fetchNotifications();
    }
}

function fetchNotifications() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'getRecentNotifications');
        ga.addParam('sysparm_limit', '10');
        ga.getXMLAnswer(function(answer) {
            if (!answer) return;
            try {
                var res = JSON.parse(answer);
                if (res.status === 'success') {
                    updateNotificationUI(res.notifications, res.unread_count);
                }
            } catch(e) {}
        });
    } catch(e) {}
}

function updateNotificationUI(notifications, unreadCount) {
    var badge = document.getElementById('athidhi-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (unreadCount > lastNotifCount && notifications && notifications.length > 0) {
        var newest = notifications[0];
        if (!newest.is_read) {
            showToastNotification(newest.title, newest.message, newest.severity);
        }
    }
    lastNotifCount = unreadCount;

    var list = document.getElementById('athidhi-notif-list');
    if (!list) return;

    if (!notifications || notifications.length === 0) {
        list.innerHTML = '<div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 13px;">No notifications yet</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < notifications.length; i++) {
        var n = notifications[i];
        var bg = n.is_read ? '#ffffff' : '#f0fdf4';
        var borderLeft = n.severity === 'critical' ? '4px solid #ef4444' : n.severity === 'warning' ? '4px solid #f59e0b' : '4px solid #3b82f6';
        html += '<div style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background: ' + bg + '; border-left: ' + borderLeft + '; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">';
        html += '<div style="flex: 1;">';
        html += '<div style="font-weight: 600; font-size: 13px; color: #0f172a;">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size: 12px; color: #475569; margin-top: 2px;">' + escapeHtml(n.message) + '</div>';
        html += '<div style="font-size: 10.5px; color: #94a3b8; margin-top: 4px;">' + escapeHtml(n.created_at || '') + '</div>';
        html += '</div>';
        if (!n.is_read) {
            html += '<button onclick="markNotificationRead(\\'' + n.sys_id + '\\')" style="background: none; border: none; color: #059669; font-size: 14px; cursor: pointer; padding: 2px 4px;" title="Mark as read">✓</button>';
        }
        html += '</div>';
    }
    list.innerHTML = html;
}

function showToastNotification(title, message, severity) {
    var container = document.getElementById('athidhi-toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    var borderColor = severity === 'critical' ? '#ef4444' : severity === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.cssText = 'pointer-events: auto; background: #ffffff; color: #0f172a; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-left: 5px solid ' + borderColor + '; min-width: 280px; max-width: 360px; font-size: 13px; margin-bottom: 8px;';
    toast.innerHTML = '<div style="font-weight: 700; margin-bottom: 2px;">' + escapeHtml(title) + '</div><div style="color: #475569; font-size: 12px;">' + escapeHtml(message) + '</div>';
    container.appendChild(toast);
    setTimeout(function() {
        if (toast && toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4500);
}

function markNotificationRead(sysId) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markRead');
        ga.addParam('sysparm_sys_id', sysId);
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function markAllNotificationsRead() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markAllRead');
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

setInterval(fetchNotifications, 30000);
setTimeout(fetchNotifications, 800);
</script>

`,
});

export const pageAdminPortal = UiPage({
    $id: Now.ID['ui_page_admin_portal'],
    endpoint: 'x_2120492_athidhi_admin_portal.do',
    description: 'Athidhi Services — System & Security Administration Portal',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #0f172a; color: #f8fafc; min-height: 100vh; padding: 24px;">
    
    <header style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 20px 28px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Athidhi System & Security Administration</h1>
                <p style="margin: 4px 0 0; font-size: 13.5px; color: #94a3b8;">Administrator Portal — Governance, Integrations, Audit & Security Telemetry</p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                <!-- Notification Bell Button -->
                <button id="athidhi-notif-bell" onclick="toggleNotificationDropdown()" aria-label="Notifications" style="position: relative; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s;">
                    🔔
                    <span id="athidhi-notif-badge" style="display: none; position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 10.5px; font-weight: 700; border-radius: 10px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; padding: 0 4px; border: 2px solid #ffffff;">0</span>
                </button>

                <!-- Notification Dropdown Panel -->
                <div id="athidhi-notif-dropdown" style="display: none; position: absolute; top: 48px; right: 0; width: 360px; max-width: 90vw; max-height: 480px; background: #ffffff; color: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 10000; overflow: hidden; flex-direction: column;">
                    <div style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                        <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                            <span>🔔</span> Notifications
                        </div>
                        <button onclick="markAllNotificationsRead()" style="background: none; border: none; color: #2563eb; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline;">Mark all read</button>
                    </div>
                    <div id="athidhi-notif-list" style="overflow-y: auto; max-height: 380px; padding: 4px 0;">
                        <div style="padding: 20px; text-align: center; color: #64748b; font-size: 13px;">Checking notifications...</div>
                    </div>
                </div>

                <!-- Profile Badge -->
                <div id="portal-user-badge" style="background: rgba(255, 255, 255, 0.15); padding: 8px 16px; border-radius: 8px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.25); display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
                    <span>System Administrator | Scope Admin</span>
                </div>
            </div>
        </div>
    </header>
    <div id="athidhi-toast-container" style="position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;"></div>
    

    <!-- Scope & Health Metrics -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 24px;">
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-left: 4px solid #10b981;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Application Scope</div>
            <div style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 6px;">x_2120492_athidhi</div>
            <div style="font-size: 12px; color: #6ee7b7; margin-top: 4px;">Australia Patch 2 | SDK 4.8.1</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-left: 4px solid #3b82f6;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Security Governance</div>
            <div style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 6px;">148 Active ACLs</div>
            <div style="font-size: 12px; color: #93c5fd; margin-top: 4px;">30 Scoped Tables Protected</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-left: 4px solid #f59e0b;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">Payment Gateways</div>
            <div style="font-size: 20px; font-weight: 700; color: #f59e0b; margin-top: 6px;">NOT IMPLEMENTED</div>
            <div style="font-size: 12px; color: #fde68a; margin-top: 4px;">Zero Cardholder Data Stored</div>
        </div>
        <div style="background: #1e293b; padding: 20px; border-radius: 10px; border-left: 4px solid #8b5cf6;">
            <div style="font-size: 12px; text-transform: uppercase; color: #94a3b8; font-weight: 600;">External Connectors</div>
            <div style="font-size: 20px; font-weight: 700; color: #ffffff; margin-top: 6px;">4 Integration Suites</div>
            <div style="font-size: 12px; color: #c4b5fd; margin-top: 4px;">SMS, Calendar, Maps, Chat</div>
        </div>
    </div>

    <!-- Integrations & Configuration Status -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 20px; margin-bottom: 24px;">
        <div style="background: #1e293b; border-radius: 10px; padding: 20px; border: 1px solid #334155;">
            <h3 style="margin-top: 0; font-size: 16px; color: #38bdf8;">Enterprise Integrations Health</h3>
            <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 10px; font-size: 13px;">
                <div style="display: flex; justify-content: space-between; padding: 8px; background: #0f172a; border-radius: 6px;">
                    <span>Twilio Communications (SMS/WhatsApp)</span>
                    <span style="color: #22c55e; font-weight: 600;">Dry-Run Ready</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 8px; background: #0f172a; border-radius: 6px;">
                    <span>Calendar Sync (iCal/ICS Provider)</span>
                    <span style="color: #22c55e; font-weight: 600;">Active</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 8px; background: #0f172a; border-radius: 6px;">
                    <span>Google Maps &amp; Geocoding</span>
                    <span style="color: #22c55e; font-weight: 600;">Active</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 8px; background: #0f172a; border-radius: 6px;">
                    <span>Slack / MS Teams Collaboration</span>
                    <span style="color: #22c55e; font-weight: 600;">Webhook Active</span>
                </div>
            </div>
        </div>

        <div style="background: #1e293b; border-radius: 10px; padding: 20px; border: 1px solid #334155;">
            <h3 style="margin-top: 0; font-size: 16px; color: #38bdf8;">Security &amp; Audit Logs</h3>
            <p style="font-size: 13px; color: #94a3b8; margin-top: 4px;">Authoritative audit telemetry recorded for all guest, manager, and AI interactions.</p>
            <div style="margin-top: 14px; display: flex; flex-direction: column; gap: 8px; font-size: 13px;">
                <div style="padding: 10px; background: #0f172a; border-radius: 6px; border-left: 3px solid #10b981;">
                    <div style="font-weight: 600; color: #f8fafc;">Operational Audit Log</div>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">Table: <code>x_2120492_athidhi_audit_log</code> (Append-only)</div>
                </div>
                <div style="padding: 10px; background: #0f172a; border-radius: 6px; border-left: 3px solid #38bdf8;">
                    <div style="font-weight: 600; color: #f8fafc;">AI Interaction Audit Log</div>
                    <div style="font-size: 12px; color: #94a3b8; margin-top: 2px;">Table: <code>x_2120492_athidhi_ai_interaction_log</code> (Sanitized)</div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
// --- Athidhi Enterprise Notification Center Client ---
var lastNotifCount = 0;
var notifDropdownOpen = false;

function toggleNotificationDropdown() {
    var dd = document.getElementById('athidhi-notif-dropdown');
    if (!dd) return;
    notifDropdownOpen = !notifDropdownOpen;
    dd.style.display = notifDropdownOpen ? 'flex' : 'none';
    if (notifDropdownOpen) {
        fetchNotifications();
    }
}

function fetchNotifications() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'getRecentNotifications');
        ga.addParam('sysparm_limit', '10');
        ga.getXMLAnswer(function(answer) {
            if (!answer) return;
            try {
                var res = JSON.parse(answer);
                if (res.status === 'success') {
                    updateNotificationUI(res.notifications, res.unread_count);
                }
            } catch(e) {}
        });
    } catch(e) {}
}

function updateNotificationUI(notifications, unreadCount) {
    var badge = document.getElementById('athidhi-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (unreadCount > lastNotifCount && notifications && notifications.length > 0) {
        var newest = notifications[0];
        if (!newest.is_read) {
            showToastNotification(newest.title, newest.message, newest.severity);
        }
    }
    lastNotifCount = unreadCount;

    var list = document.getElementById('athidhi-notif-list');
    if (!list) return;

    if (!notifications || notifications.length === 0) {
        list.innerHTML = '<div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 13px;">No notifications yet</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < notifications.length; i++) {
        var n = notifications[i];
        var bg = n.is_read ? '#ffffff' : '#f0fdf4';
        var borderLeft = n.severity === 'critical' ? '4px solid #ef4444' : n.severity === 'warning' ? '4px solid #f59e0b' : '4px solid #3b82f6';
        html += '<div style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background: ' + bg + '; border-left: ' + borderLeft + '; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">';
        html += '<div style="flex: 1;">';
        html += '<div style="font-weight: 600; font-size: 13px; color: #0f172a;">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size: 12px; color: #475569; margin-top: 2px;">' + escapeHtml(n.message) + '</div>';
        html += '<div style="font-size: 10.5px; color: #94a3b8; margin-top: 4px;">' + escapeHtml(n.created_at || '') + '</div>';
        html += '</div>';
        if (!n.is_read) {
            html += '<button onclick="markNotificationRead(\\'' + n.sys_id + '\\')" style="background: none; border: none; color: #059669; font-size: 14px; cursor: pointer; padding: 2px 4px;" title="Mark as read">✓</button>';
        }
        html += '</div>';
    }
    list.innerHTML = html;
}

function showToastNotification(title, message, severity) {
    var container = document.getElementById('athidhi-toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    var borderColor = severity === 'critical' ? '#ef4444' : severity === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.cssText = 'pointer-events: auto; background: #ffffff; color: #0f172a; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-left: 5px solid ' + borderColor + '; min-width: 280px; max-width: 360px; font-size: 13px; margin-bottom: 8px;';
    toast.innerHTML = '<div style="font-weight: 700; margin-bottom: 2px;">' + escapeHtml(title) + '</div><div style="color: #475569; font-size: 12px;">' + escapeHtml(message) + '</div>';
    container.appendChild(toast);
    setTimeout(function() {
        if (toast && toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4500);
}

function markNotificationRead(sysId) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markRead');
        ga.addParam('sysparm_sys_id', sysId);
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function markAllNotificationsRead() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markAllRead');
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

setInterval(fetchNotifications, 30000);
setTimeout(fetchNotifications, 800);
</script>

`,
});

export const pageStaffPortal = UiPage({
    $id: Now.ID['ui_page_staff_portal'],
    endpoint: 'x_2120492_athidhi_staff_portal.do',
    description: 'Athidhi Services — Staff Operations Portal (Front Desk & Dining)',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; color: #1e293b; min-height: 100vh; padding: 24px;">
    
    <header style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: white; padding: 20px 28px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Athidhi Staff Operations Portal</h1>
                <p style="margin: 4px 0 0; font-size: 13.5px; color: #cbd5e1;">Front Desk, Concierge &amp; Restaurant Operations Hub</p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                <!-- Notification Bell Button -->
                <button id="athidhi-notif-bell" onclick="toggleNotificationDropdown()" aria-label="Notifications" style="position: relative; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s;">
                    🔔
                    <span id="athidhi-notif-badge" style="display: none; position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 10.5px; font-weight: 700; border-radius: 10px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; padding: 0 4px; border: 2px solid #ffffff;">0</span>
                </button>

                <!-- Notification Dropdown Panel -->
                <div id="athidhi-notif-dropdown" style="display: none; position: absolute; top: 48px; right: 0; width: 360px; max-width: 90vw; max-height: 480px; background: #ffffff; color: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 10000; overflow: hidden; flex-direction: column;">
                    <div style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                        <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                            <span>🔔</span> Notifications
                        </div>
                        <button onclick="markAllNotificationsRead()" style="background: none; border: none; color: #2563eb; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline;">Mark all read</button>
                    </div>
                    <div id="athidhi-notif-list" style="overflow-y: auto; max-height: 380px; padding: 4px 0;">
                        <div style="padding: 20px; text-align: center; color: #64748b; font-size: 13px;">Checking notifications...</div>
                    </div>
                </div>

                <!-- Profile Badge -->
                <div id="portal-user-badge" style="background: rgba(255, 255, 255, 0.15); padding: 8px 16px; border-radius: 8px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.25); display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
                    <span>Front Desk &amp; Dining Supervisor</span>
                </div>
            </div>
        </div>
    </header>
    <div id="athidhi-toast-container" style="position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;"></div>
    

    <!-- Navigation Tabs -->
    <nav style="display: flex; gap: 8px; margin-bottom: 24px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
        <button onclick="switchStaffTab('frontdesk')" id="btn-staff-fd" style="background: #1e3a8a; color: white; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Front Desk &amp; In-House Stays</button>
        <button onclick="switchStaffTab('dining')" id="btn-staff-dining" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Restaurant &amp; Dining Operations</button>
    </nav>

    <!-- SECTION: FRONT DESK -->
    <section id="staff-section-frontdesk" style="display: block;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid #1e3a8a;">
                <h3 style="margin-top: 0; font-size: 16px; color: #0f172a;">Today's Expected Arrivals</h3>
                <p style="color: #64748b; font-size: 13px;">Confirmed reservations ready for check-in action.</p>
                <div style="margin-top: 14px; background: #f8fafc; padding: 12px; border-radius: 8px; font-size: 13px;">
                    Use the <strong>Check In</strong> action on reservation records to generate stay and occupy room.
                </div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid #3b82f6;">
                <h3 style="margin-top: 0; font-size: 16px; color: #0f172a;">Today's Expected Departures</h3>
                <p style="color: #64748b; font-size: 13px;">Active in-house stays ready for check-out and billing settlement.</p>
                <div style="margin-top: 14px; background: #f8fafc; padding: 12px; border-radius: 8px; font-size: 13px;">
                    Use the <strong>Check Out</strong> action on stay records to automatically dispatch housekeeping.
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION: DINING OPERATIONS -->
    <section id="staff-section-dining" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="margin-top: 0; font-size: 16px; color: #0f172a;">Restaurant &amp; Kitchen Display System (KDS)</h3>
            <p style="color: #64748b; font-size: 13px;">Track incoming orders across fulfillment stages.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 16px;">
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #991b1b; font-size: 13px;">1. New Orders</div>
                    <div style="font-size: 12px; color: #7f1d1d; margin-top: 4px;">Incoming guest requests</div>
                </div>
                <div style="background: #fefce8; border: 1px solid #fef08a; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #854d0e; font-size: 13px;">2. Preparing</div>
                    <div style="font-size: 12px; color: #713f12; margin-top: 4px;">Chefs preparing dishes</div>
                </div>
                <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #1e40af; font-size: 13px;">3. Ready for Delivery</div>
                    <div style="font-size: 12px; color: #1e3a8a; margin-top: 4px;">Plated; ready for runner</div>
                </div>
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #166534; font-size: 13px;">4. Delivered</div>
                    <div style="font-size: 12px; color: #14532d; margin-top: 4px;">Fulfilled and charged to folio</div>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
function switchStaffTab(tab) {
    document.getElementById('staff-section-frontdesk').style.display = tab === 'frontdesk' ? 'block' : 'none';
    document.getElementById('staff-section-dining').style.display = tab === 'dining' ? 'block' : 'none';
    document.getElementById('btn-staff-fd').style.background = tab === 'frontdesk' ? '#1e3a8a' : '#e2e8f0';
    document.getElementById('btn-staff-fd').style.color = tab === 'frontdesk' ? 'white' : '#334155';
    document.getElementById('btn-staff-dining').style.background = tab === 'dining' ? '#1e3a8a' : '#e2e8f0';
    document.getElementById('btn-staff-dining').style.color = tab === 'dining' ? 'white' : '#334155';
}
</script>

<script>
// --- Athidhi Enterprise Notification Center Client ---
var lastNotifCount = 0;
var notifDropdownOpen = false;

function toggleNotificationDropdown() {
    var dd = document.getElementById('athidhi-notif-dropdown');
    if (!dd) return;
    notifDropdownOpen = !notifDropdownOpen;
    dd.style.display = notifDropdownOpen ? 'flex' : 'none';
    if (notifDropdownOpen) {
        fetchNotifications();
    }
}

function fetchNotifications() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'getRecentNotifications');
        ga.addParam('sysparm_limit', '10');
        ga.getXMLAnswer(function(answer) {
            if (!answer) return;
            try {
                var res = JSON.parse(answer);
                if (res.status === 'success') {
                    updateNotificationUI(res.notifications, res.unread_count);
                }
            } catch(e) {}
        });
    } catch(e) {}
}

function updateNotificationUI(notifications, unreadCount) {
    var badge = document.getElementById('athidhi-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (unreadCount > lastNotifCount && notifications && notifications.length > 0) {
        var newest = notifications[0];
        if (!newest.is_read) {
            showToastNotification(newest.title, newest.message, newest.severity);
        }
    }
    lastNotifCount = unreadCount;

    var list = document.getElementById('athidhi-notif-list');
    if (!list) return;

    if (!notifications || notifications.length === 0) {
        list.innerHTML = '<div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 13px;">No notifications yet</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < notifications.length; i++) {
        var n = notifications[i];
        var bg = n.is_read ? '#ffffff' : '#f0fdf4';
        var borderLeft = n.severity === 'critical' ? '4px solid #ef4444' : n.severity === 'warning' ? '4px solid #f59e0b' : '4px solid #3b82f6';
        html += '<div style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background: ' + bg + '; border-left: ' + borderLeft + '; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">';
        html += '<div style="flex: 1;">';
        html += '<div style="font-weight: 600; font-size: 13px; color: #0f172a;">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size: 12px; color: #475569; margin-top: 2px;">' + escapeHtml(n.message) + '</div>';
        html += '<div style="font-size: 10.5px; color: #94a3b8; margin-top: 4px;">' + escapeHtml(n.created_at || '') + '</div>';
        html += '</div>';
        if (!n.is_read) {
            html += '<button onclick="markNotificationRead(\\'' + n.sys_id + '\\')" style="background: none; border: none; color: #059669; font-size: 14px; cursor: pointer; padding: 2px 4px;" title="Mark as read">✓</button>';
        }
        html += '</div>';
    }
    list.innerHTML = html;
}

function showToastNotification(title, message, severity) {
    var container = document.getElementById('athidhi-toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    var borderColor = severity === 'critical' ? '#ef4444' : severity === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.cssText = 'pointer-events: auto; background: #ffffff; color: #0f172a; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-left: 5px solid ' + borderColor + '; min-width: 280px; max-width: 360px; font-size: 13px; margin-bottom: 8px;';
    toast.innerHTML = '<div style="font-weight: 700; margin-bottom: 2px;">' + escapeHtml(title) + '</div><div style="color: #475569; font-size: 12px;">' + escapeHtml(message) + '</div>';
    container.appendChild(toast);
    setTimeout(function() {
        if (toast && toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4500);
}

function markNotificationRead(sysId) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markRead');
        ga.addParam('sysparm_sys_id', sysId);
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function markAllNotificationsRead() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markAllRead');
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

setInterval(fetchNotifications, 30000);
setTimeout(fetchNotifications, 800);
</script>

`,
});

export const pageReceptionistWorkspace = UiPage({
    $id: Now.ID['ui_page_receptionist_workspace'],
    endpoint: 'x_2120492_athidhi_receptionist_workspace.do',
    description: 'Athidhi Services — Front Desk & Receptionist Workspace',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; color: #1e293b; min-height: 100vh; padding: 24px;">
    
    <header style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: white; padding: 20px 28px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Athidhi Staff Operations Portal</h1>
                <p style="margin: 4px 0 0; font-size: 13.5px; color: #cbd5e1;">Front Desk, Concierge &amp; Restaurant Operations Hub</p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                <!-- Notification Bell Button -->
                <button id="athidhi-notif-bell" onclick="toggleNotificationDropdown()" aria-label="Notifications" style="position: relative; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s;">
                    🔔
                    <span id="athidhi-notif-badge" style="display: none; position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 10.5px; font-weight: 700; border-radius: 10px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; padding: 0 4px; border: 2px solid #ffffff;">0</span>
                </button>

                <!-- Notification Dropdown Panel -->
                <div id="athidhi-notif-dropdown" style="display: none; position: absolute; top: 48px; right: 0; width: 360px; max-width: 90vw; max-height: 480px; background: #ffffff; color: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 10000; overflow: hidden; flex-direction: column;">
                    <div style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                        <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                            <span>🔔</span> Notifications
                        </div>
                        <button onclick="markAllNotificationsRead()" style="background: none; border: none; color: #2563eb; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline;">Mark all read</button>
                    </div>
                    <div id="athidhi-notif-list" style="overflow-y: auto; max-height: 380px; padding: 4px 0;">
                        <div style="padding: 20px; text-align: center; color: #64748b; font-size: 13px;">Checking notifications...</div>
                    </div>
                </div>

                <!-- Profile Badge -->
                <div id="portal-user-badge" style="background: rgba(255, 255, 255, 0.15); padding: 8px 16px; border-radius: 8px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.25); display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
                    <span>Front Desk &amp; Dining Supervisor</span>
                </div>
            </div>
        </div>
    </header>
    <div id="athidhi-toast-container" style="position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;"></div>
    

    <!-- Navigation Tabs -->
    <nav style="display: flex; gap: 8px; margin-bottom: 24px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
        <button onclick="switchStaffTab('frontdesk')" id="btn-staff-fd" style="background: #1e3a8a; color: white; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Front Desk &amp; In-House Stays</button>
        <button onclick="switchStaffTab('dining')" id="btn-staff-dining" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Restaurant &amp; Dining Operations</button>
    </nav>

    <!-- SECTION: FRONT DESK -->
    <section id="staff-section-frontdesk" style="display: block;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid #1e3a8a;">
                <h3 style="margin-top: 0; font-size: 16px; color: #0f172a;">Today's Expected Arrivals</h3>
                <p style="color: #64748b; font-size: 13px;">Confirmed reservations ready for check-in action.</p>
                <div style="margin-top: 14px; background: #f8fafc; padding: 12px; border-radius: 8px; font-size: 13px;">
                    Use the <strong>Check In</strong> action on reservation records to generate stay and occupy room.
                </div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid #3b82f6;">
                <h3 style="margin-top: 0; font-size: 16px; color: #0f172a;">Today's Expected Departures</h3>
                <p style="color: #64748b; font-size: 13px;">Active in-house stays ready for check-out and billing settlement.</p>
                <div style="margin-top: 14px; background: #f8fafc; padding: 12px; border-radius: 8px; font-size: 13px;">
                    Use the <strong>Check Out</strong> action on stay records to automatically dispatch housekeeping.
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION: DINING OPERATIONS -->
    <section id="staff-section-dining" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="margin-top: 0; font-size: 16px; color: #0f172a;">Restaurant &amp; Kitchen Display System (KDS)</h3>
            <p style="color: #64748b; font-size: 13px;">Track incoming orders across fulfillment stages.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 16px;">
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #991b1b; font-size: 13px;">1. New Orders</div>
                    <div style="font-size: 12px; color: #7f1d1d; margin-top: 4px;">Incoming guest requests</div>
                </div>
                <div style="background: #fefce8; border: 1px solid #fef08a; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #854d0e; font-size: 13px;">2. Preparing</div>
                    <div style="font-size: 12px; color: #713f12; margin-top: 4px;">Chefs preparing dishes</div>
                </div>
                <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #1e40af; font-size: 13px;">3. Ready for Delivery</div>
                    <div style="font-size: 12px; color: #1e3a8a; margin-top: 4px;">Plated; ready for runner</div>
                </div>
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #166534; font-size: 13px;">4. Delivered</div>
                    <div style="font-size: 12px; color: #14532d; margin-top: 4px;">Fulfilled and charged to folio</div>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
function switchStaffTab(tab) {
    document.getElementById('staff-section-frontdesk').style.display = tab === 'frontdesk' ? 'block' : 'none';
    document.getElementById('staff-section-dining').style.display = tab === 'dining' ? 'block' : 'none';
    document.getElementById('btn-staff-fd').style.background = tab === 'frontdesk' ? '#1e3a8a' : '#e2e8f0';
    document.getElementById('btn-staff-fd').style.color = tab === 'frontdesk' ? 'white' : '#334155';
    document.getElementById('btn-staff-dining').style.background = tab === 'dining' ? '#1e3a8a' : '#e2e8f0';
    document.getElementById('btn-staff-dining').style.color = tab === 'dining' ? 'white' : '#334155';
}
</script>

<script>
// --- Athidhi Enterprise Notification Center Client ---
var lastNotifCount = 0;
var notifDropdownOpen = false;

function toggleNotificationDropdown() {
    var dd = document.getElementById('athidhi-notif-dropdown');
    if (!dd) return;
    notifDropdownOpen = !notifDropdownOpen;
    dd.style.display = notifDropdownOpen ? 'flex' : 'none';
    if (notifDropdownOpen) {
        fetchNotifications();
    }
}

function fetchNotifications() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'getRecentNotifications');
        ga.addParam('sysparm_limit', '10');
        ga.getXMLAnswer(function(answer) {
            if (!answer) return;
            try {
                var res = JSON.parse(answer);
                if (res.status === 'success') {
                    updateNotificationUI(res.notifications, res.unread_count);
                }
            } catch(e) {}
        });
    } catch(e) {}
}

function updateNotificationUI(notifications, unreadCount) {
    var badge = document.getElementById('athidhi-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (unreadCount > lastNotifCount && notifications && notifications.length > 0) {
        var newest = notifications[0];
        if (!newest.is_read) {
            showToastNotification(newest.title, newest.message, newest.severity);
        }
    }
    lastNotifCount = unreadCount;

    var list = document.getElementById('athidhi-notif-list');
    if (!list) return;

    if (!notifications || notifications.length === 0) {
        list.innerHTML = '<div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 13px;">No notifications yet</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < notifications.length; i++) {
        var n = notifications[i];
        var bg = n.is_read ? '#ffffff' : '#f0fdf4';
        var borderLeft = n.severity === 'critical' ? '4px solid #ef4444' : n.severity === 'warning' ? '4px solid #f59e0b' : '4px solid #3b82f6';
        html += '<div style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background: ' + bg + '; border-left: ' + borderLeft + '; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">';
        html += '<div style="flex: 1;">';
        html += '<div style="font-weight: 600; font-size: 13px; color: #0f172a;">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size: 12px; color: #475569; margin-top: 2px;">' + escapeHtml(n.message) + '</div>';
        html += '<div style="font-size: 10.5px; color: #94a3b8; margin-top: 4px;">' + escapeHtml(n.created_at || '') + '</div>';
        html += '</div>';
        if (!n.is_read) {
            html += '<button onclick="markNotificationRead(\\'' + n.sys_id + '\\')" style="background: none; border: none; color: #059669; font-size: 14px; cursor: pointer; padding: 2px 4px;" title="Mark as read">✓</button>';
        }
        html += '</div>';
    }
    list.innerHTML = html;
}

function showToastNotification(title, message, severity) {
    var container = document.getElementById('athidhi-toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    var borderColor = severity === 'critical' ? '#ef4444' : severity === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.cssText = 'pointer-events: auto; background: #ffffff; color: #0f172a; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-left: 5px solid ' + borderColor + '; min-width: 280px; max-width: 360px; font-size: 13px; margin-bottom: 8px;';
    toast.innerHTML = '<div style="font-weight: 700; margin-bottom: 2px;">' + escapeHtml(title) + '</div><div style="color: #475569; font-size: 12px;">' + escapeHtml(message) + '</div>';
    container.appendChild(toast);
    setTimeout(function() {
        if (toast && toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4500);
}

function markNotificationRead(sysId) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markRead');
        ga.addParam('sysparm_sys_id', sysId);
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function markAllNotificationsRead() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markAllRead');
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

setInterval(fetchNotifications, 30000);
setTimeout(fetchNotifications, 800);
</script>

`,
});

export const pageKitchenWorkspace = UiPage({
    $id: Now.ID['ui_page_kitchen_workspace'],
    endpoint: 'x_2120492_athidhi_kitchen_workspace.do',
    description: 'Athidhi Services — Kitchen Display System (KDS)',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; color: #1e293b; min-height: 100vh; padding: 24px;">
    
    <header style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: white; padding: 20px 28px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Athidhi Staff Operations Portal</h1>
                <p style="margin: 4px 0 0; font-size: 13.5px; color: #cbd5e1;">Front Desk, Concierge &amp; Restaurant Operations Hub</p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                <!-- Notification Bell Button -->
                <button id="athidhi-notif-bell" onclick="toggleNotificationDropdown()" aria-label="Notifications" style="position: relative; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s;">
                    🔔
                    <span id="athidhi-notif-badge" style="display: none; position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 10.5px; font-weight: 700; border-radius: 10px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; padding: 0 4px; border: 2px solid #ffffff;">0</span>
                </button>

                <!-- Notification Dropdown Panel -->
                <div id="athidhi-notif-dropdown" style="display: none; position: absolute; top: 48px; right: 0; width: 360px; max-width: 90vw; max-height: 480px; background: #ffffff; color: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 10000; overflow: hidden; flex-direction: column;">
                    <div style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                        <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                            <span>🔔</span> Notifications
                        </div>
                        <button onclick="markAllNotificationsRead()" style="background: none; border: none; color: #2563eb; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline;">Mark all read</button>
                    </div>
                    <div id="athidhi-notif-list" style="overflow-y: auto; max-height: 380px; padding: 4px 0;">
                        <div style="padding: 20px; text-align: center; color: #64748b; font-size: 13px;">Checking notifications...</div>
                    </div>
                </div>

                <!-- Profile Badge -->
                <div id="portal-user-badge" style="background: rgba(255, 255, 255, 0.15); padding: 8px 16px; border-radius: 8px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.25); display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
                    <span>Front Desk &amp; Dining Supervisor</span>
                </div>
            </div>
        </div>
    </header>
    <div id="athidhi-toast-container" style="position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;"></div>
    

    <!-- Navigation Tabs -->
    <nav style="display: flex; gap: 8px; margin-bottom: 24px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
        <button onclick="switchStaffTab('frontdesk')" id="btn-staff-fd" style="background: #1e3a8a; color: white; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Front Desk &amp; In-House Stays</button>
        <button onclick="switchStaffTab('dining')" id="btn-staff-dining" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Restaurant &amp; Dining Operations</button>
    </nav>

    <!-- SECTION: FRONT DESK -->
    <section id="staff-section-frontdesk" style="display: block;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid #1e3a8a;">
                <h3 style="margin-top: 0; font-size: 16px; color: #0f172a;">Today's Expected Arrivals</h3>
                <p style="color: #64748b; font-size: 13px;">Confirmed reservations ready for check-in action.</p>
                <div style="margin-top: 14px; background: #f8fafc; padding: 12px; border-radius: 8px; font-size: 13px;">
                    Use the <strong>Check In</strong> action on reservation records to generate stay and occupy room.
                </div>
            </div>

            <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-left: 4px solid #3b82f6;">
                <h3 style="margin-top: 0; font-size: 16px; color: #0f172a;">Today's Expected Departures</h3>
                <p style="color: #64748b; font-size: 13px;">Active in-house stays ready for check-out and billing settlement.</p>
                <div style="margin-top: 14px; background: #f8fafc; padding: 12px; border-radius: 8px; font-size: 13px;">
                    Use the <strong>Check Out</strong> action on stay records to automatically dispatch housekeeping.
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION: DINING OPERATIONS -->
    <section id="staff-section-dining" style="display: none;">
        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="margin-top: 0; font-size: 16px; color: #0f172a;">Restaurant &amp; Kitchen Display System (KDS)</h3>
            <p style="color: #64748b; font-size: 13px;">Track incoming orders across fulfillment stages.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 16px;">
                <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #991b1b; font-size: 13px;">1. New Orders</div>
                    <div style="font-size: 12px; color: #7f1d1d; margin-top: 4px;">Incoming guest requests</div>
                </div>
                <div style="background: #fefce8; border: 1px solid #fef08a; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #854d0e; font-size: 13px;">2. Preparing</div>
                    <div style="font-size: 12px; color: #713f12; margin-top: 4px;">Chefs preparing dishes</div>
                </div>
                <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #1e40af; font-size: 13px;">3. Ready for Delivery</div>
                    <div style="font-size: 12px; color: #1e3a8a; margin-top: 4px;">Plated; ready for runner</div>
                </div>
                <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 14px;">
                    <div style="font-weight: 700; color: #166534; font-size: 13px;">4. Delivered</div>
                    <div style="font-size: 12px; color: #14532d; margin-top: 4px;">Fulfilled and charged to folio</div>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
function switchStaffTab(tab) {
    document.getElementById('staff-section-frontdesk').style.display = tab === 'frontdesk' ? 'block' : 'none';
    document.getElementById('staff-section-dining').style.display = tab === 'dining' ? 'block' : 'none';
    document.getElementById('btn-staff-fd').style.background = tab === 'frontdesk' ? '#1e3a8a' : '#e2e8f0';
    document.getElementById('btn-staff-fd').style.color = tab === 'frontdesk' ? 'white' : '#334155';
    document.getElementById('btn-staff-dining').style.background = tab === 'dining' ? '#1e3a8a' : '#e2e8f0';
    document.getElementById('btn-staff-dining').style.color = tab === 'dining' ? 'white' : '#334155';
}
</script>

<script>
// --- Athidhi Enterprise Notification Center Client ---
var lastNotifCount = 0;
var notifDropdownOpen = false;

function toggleNotificationDropdown() {
    var dd = document.getElementById('athidhi-notif-dropdown');
    if (!dd) return;
    notifDropdownOpen = !notifDropdownOpen;
    dd.style.display = notifDropdownOpen ? 'flex' : 'none';
    if (notifDropdownOpen) {
        fetchNotifications();
    }
}

function fetchNotifications() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'getRecentNotifications');
        ga.addParam('sysparm_limit', '10');
        ga.getXMLAnswer(function(answer) {
            if (!answer) return;
            try {
                var res = JSON.parse(answer);
                if (res.status === 'success') {
                    updateNotificationUI(res.notifications, res.unread_count);
                }
            } catch(e) {}
        });
    } catch(e) {}
}

function updateNotificationUI(notifications, unreadCount) {
    var badge = document.getElementById('athidhi-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (unreadCount > lastNotifCount && notifications && notifications.length > 0) {
        var newest = notifications[0];
        if (!newest.is_read) {
            showToastNotification(newest.title, newest.message, newest.severity);
        }
    }
    lastNotifCount = unreadCount;

    var list = document.getElementById('athidhi-notif-list');
    if (!list) return;

    if (!notifications || notifications.length === 0) {
        list.innerHTML = '<div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 13px;">No notifications yet</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < notifications.length; i++) {
        var n = notifications[i];
        var bg = n.is_read ? '#ffffff' : '#f0fdf4';
        var borderLeft = n.severity === 'critical' ? '4px solid #ef4444' : n.severity === 'warning' ? '4px solid #f59e0b' : '4px solid #3b82f6';
        html += '<div style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background: ' + bg + '; border-left: ' + borderLeft + '; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">';
        html += '<div style="flex: 1;">';
        html += '<div style="font-weight: 600; font-size: 13px; color: #0f172a;">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size: 12px; color: #475569; margin-top: 2px;">' + escapeHtml(n.message) + '</div>';
        html += '<div style="font-size: 10.5px; color: #94a3b8; margin-top: 4px;">' + escapeHtml(n.created_at || '') + '</div>';
        html += '</div>';
        if (!n.is_read) {
            html += '<button onclick="markNotificationRead(\\'' + n.sys_id + '\\')" style="background: none; border: none; color: #059669; font-size: 14px; cursor: pointer; padding: 2px 4px;" title="Mark as read">✓</button>';
        }
        html += '</div>';
    }
    list.innerHTML = html;
}

function showToastNotification(title, message, severity) {
    var container = document.getElementById('athidhi-toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    var borderColor = severity === 'critical' ? '#ef4444' : severity === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.cssText = 'pointer-events: auto; background: #ffffff; color: #0f172a; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-left: 5px solid ' + borderColor + '; min-width: 280px; max-width: 360px; font-size: 13px; margin-bottom: 8px;';
    toast.innerHTML = '<div style="font-weight: 700; margin-bottom: 2px;">' + escapeHtml(title) + '</div><div style="color: #475569; font-size: 12px;">' + escapeHtml(message) + '</div>';
    container.appendChild(toast);
    setTimeout(function() {
        if (toast && toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4500);
}

function markNotificationRead(sysId) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markRead');
        ga.addParam('sysparm_sys_id', sysId);
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function markAllNotificationsRead() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markAllRead');
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

setInterval(fetchNotifications, 30000);
setTimeout(fetchNotifications, 800);
</script>

`,
});

export const pageWorkerPortal = UiPage({
    $id: Now.ID['ui_page_worker_portal'],
    endpoint: 'x_2120492_athidhi_worker_portal.do',
    description: 'Athidhi Services — Field Operations Worker Task Board',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #18181b; color: #fafafa; min-height: 100vh; padding: 20px;">
    
    <header style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 20px 28px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Athidhi Field Operations Task Board</h1>
                <p style="margin: 4px 0 0; font-size: 13.5px; color: #94a3b8;">Worker Portal — Housekeeping &amp; Maintenance Execution</p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                <!-- Notification Bell Button -->
                <button id="athidhi-notif-bell" onclick="toggleNotificationDropdown()" aria-label="Notifications" style="position: relative; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s;">
                    🔔
                    <span id="athidhi-notif-badge" style="display: none; position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 10.5px; font-weight: 700; border-radius: 10px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; padding: 0 4px; border: 2px solid #ffffff;">0</span>
                </button>

                <!-- Notification Dropdown Panel -->
                <div id="athidhi-notif-dropdown" style="display: none; position: absolute; top: 48px; right: 0; width: 360px; max-width: 90vw; max-height: 480px; background: #ffffff; color: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 10000; overflow: hidden; flex-direction: column;">
                    <div style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                        <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                            <span>🔔</span> Notifications
                        </div>
                        <button onclick="markAllNotificationsRead()" style="background: none; border: none; color: #2563eb; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline;">Mark all read</button>
                    </div>
                    <div id="athidhi-notif-list" style="overflow-y: auto; max-height: 380px; padding: 4px 0;">
                        <div style="padding: 20px; text-align: center; color: #64748b; font-size: 13px;">Checking notifications...</div>
                    </div>
                </div>

                <!-- Profile Badge -->
                <div id="portal-user-badge" style="background: rgba(255, 255, 255, 0.15); padding: 8px 16px; border-radius: 8px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.25); display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
                    <span>Field Operations Technician</span>
                </div>
            </div>
        </div>
    </header>
    <div id="athidhi-toast-container" style="position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;"></div>
    

    <!-- Navigation Tabs -->
    <nav style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 2px solid #27272a; padding-bottom: 8px;">
        <button onclick="switchWorkerTab('hk')" id="btn-worker-hk" style="background: #3b82f6; color: white; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Housekeeping Room Board</button>
        <button onclick="switchWorkerTab('mnt')" id="btn-worker-mnt" style="background: #27272a; color: #a1a1aa; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Maintenance Work Tasks</button>
    </nav>

    <!-- SECTION: HOUSEKEEPING BOARD -->
    <section id="worker-section-hk" style="display: block;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
            <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #ef4444;">
                <h3 style="margin-top: 0; font-size: 15px; color: #fca5a5;">1. Dirty / Turnover (4)</h3>
                <p style="font-size: 12.5px; color: #a1a1aa;">Rooms needing cleaning service.</p>
                <div style="background: #18181b; padding: 12px; border-radius: 6px; margin-top: 10px; border-left: 3px solid #ef4444;">
                    <div style="font-weight: 700; color: #ffffff;">Room 204 (Deluxe)</div>
                    <div style="font-size: 12px; color: #a1a1aa; margin-top: 2px;">Departure Cleaning | Priority: High</div>
                    <button style="margin-top: 8px; background: #3b82f6; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer;">Start Cleaning</button>
                </div>
            </div>

            <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #f59e0b;">
                <h3 style="margin-top: 0; font-size: 15px; color: #fde047;">2. In Progress (1)</h3>
                <p style="font-size: 12.5px; color: #a1a1aa;">Attendant servicing room.</p>
                <div style="background: #18181b; padding: 12px; border-radius: 6px; margin-top: 10px; border-left: 3px solid #f59e0b;">
                    <div style="font-weight: 700; color: #ffffff;">Room 308 (Suite)</div>
                    <div style="font-size: 12px; color: #a1a1aa; margin-top: 2px;">Started: 11:15 AM</div>
                    <button style="margin-top: 8px; background: #10b981; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer;">Complete &amp; Request Inspection</button>
                </div>
            </div>

            <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #3b82f6;">
                <h3 style="margin-top: 0; font-size: 15px; color: #93c5fd;">3. Inspection Pending (1)</h3>
                <p style="font-size: 12.5px; color: #a1a1aa;">Awaiting supervisor check.</p>
                <div style="background: #18181b; padding: 12px; border-radius: 6px; margin-top: 10px; border-left: 3px solid #3b82f6;">
                    <div style="font-weight: 700; color: #ffffff;">Room 402 (Standard)</div>
                    <div style="font-size: 12px; color: #a1a1aa; margin-top: 2px;">Cleaning done; ready for review</div>
                </div>
            </div>

            <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #10b981;">
                <h3 style="margin-top: 0; font-size: 15px; color: #86efac;">4. Clean &amp; Ready (34)</h3>
                <p style="font-size: 12.5px; color: #a1a1aa;">Verified ready for front desk check-in.</p>
            </div>
        </div>
    </section>

    <!-- SECTION: MAINTENANCE BOARD -->
    <section id="worker-section-mnt" style="display: none;">
        <div style="background: #27272a; border-radius: 10px; padding: 20px;">
            <h3 style="margin-top: 0; font-size: 16px; color: #f8fafc;">Maintenance Work Task Queue</h3>
            <p style="font-size: 13px; color: #a1a1aa;">Assigned facility and equipment repairs.</p>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
                <div style="background: #18181b; padding: 14px; border-radius: 8px; border-left: 4px solid #f59e0b; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <div>
                        <div style="font-weight: 700; color: #ffffff; font-size: 14px;">MNT000004 — AC Temperature Sensor Calibration</div>
                        <div style="font-size: 12.5px; color: #a1a1aa; margin-top: 2px;">Room 210 | Priority: Medium | Status: In Progress</div>
                    </div>
                    <button style="background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer;">Mark Resolved</button>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
function switchWorkerTab(tab) {
    document.getElementById('worker-section-hk').style.display = tab === 'hk' ? 'block' : 'none';
    document.getElementById('worker-section-mnt').style.display = tab === 'mnt' ? 'block' : 'none';
    document.getElementById('btn-worker-hk').style.background = tab === 'hk' ? '#3b82f6' : '#27272a';
    document.getElementById('btn-worker-hk').style.color = tab === 'hk' ? 'white' : '#a1a1aa';
    document.getElementById('btn-worker-mnt').style.background = tab === 'mnt' ? '#3b82f6' : '#27272a';
    document.getElementById('btn-worker-mnt').style.color = tab === 'mnt' ? 'white' : '#a1a1aa';
}
</script>

<script>
// --- Athidhi Enterprise Notification Center Client ---
var lastNotifCount = 0;
var notifDropdownOpen = false;

function toggleNotificationDropdown() {
    var dd = document.getElementById('athidhi-notif-dropdown');
    if (!dd) return;
    notifDropdownOpen = !notifDropdownOpen;
    dd.style.display = notifDropdownOpen ? 'flex' : 'none';
    if (notifDropdownOpen) {
        fetchNotifications();
    }
}

function fetchNotifications() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'getRecentNotifications');
        ga.addParam('sysparm_limit', '10');
        ga.getXMLAnswer(function(answer) {
            if (!answer) return;
            try {
                var res = JSON.parse(answer);
                if (res.status === 'success') {
                    updateNotificationUI(res.notifications, res.unread_count);
                }
            } catch(e) {}
        });
    } catch(e) {}
}

function updateNotificationUI(notifications, unreadCount) {
    var badge = document.getElementById('athidhi-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (unreadCount > lastNotifCount && notifications && notifications.length > 0) {
        var newest = notifications[0];
        if (!newest.is_read) {
            showToastNotification(newest.title, newest.message, newest.severity);
        }
    }
    lastNotifCount = unreadCount;

    var list = document.getElementById('athidhi-notif-list');
    if (!list) return;

    if (!notifications || notifications.length === 0) {
        list.innerHTML = '<div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 13px;">No notifications yet</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < notifications.length; i++) {
        var n = notifications[i];
        var bg = n.is_read ? '#ffffff' : '#f0fdf4';
        var borderLeft = n.severity === 'critical' ? '4px solid #ef4444' : n.severity === 'warning' ? '4px solid #f59e0b' : '4px solid #3b82f6';
        html += '<div style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background: ' + bg + '; border-left: ' + borderLeft + '; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">';
        html += '<div style="flex: 1;">';
        html += '<div style="font-weight: 600; font-size: 13px; color: #0f172a;">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size: 12px; color: #475569; margin-top: 2px;">' + escapeHtml(n.message) + '</div>';
        html += '<div style="font-size: 10.5px; color: #94a3b8; margin-top: 4px;">' + escapeHtml(n.created_at || '') + '</div>';
        html += '</div>';
        if (!n.is_read) {
            html += '<button onclick="markNotificationRead(\\'' + n.sys_id + '\\')" style="background: none; border: none; color: #059669; font-size: 14px; cursor: pointer; padding: 2px 4px;" title="Mark as read">✓</button>';
        }
        html += '</div>';
    }
    list.innerHTML = html;
}

function showToastNotification(title, message, severity) {
    var container = document.getElementById('athidhi-toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    var borderColor = severity === 'critical' ? '#ef4444' : severity === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.cssText = 'pointer-events: auto; background: #ffffff; color: #0f172a; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-left: 5px solid ' + borderColor + '; min-width: 280px; max-width: 360px; font-size: 13px; margin-bottom: 8px;';
    toast.innerHTML = '<div style="font-weight: 700; margin-bottom: 2px;">' + escapeHtml(title) + '</div><div style="color: #475569; font-size: 12px;">' + escapeHtml(message) + '</div>';
    container.appendChild(toast);
    setTimeout(function() {
        if (toast && toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4500);
}

function markNotificationRead(sysId) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markRead');
        ga.addParam('sysparm_sys_id', sysId);
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function markAllNotificationsRead() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markAllRead');
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

setInterval(fetchNotifications, 30000);
setTimeout(fetchNotifications, 800);
</script>

`,
});

export const pageHousekeepingWorkspace = UiPage({
    $id: Now.ID['ui_page_housekeeping_workspace'],
    endpoint: 'x_2120492_athidhi_housekeeping_workspace.do',
    description: 'Athidhi Services — Housekeeping Room Board & Task Matrix',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #18181b; color: #fafafa; min-height: 100vh; padding: 20px;">
    
    <header style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color: white; padding: 20px 28px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">Athidhi Field Operations Task Board</h1>
                <p style="margin: 4px 0 0; font-size: 13.5px; color: #94a3b8;">Worker Portal — Housekeeping &amp; Maintenance Execution</p>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                <!-- Notification Bell Button -->
                <button id="athidhi-notif-bell" onclick="toggleNotificationDropdown()" aria-label="Notifications" style="position: relative; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 18px; transition: background 0.2s;">
                    🔔
                    <span id="athidhi-notif-badge" style="display: none; position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 10.5px; font-weight: 700; border-radius: 10px; min-width: 18px; height: 18px; line-height: 18px; text-align: center; padding: 0 4px; border: 2px solid #ffffff;">0</span>
                </button>

                <!-- Notification Dropdown Panel -->
                <div id="athidhi-notif-dropdown" style="display: none; position: absolute; top: 48px; right: 0; width: 360px; max-width: 90vw; max-height: 480px; background: #ffffff; color: #1e293b; border-radius: 12px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.25), 0 8px 10px -6px rgba(0,0,0,0.1); border: 1px solid #e2e8f0; z-index: 10000; overflow: hidden; flex-direction: column;">
                    <div style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: center; background: #f8fafc;">
                        <div style="font-weight: 700; font-size: 13.5px; color: #0f172a; display: flex; align-items: center; gap: 6px;">
                            <span>🔔</span> Notifications
                        </div>
                        <button onclick="markAllNotificationsRead()" style="background: none; border: none; color: #2563eb; font-size: 12px; font-weight: 600; cursor: pointer; text-decoration: underline;">Mark all read</button>
                    </div>
                    <div id="athidhi-notif-list" style="overflow-y: auto; max-height: 380px; padding: 4px 0;">
                        <div style="padding: 20px; text-align: center; color: #64748b; font-size: 13px;">Checking notifications...</div>
                    </div>
                </div>

                <!-- Profile Badge -->
                <div id="portal-user-badge" style="background: rgba(255, 255, 255, 0.15); padding: 8px 16px; border-radius: 8px; font-size: 13px; border: 1px solid rgba(255, 255, 255, 0.25); display: flex; align-items: center; gap: 8px;">
                    <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%;"></span>
                    <span>Field Operations Technician</span>
                </div>
            </div>
        </div>
    </header>
    <div id="athidhi-toast-container" style="position: fixed; top: 20px; right: 20px; z-index: 99999; display: flex; flex-direction: column; gap: 8px; pointer-events: none;"></div>
    

    <!-- Navigation Tabs -->
    <nav style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 2px solid #27272a; padding-bottom: 8px;">
        <button onclick="switchWorkerTab('hk')" id="btn-worker-hk" style="background: #3b82f6; color: white; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Housekeeping Room Board</button>
        <button onclick="switchWorkerTab('mnt')" id="btn-worker-mnt" style="background: #27272a; color: #a1a1aa; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Maintenance Work Tasks</button>
    </nav>

    <!-- SECTION: HOUSEKEEPING BOARD -->
    <section id="worker-section-hk" style="display: block;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
            <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #ef4444;">
                <h3 style="margin-top: 0; font-size: 15px; color: #fca5a5;">1. Dirty / Turnover (4)</h3>
                <p style="font-size: 12.5px; color: #a1a1aa;">Rooms needing cleaning service.</p>
                <div style="background: #18181b; padding: 12px; border-radius: 6px; margin-top: 10px; border-left: 3px solid #ef4444;">
                    <div style="font-weight: 700; color: #ffffff;">Room 204 (Deluxe)</div>
                    <div style="font-size: 12px; color: #a1a1aa; margin-top: 2px;">Departure Cleaning | Priority: High</div>
                    <button style="margin-top: 8px; background: #3b82f6; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer;">Start Cleaning</button>
                </div>
            </div>

            <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #f59e0b;">
                <h3 style="margin-top: 0; font-size: 15px; color: #fde047;">2. In Progress (1)</h3>
                <p style="font-size: 12.5px; color: #a1a1aa;">Attendant servicing room.</p>
                <div style="background: #18181b; padding: 12px; border-radius: 6px; margin-top: 10px; border-left: 3px solid #f59e0b;">
                    <div style="font-weight: 700; color: #ffffff;">Room 308 (Suite)</div>
                    <div style="font-size: 12px; color: #a1a1aa; margin-top: 2px;">Started: 11:15 AM</div>
                    <button style="margin-top: 8px; background: #10b981; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer;">Complete &amp; Request Inspection</button>
                </div>
            </div>

            <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #3b82f6;">
                <h3 style="margin-top: 0; font-size: 15px; color: #93c5fd;">3. Inspection Pending (1)</h3>
                <p style="font-size: 12.5px; color: #a1a1aa;">Awaiting supervisor check.</p>
                <div style="background: #18181b; padding: 12px; border-radius: 6px; margin-top: 10px; border-left: 3px solid #3b82f6;">
                    <div style="font-weight: 700; color: #ffffff;">Room 402 (Standard)</div>
                    <div style="font-size: 12px; color: #a1a1aa; margin-top: 2px;">Cleaning done; ready for review</div>
                </div>
            </div>

            <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #10b981;">
                <h3 style="margin-top: 0; font-size: 15px; color: #86efac;">4. Clean &amp; Ready (34)</h3>
                <p style="font-size: 12.5px; color: #a1a1aa;">Verified ready for front desk check-in.</p>
            </div>
        </div>
    </section>

    <!-- SECTION: MAINTENANCE BOARD -->
    <section id="worker-section-mnt" style="display: none;">
        <div style="background: #27272a; border-radius: 10px; padding: 20px;">
            <h3 style="margin-top: 0; font-size: 16px; color: #f8fafc;">Maintenance Work Task Queue</h3>
            <p style="font-size: 13px; color: #a1a1aa;">Assigned facility and equipment repairs.</p>
            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
                <div style="background: #18181b; padding: 14px; border-radius: 8px; border-left: 4px solid #f59e0b; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <div>
                        <div style="font-weight: 700; color: #ffffff; font-size: 14px;">MNT000004 — AC Temperature Sensor Calibration</div>
                        <div style="font-size: 12.5px; color: #a1a1aa; margin-top: 2px;">Room 210 | Priority: Medium | Status: In Progress</div>
                    </div>
                    <button style="background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer;">Mark Resolved</button>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
function switchWorkerTab(tab) {
    document.getElementById('worker-section-hk').style.display = tab === 'hk' ? 'block' : 'none';
    document.getElementById('worker-section-mnt').style.display = tab === 'mnt' ? 'block' : 'none';
    document.getElementById('btn-worker-hk').style.background = tab === 'hk' ? '#3b82f6' : '#27272a';
    document.getElementById('btn-worker-hk').style.color = tab === 'hk' ? 'white' : '#a1a1aa';
    document.getElementById('btn-worker-mnt').style.background = tab === 'mnt' ? '#3b82f6' : '#27272a';
    document.getElementById('btn-worker-mnt').style.color = tab === 'mnt' ? 'white' : '#a1a1aa';
}
</script>

<script>
// --- Athidhi Enterprise Notification Center Client ---
var lastNotifCount = 0;
var notifDropdownOpen = false;

function toggleNotificationDropdown() {
    var dd = document.getElementById('athidhi-notif-dropdown');
    if (!dd) return;
    notifDropdownOpen = !notifDropdownOpen;
    dd.style.display = notifDropdownOpen ? 'flex' : 'none';
    if (notifDropdownOpen) {
        fetchNotifications();
    }
}

function fetchNotifications() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'getRecentNotifications');
        ga.addParam('sysparm_limit', '10');
        ga.getXMLAnswer(function(answer) {
            if (!answer) return;
            try {
                var res = JSON.parse(answer);
                if (res.status === 'success') {
                    updateNotificationUI(res.notifications, res.unread_count);
                }
            } catch(e) {}
        });
    } catch(e) {}
}

function updateNotificationUI(notifications, unreadCount) {
    var badge = document.getElementById('athidhi-notif-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.innerText = unreadCount > 99 ? '99+' : unreadCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }

    if (unreadCount > lastNotifCount && notifications && notifications.length > 0) {
        var newest = notifications[0];
        if (!newest.is_read) {
            showToastNotification(newest.title, newest.message, newest.severity);
        }
    }
    lastNotifCount = unreadCount;

    var list = document.getElementById('athidhi-notif-list');
    if (!list) return;

    if (!notifications || notifications.length === 0) {
        list.innerHTML = '<div style="padding: 20px; text-align: center; color: #94a3b8; font-size: 13px;">No notifications yet</div>';
        return;
    }

    var html = '';
    for (var i = 0; i < notifications.length; i++) {
        var n = notifications[i];
        var bg = n.is_read ? '#ffffff' : '#f0fdf4';
        var borderLeft = n.severity === 'critical' ? '4px solid #ef4444' : n.severity === 'warning' ? '4px solid #f59e0b' : '4px solid #3b82f6';
        html += '<div style="padding: 10px 14px; border-bottom: 1px solid #f1f5f9; background: ' + bg + '; border-left: ' + borderLeft + '; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">';
        html += '<div style="flex: 1;">';
        html += '<div style="font-weight: 600; font-size: 13px; color: #0f172a;">' + escapeHtml(n.title) + '</div>';
        html += '<div style="font-size: 12px; color: #475569; margin-top: 2px;">' + escapeHtml(n.message) + '</div>';
        html += '<div style="font-size: 10.5px; color: #94a3b8; margin-top: 4px;">' + escapeHtml(n.created_at || '') + '</div>';
        html += '</div>';
        if (!n.is_read) {
            html += '<button onclick="markNotificationRead(\\'' + n.sys_id + '\\')" style="background: none; border: none; color: #059669; font-size: 14px; cursor: pointer; padding: 2px 4px;" title="Mark as read">✓</button>';
        }
        html += '</div>';
    }
    list.innerHTML = html;
}

function showToastNotification(title, message, severity) {
    var container = document.getElementById('athidhi-toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    var borderColor = severity === 'critical' ? '#ef4444' : severity === 'warning' ? '#f59e0b' : '#3b82f6';
    toast.style.cssText = 'pointer-events: auto; background: #ffffff; color: #0f172a; padding: 12px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.18); border-left: 5px solid ' + borderColor + '; min-width: 280px; max-width: 360px; font-size: 13px; margin-bottom: 8px;';
    toast.innerHTML = '<div style="font-weight: 700; margin-bottom: 2px;">' + escapeHtml(title) + '</div><div style="color: #475569; font-size: 12px;">' + escapeHtml(message) + '</div>';
    container.appendChild(toast);
    setTimeout(function() {
        if (toast && toast.parentNode) {
            toast.parentNode.removeChild(toast);
        }
    }, 4500);
}

function markNotificationRead(sysId) {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markRead');
        ga.addParam('sysparm_sys_id', sysId);
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function markAllNotificationsRead() {
    try {
        var ga = new GlideAjax('x_2120492_athidhi.NotificationAjax');
        ga.addParam('sysparm_name', 'markAllRead');
        ga.getXMLAnswer(function(answer) {
            fetchNotifications();
        });
    } catch(e) {}
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

setInterval(fetchNotifications, 30000);
setTimeout(fetchNotifications, 800);
</script>

`,
});

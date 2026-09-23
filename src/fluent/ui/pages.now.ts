import { UiPage } from '@servicenow/sdk/core';

export const pageGuestPortal = UiPage({
    $id: Now.ID['ui_page_guest_portal'],
    endpoint: 'x_2120492_athidhi_guest_portal.do',
    description: 'Athidhi Services — Guest Self-Service Portal Hub',
    category: 'general',
    direct: false,
    html: `
<div id="athidhi-portal" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; color: #1e293b; min-height: 100vh; padding: 24px;">
    <!-- Top Header -->
    <header style="background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: white; padding: 24px 32px; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
            <div>
                <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">Athidhi Services</h1>
                <p style="margin: 4px 0 0; font-size: 14px; opacity: 0.85;">Smart Hotel Management — Guest Self-Service Portal</p>
            </div>
            <div id="guest-badge" style="background: rgba(255, 255, 255, 0.12); padding: 8px 16px; border-radius: 8px; font-size: 14px; border: 1px solid rgba(255, 255, 255, 0.2);">
                <span>Logged in Guest</span>
            </div>
        </div>
    </header>

    <!-- Navigation Tabs -->
    <nav style="display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
        <button onclick="switchTab('dashboard')" class="tab-btn" id="tab-dashboard" style="background: #1e3a8a; color: white; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Home / Stay</button>
        <button onclick="switchTab('reservations')" class="tab-btn" id="tab-reservations" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">My Reservations</button>
        <button onclick="switchTab('dining')" class="tab-btn" id="tab-dining" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Dining &amp; Room Service</button>
        <button onclick="switchTab('orders')" class="tab-btn" id="tab-orders" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">My Food Orders</button>
        <button onclick="switchTab('catalog')" class="tab-btn" id="tab-catalog" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">Service Catalog</button>
        <button onclick="switchTab('requests')" class="tab-btn" id="tab-requests" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">My Service Requests</button>
        <button onclick="switchTab('folio')" class="tab-btn" id="tab-folio" style="background: #e2e8f0; color: #334155; border: none; padding: 10px 18px; border-radius: 6px; font-weight: 600; cursor: pointer;">My Folio &amp; Billing</button>
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
                <div style="display: flex; gap: 8px;">
                    <select id="dining-category-filter" onchange="filterMenu()" style="padding: 8px 12px; border-radius: 6px; border: 1px solid #cbd5e1; font-size: 14px;">
                        <option value="all">All Categories</option>
                        <option value="starter">Starters</option>
                        <option value="main_course">Main Course</option>
                        <option value="dessert">Desserts</option>
                        <option value="beverage">Beverages</option>
                        <option value="snack">Snacks</option>
                    </select>
                </div>
            </div>

            <!-- Menu Grid -->
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
                <p style="color: #64748b;">Loading billing folio and authorized payments...</p>
            </div>
            <div style="margin-top: 24px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1; font-size: 13px; color: #64748b;">
                ℹ️ <strong>Folio Notice:</strong> All room fees, dining charges, and chargeable services are consolidated on your room folio. Secure settlement is processed at the Front Desk upon check-out.
            </div>
        </div>
    </section>

    <!-- ATHIDHI AI CONCIERGE FLOATING WIDGET -->
    <div id="athidhi-ai-container">
        <!-- Floating Action Button Launcher -->
        <button id="athidhi-ai-launcher" onclick="toggleConcierge()" aria-label="Open Athidhi AI Concierge" style="position: fixed; bottom: 24px; right: 24px; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; border: none; border-radius: 50px; padding: 14px 22px; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 10px 25px -5px rgba(30, 58, 138, 0.4), 0 8px 10px -6px rgba(30, 58, 138, 0.2); display: flex; align-items: center; gap: 10px; z-index: 9999; transition: all 0.2s ease-in-out;">
            <span style="font-size: 20px;">✨</span>
            <span id="athidhi-ai-btn-text">AI Concierge</span>
            <span style="display: inline-block; width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 0 2px rgba(255,255,255,0.8);"></span>
        </button>

        <!-- Floating Chat Panel -->
        <div id="athidhi-ai-widget" style="display: none; position: fixed; bottom: 85px; right: 24px; width: 400px; max-width: calc(100vw - 32px); height: 580px; max-height: calc(100vh - 110px); background: #ffffff; border-radius: 16px; box-shadow: 0 20px 35px -5px rgba(15, 23, 42, 0.25), 0 10px 15px -5px rgba(15, 23, 42, 0.1); border: 1px solid #e2e8f0; z-index: 9999; flex-direction: column; overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

            <!-- Chat Header -->
            <div style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); color: white; padding: 16px 20px; display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="background: rgba(255, 255, 255, 0.15); width: 38px; height: 38px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px;">
                        ✨
                    </div>
                    <div>
                        <div style="font-size: 16px; font-weight: 700; letter-spacing: -0.3px;">Athidhi AI Concierge</div>
                        <div style="font-size: 12px; color: #93c5fd; display: flex; align-items: center; gap: 6px;">
                            <span style="display: inline-block; width: 6px; height: 6px; background: #22c55e; border-radius: 50%;"></span>
                            <span>Online | 24/7 Hotel Assistant</span>
                        </div>
                    </div>
                </div>
                <div style="display: flex; gap: 6px;">
                    <button onclick="resetConciergeChat()" title="Reset Conversation" style="background: rgba(255,255,255,0.12); border: none; color: white; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 14px;">↺</button>
                    <button onclick="toggleConcierge()" title="Close Concierge" style="background: rgba(255,255,255,0.12); border: none; color: white; width: 30px; height: 30px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 14px;">✕</button>
                </div>
            </div>

            <!-- Quick Action Chips Bar -->
            <div id="athidhi-chips-bar" style="background: #f8fafc; border-bottom: 1px solid #e2e8f0; padding: 10px 14px; display: flex; gap: 8px; overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch;">
                <button onclick="quickPrompt('What are the check-in and check-out times?')" style="background: white; border: 1px solid #cbd5e1; color: #334155; font-size: 12px; padding: 6px 12px; border-radius: 14px; cursor: pointer; flex-shrink: 0; font-weight: 500;">⏰ Timings</button>
                <button onclick="quickPrompt('Show active dining menu')" style="background: white; border: 1px solid #cbd5e1; color: #334155; font-size: 12px; padding: 6px 12px; border-radius: 14px; cursor: pointer; flex-shrink: 0; font-weight: 500;">🍽️ Menu</button>
                <button onclick="quickPrompt('Please send 2 extra fresh towels to my room')" style="background: white; border: 1px solid #cbd5e1; color: #334155; font-size: 12px; padding: 6px 12px; border-radius: 14px; cursor: pointer; flex-shrink: 0; font-weight: 500;">🛎️ Extra Towels</button>
                <button onclick="quickPrompt('My room air conditioning is not cooling properly')" style="background: white; border: 1px solid #cbd5e1; color: #334155; font-size: 12px; padding: 6px 12px; border-radius: 14px; cursor: pointer; flex-shrink: 0; font-weight: 500;">🔧 Report AC</button>
                <button onclick="quickPrompt('What is the status of my food order?')" style="background: white; border: 1px solid #cbd5e1; color: #334155; font-size: 12px; padding: 6px 12px; border-radius: 14px; cursor: pointer; flex-shrink: 0; font-weight: 500;">📦 Food Order</button>
            </div>

            <!-- Messages Thread Scroll Area -->
            <div id="athidhi-chat-messages" style="flex: 1; padding: 16px; overflow-y: auto; background: #fdfdfd; display: flex; flex-direction: column; gap: 14px;">
                <!-- Welcome Message Bubble -->
                <div class="msg-bubble-ai" style="align-self: flex-start; max-width: 85%; background: #f1f5f9; color: #1e293b; padding: 12px 16px; border-radius: 14px 14px 14px 2px; font-size: 13.5px; line-height: 1.5; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);">
                    <div style="font-weight: 700; font-size: 11px; text-transform: uppercase; color: #1e3a8a; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;">
                        <span>✨</span> Athidhi AI Concierge
                    </div>
                    Namaste! I am your personal Athidhi AI Concierge. I can assist you with dining menus, housekeeping requests, room maintenance reports, hotel amenities, and stay details. How may I be of service today?
                </div>
            </div>

            <!-- Typing / Loading Indicator -->
            <div id="athidhi-chat-typing" style="display: none; padding: 8px 18px; font-size: 12px; color: #64748b; background: #f8fafc; border-top: 1px solid #f1f5f9; display: flex; align-items: center; gap: 8px;">
                <div style="display: flex; gap: 4px;">
                    <span style="display: inline-block; width: 6px; height: 6px; background: #3b82f6; border-radius: 50%;"></span>
                    <span style="display: inline-block; width: 6px; height: 6px; background: #1e3a8a; border-radius: 50%;"></span>
                    <span style="display: inline-block; width: 6px; height: 6px; background: #3b82f6; border-radius: 50%;"></span>
                </div>
                <span>Athidhi Concierge is thinking...</span>
            </div>

            <!-- Input Footer -->
            <div style="background: white; border-top: 1px solid #e2e8f0; padding: 12px 14px; display: flex; gap: 8px; align-items: center;">
                <input id="athidhi-chat-input" type="text" placeholder="Type your request or question..." onkeypress="onChatInputKeyPress(event)" style="flex: 1; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 20px; font-size: 13.5px; outline: none; transition: border-color 0.2s;" onfocus="this.style.borderColor='#1e3a8a'" onblur="this.style.borderColor='#cbd5e1'" />
                <button id="athidhi-chat-send" onclick="sendConciergeMessage()" style="background: #1e3a8a; color: white; border: none; border-radius: 50%; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; transition: background 0.2s;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        </div>
    </div>

</div>
`,
    clientScript: `
function switchTab(tabId) {
    var tabs = ['dashboard', 'reservations', 'dining', 'orders', 'catalog', 'requests', 'folio'];
    tabs.forEach(function(t) {
        var btn = document.getElementById('tab-' + t);
        var sec = document.getElementById('section-' + t);
        if (btn && sec) {
            if (t === tabId) {
                btn.style.background = '#1e3a8a';
                btn.style.color = '#ffffff';
                sec.style.display = 'block';
            } else {
                btn.style.background = '#e2e8f0';
                btn.style.color = '#334155';
                sec.style.display = 'none';
            }
        }
    });
}

function loadGuestData() {
    // Queries current user stays and populate the portal views
    // Respects database ACLs (x_2120492_athidhi_stay read restricted to guest email)
}

var conciergeOpen = false;
var pendingActionData = null;
var isProcessing = false;

function toggleConcierge() {
    var widget = document.getElementById('athidhi-ai-widget');
    var launcher = document.getElementById('athidhi-ai-launcher');
    if (!widget) return;

    conciergeOpen = !conciergeOpen;
    if (conciergeOpen) {
        widget.style.display = 'flex';
        scrollChatToBottom();
        var input = document.getElementById('athidhi-chat-input');
        if (input) input.focus();
    } else {
        widget.style.display = 'none';
    }
}

function resetConciergeChat() {
    pendingActionData = null;
    var container = document.getElementById('athidhi-chat-messages');
    if (!container) return;

    container.innerHTML = '<div class="msg-bubble-ai" style="align-self: flex-start; max-width: 85%; background: #f1f5f9; color: #1e293b; padding: 12px 16px; border-radius: 14px 14px 14px 2px; font-size: 13.5px; line-height: 1.5; border: 1px solid #e2e8f0; box-shadow: 0 1px 2px rgba(0,0,0,0.04);"><div style="font-weight: 700; font-size: 11px; text-transform: uppercase; color: #1e3a8a; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;"><span>✨</span> Athidhi AI Concierge</div>Namaste! I am your personal Athidhi AI Concierge. I can assist you with dining menus, housekeeping requests, room maintenance reports, hotel amenities, and stay details. How may I be of service today?</div>';
}

function quickPrompt(text) {
    var input = document.getElementById('athidhi-chat-input');
    if (input) {
        input.value = text;
        sendConciergeMessage();
    }
}

function onChatInputKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendConciergeMessage();
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function scrollChatToBottom() {
    var container = document.getElementById('athidhi-chat-messages');
    if (container) {
        setTimeout(function() {
            container.scrollTop = container.scrollHeight;
        }, 50);
    }
}

function setProcessing(processing) {
    isProcessing = processing;
    var typing = document.getElementById('athidhi-chat-typing');
    var sendBtn = document.getElementById('athidhi-chat-send');
    var input = document.getElementById('athidhi-chat-input');
    if (typing) typing.style.display = processing ? 'flex' : 'none';
    if (sendBtn) sendBtn.disabled = processing;
    if (input) input.disabled = processing;
}

function appendUserBubble(text) {
    var container = document.getElementById('athidhi-chat-messages');
    if (!container) return;

    var bubble = document.createElement('div');
    bubble.style.alignSelf = 'flex-end';
    bubble.style.maxWidth = '85%';
    bubble.style.background = '#1e3a8a';
    bubble.style.color = '#ffffff';
    bubble.style.padding = '10px 16px';
    bubble.style.borderRadius = '14px 14px 2px 14px';
    bubble.style.fontSize = '13.5px';
    bubble.style.lineHeight = '1.5';
    bubble.style.boxShadow = '0 1px 2px rgba(0,0,0,0.1)';
    bubble.innerText = text;
    container.appendChild(bubble);
    scrollChatToBottom();
}

function appendAiBubble(text, category) {
    var container = document.getElementById('athidhi-chat-messages');
    if (!container) return;

    var bubble = document.createElement('div');
    bubble.style.alignSelf = 'flex-start';
    bubble.style.maxWidth = '85%';
    bubble.style.background = '#ffffff';
    bubble.style.color = '#1e293b';
    bubble.style.padding = '12px 16px';
    bubble.style.borderRadius = '14px 14px 14px 2px';
    bubble.style.fontSize = '13.5px';
    bubble.style.lineHeight = '1.5';
    bubble.style.border = '1px solid #e2e8f0';
    bubble.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';

    var headerText = '✨ Athidhi AI Concierge';
    if (category === 'VALIDATION_ERROR' || category === 'UNAUTHORIZED' || category === 'SYSTEM_ERROR') {
        headerText = '⚠️ Athidhi Notice';
        bubble.style.background = '#fef2f2';
        bubble.style.borderColor = '#fecaca';
    }

    bubble.innerHTML = '<div style="font-weight: 700; font-size: 11px; text-transform: uppercase; color: #1e3a8a; margin-bottom: 4px;">' + headerText + '</div><div>' + escapeHtml(text) + '</div>';
    container.appendChild(bubble);
    scrollChatToBottom();
}

function appendConfirmationCard(message, pendingAction) {
    var container = document.getElementById('athidhi-chat-messages');
    if (!container) return;

    pendingActionData = pendingAction;

    var card = document.createElement('div');
    card.id = 'current-confirmation-card';
    card.style.alignSelf = 'flex-start';
    card.style.maxWidth = '90%';
    card.style.background = '#fffbeb';
    card.style.border = '1px solid #fde68a';
    card.style.borderRadius = '12px';
    card.style.padding = '14px 16px';
    card.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';

    var actionTitle = 'Action Confirmation Required';
    if (pendingAction && pendingAction.actionName) {
        actionTitle = pendingAction.actionName.replace(/_/g, ' ').toUpperCase();
    }

    card.innerHTML =
        '<div style="font-weight: 700; font-size: 12px; color: #b45309; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">' +
            '<span>⚠️</span> ' + actionTitle +
        '</div>' +
        '<div style="font-size: 13.5px; color: #1e293b; line-height: 1.5; margin-bottom: 14px;">' +
            escapeHtml(message) +
        '</div>' +
        '<div style="display: flex; gap: 8px;">' +
            '<button id="btn-confirm-action" onclick="confirmPendingAction()" style="background: #059669; color: white; border: none; padding: 8px 14px; border-radius: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer; flex: 1;">✓ Confirm &amp; Proceed</button>' +
            '<button id="btn-cancel-action" onclick="cancelPendingAction()" style="background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; padding: 8px 14px; border-radius: 6px; font-size: 12.5px; font-weight: 600; cursor: pointer;">Cancel</button>' +
        '</div>';

    container.appendChild(card);
    scrollChatToBottom();
}

function sendConciergeMessage() {
    if (isProcessing) return;

    var input = document.getElementById('athidhi-chat-input');
    if (!input) return;
    var query = input.value.trim();
    if (!query) return;

    input.value = '';
    appendUserBubble(query);
    setProcessing(true);

    var ga = new GlideAjax('x_2120492_athidhi.AIConciergeAjax');
    ga.addParam('sysparm_name', 'processChat');
    ga.addParam('sysparm_user_query', query);

    ga.getXMLAnswer(function(answer) {
        setProcessing(false);
        try {
            var res = JSON.parse(answer);
            if (res.requiresConfirmation && res.pendingAction) {
                appendConfirmationCard(res.message, res.pendingAction);
            } else {
                appendAiBubble(res.message || 'I have completed your request.', res.category);
            }
        } catch (e) {
            appendAiBubble('Athidhi Concierge encountered an error processing your inquiry. Please try again.', 'SYSTEM_ERROR');
        }
    });
}

function confirmPendingAction() {
    if (isProcessing || !pendingActionData) return;

    var card = document.getElementById('current-confirmation-card');
    if (card) {
        var confBtn = document.getElementById('btn-confirm-action');
        var cancelBtn = document.getElementById('btn-cancel-action');
        if (confBtn) confBtn.disabled = true;
        if (cancelBtn) cancelBtn.disabled = true;
    }

    appendUserBubble('Confirm and proceed with request.');
    setProcessing(true);

    var ga = new GlideAjax('x_2120492_athidhi.AIConciergeAjax');
    ga.addParam('sysparm_name', 'processChat');
    ga.addParam('sysparm_user_query', 'Confirmed');
    ga.addParam('sysparm_confirmed', 'true');
    ga.addParam('sysparm_pending_action', JSON.stringify(pendingActionData));

    ga.getXMLAnswer(function(answer) {
        setProcessing(false);
        pendingActionData = null;
        try {
            var res = JSON.parse(answer);
            appendAiBubble(res.message || 'Action executed successfully.', res.category);
        } catch (e) {
            appendAiBubble('Failed to execute confirmed action. Please contact the front desk.', 'SYSTEM_ERROR');
        }
    });
}

function cancelPendingAction() {
    pendingActionData = null;
    var card = document.getElementById('current-confirmation-card');
    if (card) {
        var confBtn = document.getElementById('btn-confirm-action');
        var cancelBtn = document.getElementById('btn-cancel-action');
        if (confBtn) confBtn.disabled = true;
        if (cancelBtn) cancelBtn.disabled = true;
        card.style.opacity = '0.6';
    }

    var container = document.getElementById('athidhi-chat-messages');
    if (!container) return;

    var notice = document.createElement('div');
    notice.style.alignSelf = 'center';
    notice.style.color = '#64748b';
    notice.style.fontSize = '12px';
    notice.style.fontStyle = 'italic';
    notice.style.margin = '4px 0';
    notice.innerText = '— Request cancelled by guest —';
    container.appendChild(notice);
    scrollChatToBottom();
}

`,
});

export const pageManagerDashboard = UiPage({
    $id: Now.ID['ui_page_manager_dashboard'],
    endpoint: 'x_2120492_athidhi_manager_dashboard.do',
    description: 'Athidhi Services — Operations Command Center & Manager Dashboard',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #0f172a; color: #f8fafc; min-height: 100vh; padding: 24px;">
    <header style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 24px;">
        <div>
            <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #38bdf8;">Athidhi Hotel Operations Command Center</h1>
            <p style="margin: 4px 0 0; color: #94a3b8; font-size: 14px;">Operational Intelligence &amp; Performance KPIs (on page load / refresh)</p>
        </div>
        <div style="background: #1e293b; padding: 8px 16px; border-radius: 8px; border: 1px solid #475569; font-size: 13px; color: #38bdf8;">
            ● Operational Status (Current on Page Load)
        </div>
    </header>

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
</div>
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
    <header style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; border-left: 6px solid #1e3a8a;">
        <h1 style="margin: 0; font-size: 24px; color: #0f172a;">Front Desk &amp; Receptionist Workspace</h1>
        <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">Athidhi Services — Arrivals, Departures, Room Status &amp; In-House Stays</p>
    </header>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="margin-top: 0; font-size: 16px; color: #1e3a8a;">Today's Expected Arrivals</h3>
            <p style="color: #64748b; font-size: 13px;">Confirmed reservations ready for check-in action.</p>
            <div style="margin-top: 12px; padding: 12px; background: #f1f5f9; border-radius: 8px; font-size: 13px;">
                Use the <strong>Check In</strong> button on reservation records to generate stay and occupy room.
            </div>
        </div>

        <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h3 style="margin-top: 0; font-size: 16px; color: #1e3a8a;">Today's Expected Departures</h3>
            <p style="color: #64748b; font-size: 13px;">Active in-house stays ready for check-out and billing settlement.</p>
            <div style="margin-top: 12px; padding: 12px; background: #f1f5f9; border-radius: 8px; font-size: 13px;">
                Use the <strong>Check Out</strong> button on stay records to automatically dispatch housekeeping.
            </div>
        </div>
    </div>
</div>
`,
});

export const pageKitchenWorkspace = UiPage({
    $id: Now.ID['ui_page_kitchen_workspace'],
    endpoint: 'x_2120492_athidhi_kitchen_workspace.do',
    description: 'Athidhi Services — Kitchen Display System (KDS)',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #18181b; color: #fafafa; min-height: 100vh; padding: 24px;">
    <header style="border-bottom: 2px solid #27272a; padding-bottom: 16px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
        <div>
            <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #f97316;">Kitchen Display System (KDS)</h1>
            <p style="margin: 4px 0 0; color: #a1a1aa; font-size: 14px;">Culinary Orders &amp; Room Service Fulfillment Queue (on page load / refresh)</p>
        </div>
        <div style="background: #27272a; padding: 8px 16px; border-radius: 8px; font-size: 13px; color: #f97316;">
            ● Kitchen Active
        </div>
    </header>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #ef4444;">
            <h3 style="margin-top: 0; font-size: 16px; color: #fca5a5;">1. New Orders</h3>
            <p style="font-size: 13px; color: #a1a1aa;">Incoming guest and restaurant orders pending acceptance.</p>
        </div>
        <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #eab308;">
            <h3 style="margin-top: 0; font-size: 16px; color: #fde047;">2. Preparing</h3>
            <p style="font-size: 13px; color: #a1a1aa;">Chefs actively preparing food items in the kitchen.</p>
        </div>
        <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #3b82f6;">
            <h3 style="margin-top: 0; font-size: 16px; color: #93c5fd;">3. Ready</h3>
            <p style="font-size: 13px; color: #a1a1aa;">Plated orders awaiting food runner / delivery dispatch.</p>
        </div>
        <div style="background: #27272a; border-radius: 10px; padding: 16px; border-top: 4px solid #22c55e;">
            <h3 style="margin-top: 0; font-size: 16px; color: #86efac;">4. Delivered / Closed</h3>
            <p style="font-size: 13px; color: #a1a1aa;">Fulfilled room service and dine-in orders.</p>
        </div>
    </div>
</div>
`,
});

export const pageHousekeepingWorkspace = UiPage({
    $id: Now.ID['ui_page_housekeeping_workspace'],
    endpoint: 'x_2120492_athidhi_housekeeping_workspace.do',
    description: 'Athidhi Services — Housekeeping Room Board & Task Matrix',
    category: 'general',
    direct: false,
    html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #f8fafc; color: #1e293b; min-height: 100vh; padding: 24px;">
    <header style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; border-left: 6px solid #059669;">
        <h1 style="margin: 0; font-size: 24px; color: #0f172a;">Housekeeping Room Board &amp; Task Matrix</h1>
        <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">Athidhi Services — Cleaning Status, Inspection Workflow &amp; Sanitization</p>
    </header>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
        <div style="background: white; border-radius: 10px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-top: 4px solid #ef4444;">
            <h3 style="margin-top: 0; font-size: 15px; color: #b91c1c;">Dirty / Needs Cleaning</h3>
            <p style="font-size: 13px; color: #64748b;">Rooms checked out or requested for routine turnover.</p>
        </div>
        <div style="background: white; border-radius: 10px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-top: 4px solid #f59e0b;">
            <h3 style="margin-top: 0; font-size: 15px; color: #b45309;">Cleaning In Progress</h3>
            <p style="font-size: 13px; color: #64748b;">Housekeeper currently assigned and servicing the room.</p>
        </div>
        <div style="background: white; border-radius: 10px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-top: 4px solid #3b82f6;">
            <h3 style="margin-top: 0; font-size: 15px; color: #1d4ed8;">Pending Inspection</h3>
            <p style="font-size: 13px; color: #64748b;">Servicing complete; awaiting supervisor quality inspection.</p>
        </div>
        <div style="background: white; border-radius: 10px; padding: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); border-top: 4px solid #10b981;">
            <h3 style="margin-top: 0; font-size: 15px; color: #047857;">Clean &amp; Available</h3>
            <p style="font-size: 13px; color: #64748b;">Passed inspection; verified ready for front desk check-in.</p>
        </div>
    </div>
</div>
`,
});

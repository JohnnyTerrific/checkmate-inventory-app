import { shellHTML } from '/pages/partials/shell.js';
import { getCurrentUser, login, logout, addUser, loadUsers } from '/utils/users.js';
import { can, getPermissions } from '/utils/permissions.js';
window.getCurrentUser = getCurrentUser;


function showUserManagementModal() {
  let dialog = document.getElementById('userManagementDialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'userManagementDialog';
    dialog.className = 'bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-auto border border-gray-200 dark:border-gray-800';
    document.body.appendChild(dialog);
  }
  const users = loadUsers();
  dialog.innerHTML = `
  <h2 class="text-2xl font-bold mb-6 text-purple-700">Manage Users</h2>
  <div class="overflow-x-auto mb-6">
    <table class="min-w-full bg-white dark:bg-gray-900 rounded-lg shadow-sm">
      <thead>
        <tr class="bg-purple-50 dark:bg-gray-800">
          <th class="px-4 py-3 text-left font-semibold">Username</th>
          <th class="px-4 py-3 text-left font-semibold">Role</th>
          <th class="px-4 py-3"></th>
        </tr>
      </thead>
      <tbody>
        ${users.map(u => `
          <tr class="hover:bg-purple-50 dark:hover:bg-gray-800 transition">
            <td class="px-4 py-3">${u.username}</td>
            <td class="px-4 py-3">${u.role}</td>
            <td class="px-4 py-3 flex gap-2">
              ${u.role !== 'SuperAdmin' ? `
                <button data-user="${u.username}" class="editUserBtn group" title="Edit">
                  <svg class="w-5 h-5 text-blue-500 group-hover:text-blue-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z"/>
                  </svg>
                </button>
                <button data-user="${u.username}" class="pwUserBtn group" title="Show/Change Password">
                  <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </button>
                <button data-user="${u.username}" class="deleteUserBtn group" title="Delete">
                  <svg class="w-5 h-5 text-red-500 group-hover:text-red-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              ` : ''}
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    </div>
  <form id="addUserForm" class="flex flex-col md:flex-row gap-4 items-end mb-4 w-full">
    <input id="addUsername" type="text" placeholder="Username" required class="border rounded px-4 py-3 bg-gray-50 dark:bg-gray-800 flex-1 w-full" />
    <div class="relative flex-1 min-w-[10rem] w-full">
      <input id="addPassword" type="password" placeholder="Password" required class="border rounded px-4 py-3 bg-gray-50 dark:bg-gray-800 pr-10 w-full" />
      <button type="button" id="toggleAddPw" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
        </svg>
      </button>
    </div>
    <select id="addRole" class="border rounded px-4 py-3 bg-gray-50 dark:bg-gray-800 flex-1 w-full">
      <option value="SuperAdmin">SuperAdmin</option>
      <option value="CEO">CEO</option>
      <option value="COO">COO</option>
      <option value="Agent">Agent</option>
    </select>
    <button type="submit" class="bg-green-600 text-white px-6 py-3 rounded shadow w-full md:w-auto">Add User</button>
  </form>
  <div id="userMgmtError" class="text-red-600 min-h-[1.5em]"></div>
  <div class="flex justify-end mt-6">
    <button id="closeUserMgmt" class="bg-gray-300 rounded px-6 py-3">Close</button>
  </div>
`;

// Add password visibility toggle for Add User
const addPwInput = dialog.querySelector('#addPassword');
const toggleAddPw = dialog.querySelector('#toggleAddPw');
if (toggleAddPw) {
  toggleAddPw.onclick = () => {
    addPwInput.type = addPwInput.type === 'password' ? 'text' : 'password';
  };
}
  dialog.showModal();

  // Add user
  dialog.querySelector('#addUserForm').onsubmit = function(e) {
    e.preventDefault();
    const username = dialog.querySelector('#addUsername').value.trim();
    const password = dialog.querySelector('#addPassword').value;
    const role = dialog.querySelector('#addRole').value;
    try {
      addUser({ username, password, role });
      showUserManagementModal(); // Reload modal with updated users
    } catch (err) {
      dialog.querySelector('#userMgmtError').textContent = err.message;
    }
  };

  // Delete user
  dialog.querySelectorAll('.deleteUserBtn').forEach(btn => {
    btn.onclick = function() {
      const username = btn.dataset.user;
      if (confirm(`Delete user ${username}?`)) {
        const users = loadUsers().filter(u => u.username !== username);
        saveUsers(users);
        showUserManagementModal(); // Reload
      }
    }
  });

  // Edit user
dialog.querySelectorAll('.editUserBtn').forEach(btn => {
  btn.onclick = function() {
    const username = btn.dataset.user;
    const user = users.find(u => u.username === username);
    if (!user) return;
    // Show edit form modal
    showEditUserModal(user);
  };
});

// Show/Change password
dialog.querySelectorAll('.pwUserBtn').forEach(btn => {
  btn.onclick = function() {
    const username = btn.dataset.user;
    const user = users.find(u => u.username === username);
    if (!user) return;
    showChangePasswordModal(user);
  };
});

  dialog.querySelector('#closeUserMgmt').onclick = function() {
    dialog.close();
  };
}

function renderUIForRole(role) {
  if (!can('settings')) {
    const settingsTab = document.getElementById('settingsTab');
    if (settingsTab) settingsTab.style.display = 'none';
  }
  if (!can('viewDashboard')) {
    const dashboardTab = document.getElementById('dashboardTab');
    if (dashboardTab) dashboardTab.style.display = 'none';
  }
  if (!can('viewIndex')) {
    const indexTab = document.getElementById('indexTab');
    if (indexTab) indexTab.style.display = 'none';
  }
  // Add more controls as needed per your menu
}

function showEditUserModal(user) {
  const dialog = document.createElement('dialog');
  dialog.className = 'rounded-xl p-6 shadow-2xl max-w-md w-full';
  dialog.innerHTML = `
    <h3 class="text-lg font-bold mb-4 text-purple-700">Edit User</h3>
    <form id="editUserForm" class="flex flex-col gap-3">
      <input type="text" id="editUsername" value="${user.username}" class="border rounded px-2 py-1" required>
      <select id="editRole" class="border rounded px-2 py-1">
        <option value="CEO" ${user.role === 'CEO' ? 'selected' : ''}>CEO</option>
        <option value="COO" ${user.role === 'COO' ? 'selected' : ''}>COO</option>
        <option value="Agent" ${user.role === 'Agent' ? 'selected' : ''}>Agent</option>
      </select>
      <div class="flex justify-end gap-2 mt-2">
        <button type="button" class="bg-gray-300 rounded px-3 py-1" id="cancelEditUser">Cancel</button>
        <button type="submit" class="bg-blue-600 text-white px-4 py-1 rounded">Save</button>
      </div>
      <div id="editUserError" class="text-red-600 mt-2"></div>
    </form>
  `;
  document.body.appendChild(dialog);
  dialog.showModal();
  dialog.addEventListener('close', () => dialog.remove());

  dialog.querySelector('#cancelEditUser').onclick = () => dialog.close();

  dialog.querySelector('#editUserForm').onsubmit = function(e) {
    e.preventDefault();
    const newUsername = dialog.querySelector('#editUsername').value.trim();
    const newRole = dialog.querySelector('#editRole').value;
    if (!newUsername) {
      dialog.querySelector('#editUserError').textContent = 'Username required';
      return;
    }
    const users = loadUsers();
    if (users.some(u => u.username === newUsername && u.username !== user.username)) {
      dialog.querySelector('#editUserError').textContent = 'Username already exists';
      return;
    }
    const idx = users.findIndex(u => u.username === user.username);
    if (idx !== -1) {
      users[idx].username = newUsername;
      users[idx].role = newRole;
      saveUsers(users);
      dialog.close();
      showUserManagementModal();
    }
  };
}

function showChangePasswordModal(user) {
  const dialog = document.createElement('dialog');
  dialog.className = 'rounded-xl p-6 shadow-2xl max-w-md w-full';
  dialog.innerHTML = `
    <h3 class="text-lg font-bold mb-4 text-purple-700">Change Password</h3>
    <form id="changePwForm" class="flex flex-col gap-3">
      <div class="relative">
        <input type="password" id="newPassword" placeholder="New Password" class="border rounded px-2 py-1 pr-10" required>
        <button type="button" id="togglePw" class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
          👁️
        </button>
      </div>
      <div class="flex justify-end gap-2 mt-2">
        <button type="button" class="bg-gray-300 rounded px-3 py-1" id="cancelPw">Cancel</button>
        <button type="submit" class="bg-green-600 text-white px-4 py-1 rounded">Save</button>
      </div>
      <div id="pwError" class="text-red-600 mt-2"></div>
    </form>
  `;
  document.body.appendChild(dialog);
  dialog.showModal();
  dialog.addEventListener('close', () => dialog.remove());

  dialog.querySelector('#cancelPw').onclick = () => dialog.close();

  // Toggle password visibility
  const pwInput = dialog.querySelector('#newPassword');
  dialog.querySelector('#togglePw').onclick = () => {
    pwInput.type = pwInput.type === 'password' ? 'text' : 'password';
  };

  dialog.querySelector('#changePwForm').onsubmit = function(e) {
    e.preventDefault();
    const newPw = pwInput.value;
    if (!newPw) {
      dialog.querySelector('#pwError').textContent = 'Password required';
      return;
    }
    const users = loadUsers();
    const idx = users.findIndex(u => u.username === user.username);
    if (idx !== -1) {
      users[idx].password = newPw;
      saveUsers(users);
      dialog.close();
      showUserManagementModal();
    }
  };
}

function setupUserHeaderEvents() {
  const userInfoDiv = document.getElementById('currentUserInfo');
  const logoutBtn = document.getElementById('logoutBtn');
  const manageUsersBtn = document.getElementById('manageUsersBtn');
  const user = getCurrentUser();

  if (user && userInfoDiv) {
    userInfoDiv.textContent = `User: ${user.username} (${user.role})`;
  }
  if (user && logoutBtn) {
    logoutBtn.onclick = function() {
      console.log("Logout clicked");
      logout();
      window.location.replace("/login.html");
    };
  }
  if (user && manageUsersBtn && user.role === 'SuperAdmin') {
    manageUsersBtn.classList.remove('hidden');
    manageUsersBtn.onclick = showUserManagementModal;
  }
}

// Restrict Agents on Mobile to Inventory page only
function restrictMobileAgentUI() {
  const user = getCurrentUser();
  if (user && user.role === 'Agent' && window.innerWidth <= 768) {
    ['dashboardTab', 'indexTab', 'settingsTab'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });
    // Optional: redirect if on other page
    if (!document.body.dataset.page || document.body.dataset.page !== 'inventory') {
      window.location.href = '/pages/inventory.html';
    }
  }
}

function initApp() {
  const user = getCurrentUser();
  if (!user) {
    window.location.replace("/login.html"); // <-- Make sure this is just "login.html"
    return;
  }
  renderUIForRole(user.role);
  restrictMobileAgentUI();
}

async function injectShell() {
  // 1. Save the original <section> content BEFORE changing the body
  const oldBody = document.body;
  let mainContent = '';
  const sections = oldBody.querySelectorAll('section');
  if (sections.length > 0) {
    mainContent = sections[0].outerHTML;
  } else {
    mainContent = Array.from(oldBody.childNodes)
      .filter(node => node.nodeName !== 'SCRIPT')
      .map(node => node.outerHTML || node.textContent)
      .join('');
  }
  // 2. Replace the body with the shell layout
  document.body.innerHTML = shellHTML;
  // 3. Inject the saved content into #main-content
  const mainEl = document.getElementById('main-content');
  if (!mainEl) {
    console.error('main-content not found in shell!');
    return;
  }
  mainEl.innerHTML = mainContent;
}
function highlightActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add(
        'bg-purple-100', 'dark:bg-purple-900',
        'text-purple-700', 'dark:text-purple-300',
        'font-bold'
      );
    } else {
      link.classList.remove(
        'bg-purple-100', 'dark:bg-purple-900',
        'text-purple-700', 'dark:text-purple-300',
        'font-bold'
      );
    }
  });
}

// Move this function OUTSIDE injectShell
function setupDarkModeToggle() {
  const html = document.documentElement;
  const darkModeToggle = document.getElementById('darkModeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  
  function getPreferredDark() {
    if (localStorage.theme) return localStorage.theme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
    function applyDark(dark) {
        if (!html || !sunIcon || !moonIcon) return;
  
    if (dark) {
      html.classList.add('dark');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
      localStorage.theme = 'dark';
      // Set dark logo
      const mainLogoImg = document.getElementById('mainLogoImg');
      if (mainLogoImg) {
        mainLogoImg.src = '/assets/img/CheckMate-app-logo-dark.png';
      }
    } else {
      html.classList.remove('dark');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
      localStorage.theme = 'light';
      // Set light logo
      const mainLogoImg = document.getElementById('mainLogoImg');
      if (mainLogoImg) {
        mainLogoImg.src = '/assets/img/CheckMate-app-logo-light.png';
      }
    }
  }
  
  // Initial load
  applyDark(getPreferredDark());
  
  // Toggle on click
  darkModeToggle.addEventListener('click', () => {
    const isDark = html.classList.contains('dark');
    applyDark(!isDark);
  });
}

function setupSidebarToggle() {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');
  const overlay = document.getElementById('sidebarOverlay');
  const mq = window.matchMedia('(min-width: 768px)'); // Tailwind md

  let isCollapsed = false;

  function setCollapsed(collapsed) {
    isCollapsed = collapsed;
    if (isCollapsed) {
      sidebar.classList.add('collapsed');
      sidebar.classList.remove('w-64');
      sidebar.classList.add('w-16');
      document.querySelectorAll('.sidebar-label').forEach(el => el.classList.add('hidden'));
    } else {
      sidebar.classList.remove('collapsed');
      sidebar.classList.remove('w-16');
      sidebar.classList.add('w-64');
      document.querySelectorAll('.sidebar-label').forEach(el => el.classList.remove('hidden'));
    }
    // Optionally store state
    localStorage.sidebarCollapsed = isCollapsed ? '1' : '0';
  }

  function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }
  function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  // On desktop, always show sidebar and hide overlay
  function handleResize() {
    if (mq.matches) {
      sidebar.classList.remove('-translate-x-full');
      overlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      setCollapsed(localStorage.sidebarCollapsed === '1');
    } else {
      closeSidebar();
      setCollapsed(false); // Always expanded on mobile
    }
  }

  // Hamburger/collapse on click
  sidebarToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (mq.matches) {
      // Desktop: toggle mini mode
      setCollapsed(!isCollapsed);
    } else {
      // Mobile: open/close sidebar
      if (sidebar.classList.contains('-translate-x-full')) {
        openSidebar();
      } else {
        closeSidebar();
      }
    }
  });

  overlay.addEventListener('click', closeSidebar);
  mq.addEventListener('change', handleResize);

  // Initial setup
  handleResize();
}


// Now this will work!
document.addEventListener('DOMContentLoaded', async () => {
  initApp();
  if (!getCurrentUser()) {
    window.location.replace("/login.html");
    return;
  }

  await injectShell();
  setupUserHeaderEvents();

  // User info and logout
  const userInfoDiv = document.getElementById('currentUserInfo');
  const logoutBtn = document.getElementById('logoutBtn');
  const manageUsersBtn = document.getElementById('manageUsersBtn');
  const user = getCurrentUser();

  if (user && userInfoDiv && logoutBtn) {
    userInfoDiv.textContent = `User: ${user.username} (${user.role})`;
    logoutBtn.onclick = function() {
      console.log("Logout clicked");
      logout();
      window.location.replace("/login.html");
    };
  }

  // Show Manage Users button only for SuperAdmin
  if (user && manageUsersBtn && user.role === 'SuperAdmin') {
    manageUsersBtn.classList.remove('hidden');
    manageUsersBtn.onclick = showUserManagementModal;
  }

  setupDarkModeToggle();
  highlightActiveNav();
  setupSidebarToggle();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const target = this.dataset.page;
      const current = document.body.dataset.page;
      if (target === current) {
        e.preventDefault();
        return;
      }
      document.body.classList.add('fade-out');
      setTimeout(() => window.location.href = this.href, 200);
    });
  });

    // Alert Bell dropdown logic
    const alertBell = document.getElementById('alertBell');
    const alertDropdown = document.getElementById('alertDropdown');
    if (alertBell && alertDropdown) {
      alertBell.onclick = function(e) {
        e.stopPropagation();
        alertDropdown.classList.toggle('hidden');
        if (!alertDropdown.classList.contains('hidden')) {
          document.addEventListener('click', closeAlertDropdown, { once: true });
        }
      };
      function closeAlertDropdown(e) {
        if (!alertDropdown.contains(e.target) && e.target !== alertBell) {
          alertDropdown.classList.add('hidden');
        }
      }
    }
    
    window.updateAlertBell = function() {
      // Read all shipments from localStorage
      const shipments = JSON.parse(localStorage.getItem('cm_shipments_v1') || '[]');
      const shipmentList = document.getElementById('shipmentList');
      const alertCount = document.getElementById('alertCount');
    
      if (!shipmentList) return;
    
      // 1. Split shipments into "pending" (future or today) and "history" (past)
      const now = new Date();
      const pending = shipments.filter(sh => new Date(sh.eta) >= now && !sh.arrived);
      const history = shipments.filter(sh => new Date(sh.eta) < now || sh.arrived);
    
      // 2. Show last 5 pending shipments (alert)
      if (!pending.length) {
        shipmentList.innerHTML = `<div class="text-gray-400 text-center py-4">No pending shipments</div>`;
        if (alertCount) alertCount.classList.add('hidden');
      } else {
        const latest = pending.slice(-5).reverse();
        shipmentList.innerHTML = latest.map(sh => `
          <div class="border-b border-gray-200 dark:border-gray-700 py-2 px-1 last:border-0">
            <div class="font-semibold">${sh.shipmentId || '[No ID]'}</div>
            <div class="text-xs text-gray-500">Vendor: ${sh.vendor || '-'}</div>
            <div class="text-xs text-gray-500">Products: ${Array.isArray(sh.products) ? sh.products.map(p => `${p.model} ×${p.qty}`).join(', ') : ''}</div>
            <div class="text-xs text-gray-400">${new Date(sh.departure).toLocaleDateString()} → ${new Date(sh.eta).toLocaleDateString()}</div>
          </div>
        `).join('');
        // Show count of total pending shipments
        if (alertCount) {
          alertCount.textContent = pending.length;
          alertCount.classList.remove('hidden');
        }
      }
    
      // 3. Optionally, display history somewhere else (if you have a notifications history tab)
      // e.g. window.renderNotificationHistory(history);
    };    
    
    if (typeof window.updateAlertBell === "function") updateAlertBell();

    const globalSearchBtn = document.getElementById('globalSearchBtn');
    const globalSearchDialog = document.getElementById('globalSearchDialog');

if (globalSearchBtn && globalSearchDialog) {
  globalSearchBtn.onclick = function () {
    openGlobalSearchDialog();
  };
}

window.openGlobalSearchDialog = function () {
  globalSearchDialog.innerHTML = `
    <form method="dialog" class="flex flex-col gap-4 w-[30rem] max-w-full">
      <h3 class="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Global Search</h3>
      <input id="globalSearchInput" type="text" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800"
        placeholder="Type anything... (product, serial, shipment, vendor)" autofocus>
      <div id="globalSearchResults" class="max-h-60 overflow-y-auto mt-2"></div>
      <div class="flex justify-end gap-2 mt-2">
        <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Close</button>
      </div>
    </form>
  `;
  globalSearchDialog.showModal();

  // Close button
  globalSearchDialog.querySelector('button[value="cancel"]').onclick = e => { 
    e.preventDefault(); globalSearchDialog.close(); 
  };

  // Search logic
  const input = globalSearchDialog.querySelector('#globalSearchInput');
  input.oninput = function () {
    performGlobalSearch(input.value.trim());
  };

  // Initial focus
  setTimeout(() => { input.focus(); }, 50);

  // On open, optionally clear results
  performGlobalSearch('');
};

window.performGlobalSearch = function(query) {
  const resultsDiv = document.getElementById('globalSearchResults');
  if (!resultsDiv) return;

  const shipments = JSON.parse(localStorage.getItem('cm_shipments_v1') || '[]');
  const inventory = JSON.parse(localStorage.getItem('cm_inventory_v1') || '[]');
  const products = JSON.parse(localStorage.getItem('cm_products_v1') || '[]');

  // If no query, show nothing (or optionally recent items)
  if (!query) {
    resultsDiv.innerHTML = `<div class="text-gray-400 text-center py-6">Start typing to search...</div>`;
    return;
  }

  const q = query.toLowerCase();

  // Shipments
  const shipmentMatches = shipments.filter(s =>
    (s.shipmentId || '').toLowerCase().includes(q) ||
    (s.vendor || '').toLowerCase().includes(q) ||
    (s.incoterm || '').toLowerCase().includes(q) ||
    (Array.isArray(s.products) && s.products.some(p => (p.model || '').toLowerCase().includes(q)))
  );

  // Inventory (search serial, chargerId, sim, product, etc)
  const inventoryMatches = inventory.filter(i =>
    (i.chargerId || '').toLowerCase().includes(q) ||
    (i.chargerSerial || '').toLowerCase().includes(q) ||
    (i.simNumber || '').toLowerCase().includes(q) ||
    (i.product || '').toLowerCase().includes(q) ||
    (i.model || '').toLowerCase().includes(q) ||
    (i.notes || '').toLowerCase().includes(q)
  );

  // Products (search name, HS code, vendor)
  const productMatches = products.filter(p =>
    (p.name || '').toLowerCase().includes(q) ||
    (p.hsCode || '').toLowerCase().includes(q) ||
    (p.vendor || '').toLowerCase().includes(q)
  );

  if (shipmentMatches.length === 0 && inventoryMatches.length === 0 && productMatches.length === 0) {
    resultsDiv.innerHTML = `<div class="text-gray-400 text-center py-6">No results found.</div>`;
    return;
  }

  // Build results display
  resultsDiv.innerHTML = `
  <div>
    <div class="font-bold text-purple-700 dark:text-purple-300 mt-2">Inventory (${inventoryMatches.length})</div>
    ${inventoryMatches.length ? inventoryMatches.map(i => `
      <div class="border-b border-gray-200 dark:border-gray-700 py-1 flex flex-col gap-1">
        <div><b>ID:</b> ${i.chargerId}</div>
        <div><b>Serial:</b> ${i.chargerSerial || '-'}</div>
        <div><b>SIM:</b> ${i.simNumber || '-'}</div>
        <div><b>Product:</b> ${i.product || '-'}</div>
<div class="flex gap-2 mt-1">
  <button type="button" class="move-btn px-2 py-1 text-xs rounded bg-blue-600 text-white"
    data-chargerid="${i.chargerId}" data-serial="${i.chargerSerial}">Move</button>
  <button type="button" class="edit-inventory-btn px-2 py-1 text-xs rounded bg-green-600 text-white"
    data-chargerid="${i.chargerId}" data-serial="${i.chargerSerial}">Edit</button>
  <button type="button" class="view-inventory-btn px-2 py-1 text-xs rounded bg-purple-600 text-white"
    data-chargerid="${i.chargerId}">View</button>
</div>
      </div>
    `).join('') : '<div class="text-gray-400 text-sm">None</div>'}
  </div>
`;
// Add action listeners
// For MOVE button:
resultsDiv.querySelectorAll('.move-btn').forEach(btn => {
  btn.onclick = function() {
    const chargerId = btn.dataset.chargerid;
    const chargerSerial = btn.dataset.serial;
    const inventory = JSON.parse(localStorage.getItem('cm_inventory_v1') || '[]');
    const unit = inventory.find(i => i.chargerId === chargerId && i.chargerSerial === chargerSerial);

    if (unit) {
      if (document.body.dataset.page === 'inventory') {
        // Call the dialog directly
        window.openMoveDialog(unit);
      } else {
        // Save pending action and redirect
        sessionStorage.setItem('pendingInventoryAction', JSON.stringify({
          action: 'move',
          unit
        }));
        window.location.href = 'inventory.html';
      }
      document.getElementById('globalSearchDialog').close();
    } else {
      showToast('Inventory unit not found', 'red');
    }
  };
});

// For EDIT button:
resultsDiv.querySelectorAll('.edit-inventory-btn').forEach(btn => {
  btn.onclick = function() {
    const chargerId = btn.dataset.chargerid;
    const chargerSerial = btn.dataset.serial;
    const inventory = JSON.parse(localStorage.getItem('cm_inventory_v1') || '[]');
    const unit = inventory.find(i => i.chargerId === chargerId && i.chargerSerial === chargerSerial);

    if (unit) {
      if (document.body.dataset.page === 'inventory') {
        window.openEditDialog(unit);
      } else {
        sessionStorage.setItem('pendingInventoryAction', JSON.stringify({
          action: 'edit',
          unit
        }));
        window.location.href = 'inventory.html';
      }
      document.getElementById('globalSearchDialog').close();
    } else {
      showToast('Inventory unit not found', 'red');
    }
  };
});

// For VIEW button:
resultsDiv.querySelectorAll('.view-inventory-btn').forEach(btn => {
  btn.onclick = function() {
    const chargerId = btn.dataset.chargerid;
    const inventory = JSON.parse(localStorage.getItem('cm_inventory_v1') || '[]');
    const unit = inventory.find(i => i.chargerId === chargerId);

    if (unit) {
      if (document.body.dataset.page === 'inventory') {
        window.openDetailsDialog(unit);
      } else {
        sessionStorage.setItem('pendingInventoryAction', JSON.stringify({
          action: 'view',
          unit
        }));
        window.location.href = 'inventory.html';
      }
      document.getElementById('globalSearchDialog').close();
    } else {
      showToast('Inventory unit not found', 'red');
    }
  };
});


};


  // --- Settings page logic (dynamic import) ---
  const pageId = document.body.dataset.page;
  if (pageId === "settings") {
    import('../js/settings.js').then(mod => mod.initSettings());
  }

    // --- Products page logic (dynamic import) ---
  if (pageId === "products") {
    import('../js/products.js').then(mod => mod.initProducts());
  }

  const shipmentBtn = document.getElementById("addShipmentBtn");
if (shipmentBtn) {
  import('../js/shipments.js')
    .then(mod => {
      shipmentBtn.onclick = () => mod.openShipmentDialog();
    })
    .catch(err => {
      console.error('Failed loading shipments module', err);
      shipmentBtn.onclick = () => showToast('Shipment module failed to load', 'red');
    });
}



  document.body.style.visibility = 'visible';
});

export function showToast(message, color = "green") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `fixed bottom-6 right-6 z-50 min-w-[200px] max-w-xs bg-${color}-600 text-white font-semibold px-4 py-2 rounded shadow-lg opacity-100 pointer-events-auto transition-opacity duration-300`;
  setTimeout(() => {
    toast.classList.remove("opacity-100", "pointer-events-auto");
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 2000);
}

window.showToast = showToast;

window.showLegend = function(text, e) {
  const legend = document.getElementById('hoverLegend');
  if (!legend) return;
  legend.textContent = text;
  legend.style.display = 'block';
  if (e) {
    legend.style.left = (e.clientX + 16) + 'px';
    legend.style.top = e.clientY + 'px';
  }
};
window.hideLegend = function() {
  const legend = document.getElementById('hoverLegend');
  if (legend) legend.style.display = 'none';
};

// Mobile Swipe-to-Go-Back
if (window.innerWidth <= 640) {
  let touchStartX = null;
  document.body.addEventListener('touchstart', function(e) {
    // Only near the left edge (within 32px)
    if (e.touches[0].clientX < 32) {
      touchStartX = e.touches[0].clientX;
    } else {
      touchStartX = null;
    }
  }, {passive: true});

  document.body.addEventListener('touchend', function(e) {
    if (touchStartX !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchEndX - touchStartX > 80) {
        // Go back one page in browser history
        window.history.back();
      }
    }
    touchStartX = null;
  }, {passive: true});
}
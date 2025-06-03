(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ed="modulepreload",td=function(n){return"/"+n},Yi={},xs=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(t.map(h=>{if(h=td(h),h in Yi)return;Yi[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":ed,p||(v.as="script"),v.crossOrigin="",v.href=h,d&&v.setAttribute("nonce",d),document.head.appendChild(v),p)return new Promise((A,T)=>{v.addEventListener("load",A),v.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},nd=`
<span id="hoverLegend" class="hover-legend hidden"></span>
<div class="flex min-h-screen">
  <!-- SIDEBAR -->
<aside id="sidebar" class="flex flex-col w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-200" aria-label="Sidebar">
       <div id="sidebarOverlay" class="fixed inset-0 bg-black bg-opacity-40 z-30 hidden md:hidden"></div>
<div class="sidebar-header flex items-center h-16 px-4 border-b border-gray-200 dark:border-gray-800">
  <button id="sidebarToggle" class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800" aria-label="Toggle sidebar">
    <!-- Hamburger Icon -->
    <svg class="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  </button>
</div>
<nav class="flex-1 px-2 space-y-1">
  <!-- Home -->
  <a href="/index.html"
     class="nav-link flex items-center px-2 py-2 rounded hover:bg-purple-50 dark:hover:bg-gray-700 font-medium dark:text-gray-200"
     data-page="home">
    <!-- heroicon: home -->
    <svg xmlns="http://www.w3.org/2000/svg"
         class="h-6 w-6 mr-3"
         fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 9L12 2l9 7v11a1 1 0 01-1 1h-5a1 1 0 01-1-1v-7H9v7a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" />
    </svg>
    <span class="sidebar-label">Home</span>
  </a>

  <!-- Dashboard -->
  <a href="/pages/dashboard.html"
     class="nav-link flex items-center px-2 py-2 rounded hover:bg-purple-50 dark:hover:bg-gray-700 font-medium dark:text-gray-200"
     data-page="dashboard">
    <!-- heroicon: view-dashboard -->
    <svg xmlns="http://www.w3.org/2000/svg"
         class="h-6 w-6 mr-3"
         fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 3v18h18" />
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 17V9m4 8V5m4 12v-4" />
    </svg>
    <span class="sidebar-label">Dashboard</span>
  </a>

  <!-- Inventory -->
  <a href="/pages/inventory.html"
     class="nav-link flex items-center px-2 py-2 rounded hover:bg-purple-50 dark:hover:bg-gray-700 font-medium dark:text-gray-200"
     data-page="inventory">
    <!-- heroicon: clipboard-list -->
    <svg xmlns="http://www.w3.org/2000/svg"
         class="h-6 w-6 mr-3 flex-shrink-0"
         fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 3h6a2 2 0 012 2v0a2 2 0 01-2 2H9a2 2 0 01-2-2v0a2 2 0 012-2z" />
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12l2 2 4-4M9 17l2 2 4-4" />
    </svg>
    <span class="sidebar-label">Inventory</span>
  </a>

  <!-- Products -->
  <a href="/pages/products.html"
     class="nav-link flex items-center px-2 py-2 rounded hover:bg-purple-50 dark:hover:bg-gray-700 font-medium dark:text-gray-200"
     data-page="products">
    <!-- heroicon: cube -->
    <svg xmlns="http://www.w3.org/2000/svg"
         class="h-6 w-6 mr-3"
         fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M21 16V8a2 2 0 00-1-1.732l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.732l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 2v20M3.27 6.2l8.73 5.04 8.73-5.04" />
    </svg>
    <span class="sidebar-label">Products</span>
  </a>

  <!-- Settings -->
  <a href="/pages/settings.html"
     class="nav-link flex items-center px-2 py-2 rounded hover:bg-purple-50 dark:hover:bg-gray-700 font-medium dark:text-gray-200"
     data-page="settings">
    <!-- heroicon: cog -->
    <svg xmlns="http://www.w3.org/2000/svg"
         class="h-6 w-6 mr-3"
         fill="none" viewBox="0 0 24 24"
         stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M9.75 3a2.25 2.25 0 00-2.092 1.472l-.406 1.072a2.25 2.25 0 01-1.126 1.126l-1.072.406A2.25 2.25 0 003 9.75v4.5c0 .967.695 1.794 1.594 2.106l1.072.406a2.25 2.25 0 011.126 1.126l.406 1.072A2.25 2.25 0 009.75 21h4.5a2.25 2.25 0 002.092-1.472l.406-1.072a2.25 2.25 0 011.126-1.126l1.072-.406A2.25 2.25 0 0021 14.25v-4.5a2.25 2.25 0 00-1.594-2.106l-1.072-.406a2.25 2.25 0 01-1.126-1.126l-.406-1.072A2.25 2.25 0 0014.25 3h-4.5z" />
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    <span class="sidebar-label">Settings</span>
  </a>

  <!-- Audit Log -->
<a href="/pages/audit.html"
   class="nav-link flex items-center px-2 py-2 rounded hover:bg-purple-50 dark:hover:bg-gray-700 font-medium dark:text-gray-200"
   data-page="audit">
  <!-- heroicon: Magnifying Glass (modern, beautiful) -->
  <svg xmlns="http://www.w3.org/2000/svg"
       class="h-6 w-6 mr-3"
       fill="none" viewBox="0 0 24 24"
       stroke="currentColor" stroke-width="2">
    <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" fill="none"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <span class="sidebar-label">Audit Log</span>
</a>

</nav>
  </aside>

  <!-- MAIN WRAPPER -->
  <div class="flex-1 flex flex-col">
    <!-- HEADER -->
<header class="flex items-center h-16 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
  <!-- Logo (clickable) -->
  <img
    id="mainLogoImg"
    src="/assets/img/CheckMate-app-logo-light.png"
    alt="CheckMate"
    class="h-12 w-auto cursor-pointer"
    style="object-fit:contain; display:block;"
    draggable="false"
    tabindex="0"
    role="link"
    aria-label="Home"
    onclick="window.location.href='/index.html'"
    onkeydown="if(event.key==='Enter'){window.location.href='index.html'}"
  />

  <!-- Header Icons (right aligned) -->
  <div class="flex-1 flex items-center justify-end gap-4">
    <!-- Dark Mode Toggle -->
    <button id="darkModeToggle" class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Toggle dark mode">
      <!-- Sun Icon -->
      <svg id="sunIcon" class="h-6 w-6" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5" fill="#facc15"/>
        <path stroke="#facc15" stroke-width="2" fill="none" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.36 6.36l-1.41-1.41m12.02 0l1.41-1.41M6.34 17.66l-1.41 1.41"/>
      </svg>
      <!-- Moon Icon -->
      <svg id="moonIcon" class="h-6 w-6 hidden" xmlns="http://www.w3.org/2000/svg" fill="#facc15" viewBox="0 0 24 24" stroke-width="1.5" stroke="#facc15">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
      </svg>
    </button>

    <!-- Global Search -->
    <button id="globalSearchBtn" class="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Global Search">
      <!-- Magnifying glass icon -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>

    <!-- Alert Bell with Dropdown -->
    <div class="relative z-10">
      <button id="alertBell" class="relative p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400" aria-label="Alerts">
        <!-- Heroicon: bell -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 15.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v4.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span id="alertCount" class="absolute top-0 right-0 bg-red-600 text-xs text-white rounded-full px-1 hidden">0</span>
      </button>
      <div id="alertDropdown" class="absolute top-12 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg p-3 min-w-[260px] hidden z-50">
        <div class="font-bold mb-2">Shipments</div>
        <div id="shipmentList" class="text-sm"></div>
      </div>
    </div>

    <!-- User / Admin Info -->
      <button id="manageUsersBtn" class="exit-btn bg-purple-500" title="Manage Users">
  <span class="icon">
    <!-- Optional: Add a user icon SVG here -->
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 8-4 8-4s8 0 8 4"/>
    </svg>
  </span>
  <span class="hidden sm:inline">Manage Users</span>
</button>
<button id="logoutBtn" class="exit-btn" title="Logout">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="6" y="3" width="9" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
    <circle cx="8.5" cy="12" r="1" fill="currentColor"/>
    <path d="M21 12h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M18 9l3 3-3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  <span class="hidden sm:inline">Logout</span>
</button>
</button>
  </div>
</header>

    <!-- Main content gets injected here -->
    <main id="main-content" class="p-4 flex-1" role="main" tabindex="-1">
  <!-- Remain empty; each page will inject its content here -->
</main>
  </div>
    <!-- Global Toast -->
<div id="toast" class="fixed top-6 right-6 z-50 min-w-[200px] max-w-xs bg-green-600 text-white font-semibold px-4 py-2 rounded shadow-lg opacity-0 pointer-events-none transition-opacity duration-300"></div>
<dialog id="globalSearchDialog" class="rounded-xl p-4"></dialog>
</div>
`,pl="cm_users",ml="cm_session_user";function Rn(){return JSON.parse(localStorage.getItem(pl))||[]}function rd(n){localStorage.setItem(pl,JSON.stringify(n))}function sd({username:n,password:e,role:t}){const r=Rn();if(r.some(s=>s.username===n))throw new Error("Username already exists");r.push({username:n,password:e,role:t}),rd(r)}function gl(){localStorage.removeItem(ml)}function qt(){return JSON.parse(localStorage.getItem(ml)||"null")}const od={SuperAdmin:{canAddUsers:!0,manageLocations:!0,manageContractors:!0,inventoryCrud:!0,viewDashboard:!0,viewIndex:!0,productsCrud:!0,settings:!0},CEO:{canAddUsers:!1,manageLocations:!1,manageContractors:!0,inventoryCrud:!0,viewDashboard:!0,viewIndex:!0,productsCrud:!1,settings:!0},COO:{canAddUsers:!1,manageLocations:!1,manageContractors:!0,inventoryCrud:!0,viewDashboard:!0,viewIndex:!0,productsCrud:!1,settings:!0},Agent:{canAddUsers:!1,manageLocations:!1,manageContractors:!1,inventoryCrud:!0,viewDashboard:!1,viewIndex:!1,productsCrud:!1,settings:!1}};function id(n){return od[n]||{}}function Cs(n){const e=window.getCurrentUser?window.getCurrentUser():null;return e&&id(e.role)[n]}window.getCurrentUser=qt;function jt(){let n=document.getElementById("userManagementDialog");n||(n=document.createElement("dialog"),n.id="userManagementDialog",n.className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-auto border border-gray-200 dark:border-gray-800",document.body.appendChild(n));const e=Rn();n.innerHTML=`
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
        ${e.map(s=>`
          <tr class="hover:bg-purple-50 dark:hover:bg-gray-800 transition">
            <td class="px-4 py-3">${s.username}</td>
            <td class="px-4 py-3">${s.role}</td>
            <td class="px-4 py-3 flex gap-2">
              ${s.role!=="SuperAdmin"?`
                <button data-user="${s.username}" class="editUserBtn group" title="Edit">
                  <svg class="w-5 h-5 text-blue-500 group-hover:text-blue-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z"/>
                  </svg>
                </button>
                <button data-user="${s.username}" class="pwUserBtn group" title="Show/Change Password">
                  <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </button>
                <button data-user="${s.username}" class="deleteUserBtn group" title="Delete">
                  <svg class="w-5 h-5 text-red-500 group-hover:text-red-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              `:""}
            </td>
          </tr>
        `).join("")}
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
`;const t=n.querySelector("#addPassword"),r=n.querySelector("#toggleAddPw");r&&(r.onclick=()=>{t.type=t.type==="password"?"text":"password"}),n.showModal(),n.querySelector("#addUserForm").onsubmit=function(s){s.preventDefault();const i=n.querySelector("#addUsername").value.trim(),a=n.querySelector("#addPassword").value,c=n.querySelector("#addRole").value;try{sd({username:i,password:a,role:c}),jt()}catch(d){n.querySelector("#userMgmtError").textContent=d.message}},n.querySelectorAll(".deleteUserBtn").forEach(s=>{s.onclick=function(){const i=s.dataset.user;if(confirm(`Delete user ${i}?`)){const a=Rn().filter(c=>c.username!==i);saveUsers(a),jt()}}}),n.querySelectorAll(".editUserBtn").forEach(s=>{s.onclick=function(){const i=s.dataset.user,a=e.find(c=>c.username===i);a&&ld(a)}}),n.querySelectorAll(".pwUserBtn").forEach(s=>{s.onclick=function(){const i=s.dataset.user,a=e.find(c=>c.username===i);a&&cd(a)}}),n.querySelector("#closeUserMgmt").onclick=function(){n.close()}}function ad(n){if(!Cs("settings")){const e=document.getElementById("settingsTab");e&&(e.style.display="none")}if(!Cs("viewDashboard")){const e=document.getElementById("dashboardTab");e&&(e.style.display="none")}if(!Cs("viewIndex")){const e=document.getElementById("indexTab");e&&(e.style.display="none")}}function ld(n){const e=document.createElement("dialog");e.className="rounded-xl p-6 shadow-2xl max-w-md w-full",e.innerHTML=`
    <h3 class="text-lg font-bold mb-4 text-purple-700">Edit User</h3>
    <form id="editUserForm" class="flex flex-col gap-3">
      <input type="text" id="editUsername" value="${n.username}" class="border rounded px-2 py-1" required>
      <select id="editRole" class="border rounded px-2 py-1">
        <option value="CEO" ${n.role==="CEO"?"selected":""}>CEO</option>
        <option value="COO" ${n.role==="COO"?"selected":""}>COO</option>
        <option value="Agent" ${n.role==="Agent"?"selected":""}>Agent</option>
      </select>
      <div class="flex justify-end gap-2 mt-2">
        <button type="button" class="bg-gray-300 rounded px-3 py-1" id="cancelEditUser">Cancel</button>
        <button type="submit" class="bg-blue-600 text-white px-4 py-1 rounded">Save</button>
      </div>
      <div id="editUserError" class="text-red-600 mt-2"></div>
    </form>
  `,document.body.appendChild(e),e.showModal(),e.addEventListener("close",()=>e.remove()),e.querySelector("#cancelEditUser").onclick=()=>e.close(),e.querySelector("#editUserForm").onsubmit=function(t){t.preventDefault();const r=e.querySelector("#editUsername").value.trim(),s=e.querySelector("#editRole").value;if(!r){e.querySelector("#editUserError").textContent="Username required";return}const i=Rn();if(i.some(c=>c.username===r&&c.username!==n.username)){e.querySelector("#editUserError").textContent="Username already exists";return}const a=i.findIndex(c=>c.username===n.username);a!==-1&&(i[a].username=r,i[a].role=s,saveUsers(i),e.close(),jt())}}function cd(n){const e=document.createElement("dialog");e.className="rounded-xl p-6 shadow-2xl max-w-md w-full",e.innerHTML=`
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
  `,document.body.appendChild(e),e.showModal(),e.addEventListener("close",()=>e.remove()),e.querySelector("#cancelPw").onclick=()=>e.close();const t=e.querySelector("#newPassword");e.querySelector("#togglePw").onclick=()=>{t.type=t.type==="password"?"text":"password"},e.querySelector("#changePwForm").onsubmit=function(r){r.preventDefault();const s=t.value;if(!s){e.querySelector("#pwError").textContent="Password required";return}const i=Rn(),a=i.findIndex(c=>c.username===n.username);a!==-1&&(i[a].password=s,saveUsers(i),e.close(),jt())}}function ud(){const n=document.getElementById("currentUserInfo"),e=document.getElementById("logoutBtn"),t=document.getElementById("manageUsersBtn"),r=qt();r&&n&&(n.textContent=`User: ${r.username} (${r.role})`),r&&e&&(e.onclick=function(){console.log("Logout clicked"),gl(),window.location.replace("/login.html")}),r&&t&&r.role==="SuperAdmin"&&(t.classList.remove("hidden"),t.onclick=jt)}function dd(){const n=qt();n&&n.role==="Agent"&&window.innerWidth<=768&&(["dashboardTab","indexTab","settingsTab"].forEach(e=>{const t=document.getElementById(e);t&&(t.style.display="none")}),(!document.body.dataset.page||document.body.dataset.page!=="inventory")&&(window.location.href="/pages/inventory.html"))}function hd(){const n=qt();if(!n){window.location.replace("/login.html");return}ad(n.role),dd()}async function fd(){const n=document.body;let e="";const t=n.querySelectorAll("section");t.length>0?e=t[0].outerHTML:e=Array.from(n.childNodes).filter(s=>s.nodeName!=="SCRIPT").map(s=>s.outerHTML||s.textContent).join(""),document.body.innerHTML=nd;const r=document.getElementById("main-content");if(!r){console.error("main-content not found in shell!");return}r.innerHTML=e}function pd(){const n=document.body.dataset.page;document.querySelectorAll(".nav-link").forEach(e=>{e.dataset.page===n?e.classList.add("bg-purple-100","dark:bg-purple-900","text-purple-700","dark:text-purple-300","font-bold"):e.classList.remove("bg-purple-100","dark:bg-purple-900","text-purple-700","dark:text-purple-300","font-bold")})}function md(){const n=document.documentElement,e=document.getElementById("darkModeToggle"),t=document.getElementById("sunIcon"),r=document.getElementById("moonIcon");function s(){return localStorage.theme?localStorage.theme==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function i(a){if(!(!n||!t||!r))if(a){n.classList.add("dark"),t.classList.add("hidden"),r.classList.remove("hidden"),localStorage.theme="dark";const c=document.getElementById("mainLogoImg");c&&(c.src="/assets/img/CheckMate-app-logo-dark.png")}else{n.classList.remove("dark"),t.classList.remove("hidden"),r.classList.add("hidden"),localStorage.theme="light";const c=document.getElementById("mainLogoImg");c&&(c.src="/assets/img/CheckMate-app-logo-light.png")}}i(s()),e.addEventListener("click",()=>{const a=n.classList.contains("dark");i(!a)})}function gd(){const n=document.getElementById("sidebar"),e=document.getElementById("sidebarToggle"),t=document.getElementById("sidebarOverlay"),r=window.matchMedia("(min-width: 768px)");let s=!1;function i(h){s=h,s?(n.classList.add("collapsed"),n.classList.remove("w-64"),n.classList.add("w-16"),document.querySelectorAll(".sidebar-label").forEach(p=>p.classList.add("hidden"))):(n.classList.remove("collapsed"),n.classList.remove("w-16"),n.classList.add("w-64"),document.querySelectorAll(".sidebar-label").forEach(p=>p.classList.remove("hidden"))),localStorage.sidebarCollapsed=s?"1":"0"}function a(){n.classList.remove("-translate-x-full"),t.classList.remove("hidden"),document.body.classList.add("overflow-hidden")}function c(){n.classList.add("-translate-x-full"),t.classList.add("hidden"),document.body.classList.remove("overflow-hidden")}function d(){r.matches?(n.classList.remove("-translate-x-full"),t.classList.add("hidden"),document.body.classList.remove("overflow-hidden"),i(localStorage.sidebarCollapsed==="1")):(c(),i(!1))}e.addEventListener("click",h=>{h.stopPropagation(),r.matches?i(!s):n.classList.contains("-translate-x-full")?a():c()}),t.addEventListener("click",c),r.addEventListener("change",d),d()}document.addEventListener("DOMContentLoaded",async()=>{if(hd(),!qt()){window.location.replace("/login.html");return}await fd(),ud();const n=document.getElementById("currentUserInfo"),e=document.getElementById("logoutBtn"),t=document.getElementById("manageUsersBtn"),r=qt();r&&n&&e&&(n.textContent=`User: ${r.username} (${r.role})`,e.onclick=function(){console.log("Logout clicked"),gl(),window.location.replace("/login.html")}),r&&t&&r.role==="SuperAdmin"&&(t.classList.remove("hidden"),t.onclick=jt),md(),pd(),gd(),document.querySelectorAll(".nav-link").forEach(p=>{p.addEventListener("click",function(m){const v=this.dataset.page,A=document.body.dataset.page;if(v===A){m.preventDefault();return}document.body.classList.add("fade-out"),setTimeout(()=>window.location.href=this.href,200)})});const s=document.getElementById("alertBell"),i=document.getElementById("alertDropdown");if(s&&i){let p=function(m){!i.contains(m.target)&&m.target!==s&&i.classList.add("hidden")};s.onclick=function(m){m.stopPropagation(),i.classList.toggle("hidden"),i.classList.contains("hidden")||document.addEventListener("click",p,{once:!0})}}window.updateAlertBell=function(){const p=JSON.parse(localStorage.getItem("cm_shipments_v1")||"[]"),m=document.getElementById("shipmentList"),v=document.getElementById("alertCount");if(!m)return;const A=new Date,T=p.filter(C=>new Date(C.eta)>=A&&!C.arrived);if(p.filter(C=>new Date(C.eta)<A||C.arrived),!T.length)m.innerHTML='<div class="text-gray-400 text-center py-4">No pending shipments</div>',v&&v.classList.add("hidden");else{const C=T.slice(-5).reverse();m.innerHTML=C.map(R=>`
          <div class="border-b border-gray-200 dark:border-gray-700 py-2 px-1 last:border-0">
            <div class="font-semibold">${R.shipmentId||"[No ID]"}</div>
            <div class="text-xs text-gray-500">Vendor: ${R.vendor||"-"}</div>
            <div class="text-xs text-gray-500">Products: ${Array.isArray(R.products)?R.products.map(N=>`${N.model} ×${N.qty}`).join(", "):""}</div>
            <div class="text-xs text-gray-400">${new Date(R.departure).toLocaleDateString()} → ${new Date(R.eta).toLocaleDateString()}</div>
          </div>
        `).join(""),v&&(v.textContent=T.length,v.classList.remove("hidden"))}},typeof window.updateAlertBell=="function"&&updateAlertBell();const a=document.getElementById("globalSearchBtn"),c=document.getElementById("globalSearchDialog");a&&c&&(a.onclick=function(){openGlobalSearchDialog()}),window.openGlobalSearchDialog=function(){c.innerHTML=`
    <form method="dialog" class="flex flex-col gap-4 w-[30rem] max-w-full">
      <h3 class="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Global Search</h3>
      <input id="globalSearchInput" type="text" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800"
        placeholder="Type anything... (product, serial, shipment, vendor)" autofocus>
      <div id="globalSearchResults" class="max-h-60 overflow-y-auto mt-2"></div>
      <div class="flex justify-end gap-2 mt-2">
        <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Close</button>
      </div>
    </form>
  `,c.showModal(),c.querySelector('button[value="cancel"]').onclick=m=>{m.preventDefault(),c.close()};const p=c.querySelector("#globalSearchInput");p.oninput=function(){performGlobalSearch(p.value.trim())},setTimeout(()=>{p.focus()},50),performGlobalSearch("")},window.performGlobalSearch=function(p){const m=document.getElementById("globalSearchResults");if(!m)return;const v=JSON.parse(localStorage.getItem("cm_shipments_v1")||"[]"),A=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]"),T=JSON.parse(localStorage.getItem("cm_products_v1")||"[]");if(!p){m.innerHTML='<div class="text-gray-400 text-center py-6">Start typing to search...</div>';return}const C=p.toLowerCase(),R=v.filter(D=>(D.shipmentId||"").toLowerCase().includes(C)||(D.vendor||"").toLowerCase().includes(C)||(D.incoterm||"").toLowerCase().includes(C)||Array.isArray(D.products)&&D.products.some(K=>(K.model||"").toLowerCase().includes(C))),N=A.filter(D=>(D.chargerId||"").toLowerCase().includes(C)||(D.chargerSerial||"").toLowerCase().includes(C)||(D.simNumber||"").toLowerCase().includes(C)||(D.product||"").toLowerCase().includes(C)||(D.model||"").toLowerCase().includes(C)||(D.notes||"").toLowerCase().includes(C)),B=T.filter(D=>(D.name||"").toLowerCase().includes(C)||(D.hsCode||"").toLowerCase().includes(C)||(D.vendor||"").toLowerCase().includes(C));if(R.length===0&&N.length===0&&B.length===0){m.innerHTML='<div class="text-gray-400 text-center py-6">No results found.</div>';return}m.innerHTML=`
  <div>
    <div class="font-bold text-purple-700 dark:text-purple-300 mt-2">Inventory (${N.length})</div>
    ${N.length?N.map(D=>`
      <div class="border-b border-gray-200 dark:border-gray-700 py-1 flex flex-col gap-1">
        <div><b>ID:</b> ${D.chargerId}</div>
        <div><b>Serial:</b> ${D.chargerSerial||"-"}</div>
        <div><b>SIM:</b> ${D.simNumber||"-"}</div>
        <div><b>Product:</b> ${D.product||"-"}</div>
<div class="flex gap-2 mt-1">
  <button type="button" class="move-btn px-2 py-1 text-xs rounded bg-blue-600 text-white"
    data-chargerid="${D.chargerId}" data-serial="${D.chargerSerial}">Move</button>
  <button type="button" class="edit-inventory-btn px-2 py-1 text-xs rounded bg-green-600 text-white"
    data-chargerid="${D.chargerId}" data-serial="${D.chargerSerial}">Edit</button>
  <button type="button" class="view-inventory-btn px-2 py-1 text-xs rounded bg-purple-600 text-white"
    data-chargerid="${D.chargerId}">View</button>
</div>
      </div>
    `).join(""):'<div class="text-gray-400 text-sm">None</div>'}
  </div>
`,m.querySelectorAll(".move-btn").forEach(D=>{D.onclick=function(){const K=D.dataset.chargerid,ie=D.dataset.serial,w=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]").find(g=>g.chargerId===K&&g.chargerSerial===ie);w?(document.body.dataset.page==="inventory"?window.openMoveDialog(w):(sessionStorage.setItem("pendingInventoryAction",JSON.stringify({action:"move",unit:w})),window.location.href="/pages/inventory.html"),document.getElementById("globalSearchDialog").close()):z("Inventory unit not found","red")}}),m.querySelectorAll(".edit-inventory-btn").forEach(D=>{D.onclick=function(){const K=D.dataset.chargerid,ie=D.dataset.serial,w=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]").find(g=>g.chargerId===K&&g.chargerSerial===ie);w?(document.body.dataset.page==="inventory"?window.openEditDialog(w):(sessionStorage.setItem("pendingInventoryAction",JSON.stringify({action:"edit",unit:w})),window.location.href="/pages/inventory.html"),document.getElementById("globalSearchDialog").close()):z("Inventory unit not found","red")}}),m.querySelectorAll(".view-inventory-btn").forEach(D=>{D.onclick=function(){const K=D.dataset.chargerid,Q=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]").find(w=>w.chargerId===K);Q?(document.body.dataset.page==="inventory"?window.openDetailsDialog(Q):(sessionStorage.setItem("pendingInventoryAction",JSON.stringify({action:"view",unit:Q})),window.location.href="/pages/inventory.html"),document.getElementById("globalSearchDialog").close()):z("Inventory unit not found","red")}})};const d=document.body.dataset.page;d==="settings"&&xs(()=>Promise.resolve().then(()=>Cg),void 0).then(p=>p.initSettings()),d==="products"&&xs(()=>Promise.resolve().then(()=>Og),void 0).then(p=>p.initProducts());const h=document.getElementById("addShipmentBtn");h&&xs(()=>import("./shipments-CG0w9VDa.js"),[]).then(p=>{h.onclick=()=>p.openShipmentDialog()}).catch(p=>{console.error("Failed loading shipments module",p),h.onclick=()=>z("Shipment module failed to load","red")}),document.body.style.visibility="visible"});function z(n,e="green"){const t=document.getElementById("toast");t.textContent=n,t.className=`fixed bottom-6 right-6 z-50 min-w-[200px] max-w-xs bg-${e}-600 text-white font-semibold px-4 py-2 rounded shadow-lg opacity-100 pointer-events-auto transition-opacity duration-300`,setTimeout(()=>{t.classList.remove("opacity-100","pointer-events-auto"),t.classList.add("opacity-0","pointer-events-none")},2e3)}window.showToast=z;window.showLegend=function(n,e){const t=document.getElementById("hoverLegend");t&&(t.textContent=n,t.style.display="block",e&&(t.style.left=e.clientX+16+"px",t.style.top=e.clientY+"px"))};window.hideLegend=function(){const n=document.getElementById("hoverLegend");n&&(n.style.display="none")};if(window.innerWidth<=640){let n=null;document.body.addEventListener("touchstart",function(e){e.touches[0].clientX<32?n=e.touches[0].clientX:n=null},{passive:!0}),document.body.addEventListener("touchend",function(e){n!==null&&e.changedTouches[0].clientX-n>80&&window.history.back(),n=null},{passive:!0})}const yd=()=>{};var Zi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},vd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],d=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(d>>10)),e[r++]=String.fromCharCode(56320+(d&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,d=s+2<n.length,h=d?n[s+2]:0,p=i>>2,m=(i&3)<<4|c>>4;let v=(c&15)<<2|h>>6,A=h&63;d||(A=64,a||(v=64)),r.push(t[p],t[m],t[v],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||m==null)throw new _d;const v=i<<2|c>>4;if(r.push(v),h!==64){const A=c<<4&240|h>>2;if(r.push(A),m!==64){const T=h<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wd=function(n){const e=yl(n);return vl.encodeByteArray(e,!0)},Er=function(n){return wd(n).replace(/\./g,"")},bd=function(n){try{return vl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=()=>Ed().__FIREBASE_DEFAULTS__,Td=()=>{if(typeof process>"u"||typeof Zi>"u")return;const n=Zi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bd(n[1]);return e&&JSON.parse(e)},uo=()=>{try{return yd()||Id()||Td()||Sd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ad=n=>{var e,t;return(t=(e=uo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},xd=n=>{const e=Ad(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},_l=()=>{var n;return(n=uo())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(n){return n.endsWith(".cloudworkstations.dev")}async function Rd(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Er(JSON.stringify(t)),Er(JSON.stringify(a)),""].join(".")}const Tn={};function kd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Tn))Tn[e]?n.emulator.push(e):n.prod.push(e);return n}function Dd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ea=!1;function Vd(n,e){if(typeof window>"u"||typeof document>"u"||!ho(window.location.host)||Tn[n]===e||Tn[n]||ea)return;Tn[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",i=kd().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function d(v,A){v.setAttribute("width","24"),v.setAttribute("id",A),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function h(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{ea=!0,a()},v}function p(v,A){v.setAttribute("id",A),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function m(){const v=Dd(r),A=t("text"),T=document.getElementById(A)||document.createElement("span"),C=t("learnmore"),R=document.getElementById(C)||document.createElement("a"),N=t("preprendIcon"),B=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const D=v.element;c(D),p(R,C);const K=h();d(B,N),D.append(B,T,R,K),document.body.appendChild(D)}i?(T.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nd(){var n;const e=(n=uo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Md(){return!Nd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Od(){try{return typeof indexedDB=="object"}catch{return!1}}function Bd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="FirebaseError";class Jt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$d,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wl.prototype.create)}}class wl{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Fd(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Jt(s,c,r)}}function Fd(n,e){return n.replace(Ud,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ud=/\{\$([^}]+)}/g;function Ir(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ta(i)&&ta(a)){if(!Ir(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ta(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){return n&&n._delegate?n._delegate:n}class Pn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Cd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zd(e))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wt){return this.instances.has(e)}getOptions(e=wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wt){return this.component?this.component.multipleInstances?e:wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jd(n){return n===wt?void 0:n}function zd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(G||(G={}));const Gd={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Wd=G.INFO,Kd={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Qd=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Kd[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bl{constructor(e){this.name=e,this._logLevel=Wd,this._logHandler=Qd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Xd=(n,e)=>e.some(t=>n instanceof t);let na,ra;function Jd(){return na||(na=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yd(){return ra||(ra=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const El=new WeakMap,$s=new WeakMap,Il=new WeakMap,Rs=new WeakMap,fo=new WeakMap;function Zd(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(ot(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&El.set(t,n)}).catch(()=>{}),fo.set(e,n),e}function eh(n){if($s.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});$s.set(n,e)}let Fs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $s.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Il.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ot(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function th(n){Fs=n(Fs)}function nh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ps(this),e,...t);return Il.set(r,e.sort?e.sort():[e]),ot(r)}:Yd().includes(n)?function(...e){return n.apply(Ps(this),e),ot(El.get(this))}:function(...e){return ot(n.apply(Ps(this),e))}}function rh(n){return typeof n=="function"?nh(n):(n instanceof IDBTransaction&&eh(n),Xd(n,Jd())?new Proxy(n,Fs):n)}function ot(n){if(n instanceof IDBRequest)return Zd(n);if(Rs.has(n))return Rs.get(n);const e=rh(n);return e!==n&&(Rs.set(n,e),fo.set(e,n)),e}const Ps=n=>fo.get(n);function sh(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=ot(a);return r&&a.addEventListener("upgradeneeded",d=>{r(ot(a.result),d.oldVersion,d.newVersion,ot(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),c.then(d=>{i&&d.addEventListener("close",()=>i()),s&&d.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const oh=["get","getKey","getAll","getAllKeys","count"],ih=["put","add","delete","clear"],ks=new Map;function sa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ks.get(e))return ks.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ih.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oh.includes(t)))return;const i=async function(a,...c){const d=this.transaction(a,s?"readwrite":"readonly");let h=d.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&d.done]))[0]};return ks.set(e,i),i}th(n=>({...n,get:(e,t,r)=>sa(e,t)||n.get(e,t,r),has:(e,t)=>!!sa(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lh(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Us="@firebase/app",oa="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new bl("@firebase/app"),ch="@firebase/app-compat",uh="@firebase/analytics-compat",dh="@firebase/analytics",hh="@firebase/app-check-compat",fh="@firebase/app-check",ph="@firebase/auth",mh="@firebase/auth-compat",gh="@firebase/database",yh="@firebase/data-connect",vh="@firebase/database-compat",_h="@firebase/functions",wh="@firebase/functions-compat",bh="@firebase/installations",Eh="@firebase/installations-compat",Ih="@firebase/messaging",Th="@firebase/messaging-compat",Sh="@firebase/performance",Ah="@firebase/performance-compat",xh="@firebase/remote-config",Ch="@firebase/remote-config-compat",Rh="@firebase/storage",Ph="@firebase/storage-compat",kh="@firebase/firestore",Dh="@firebase/ai",Vh="@firebase/firestore-compat",Lh="firebase",Nh="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="[DEFAULT]",Mh={[Us]:"fire-core",[ch]:"fire-core-compat",[dh]:"fire-analytics",[uh]:"fire-analytics-compat",[fh]:"fire-app-check",[hh]:"fire-app-check-compat",[ph]:"fire-auth",[mh]:"fire-auth-compat",[gh]:"fire-rtdb",[yh]:"fire-data-connect",[vh]:"fire-rtdb-compat",[_h]:"fire-fn",[wh]:"fire-fn-compat",[bh]:"fire-iid",[Eh]:"fire-iid-compat",[Ih]:"fire-fcm",[Th]:"fire-fcm-compat",[Sh]:"fire-perf",[Ah]:"fire-perf-compat",[xh]:"fire-rc",[Ch]:"fire-rc-compat",[Rh]:"fire-gcs",[Ph]:"fire-gcs-compat",[kh]:"fire-fst",[Vh]:"fire-fst-compat",[Dh]:"fire-vertex","fire-js":"fire-js",[Lh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Map,Oh=new Map,js=new Map;function ia(n,e){try{n.container.addComponent(e)}catch(t){Xe.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ar(n){const e=n.name;if(js.has(e))return Xe.debug(`There were multiple attempts to register component ${e}.`),!1;js.set(e,n);for(const t of Sr.values())ia(t,n);for(const t of Oh.values())ia(t,n);return!0}function Bh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $h(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},it=new wl("app","Firebase",Fh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=Nh;function po(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qs,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw it.create("bad-app-name",{appName:String(s)});if(t||(t=_l()),!t)throw it.create("no-options");const i=Sr.get(s);if(i){if(Ir(t,i.options)&&Ir(r,i.config))return i;throw it.create("duplicate-app",{appName:s})}const a=new Hd(s);for(const d of js.values())a.addComponent(d);const c=new Uh(t,r,a);return Sr.set(s,c),c}function jh(n=qs){const e=Sr.get(n);if(!e&&n===qs&&_l())return po();if(!e)throw it.create("no-app",{appName:n});return e}function $t(n,e,t){var r;let s=(r=Mh[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xe.warn(c.join(" "));return}Ar(new Pn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh="firebase-heartbeat-database",Hh=1,kn="firebase-heartbeat-store";let Ds=null;function Tl(){return Ds||(Ds=sh(zh,Hh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(kn)}catch(t){console.warn(t)}}}}).catch(n=>{throw it.create("idb-open",{originalErrorMessage:n.message})})),Ds}async function Gh(n){try{const t=(await Tl()).transaction(kn),r=await t.objectStore(kn).get(Sl(n));return await t.done,r}catch(e){if(e instanceof Jt)Xe.warn(e.message);else{const t=it.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xe.warn(t.message)}}}async function aa(n,e){try{const r=(await Tl()).transaction(kn,"readwrite");await r.objectStore(kn).put(e,Sl(n)),await r.done}catch(t){if(t instanceof Jt)Xe.warn(t.message);else{const r=it.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xe.warn(r.message)}}}function Sl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=1024,Kh=30;class Qh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Jh(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=la();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Kh){const a=Yh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Xe.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=la(),{heartbeatsToSend:r,unsentEntries:s}=Xh(this._heartbeatsCache.heartbeats),i=Er(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Xe.warn(t),""}}}function la(){return new Date().toISOString().substring(0,10)}function Xh(n,e=Wh){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),ca(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ca(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Jh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Od()?Bd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return aa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return aa(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ca(n){return Er(JSON.stringify({version:2,heartbeats:n})).length}function Yh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n){Ar(new Pn("platform-logger",e=>new ah(e),"PRIVATE")),Ar(new Pn("heartbeat",e=>new Qh(e),"PRIVATE")),$t(Us,oa,n),$t(Us,oa,"esm2017"),$t("fire-js","")}Zh("");var ef="firebase",tf="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(ef,tf,"app");var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var at,Al;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function _(){}_.prototype=g.prototype,w.D=g.prototype,w.prototype=new _,w.prototype.constructor=w,w.C=function(b,E,S){for(var y=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)y[ze-2]=arguments[ze];return g.prototype[E].apply(b,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,g,_){_||(_=0);var b=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)b[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;16>E;++E)b[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=w.g[0],_=w.g[1],E=w.g[2];var S=w.g[3],y=g+(S^_&(E^S))+b[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=S+(E^g&(_^E))+b[1]+3905402710&4294967295,S=g+(y<<12&4294967295|y>>>20),y=E+(_^S&(g^_))+b[2]+606105819&4294967295,E=S+(y<<17&4294967295|y>>>15),y=_+(g^E&(S^g))+b[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(S^_&(E^S))+b[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=S+(E^g&(_^E))+b[5]+1200080426&4294967295,S=g+(y<<12&4294967295|y>>>20),y=E+(_^S&(g^_))+b[6]+2821735955&4294967295,E=S+(y<<17&4294967295|y>>>15),y=_+(g^E&(S^g))+b[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(S^_&(E^S))+b[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=S+(E^g&(_^E))+b[9]+2336552879&4294967295,S=g+(y<<12&4294967295|y>>>20),y=E+(_^S&(g^_))+b[10]+4294925233&4294967295,E=S+(y<<17&4294967295|y>>>15),y=_+(g^E&(S^g))+b[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(S^_&(E^S))+b[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=S+(E^g&(_^E))+b[13]+4254626195&4294967295,S=g+(y<<12&4294967295|y>>>20),y=E+(_^S&(g^_))+b[14]+2792965006&4294967295,E=S+(y<<17&4294967295|y>>>15),y=_+(g^E&(S^g))+b[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(E^S&(_^E))+b[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^E&(g^_))+b[6]+3225465664&4294967295,S=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(S^g))+b[11]+643717713&4294967295,E=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(E^S))+b[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^S&(_^E))+b[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^E&(g^_))+b[10]+38016083&4294967295,S=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(S^g))+b[15]+3634488961&4294967295,E=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(E^S))+b[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^S&(_^E))+b[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^E&(g^_))+b[14]+3275163606&4294967295,S=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(S^g))+b[3]+4107603335&4294967295,E=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(E^S))+b[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^S&(_^E))+b[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=S+(_^E&(g^_))+b[2]+4243563512&4294967295,S=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(S^g))+b[7]+1735328473&4294967295,E=S+(y<<14&4294967295|y>>>18),y=_+(S^g&(E^S))+b[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(_^E^S)+b[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^E)+b[8]+2272392833&4294967295,S=g+(y<<11&4294967295|y>>>21),y=E+(S^g^_)+b[11]+1839030562&4294967295,E=S+(y<<16&4294967295|y>>>16),y=_+(E^S^g)+b[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^S)+b[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^E)+b[4]+1272893353&4294967295,S=g+(y<<11&4294967295|y>>>21),y=E+(S^g^_)+b[7]+4139469664&4294967295,E=S+(y<<16&4294967295|y>>>16),y=_+(E^S^g)+b[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^S)+b[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^E)+b[0]+3936430074&4294967295,S=g+(y<<11&4294967295|y>>>21),y=E+(S^g^_)+b[3]+3572445317&4294967295,E=S+(y<<16&4294967295|y>>>16),y=_+(E^S^g)+b[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^S)+b[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=S+(g^_^E)+b[12]+3873151461&4294967295,S=g+(y<<11&4294967295|y>>>21),y=E+(S^g^_)+b[15]+530742520&4294967295,E=S+(y<<16&4294967295|y>>>16),y=_+(E^S^g)+b[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(E^(_|~S))+b[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~E))+b[7]+1126891415&4294967295,S=g+(y<<10&4294967295|y>>>22),y=E+(g^(S|~_))+b[14]+2878612391&4294967295,E=S+(y<<15&4294967295|y>>>17),y=_+(S^(E|~g))+b[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~S))+b[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~E))+b[3]+2399980690&4294967295,S=g+(y<<10&4294967295|y>>>22),y=E+(g^(S|~_))+b[10]+4293915773&4294967295,E=S+(y<<15&4294967295|y>>>17),y=_+(S^(E|~g))+b[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~S))+b[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~E))+b[15]+4264355552&4294967295,S=g+(y<<10&4294967295|y>>>22),y=E+(g^(S|~_))+b[6]+2734768916&4294967295,E=S+(y<<15&4294967295|y>>>17),y=_+(S^(E|~g))+b[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~S))+b[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=S+(_^(g|~E))+b[11]+3174756917&4294967295,S=g+(y<<10&4294967295|y>>>22),y=E+(g^(S|~_))+b[2]+718787259&4294967295,E=S+(y<<15&4294967295|y>>>17),y=_+(S^(E|~g))+b[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var _=g-this.blockSize,b=this.B,E=this.h,S=0;S<g;){if(E==0)for(;S<=_;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<g;)if(b[E++]=w.charCodeAt(S++),E==this.blockSize){s(this,b),E=0;break}}else for(;S<g;)if(b[E++]=w[S++],E==this.blockSize){s(this,b),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var _=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=_&255,_/=256;for(this.u(w),w=Array(16),g=_=0;4>g;++g)for(var b=0;32>b;b+=8)w[_++]=this.g[g]>>>b&255;return w};function i(w,g){var _=c;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=g(w)}function a(w,g){this.h=g;for(var _=[],b=!0,E=w.length-1;0<=E;E--){var S=w[E]|0;b&&S==g||(_[E]=S,b=!1)}this.g=_}var c={};function d(w){return-128<=w&&128>w?i(w,function(g){return new a([g|0],0>g?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return R(h(-w));for(var g=[],_=1,b=0;w>=_;b++)g[b]=w/_|0,_*=4294967296;return new a(g,0)}function p(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return R(p(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(g,8)),b=m,E=0;E<w.length;E+=8){var S=Math.min(8,w.length-E),y=parseInt(w.substring(E,E+S),g);8>S?(S=h(Math.pow(g,S)),b=b.j(S).add(h(y))):(b=b.j(_),b=b.add(h(y)))}return b}var m=d(0),v=d(1),A=d(16777216);n=a.prototype,n.m=function(){if(C(this))return-R(this).m();for(var w=0,g=1,_=0;_<this.g.length;_++){var b=this.i(_);w+=(0<=b?b:4294967296+b)*g,g*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(C(this))return"-"+R(this).toString(w);for(var g=h(Math.pow(w,6)),_=this,b="";;){var E=K(_,g).g;_=N(_,E.j(g));var S=((0<_.g.length?_.g[0]:_.h)>>>0).toString(w);if(_=E,T(_))return S+b;for(;6>S.length;)S="0"+S;b=S+b}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function C(w){return w.h==-1}n.l=function(w){return w=N(this,w),C(w)?-1:T(w)?0:1};function R(w){for(var g=w.g.length,_=[],b=0;b<g;b++)_[b]=~w.g[b];return new a(_,~w.h).add(v)}n.abs=function(){return C(this)?R(this):this},n.add=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0,E=0;E<=g;E++){var S=b+(this.i(E)&65535)+(w.i(E)&65535),y=(S>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);b=y>>>16,S&=65535,y&=65535,_[E]=y<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function N(w,g){return w.add(R(g))}n.j=function(w){if(T(this)||T(w))return m;if(C(this))return C(w)?R(this).j(R(w)):R(R(this).j(w));if(C(w))return R(this.j(R(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,_=[],b=0;b<2*g;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var E=0;E<w.g.length;E++){var S=this.i(b)>>>16,y=this.i(b)&65535,ze=w.i(E)>>>16,rn=w.i(E)&65535;_[2*b+2*E]+=y*rn,B(_,2*b+2*E),_[2*b+2*E+1]+=S*rn,B(_,2*b+2*E+1),_[2*b+2*E+1]+=y*ze,B(_,2*b+2*E+1),_[2*b+2*E+2]+=S*ze,B(_,2*b+2*E+2)}for(b=0;b<g;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=g;b<2*g;b++)_[b]=0;return new a(_,0)};function B(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function D(w,g){this.g=w,this.h=g}function K(w,g){if(T(g))throw Error("division by zero");if(T(w))return new D(m,m);if(C(w))return g=K(R(w),g),new D(R(g.g),R(g.h));if(C(g))return g=K(w,R(g)),new D(R(g.g),g.h);if(30<w.g.length){if(C(w)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var _=v,b=g;0>=b.l(w);)_=ie(_),b=ie(b);var E=Q(_,1),S=Q(b,1);for(b=Q(b,2),_=Q(_,2);!T(b);){var y=S.add(b);0>=y.l(w)&&(E=E.add(_),S=y),b=Q(b,1),_=Q(_,1)}return g=N(w,E.j(g)),new D(E,g)}for(E=m;0<=w.l(g);){for(_=Math.max(1,Math.floor(w.m()/g.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),S=h(_),y=S.j(g);C(y)||0<y.l(w);)_-=b,S=h(_),y=S.j(g);T(S)&&(S=v),E=E.add(S),w=N(w,y)}return new D(E,w)}n.A=function(w){return K(this,w).h},n.and=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0;b<g;b++)_[b]=this.i(b)&w.i(b);return new a(_,this.h&w.h)},n.or=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0;b<g;b++)_[b]=this.i(b)|w.i(b);return new a(_,this.h|w.h)},n.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),_=[],b=0;b<g;b++)_[b]=this.i(b)^w.i(b);return new a(_,this.h^w.h)};function ie(w){for(var g=w.g.length+1,_=[],b=0;b<g;b++)_[b]=w.i(b)<<1|w.i(b-1)>>>31;return new a(_,w.h)}function Q(w,g){var _=g>>5;g%=32;for(var b=w.g.length-_,E=[],S=0;S<b;S++)E[S]=0<g?w.i(S+_)>>>g|w.i(S+_+1)<<32-g:w.i(S+_);return new a(E,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Al=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,at=a}).apply(typeof ua<"u"?ua:typeof self<"u"?self:typeof window<"u"?window:{});var ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xl,bn,Cl,gr,zs,Rl,Pl,kl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,u){return o==Array.prototype||o==Object.prototype||(o[l]=u.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ur=="object"&&ur];for(var l=0;l<o.length;++l){var u=o[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var u=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var I=o[f];if(!(I in u))break e;u=u[I]}o=o[o.length-1],f=u[o],l=l(f),l!=f&&l!=null&&e(u,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var u=0,f=!1,I={next:function(){if(!f&&u<o.length){var x=u++;return{value:l(x,o[x]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function d(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,u){return o.call.apply(o.bind,arguments)}function m(o,l,u){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),o.apply(l,I)}}return function(){return o.apply(l,arguments)}}function v(o,l,u){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,v.apply(null,arguments)}function A(o,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function T(o,l){function u(){}u.prototype=l.prototype,o.aa=l.prototype,o.prototype=new u,o.prototype.constructor=o,o.Qb=function(f,I,x){for(var V=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)V[Y-2]=arguments[Y];return l.prototype[I].apply(f,V)}}function C(o){const l=o.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=o[f];return u}return[]}function R(o,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(d(f)){const I=o.length||0,x=f.length||0;o.length=I+x;for(let V=0;V<x;V++)o[I+V]=f[V]}else o.push(f)}}class N{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(o){return/^[\s\xa0]*$/.test(o)}function D(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var ie=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function Q(o,l,u){for(const f in o)l.call(u,o[f],f,o)}function w(o,l){for(const u in o)l.call(void 0,o[u],u,o)}function g(o){const l={};for(const u in o)l[u]=o[u];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,l){let u,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(u in f)o[u]=f[u];for(let x=0;x<_.length;x++)u=_[x],Object.prototype.hasOwnProperty.call(f,u)&&(o[u]=f[u])}}function E(o){var l=1;o=o.split(":");const u=[];for(;0<l&&o.length;)u.push(o.shift()),l--;return o.length&&u.push(o.join(":")),u}function S(o){c.setTimeout(()=>{throw o},0)}function y(){var o=rs;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ze{constructor(){this.h=this.g=null}add(l,u){const f=rn.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var rn=new N(()=>new _u,o=>o.reset());class _u{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let sn,on=!1,rs=new ze,Yo=()=>{const o=c.Promise.resolve(void 0);sn=()=>{o.then(wu)}};var wu=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(u){S(u)}var l=rn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}on=!1};function et(){this.s=this.s,this.C=this.C}et.prototype.s=!1,et.prototype.ma=function(){this.s||(this.s=!0,this.N())},et.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ve(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var bu=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return o}();function an(o,l){if(ve.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var u=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ie){e:{try{K(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else u=="mouseover"?l=o.fromElement:u=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Eu[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&an.aa.h.call(this)}}T(an,ve);var Eu={2:"touch",3:"pen",4:"mouse"};an.prototype.h=function(){an.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Hn="closure_listenable_"+(1e6*Math.random()|0),Iu=0;function Tu(o,l,u,f,I){this.listener=o,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=I,this.key=++Iu,this.da=this.fa=!1}function Gn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Wn(o){this.src=o,this.g={},this.h=0}Wn.prototype.add=function(o,l,u,f,I){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var V=os(o,l,f,I);return-1<V?(l=o[V],u||(l.fa=!1)):(l=new Tu(l,this.src,x,!!f,I),l.fa=u,o.push(l)),l};function ss(o,l){var u=l.type;if(u in o.g){var f=o.g[u],I=Array.prototype.indexOf.call(f,l,void 0),x;(x=0<=I)&&Array.prototype.splice.call(f,I,1),x&&(Gn(l),o.g[u].length==0&&(delete o.g[u],o.h--))}}function os(o,l,u,f){for(var I=0;I<o.length;++I){var x=o[I];if(!x.da&&x.listener==l&&x.capture==!!u&&x.ha==f)return I}return-1}var is="closure_lm_"+(1e6*Math.random()|0),as={};function Zo(o,l,u,f,I){if(Array.isArray(l)){for(var x=0;x<l.length;x++)Zo(o,l[x],u,f,I);return null}return u=ni(u),o&&o[Hn]?o.K(l,u,h(f)?!!f.capture:!1,I):Su(o,l,u,!1,f,I)}function Su(o,l,u,f,I,x){if(!l)throw Error("Invalid event type");var V=h(I)?!!I.capture:!!I,Y=cs(o);if(Y||(o[is]=Y=new Wn(o)),u=Y.add(l,u,f,V,x),u.proxy)return u;if(f=Au(),u.proxy=f,f.src=o,f.listener=u,o.addEventListener)bu||(I=V),I===void 0&&(I=!1),o.addEventListener(l.toString(),f,I);else if(o.attachEvent)o.attachEvent(ti(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Au(){function o(u){return l.call(o.src,o.listener,u)}const l=xu;return o}function ei(o,l,u,f,I){if(Array.isArray(l))for(var x=0;x<l.length;x++)ei(o,l[x],u,f,I);else f=h(f)?!!f.capture:!!f,u=ni(u),o&&o[Hn]?(o=o.i,l=String(l).toString(),l in o.g&&(x=o.g[l],u=os(x,u,f,I),-1<u&&(Gn(x[u]),Array.prototype.splice.call(x,u,1),x.length==0&&(delete o.g[l],o.h--)))):o&&(o=cs(o))&&(l=o.g[l.toString()],o=-1,l&&(o=os(l,u,f,I)),(u=-1<o?l[o]:null)&&ls(u))}function ls(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Hn])ss(l.i,o);else{var u=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(u,f,o.capture):l.detachEvent?l.detachEvent(ti(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=cs(l))?(ss(u,o),u.h==0&&(u.src=null,l[is]=null)):Gn(o)}}}function ti(o){return o in as?as[o]:as[o]="on"+o}function xu(o,l){if(o.da)o=!0;else{l=new an(l,this);var u=o.listener,f=o.ha||o.src;o.fa&&ls(o),o=u.call(f,l)}return o}function cs(o){return o=o[is],o instanceof Wn?o:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function ni(o){return typeof o=="function"?o:(o[us]||(o[us]=function(l){return o.handleEvent(l)}),o[us])}function _e(){et.call(this),this.i=new Wn(this),this.M=this,this.F=null}T(_e,et),_e.prototype[Hn]=!0,_e.prototype.removeEventListener=function(o,l,u,f){ei(this,o,l,u,f)};function Se(o,l){var u,f=o.F;if(f)for(u=[];f;f=f.F)u.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new ve(l,o);else if(l instanceof ve)l.target=l.target||o;else{var I=l;l=new ve(f,o),b(l,I)}if(I=!0,u)for(var x=u.length-1;0<=x;x--){var V=l.g=u[x];I=Kn(V,f,!0,l)&&I}if(V=l.g=o,I=Kn(V,f,!0,l)&&I,I=Kn(V,f,!1,l)&&I,u)for(x=0;x<u.length;x++)V=l.g=u[x],I=Kn(V,f,!1,l)&&I}_e.prototype.N=function(){if(_e.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var u=o.g[l],f=0;f<u.length;f++)Gn(u[f]);delete o.g[l],o.h--}}this.F=null},_e.prototype.K=function(o,l,u,f){return this.i.add(String(o),l,!1,u,f)},_e.prototype.L=function(o,l,u,f){return this.i.add(String(o),l,!0,u,f)};function Kn(o,l,u,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,x=0;x<l.length;++x){var V=l[x];if(V&&!V.da&&V.capture==u){var Y=V.listener,pe=V.ha||V.src;V.fa&&ss(o.i,V),I=Y.call(pe,f)!==!1&&I}}return I&&!f.defaultPrevented}function ri(o,l,u){if(typeof o=="function")u&&(o=v(o,u));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function si(o){o.g=ri(()=>{o.g=null,o.i&&(o.i=!1,si(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Cu extends et{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:si(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ln(o){et.call(this),this.h=o,this.g={}}T(ln,et);var oi=[];function ii(o){Q(o.g,function(l,u){this.g.hasOwnProperty(u)&&ls(l)},o),o.g={}}ln.prototype.N=function(){ln.aa.N.call(this),ii(this)},ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ds=c.JSON.stringify,Ru=c.JSON.parse,Pu=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function hs(){}hs.prototype.h=null;function ai(o){return o.h||(o.h=o.i())}function li(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fs(){ve.call(this,"d")}T(fs,ve);function ps(){ve.call(this,"c")}T(ps,ve);var gt={},ci=null;function Qn(){return ci=ci||new _e}gt.La="serverreachability";function ui(o){ve.call(this,gt.La,o)}T(ui,ve);function un(o){const l=Qn();Se(l,new ui(l))}gt.STAT_EVENT="statevent";function di(o,l){ve.call(this,gt.STAT_EVENT,o),this.stat=l}T(di,ve);function Ae(o){const l=Qn();Se(l,new di(l,o))}gt.Ma="timingevent";function hi(o,l){ve.call(this,gt.Ma,o),this.size=l}T(hi,ve);function dn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function hn(){this.g=!0}hn.prototype.xa=function(){this.g=!1};function ku(o,l,u,f,I,x){o.info(function(){if(o.g)if(x)for(var V="",Y=x.split("&"),pe=0;pe<Y.length;pe++){var W=Y[pe].split("=");if(1<W.length){var we=W[0];W=W[1];var be=we.split("_");V=2<=be.length&&be[1]=="type"?V+(we+"="+W+"&"):V+(we+"=redacted&")}}else V=null;else V=x;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+l+`
`+u+`
`+V})}function Du(o,l,u,f,I,x,V){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+l+`
`+u+`
`+x+" "+V})}function Pt(o,l,u,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Lu(o,u)+(f?" "+f:"")})}function Vu(o,l){o.info(function(){return"TIMEOUT: "+l})}hn.prototype.info=function(){};function Lu(o,l){if(!o.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(o=0;o<u.length;o++)if(Array.isArray(u[o])){var f=u[o];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var x=I[0];if(x!="noop"&&x!="stop"&&x!="close")for(var V=1;V<I.length;V++)I[V]=""}}}}return ds(u)}catch{return l}}var Xn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ms;function Jn(){}T(Jn,hs),Jn.prototype.g=function(){return new XMLHttpRequest},Jn.prototype.i=function(){return{}},ms=new Jn;function tt(o,l,u,f){this.j=o,this.i=l,this.l=u,this.R=f||1,this.U=new ln(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pi}function pi(){this.i=null,this.g="",this.h=!1}var mi={},gs={};function ys(o,l,u){o.L=1,o.v=tr(He(l)),o.m=u,o.P=!0,gi(o,null)}function gi(o,l){o.F=Date.now(),Yn(o),o.A=He(o.v);var u=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Pi(u.i,"t",f),o.C=0,u=o.j.J,o.h=new pi,o.g=Ki(o.j,u?l:null,!o.m),0<o.O&&(o.M=new Cu(v(o.Y,o,o.g),o.O)),l=o.U,u=o.g,f=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(oi[0]=I.toString()),I=oi);for(var x=0;x<I.length;x++){var V=Zo(u,I[x],f||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),un(),ku(o.i,o.u,o.A,o.l,o.R,o.m)}tt.prototype.ca=function(o){o=o.target;const l=this.M;l&&Ge(o)==3?l.j():this.Y(o)},tt.prototype.Y=function(o){try{if(o==this.g)e:{const be=Ge(this.g);var l=this.g.Ba();const Vt=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||Oi(this.g)))){this.J||be!=4||l==7||(l==8||0>=Vt?un(3):un(2)),vs(this);var u=this.g.Z();this.X=u;t:if(yi(this)){var f=Oi(this.g);o="";var I=f.length,x=Ge(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yt(this),fn(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(x&&l==I-1)});f.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=u==200,Du(this.i,this.u,this.A,this.l,this.R,be,u),this.o){if(this.T&&!this.K){t:{if(this.g){var Y,pe=this.g;if((Y=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Y)){var W=Y;break t}}W=null}if(u=W)Pt(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_s(this,u);else{this.o=!1,this.s=3,Ae(12),yt(this),fn(this);break e}}if(this.P){u=!0;let Le;for(;!this.J&&this.C<V.length;)if(Le=Nu(this,V),Le==gs){be==4&&(this.s=4,Ae(14),u=!1),Pt(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==mi){this.s=4,Ae(15),Pt(this.i,this.l,V,"[Invalid Chunk]"),u=!1;break}else Pt(this.i,this.l,Le,null),_s(this,Le);if(yi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||V.length!=0||this.h.h||(this.s=1,Ae(16),u=!1),this.o=this.o&&u,!u)Pt(this.i,this.l,V,"[Invalid Chunked Response]"),yt(this),fn(this);else if(0<V.length&&!this.W){this.W=!0;var we=this.j;we.g==this&&we.ba&&!we.M&&(we.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Ss(we),we.M=!0,Ae(11))}}else Pt(this.i,this.l,V,null),_s(this,V);be==4&&yt(this),this.o&&!this.J&&(be==4?zi(this.j,this):(this.o=!1,Yn(this)))}else Yu(this.g),u==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),yt(this),fn(this)}}}catch{}finally{}};function yi(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Nu(o,l){var u=o.C,f=l.indexOf(`
`,u);return f==-1?gs:(u=Number(l.substring(u,f)),isNaN(u)?mi:(f+=1,f+u>l.length?gs:(l=l.slice(f,f+u),o.C=f+u,l)))}tt.prototype.cancel=function(){this.J=!0,yt(this)};function Yn(o){o.S=Date.now()+o.I,vi(o,o.I)}function vi(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=dn(v(o.ba,o),l)}function vs(o){o.B&&(c.clearTimeout(o.B),o.B=null)}tt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Vu(this.i,this.A),this.L!=2&&(un(),Ae(17)),yt(this),this.s=2,fn(this)):vi(this,this.S-o)};function fn(o){o.j.G==0||o.J||zi(o.j,o)}function yt(o){vs(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,ii(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function _s(o,l){try{var u=o.j;if(u.G!=0&&(u.g==o||ws(u.h,o))){if(!o.K&&ws(u.h,o)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<o.F)ar(u),or(u);else break e;Ts(u),Ae(18)}}else u.za=I[1],0<u.za-u.T&&37500>I[2]&&u.F&&u.v==0&&!u.C&&(u.C=dn(v(u.Za,u),6e3));if(1>=bi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else _t(u,11)}else if((o.K||u.g==o)&&ar(u),!B(l))for(I=u.Da.g.parse(l),l=0;l<I.length;l++){let W=I[l];if(u.T=W[0],W=W[1],u.G==2)if(W[0]=="c"){u.K=W[1],u.ia=W[2];const we=W[3];we!=null&&(u.la=we,u.j.info("VER="+u.la));const be=W[4];be!=null&&(u.Aa=be,u.j.info("SVER="+u.Aa));const Vt=W[5];Vt!=null&&typeof Vt=="number"&&0<Vt&&(f=1.5*Vt,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const Le=o.g;if(Le){const cr=Le.g?Le.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(cr){var x=f.h;x.g||cr.indexOf("spdy")==-1&&cr.indexOf("quic")==-1&&cr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(bs(x,x.h),x.h=null))}if(f.D){const As=Le.g?Le.g.getResponseHeader("X-HTTP-Session-Id"):null;As&&(f.ya=As,Z(f.I,f.D,As))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-o.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var V=o;if(f.qa=Wi(f,f.J?f.ia:null,f.W),V.K){Ei(f.h,V);var Y=V,pe=f.L;pe&&(Y.I=pe),Y.B&&(vs(Y),Yn(Y)),f.g=V}else qi(f);0<u.i.length&&ir(u)}else W[0]!="stop"&&W[0]!="close"||_t(u,7);else u.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?_t(u,7):Is(u):W[0]!="noop"&&u.l&&u.l.ta(W),u.v=0)}}un(4)}catch{}}var Mu=class{constructor(o,l){this.g=o,this.map=l}};function _i(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function bi(o){return o.h?1:o.g?o.g.size:0}function ws(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function bs(o,l){o.g?o.g.add(l):o.h=l}function Ei(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}_i.prototype.cancel=function(){if(this.i=Ii(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ii(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const u of o.g.values())l=l.concat(u.D);return l}return C(o.i)}function Ou(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(d(o)){for(var l=[],u=o.length,f=0;f<u;f++)l.push(o[f]);return l}l=[],u=0;for(f in o)l[u++]=o[f];return l}function Bu(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(d(o)||typeof o=="string"){var l=[];o=o.length;for(var u=0;u<o;u++)l.push(u);return l}l=[],u=0;for(const f in o)l[u++]=f;return l}}}function Ti(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(d(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var u=Bu(o),f=Ou(o),I=f.length,x=0;x<I;x++)l.call(void 0,f[x],u&&u[x],o)}var Si=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $u(o,l){if(o){o=o.split("&");for(var u=0;u<o.length;u++){var f=o[u].indexOf("="),I=null;if(0<=f){var x=o[u].substring(0,f);I=o[u].substring(f+1)}else x=o[u];l(x,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function vt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof vt){this.h=o.h,Zn(this,o.j),this.o=o.o,this.g=o.g,er(this,o.s),this.l=o.l;var l=o.i,u=new gn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),Ai(this,u),this.m=o.m}else o&&(l=String(o).match(Si))?(this.h=!1,Zn(this,l[1]||"",!0),this.o=pn(l[2]||""),this.g=pn(l[3]||"",!0),er(this,l[4]),this.l=pn(l[5]||"",!0),Ai(this,l[6]||"",!0),this.m=pn(l[7]||"")):(this.h=!1,this.i=new gn(null,this.h))}vt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(mn(l,xi,!0),":");var u=this.g;return(u||l=="file")&&(o.push("//"),(l=this.o)&&o.push(mn(l,xi,!0),"@"),o.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&o.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&o.push("/"),o.push(mn(u,u.charAt(0)=="/"?qu:Uu,!0))),(u=this.i.toString())&&o.push("?",u),(u=this.m)&&o.push("#",mn(u,zu)),o.join("")};function He(o){return new vt(o)}function Zn(o,l,u){o.j=u?pn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function er(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Ai(o,l,u){l instanceof gn?(o.i=l,Hu(o.i,o.h)):(u||(l=mn(l,ju)),o.i=new gn(l,o.h))}function Z(o,l,u){o.i.set(l,u)}function tr(o){return Z(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function pn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function mn(o,l,u){return typeof o=="string"?(o=encodeURI(o).replace(l,Fu),u&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Fu(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xi=/[#\/\?@]/g,Uu=/[#\?:]/g,qu=/[#\?]/g,ju=/[#\?@]/g,zu=/#/g;function gn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function nt(o){o.g||(o.g=new Map,o.h=0,o.i&&$u(o.i,function(l,u){o.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=gn.prototype,n.add=function(o,l){nt(this),this.i=null,o=kt(this,o);var u=this.g.get(o);return u||this.g.set(o,u=[]),u.push(l),this.h+=1,this};function Ci(o,l){nt(o),l=kt(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ri(o,l){return nt(o),l=kt(o,l),o.g.has(l)}n.forEach=function(o,l){nt(this),this.g.forEach(function(u,f){u.forEach(function(I){o.call(l,I,f,this)},this)},this)},n.na=function(){nt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const I=o[f];for(let x=0;x<I.length;x++)u.push(l[f])}return u},n.V=function(o){nt(this);let l=[];if(typeof o=="string")Ri(this,o)&&(l=l.concat(this.g.get(kt(this,o))));else{o=Array.from(this.g.values());for(let u=0;u<o.length;u++)l=l.concat(o[u])}return l},n.set=function(o,l){return nt(this),this.i=null,o=kt(this,o),Ri(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Pi(o,l,u){Ci(o,l),0<u.length&&(o.i=null,o.g.set(kt(o,l),C(u)),o.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const x=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var I=x;V[f]!==""&&(I+="="+encodeURIComponent(String(V[f]))),o.push(I)}}return this.i=o.join("&")};function kt(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Hu(o,l){l&&!o.j&&(nt(o),o.i=null,o.g.forEach(function(u,f){var I=f.toLowerCase();f!=I&&(Ci(this,f),Pi(this,I,u))},o)),o.j=l}function Gu(o,l){const u=new hn;if(c.Image){const f=new Image;f.onload=A(rt,u,"TestLoadImage: loaded",!0,l,f),f.onerror=A(rt,u,"TestLoadImage: error",!1,l,f),f.onabort=A(rt,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=A(rt,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Wu(o,l){const u=new hn,f=new AbortController,I=setTimeout(()=>{f.abort(),rt(u,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(x=>{clearTimeout(I),x.ok?rt(u,"TestPingServer: ok",!0,l):rt(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),rt(u,"TestPingServer: error",!1,l)})}function rt(o,l,u,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(u)}catch{}}function Ku(){this.g=new Pu}function Qu(o,l,u){const f=u||"";try{Ti(o,function(I,x){let V=I;h(I)&&(V=ds(I)),l.push(f+x+"="+encodeURIComponent(V))})}catch(I){throw l.push(f+"type="+encodeURIComponent("_badmap")),I}}function nr(o){this.l=o.Ub||null,this.j=o.eb||!1}T(nr,hs),nr.prototype.g=function(){return new rr(this.l,this.j)},nr.prototype.i=function(o){return function(){return o}}({});function rr(o,l){_e.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(rr,_e),n=rr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,vn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vn(this)),this.g&&(this.readyState=3,vn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ki(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ki(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?yn(this):vn(this),this.readyState==3&&ki(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,yn(this))},n.Qa=function(o){this.g&&(this.response=o,yn(this))},n.ga=function(){this.g&&yn(this)};function yn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,vn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,o.push(u[0]+": "+u[1]),u=l.next();return o.join(`\r
`)};function vn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Di(o){let l="";return Q(o,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Es(o,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Di(u),typeof o=="string"?u!=null&&encodeURIComponent(String(u)):Z(o,l,u))}function re(o){_e.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(re,_e);var Xu=/^https?$/i,Ju=["POST","PUT"];n=re.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ms.g(),this.v=this.o?ai(this.o):ai(ms),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(x){Vi(this,x);return}if(o=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)u.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const x of f.keys())u.set(x,f.get(x));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(x=>x.toLowerCase()=="content-type"),I=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Ju,l,void 0))||f||I||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,V]of u)this.g.setRequestHeader(x,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Mi(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Vi(this,x)}};function Vi(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,Li(o),sr(o)}function Li(o){o.A||(o.A=!0,Se(o,"complete"),Se(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Se(this,"complete"),Se(this,"abort"),sr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sr(this,!0)),re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ni(this):this.bb())},n.bb=function(){Ni(this)};function Ni(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ge(o)!=4||o.Z()!=2)){if(o.u&&Ge(o)==4)ri(o.Ea,0,o);else if(Se(o,"readystatechange"),Ge(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=V===0){var I=String(o.D).match(Si)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Xu.test(I?I.toLowerCase():"")}u=f}if(u)Se(o,"complete"),Se(o,"success");else{o.m=6;try{var x=2<Ge(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Li(o)}}finally{sr(o)}}}}function sr(o,l){if(o.g){Mi(o);const u=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Se(o,"ready");try{u.onreadystatechange=f}catch{}}}function Mi(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Ge(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Ge(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Ru(l)}};function Oi(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Yu(o){const l={};o=(o.g&&2<=Ge(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(B(o[f]))continue;var u=E(o[f]);const I=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const x=l[I]||[];l[I]=x,x.push(u)}w(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _n(o,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[o]||l}function Bi(o){this.Aa=0,this.i=[],this.j=new hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_n("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_n("baseRetryDelayMs",5e3,o),this.cb=_n("retryDelaySeedMs",1e4,o),this.Wa=_n("forwardChannelMaxRetries",2,o),this.wa=_n("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new _i(o&&o.concurrentRequestLimit),this.Da=new Ku,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Bi.prototype,n.la=8,n.G=1,n.connect=function(o,l,u,f){Ae(0),this.W=o,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Wi(this,null,this.W),ir(this)};function Is(o){if($i(o),o.G==3){var l=o.U++,u=He(o.I);if(Z(u,"SID",o.K),Z(u,"RID",l),Z(u,"TYPE","terminate"),wn(o,u),l=new tt(o,o.j,l),l.L=2,l.v=tr(He(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Ki(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Yn(l)}Gi(o)}function or(o){o.g&&(Ss(o),o.g.cancel(),o.g=null)}function $i(o){or(o),o.u&&(c.clearTimeout(o.u),o.u=null),ar(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ir(o){if(!wi(o.h)&&!o.s){o.s=!0;var l=o.Ga;sn||Yo(),on||(sn(),on=!0),rs.add(l,o),o.B=0}}function Zu(o,l){return bi(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=dn(v(o.Ga,o,l),Hi(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new tt(this,this.j,o);let x=this.o;if(this.S&&(x?(x=g(x),b(x,this.S)):x=this.S),this.m!==null||this.O||(I.H=x,x=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Ui(this,I,l),u=He(this.I),Z(u,"RID",o),Z(u,"CVER",22),this.D&&Z(u,"X-HTTP-Session-Id",this.D),wn(this,u),x&&(this.O?l="headers="+encodeURIComponent(String(Di(x)))+"&"+l:this.m&&Es(u,this.m,x)),bs(this.h,I),this.Ua&&Z(u,"TYPE","init"),this.P?(Z(u,"$req",l),Z(u,"SID","null"),I.T=!0,ys(I,u,null)):ys(I,u,l),this.G=2}}else this.G==3&&(o?Fi(this,o):this.i.length==0||wi(this.h)||Fi(this))};function Fi(o,l){var u;l?u=l.l:u=o.U++;const f=He(o.I);Z(f,"SID",o.K),Z(f,"RID",u),Z(f,"AID",o.T),wn(o,f),o.m&&o.o&&Es(f,o.m,o.o),u=new tt(o,o.j,u,o.B+1),o.m===null&&(u.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Ui(o,u,1e3),u.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),bs(o.h,u),ys(u,f,l)}function wn(o,l){o.H&&Q(o.H,function(u,f){Z(l,f,u)}),o.l&&Ti({},function(u,f){Z(l,f,u)})}function Ui(o,l,u){u=Math.min(o.i.length,u);var f=o.l?v(o.l.Na,o.l,o):null;e:{var I=o.i;let x=-1;for(;;){const V=["count="+u];x==-1?0<u?(x=I[0].g,V.push("ofs="+x)):x=0:V.push("ofs="+x);let Y=!0;for(let pe=0;pe<u;pe++){let W=I[pe].g;const we=I[pe].map;if(W-=x,0>W)x=Math.max(0,I[pe].g-100),Y=!1;else try{Qu(we,V,"req"+W+"_")}catch{f&&f(we)}}if(Y){f=V.join("&");break e}}}return o=o.i.splice(0,u),l.D=o,f}function qi(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;sn||Yo(),on||(sn(),on=!0),rs.add(l,o),o.v=0}}function Ts(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=dn(v(o.Fa,o),Hi(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ji(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=dn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),or(this),ji(this))};function Ss(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ji(o){o.g=new tt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=He(o.qa);Z(l,"RID","rpc"),Z(l,"SID",o.K),Z(l,"AID",o.T),Z(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&Z(l,"TO",o.ja),Z(l,"TYPE","xmlhttp"),wn(o,l),o.m&&o.o&&Es(l,o.m,o.o),o.L&&(o.g.I=o.L);var u=o.g;o=o.ia,u.L=1,u.v=tr(He(l)),u.m=null,u.P=!0,gi(u,o)}n.Za=function(){this.C!=null&&(this.C=null,or(this),Ts(this),Ae(19))};function ar(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function zi(o,l){var u=null;if(o.g==l){ar(o),Ss(o),o.g=null;var f=2}else if(ws(o.h,l))u=l.D,Ei(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var I=o.B;f=Qn(),Se(f,new hi(f,u)),ir(o)}else qi(o);else if(I=l.s,I==3||I==0&&0<l.X||!(f==1&&Zu(o,l)||f==2&&Ts(o)))switch(u&&0<u.length&&(l=o.h,l.i=l.i.concat(u)),I){case 1:_t(o,5);break;case 4:_t(o,10);break;case 3:_t(o,6);break;default:_t(o,2)}}}function Hi(o,l){let u=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(u*=2),u*l}function _t(o,l){if(o.j.info("Error code "+l),l==2){var u=v(o.fb,o),f=o.Xa;const I=!f;f=new vt(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Zn(f,"https"),tr(f),I?Gu(f.toString(),u):Wu(f.toString(),u)}else Ae(2);o.G=0,o.l&&o.l.sa(l),Gi(o),$i(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function Gi(o){if(o.G=0,o.ka=[],o.l){const l=Ii(o.h);(l.length!=0||o.i.length!=0)&&(R(o.ka,l),R(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function Wi(o,l,u){var f=u instanceof vt?He(u):new vt(u);if(f.g!="")l&&(f.g=l+"."+f.g),er(f,f.s);else{var I=c.location;f=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var x=new vt(null);f&&Zn(x,f),l&&(x.g=l),I&&er(x,I),u&&(x.l=u),f=x}return u=o.D,l=o.ya,u&&l&&Z(f,u,l),Z(f,"VER",o.la),wn(o,f),f}function Ki(o,l,u){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new re(new nr({eb:u})):new re(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qi(){}n=Qi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function lr(){}lr.prototype.g=function(o,l){return new Pe(o,l)};function Pe(o,l){_e.call(this),this.g=new Bi(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!B(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Dt(this)}T(Pe,_e),Pe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pe.prototype.close=function(){Is(this.g)},Pe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var u={};u.__data__=o,o=u}else this.u&&(u={},u.__data__=ds(o),o=u);l.i.push(new Mu(l.Ya++,o)),l.G==3&&ir(l)},Pe.prototype.N=function(){this.g.l=null,delete this.j,Is(this.g),delete this.g,Pe.aa.N.call(this)};function Xi(o){fs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const u in l){o=u;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}T(Xi,fs);function Ji(){ps.call(this),this.status=1}T(Ji,ps);function Dt(o){this.g=o}T(Dt,Qi),Dt.prototype.ua=function(){Se(this.g,"a")},Dt.prototype.ta=function(o){Se(this.g,new Xi(o))},Dt.prototype.sa=function(o){Se(this.g,new Ji)},Dt.prototype.ra=function(){Se(this.g,"b")},lr.prototype.createWebChannel=lr.prototype.g,Pe.prototype.send=Pe.prototype.o,Pe.prototype.open=Pe.prototype.m,Pe.prototype.close=Pe.prototype.close,kl=function(){return new lr},Pl=function(){return Qn()},Rl=gt,zs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xn.NO_ERROR=0,Xn.TIMEOUT=8,Xn.HTTP_ERROR=6,gr=Xn,fi.COMPLETE="complete",Cl=fi,li.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",_e.prototype.listen=_e.prototype.K,bn=li,re.prototype.listenOnce=re.prototype.L,re.prototype.getLastError=re.prototype.Ka,re.prototype.getLastErrorCode=re.prototype.Ba,re.prototype.getStatus=re.prototype.Z,re.prototype.getResponseJson=re.prototype.Oa,re.prototype.getResponseText=re.prototype.oa,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Ha,xl=re}).apply(typeof ur<"u"?ur:typeof self<"u"?self:typeof window<"u"?window:{});const da="@firebase/firestore",ha="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ie.UNAUTHENTICATED=new Ie(null),Ie.GOOGLE_CREDENTIALS=new Ie("google-credentials-uid"),Ie.FIRST_PARTY=new Ie("first-party-uid"),Ie.MOCK_USER=new Ie("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new bl("@firebase/firestore");function Lt(){return Et.logLevel}function L(n,...e){if(Et.logLevel<=G.DEBUG){const t=e.map(mo);Et.debug(`Firestore (${Yt}): ${n}`,...t)}}function Je(n,...e){if(Et.logLevel<=G.ERROR){const t=e.map(mo);Et.error(`Firestore (${Yt}): ${n}`,...t)}}function zt(n,...e){if(Et.logLevel<=G.WARN){const t=e.map(mo);Et.warn(`Firestore (${Yt}): ${n}`,...t)}}function mo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Dl(n,r,t)}function Dl(n,e,t){let r=`FIRESTORE (${Yt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Je(r),new Error(r)}function J(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Dl(e,s,r)}function U(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Jt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class nf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ie.UNAUTHENTICATED))}shutdown(){}}class rf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class sf{constructor(e){this.t=e,this.currentUser=Ie.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const s=d=>this.i!==r?(r=this.i,t(d)):Promise.resolve();let i=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new lt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const d=i;e.enqueueRetryable(async()=>{await d.promise,await s(this.currentUser)})},c=d=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(d=>c(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?c(d):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new Vl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new Ie(e)}}class of{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ie.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class af{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new of(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ie.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$h(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new fa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new fa(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=cf(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function Hs(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return q(r,s);{const i=Ll(),a=uf(i.encode(pa(n,t)),i.encode(pa(e,t)));return a!==0?a:q(r,s)}}t+=r>65535?2:1}return q(n.length,e.length)}function pa(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function uf(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return q(n[t],e[t]);return q(n.length,e.length)}function Ht(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=-62135596800,ga=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*ga);return new ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ma)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ga}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ma;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new ue(0,0))}static max(){return new F(new ue(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="__name__";class Oe{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Oe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Oe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Oe.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return q(e.length,t.length)}static compareSegments(e,t){const r=Oe.isNumericId(e),s=Oe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Oe.extractNumericId(e).compare(Oe.extractNumericId(t)):Hs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return at.fromString(e.substring(4,e.length-2))}}class se extends Oe{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const df=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends Oe{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return df.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ya}static keyField(){return new ge([ya])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new M(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const d=e[s+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new M(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=d,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new M(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(se.fromString(e))}static fromName(e){return new O(se.fromString(e).popFirst(5))}static empty(){return new O(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new se(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=-1;function hf(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=F.fromTimestamp(r===1e9?new ue(t+1,0):new ue(t,r));return new ut(s,O.empty(),e)}function ff(n){return new ut(n.readTime,n.key,Dn)}class ut{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ut(F.min(),O.empty(),Dn)}static max(){return new ut(F.max(),O.empty(),Dn)}}function pf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==mf)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},d=>r(d))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let d=0;d<i;d++){const h=d;t(e[h]).next(p=>{a[h]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function yf(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function en(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}qr.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=-1;function jr(n){return n==null}function xr(n){return n===0&&1/n==-1/0}function vf(n){return typeof n=="number"&&Number.isInteger(n)&&!xr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="";function _f(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=va(e)),e=wf(n.get(t),e);return va(e)}function wf(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Ml:t+="";break;default:t+=i}}return t}function va(n){return n+Ml+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ol(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dr(this.root,e,this.comparator,!1)}getReverseIterator(){return new dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dr(this.root,e,this.comparator,!0)}}class dr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=i??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $(43730,{key:this.key,value:this.value});if(this.right.isRed())throw $(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw $(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw $(57766)}get value(){throw $(16141)}get color(){throw $(16727)}get left(){throw $(29726)}get right(){throw $(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wa(this.data.getIterator())}getIteratorFrom(e){return new wa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class wa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Me([])}unionWith(e){let t=new de(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Me(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ht(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bl("Invalid base64 string: "+i):i}}(e);return new ye(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ye.EMPTY_BYTE_STRING=new ye("");const bf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dt(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=bf.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ht(n){return typeof n=="string"?ye.fromBase64String(n):ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l="server_timestamp",Fl="__type__",Ul="__previous_value__",ql="__local_write_time__";function yo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fl])===null||t===void 0?void 0:t.stringValue)===$l}function zr(n){const e=n.mapValue.fields[Ul];return yo(e)?zr(e):e}function Vn(n){const e=dt(n.mapValue.fields[ql].timestampValue);return new ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,r,s,i,a,c,d,h,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=h,this.isUsingEmulator=p}}const Cr="(default)";class Ln{constructor(e,t){this.projectId=e,this.database=t||Cr}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database===Cr}isEqual(e){return e instanceof Ln&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="__type__",If="__max__",hr={mapValue:{}},zl="__vector__",Rr="value";function ft(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?yo(n)?4:Sf(n)?9007199254740991:Tf(n)?10:11:$(28295,{value:n})}function Fe(n,e){if(n===e)return!0;const t=ft(n);if(t!==ft(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vn(n).isEqual(Vn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=dt(s.timestampValue),c=dt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ht(s.bytesValue).isEqual(ht(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),c=oe(i.doubleValue);return a===c?xr(a)===xr(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Ht(n.arrayValue.values||[],e.arrayValue.values||[],Fe);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(_a(a)!==_a(c))return!1;for(const d in a)if(a.hasOwnProperty(d)&&(c[d]===void 0||!Fe(a[d],c[d])))return!1;return!0}(n,e);default:return $(52216,{left:n})}}function Nn(n,e){return(n.values||[]).find(t=>Fe(t,e))!==void 0}function Gt(n,e){if(n===e)return 0;const t=ft(n),r=ft(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=oe(i.integerValue||i.doubleValue),d=oe(a.integerValue||a.doubleValue);return c<d?-1:c>d?1:c===d?0:isNaN(c)?isNaN(d)?0:-1:1}(n,e);case 3:return ba(n.timestampValue,e.timestampValue);case 4:return ba(Vn(n),Vn(e));case 5:return Hs(n.stringValue,e.stringValue);case 6:return function(i,a){const c=ht(i),d=ht(a);return c.compareTo(d)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),d=a.split("/");for(let h=0;h<c.length&&h<d.length;h++){const p=q(c[h],d[h]);if(p!==0)return p}return q(c.length,d.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=q(oe(i.latitude),oe(a.latitude));return c!==0?c:q(oe(i.longitude),oe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ea(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,d,h,p;const m=i.fields||{},v=a.fields||{},A=(c=m[Rr])===null||c===void 0?void 0:c.arrayValue,T=(d=v[Rr])===null||d===void 0?void 0:d.arrayValue,C=q(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((p=T==null?void 0:T.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:Ea(A,T)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===hr.mapValue&&a===hr.mapValue)return 0;if(i===hr.mapValue)return 1;if(a===hr.mapValue)return-1;const c=i.fields||{},d=Object.keys(c),h=a.fields||{},p=Object.keys(h);d.sort(),p.sort();for(let m=0;m<d.length&&m<p.length;++m){const v=Hs(d[m],p[m]);if(v!==0)return v;const A=Gt(c[d[m]],h[p[m]]);if(A!==0)return A}return q(d.length,p.length)}(n.mapValue,e.mapValue);default:throw $(23264,{Pe:t})}}function ba(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=dt(n),r=dt(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function Ea(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Gt(t[s],r[s]);if(i)return i}return q(t.length,r.length)}function Wt(n){return Gs(n)}function Gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=dt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ht(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return O.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Gs(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Gs(t.fields[a])}`;return s+"}"}(n.mapValue):$(61005,{value:n})}function yr(n){switch(ft(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zr(n);return e?16+yr(e):16;case 5:return 2*n.stringValue.length;case 6:return ht(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+yr(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Tt(r.fields,(i,a)=>{s+=i.length+yr(a)}),s}(n.mapValue);default:throw $(13486,{value:n})}}function Ws(n){return!!n&&"integerValue"in n}function vo(n){return!!n&&"arrayValue"in n}function Ia(n){return!!n&&"nullValue"in n}function Ta(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vr(n){return!!n&&"mapValue"in n}function Tf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[jl])===null||t===void 0?void 0:t.stringValue)===zl}function Sn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Tt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Sn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Sf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===If}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!vr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sn(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const d=this.getFieldsMap(t);this.applyChanges(d,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Sn(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());vr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];vr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Tt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new De(Sn(this.value))}}function Hl(n){const e=[];return Tt(n.fields,(t,r)=>{const s=new ge([t]);if(vr(r)){const i=Hl(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Me(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Te(e,0,F.min(),F.min(),F.min(),De.empty(),0)}static newFoundDocument(e,t,r,s){return new Te(e,1,t,F.min(),r,s,0)}static newNoDocument(e,t){return new Te(e,2,t,F.min(),F.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Te(e,3,t,F.min(),F.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Te&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Te(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.position=e,this.inclusive=t}}function Sa(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),t.key):r=Gt(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Aa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fe(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Af(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{}class ce extends Gl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Cf(e,t,r):t==="array-contains"?new kf(e,r):t==="in"?new Df(e,r):t==="not-in"?new Vf(e,r):t==="array-contains-any"?new Lf(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Rf(e,r):new Pf(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Gt(t,this.value)):t!==null&&ft(this.value)===ft(t)&&this.matchesComparison(Gt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ue extends Gl{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ue(e,t)}matches(e){return Wl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Wl(n){return n.op==="and"}function Kl(n){return xf(n)&&Wl(n)}function xf(n){for(const e of n.filters)if(e instanceof Ue)return!1;return!0}function Ks(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+Wt(n.value);if(Kl(n))return n.filters.map(e=>Ks(e)).join(",");{const e=n.filters.map(t=>Ks(t)).join(",");return`${n.op}(${e})`}}function Ql(n,e){return n instanceof ce?function(r,s){return s instanceof ce&&r.op===s.op&&r.field.isEqual(s.field)&&Fe(r.value,s.value)}(n,e):n instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Ql(a,s.filters[c]),!0):!1}(n,e):void $(19439)}function Xl(n){return n instanceof ce?function(t){return`${t.field.canonicalString()} ${t.op} ${Wt(t.value)}`}(n):n instanceof Ue?function(t){return t.op.toString()+" {"+t.getFilters().map(Xl).join(" ,")+"}"}(n):"Filter"}class Cf extends ce{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Rf extends ce{constructor(e,t){super(e,"in",t),this.keys=Jl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pf extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Jl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Jl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class kf extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vo(t)&&Nn(t.arrayValue,this.value)}}class Df extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nn(this.value.arrayValue,t)}}class Vf extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Nn(this.value.arrayValue,t)}}class Lf extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Ie=null}}function xa(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Nf(n,e,t,r,s,i,a)}function _o(n){const e=U(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Ks(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),jr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Wt(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Wt(r)).join(",")),e.Ie=t}return e.Ie}function wo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Af(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ql(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Aa(n.startAt,e.startAt)&&Aa(n.endAt,e.endAt)}function Qs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=d,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Mf(n,e,t,r,s,i,a,c){return new Hr(n,e,t,r,s,i,a,c)}function bo(n){return new Hr(n)}function Ca(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Of(n){return n.collectionGroup!==null}function An(n){const e=U(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new de(ge.comparator);return a.filters.forEach(d=>{d.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new kr(i,r))}),t.has(ge.keyField().canonicalString())||e.Ee.push(new kr(ge.keyField(),r))}return e.Ee}function Be(n){const e=U(n);return e.de||(e.de=Bf(e,An(n))),e.de}function Bf(n,e){if(n.limitType==="F")return xa(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new kr(s.field,i)});const t=n.endAt?new Pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Pr(n.startAt.position,n.startAt.inclusive):null;return xa(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xs(n,e,t){return new Hr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Gr(n,e){return wo(Be(n),Be(e))&&n.limitType===e.limitType}function Yl(n){return`${_o(Be(n))}|lt:${n.limitType}`}function Nt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Xl(s)).join(", ")}]`),jr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Wt(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Wt(s)).join(",")),`Target(${r})`}(Be(n))}; limitType=${n.limitType})`}function Wr(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):O.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of An(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,d){const h=Sa(a,c,d);return a.inclusive?h<=0:h<0}(r.startAt,An(r),s)||r.endAt&&!function(a,c,d){const h=Sa(a,c,d);return a.inclusive?h>=0:h>0}(r.endAt,An(r),s))}(n,e)}function $f(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Zl(n){return(e,t)=>{let r=!1;for(const s of An(n)){const i=Ff(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Ff(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(i,a,c){const d=a.data.field(i),h=c.data.field(i);return d!==null&&h!==null?Gt(d,h):$(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Tt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ol(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new ne(O.comparator);function Ye(){return Uf}const ec=new ne(O.comparator);function En(...n){let e=ec;for(const t of n)e=e.insert(t.key,t);return e}function tc(n){let e=ec;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function bt(){return xn()}function nc(){return xn()}function xn(){return new St(n=>n.toString(),(n,e)=>n.isEqual(e))}const qf=new ne(O.comparator),jf=new de(O.comparator);function j(...n){let e=jf;for(const t of n)e=e.add(t);return e}const zf=new de(q);function Hf(){return zf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xr(e)?"-0":e}}function rc(n){return{integerValue:""+n}}function Gf(n,e){return vf(e)?rc(e):Eo(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this._=void 0}}function Wf(n,e,t){return n instanceof Dr?function(s,i){const a={fields:{[Fl]:{stringValue:$l},[ql]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&yo(i)&&(i=zr(i)),i&&(a.fields[Ul]=i),{mapValue:a}}(t,e):n instanceof Mn?oc(n,e):n instanceof On?ic(n,e):function(s,i){const a=sc(s,i),c=Ra(a)+Ra(s.Re);return Ws(a)&&Ws(s.Re)?rc(c):Eo(s.serializer,c)}(n,e)}function Kf(n,e,t){return n instanceof Mn?oc(n,e):n instanceof On?ic(n,e):t}function sc(n,e){return n instanceof Vr?function(r){return Ws(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Dr extends Kr{}class Mn extends Kr{constructor(e){super(),this.elements=e}}function oc(n,e){const t=ac(e);for(const r of n.elements)t.some(s=>Fe(s,r))||t.push(r);return{arrayValue:{values:t}}}class On extends Kr{constructor(e){super(),this.elements=e}}function ic(n,e){let t=ac(e);for(const r of n.elements)t=t.filter(s=>!Fe(s,r));return{arrayValue:{values:t}}}class Vr extends Kr{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Ra(n){return oe(n.integerValue||n.doubleValue)}function ac(n){return vo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Qf(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Mn&&s instanceof Mn||r instanceof On&&s instanceof On?Ht(r.elements,s.elements,Fe):r instanceof Vr&&s instanceof Vr?Fe(r.Re,s.Re):r instanceof Dr&&s instanceof Dr}(n.transform,e.transform)}class Xf{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _r(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Qr{}function lc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new uc(n.key,Ke.none()):new Fn(n.key,n.data,Ke.none());{const t=n.data,r=De.empty();let s=new de(ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new At(n.key,r,new Me(s.toArray()),Ke.none())}}function Jf(n,e,t){n instanceof Fn?function(s,i,a){const c=s.value.clone(),d=ka(s.fieldTransforms,i,a.transformResults);c.setAll(d),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof At?function(s,i,a){if(!_r(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=ka(s.fieldTransforms,i,a.transformResults),d=i.data;d.setAll(cc(s)),d.setAll(c),i.convertToFoundDocument(a.version,d).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Cn(n,e,t,r){return n instanceof Fn?function(i,a,c,d){if(!_r(i.precondition,a))return c;const h=i.value.clone(),p=Da(i.fieldTransforms,d,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof At?function(i,a,c,d){if(!_r(i.precondition,a))return c;const h=Da(i.fieldTransforms,d,a),p=a.data;return p.setAll(cc(i)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return _r(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function Yf(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=sc(r.transform,s||null);i!=null&&(t===null&&(t=De.empty()),t.set(r.field,i))}return t||null}function Pa(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ht(r,s,(i,a)=>Qf(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Fn extends Qr{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class At extends Qr{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function cc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ka(n,e,t){const r=new Map;J(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Kf(a,c,t[s]))}return r}function Da(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Wf(i,a,e))}return r}class uc extends Qr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zf extends Qr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Jf(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Cn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Cn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=nc();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const d=lc(a,c);d!==null&&r.set(s.key,d),a.isValidDocument()||a.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&Ht(this.mutations,e.mutations,(t,r)=>Pa(t,r))&&Ht(this.baseMutations,e.baseMutations,(t,r)=>Pa(t,r))}}class Io{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return qf}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Io(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,H;function rp(n){switch(n){case k.OK:return $(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return $(15467,{code:n})}}function dc(n){if(n===void 0)return Je("GRPC error has no .code"),k.UNKNOWN;switch(n){case ae.OK:return k.OK;case ae.CANCELLED:return k.CANCELLED;case ae.UNKNOWN:return k.UNKNOWN;case ae.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ae.INTERNAL:return k.INTERNAL;case ae.UNAVAILABLE:return k.UNAVAILABLE;case ae.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ae.NOT_FOUND:return k.NOT_FOUND;case ae.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ae.ABORTED:return k.ABORTED;case ae.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ae.DATA_LOSS:return k.DATA_LOSS;default:return $(39323,{code:n})}}(H=ae||(ae={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=new at([4294967295,4294967295],0);function Va(n){const e=Ll().encode(n),t=new Al;return t.update(e),new Uint8Array(t.digest())}function La(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new at([t,r],0),new at([s,i],0)]}class To{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new In(`Invalid padding: ${t}`);if(r<0)throw new In(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new In(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new In(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=at.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(at.fromNumber(r)));return s.compare(sp)===1&&(s=new at([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Va(e),[r,s]=La(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.Se(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new To(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.pe===0)return;const t=Va(e),[r,s]=La(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.be(a)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class In extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Un.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Xr(F.min(),s,new ne(q),Ye(),j())}}class Un{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Un(r,t,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class hc{constructor(e,t){this.targetId=e,this.Ce=t}}class fc{constructor(e,t,r=ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Na{constructor(){this.Fe=0,this.Me=Ma(),this.xe=ye.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=j(),t=j(),r=j();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$(38017,{changeType:i})}}),new Un(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Ma()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,J(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class op{constructor(e){this.ze=e,this.je=new Map,this.He=Ye(),this.Je=fr(),this.Ye=fr(),this.Ze=new ne(q)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:$(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Qs(i))if(r===0){const a=new O(i.path);this.tt(t,a,Te.newNoDocument(a,F.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const c=this.ct(e),d=c?this.lt(c,e,a):1;if(d!==0){this.st(t);const h=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=ht(r).toUint8Array()}catch(d){if(d instanceof Bl)return zt("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{c=new To(a,s,i)}catch(d){return zt(d instanceof In?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return c.pe===0?null:c}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,a)=>{const c=this._t(a);if(c){if(i.current&&Qs(c.target)){const d=new O(c.target.path);this.Et(d).has(a)||this.dt(a,d)||this.tt(a,d,Te.newNoDocument(d,e))}i.Le&&(t.set(a,i.qe()),i.Qe())}});let r=j();this.Ye.forEach((i,a)=>{let c=!0;a.forEachWhile(d=>{const h=this._t(d);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,a)=>a.setReadTime(e));const s=new Xr(e,t,this.Ze,this.He,r);return this.He=Ye(),this.Je=fr(),this.Ye=fr(),this.Ze=new ne(q),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Na,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new de(q),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new de(q),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Na),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function fr(){return new ne(O.comparator)}function Ma(){return new ne(O.comparator)}const ip={asc:"ASCENDING",desc:"DESCENDING"},ap={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lp={and:"AND",or:"OR"};class cp{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Js(n,e){return n.useProto3Json||jr(e)?e:{value:e}}function Lr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function up(n,e){return Lr(n,e.toTimestamp())}function $e(n){return J(!!n,49232),F.fromTimestamp(function(t){const r=dt(t);return new ue(r.seconds,r.nanos)}(n))}function So(n,e){return Ys(n,e).canonicalString()}function Ys(n,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function mc(n){const e=se.fromString(n);return J(wc(e),10190,{key:e.toString()}),e}function Zs(n,e){return So(n.databaseId,e.path)}function Vs(n,e){const t=mc(e);if(t.get(1)!==n.databaseId.projectId)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(yc(t))}function gc(n,e){return So(n.databaseId,e)}function dp(n){const e=mc(n);return e.length===4?se.emptyPath():yc(e)}function eo(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function yc(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Oa(n,e,t){return{name:Zs(n,e),fields:t.value.mapValue.fields}}function hp(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:$(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(J(p===void 0||typeof p=="string",58123),ye.fromBase64String(p||"")):(J(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),ye.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const p=h.code===void 0?k.UNKNOWN:dc(h.code);return new M(p,h.message||"")}(a);t=new fc(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Vs(n,r.document.name),i=$e(r.document.updateTime),a=r.document.createTime?$e(r.document.createTime):F.min(),c=new De({mapValue:{fields:r.document.fields}}),d=Te.newFoundDocument(s,i,a,c),h=r.targetIds||[],p=r.removedTargetIds||[];t=new wr(h,p,d.key,d)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Vs(n,r.document),i=r.readTime?$e(r.readTime):F.min(),a=Te.newNoDocument(s,i),c=r.removedTargetIds||[];t=new wr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Vs(n,r.document),i=r.removedTargetIds||[];t=new wr([],i,s,null)}else{if(!("filter"in e))return $(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new np(s,i),c=r.targetId;t=new hc(c,a)}}return t}function fp(n,e){let t;if(e instanceof Fn)t={update:Oa(n,e.key,e.value)};else if(e instanceof uc)t={delete:Zs(n,e.key)};else if(e instanceof At)t={update:Oa(n,e.key,e.data),updateMask:Ep(e.fieldMask)};else{if(!(e instanceof Zf))return $(16599,{ft:e.type});t={verify:Zs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Mn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof On)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Vr)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw $(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:up(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$(27497)}(n,e.precondition)),t}function pp(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?$e(s.updateTime):$e(i);return a.isEqual(F.min())&&(a=$e(i)),new Xf(a,s.transformResults||[])}(t,e))):[]}function mp(n,e){return{documents:[gc(n,e.path)]}}function gp(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=gc(n,s);const i=function(h){if(h.length!==0)return _c(Ue.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(p=>function(v){return{field:Mt(v.field),direction:_p(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Js(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:t,parent:s}}function yp(n){let e=dp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(m){const v=vc(m);return v instanceof Ue&&Kl(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(v=>function(T){return new kr(Ot(T.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(m){let v;return v=typeof m=="object"?m.value:m,jr(v)?null:v}(t.limit));let d=null;t.startAt&&(d=function(m){const v=!!m.before,A=m.values||[];return new Pr(A,v)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const v=!m.before,A=m.values||[];return new Pr(A,v)}(t.endAt)),Mf(e,s,a,i,c,"F",d,h)}function vp(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function vc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ot(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ot(t.unaryFilter.field);return ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ot(t.unaryFilter.field);return ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ot(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return $(61313);default:return $(60726)}}(n):n.fieldFilter!==void 0?function(t){return ce.create(Ot(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return $(58110);default:return $(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ue.create(t.compositeFilter.filters.map(r=>vc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $(1026)}}(t.compositeFilter.op))}(n):$(30097,{filter:n})}function _p(n){return ip[n]}function wp(n){return ap[n]}function bp(n){return lp[n]}function Mt(n){return{fieldPath:n.canonicalString()}}function Ot(n){return ge.fromServerFormat(n.fieldPath)}function _c(n){return n instanceof ce?function(t){if(t.op==="=="){if(Ta(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NAN"}};if(Ia(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ta(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NOT_NAN"}};if(Ia(t.value))return{unaryFilter:{field:Mt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mt(t.field),op:wp(t.op),value:t.value}}}(n):n instanceof Ue?function(t){const r=t.getFilters().map(s=>_c(s));return r.length===1?r[0]:{compositeFilter:{op:bp(t.op),filters:r}}}(n):$(54877,{filter:n})}function Ep(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function wc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t,r,s,i=F.min(),a=F.min(),c=ye.EMPTY_BYTE_STRING,d=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=d}withSequenceNumber(e){return new st(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new st(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e){this.wt=e}}function Tp(n){const e=yp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Xs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.Cn=new Ap}addToCollectionParentIndex(e,t){return this.Cn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(ut.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(ut.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class Ap{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new de(se.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new de(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},bc=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(bc,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Kt(0)}static lr(){return new Kt(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="LruGarbageCollector",xp=1048576;function Fa([n,e],[t,r]){const s=q(n,t);return s===0?q(e,r):s}class Cp{constructor(e){this.Er=e,this.buffer=new de(Fa),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Fa(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Rp{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){L($a,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){en(t)?L($a,"Ignoring IndexedDB error during garbage collection: ",t):await Zt(t)}await this.mr(3e5)})}}class Pp{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(qr.le);const r=new Cp(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Ba)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ba):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,a,c,d,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,d=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(h=Date.now(),Lt()<=G.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(d-c)+`ms
	Removed ${m} documents in `+(h-d)+`ms
Total Duration: ${h-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function kp(n,e){return new Pp(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.changes=new St(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Te.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Cn(r.mutation,s,Me.empty(),ue.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){const s=bt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=En();return i.forEach((c,d)=>{a=a.insert(c,d.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=bt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Ye();const a=xn(),c=function(){return xn()}();return t.forEach((d,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof At)?i=i.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),Cn(p.mutation,h,p.mutation.getFieldMask(),ue.now())):a.set(h.key,Me.empty())}),this.recalculateAndSaveOverlays(e,i).next(d=>(d.forEach((h,p)=>a.set(h,p)),t.forEach((h,p)=>{var m;return c.set(h,new Vp(p,(m=a.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=xn();let s=new ne((a,c)=>a-c),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(d=>{const h=t.get(d);if(h===null)return;let p=r.get(d)||Me.empty();p=c.applyToLocalView(h,p),r.set(d,p);const m=(s.get(c.batchId)||j()).add(d);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const d=c.getNext(),h=d.key,p=d.value,m=nc();p.forEach(v=>{if(!i.has(v)){const A=lc(t.get(v),r.get(v));A!==null&&m.set(v,A),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Of(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(bt());let c=Dn,d=i;return a.next(h=>P.forEach(h,(p,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{d=d.insert(p,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,d,h,j())).next(p=>({batchId:c,changes:tc(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=En();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=En();return this.indexManager.getCollectionParents(e,i).next(c=>P.forEach(c,d=>{const h=function(m,v){return new Hr(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,d.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,v)=>{a=a.insert(m,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((d,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,Te.newInvalidDocument(p)))});let c=En();return a.forEach((d,h)=>{const p=i.get(d);p!==void 0&&Cn(p.mutation,h,Me.empty(),ue.now()),Wr(t,h)&&(c=c.insert(d,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return P.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:$e(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:Tp(s.bundledQuery),readTime:$e(s.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(){this.overlays=new ne(O.comparator),this.Qr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=bt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=bt(),i=t.length+1,a=new O(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const d=c.getNext().value,h=d.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&d.largestBatchId>r&&s.set(d.getKey(),d)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ne((h,p)=>h-p);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=bt(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=bt(),d=i.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((h,p)=>c.set(h,p)),!(c.size()>=s)););return P.resolve(c)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new tp(t,r));let i=this.Qr.get(t);i===void 0&&(i=j(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.sessionToken=ye.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.$r=new de(he.Ur),this.Kr=new de(he.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new he(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new he(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new O(new se([])),r=new he(t,e),s=new he(t,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new O(new se([])),r=new he(t,e),s=new he(t,e+1);let i=j();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new he(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class he{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return O.comparator(e.key,t.key)||q(e.Zr,t.Zr)}static Wr(e,t){return q(e.Zr,t.Zr)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new de(he.Ur)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ep(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Xr=this.Xr.add(new he(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?go:this.nr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new he(t,0),s=new he(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const c=this.ei(a.Zr);i.push(c)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(q);return t.forEach(s=>{const i=new he(s,0),a=new he(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],c=>{r=r.add(c.Zr)})}),P.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const a=new he(new O(i),0);let c=new de(q);return this.Xr.forEachWhile(d=>{const h=d.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(d.Zr)),!0)},a),P.resolve(this.ni(c))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){J(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return P.forEach(t.mutations,s=>{const i=new he(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new he(t,0),s=this.Xr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.ii=e,this.docs=function(){return new ne(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Te.newInvalidDocument(t))}getEntries(e,t){let r=Ye();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Te.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Ye();const a=t.path,c=new O(a.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){const{key:h,value:{document:p}}=d.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||pf(ff(p),r)<=0||(s.has(p.key)||Wr(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$(9500)}si(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Fp(this)}getSize(e){return P.resolve(this.size)}}class Fp extends Dp{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.persistence=e,this.oi=new St(t=>_o(t),wo),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this._i=0,this.ai=new Ao,this.targetCount=0,this.ui=Kt.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),P.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Kt(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Tr(t),P.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.ci={},this.overlays={},this.li=new qr(0),this.hi=!1,this.hi=!0,this.Pi=new Op,this.referenceDelegate=e(this),this.Ti=new Up(this),this.indexManager=new Sp,this.remoteDocumentCache=function(s){return new $p(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Ip(t),this.Ei=new Np(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Mp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new Bp(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new qp(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return P.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class qp extends gf{constructor(e){super(),this.currentSequenceNumber=e}}class xo{constructor(e){this.persistence=e,this.Vi=new Ao,this.mi=null}static fi(e){return new xo(e)}get gi(){if(this.mi)return this.mi;throw $(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.gi,r=>{const s=O.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,F.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return P.or([()=>P.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Nr{constructor(e,t){this.persistence=e,this.yi=new St(r=>_f(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=kp(this,t)}static fi(e,t){return new Nr(e,t)}di(){}Ai(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return P.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,F.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),P.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yr(e.data.value)),t}Dr(e,t,r){return P.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=j(),s=j();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Co(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Md()?8:yf(Ld())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new jp;return this.bs(e,t,a).next(c=>{if(i.result=c,this.fs)return this.Ds(e,t,a,c.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(Lt()<=G.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Nt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),P.resolve()):(Lt()<=G.DEBUG&&L("QueryEngine","Query:",Nt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Lt()<=G.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Nt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Be(t))):P.resolve())}ws(e,t){if(Ca(t))return P.resolve(null);let r=Be(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Xs(t,null,"F"),r=Be(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=j(...i);return this.ys.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(d=>{const h=this.vs(t,c);return this.Cs(t,h,a,d.readTime)?this.ws(e,Xs(t,null,"F")):this.Fs(e,h,t,d)}))})))}Ss(e,t,r,s){return Ca(t)||s.isEqual(F.min())?P.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(t,i);return this.Cs(t,a,r,s)?P.resolve(null):(Lt()<=G.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nt(t)),this.Fs(e,a,t,hf(s,Dn)).next(c=>c))})}vs(e,t){let r=new de(Zl(e));return t.forEach((s,i)=>{Wr(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,t,r){return Lt()<=G.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Nt(t)),this.ys.getDocumentsMatchingQuery(e,t,ut.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="LocalStore",Hp=3e8;class Gp{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new ne(q),this.Os=new St(i=>_o(i),wo),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lp(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Wp(n,e,t,r){return new Gp(n,e,t,r)}async function Ic(n,e){const t=U(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let d=j();for(const h of s){a.push(h.batchId);for(const p of h.mutations)d=d.add(p.key)}for(const h of i){c.push(h.batchId);for(const p of h.mutations)d=d.add(p.key)}return t.localDocuments.getDocuments(r,d).next(h=>({ks:h,removedBatchIds:a,addedBatchIds:c}))})})}function Kp(n,e){const t=U(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(c,d,h,p){const m=h.batch,v=m.keys();let A=P.resolve();return v.forEach(T=>{A=A.next(()=>p.getEntry(d,T)).next(C=>{const R=h.docVersions.get(T);J(R!==null,48541),C.version.compareTo(R)<0&&(m.applyToRemoteDocument(C,h),C.isValidDocument()&&(C.setReadTime(h.commitVersion),p.addEntry(C)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(d,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let d=j();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(d=d.add(c.batch.mutations[h].key));return d}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Tc(n){const e=U(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function Qp(n,e){const t=U(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const c=[];e.targetChanges.forEach((p,m)=>{const v=s.get(m);if(!v)return;c.push(t.Ti.removeMatchingKeys(i,p.removedDocuments,m).next(()=>t.Ti.addMatchingKeys(i,p.addedDocuments,m)));let A=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(ye.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),s=s.insert(m,A),function(C,R,N){return C.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=Hp?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(v,A,p)&&c.push(t.Ti.updateTargetData(i,A))});let d=Ye(),h=j();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(Xp(i,a,e.documentUpdates).next(p=>{d=p.qs,h=p.Qs})),!r.isEqual(F.min())){const p=t.Ti.getLastRemoteSnapshotVersion(i).next(m=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return P.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,d,h)).next(()=>d)}).then(i=>(t.xs=s,i))}function Xp(n,e,t){let r=j(),s=j();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Ye();return t.forEach((c,d)=>{const h=i.get(c);d.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),d.isNoDocument()&&d.version.isEqual(F.min())?(e.removeEntry(c,d.readTime),a=a.insert(c,d)):!h.isValidDocument()||d.version.compareTo(h.version)>0||d.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(d),a=a.insert(c,d)):L(Ro,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",d.version)}),{qs:a,Qs:s}})}function Jp(n,e){const t=U(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=go),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Yp(n,e){const t=U(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.Ti.allocateTargetId(r).next(a=>(s=new st(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function to(n,e,t){const r=U(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!en(a))throw a;L(Ro,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Ua(n,e,t){const r=U(n);let s=F.min(),i=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(d,h,p){const m=U(d),v=m.Os.get(p);return v!==void 0?P.resolve(m.xs.get(v)):m.Ti.getTargetData(h,p)}(r,a,Be(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,c.targetId).next(d=>{i=d})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?i:j())).next(c=>(Zp(r,$f(e),c),{documents:c,$s:i})))}function Zp(n,e,t){let r=n.Ns.get(e)||F.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class qa{constructor(){this.activeTargetIds=Hf()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class em{constructor(){this.xo=new qa,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new qa,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="ConnectivityMonitor";class za{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){L(ja,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){L(ja,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr=null;function no(){return pr===null?pr=function(){return 268435456+Math.round(2147483648*Math.random())}():pr++,"0x"+pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="RestConnection",nm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rm{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Cr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const a=no(),c=this.jo(e,t.toUriEncodedString());L(Ls,`Sending RPC '${e}' ${a}:`,c,r);const d={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(d,s,i);const{host:h}=new URL(c),p=ho(h);return this.Jo(e,c,d,r,p).then(m=>(L(Ls,`Received RPC '${e}' ${a}: `,m),m),m=>{throw zt(Ls,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}Yo(e,t,r,s,i,a){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=nm[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee="WebChannelConnection";class om extends rm{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=no();return new Promise((c,d)=>{const h=new xl;h.setWithCredentials(!0),h.listenOnce(Cl.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case gr.NO_ERROR:const m=h.getResponseJson();L(Ee,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case gr.TIMEOUT:L(Ee,`RPC '${e}' ${a} timed out`),d(new M(k.DEADLINE_EXCEEDED,"Request time out"));break;case gr.HTTP_ERROR:const v=h.getStatus();if(L(Ee,`RPC '${e}' ${a} failed with status:`,v,"response text:",h.getResponseText()),v>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const T=A==null?void 0:A.error;if(T&&T.status&&T.message){const C=function(N){const B=N.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(B)>=0?B:k.UNKNOWN}(T.status);d(new M(C,T.message))}else d(new M(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else d(new M(k.UNAVAILABLE,"Connection failed."));break;default:$(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{L(Ee,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);L(Ee,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",p,r,15)})}T_(e,t,r){const s=no(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=kl(),c=Pl(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(d.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(d.useFetchStreams=!0),this.Ho(d.initMessageHeaders,t,r),d.encodeInitMessageHeaders=!0;const p=i.join("");L(Ee,`Creating RPC '${e}' stream ${s}: ${p}`,d);const m=a.createWebChannel(p,d);let v=!1,A=!1;const T=new sm({Zo:R=>{A?L(Ee,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(v||(L(Ee,`Opening RPC '${e}' stream ${s} transport.`),m.open(),v=!0),L(Ee,`RPC '${e}' stream ${s} sending:`,R),m.send(R))},Xo:()=>m.close()}),C=(R,N,B)=>{R.listen(N,D=>{try{B(D)}catch(K){setTimeout(()=>{throw K},0)}})};return C(m,bn.EventType.OPEN,()=>{A||(L(Ee,`RPC '${e}' stream ${s} transport opened.`),T.__())}),C(m,bn.EventType.CLOSE,()=>{A||(A=!0,L(Ee,`RPC '${e}' stream ${s} transport closed`),T.u_())}),C(m,bn.EventType.ERROR,R=>{A||(A=!0,zt(Ee,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),T.u_(new M(k.UNAVAILABLE,"The operation could not be completed")))}),C(m,bn.EventType.MESSAGE,R=>{var N;if(!A){const B=R.data[0];J(!!B,16349);const D=B,K=(D==null?void 0:D.error)||((N=D[0])===null||N===void 0?void 0:N.error);if(K){L(Ee,`RPC '${e}' stream ${s} received error:`,K);const ie=K.status;let Q=function(_){const b=ae[_];if(b!==void 0)return dc(b)}(ie),w=K.message;Q===void 0&&(Q=k.INTERNAL,w="Unknown error status: "+ie+" with message "+K.message),A=!0,T.u_(new M(Q,w)),m.close()}else L(Ee,`RPC '${e}' stream ${s} received:`,B),T.c_(B)}}),C(c,Rl.STAT_EVENT,R=>{R.stat===zs.PROXY?L(Ee,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===zs.NOPROXY&&L(Ee,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.a_()},0),T}}function Ns(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(n){return new cp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="PersistentStream";class Ac{constructor(e,t,r,s,i,a,c,d){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new Sc(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===t&&this.K_(r,s)},r=>{e(()=>{const s=new M(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return L(Ha,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(L(Ha,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class im extends Ac{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=hp(this.serializer,e),r=function(i){if(!("targetChange"in i))return F.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?$e(a.readTime):F.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=eo(this.serializer),t.addTarget=function(i,a){let c;const d=a.target;if(c=Qs(d)?{documents:mp(i,d)}:{query:gp(i,d).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=pc(i,a.resumeToken);const h=Js(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(F.min())>0){c.readTime=Lr(i,a.snapshotVersion.toTimestamp());const h=Js(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=vp(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=eo(this.serializer),t.removeTarget=e,this.L_(t)}}class am extends Ac{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=pp(e.writeResults,e.commitTime),r=$e(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=eo(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fp(this.serializer,r))};this.L_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{}class cm extends lm{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,Ys(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(k.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(e,Ys(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(k.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class um{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Je(t),this.oa=!1):L("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It="RemoteStore";class dm{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(a=>{r.enqueueAndForget(async()=>{xt(this)&&(L(It,"Restarting streams for network reachability change."),await async function(d){const h=U(d);h.Ta.add(4),await qn(h),h.da.set("Unknown"),h.Ta.delete(4),await Yr(h)}(this))})}),this.da=new um(r,s)}}async function Yr(n){if(xt(n))for(const e of n.Ia)await e(!0)}async function qn(n){for(const e of n.Ia)await e(!1)}function xc(n,e){const t=U(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),Vo(t)?Do(t):tn(t).M_()&&ko(t,e))}function Po(n,e){const t=U(n),r=tn(t);t.Pa.delete(e),r.M_()&&Cc(t,e),t.Pa.size===0&&(r.M_()?r.N_():xt(t)&&t.da.set("Unknown"))}function ko(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}tn(n).H_(e)}function Cc(n,e){n.Aa.Ke(e),tn(n).J_(e)}function Do(n){n.Aa=new op({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),tn(n).start(),n.da._a()}function Vo(n){return xt(n)&&!tn(n).F_()&&n.Pa.size>0}function xt(n){return U(n).Ta.size===0}function Rc(n){n.Aa=void 0}async function hm(n){n.da.set("Online")}async function fm(n){n.Pa.forEach((e,t)=>{ko(n,e)})}async function pm(n,e){Rc(n),Vo(n)?(n.da.ca(e),Do(n)):n.da.set("Unknown")}async function mm(n,e,t){if(n.da.set("Online"),e instanceof fc&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Pa.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Pa.delete(c),s.Aa.removeTarget(c))}(n,e)}catch(r){L(It,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mr(n,r)}else if(e instanceof wr?n.Aa.Xe(e):e instanceof hc?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(F.min()))try{const r=await Tc(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Aa.It(a);return c.targetChanges.forEach((d,h)=>{if(d.resumeToken.approximateByteSize()>0){const p=i.Pa.get(h);p&&i.Pa.set(h,p.withResumeToken(d.resumeToken,a))}}),c.targetMismatches.forEach((d,h)=>{const p=i.Pa.get(d);if(!p)return;i.Pa.set(d,p.withResumeToken(ye.EMPTY_BYTE_STRING,p.snapshotVersion)),Cc(i,d);const m=new st(p.target,d,h,p.sequenceNumber);ko(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){L(It,"Failed to raise snapshot:",r),await Mr(n,r)}}async function Mr(n,e,t){if(!en(e))throw e;n.Ta.add(1),await qn(n),n.da.set("Offline"),t||(t=()=>Tc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(It,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await Yr(n)})}function Pc(n,e){return e().catch(t=>Mr(n,t,e))}async function Zr(n){const e=U(n),t=pt(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:go;for(;gm(e);)try{const s=await Jp(e.localStore,r);if(s===null){e.ha.length===0&&t.N_();break}r=s.batchId,ym(e,s)}catch(s){await Mr(e,s)}kc(e)&&Dc(e)}function gm(n){return xt(n)&&n.ha.length<10}function ym(n,e){n.ha.push(e);const t=pt(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function kc(n){return xt(n)&&!pt(n).F_()&&n.ha.length>0}function Dc(n){pt(n).start()}async function vm(n){pt(n).ta()}async function _m(n){const e=pt(n);for(const t of n.ha)e.Z_(t.mutations)}async function wm(n,e,t){const r=n.ha.shift(),s=Io.from(r,e,t);await Pc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Zr(n)}async function bm(n,e){e&&pt(n).Y_&&await async function(r,s){if(function(a){return rp(a)&&a!==k.ABORTED}(s.code)){const i=r.ha.shift();pt(r).O_(),await Pc(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Zr(r)}}(n,e),kc(n)&&Dc(n)}async function Ga(n,e){const t=U(n);t.asyncQueue.verifyOperationInProgress(),L(It,"RemoteStore received new credentials");const r=xt(t);t.Ta.add(3),await qn(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await Yr(t)}async function Em(n,e){const t=U(n);e?(t.Ta.delete(2),await Yr(t)):e||(t.Ta.add(2),await qn(t),t.da.set("Unknown"))}function tn(n){return n.Ra||(n.Ra=function(t,r,s){const i=U(t);return i.ra(),new im(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:hm.bind(null,n),n_:fm.bind(null,n),i_:pm.bind(null,n),j_:mm.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),Vo(n)?Do(n):n.da.set("Unknown")):(await n.Ra.stop(),Rc(n))})),n.Ra}function pt(n){return n.Va||(n.Va=function(t,r,s){const i=U(t);return i.ra(),new am(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:vm.bind(null,n),i_:bm.bind(null,n),X_:_m.bind(null,n),ea:wm.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await Zr(n)):(await n.Va.stop(),n.ha.length>0&&(L(It,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Lo(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function No(n,e){if(Je("AsyncQueue",`${e}: ${n}`),en(n))return new M(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{static emptySet(e){return new Ft(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=En(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ft;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(){this.ma=new ne(O.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):$(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class Qt{constructor(e,t,r,s,i,a,c,d,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=d,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Qt(e,t,Ft.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class Tm{constructor(){this.queries=Ka(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const s=U(t),i=s.queries;s.queries=Ka(),i.forEach((a,c)=>{for(const d of c.ya)d.onError(r)})})(this,new M(k.ABORTED,"Firestore shutting down"))}}function Ka(){return new St(n=>Yl(n),Gr)}async function Sm(n,e){const t=U(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new Im,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await t.onListen(s,!0);break;case 1:i.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=No(a,`Initialization of query '${Nt(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&Mo(t)}async function Am(n,e){const t=U(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ya.indexOf(e);a>=0&&(i.ya.splice(a,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function xm(n,e){const t=U(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.ya)c.va(s)&&(r=!0);a.pa=s}}r&&Mo(t)}function Cm(n,e,t){const r=U(n),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(t);r.queries.delete(e)}function Mo(n){n.ba.forEach(e=>{e.next()})}var ro,Qa;(Qa=ro||(ro={})).Ca="default",Qa.Cache="cache";class Rm{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=Qt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==ro.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.key=e}}class Lc{constructor(e){this.key=e}}class Pm{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=j(),this.mutatedKeys=j(),this.Ha=Zl(e),this.Ja=new Ft(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new Wa,s=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const d=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const v=s.get(p),A=Wr(this.query,m)?m:null,T=!!v&&this.mutatedKeys.has(v.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let R=!1;v&&A?v.data.isEqual(A.data)?T!==C&&(r.track({type:3,doc:A}),R=!0):this.eu(v,A)||(r.track({type:2,doc:A}),R=!0,(d&&this.Ha(A,d)>0||h&&this.Ha(A,h)<0)&&(c=!0)):!v&&A?(r.track({type:0,doc:A}),R=!0):v&&!A&&(r.track({type:1,doc:v}),R=!0,(d||h)&&(c=!0)),R&&(A?(a=a.add(A),i=C?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ja:a,Xa:r,Cs:c,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const a=e.Xa.ga();a.sort((p,m)=>function(A,T){const C=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $(20277,{Vt:R})}};return C(A)-C(T)}(p.type,m.type)||this.Ha(p.doc,m.doc)),this.tu(r),s=s!=null&&s;const c=t&&!s?this.nu():[],d=this.ja.size===0&&this.current&&!s?1:0,h=d!==this.za;return this.za=d,a.length!==0||h?{snapshot:new Qt(this.query,e.Ja,i,a,e.mutatedKeys,d===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:c}:{ru:c}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Wa,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=j(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new Lc(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new Vc(r))}),t}su(e){this.Ga=e.$s,this.ja=j();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return Qt.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Oo="SyncEngine";class km{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Dm{constructor(e){this.key=e,this._u=!1}}class Vm{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new St(c=>Yl(c),Gr),this.cu=new Map,this.lu=new Set,this.hu=new ne(O.comparator),this.Pu=new Map,this.Tu=new Ao,this.Iu={},this.Eu=new Map,this.du=Kt.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function Lm(n,e,t=!0){const r=Fc(n);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await Nc(r,e,t,!0),s}async function Nm(n,e){const t=Fc(n);await Nc(t,e,!0,!1)}async function Nc(n,e,t,r){const s=await Yp(n.localStore,Be(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await Mm(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&xc(n.remoteStore,s),c}async function Mm(n,e,t,r,s){n.Ru=(m,v,A)=>async function(C,R,N,B){let D=R.view.Za(N);D.Cs&&(D=await Ua(C.localStore,R.query,!1).then(({documents:w})=>R.view.Za(w,D)));const K=B&&B.targetChanges.get(R.targetId),ie=B&&B.targetMismatches.get(R.targetId)!=null,Q=R.view.applyChanges(D,C.isPrimaryClient,K,ie);return Ja(C,R.targetId,Q.ru),Q.snapshot}(n,m,v,A);const i=await Ua(n.localStore,e,!0),a=new Pm(e,i.$s),c=a.Za(i.documents),d=Un.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,d);Ja(n,t,h.ru);const p=new km(e,t,a);return n.uu.set(e,p),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),h.snapshot}async function Om(n,e,t){const r=U(n),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(a=>!Gr(a,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await to(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Po(r.remoteStore,s.targetId),so(r,s.targetId)}).catch(Zt)):(so(r,s.targetId),await to(r.localStore,s.targetId,!0))}async function Bm(n,e){const t=U(n),r=t.uu.get(e),s=t.cu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Po(t.remoteStore,r.targetId))}async function $m(n,e,t){const r=Gm(n);try{const s=await function(a,c){const d=U(a),h=ue.now(),p=c.reduce((A,T)=>A.add(T.key),j());let m,v;return d.persistence.runTransaction("Locally write mutations","readwrite",A=>{let T=Ye(),C=j();return d.Bs.getEntries(A,p).next(R=>{T=R,T.forEach((N,B)=>{B.isValidDocument()||(C=C.add(N))})}).next(()=>d.localDocuments.getOverlayedDocuments(A,T)).next(R=>{m=R;const N=[];for(const B of c){const D=Yf(B,m.get(B.key).overlayedDocument);D!=null&&N.push(new At(B.key,D,Hl(D.value.mapValue),Ke.exists(!0)))}return d.mutationQueue.addMutationBatch(A,h,N,c)}).next(R=>{v=R;const N=R.applyToLocalDocumentSet(m,C);return d.documentOverlayCache.saveOverlays(A,R.batchId,N)})}).then(()=>({batchId:v.batchId,changes:tc(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,d){let h=a.Iu[a.currentUser.toKey()];h||(h=new ne(q)),h=h.insert(c,d),a.Iu[a.currentUser.toKey()]=h}(r,s.batchId,t),await jn(r,s.changes),await Zr(r.remoteStore)}catch(s){const i=No(s,"Failed to persist write");t.reject(i)}}async function Mc(n,e){const t=U(n);try{const r=await Qp(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Pu.get(i);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a._u=!0:s.modifiedDocuments.size>0?J(a._u,14607):s.removedDocuments.size>0&&(J(a._u,42227),a._u=!1))}),await jn(t,r,e)}catch(r){await Zt(r)}}function Xa(n,e,t){const r=U(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.uu.forEach((i,a)=>{const c=a.view.Da(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const d=U(a);d.onlineState=c;let h=!1;d.queries.forEach((p,m)=>{for(const v of m.ya)v.Da(c)&&(h=!0)}),h&&Mo(d)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Fm(n,e,t){const r=U(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Pu.get(e),i=s&&s.key;if(i){let a=new ne(O.comparator);a=a.insert(i,Te.newNoDocument(i,F.min()));const c=j().add(i),d=new Xr(F.min(),new Map,new ne(q),a,c);await Mc(r,d),r.hu=r.hu.remove(i),r.Pu.delete(e),Bo(r)}else await to(r.localStore,e,!1).then(()=>so(r,e,t)).catch(Zt)}async function Um(n,e){const t=U(n),r=e.batch.batchId;try{const s=await Kp(t.localStore,e);Bc(t,r,null),Oc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await jn(t,s)}catch(s){await Zt(s)}}async function qm(n,e,t){const r=U(n);try{const s=await function(a,c){const d=U(a);return d.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return d.mutationQueue.lookupMutationBatch(h,c).next(m=>(J(m!==null,37113),p=m.keys(),d.mutationQueue.removeMutationBatch(h,m))).next(()=>d.mutationQueue.performConsistencyCheck(h)).next(()=>d.documentOverlayCache.removeOverlaysForBatchId(h,p,c)).next(()=>d.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>d.localDocuments.getDocuments(h,p))})}(r.localStore,e);Bc(r,e,t),Oc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await jn(r,s)}catch(s){await Zt(s)}}function Oc(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function Bc(n,e,t){const r=U(n);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function so(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||$c(n,r)})}function $c(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(Po(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Bo(n))}function Ja(n,e,t){for(const r of t)r instanceof Vc?(n.Tu.addReference(r.key,e),jm(n,r)):r instanceof Lc?(L(Oo,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||$c(n,r.key)):$(19791,{mu:r})}function jm(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||(L(Oo,"New document in limbo: "+t),n.lu.add(r),Bo(n))}function Bo(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new O(se.fromString(e)),r=n.du.next();n.Pu.set(r,new Dm(t)),n.hu=n.hu.insert(t,r),xc(n.remoteStore,new st(Be(bo(t.path)),r,"TargetPurposeLimboResolution",qr.le))}}async function jn(n,e,t){const r=U(n),s=[],i=[],a=[];r.uu.isEmpty()||(r.uu.forEach((c,d)=>{a.push(r.Ru(d,e,t).then(h=>{var p;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(d.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(d.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Co.Rs(d.targetId,h);i.push(m)}}))}),await Promise.all(a),r.au.j_(s),await async function(d,h){const p=U(d);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(h,v=>P.forEach(v.ds,A=>p.persistence.referenceDelegate.addReference(m,v.targetId,A)).next(()=>P.forEach(v.As,A=>p.persistence.referenceDelegate.removeReference(m,v.targetId,A)))))}catch(m){if(!en(m))throw m;L(Ro,"Failed to update sequence numbers: "+m)}for(const m of h){const v=m.targetId;if(!m.fromCache){const A=p.xs.get(v),T=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(T);p.xs=p.xs.insert(v,C)}}}(r.localStore,i))}async function zm(n,e){const t=U(n);if(!t.currentUser.isEqual(e)){L(Oo,"User change. New user:",e.toKey());const r=await Ic(t.localStore,e);t.currentUser=e,function(i,a){i.Eu.forEach(c=>{c.forEach(d=>{d.reject(new M(k.CANCELLED,a))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jn(t,r.ks)}}function Hm(n,e){const t=U(n),r=t.Pu.get(e);if(r&&r._u)return j().add(r.key);{let s=j();const i=t.cu.get(e);if(!i)return s;for(const a of i){const c=t.uu.get(a);s=s.unionWith(c.view.Ya)}return s}}function Fc(n){const e=U(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fm.bind(null,e),e.au.j_=xm.bind(null,e.eventManager),e.au.Vu=Cm.bind(null,e.eventManager),e}function Gm(n){const e=U(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Um.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qm.bind(null,e),e}class Or{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jr(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return Wp(this.persistence,new zp,e.initialUser,this.serializer)}yu(e){return new Ec(xo.fi,this.serializer)}pu(e){return new em}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Or.provider={build:()=>new Or};class Wm extends Or{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){J(this.persistence.referenceDelegate instanceof Nr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Rp(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new Ec(r=>Nr.fi(r,t),this.serializer)}}class oo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zm.bind(null,this.syncEngine),await Em(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tm}()}createDatastore(e){const t=Jr(e.databaseInfo.databaseId),r=function(i){return new om(i)}(e.databaseInfo);return function(i,a,c,d){return new cm(i,a,c,d)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new dm(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Xa(this.syncEngine,t,0),function(){return za.C()?new za:new tm}())}createSyncEngine(e,t){return function(s,i,a,c,d,h,p){const m=new Vm(s,i,a,c,d,h);return p&&(m.Au=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=U(s);L(It,"RemoteStore shutting down."),i.Ta.add(5),await qn(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}oo.provider={build:()=>new oo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="FirestoreClient";class Qm{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ie.UNAUTHENTICATED,this.clientId=Nl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(mt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(mt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=No(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ms(n,e){n.asyncQueue.verifyOperationInProgress(),L(mt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ic(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Ya(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Xm(n);L(mt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ga(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ga(e.remoteStore,s)),n._onlineComponents=e}async function Xm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(mt,"Using user provided OfflineComponentProvider");try{await Ms(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;zt("Error using user provided cache. Falling back to memory cache: "+t),await Ms(n,new Or)}}else L(mt,"Using default OfflineComponentProvider"),await Ms(n,new Wm(void 0));return n._offlineComponents}async function Uc(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(mt,"Using user provided OnlineComponentProvider"),await Ya(n,n._uninitializedComponentsProvider._online)):(L(mt,"Using default OnlineComponentProvider"),await Ya(n,new oo))),n._onlineComponents}function Jm(n){return Uc(n).then(e=>e.syncEngine)}async function Ym(n){const e=await Uc(n),t=e.eventManager;return t.onListen=Lm.bind(null,e.syncEngine),t.onUnlisten=Om.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Nm.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Bm.bind(null,e.syncEngine),t}function Zm(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,d,h){const p=new Km({next:v=>{p.Cu(),a.enqueueAndForget(()=>Am(i,m));const A=v.docs.has(c);!A&&v.fromCache?h.reject(new M(k.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&v.fromCache&&d&&d.source==="server"?h.reject(new M(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new Rm(bo(c.path),p,{includeMetadataChanges:!0,La:!0});return Sm(i,m)}(await Ym(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n,e,t){if(!t)throw new M(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tg(n,e,t,r){if(e===!0&&r===!0)throw new M(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function el(n){if(!O.isDocumentKey(n))throw new M(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $o(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$(12329,{type:typeof n})}function Bn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$o(n);throw new M(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="firestore.googleapis.com",tl=!0;class nl{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jc,this.ssl=tl}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:tl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=bc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xp)throw new M(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new M(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new nf;switch(r.type){case"firstParty":return new af(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Za.get(t);r&&(L("ComponentProvider","Removing Datastore"),Za.delete(t),r.terminate())}(this),Promise.resolve()}}function ng(n,e,t,r={}){var s;n=Bn(n,Fo);const i=ho(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;i&&(Rd(`https://${d}`),Vd("Firestore",!0)),a.host!==jc&&a.host!==d&&zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:d,ssl:i,emulatorOptions:r});if(!Ir(h,c)&&(n._setSettings(h),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=Ie.MOCK_USER;else{p=Pd(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new M(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new Ie(v)}n._authCredentials=new rf(new Vl(p,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Uo(this.firestore,e,this._query)}}class Ve{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ve(this.firestore,e,this._key)}}class $n extends Uo{constructor(e,t,r){super(e,t,bo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ve(this.firestore,null,new O(e))}withConverter(e){return new $n(this.firestore,e,this._path)}}function nn(n,e,...t){if(n=Tr(n),arguments.length===1&&(e=Nl.newId()),eg("doc","path",e),n instanceof Fo){const r=se.fromString(e,...t);return el(r),new Ve(n,null,new O(r))}{if(!(n instanceof Ve||n instanceof $n))throw new M(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return el(r),new Ve(n.firestore,n instanceof $n?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="AsyncQueue";class sl{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new Sc(this,"async_queue_retry"),this.ec=()=>{const r=Ns();r&&L(rl,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=Ns();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Ns();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new lt;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!en(e))throw e;L(rl,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Je("INTERNAL UNHANDLED ERROR: ",ol(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=Lo.createAndSchedule(this,e,t,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&$(47125,{_c:ol(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function ol(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class qo extends Fo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new sl,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sl(e),this._firestoreClient=void 0,await e}}}function zc(n,e){const t=typeof n=="object"?n:jh(),r=typeof n=="string"?n:Cr,s=Bh(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xd("firestore");i&&ng(s,...i)}return s}function Hc(n){if(n._terminated)throw new M(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||rg(n),n._firestoreClient}function rg(n){var e,t,r;const s=n._freezeSettings(),i=function(c,d,h,p){return new Ef(c,d,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,qc(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Qm(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const d=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(ye.fromBase64String(e))}catch(t){throw new M(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xt(ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=/^__.*__$/;class og{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new At(e,this.data,this.fieldMask,t,this.fieldTransforms):new Fn(e,this.data,t,this.fieldTransforms)}}function Wc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $(40011,{hc:n})}}class Go{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Go(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Br(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(Wc(this.hc)&&sg.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class ig{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Jr(e)}gc(e,t,r,s=!1){return new Go({hc:e,methodName:t,fc:r,path:ge.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ag(n){const e=n._freezeSettings(),t=Jr(n._databaseId);return new ig(n._databaseId,!!e.ignoreUndefinedProperties,t)}function lg(n,e,t,r,s,i={}){const a=n.gc(i.merge||i.mergeFields?2:0,e,t,s);Jc("Data must be an object, but it was:",a,r);const c=Qc(r,a);let d,h;if(i.merge)d=new Me(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const v=cg(e,m,t);if(!a.contains(v))throw new M(k.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);dg(p,v)||p.push(v)}d=new Me(p),h=a.fieldTransforms.filter(m=>d.covers(m.field))}else d=null,h=a.fieldTransforms;return new og(new De(c),d,h)}function Kc(n,e){if(Xc(n=Tr(n)))return Jc("Unsupported field value:",e,n),Qc(n,e);if(n instanceof Gc)return function(r,s){if(!Wc(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let d=Kc(c,s.Rc(a));d==null&&(d={nullValue:"NULL_VALUE"}),i.push(d),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=Tr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Gf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ue.fromDate(r);return{timestampValue:Lr(s.serializer,i)}}if(r instanceof ue){const i=new ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lr(s.serializer,i)}}if(r instanceof zo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:pc(s.serializer,r._byteString)};if(r instanceof Ve){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:So(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ho)return function(a,c){return{mapValue:{fields:{[jl]:{stringValue:zl},[Rr]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Vc("VectorValues must only contain numeric values.");return Eo(c.serializer,h)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${$o(r)}`)}(n,e)}function Qc(n,e){const t={};return Ol(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tt(n,(r,s)=>{const i=Kc(s,e.Ic(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Xc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ue||n instanceof zo||n instanceof Xt||n instanceof Ve||n instanceof Gc||n instanceof Ho)}function Jc(n,e,t){if(!Xc(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=$o(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function cg(n,e,t){if((e=Tr(e))instanceof jo)return e._internalPath;if(typeof e=="string")return Yc(n,e);throw Br("Field path arguments must be of type string or ",n,!1,void 0,t)}const ug=new RegExp("[~\\*/\\[\\]]");function Yc(n,e,t){if(e.search(ug)>=0)throw Br(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new jo(...e.split("."))._internalPath}catch{throw Br(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Br(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let d="";return(i||a)&&(d+=" (found",i&&(d+=` in field ${r}`),a&&(d+=` in document ${s}`),d+=")"),new M(k.INVALID_ARGUMENT,c+n+d)}function dg(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(eu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class hg extends Zc{data(){return super.data()}}function eu(n,e){return typeof e=="string"?Yc(n,e):e instanceof jo?e._internalPath:e._delegate._internalPath}class fg{convertValue(e,t="none"){switch(ft(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ht(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Tt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Rr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>oe(a.doubleValue));return new Ho(i)}convertGeoPoint(e){return new zo(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zr(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Vn(e));default:return null}}convertTimestamp(e){const t=dt(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);J(wc(r),9688,{name:e});const s=new Ln(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||Je(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class tu extends Zc{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(eu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class gg extends tu{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n){n=Bn(n,Ve);const e=Bn(n.firestore,qo);return Zm(Hc(e),n._key).then(t=>_g(e,n,t))}class yg extends fg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ve(this.firestore,null,t)}}function Ko(n,e,t){n=Bn(n,Ve);const r=Bn(n.firestore,qo),s=pg(n.converter,e);return vg(r,[lg(ag(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Ke.none())])}function vg(n,e){return function(r,s){const i=new lt;return r.asyncQueue.enqueueAndForget(async()=>$m(await Jm(r),s,i)),i.promise}(Hc(n),e)}function _g(n,e,t){const r=t.docs.get(e._key),s=new yg(n);return new tu(n,s,e._key,r,new mg(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Yt=s})(qh),Ar(new Pn("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new qo(new sf(r.getProvider("auth-internal")),new lf(a,r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new M(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(h.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),$t(da,ha,e),$t(da,ha,"esm2017")})();const Qo={apiKey:"AIzaSyCdNoC5xt3zkMpB5YNmx2spRsiBMiJl5Uo",authDomain:"checkmate-enova.firebaseapp.com",projectId:"checkmate-enova",storageBucket:"checkmate-enova.firebasestorage.app",messagingSenderId:"1036780232884",appId:"1:1036780232884:web:689229ef07859db22e77e1"},wg=po(Qo),nu=zc(wg),ru="settings",bg={"Back Warehouse":["In Stock","Faulty","RMA","Reserved","Demo","Loaner"],"Enova Warehouse":["In Stock","Faulty","RMA","Reserved","Demo","Loaner"],"Contractor/Technician":["In Stock","Reserved","Loaner"],"Customer Stock":["Installed (Wevo)","Installed (Retail)","Faulty"],Public:["Installed","Decommissioned","Faulty"]};async function ke(){const n={locations:[{name:"Back Warehouse",parent:null},{name:"Transworld - Shoham",parent:"Back Warehouse"},{name:"Transworld - Ashdod",parent:"Back Warehouse"},{name:"Enova Warehouse",parent:null},{name:"Level - 4 Storage",parent:"Enova Warehouse"},{name:"Office Storage",parent:"Enova Warehouse"},{name:"Lab",parent:"Enova Warehouse"},{name:"Contractor/Technician",parent:null},{name:"Customer Stock",parent:null},{name:"Installed (Wevo)",parent:"Customer Stock"},{name:"Installed (Retail)",parent:"Customer Stock"},{name:"Public",parent:null},{name:"Public Chargers",parent:"Public"},{name:"Factory",parent:null},{name:"Shipping",parent:null},{name:"Port",parent:null},{name:"Lost",parent:null},{name:"Unknown",parent:"Lost"}],statuses:["In Stock","Faulty","RMA","Reserved","Demo","Loaner","Installed (Wevo)","Installed (Retail)","Installed","Decommissioned","Unknown"],vendors:["Teison","ABL","EnelX","Vestel"],contractors:[{company:"Alpha Charge",name:"Dan Hen",phone:"0502329696"}]};try{const e=nn(nu,"appdata",ru),t=await Wo(e);if(t.exists()){const r=t.data();return{locations:r.locations||n.locations,statuses:r.statuses||n.statuses,vendors:r.vendors||n.vendors,contractors:r.contractors||n.contractors}}else return n}catch(e){return console.error("Error loading settings from Firestore:",e),n}}async function qe(n){try{await Ko(nn(nu,"appdata",ru),n)}catch(e){console.error("Error saving settings to Firestore:",e)}}function Eg(n,e){const t={};let r=0,s=0,i=0;return n.forEach(a=>{t[a.status]=(t[a.status]||0)+1,a.contractor&&r++,(a.location&&typeof a.location=="string"&&a.location.toLowerCase().includes("public")||typeof a.status=="string"&&a.status.toLowerCase().includes("public"))&&i++,a.assignedDate&&Date.now()-new Date(a.assignedDate).getTime()>14*24*60*60*1e3&&s++}),{total:n.length,byStatus:t,contractorCount:r,overdueCount:s,publicCount:i,nextShipment:e.length?Math.min(...e.map(a=>new Date(a.date).getTime())):null}}function il(n,e,t,r,s){const i=document.createElement("li");return i.className="flex items-center justify-between px-3 py-2 rounded bg-green-200 dark:bg-gray-700 hover:bg-green-300 dark:hover:bg-gray-600 transition group cursor-grab text-gray-900 dark:text-gray-100",i.draggable=!0,i.innerHTML=`
  <span>${n}</span>
  <div class="flex gap-2 items-center">
    <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
    <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
    <span class="drag-icon cursor-grab text-gray-400 group-hover:text-gray-200 transition">&#9776;</span>
  </div>
  `,i.addEventListener("dragstart",a=>{a.dataTransfer.setData("index",e),a.dataTransfer.setData("listType",t)}),i.addEventListener("dragover",a=>a.preventDefault()),i.addEventListener("drop",a=>{a.preventDefault();const c=+a.dataTransfer.getData("index");a.dataTransfer.getData("listType")===t&&c!==e&&Ig(t,c,e)}),i.querySelector(".edit-btn").onclick=()=>r(e),i.querySelector(".delete-btn").onclick=()=>s(e),i}function su(n,e=""){return new Promise(t=>{const r=document.getElementById("entryDialog");r.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${n}</h3>
        <input id="entryInput" type="text" class="border px-2 py-1 rounded" value="${e}" required autofocus>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `,r.showModal();const s=r.querySelector("form");s.querySelector('button[value="cancel"]').onclick=()=>{r.close(),t(void 0)},s.onsubmit=i=>{i.preventDefault(),t(r.querySelector("#entryInput").value.trim()),r.close()}})}function ou(n){return new Promise(e=>{const t=document.getElementById("confirmDialog");t.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4">
        <p>${n}</p>
        <div class="flex justify-end gap-2">
          <button value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </form>
    `,t.showModal(),t.querySelector("form").onsubmit=r=>{r.preventDefault(),e(document.activeElement.value==="ok"),t.close()}})}let X;function Qe(n,e){const t=document.getElementById(e);t.innerHTML="",n==="locations"?X[n].forEach((r,s)=>{let i=typeof r=="object"&&r.parent?`<span class="text-xs text-gray-500 ml-2">(${r.parent})</span>`:"";t.appendChild(il((typeof r=="object"?r.name:r)+i,s,n,a=>al(n,a),a=>ll(n,a)))}):X[n].forEach((r,s)=>{t.appendChild(il(r,s,n,i=>al(n,i),i=>ll(n,i)))})}async function Os(n,e,t){n==="locations"?iu("Add Location").then(async({value:r,parent:s})=>{!r||!s||(Array.isArray(X[n])||(X[n]=[]),X[n].push({name:r,parent:s}),await qe(X),Qe(n,e),z(t+" added!","green"))}):su(`Add ${t}`).then(async r=>{r&&(Array.isArray(X[n])||(X[n]=[]),X[n].push(r),await qe(X),Qe(n,e),z(t+" added!","green"))})}function iu(n){const e=X.locations.map(t=>t.name);return new Promise(t=>{const r=document.getElementById("entryDialog");r.innerHTML=`
        <form method="dialog" class="flex flex-col gap-3">
          <h3 class="font-bold">${n}</h3>
          <input id="entryInput" type="text" class="border px-2 py-1 rounded" required autofocus placeholder="Location Name">
          <select id="parentSelect" class="border px-2 py-1 rounded">
            <option value="">-- Select Parent Stock --</option>
            ${e.map(i=>`<option value="${i}">${i}</option>`).join("")}
          </select>
          <div class="flex justify-end gap-2">
            <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
            <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
          </div>
        </form>
      `,r.showModal();const s=r.querySelector("form");s.querySelector('button[value="cancel"]').onclick=()=>{r.close(),t(void 0)},s.onsubmit=i=>{i.preventDefault();const a=r.querySelector("#entryInput").value.trim(),c=r.querySelector("#parentSelect").value;!a||!c||(r.close(),t({value:a,parent:c}))}})}async function al(n,e){n==="locations"?iu("Edit Location").then(async({value:t,parent:r})=>{!t||!r||(X[n][e]={name:t,parent:r},await qe(X),Qe(n,$r(n)),z("Location updated!","blue"))}):su("Edit",X[n][e]).then(async t=>{t&&(X[n][e]=t,await qe(X),Qe(n,$r(n)),z("Item updated!","blue"))})}async function ll(n,e){ou("Delete this item?").then(async t=>{t&&(X[n].splice(e,1),await qe(X),Qe(n,$r(n)),z("Item deleted!","red"))})}async function Ig(n,e,t){const r=X[n],[s]=r.splice(e,1);r.splice(t,0,s),await qe(X),Qe(n,$r(n))}function $r(n){return n==="locations"?"locList":n==="statuses"?"statList":"vendorList"}function es(){const n=document.getElementById("contractorList");n.innerHTML="",Array.isArray(X.contractors)&&X.contractors.forEach((e,t)=>{const r=document.createElement("li");r.className="flex items-center justify-between px-3 py-2 rounded bg-cyan-200 dark:bg-gray-700 hover:bg-cyan-300 dark:hover:bg-gray-600 transition group",r.innerHTML=`
      <div>
        <span class="font-semibold">${e.name}</span>
        <span class="text-xs text-gray-700 dark:text-gray-300 ml-2">(${e.company})</span>
        <span class="text-xs text-gray-500 ml-2">${e.phone}</span>
      </div>
      <div class="flex gap-2 items-center">
        <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
        <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
      </div>
    `,r.querySelector(".edit-btn").onclick=()=>Sg(t),r.querySelector(".delete-btn").onclick=()=>Ag(t),n.appendChild(r)})}async function Tg(){au().then(async n=>{n&&(X.contractors.push({id:Date.now(),name:n.name,company:n.company,phone:n.phone}),await qe(X),es(),z("Contractor added!","green"))})}async function Sg(n){const e=X.contractors[n];au(e).then(async t=>{t&&(X.contractors[n]={...e,...t},await qe(X),es(),z("Contractor updated!","blue"))})}async function Ag(n){ou("Delete this contractor?").then(async e=>{e&&(X.contractors.splice(n,1),await qe(X),es(),z("Contractor deleted!","red"))})}function au(n={}){return new Promise(e=>{const t=document.getElementById("entryDialog");t.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${n.name?"Edit":"Add"} Contractor</h3>
        <input id="contractorName" type="text" class="border px-2 py-1 rounded" placeholder="Full Name" value="${n.name||""}" required>
        <input id="contractorCompany" type="text" class="border px-2 py-1 rounded" placeholder="Company Name" value="${n.company||""}" required>
        <input id="contractorPhone" type="tel" class="border px-2 py-1 rounded" placeholder="Phone Number" value="${n.phone||""}" required>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `,t.showModal();const r=t.querySelector("form");r.querySelector('button[value="cancel"]').onclick=()=>{t.close(),e(void 0)},r.onsubmit=s=>{s.preventDefault(),e({name:t.querySelector("#contractorName").value.trim(),company:t.querySelector("#contractorCompany").value.trim(),phone:t.querySelector("#contractorPhone").value.trim()}),t.close()}})}async function xg(){X=await ke(),Qe("locations","locList"),Qe("statuses","statList"),Qe("vendors","vendorList"),es(),document.getElementById("addContractorBtn").onclick=Tg,document.getElementById("addLocBtn").onclick=()=>Os("locations","locList","Location"),document.getElementById("addStatBtn").onclick=()=>Os("statuses","statList","Status"),document.getElementById("addVendorBtn").onclick=()=>Os("vendors","vendorList","Vendor")}const Cg=Object.freeze(Object.defineProperty({__proto__:null,allowedStatusesByLocation:bg,firebaseConfig:Qo,getDashboardStats:Eg,initSettings:xg,loadSettings:ke,saveSettings:qe},Symbol.toStringTag,{value:"Module"})),Rg=po(Qo),ts=zc(Rg),lu="products",cu="categories",io=8;async function Ze(){try{const n=nn(ts,"appdata",lu),e=await Wo(n);if(e.exists()){const t=e.data().products||[];return t.forEach((r,s)=>{typeof r.order!="number"&&(r.order=s)}),t}return[]}catch(n){return console.error("Error loading products:",n),[]}}async function zn(n){try{await Ko(nn(ts,"appdata",lu),{products:n})}catch(e){console.error("Error saving products:",e)}}async function uu(){try{const n=nn(ts,"appdata",cu),e=await Wo(n);return e.exists()?e.data().categories||["AC Charger","DC Charger","Spare Part"]:["AC Charger","DC Charger","Spare Part"]}catch(n){return console.error("Error loading categories:",n),["AC Charger","DC Charger","Spare Part"]}}async function du(n){try{await Ko(nn(ts,"appdata",cu),{categories:n})}catch(e){console.error("Error saving categories:",e)}}let te=[],Ne=1;async function Pg(){te=await Ze(),ct(),Ut(),document.getElementById("addProductBtn").onclick=()=>hu().then(Dg)}async function ct(){te=await Ze(),te.sort((r,s)=>r.order-s.order);const n=document.getElementById("productsGrid");n.innerHTML="",n.className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch min-h-[620px]";const e=(Ne-1)*io,t=te.slice(e,e+io);for(let r=0;r<t.length;++r){const s=t[r],i=document.createElement("div");i.className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col gap-2 cursor-grab group",i.draggable=!0,i.setAttribute("data-index",e+r),i.innerHTML=`
      <div class="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button title="Edit" class="edit-btn text-blue-600"><svg width="20" height="20"><path d="M4 13.5V16h2.5l7.3-7.3-2.5-2.5L4 13.5zM17.7 6.3c.4-.4.4-1 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.8 1.8 4 4 1.8-1.8z" fill="currentColor"/></svg></button>
        <button title="Delete" class="delete-btn text-red-600"><svg width="20" height="20"><path d="M6 19c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/></svg></button>
        <span class="drag-handle cursor-grab text-gray-400" title="Drag">&#9776;</span>
      </div>
      <div><span class="font-bold">Model:</span> ${le(s.name)}</div>
      <div><span class="font-bold">Vendor:</span> ${le(s.vendor)}</div>
      <div><span class="font-bold">HS Code:</span> ${le(s.hsCode)}</div>
      <div><span class="font-bold">Category:</span> ${le(s.category)}</div>
      <div><span class="font-bold">Price:</span> ${parseFloat(s.price).toLocaleString(void 0,{style:"currency",currency:"USD"})}</div>
      <div><span class="font-bold">Duty Rate:</span> ${s.dutyRate}%</div>
      <div><span class="font-bold">Customs Liability:</span> ${le(s.customsLiability)}</div>
      <div><span class="font-bold">Depreciation Rate:</span> ${s.depreciationRate}%</div>
      <div><span class="font-bold">Description:</span> ${le(s.description)}</div>
    `,i.querySelector(".edit-btn").onclick=()=>hu(s,e+r).then(a=>Vg(a,e+r)),i.querySelector(".delete-btn").onclick=()=>kg(s).then(a=>{a&&Lg(e+r)}),i.querySelector(".drag-handle").onmousedown=a=>a.stopPropagation(),i.ondragstart=a=>{a.dataTransfer.setData("dragIndex",e+r),i.classList.add("opacity-50")},i.ondragend=()=>i.classList.remove("opacity-50"),i.ondragover=a=>{a.preventDefault(),i.classList.add("ring-2","ring-purple-400")},i.ondragleave=a=>i.classList.remove("ring-2","ring-purple-400"),i.ondrop=a=>{i.classList.remove("ring-2","ring-purple-400");const c=+a.dataTransfer.getData("dragIndex");c!==e+r&&Ng(c,e+r)},n.appendChild(i)}}function Ut(){const n=Math.ceil(te.length/io)||1,e=document.getElementById("pagination");e.innerHTML=`
    <div class="flex justify-center items-center gap-4 py-4">
      <button id="productsPrevPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${Ne===1?"opacity-50 cursor-not-allowed":""}" ${Ne===1?"disabled":""}>Prev</button>
      <span class="font-semibold" id="pageNumSpan">Page ${Ne} of ${n}</span>
      <button id="productsNextPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${Ne===n?"opacity-50 cursor-not-allowed":""}" ${Ne===n?"disabled":""}>Next</button>
      <label class="ml-6">Show
        <select id="productsPageSizeSelect" class="border px-2 py-1 rounded ml-2">
          <option value="8" selected>8</option>
          <option value="16" >16</option>
          <option value="25" >25</option>
          <option value="50" >50</option>
          <option value="100" >100</option>
        </select>
        entries per page
      </label>
    </div>
  `,e.querySelector("#productsPrevPageBtn").onclick=()=>{Ne>1&&(Ne--,ct(),Ut())},e.querySelector("#productsNextPageBtn").onclick=()=>{Ne<n&&(Ne++,ct(),Ut())},e.querySelector("#productsPageSizeSelect").onchange=t=>{window.PRODUCTS_PER_PAGE=parseInt(t.target.value,10),Ne=1,ct(),Ut()}}async function hu(n=null,e=null){return new Promise(async t=>{const r=(await ke()).vendors||[],s=await uu();let i=n||{name:"",vendor:"",hsCode:"",category:"",price:"",dutyRate:"",customsLiability:"",depreciationRate:"",description:""};const a=document.getElementById("productDialog");a.innerHTML=`
  <form method="dialog" class="flex flex-col gap-3 w-80">
    <h3 class="font-bold mb-2">${n?"Edit Product":"Add Product"}</h3>
    <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
    <input id="name" type="text" placeholder="Model" required class="border px-2 py-1 rounded" value="${le(i.name)}">
    <select id="vendor" required class="border px-2 py-1 rounded">
      <option value="">-- Select Vendor --</option>
      ${r.map(d=>`<option value="${le(d)}" ${d===i.vendor?"selected":""}>${le(d)}</option>`).join("")}
    </select>
    <input id="hsCode" type="text" placeholder="HS Code" required class="border px-2 py-1 rounded" value="${le(i.hsCode)}">
    <select id="category" required class="border px-2 py-1 rounded">
      <option value="">-- Select Category --</option>
      ${s.map(d=>`<option value="${le(d)}" ${d===i.category?"selected":""}>${le(d)}</option>`).join("")}
    </select>
    <input id="price" type="number" placeholder="Price" min="0" required class="border px-2 py-1 rounded" value="${le(i.price)}">
    <input id="dutyRate" type="number" placeholder="Duty Rate (%)" min="0" max="100" required class="border px-2 py-1 rounded" value="${le(i.dutyRate)}">
    <select id="customsLiability" required class="border px-2 py-1 rounded">
      <option value="">-- Select Customs Liability --</option>
      <option value="Liable" ${i.customsLiability==="Liable"?"selected":""}>Liable</option>
      <option value="Non-Liable" ${i.customsLiability==="Non-Liable"?"selected":""}>Non-Liable</option>
    </select>
    <input id="depreciationRate" type="number" placeholder="Depreciation Rate (%)" min="0" max="100" required class="border px-2 py-1 rounded" value="${le(i.depreciationRate)}">
    <!-- Add your checkbox here -->
    <label class="flex items-center gap-2">
      <input type="checkbox" id="isPublicAsset" ${i.isPublicAsset?"checked":""}/>
      Public Asset
    </label>
    <textarea id="description" placeholder="Description" required class="border px-2 py-1 rounded">${le(i.description)}</textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">${n?"Save":"Add"}</button>
    </div>
    <button id="addCatBtn" type="button" class="text-xs text-blue-500 underline mt-1">Add new category</button>
  </form>
`;const c=a.querySelector('button[value="cancel"]');c&&(c.onclick=d=>{d.preventDefault(),a.close()}),a.showModal(),a.querySelector("#addCatBtn").onclick=()=>{const d=prompt("Enter new category name:");d&&!s.includes(d)&&(s.push(d),du(s),a.querySelector("#category").innerHTML=`
          <option value="">-- Select Category --</option>
          ${s.map(h=>`<option value="${le(h)}">${le(h)}</option>`).join("")}
        `)},a.querySelector("form").onsubmit=d=>{if(d.preventDefault(),document.activeElement.value==="cancel"){a.close(),t(void 0);return}a.querySelectorAll("input, select, textarea").forEach(Q=>Q.classList.remove("border-red-500")),a.querySelector("#formError").textContent="";const h=a.querySelector("#name").value.trim(),p=a.querySelector("#vendor").value,m=a.querySelector("#hsCode").value.trim(),v=a.querySelector("#category").value,A=a.querySelector("#price").value,T=a.querySelector("#dutyRate").value,C=a.querySelector("#customsLiability").value,R=a.querySelector("#depreciationRate").value,N=a.querySelector("#description").value.trim();let B=!0;function D(Q){a.querySelector(Q).classList.add("border-red-500"),B=!1}if(h||D("#name"),p||D("#vendor"),m||D("#hsCode"),v||D("#category"),(!A||isNaN(A)||Number(A)<=0)&&D("#price"),(!T||isNaN(T)||Number(T)<0)&&D("#dutyRate"),C||D("#customsLiability"),(R===""||isNaN(R)||Number(R)<0)&&D("#depreciationRate"),N||D("#description"),te.some((Q,w)=>Q.name.toLowerCase()===h.toLowerCase()&&w!==e)){D("#name"),a.querySelector("#formError").textContent="Product name must be unique!";return}if(!B){a.querySelector("#formError").textContent="Please fill in all required fields correctly.";return}const ie=a.querySelector("#isPublicAsset").checked;a.close(),t({name:h,vendor:p,hsCode:m,category:v,price:Number(A),dutyRate:Number(T),customsLiability:C,depreciationRate:Number(R),description:N,isPublicAsset:ie})}})}function kg(n){return new Promise(e=>{const t=document.getElementById("confirmProductDialog");t.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4 w-64">
        <p>Delete product <span class="font-bold">${le(n.name)}</span>? This cannot be undone.</p>
        <div class="flex justify-end gap-2">
          <button value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </form>
    `,t.showModal(),t.querySelector("form").onsubmit=r=>{r.preventDefault(),e(document.activeElement.value==="ok"),t.close()}})}async function Dg(n){n&&(te=await Ze(),n.order=te.length>0?Math.max(...te.map(e=>e.order))+1:0,te.push(n),await zn(te),z("Product added","green"),await ct(),Ut())}async function Vg(n,e){n&&(te=await Ze(),Object.assign(te[e],n),await zn(te),z("Product updated","blue"),await ct())}async function Lg(n){te=await Ze(),te.splice(n,1),await zn(te),z("Product deleted","red"),await ct(),Ut()}async function Ng(n,e){te=await Ze(),te.sort((r,s)=>r.order-s.order);const[t]=te.splice(n,1);te.splice(e,0,t),te.forEach((r,s)=>r.order=s),await zn(te),await ct()}function le(n){return(""+n).replace(/[<>&"']/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"})[e])}async function Mg(n){return(await Ze()).filter(t=>t.vendor===n).map(t=>t.name)}const Og=Object.freeze(Object.defineProperty({__proto__:null,initProducts:Pg,loadCategories:uu,loadProducts:Ze,saveCategories:du,saveProducts:zn,vendorInUse:Mg},Symbol.toStringTag,{value:"Module"}));window.selectedUnits=[];window.inventoryPage=1;window.inventoryPageSize=30;const mr={"Back Warehouse":{bg:"#f1f5ff",color:"#3b4252"},"Technician/Contractor":{bg:"#f0fdf4",color:"#166534"},Customer:{bg:"#fef9c3",color:"#92400e"},Public:{bg:"#fce7f3",color:"#8b5cf6"},"Back Warehouse - Container 1":{bg:"#def7ec",color:"#047857"},"Back Warehouse - Container 2":{bg:"#fde2e4",color:"#b91c1c"}};function cl(n){if(!n)return{bg:"#f3f4f6",color:"#1f2937"};let e=n.trim();if(mr[e])return mr[e];for(let t in mr)if(e.startsWith(t))return mr[t];return{bg:"#f3f4f6",color:"#1f2937"}}const Bg={"In Stock":{bg:"#e0f7fa",color:"#00838f"},Installed:{bg:"#e1ffe6",color:"#1b5e20"},Reserved:{bg:"#fff9c4",color:"#827717"},Faulty:{bg:"#ffebee",color:"#c62828"},RMA:{bg:"#e1bee7",color:"#6a1b9a"},Demo:{bg:"#e3f2fd",color:"#1565c0"},Loaner:{bg:"#f3e5f5",color:"#4527a0"},Decommissioned:{bg:"#cfd8dc",color:"#37474f"},Lost:{bg:"#ffe0b2",color:"#ef6c00"}};function ul(n){return Bg[n]||{bg:"#ececec",color:"#888"}}function fu(n,e,t){return n?!!(e.map(r=>r.name).includes(n)||n!=="Back Warehouse"&&!t.includes(n)):!1}function Xo(){const n=ke(),e=(n.contractors||[]).map(t=>({name:t.name,parent:"Contractor/Technician",isContractor:!0,company:t.company,phone:t.phone,id:t.id}));return[...n.locations||[],...e]}function fe(){return JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]")}function Re(n){localStorage.setItem("cm_inventory_v1",JSON.stringify(n))}function Ct(){return JSON.parse(localStorage.getItem("cm_audit_v1")||"[]")}function Rt(n){localStorage.setItem("cm_audit_v1",JSON.stringify(n))}function je(){return localStorage.getItem("cm_user")||"Admin"}function Bs(n,e){n&&(n.onmouseenter=t=>{const r=document.getElementById("hoverLegend");if(!r)return;r.textContent=e;const s=n.getBoundingClientRect();r.style.left=s.left-r.offsetWidth-16+"px",r.style.top=s.top+s.height/2-r.offsetHeight/2+"px",r.classList.remove("hidden"),r.classList.add("show")},n.onmousemove=t=>{const r=document.getElementById("hoverLegend");if(!r)return;const s=n.getBoundingClientRect();r.style.left=s.left-r.offsetWidth-16+"px",r.style.top=s.top+s.height/2-r.offsetHeight/2+"px"},n.onmouseleave=()=>{const t=document.getElementById("hoverLegend");t&&(t.classList.remove("show"),t.classList.add("hidden"))})}let ee=[];window.openBulkAddDialog=function(){const n=ke(),e=document.getElementById("actionDialog");e.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-full sm:w-[32rem] max-w-2xl">
        <h3 class="font-bold mb-2">Bulk Add Units</h3>
        <div class="text-sm text-gray-600 mb-2">
          Paste columns: <b>Model</b>, <b>Charger ID, Serial, SIM Number</b> (one per line)<br>
          <b>Example:</b> SMART HOME MINI WALLBOX 5m Cable, 0312108101120001,TSAC03-24120109,89354080012345678901
        </div>
        <label>Default Location:
          <select id="bulkLocation" class="border px-2 py-1 rounded w-full">
            ${n.locations.map(t=>`<option value="${t.name}" ${t.name==="Back Warehouse"?"selected":""}>${t.name}</option>`).join("")}
          </select>
        </label>
        <label>Default Status:
          <select id="bulkStatus" class="border px-2 py-1 rounded w-full">
            ${n.statuses.map(t=>`<option value="${t}" ${t==="In Stock"?"selected":""}>${t}</option>`).join("")}
          </select>
        </label>
        <textarea id="bulkText" rows="7" class="border px-2 py-1 rounded w-full" placeholder="Paste here"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Add All</button>
        </div>
      </form>
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=t=>{t.preventDefault(),e.close()},e.querySelector("form").onsubmit=t=>{t.preventDefault();const r=e.querySelector("#bulkText").value.trim().split(`
`),s=e.querySelector("#bulkLocation").value,i=e.querySelector("#bulkStatus").value;let a=fe(),c=0,d=new Set(a.map(h=>h.chargerId));for(let h of r){let[p,m,v,A]=h.split(/\t|,/).map(T=>T==null?void 0:T.trim());!m||d.has(m)||(d.add(m),a.push({chargerId:m,chargerSerial:v||"",simNumber:A||"",model:p||"",product:p||"",location:s,status:i,assigned:!1,created:new Date().toISOString(),addedBy:je(),lastAction:new Date().toISOString(),notes:""}),c++)}Re(a),z(`Bulk added ${c} units`,"green"),e.close(),ee=a,xe(document.getElementById("main-content"))}};window.bulkDelete=function(){if(!ns())return;if(!window.selectedUnits||!window.selectedUnits.length){z("No units selected","red");return}if(!confirm(`Are you sure you want to delete ${window.selectedUnits.length} unit(s)?`))return;let n=fe();const e=n.length;n=n.filter(r=>!window.selectedUnits.includes(r.chargerId)),Re(n);const t=Ct();window.selectedUnits.forEach(r=>{t.push({date:new Date().toISOString(),action:"Bulk Delete",chargerId:r,user:je()})}),Rt(t),z(`Deleted ${e-n.length} unit(s)`,"red"),window.selectedUnits=[],ee=n,xe(document.getElementById("main-content"))};window.clearBulkSelection=function(){window.selectedUnits=[],We(),br()};window.toggleRowMenu=function(n){document.querySelectorAll(".table-dot-menu").forEach((t,r)=>{r!==n&&t.classList.remove("show")});const e=document.getElementById(`row-menu-${n}`);e&&e.parentNode.classList.toggle("show"),document.addEventListener("click",function t(r){e.contains(r.target)||(e.parentNode.classList.remove("show"),document.removeEventListener("click",t))})};window.openCreateShipmentDialog=function(){typeof window.openShipmentDialog=="function"?window.openShipmentDialog():typeof openShipmentDialog=="function"?openShipmentDialog():z("Shipment dialog function not found","red")};function pu(){if(window.innerWidth<640){["addItemBtn","bulkAddBtn","addShipmentBtn"].forEach(e=>{const t=document.getElementById(e);t&&t.remove()});return}if(document.getElementById("addItemBtn")||document.getElementById("bulkAddBtn")||document.getElementById("addShipmentBtn"))return;if(document.body.insertAdjacentHTML("beforeend",`
    <button id="addShipmentBtn"
      class="fixed bottom-48 right-8 z-40 bg-green-600 hover:bg-green-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-3xl transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9" fill="none" viewBox="0 0 32 32" stroke="currentColor">
        <rect x="10" y="10" width="12" height="6" rx="2" fill="#bbf7d0" stroke="white" stroke-width="2"/>
        <rect x="13" y="6" width="6" height="4" rx="1" fill="#4ade80" stroke="white" stroke-width="2"/>
        <path d="M4 22c2 3 6 5 12 5s10-2 12-5l-12-4-12 4z" fill="#22d3ee" stroke="white" stroke-width="2"/>
        <path d="M8 25c1 1 3 2 8 2s7-1 8-2" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="16" cy="18" r="1.5" fill="white"/>
      </svg>
    </button>
    <button id="bulkAddBtn"
      class="fixed bottom-28 right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-3xl transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="7" y="7" width="10" height="10" rx="2" fill="#3b82f6" stroke="white" stroke-width="2"/>
        <rect x="3" y="3" width="10" height="10" rx="2" fill="#60a5fa" stroke="white" stroke-width="2" opacity="0.7"/>
        <path d="M12 12v4m2-2h-4" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <button id="addItemBtn"
      class="fixed bottom-8 right-8 z-40 bg-purple-600 hover:bg-purple-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-3xl transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" fill="#a78bfa" stroke="white" stroke-width="2"/>
        <path d="M12 8v8m4-4H8" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <dialog id="addItemDialog" class="rounded-xl p-4"></dialog>
    <dialog id="actionDialog" class="rounded-xl p-4"></dialog>
    <dialog id="shipmentDialog" class="rounded-xl p-4"></dialog>
    <dialog id="globalSearchDialog" class="rounded-xl p-4"></dialog>
  `),!document.getElementById("barcodeScanDialog")){const e=document.createElement("dialog");e.id="barcodeScanDialog",e.className="rounded-xl p-4",document.body.appendChild(e)}}document.addEventListener("DOMContentLoaded",()=>{if(document.body.dataset.page==="inventory"){window.innerWidth>=640&&pu();const n=document.getElementById("addItemBtn"),e=document.getElementById("bulkAddBtn"),t=document.getElementById("addShipmentBtn");ee=fe(),xe(document.getElementById("main-content")),n&&(n.onclick=gu),e&&(e.onclick=openBulkAddDialog),t&&(t.onclick=openCreateShipmentDialog),setTimeout(()=>{Bs(n,"Add single charger"),Bs(e,"Bulk add chargers"),Bs(t,"Create shipment")},10);const r=sessionStorage.getItem("pendingInventoryAction");if(r){const{action:s,unit:i}=JSON.parse(r);sessionStorage.removeItem("pendingInventoryAction"),setTimeout(()=>{s==="move"&&typeof window.openMoveDialog=="function"&&window.openMoveDialog(i),s==="edit"&&typeof window.openEditDialog=="function"&&window.openEditDialog(i),s==="view"&&typeof window.openDetailsDialog=="function"&&window.openDetailsDialog(i)},300)}}});function xe(n){if(window.innerWidth<640){Fg(n,ee);return}n.innerHTML=`
      <h2 class="text-2xl font-bold mb-4">Inventory Units</h2>
      <div class="flex flex-wrap gap-3 mb-4 items-center">
        <input id="searchInput" type="text" placeholder="Search Anything" class="border px-3 py-1 rounded" style="min-width:200px;">
        <select id="filterStatus" class="border px-3 py-1 rounded">
          <option value="">All Statuses</option>
          ${[...new Set(ee.map(e=>e.status))].map(e=>`<option value="${e}">${e}</option>`).join("")}
        </select>
        <select id="filterLocation" class="border px-3 py-1 rounded">
          <option value="">All Locations</option>
          ${[...new Set(ee.map(e=>e.location))].map(e=>`<option value="${e}">${e}</option>`).join("")}
        </select>
        <button id="downloadCSV" class="bg-gray-200 px-3 py-1 rounded">Download CSV</button>
        <button id="downloadExcel" class="bg-gray-200 px-3 py-1 rounded">Download Excel</button>
      </div>
      <div class="inventory-scroll-area min-h-[340px] overflow-x-auto" style="max-height:70vh;">
        <table class="min-w-full table-auto border rounded-xl bg-white dark:bg-gray-900 shadow">
          <thead class="table-header">
            <tr>
              <th class="p-2 border-b"><input type="checkbox" id="selectAll"></th>
              <th class="p-2 border-b">Model</th>
              <th class="p-2 border-b">Charger ID</th>
              <th class="p-2 border-b">Serial</th>
              <th class="p-2 border-b">SIM Number</th>
              <th class="p-2 border-b">Status</th>
              <th class="p-2 border-b">Location</th>
              <th class="p-2 border-b">Last Action</th>
              <th class="p-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody id="inventoryTableBody"></tbody>
        </table>
      </div>
      <div id="bulkActionBar"></div>
      <div id="paginationBar"></div>
    `,n.querySelector("#searchInput").oninput=()=>{window.inventoryPage=1,We()},n.querySelector("#filterStatus").onchange=()=>{window.inventoryPage=1,We()},n.querySelector("#filterLocation").onchange=()=>{window.inventoryPage=1,We()},n.querySelector("#downloadCSV").onclick=jg,n.querySelector("#downloadExcel").onclick=zg,We()}window.addEventListener("resize",()=>{document.body.dataset.page==="inventory"&&(pu(),xe(document.getElementById("main-content")))});function We(){const n=document.getElementById("main-content"),e=n.querySelector("#searchInput").value.toLowerCase(),t=n.querySelector("#filterStatus").value,r=n.querySelector("#filterLocation").value,s=n.querySelector("#inventoryTableBody");let i=ee;e&&(i=i.filter(T=>[T.chargerId,T.chargerSerial,T.simNumber,T.product,T.model,T.status,T.location,T.notes,T.lastAction,T.addedBy,T.invoiceNumber].some(R=>(R||"").toLowerCase().includes(e)))),t&&(i=i.filter(T=>T.status===t)),r&&(i=i.filter(T=>T.location===r));const a=window.inventoryPageSize,c=window.inventoryPage,d=(c-1)*a,h=d+a,p=i.slice(d,h);window.selectedUnits=window.selectedUnits.filter(T=>ee.some(C=>C.chargerId===T)),s.innerHTML=p.map((T,C)=>`
      <tr class="inv-row${window.selectedUnits.includes(T.chargerId)?" selected":""}" data-idx="${C}" data-id="${T.chargerId}">
        <td class="p-2 border-b text-center">
          <input type="checkbox" data-chargerid="${T.chargerId}" ${window.selectedUnits.includes(T.chargerId)?"checked":""}>
        </td>
        <td class="p-2 border-b table-cell">${T.model||""}</td>
        <td class="p-2 border-b table-cell">${T.chargerId}</td>
        <td class="p-2 border-b table-cell">${T.chargerSerial||""}</td>
        <td class="p-2 border-b table-cell">${T.simNumber||""}</td>
        <td class="p-2 border-b table-cell">
          <span class="rounded-full px-3 py-1 text-xs font-semibold"
            style="
              background:${ul(T.status).bg};
              color:${ul(T.status).color};
              display:inline-block;
              min-width:86px;
              text-align:center;
              letter-spacing:0.03em;
              box-shadow:0 1px 3px 0 #0001;
            "
          >${T.status}</span>
        </td>
        <td class="p-2 border-b table-cell">
          <span class="rounded-full px-3 py-1 text-xs font-semibold"
            style="
              background:${cl(T.location).bg};
              color:${cl(T.location).color};
              min-width: 86px;
              display:inline-block;
              text-align:center;
              letter-spacing:0.03em;
              box-shadow:0 1px 3px 0 #0001;
            "
          >${T.location}</span>
        </td>
        <td class="p-2 border-b table-cell">${new Date(T.lastAction).toLocaleString()}</td>
        <td class="p-2 border-b table-cell">
          <div class="table-dot-menu" data-idx="${C}">
            <button class="px-2 py-1 text-lg font-bold" onclick="event.stopPropagation();toggleRowMenu(${C})">⋮</button>
            <div class="table-dot-menu-content" id="row-menu-${C}">
              <button onclick='openDetailsDialog(${JSON.stringify(T).replace(/"/g,"&quot;")})'>Details</button>
              <button onclick='openMoveDialog(${JSON.stringify(T).replace(/"/g,"&quot;")})'>Move</button>
              <button onclick='openStatusDialog(${JSON.stringify(T).replace(/"/g,"&quot;")})'>Change Status</button>
              <button onclick='openEditDialog(${JSON.stringify(T).replace(/"/g,"&quot;")})'>Edit</button>
              ${ns()?`<button class="delete" onclick='deleteUnit("${T.chargerId}")'>Delete</button>`:""}
            </div>
          </div>
        </td>
      </tr>
    `).join(""),qg(),s.querySelectorAll(".table-dot-menu > button").forEach((T,C)=>{T.onclick=R=>{R.stopPropagation(),document.querySelectorAll(".table-dot-menu").forEach((N,B)=>{B!==C&&N.classList.remove("show")}),T.parentNode.classList.toggle("show"),document.addEventListener("click",function N(B){T.parentNode.contains(B.target)||(T.parentNode.classList.remove("show"),document.removeEventListener("click",N))})}}),s.querySelectorAll('input[type="checkbox"]').forEach(T=>{T.onchange=C=>{const R=C.target.dataset.chargerid;C.target.checked?window.selectedUnits.includes(R)||window.selectedUnits.push(R):window.selectedUnits=window.selectedUnits.filter(N=>N!==R),br(),T.closest("tr").classList.toggle("selected",T.checked)}});const m=n.querySelector("#selectAll");m&&(m.checked=p.length>0&&p.every(T=>window.selectedUnits.includes(T.chargerId)),m.indeterminate=p.some(T=>window.selectedUnits.includes(T.chargerId))&&!m.checked,m.onchange=T=>{T.target.checked?p.forEach(C=>{window.selectedUnits.includes(C.chargerId)||window.selectedUnits.push(C.chargerId)}):window.selectedUnits=window.selectedUnits.filter(C=>!p.some(R=>R.chargerId===C)),We(),br()});const v=n.querySelector("#paginationBar"),A=Math.max(1,Math.ceil(i.length/a));v.innerHTML=`
      <div class="flex justify-center items-center gap-4 py-4">
        <button id="prevPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${c===1?"opacity-50 cursor-not-allowed":""}" ${c===1?"disabled":""}>Prev</button>
        <span id="pageNumSpan" class="font-semibold">Page ${c} of ${A}</span>
        <button id="nextPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${c===A?"opacity-50 cursor-not-allowed":""}" ${c===A?"disabled":""}>Next</button>
        <label class="ml-6">Show
          <select id="pageSizeSelect" class="border px-2 py-1 rounded ml-2">
            <option value="30" ${a===30?"selected":""}>30</option>
            <option value="50" ${a===50?"selected":""}>50</option>
            <option value="100" ${a===100?"selected":""}>100</option>
          </select>
          entries per page
        </label>
      </div>
    `,n.querySelector("#prevPageBtn").onclick=()=>{window.inventoryPage>1&&(window.inventoryPage--,We())},n.querySelector("#nextPageBtn").onclick=()=>{window.inventoryPage<A&&(window.inventoryPage++,We())},n.querySelector("#pageSizeSelect").onchange=T=>{window.inventoryPageSize=parseInt(T.target.value,10),window.inventoryPage=1,We()},br()}function $g(){["addItemDialog","actionDialog","shipmentDialog","globalSearchDialog"].forEach(n=>{if(!document.getElementById(n)){const e=document.createElement("dialog");e.id=n,e.className="rounded-xl p-4",document.body.appendChild(e)}})}function Fg(n,e){$g(),n.innerHTML=`
      <div class="sticky top-0 z-20 bg-white dark:bg-gray-900 p-3 flex gap-2 items-center shadow">
        <input id="searchInput" type="text" placeholder="Search" class="flex-1 border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800" />
        <button id="scanBtn" class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center" title="Scan Barcode">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <circle cx="12" cy="13.5" r="3.5" />
          </svg>
        </button>
      </div>
      <div id="mobileInventoryList" class="flex flex-col gap-3 mt-3"></div>
      <button id="fabAdd" class="fixed bottom-6 right-6 bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-3xl z-50">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="white"/>
          <path d="M12 8v8m4-4H8" stroke="white"/>
        </svg>
      </button>
      <dialog id="addItemDialog" class="rounded-xl p-4"></dialog>
    `;const t=n.querySelector("#mobileInventoryList");dl(t,e),n.querySelector("#searchInput").oninput=Ug(r=>{const s=r.target.value.toLowerCase(),i=ee.filter(a=>[a.chargerId,a.chargerSerial,a.simNumber,a.product,a.model,a.status,a.location,a.notes].some(c=>(c||"").toLowerCase().includes(s)));dl(t,i)},250),n.querySelector("#scanBtn").onclick=()=>{openBarcodeScanner(r=>{if(r){const s=ee.find(i=>i.chargerSerial===r||i.chargerId===r);s?openDetailsDialog(s):z("Not found","red")}})},n.querySelector("#fabAdd").onclick=gu}function Ug(n,e){let t=null;return function(...r){clearTimeout(t),t=setTimeout(()=>n.apply(this,r),e)}}function dl(n,e){n.innerHTML=e.map(t=>`
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow flex items-center px-4 py-3 relative mobile-inv-card" data-id="${t.chargerId}">
        <div class="flex-shrink-0 w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-3">
          <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="4"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-base text-gray-900 dark:text-white truncate">${t.chargerId}</div>
          <div class="text-xs text-gray-600 dark:text-gray-300">${t.status} • ${t.location}</div>
          <div class="text-xs text-gray-400 truncate">${t.model||t.product||""}${t.chargerSerial?" • "+t.chargerSerial:""}</div>
        </div>
        <button class="ml-2 text-gray-400 hover:text-purple-600" onclick='openDetailsDialog(${JSON.stringify(t).replace(/"/g,"&quot;")})' title="View">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="ml-1 text-gray-400 hover:text-blue-600" onclick='openMoveDialog(${JSON.stringify(t).replace(/"/g,"&quot;")})' title="Move">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="3" y="7" width="13" height="10" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 12h5m0 0l-2-2m2 2l-2 2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    `).join(""),n.querySelectorAll(".mobile-inv-card").forEach(t=>{let r=null,s=!1;t.addEventListener("touchstart",i=>{r=i.touches[0].clientX,s=!1},{passive:!0}),t.addEventListener("touchmove",i=>{if(r===null)return;const a=i.touches[0].clientX-r;if(a<-50&&!s){s=!0;const c=e.find(d=>d.chargerId===t.dataset.id);c&&window.openEditDialog(c)}else if(a>50&&!s){s=!0;const c=e.find(d=>d.chargerId===t.dataset.id);c&&window.openMoveDialog(c)}},{passive:!0}),t.addEventListener("touchend",()=>{r=null,s=!1})})}function qg(){document.getElementById("main-content").querySelectorAll(".inv-row").forEach(e=>{let t=null,r=!1;e.addEventListener("touchstart",s=>{t=s.touches[0].clientX,r=!1},{passive:!0}),e.addEventListener("touchmove",s=>{if(t===null)return;const i=s.touches[0].clientX-t;if(i<-50&&!r){e.classList.add("swiped");const a=e.dataset.idx,c=document.getElementById(`row-swipe-actions-${a}`);c&&c.classList.remove("hidden"),r=!0}else if(i>50&&!r){e.classList.add("swiped-right"),e.dataset.idx;const a=e.dataset.id,c=ee.find(d=>d.chargerId===a);c&&c.location==="Technician/Contractor"&&openAssignContractorDialog(c),r=!0}},{passive:!0}),e.addEventListener("touchend",()=>{if(t=null,!e.classList.contains("swiped-right")){e.classList.remove("swiped");const s=e.dataset.idx,i=document.getElementById(`row-swipe-actions-${s}`);i&&i.classList.add("hidden")}}),document.addEventListener("touchstart",s=>{if(!e.contains(s.target)){e.classList.remove("swiped","swiped-right");const i=e.dataset.idx,a=document.getElementById(`row-swipe-actions-${i}`);a&&a.classList.add("hidden")}},{passive:!0})})}function br(){const e=document.getElementById("main-content").querySelector("#bulkActionBar");if(e){if(window.selectedUnits.length===0){e.innerHTML="";return}e.innerHTML=`
        <div class="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg mb-4 shadow">
          <span class="font-semibold">${window.selectedUnits.length} selected</span>
          <button onclick="openBulkMoveDialog()" class="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded">Bulk Move</button>
          <button onclick="openBulkStatusDialog()" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Bulk Status</button>
          ${ns()?'<button onclick="bulkDelete()" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Bulk Delete</button>':""}
          <button onclick="clearBulkSelection()" class="ml-auto text-gray-500 hover:text-gray-900">Cancel</button>
        </div>
      `}}function jg(){const n=fe(),e=["Charger ID","Serial","Status","Location","Last Action"],t=n.map(c=>[c.chargerId,c.chargerSerial,c.status,c.location,c.lastAction]);let r=e.join(",")+`
`+t.map(c=>c.join(",")).join(`
`),s=new Blob([r],{type:"text/csv"}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download="inventory.csv",a.click(),URL.revokeObjectURL(i)}async function zg(){const n=fe(),e=XLSX.utils.book_new(),t=XLSX.utils.json_to_sheet(n);XLSX.utils.book_append_sheet(e,t,"Inventory"),XLSX.writeFile(e,"inventory.xlsx")}window.openBulkMoveDialog=function(){var c;const n=ee.filter(d=>window.selectedUnits.includes(d.chargerId));if(!n.length)return;const e=document.getElementById("actionDialog"),t=Xo(),r=t.filter(d=>d.parent==="Contractor/Technician"),s=["Customer Stock","Public Network Stock"],i=(c=n[0])==null?void 0:c.location;let a="";Bt(i)||s.includes(i)?a=r.map(d=>`<option value="${d.name}">${d.name}${d.isContractor?` (${d.company}, ${d.phone})`:""}</option>`).join(""):fu(i,r,s)?a=t.filter(d=>d.name!==i).map(d=>`<option value="${d.name}">${d.name}${d.parent&&!d.isContractor?` (${d.parent})`:""}${d.isContractor?` (${d.company}, ${d.phone})`:""}</option>`).join(""):a=r.map(d=>`<option value="${d.name}">${d.name}${d.isContractor?` (${d.company}, ${d.phone})`:""}</option>`).join(""),e.innerHTML=`
<form method="dialog" class="flex flex-col gap-4 w-full sm:w-[40rem] max-w-3xl">
  <h3 class="font-bold mb-2">Move ${n.length} Units</h3>
  <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
  <label>Move to location:</label>
  <select id="moveLoc" required class="border px-2 py-1 rounded">
    <option value="">-- Select Location --</option>
    ${a}
  </select>
  <label>Set status (optional):</label>
  <select id="moveStatus" class="border px-2 py-1 rounded">
    <option value="">-- Keep Current Status --</option>
    ${ke().statuses.map(d=>`<option value="${d}">${d}</option>`).join("")}
  </select>
  <textarea id="moveComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
  <div class="flex justify-between gap-2 mt-3">
    <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
    <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Move</button>
  </div>
</form>
`,e.showModal(),e.querySelector('button[value="cancel"]').onclick=d=>{d.preventDefault(),e.close()},e.querySelector("form").onsubmit=d=>{d.preventDefault();const h=e.querySelector("#moveLoc").value.trim(),p=r.map(C=>C.name);if(!h){e.querySelector("#moveLoc").classList.add("border-red-500"),e.querySelector("#formError").textContent="Select a location.";return}if((Bt(i)||s.includes(i))&&!p.includes(h)){e.querySelector("#formError").textContent="You can only move units from warehouse/installed to a Contractor/Technician location.";return}if((i==="Back Warehouse"||s.includes(i))&&!p.includes(h)){e.querySelector("#formError").textContent="You can only move units from warehouse/installed to a Contractor/Technician location.";return}const m=n.filter(C=>C.location.startsWith("Back Warehouse")&&!C.chargerSerial&&!h.startsWith("Back Warehouse"));if(m.length){e.querySelector("#formError").textContent=`Cannot move ${m.length} unit(s) without serial out of warehouse.`;return}let v=fe();const A=[];n.forEach(C=>{const R=v.findIndex(N=>N.chargerId===C.chargerId);R>=0&&(A.push({...v[R]}),v[R].location=h,moveStatus&&(v[R].status=moveStatus),v[R].lastAction=new Date().toISOString(),v[R].notes=e.querySelector("#moveComment").value.trim())}),Re(v);const T=Ct();n.forEach(C=>{T.push({date:new Date().toISOString(),action:"Bulk Move",chargerId:C.chargerId,chargerSerial:C.chargerSerial,simNumber:C.simNumber,product:C.product,from:C.location,to:h,statusFrom:C.status,statusTo:C.status,user:je(),comment:e.querySelector("#moveComment").value.trim()})}),Rt(T),Jo("Units moved","blue",()=>{Re(mu(v,A)),z("Bulk move undone","red"),ee=fe(),window.selectedUnits=[],xe(document.getElementById("main-content"))}),e.close(),ee=v,window.selectedUnits=[],xe(document.getElementById("main-content"))}};window.openBulkStatusDialog=function(){const n=ee.filter(s=>selectedUnits.includes(s.chargerId));if(!n.length)return;const e=document.getElementById("actionDialog"),t=ke().statuses;t.filter(s=>!n.every(i=>i.status===s)).map(s=>`<option value="${s}">${s}</option>`).join(""),e.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Change Status (${n.length} Units)</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <label>Set status to:</label>
        <select id="newStatus" required class="border px-2 py-1 rounded">
          <option value="">-- Select Status --</option>
          ${t.map(s=>`<option value="${s}">${s}</option>`).join("")}
        </select>
        <div id="privatePublicSection" style="display:none">
          <label class="font-bold">Installed as:</label>
          <select id="privatePublic" class="border px-2 py-1 rounded">
            <option value="">-- Select --</option>
            <option value="Private">Private (optionally enter invoice)</option>
            <option value="Public">Public (asset for depreciation)</option>
          </select>
          <input id="invoiceNumber" type="text" placeholder="Invoice Number (Optional)" class="border px-2 py-1 rounded" style="display:none">
        </div>
        <textarea id="statusComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-blue-600 text-white px-3 py-1 rounded">Change</button>
        </div>
      </form>
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=s=>{s.preventDefault(),e.close()};const r=e.querySelector("#newStatus");r.onchange=()=>{r.value==="Installed"?e.querySelector("#privatePublicSection").style.display="":e.querySelector("#privatePublicSection").style.display="none"},e.querySelector("#privatePublic").onchange=()=>{e.querySelector("#invoiceNumber").style.display=e.querySelector("#privatePublic").value==="Private"?"":"none"},e.querySelector("form").onsubmit=s=>{s.preventDefault();const i=e.querySelector("#newStatus").value.trim();let a=!!i;if(e.querySelector("#formError").textContent="",i==="Installed"&&!e.querySelector("#privatePublic").value&&(e.querySelector("#privatePublic").classList.add("border-red-500"),a=!1),!a){e.querySelector("#formError").textContent="Select all required fields.";return}let c=fe();const d=[];n.forEach(p=>{const m=c.findIndex(v=>v.chargerId===p.chargerId);m>=0&&(d.push({...c[m]}),c[m].status=i,c[m].lastAction=new Date().toISOString(),i==="Installed"&&(c[m].location="Customer Stock",c[m].isAsset=e.querySelector("#privatePublic").value==="Public",c[m].invoiceNumber=e.querySelector("#invoiceNumber").value.trim()))}),Re(c);const h=Ct();n.forEach(p=>{var m;h.push({date:new Date().toISOString(),action:"Bulk Status Change",chargerId:p.chargerId,chargerSerial:p.chargerSerial,simNumber:p.simNumber,product:p.product,from:p.location,to:((m=c.find(v=>v.chargerId===p.chargerId))==null?void 0:m.location)||p.location,statusFrom:p.status,statusTo:i,user:je(),comment:e.querySelector("#statusComment").value.trim()})}),Rt(h),Jo("Status changed","blue",()=>{Re(mu(c,d)),z("Bulk status undo","red"),ee=fe(),window.selectedUnits=[],xe(document.getElementById("main-content"))}),e.close(),ee=c,window.selectedUnits=[],xe(document.getElementById("main-content"))}};function mu(n,e){return e.map(t=>t.chargerId),n.map(t=>{const r=e.find(s=>s.chargerId===t.chargerId);return r||t})}function Jo(n,e,t){const r=document.getElementById("toast");r.innerHTML=`
      ${n}
      <button id="undoBtn" class="ml-3 underline text-white">Undo</button>
    `,r.className=`fixed top-6 right-6 z-50 min-w-[200px] max-w-xs bg-${e}-600 text-white font-semibold px-4 py-2 rounded shadow-lg opacity-100 pointer-events-auto transition-opacity duration-300`,document.getElementById("undoBtn").onclick=()=>{t(),r.classList.remove("opacity-100","pointer-events-auto"),r.classList.add("opacity-0","pointer-events-none")},setTimeout(()=>{r.classList.remove("opacity-100","pointer-events-auto"),r.classList.add("opacity-0","pointer-events-none")},3500)}window.toggleActionsMenu=function(n){document.querySelectorAll('[id^="unit-actions-"]').forEach(t=>t.classList.add("hidden"));const e=document.getElementById(`unit-actions-${n}`);e&&e.classList.toggle("hidden"),document.addEventListener("click",function t(r){e.contains(r.target)||(e.classList.add("hidden"),document.removeEventListener("click",t))})};window.openDetailsDialog=function(n){const e=document.getElementById("actionDialog");e.innerHTML=`
      <div class="w-96 p-4">
        <div class="text-xl font-bold mb-2 text-purple-700">Unit Details</div>
        <div class="space-y-2 text-gray-700 dark:text-gray-200">
          <div><b>ID:</b> ${n.chargerId}</div>
          <div><b>Serial:</b> ${n.chargerSerial||'<span class="text-red-400">[none]</span>'}</div>
          <div><b>SIM:</b> ${n.simNumber||"-"}</div>
          <div><b>Product:</b> ${n.product}</div>
          <div><b>Model:</b> ${n.model}</div>
          <div><b>Location:</b> ${n.location}</div>
          <div><b>Status:</b> ${n.status}</div>
          <div><b>Added:</b> ${new Date(n.created).toLocaleString()}</div>
          <div><b>Last Action:</b> ${new Date(n.lastAction).toLocaleString()}</div>
          <div><b>Notes:</b> ${n.notes||"-"}</div>
        </div>
        <div class="flex justify-end mt-4">
          <button class="bg-purple-600 text-white px-3 py-1 rounded" onclick="document.getElementById('actionDialog').close()">Close</button>
        </div>
      </div>
    `,e.showModal()};window.deleteUnit=function(n){if(!ns())return;const e=document.getElementById("actionDialog");e.innerHTML=`
      <div class="w-96 p-4">
        <div class="text-xl font-bold mb-2 text-red-700">Delete Unit</div>
        <div class="mb-4">Are you sure you want to delete this item?</div>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="button" value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </div>
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=t=>{t.preventDefault(),e.close()},e.querySelector('button[value="ok"]').onclick=t=>{let r=fe();r=r.filter(s=>s.chargerId!==n),Re(r),z("Unit deleted","red"),ee=r,xe(document.getElementById("main-content")),e.close()}};function ns(){return je()==="Admin"}window.openMoveDialog=function(n){const e=document.getElementById("actionDialog"),t=ke();function r(h){const p=(h.contractors||[]).map(m=>({name:m.name,parent:"Contractor/Technician",isContractor:!0,company:m.company,phone:m.phone,id:m.id}));return[...h.locations||[],...p]}const s=r(t),i=s.filter(h=>h.parent==="Contractor/Technician"),a=["Customer Stock","Public Network Stock"];let c="";const d=n.location;Bt(d)||a.includes(d)?c=i.map(h=>`<option value="${h.name}">${h.name}${h.isContractor?` (${h.company}, ${h.phone})`:""}</option>`).join(""):fu(d,i,a)?c=s.filter(h=>h.name!==d).map(h=>`<option value="${h.name}">${h.name}${h.parent&&!h.isContractor?` (${h.parent})`:""}${h.isContractor?` (${h.company}, ${h.phone})`:""}</option>`).join(""):c=i.map(h=>`<option value="${h.name}">${h.name}${h.isContractor?` (${h.company}, ${h.phone})`:""}</option>`).join(""),e.innerHTML=`
  <form method="dialog" class="flex flex-col gap-3 w-80">
    <h3 class="font-bold mb-2">Move Unit ${n.chargerId}</h3>
    <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
    <label>Move to location:</label>
    <select id="moveLoc" class="border px-2 py-1 rounded">
      <option value="">-- Keep Current Location --</option>
      ${c}
    </select>
    <label>Set status (optional):</label>
    <select id="moveStatus" class="border px-2 py-1 rounded">
      <option value="">-- Keep Current Status --</option>
      ${t.statuses.map(h=>`<option value="${h}"${n.status===h?" selected":""}>${h}</option>`).join("")}
    </select>
    <textarea id="moveComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Move</button>
    </div>
  </form>
`,e.showModal(),e.querySelector('button[value="cancel"]').onclick=h=>{h.preventDefault(),e.close()},e.querySelector("form").onsubmit=h=>{h.preventDefault();const p=e.querySelector("#moveLoc").value.trim(),m=e.querySelector("#moveStatus").value.trim(),v=i.map(R=>R.name);if(!p){e.querySelector("#moveLoc").classList.add("border-red-500"),e.querySelector("#formError").textContent="Select a location.";return}if(!m){e.querySelector("#moveStatus").classList.add("border-red-500"),e.querySelector("#formError").textContent="Select a status.";return}if((Bt(n.location)||a.includes(n.location))&&!v.includes(p)){e.querySelector("#formError").textContent="You can only move units from warehouse/installed to a Contractor/Technician location.";return}if(Bt(n.location)&&!n.chargerSerial&&!Bt(p)){e.querySelector("#formError").textContent="Cannot move unit without serial out of warehouse.";return}let A=fe();const T=A.findIndex(R=>R.chargerId===n.chargerId);T>=0&&(A[T].location=p,A[T].status=m,A[T].lastAction=new Date().toISOString(),A[T].notes=e.querySelector("#moveComment").value.trim()),Re(A);const C=Ct();C.push({date:new Date().toISOString(),action:"Move",chargerId:n.chargerId,chargerSerial:n.chargerSerial,simNumber:n.simNumber,product:n.product,from:n.location,to:p,statusFrom:n.status,statusTo:m,user:je(),comment:e.querySelector("#moveComment").value.trim()}),Rt(C),z("Unit moved","blue"),e.close(),ee=A,xe(document.getElementById("main-content"))}};function Bt(n){return/warehouse|stock/i.test(n)}function hl(n){const e=ke();if(!e.contractors)return"";const t=e.contractors.find(r=>n.toLowerCase().includes(r.name.toLowerCase()));return t?` (${t.phone})`:""}window.openAssignContractorDialog=function(n){const e=document.getElementById("actionDialog"),t=ke().contractors||[];e.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Assign Unit ${n.chargerId} to Contractor</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <select id="contractor" required class="border px-2 py-1 rounded">
          <option value="">-- Select Contractor --</option>
          ${t.map(r=>`<option value="${r.id}">${r.name} (${r.company})</option>`).join("")}
        </select>
        <textarea id="assignComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Assign</button>
        </div>
      </form>
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=r=>{r.preventDefault(),e.close()},e.querySelector("form").onsubmit=r=>{r.preventDefault();const s=e.querySelector("#contractor").value.trim();if(!s){e.querySelector("#formError").textContent="Select a contractor.";return}const i=t.find(h=>h.id===s);if(!i){e.querySelector("#formError").textContent="Contractor not found.";return}let a=fe();const c=a.findIndex(h=>h.chargerId===n.chargerId);c>=0&&(a[c].location=i.name,a[c].contractorId=i.id,a[c].status="Reserved",a[c].lastAction=new Date().toISOString()),Re(a);const d=Ct();d.push({date:new Date().toISOString(),action:"Assign to Contractor",chargerId:n.chargerId,chargerSerial:n.chargerSerial,simNumber:n.simNumber,product:n.product,from:n.location,to:`Assigned to ${i.name}`,contractorId:i.id,contractorName:i.name,statusFrom:n.status,statusTo:"Reserved",user:je(),comment:e.querySelector("#assignComment").value.trim()}),Rt(d),z("Unit assigned to contractor","blue"),e.close(),ee=a,xe(document.getElementById("main-content"))}};window.openEditDialog=function(n){const e=document.getElementById("actionDialog"),t=Xo(),r=ke().statuses;e.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Edit Unit ${n.chargerId}</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <input id="editChargerId" type="text" class="border px-2 py-1 rounded" value="${n.chargerId}" disabled>
        <input id="editChargerSerial" type="text" class="border px-2 py-1 rounded" value="${n.chargerSerial||""}" placeholder="Serial (optional)">
        <input id="editSimNumber" type="text" class="border px-2 py-1 rounded" value="${n.simNumber||""}" placeholder="SIM Number (optional)">
        <input id="editProduct" type="text" class="border px-2 py-1 rounded" value="${n.product||""}" placeholder="Product">
        <input id="editModel" type="text" class="border px-2 py-1 rounded" value="${n.model||""}" placeholder="Model">
        <select id="editLocation" required class="border px-2 py-1 rounded">
  <option value="">-- Select Location --</option>
  ${(()=>{const s=t.filter(c=>c.parent==="Contractor/Technician"),i=["Customer Stock","Public Network Stock"],a=n.location;return a==="Back Warehouse"||i.includes(a)?s.map(c=>`<option value="${c.name}"${n.location===c.name?" selected":""}>
          ${c.name}${hl(c.name)}
        </option>`).join(""):s.map(c=>c.name).includes(a)?t.filter(c=>c.name==="Back Warehouse"||i.includes(c.name)).map(c=>`<option value="${c.name}"${n.location===c.name?" selected":""}>
            ${c.name}${c.parent?` (${c.parent})`:""}
          </option>`).join(""):s.map(c=>`<option value="${c.name}"${n.location===c.name?" selected":""}>
          ${c.name}${hl(c.name)}
        </option>`).join("")})()}
</select>
        <select id="editStatus" required class="border px-2 py-1 rounded">
          <option value="">-- Select Status --</option>
          ${r.map(s=>`<option value="${s}"${n.status===s?" selected":""}>${s}</option>`).join("")}
        </select>
        <textarea id="editNotes" class="border px-2 py-1 rounded" placeholder="Notes (optional)">${n.notes||""}</textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=s=>{s.preventDefault(),e.close()},e.querySelector("form").onsubmit=s=>{s.preventDefault();const i=e.querySelector("#editChargerSerial").value.trim(),a=e.querySelector("#editSimNumber").value.trim(),c=e.querySelector("#editProduct").value.trim(),d=e.querySelector("#editModel").value.trim(),h=e.querySelector("#editLocation").value.trim()||n.location,p=e.querySelector("#editStatus").value.trim()||n.status,m=e.querySelector("#editNotes").value.trim();if(!h||!p){e.querySelector("#formError").textContent="Location and status are required.";return}let v=fe();const A=v.findIndex(R=>R.chargerId===n.chargerId);if(A<0){z("Unit not found","red"),e.close();return}const T={...v[A]};v[A]={...v[A],chargerSerial:i,simNumber:a,product:c,model:d,location:h,status:p,notes:m,lastAction:new Date().toISOString()},Re(v);const C=Ct();C.push({date:new Date().toISOString(),action:"Edit Unit",chargerId:n.chargerId,user:je(),changes:{from:T,to:v[A]}}),Rt(C),Jo("Unit updated","blue",()=>{v[A]=T,Re(v),z("Edit undone","red"),ee=fe(),xe(document.getElementById("main-content"))}),e.close(),ee=v,xe(document.getElementById("main-content"))}};window.openGlobalSearchDialog=function(){if(window.innerWidth<640){z("Global search is not available on mobile. Use the search box above.","blue");return}const n=document.getElementById("globalSearchDialog");n.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4 w-[30rem] max-w-full">
        <h3 class="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Global Search</h3>
        <input id="globalSearchInput" type="text" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800"
          placeholder="Type anything... (product, serial, shipment, vendor)" autofocus>
        <div id="globalSearchResults" class="max-h-60 overflow-y-auto mt-2"></div>
        <div class="flex justify-end gap-2 mt-2">
          <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Close</button>
        </div>
      </form>
    `,n.showModal(),n.querySelector('button[value="cancel"]').onclick=t=>{t.preventDefault(),n.close()};const e=n.querySelector("#globalSearchInput");e.oninput=function(){performGlobalSearch(e.value.trim())},setTimeout(()=>{e.focus()},50),performGlobalSearch("")};window.performGlobalSearch=function(n){const e=document.getElementById("globalSearchResults");if(!e)return;const t=JSON.parse(localStorage.getItem("cm_shipments_v1")||"[]"),r=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]"),s=JSON.parse(localStorage.getItem("cm_products_v1")||"[]");if(!n){e.innerHTML='<div class="text-gray-400 text-center py-6">Start typing to search...</div>';return}const i=n.toLowerCase(),a=t.filter(h=>(h.shipmentId||"").toLowerCase().includes(i)||(h.vendor||"").toLowerCase().includes(i)||(h.incoterm||"").toLowerCase().includes(i)||Array.isArray(h.products)&&h.products.some(p=>(p.model||"").toLowerCase().includes(i))),c=r.filter(h=>[h.chargerId,h.chargerSerial,h.simNumber,h.product,h.model,h.status,h.location,h.notes,h.lastAction,h.addedBy,h.invoiceNumber].some(m=>(m||"").toLowerCase().includes(i))),d=s.filter(h=>(h.name||"").toLowerCase().includes(i)||(h.hsCode||"").toLowerCase().includes(i)||(h.vendor||"").toLowerCase().includes(i));if(a.length===0&&c.length===0&&d.length===0){e.innerHTML='<div class="text-gray-400 text-center py-6">No results found.</div>';return}e.innerHTML=`
      <div>
        <div class="font-bold text-purple-700 dark:text-purple-300 mt-2">Inventory (${c.length})</div>
        ${c.length?c.map(h=>`
          <div class="border-b border-gray-200 dark:border-gray-700 py-1 flex flex-col gap-1">
            <div><b>ID:</b> ${h.chargerId}</div>
            <div><b>Serial:</b> ${h.chargerSerial||"-"}</div>
            <div><b>SIM:</b> ${h.simNumber||"-"}</div>
            <div><b>Product:</b> ${h.product||"-"}</div>
            <div class="flex gap-2 mt-1">
              <button type="button" class="move-btn px-2 py-1 text-xs rounded bg-blue-600 text-white"
                data-chargerid="${h.chargerId}" data-serial="${h.chargerSerial}">Move</button>
              <button type="button" class="edit-inventory-btn px-2 py-1 text-xs rounded bg-green-600 text-white"
                data-chargerid="${h.chargerId}" data-serial="${h.chargerSerial}">Edit</button>
              <button type="button" class="view-inventory-btn px-2 py-1 text-xs rounded bg-purple-600 text-white"
                data-chargerid="${h.chargerId}">View</button>
            </div>
          </div>
        `).join(""):'<div class="text-gray-400 text-sm">None</div>'}
      </div>
    `,e.querySelectorAll(".move-btn").forEach(h=>{h.onclick=function(){const p=h.dataset.chargerid,m=h.dataset.serial,v=r.find(A=>A.chargerId===p&&A.chargerSerial===m);v?(window.openMoveDialog(v),document.getElementById("globalSearchDialog").close()):z("Inventory unit not found","red")}}),e.querySelectorAll(".edit-inventory-btn").forEach(h=>{h.onclick=function(){const p=h.dataset.chargerid,m=h.dataset.serial,v=r.find(A=>A.chargerId===p&&A.chargerSerial===m);v?(window.openEditDialog(v),document.getElementById("globalSearchDialog").close()):z("Inventory unit not found","red")}}),e.querySelectorAll(".view-inventory-btn").forEach(h=>{h.onclick=function(){const p=h.dataset.chargerid,m=r.find(v=>v.chargerId===p);m?typeof window.openDetailsDialog=="function"?(window.openDetailsDialog(m),document.getElementById("globalSearchDialog").close()):z("Details dialog not available on this page","red"):z("Inventory unit not found","red")}})};async function gu(){const n=document.getElementById("addItemDialog"),e=JSON.parse(localStorage.getItem("cm_products_v1")||"[]"),t=e.length?e.map(d=>d.name):[...new Set(ee.map(d=>d.product))],r=Xo(),s=ke().statuses;n.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Add Inventory Item</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <input id="chargerId" type="text" placeholder="Charger ID (Required)" required class="border px-2 py-1 rounded">
        <div class="flex gap-2">
          <input id="chargerSerial" type="text" placeholder="Charger Serial (Optional)" class="border px-2 py-1 rounded flex-1">
          <button type="button" id="scanBarcodeBtn" class="bg-blue-600 text-white px-3 py-1 rounded">Scan Barcode</button>
        </div>
        <input id="simNumber" type="text" placeholder="SIM Number (Optional)" class="border px-2 py-1 rounded">
        <select id="product" required class="border px-2 py-1 rounded">
          <option value="">-- Select Product --</option>
          ${t.map(d=>`<option value="${d}">${d}</option>`).join("")}
        </select>
        <input id="model" type="text" placeholder="Model (Optional)" class="border px-2 py-1 rounded">
        <select id="location" required class="border px-2 py-1 rounded">
          <option value="">-- Select Location --</option>
          ${r.map(d=>`<option value="${d.name}">${d.name}${d.parent?` (${d.parent})`:""}</option>`).join("")}
        </select>
        <select id="status" required class="border px-2 py-1 rounded">
          <option value="">-- Select Status --</option>
          ${s.map(d=>`<option value="${d}">${d}</option>`).join("")}
        </select>
        <textarea id="notes" placeholder="Notes (Optional)" class="border px-2 py-1 rounded"></textarea>
        <div id="privatePublicSection" style="display:none">
          <label class="font-bold">Installed as:</label>
          <select id="privatePublic" class="border px-2 py-1 rounded">
            <option value="">-- Select --</option>
            <option value="Private">Private (optionally enter invoice)</option>
            <option value="Public">Public (will be flagged as asset)</option>
          </select>
          <input id="invoiceNumber" type="text" placeholder="Invoice Number (Optional)" class="border px-2 py-1 rounded" style="display:none">
        </div>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </form>
    `;const i=n.querySelector('button[value="cancel"]');i&&(i.onclick=d=>{d.preventDefault(),n.close()}),n.showModal();const a=n.querySelector("#scanBarcodeBtn");a&&(a.onclick=()=>{openBarcodeScanner(d=>{d&&(n.querySelector("#chargerSerial").value=d)})});const c=n.querySelector("#status");c.onchange=()=>{c.value==="Installed"?(n.querySelector("#privatePublicSection").style.display="",n.querySelector("#location").value="Customer Stock",n.querySelector("#location").disabled=!0):(n.querySelector("#privatePublicSection").style.display="none",n.querySelector("#location").disabled=!1)},n.querySelector("#privatePublic").onchange=()=>{const d=n.querySelector("#privatePublic").value;n.querySelector("#invoiceNumber").style.display=d==="Private"?"":"none"},n.querySelector("form").onsubmit=d=>{if(d.preventDefault(),document.activeElement.value==="cancel"){n.close();return}let h=!0;n.querySelectorAll("input, select, textarea").forEach(Q=>Q.classList.remove("border-red-500")),n.querySelector("#formError").textContent="";const p=n.querySelector("#chargerId").value.trim(),m=n.querySelector("#chargerSerial").value.trim(),v=n.querySelector("#simNumber").value.trim(),A=n.querySelector("#product").value.trim(),T=n.querySelector("#model").value.trim(),C=n.querySelector("#location").value.trim(),R=n.querySelector("#status").value.trim(),N=n.querySelector("#notes").value.trim(),B=n.querySelector("#privatePublic")?n.querySelector("#privatePublic").value:"",D=n.querySelector("#invoiceNumber")?n.querySelector("#invoiceNumber").value.trim():"";if(p||(n.querySelector("#chargerId").classList.add("border-red-500"),h=!1),A||(n.querySelector("#product").classList.add("border-red-500"),h=!1),C||(n.querySelector("#location").classList.add("border-red-500"),h=!1),R||(n.querySelector("#status").classList.add("border-red-500"),h=!1),R==="Installed"&&!B&&(n.querySelector("#privatePublic").classList.add("border-red-500"),h=!1),!h){n.querySelector("#formError").textContent="Please fill in all required fields.";return}const K={chargerId:p,chargerSerial:m,simNumber:v,product:A,model:T,location:C,status:R,assigned:R==="Installed",created:new Date().toISOString(),addedBy:je(),lastAction:new Date().toISOString(),notes:N,isAsset:R==="Installed"&&B==="Public",invoiceNumber:R==="Installed"&&B==="Private"?D:""},ie=fe();ie.push(K),Re(ie),z("Inventory item added","green"),n.close(),ee=ie,xe(document.getElementById("main-content"))}}window.openStatusDialog=function(n){const e=document.getElementById("actionDialog"),t=ke().statuses;e.innerHTML=`
    <form method="dialog" class="flex flex-col gap-3 w-80">
      <h3 class="font-bold mb-2">Change Status: ${n.chargerId}</h3>
      <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
      <label>New status:</label>
      <select id="newStatus" required class="border px-2 py-1 rounded">
        <option value="">-- Select Status --</option>
        ${t.map(r=>`<option value="${r}"${n.status===r?" selected":""}>${r}</option>`).join("")}
      </select>
      <textarea id="statusComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
      <div class="flex justify-between gap-2 mt-3">
        <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
        <button value="ok" class="bg-blue-600 text-white px-3 py-1 rounded">Change</button>
      </div>
    </form>
  `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=r=>{r.preventDefault(),e.close()},e.querySelector("form").onsubmit=r=>{r.preventDefault();const s=e.querySelector("#newStatus").value.trim();if(!s){e.querySelector("#newStatus").classList.add("border-red-500"),e.querySelector("#formError").textContent="Please select a status.";return}let i=fe();const a=i.findIndex(d=>d.chargerId===n.chargerId);a>=0&&(i[a].status=s,i[a].lastAction=new Date().toISOString()),Re(i);const c=Ct();c.push({date:new Date().toISOString(),action:"Status Change",chargerId:n.chargerId,chargerSerial:n.chargerSerial,simNumber:n.simNumber,product:n.product,from:n.location,statusFrom:n.status,statusTo:s,user:je(),comment:e.querySelector("#statusComment").value.trim()}),Rt(c),z("Status updated","blue"),e.close(),ee=i,xe(document.getElementById("main-content"))}};window.openBarcodeScanner=function(n){let e=document.getElementById("barcodeScanDialog");e||(e=document.createElement("dialog"),e.id="barcodeScanDialog",e.className="rounded-xl p-4",document.body.appendChild(e)),e.innerHTML=`
    <div style="position:relative;">
      <button id="cancelScanBtn" style="position:absolute;top:8px;right:8px;z-index:2;" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <div class="mb-2 font-bold text-lg text-blue-800 dark:text-blue-300">Scan Product Barcode</div>
      <div id="barcode-scan-video" style="width:350px;height:200px;max-width:100%;border:2px solid #9cf;border-radius:10px;"></div>
      <div id="barcode-feedback" class="mt-2 text-gray-700 dark:text-gray-200"></div>
    </div>
  `,e.showModal();let t=!1;function r(){try{Quagga.offDetected&&Quagga.offDetected()}catch{}try{Quagga.stop()}catch{}}function s(){r(),e.close()}function i(){t=!0,r(),e.close(),n&&n(null)}setTimeout(()=>{const a=document.getElementById("cancelScanBtn");a&&(a.onclick=i)},10),e.addEventListener("click",function(a){a.target===e&&i()}),setTimeout(()=>{Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:document.getElementById("barcode-scan-video"),constraints:{facingMode:"environment"}},decoder:{readers:["code_128_reader","ean_reader","ean_8_reader"]}},function(d){if(d){document.getElementById("barcode-feedback").textContent="Camera error: "+d,setTimeout(s,1500);return}Quagga.start()});let a=[],c=3;Quagga.onDetected(function(d){if(t)return;const h=d.codeResult.code||"",p=(h.match(/(\d{8})$/)||[])[1]||h;a.push(p),a.length>c&&a.shift(),a.length===c&&a.every(m=>m===a[0])&&(t=!0,document.getElementById("barcode-feedback").textContent="Scanned: "+p,setTimeout(()=>{s(),n&&n(p)},600))})},150)};window.openBulkAddDialog=openBulkAddDialog;window.openDetailsDialog=openDetailsDialog;window.toggleActionsMenu=toggleActionsMenu;window.bulkDelete=bulkDelete;window.clearBulkSelection=clearBulkSelection;window.toggleRowMenu=toggleRowMenu;window.openMoveDialog=openMoveDialog;window.openStatusDialog=openStatusDialog;window.openEditDialog=openEditDialog;window.deleteUnit=deleteUnit;function Hg(n,e){const t=fe();n.forEach(r=>{const s=t.find(i=>i.chargerId===r);s&&(s.location=e,s.lastAction=new Date().toISOString())}),Re(t)}const Gg=Ze(),Wg=fe(),ao={};Gg.forEach(n=>ao[n.name]=n);let lo=0,co=0,Fr=0,Ur=0;const Kg=new Date,yu={factory:[],shipping:[],port:[],warehouse:[],installed:[],unknown:[]},vu=[],Qg=["enova warehouse","back warehouse"];Wg.forEach(n=>{var a;const e=ao[n.model]||ao[n.product],t=(e==null?void 0:e.isPublicAsset)||!1,r=parseFloat(e==null?void 0:e.price)||0;let s=null;const i=((a=n.location)==null?void 0:a.toLowerCase())||"";if(i.includes("public")||i.includes("arrived")||i.includes("installed")?s="installed":Qg.includes(i)?s="warehouse":i.includes("port")?s="port":i.includes("shipping")?s="shipping":i.includes("factory")?s="factory":s="unknown",s&&s!=="installed"&&yu[s].push(n),t||i.includes("public")){lo++,Fr+=r;const c=parseFloat(e==null?void 0:e.depreciationRate)/100||.15,d=new Date(n.installedDate||n.lastAction||n.created),h=(Kg-d)/(365.25*24*3600*1e3),p=r*Math.pow(1-c,h);vu.push({chargerId:n.chargerId,model:n.model,installDate:d.toLocaleDateString(),originalValue:r,depreciationRate:c,years:h.toFixed(2),currentValue:p.toFixed(0),location:n.location})}else e&&(co++,Ur+=r)});const fl=["bg-red-400 dark:bg-red-700","bg-orange-400 dark:bg-orange-700","bg-yellow-400 dark:bg-yellow-700","bg-green-400 dark:bg-green-700","bg-blue-400 dark:bg-blue-700","bg-indigo-400 dark:bg-indigo-700","bg-purple-400 dark:bg-purple-700"],Xg=[{label:"Public Chargers",value:lo,value2:`$${Fr.toLocaleString()}`},{label:"Inventory Chargers",value:co,value2:`$${Ur.toLocaleString()}`},{label:"Total Chargers",value:lo+co,value2:""}].map((n,e)=>({...n,color:fl[e%fl.length]}));function Jg(){document.getElementById("kpi-cards").innerHTML=Xg.map(n=>`
    <div class="${n.color} rounded-xl p-6 text-center shadow text-white">
      <div class="text-2xl font-bold">${n.value}</div>
      <div class="text-lg">${n.label}</div>
      ${n.value2?`<div class="text-lg font-semibold mt-1">${n.value2}</div>`:""}
    </div>
  `).join("")}function Yg(){var e,t;const n=(e=document.getElementById("assetDonut"))==null?void 0:e.parentElement;if(Fr===0&&Ur===0)n.innerHTML='<div class="text-gray-400 text-center pt-24">No asset data to display</div>';else{const r=(t=document.getElementById("assetDonut"))==null?void 0:t.getContext("2d");r&&new Chart(r,{type:"doughnut",data:{labels:["Public Assets","Inventory"],datasets:[{data:[Fr,Ur],backgroundColor:["#8b5cf6","#38bdf8"],borderWidth:2,borderColor:"#fff"}]},options:{plugins:{legend:{position:"bottom"}},maintainAspectRatio:!1}})}}function Zg(n){const e=[{key:"factory",label:"Factory"},{key:"shipping",label:"Shipping"},{key:"port",label:"Port"},{key:"warehouse",label:"Warehouse"}],t=e.reduce((r,s)=>{var i;return r+(((i=n[s.key])==null?void 0:i.length)||0)},0);if(t===0){document.getElementById("milestone-progress").innerHTML='<div class="text-gray-400 text-center">No assets in transit.</div>';return}document.getElementById("milestone-progress").innerHTML=`
    <div class="flex items-center justify-between mb-2">
      ${e.map(r=>{var s;return`
        <div class="flex flex-col items-center flex-1">
          <div class="text-lg font-semibold">${((s=n[r.key])==null?void 0:s.length)||0}</div>
          <div class="text-xs text-gray-600">${r.label}</div>
        </div>
      `}).join("")}
    </div>
    <div class="flex w-full h-4 rounded bg-gray-200 overflow-hidden shadow">
      ${e.map((r,s)=>{var d;const i=((d=n[r.key])==null?void 0:d.length)||0,a=t?i/t*100:0;return`<div class="${["bg-purple-400","bg-blue-400","bg-yellow-400","bg-green-400"][s%4]}" style="width:${a}%;"></div>`}).join("")}
    </div>
  `}function ey(){return(window.inventory||[]).map(n=>n.chargerId)}function ty(n){const e=n.reduce((s,i)=>s+Number(i.originalValue),0),t=n.reduce((s,i)=>s+Number(i.currentValue),0),r=e-t;document.getElementById("depreciation-summary").innerHTML=`Total Depreciation This Year: <span class="text-purple-600">$${r.toLocaleString()}</span>`}window.addEventListener("DOMContentLoaded",()=>{const n=document.getElementById("moveToPortBtn");n&&(n.onclick=()=>{const e=ey();Hg(e,"Port")}),Jg(),Yg(),Zg(yu),ty(vu)});export{z as a,fe as l,Re as s};

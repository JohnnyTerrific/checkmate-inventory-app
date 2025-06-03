const Ru="modulepreload",Pu=function(n){return"/"+n},Vi={},gs=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(t.map(d=>{if(d=Pu(d),d in Vi)return;Vi[d]=!0;const p=d.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":Ru,p||(v.as="script"),v.crossOrigin="",v.href=d,h&&v.setAttribute("nonce",h),document.head.appendChild(v),p)return new Promise((A,S)=>{v.addEventListener("load",A),v.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return s.then(a=>{for(const c of a||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},ku=`
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
  <a href="/dashboard.html"
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
  <a href="/inventory.html"
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
  <a href="/products.html"
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
  <a href="/settings.html"
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
<a href="/audit.html"
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
    src="/img/CheckMate-app-logo-light.png"
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
`,Ka="cm_users",Qa="cm_session_user";function En(){return JSON.parse(localStorage.getItem(Ka))||[]}function Du(n){localStorage.setItem(Ka,JSON.stringify(n))}function Vu({username:n,password:e,role:t}){const r=En();if(r.some(s=>s.username===n))throw new Error("Username already exists");r.push({username:n,password:e,role:t}),Du(r)}function Xa(){localStorage.removeItem(Qa)}function Mt(){return JSON.parse(localStorage.getItem(Qa)||"null")}const Lu={SuperAdmin:{canAddUsers:!0,manageLocations:!0,manageContractors:!0,inventoryCrud:!0,viewDashboard:!0,viewIndex:!0,productsCrud:!0,settings:!0},CEO:{canAddUsers:!1,manageLocations:!1,manageContractors:!0,inventoryCrud:!0,viewDashboard:!0,viewIndex:!0,productsCrud:!1,settings:!0},COO:{canAddUsers:!1,manageLocations:!1,manageContractors:!0,inventoryCrud:!0,viewDashboard:!0,viewIndex:!0,productsCrud:!1,settings:!0},Agent:{canAddUsers:!1,manageLocations:!1,manageContractors:!1,inventoryCrud:!0,viewDashboard:!1,viewIndex:!1,productsCrud:!1,settings:!1}};function Nu(n){return Lu[n]||{}}function ys(n){const e=window.getCurrentUser?window.getCurrentUser():null;return e&&Nu(e.role)[n]}window.getCurrentUser=Mt;function Ot(){let n=document.getElementById("userManagementDialog");n||(n=document.createElement("dialog"),n.id="userManagementDialog",n.className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-auto border border-gray-200 dark:border-gray-800",document.body.appendChild(n));const e=En();n.innerHTML=`
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
`;const t=n.querySelector("#addPassword"),r=n.querySelector("#toggleAddPw");r&&(r.onclick=()=>{t.type=t.type==="password"?"text":"password"}),n.showModal(),n.querySelector("#addUserForm").onsubmit=function(s){s.preventDefault();const i=n.querySelector("#addUsername").value.trim(),a=n.querySelector("#addPassword").value,c=n.querySelector("#addRole").value;try{Vu({username:i,password:a,role:c}),Ot()}catch(h){n.querySelector("#userMgmtError").textContent=h.message}},n.querySelectorAll(".deleteUserBtn").forEach(s=>{s.onclick=function(){const i=s.dataset.user;if(confirm(`Delete user ${i}?`)){const a=En().filter(c=>c.username!==i);saveUsers(a),Ot()}}}),n.querySelectorAll(".editUserBtn").forEach(s=>{s.onclick=function(){const i=s.dataset.user,a=e.find(c=>c.username===i);a&&Ou(a)}}),n.querySelectorAll(".pwUserBtn").forEach(s=>{s.onclick=function(){const i=s.dataset.user,a=e.find(c=>c.username===i);a&&Bu(a)}}),n.querySelector("#closeUserMgmt").onclick=function(){n.close()}}function Mu(n){if(!ys("settings")){const e=document.getElementById("settingsTab");e&&(e.style.display="none")}if(!ys("viewDashboard")){const e=document.getElementById("dashboardTab");e&&(e.style.display="none")}if(!ys("viewIndex")){const e=document.getElementById("indexTab");e&&(e.style.display="none")}}function Ou(n){const e=document.createElement("dialog");e.className="rounded-xl p-6 shadow-2xl max-w-md w-full",e.innerHTML=`
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
  `,document.body.appendChild(e),e.showModal(),e.addEventListener("close",()=>e.remove()),e.querySelector("#cancelEditUser").onclick=()=>e.close(),e.querySelector("#editUserForm").onsubmit=function(t){t.preventDefault();const r=e.querySelector("#editUsername").value.trim(),s=e.querySelector("#editRole").value;if(!r){e.querySelector("#editUserError").textContent="Username required";return}const i=En();if(i.some(c=>c.username===r&&c.username!==n.username)){e.querySelector("#editUserError").textContent="Username already exists";return}const a=i.findIndex(c=>c.username===n.username);a!==-1&&(i[a].username=r,i[a].role=s,saveUsers(i),e.close(),Ot())}}function Bu(n){const e=document.createElement("dialog");e.className="rounded-xl p-6 shadow-2xl max-w-md w-full",e.innerHTML=`
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
  `,document.body.appendChild(e),e.showModal(),e.addEventListener("close",()=>e.remove()),e.querySelector("#cancelPw").onclick=()=>e.close();const t=e.querySelector("#newPassword");e.querySelector("#togglePw").onclick=()=>{t.type=t.type==="password"?"text":"password"},e.querySelector("#changePwForm").onsubmit=function(r){r.preventDefault();const s=t.value;if(!s){e.querySelector("#pwError").textContent="Password required";return}const i=En(),a=i.findIndex(c=>c.username===n.username);a!==-1&&(i[a].password=s,saveUsers(i),e.close(),Ot())}}function Fu(){const n=document.getElementById("currentUserInfo"),e=document.getElementById("logoutBtn"),t=document.getElementById("manageUsersBtn"),r=Mt();r&&n&&(n.textContent=`User: ${r.username} (${r.role})`),r&&e&&(e.onclick=function(){console.log("Logout clicked"),Xa(),window.location.replace("/login.html")}),r&&t&&r.role==="SuperAdmin"&&(t.classList.remove("hidden"),t.onclick=Ot)}function Uu(){const n=Mt();n&&n.role==="Agent"&&window.innerWidth<=768&&(["dashboardTab","indexTab","settingsTab"].forEach(e=>{const t=document.getElementById(e);t&&(t.style.display="none")}),(!document.body.dataset.page||document.body.dataset.page!=="inventory")&&(window.location.href="/inventory.html"))}function $u(){const n=Mt();if(!n){window.location.replace("/login.html");return}Mu(n.role),Uu()}async function qu(){const n=document.body;let e="";const t=n.querySelectorAll("section");t.length>0?e=t[0].outerHTML:e=Array.from(n.childNodes).filter(s=>s.nodeName!=="SCRIPT").map(s=>s.outerHTML||s.textContent).join(""),document.body.innerHTML=ku;const r=document.getElementById("main-content");if(!r){console.error("main-content not found in shell!");return}r.innerHTML=e}function ju(){const n=document.body.dataset.page;document.querySelectorAll(".nav-link").forEach(e=>{e.dataset.page===n?e.classList.add("bg-purple-100","dark:bg-purple-900","text-purple-700","dark:text-purple-300","font-bold"):e.classList.remove("bg-purple-100","dark:bg-purple-900","text-purple-700","dark:text-purple-300","font-bold")})}function zu(){const n=document.documentElement,e=document.getElementById("darkModeToggle"),t=document.getElementById("sunIcon"),r=document.getElementById("moonIcon");function s(){return localStorage.theme?localStorage.theme==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function i(a){if(!(!n||!t||!r))if(a){n.classList.add("dark"),t.classList.add("hidden"),r.classList.remove("hidden"),localStorage.theme="dark";const c=document.getElementById("mainLogoImg");c&&(c.src="/img/CheckMate-app-logo-dark.png")}else{n.classList.remove("dark"),t.classList.remove("hidden"),r.classList.add("hidden"),localStorage.theme="light";const c=document.getElementById("mainLogoImg");c&&(c.src="/img/CheckMate-app-logo-light.png")}}i(s()),e.addEventListener("click",()=>{const a=n.classList.contains("dark");i(!a)})}function Hu(){const n=document.getElementById("sidebar"),e=document.getElementById("sidebarToggle"),t=document.getElementById("sidebarOverlay"),r=window.matchMedia("(min-width: 768px)");let s=!1;function i(d){s=d,s?(n.classList.add("collapsed"),n.classList.remove("w-64"),n.classList.add("w-16"),document.querySelectorAll(".sidebar-label").forEach(p=>p.classList.add("hidden"))):(n.classList.remove("collapsed"),n.classList.remove("w-16"),n.classList.add("w-64"),document.querySelectorAll(".sidebar-label").forEach(p=>p.classList.remove("hidden"))),localStorage.sidebarCollapsed=s?"1":"0"}function a(){n.classList.remove("-translate-x-full"),t.classList.remove("hidden"),document.body.classList.add("overflow-hidden")}function c(){n.classList.add("-translate-x-full"),t.classList.add("hidden"),document.body.classList.remove("overflow-hidden")}function h(){r.matches?(n.classList.remove("-translate-x-full"),t.classList.add("hidden"),document.body.classList.remove("overflow-hidden"),i(localStorage.sidebarCollapsed==="1")):(c(),i(!1))}e.addEventListener("click",d=>{d.stopPropagation(),r.matches?i(!s):n.classList.contains("-translate-x-full")?a():c()}),t.addEventListener("click",c),r.addEventListener("change",h),h()}document.addEventListener("DOMContentLoaded",async()=>{if($u(),!Mt()){window.location.replace("/login.html");return}await qu(),Fu();const n=document.getElementById("currentUserInfo"),e=document.getElementById("logoutBtn"),t=document.getElementById("manageUsersBtn"),r=Mt();r&&n&&e&&(n.textContent=`User: ${r.username} (${r.role})`,e.onclick=function(){console.log("Logout clicked"),Xa(),window.location.replace("/login.html")}),r&&t&&r.role==="SuperAdmin"&&(t.classList.remove("hidden"),t.onclick=Ot),zu(),ju(),Hu(),document.querySelectorAll(".nav-link").forEach(p=>{p.addEventListener("click",function(m){const v=this.dataset.page,A=document.body.dataset.page;if(v===A){m.preventDefault();return}document.body.classList.add("fade-out"),setTimeout(()=>window.location.href=this.href,200)})});const s=document.getElementById("alertBell"),i=document.getElementById("alertDropdown");if(s&&i){let p=function(m){!i.contains(m.target)&&m.target!==s&&i.classList.add("hidden")};s.onclick=function(m){m.stopPropagation(),i.classList.toggle("hidden"),i.classList.contains("hidden")||document.addEventListener("click",p,{once:!0})}}window.updateAlertBell=function(){const p=JSON.parse(localStorage.getItem("cm_shipments_v1")||"[]"),m=document.getElementById("shipmentList"),v=document.getElementById("alertCount");if(!m)return;const A=new Date,S=p.filter(C=>new Date(C.eta)>=A&&!C.arrived);if(p.filter(C=>new Date(C.eta)<A||C.arrived),!S.length)m.innerHTML='<div class="text-gray-400 text-center py-4">No pending shipments</div>',v&&v.classList.add("hidden");else{const C=S.slice(-5).reverse();m.innerHTML=C.map(P=>`
          <div class="border-b border-gray-200 dark:border-gray-700 py-2 px-1 last:border-0">
            <div class="font-semibold">${P.shipmentId||"[No ID]"}</div>
            <div class="text-xs text-gray-500">Vendor: ${P.vendor||"-"}</div>
            <div class="text-xs text-gray-500">Products: ${Array.isArray(P.products)?P.products.map(O=>`${O.model} ×${O.qty}`).join(", "):""}</div>
            <div class="text-xs text-gray-400">${new Date(P.departure).toLocaleDateString()} → ${new Date(P.eta).toLocaleDateString()}</div>
          </div>
        `).join(""),v&&(v.textContent=S.length,v.classList.remove("hidden"))}},typeof window.updateAlertBell=="function"&&updateAlertBell();const a=document.getElementById("globalSearchBtn"),c=document.getElementById("globalSearchDialog");a&&c&&(a.onclick=function(){openGlobalSearchDialog()}),window.openGlobalSearchDialog=function(){c.innerHTML=`
    <form method="dialog" class="flex flex-col gap-4 w-[30rem] max-w-full">
      <h3 class="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Global Search</h3>
      <input id="globalSearchInput" type="text" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800"
        placeholder="Type anything... (product, serial, shipment, vendor)" autofocus>
      <div id="globalSearchResults" class="max-h-60 overflow-y-auto mt-2"></div>
      <div class="flex justify-end gap-2 mt-2">
        <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Close</button>
      </div>
    </form>
  `,c.showModal(),c.querySelector('button[value="cancel"]').onclick=m=>{m.preventDefault(),c.close()};const p=c.querySelector("#globalSearchInput");p.oninput=function(){performGlobalSearch(p.value.trim())},setTimeout(()=>{p.focus()},50),performGlobalSearch("")},window.performGlobalSearch=function(p){const m=document.getElementById("globalSearchResults");if(!m)return;const v=JSON.parse(localStorage.getItem("cm_shipments_v1")||"[]"),A=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]"),S=JSON.parse(localStorage.getItem("cm_products_v1")||"[]");if(!p){m.innerHTML='<div class="text-gray-400 text-center py-6">Start typing to search...</div>';return}const C=p.toLowerCase(),P=v.filter(V=>(V.shipmentId||"").toLowerCase().includes(C)||(V.vendor||"").toLowerCase().includes(C)||(V.incoterm||"").toLowerCase().includes(C)||Array.isArray(V.products)&&V.products.some(K=>(K.model||"").toLowerCase().includes(C))),O=A.filter(V=>(V.chargerId||"").toLowerCase().includes(C)||(V.chargerSerial||"").toLowerCase().includes(C)||(V.simNumber||"").toLowerCase().includes(C)||(V.product||"").toLowerCase().includes(C)||(V.model||"").toLowerCase().includes(C)||(V.notes||"").toLowerCase().includes(C)),F=S.filter(V=>(V.name||"").toLowerCase().includes(C)||(V.hsCode||"").toLowerCase().includes(C)||(V.vendor||"").toLowerCase().includes(C));if(P.length===0&&O.length===0&&F.length===0){m.innerHTML='<div class="text-gray-400 text-center py-6">No results found.</div>';return}m.innerHTML=`
  <div>
    <div class="font-bold text-purple-700 dark:text-purple-300 mt-2">Inventory (${O.length})</div>
    ${O.length?O.map(V=>`
      <div class="border-b border-gray-200 dark:border-gray-700 py-1 flex flex-col gap-1">
        <div><b>ID:</b> ${V.chargerId}</div>
        <div><b>Serial:</b> ${V.chargerSerial||"-"}</div>
        <div><b>SIM:</b> ${V.simNumber||"-"}</div>
        <div><b>Product:</b> ${V.product||"-"}</div>
<div class="flex gap-2 mt-1">
  <button type="button" class="move-btn px-2 py-1 text-xs rounded bg-blue-600 text-white"
    data-chargerid="${V.chargerId}" data-serial="${V.chargerSerial}">Move</button>
  <button type="button" class="edit-inventory-btn px-2 py-1 text-xs rounded bg-green-600 text-white"
    data-chargerid="${V.chargerId}" data-serial="${V.chargerSerial}">Edit</button>
  <button type="button" class="view-inventory-btn px-2 py-1 text-xs rounded bg-purple-600 text-white"
    data-chargerid="${V.chargerId}">View</button>
</div>
      </div>
    `).join(""):'<div class="text-gray-400 text-sm">None</div>'}
  </div>
`,m.querySelectorAll(".move-btn").forEach(V=>{V.onclick=function(){const K=V.dataset.chargerid,ce=V.dataset.serial,b=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]").find(g=>g.chargerId===K&&g.chargerSerial===ce);b?(document.body.dataset.page==="inventory"?window.openMoveDialog(b):(sessionStorage.setItem("pendingInventoryAction",JSON.stringify({action:"move",unit:b})),window.location.href="/inventory.html"),document.getElementById("globalSearchDialog").close()):W("Inventory unit not found","red")}}),m.querySelectorAll(".edit-inventory-btn").forEach(V=>{V.onclick=function(){const K=V.dataset.chargerid,ce=V.dataset.serial,b=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]").find(g=>g.chargerId===K&&g.chargerSerial===ce);b?(document.body.dataset.page==="inventory"?window.openEditDialog(b):(sessionStorage.setItem("pendingInventoryAction",JSON.stringify({action:"edit",unit:b})),window.location.href="/inventory.html"),document.getElementById("globalSearchDialog").close()):W("Inventory unit not found","red")}}),m.querySelectorAll(".view-inventory-btn").forEach(V=>{V.onclick=function(){const K=V.dataset.chargerid,Y=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]").find(b=>b.chargerId===K);Y?(document.body.dataset.page==="inventory"?window.openDetailsDialog(Y):(sessionStorage.setItem("pendingInventoryAction",JSON.stringify({action:"view",unit:Y})),window.location.href="/inventory.html"),document.getElementById("globalSearchDialog").close()):W("Inventory unit not found","red")}})};const h=document.body.dataset.page;h==="settings"&&gs(()=>Promise.resolve().then(()=>ig),void 0).then(p=>p.initSettings()),h==="products"&&gs(()=>import("./products-C0DMv6ua.js"),[]).then(p=>p.initProducts());const d=document.getElementById("addShipmentBtn");d&&gs(()=>import("./shipments-NqBIIjwH.js"),[]).then(p=>{d.onclick=()=>p.openShipmentDialog()}).catch(p=>{console.error("Failed loading shipments module",p),d.onclick=()=>W("Shipment module failed to load","red")}),document.body.style.visibility="visible"});function W(n,e="green"){const t=document.getElementById("toast");t.textContent=n,t.className=`fixed bottom-6 right-6 z-50 min-w-[200px] max-w-xs bg-${e}-600 text-white font-semibold px-4 py-2 rounded shadow-lg opacity-100 pointer-events-auto transition-opacity duration-300`,setTimeout(()=>{t.classList.remove("opacity-100","pointer-events-auto"),t.classList.add("opacity-0","pointer-events-none")},2e3)}window.showToast=W;window.showLegend=function(n,e){const t=document.getElementById("hoverLegend");t&&(t.textContent=n,t.style.display="block",e&&(t.style.left=e.clientX+16+"px",t.style.top=e.clientY+"px"))};window.hideLegend=function(){const n=document.getElementById("hoverLegend");n&&(n.style.display="none")};if(window.innerWidth<=640){let n=null;document.body.addEventListener("touchstart",function(e){e.touches[0].clientX<32?n=e.touches[0].clientX:n=null},{passive:!0}),document.body.addEventListener("touchend",function(e){n!==null&&e.changedTouches[0].clientX-n>80&&window.history.back(),n=null},{passive:!0})}const Gu=()=>{};var Li={};/**
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
 */const Ja=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Wu=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],h=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ya={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=i>>2,m=(i&3)<<4|c>>4;let v=(c&15)<<2|d>>6,A=d&63;h||(A=64,a||(v=64)),r.push(t[p],t[m],t[v],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ja(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Wu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const m=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||m==null)throw new Ku;const v=i<<2|c>>4;if(r.push(v),d!==64){const A=c<<4&240|d>>2;if(r.push(A),m!==64){const S=d<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ku extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qu=function(n){const e=Ja(n);return Ya.encodeByteArray(e,!0)},pr=function(n){return Qu(n).replace(/\./g,"")},Xu=function(n){try{return Ya.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ju(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yu=()=>Ju().__FIREBASE_DEFAULTS__,Zu=()=>{if(typeof process>"u"||typeof Li>"u")return;const n=Li.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},eh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xu(n[1]);return e&&JSON.parse(e)},Qs=()=>{try{return Gu()||Yu()||Zu()||eh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},th=n=>{var e,t;return(t=(e=Qs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nh=n=>{const e=th(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Za=()=>{var n;return(n=Qs())===null||n===void 0?void 0:n.config};/**
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
 */class rh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Xs(n){return n.endsWith(".cloudworkstations.dev")}async function sh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function oh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pr(JSON.stringify(t)),pr(JSON.stringify(a)),""].join(".")}const yn={};function ih(){const n={prod:[],emulator:[]};for(const e of Object.keys(yn))yn[e]?n.emulator.push(e):n.prod.push(e);return n}function ah(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ni=!1;function lh(n,e){if(typeof window>"u"||typeof document>"u"||!Xs(window.location.host)||yn[n]===e||yn[n]||Ni)return;yn[n]=e;function t(v){return`__firebase__banner__${v}`}const r="__firebase__banner",i=ih().prod.length>0;function a(){const v=document.getElementById(r);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,A){v.setAttribute("width","24"),v.setAttribute("id",A),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Ni=!0,a()},v}function p(v,A){v.setAttribute("id",A),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function m(){const v=ah(r),A=t("text"),S=document.getElementById(A)||document.createElement("span"),C=t("learnmore"),P=document.getElementById(C)||document.createElement("a"),O=t("preprendIcon"),F=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const V=v.element;c(V),p(P,C);const K=d();h(F,O),V.append(F,S,P,K),document.body.appendChild(V)}i?(S.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
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
 */function ch(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uh(){var n;const e=(n=Qs())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hh(){return!uh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dh(){try{return typeof indexedDB=="object"}catch{return!1}}function fh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const ph="FirebaseError";class Ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ph,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?mh(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Ht(s,c,r)}}function mh(n,e){return n.replace(gh,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gh=/\{\$([^}]+)}/g;function mr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Mi(i)&&Mi(a)){if(!mr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Mi(n){return n!==null&&typeof n=="object"}/**
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
 */function gr(n){return n&&n._delegate?n._delegate:n}class In{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mt="[DEFAULT]";/**
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
 */class yh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_h(e))try{this.getOrInitializeService({instanceIdentifier:mt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mt){return this.instances.has(e)}getOptions(e=mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:vh(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mt){return this.component?this.component.multipleInstances?e:mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vh(n){return n===mt?void 0:n}function _h(n){return n.instantiationMode==="EAGER"}/**
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
 */class wh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const bh={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Eh=H.INFO,Ih={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Th=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Ih[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tl{constructor(e){this.name=e,this._logLevel=Eh,this._logHandler=Th,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const Sh=(n,e)=>e.some(t=>n instanceof t);let Oi,Bi;function Ah(){return Oi||(Oi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xh(){return Bi||(Bi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nl=new WeakMap,Cs=new WeakMap,rl=new WeakMap,vs=new WeakMap,Js=new WeakMap;function Ch(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(tt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&nl.set(t,n)}).catch(()=>{}),Js.set(e,n),e}function Rh(n){if(Cs.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Cs.set(n,e)}let Rs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ph(n){Rs=n(Rs)}function kh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(_s(this),e,...t);return rl.set(r,e.sort?e.sort():[e]),tt(r)}:xh().includes(n)?function(...e){return n.apply(_s(this),e),tt(nl.get(this))}:function(...e){return tt(n.apply(_s(this),e))}}function Dh(n){return typeof n=="function"?kh(n):(n instanceof IDBTransaction&&Rh(n),Sh(n,Ah())?new Proxy(n,Rs):n)}function tt(n){if(n instanceof IDBRequest)return Ch(n);if(vs.has(n))return vs.get(n);const e=Dh(n);return e!==n&&(vs.set(n,e),Js.set(e,n)),e}const _s=n=>Js.get(n);function Vh(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=tt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(tt(a.result),h.oldVersion,h.newVersion,tt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),c.then(h=>{i&&h.addEventListener("close",()=>i()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Lh=["get","getKey","getAll","getAllKeys","count"],Nh=["put","add","delete","clear"],ws=new Map;function Fi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ws.get(e))return ws.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Nh.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Lh.includes(t)))return;const i=async function(a,...c){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&h.done]))[0]};return ws.set(e,i),i}Ph(n=>({...n,get:(e,t,r)=>Fi(e,t)||n.get(e,t,r),has:(e,t)=>!!Fi(e,t)||n.has(e,t)}));/**
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
 */class Mh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Oh(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Oh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ps="@firebase/app",Ui="0.13.0";/**
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
 */const We=new tl("@firebase/app"),Bh="@firebase/app-compat",Fh="@firebase/analytics-compat",Uh="@firebase/analytics",$h="@firebase/app-check-compat",qh="@firebase/app-check",jh="@firebase/auth",zh="@firebase/auth-compat",Hh="@firebase/database",Gh="@firebase/data-connect",Wh="@firebase/database-compat",Kh="@firebase/functions",Qh="@firebase/functions-compat",Xh="@firebase/installations",Jh="@firebase/installations-compat",Yh="@firebase/messaging",Zh="@firebase/messaging-compat",ed="@firebase/performance",td="@firebase/performance-compat",nd="@firebase/remote-config",rd="@firebase/remote-config-compat",sd="@firebase/storage",od="@firebase/storage-compat",id="@firebase/firestore",ad="@firebase/ai",ld="@firebase/firestore-compat",cd="firebase",ud="11.8.0";/**
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
 */const ks="[DEFAULT]",hd={[Ps]:"fire-core",[Bh]:"fire-core-compat",[Uh]:"fire-analytics",[Fh]:"fire-analytics-compat",[qh]:"fire-app-check",[$h]:"fire-app-check-compat",[jh]:"fire-auth",[zh]:"fire-auth-compat",[Hh]:"fire-rtdb",[Gh]:"fire-data-connect",[Wh]:"fire-rtdb-compat",[Kh]:"fire-fn",[Qh]:"fire-fn-compat",[Xh]:"fire-iid",[Jh]:"fire-iid-compat",[Yh]:"fire-fcm",[Zh]:"fire-fcm-compat",[ed]:"fire-perf",[td]:"fire-perf-compat",[nd]:"fire-rc",[rd]:"fire-rc-compat",[sd]:"fire-gcs",[od]:"fire-gcs-compat",[id]:"fire-fst",[ld]:"fire-fst-compat",[ad]:"fire-vertex","fire-js":"fire-js",[cd]:"fire-js-all"};/**
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
 */const yr=new Map,dd=new Map,Ds=new Map;function $i(n,e){try{n.container.addComponent(e)}catch(t){We.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vr(n){const e=n.name;if(Ds.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;Ds.set(e,n);for(const t of yr.values())$i(t,n);for(const t of dd.values())$i(t,n);return!0}function fd(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pd(n){return n==null?!1:n.settings!==void 0}/**
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
 */const md={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nt=new el("app","Firebase",md);/**
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
 */class gd{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new In("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}/**
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
 */const yd=ud;function sl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ks,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw nt.create("bad-app-name",{appName:String(s)});if(t||(t=Za()),!t)throw nt.create("no-options");const i=yr.get(s);if(i){if(mr(t,i.options)&&mr(r,i.config))return i;throw nt.create("duplicate-app",{appName:s})}const a=new wh(s);for(const h of Ds.values())a.addComponent(h);const c=new gd(t,r,a);return yr.set(s,c),c}function vd(n=ks){const e=yr.get(n);if(!e&&n===ks&&Za())return sl();if(!e)throw nt.create("no-app",{appName:n});return e}function Lt(n,e,t){var r;let s=(r=hd[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(c.join(" "));return}vr(new In(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _d="firebase-heartbeat-database",wd=1,Tn="firebase-heartbeat-store";let bs=null;function ol(){return bs||(bs=Vh(_d,wd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tn)}catch(t){console.warn(t)}}}}).catch(n=>{throw nt.create("idb-open",{originalErrorMessage:n.message})})),bs}async function bd(n){try{const t=(await ol()).transaction(Tn),r=await t.objectStore(Tn).get(il(n));return await t.done,r}catch(e){if(e instanceof Ht)We.warn(e.message);else{const t=nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(t.message)}}}async function qi(n,e){try{const r=(await ol()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(e,il(n)),await r.done}catch(t){if(t instanceof Ht)We.warn(t.message);else{const r=nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});We.warn(r.message)}}}function il(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ed=1024,Id=30;class Td{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ad(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ji();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Id){const a=xd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){We.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ji(),{heartbeatsToSend:r,unsentEntries:s}=Sd(this._heartbeatsCache.heartbeats),i=pr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return We.warn(t),""}}}function ji(){return new Date().toISOString().substring(0,10)}function Sd(n,e=Ed){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zi(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zi(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ad{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dh()?fh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zi(n){return pr(JSON.stringify({version:2,heartbeats:n})).length}function xd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Cd(n){vr(new In("platform-logger",e=>new Mh(e),"PRIVATE")),vr(new In("heartbeat",e=>new Td(e),"PRIVATE")),Lt(Ps,Ui,n),Lt(Ps,Ui,"esm2017"),Lt("fire-js","")}Cd("");var Rd="firebase",Pd="11.8.1";/**
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
 */Lt(Rd,Pd,"app");var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rt,al;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function _(){}_.prototype=g.prototype,b.D=g.prototype,b.prototype=new _,b.prototype.constructor=b,b.C=function(w,E,T){for(var y=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)y[$e-2]=arguments[$e];return g.prototype[E].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,g,_){_||(_=0);var w=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)w[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;16>E;++E)w[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=b.g[0],_=b.g[1],E=b.g[2];var T=b.g[3],y=g+(T^_&(E^T))+w[0]+3614090360&4294967295;g=_+(y<<7&4294967295|y>>>25),y=T+(E^g&(_^E))+w[1]+3905402710&4294967295,T=g+(y<<12&4294967295|y>>>20),y=E+(_^T&(g^_))+w[2]+606105819&4294967295,E=T+(y<<17&4294967295|y>>>15),y=_+(g^E&(T^g))+w[3]+3250441966&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(T^_&(E^T))+w[4]+4118548399&4294967295,g=_+(y<<7&4294967295|y>>>25),y=T+(E^g&(_^E))+w[5]+1200080426&4294967295,T=g+(y<<12&4294967295|y>>>20),y=E+(_^T&(g^_))+w[6]+2821735955&4294967295,E=T+(y<<17&4294967295|y>>>15),y=_+(g^E&(T^g))+w[7]+4249261313&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(T^_&(E^T))+w[8]+1770035416&4294967295,g=_+(y<<7&4294967295|y>>>25),y=T+(E^g&(_^E))+w[9]+2336552879&4294967295,T=g+(y<<12&4294967295|y>>>20),y=E+(_^T&(g^_))+w[10]+4294925233&4294967295,E=T+(y<<17&4294967295|y>>>15),y=_+(g^E&(T^g))+w[11]+2304563134&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(T^_&(E^T))+w[12]+1804603682&4294967295,g=_+(y<<7&4294967295|y>>>25),y=T+(E^g&(_^E))+w[13]+4254626195&4294967295,T=g+(y<<12&4294967295|y>>>20),y=E+(_^T&(g^_))+w[14]+2792965006&4294967295,E=T+(y<<17&4294967295|y>>>15),y=_+(g^E&(T^g))+w[15]+1236535329&4294967295,_=E+(y<<22&4294967295|y>>>10),y=g+(E^T&(_^E))+w[1]+4129170786&4294967295,g=_+(y<<5&4294967295|y>>>27),y=T+(_^E&(g^_))+w[6]+3225465664&4294967295,T=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(T^g))+w[11]+643717713&4294967295,E=T+(y<<14&4294967295|y>>>18),y=_+(T^g&(E^T))+w[0]+3921069994&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^T&(_^E))+w[5]+3593408605&4294967295,g=_+(y<<5&4294967295|y>>>27),y=T+(_^E&(g^_))+w[10]+38016083&4294967295,T=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(T^g))+w[15]+3634488961&4294967295,E=T+(y<<14&4294967295|y>>>18),y=_+(T^g&(E^T))+w[4]+3889429448&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^T&(_^E))+w[9]+568446438&4294967295,g=_+(y<<5&4294967295|y>>>27),y=T+(_^E&(g^_))+w[14]+3275163606&4294967295,T=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(T^g))+w[3]+4107603335&4294967295,E=T+(y<<14&4294967295|y>>>18),y=_+(T^g&(E^T))+w[8]+1163531501&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(E^T&(_^E))+w[13]+2850285829&4294967295,g=_+(y<<5&4294967295|y>>>27),y=T+(_^E&(g^_))+w[2]+4243563512&4294967295,T=g+(y<<9&4294967295|y>>>23),y=E+(g^_&(T^g))+w[7]+1735328473&4294967295,E=T+(y<<14&4294967295|y>>>18),y=_+(T^g&(E^T))+w[12]+2368359562&4294967295,_=E+(y<<20&4294967295|y>>>12),y=g+(_^E^T)+w[5]+4294588738&4294967295,g=_+(y<<4&4294967295|y>>>28),y=T+(g^_^E)+w[8]+2272392833&4294967295,T=g+(y<<11&4294967295|y>>>21),y=E+(T^g^_)+w[11]+1839030562&4294967295,E=T+(y<<16&4294967295|y>>>16),y=_+(E^T^g)+w[14]+4259657740&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^T)+w[1]+2763975236&4294967295,g=_+(y<<4&4294967295|y>>>28),y=T+(g^_^E)+w[4]+1272893353&4294967295,T=g+(y<<11&4294967295|y>>>21),y=E+(T^g^_)+w[7]+4139469664&4294967295,E=T+(y<<16&4294967295|y>>>16),y=_+(E^T^g)+w[10]+3200236656&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^T)+w[13]+681279174&4294967295,g=_+(y<<4&4294967295|y>>>28),y=T+(g^_^E)+w[0]+3936430074&4294967295,T=g+(y<<11&4294967295|y>>>21),y=E+(T^g^_)+w[3]+3572445317&4294967295,E=T+(y<<16&4294967295|y>>>16),y=_+(E^T^g)+w[6]+76029189&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(_^E^T)+w[9]+3654602809&4294967295,g=_+(y<<4&4294967295|y>>>28),y=T+(g^_^E)+w[12]+3873151461&4294967295,T=g+(y<<11&4294967295|y>>>21),y=E+(T^g^_)+w[15]+530742520&4294967295,E=T+(y<<16&4294967295|y>>>16),y=_+(E^T^g)+w[2]+3299628645&4294967295,_=E+(y<<23&4294967295|y>>>9),y=g+(E^(_|~T))+w[0]+4096336452&4294967295,g=_+(y<<6&4294967295|y>>>26),y=T+(_^(g|~E))+w[7]+1126891415&4294967295,T=g+(y<<10&4294967295|y>>>22),y=E+(g^(T|~_))+w[14]+2878612391&4294967295,E=T+(y<<15&4294967295|y>>>17),y=_+(T^(E|~g))+w[5]+4237533241&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~T))+w[12]+1700485571&4294967295,g=_+(y<<6&4294967295|y>>>26),y=T+(_^(g|~E))+w[3]+2399980690&4294967295,T=g+(y<<10&4294967295|y>>>22),y=E+(g^(T|~_))+w[10]+4293915773&4294967295,E=T+(y<<15&4294967295|y>>>17),y=_+(T^(E|~g))+w[1]+2240044497&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~T))+w[8]+1873313359&4294967295,g=_+(y<<6&4294967295|y>>>26),y=T+(_^(g|~E))+w[15]+4264355552&4294967295,T=g+(y<<10&4294967295|y>>>22),y=E+(g^(T|~_))+w[6]+2734768916&4294967295,E=T+(y<<15&4294967295|y>>>17),y=_+(T^(E|~g))+w[13]+1309151649&4294967295,_=E+(y<<21&4294967295|y>>>11),y=g+(E^(_|~T))+w[4]+4149444226&4294967295,g=_+(y<<6&4294967295|y>>>26),y=T+(_^(g|~E))+w[11]+3174756917&4294967295,T=g+(y<<10&4294967295|y>>>22),y=E+(g^(T|~_))+w[2]+718787259&4294967295,E=T+(y<<15&4294967295|y>>>17),y=_+(T^(E|~g))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+T&4294967295}r.prototype.u=function(b,g){g===void 0&&(g=b.length);for(var _=g-this.blockSize,w=this.B,E=this.h,T=0;T<g;){if(E==0)for(;T<=_;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<g;)if(w[E++]=b.charCodeAt(T++),E==this.blockSize){s(this,w),E=0;break}}else for(;T<g;)if(w[E++]=b[T++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;var _=8*this.o;for(g=b.length-8;g<b.length;++g)b[g]=_&255,_/=256;for(this.u(b),b=Array(16),g=_=0;4>g;++g)for(var w=0;32>w;w+=8)b[_++]=this.g[g]>>>w&255;return b};function i(b,g){var _=c;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=g(b)}function a(b,g){this.h=g;for(var _=[],w=!0,E=b.length-1;0<=E;E--){var T=b[E]|0;w&&T==g||(_[E]=T,w=!1)}this.g=_}var c={};function h(b){return-128<=b&&128>b?i(b,function(g){return new a([g|0],0>g?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return P(d(-b));for(var g=[],_=1,w=0;b>=_;w++)g[w]=b/_|0,_*=4294967296;return new a(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return P(p(b.substring(1),g));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(g,8)),w=m,E=0;E<b.length;E+=8){var T=Math.min(8,b.length-E),y=parseInt(b.substring(E,E+T),g);8>T?(T=d(Math.pow(g,T)),w=w.j(T).add(d(y))):(w=w.j(_),w=w.add(d(y)))}return w}var m=h(0),v=h(1),A=h(16777216);n=a.prototype,n.m=function(){if(C(this))return-P(this).m();for(var b=0,g=1,_=0;_<this.g.length;_++){var w=this.i(_);b+=(0<=w?w:4294967296+w)*g,g*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(S(this))return"0";if(C(this))return"-"+P(this).toString(b);for(var g=d(Math.pow(b,6)),_=this,w="";;){var E=K(_,g).g;_=O(_,E.j(g));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(b);if(_=E,S(_))return T+w;for(;6>T.length;)T="0"+T;w=T+w}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function S(b){if(b.h!=0)return!1;for(var g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function C(b){return b.h==-1}n.l=function(b){return b=O(this,b),C(b)?-1:S(b)?0:1};function P(b){for(var g=b.g.length,_=[],w=0;w<g;w++)_[w]=~b.g[w];return new a(_,~b.h).add(v)}n.abs=function(){return C(this)?P(this):this},n.add=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],w=0,E=0;E<=g;E++){var T=w+(this.i(E)&65535)+(b.i(E)&65535),y=(T>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);w=y>>>16,T&=65535,y&=65535,_[E]=y<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function O(b,g){return b.add(P(g))}n.j=function(b){if(S(this)||S(b))return m;if(C(this))return C(b)?P(this).j(P(b)):P(P(this).j(b));if(C(b))return P(this.j(P(b)));if(0>this.l(A)&&0>b.l(A))return d(this.m()*b.m());for(var g=this.g.length+b.g.length,_=[],w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var E=0;E<b.g.length;E++){var T=this.i(w)>>>16,y=this.i(w)&65535,$e=b.i(E)>>>16,Xt=b.i(E)&65535;_[2*w+2*E]+=y*Xt,F(_,2*w+2*E),_[2*w+2*E+1]+=T*Xt,F(_,2*w+2*E+1),_[2*w+2*E+1]+=y*$e,F(_,2*w+2*E+1),_[2*w+2*E+2]+=T*$e,F(_,2*w+2*E+2)}for(w=0;w<g;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=g;w<2*g;w++)_[w]=0;return new a(_,0)};function F(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function V(b,g){this.g=b,this.h=g}function K(b,g){if(S(g))throw Error("division by zero");if(S(b))return new V(m,m);if(C(b))return g=K(P(b),g),new V(P(g.g),P(g.h));if(C(g))return g=K(b,P(g)),new V(P(g.g),g.h);if(30<b.g.length){if(C(b)||C(g))throw Error("slowDivide_ only works with positive integers.");for(var _=v,w=g;0>=w.l(b);)_=ce(_),w=ce(w);var E=Y(_,1),T=Y(w,1);for(w=Y(w,2),_=Y(_,2);!S(w);){var y=T.add(w);0>=y.l(b)&&(E=E.add(_),T=y),w=Y(w,1),_=Y(_,1)}return g=O(b,E.j(g)),new V(E,g)}for(E=m;0<=b.l(g);){for(_=Math.max(1,Math.floor(b.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),T=d(_),y=T.j(g);C(y)||0<y.l(b);)_-=w,T=d(_),y=T.j(g);S(T)&&(T=v),E=E.add(T),b=O(b,y)}return new V(E,b)}n.A=function(b){return K(this,b).h},n.and=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)&b.i(w);return new a(_,this.h&b.h)},n.or=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)|b.i(w);return new a(_,this.h|b.h)},n.xor=function(b){for(var g=Math.max(this.g.length,b.g.length),_=[],w=0;w<g;w++)_[w]=this.i(w)^b.i(w);return new a(_,this.h^b.h)};function ce(b){for(var g=b.g.length+1,_=[],w=0;w<g;w++)_[w]=b.i(w)<<1|b.i(w-1)>>>31;return new a(_,b.h)}function Y(b,g){var _=g>>5;g%=32;for(var w=b.g.length-_,E=[],T=0;T<w;T++)E[T]=0<g?b.i(T+_)>>>g|b.i(T+_+1)<<32-g:b.i(T+_);return new a(E,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,al=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,rt=a}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});var nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ll,pn,cl,lr,Vs,ul,hl,dl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,u){return o==Array.prototype||o==Object.prototype||(o[l]=u.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof nr=="object"&&nr];for(var l=0;l<o.length;++l){var u=o[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var u=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var I=o[f];if(!(I in u))break e;u=u[I]}o=o[o.length-1],f=u[o],l=l(f),l!=f&&l!=null&&e(u,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var u=0,f=!1,I={next:function(){if(!f&&u<o.length){var x=u++;return{value:l(x,o[x]),done:!1}}return f=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function h(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,u){return o.call.apply(o.bind,arguments)}function m(o,l,u){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,f),o.apply(l,I)}}return function(){return o.apply(l,arguments)}}function v(o,l,u){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,v.apply(null,arguments)}function A(o,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function S(o,l){function u(){}u.prototype=l.prototype,o.aa=l.prototype,o.prototype=new u,o.prototype.constructor=o,o.Qb=function(f,I,x){for(var D=Array(arguments.length-2),J=2;J<arguments.length;J++)D[J-2]=arguments[J];return l.prototype[I].apply(f,D)}}function C(o){const l=o.length;if(0<l){const u=Array(l);for(let f=0;f<l;f++)u[f]=o[f];return u}return[]}function P(o,l){for(let u=1;u<arguments.length;u++){const f=arguments[u];if(h(f)){const I=o.length||0,x=f.length||0;o.length=I+x;for(let D=0;D<x;D++)o[I+D]=f[D]}else o.push(f)}}class O{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function F(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var ce=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function Y(o,l,u){for(const f in o)l.call(u,o[f],f,o)}function b(o,l){for(const u in o)l.call(void 0,o[u],u,o)}function g(o){const l={};for(const u in o)l[u]=o[u];return l}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,l){let u,f;for(let I=1;I<arguments.length;I++){f=arguments[I];for(u in f)o[u]=f[u];for(let x=0;x<_.length;x++)u=_[x],Object.prototype.hasOwnProperty.call(f,u)&&(o[u]=f[u])}}function E(o){var l=1;o=o.split(":");const u=[];for(;0<l&&o.length;)u.push(o.shift()),l--;return o.length&&u.push(o.join(":")),u}function T(o){c.setTimeout(()=>{throw o},0)}function y(){var o=Gr;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class $e{constructor(){this.h=this.g=null}add(l,u){const f=Xt.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var Xt=new O(()=>new Kc,o=>o.reset());class Kc{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Jt,Yt=!1,Gr=new $e,Vo=()=>{const o=c.Promise.resolve(void 0);Jt=()=>{o.then(Qc)}};var Qc=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(u){T(u)}var l=Xt;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Yt=!1};function Xe(){this.s=this.s,this.C=this.C}Xe.prototype.s=!1,Xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Xc=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const u=()=>{};c.addEventListener("test",u,l),c.removeEventListener("test",u,l)}catch{}return o}();function Zt(o,l){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var u=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(ce){e:{try{K(l.nodeName);var I=!0;break e}catch{}I=!1}I||(l=null)}}else u=="mouseover"?l=o.fromElement:u=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Jc[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zt.aa.h.call(this)}}S(Zt,ge);var Jc={2:"touch",3:"pen",4:"mouse"};Zt.prototype.h=function(){Zt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var On="closure_listenable_"+(1e6*Math.random()|0),Yc=0;function Zc(o,l,u,f,I){this.listener=o,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=I,this.key=++Yc,this.da=this.fa=!1}function Bn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Fn(o){this.src=o,this.g={},this.h=0}Fn.prototype.add=function(o,l,u,f,I){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var D=Kr(o,l,f,I);return-1<D?(l=o[D],u||(l.fa=!1)):(l=new Zc(l,this.src,x,!!f,I),l.fa=u,o.push(l)),l};function Wr(o,l){var u=l.type;if(u in o.g){var f=o.g[u],I=Array.prototype.indexOf.call(f,l,void 0),x;(x=0<=I)&&Array.prototype.splice.call(f,I,1),x&&(Bn(l),o.g[u].length==0&&(delete o.g[u],o.h--))}}function Kr(o,l,u,f){for(var I=0;I<o.length;++I){var x=o[I];if(!x.da&&x.listener==l&&x.capture==!!u&&x.ha==f)return I}return-1}var Qr="closure_lm_"+(1e6*Math.random()|0),Xr={};function Lo(o,l,u,f,I){if(Array.isArray(l)){for(var x=0;x<l.length;x++)Lo(o,l[x],u,f,I);return null}return u=Oo(u),o&&o[On]?o.K(l,u,d(f)?!!f.capture:!1,I):eu(o,l,u,!1,f,I)}function eu(o,l,u,f,I,x){if(!l)throw Error("Invalid event type");var D=d(I)?!!I.capture:!!I,J=Yr(o);if(J||(o[Qr]=J=new Fn(o)),u=J.add(l,u,f,D,x),u.proxy)return u;if(f=tu(),u.proxy=f,f.src=o,f.listener=u,o.addEventListener)Xc||(I=D),I===void 0&&(I=!1),o.addEventListener(l.toString(),f,I);else if(o.attachEvent)o.attachEvent(Mo(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function tu(){function o(u){return l.call(o.src,o.listener,u)}const l=nu;return o}function No(o,l,u,f,I){if(Array.isArray(l))for(var x=0;x<l.length;x++)No(o,l[x],u,f,I);else f=d(f)?!!f.capture:!!f,u=Oo(u),o&&o[On]?(o=o.i,l=String(l).toString(),l in o.g&&(x=o.g[l],u=Kr(x,u,f,I),-1<u&&(Bn(x[u]),Array.prototype.splice.call(x,u,1),x.length==0&&(delete o.g[l],o.h--)))):o&&(o=Yr(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Kr(l,u,f,I)),(u=-1<o?l[o]:null)&&Jr(u))}function Jr(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[On])Wr(l.i,o);else{var u=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(u,f,o.capture):l.detachEvent?l.detachEvent(Mo(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Yr(l))?(Wr(u,o),u.h==0&&(u.src=null,l[Qr]=null)):Bn(o)}}}function Mo(o){return o in Xr?Xr[o]:Xr[o]="on"+o}function nu(o,l){if(o.da)o=!0;else{l=new Zt(l,this);var u=o.listener,f=o.ha||o.src;o.fa&&Jr(o),o=u.call(f,l)}return o}function Yr(o){return o=o[Qr],o instanceof Fn?o:null}var Zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oo(o){return typeof o=="function"?o:(o[Zr]||(o[Zr]=function(l){return o.handleEvent(l)}),o[Zr])}function ye(){Xe.call(this),this.i=new Fn(this),this.M=this,this.F=null}S(ye,Xe),ye.prototype[On]=!0,ye.prototype.removeEventListener=function(o,l,u,f){No(this,o,l,u,f)};function Ie(o,l){var u,f=o.F;if(f)for(u=[];f;f=f.F)u.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new ge(l,o);else if(l instanceof ge)l.target=l.target||o;else{var I=l;l=new ge(f,o),w(l,I)}if(I=!0,u)for(var x=u.length-1;0<=x;x--){var D=l.g=u[x];I=Un(D,f,!0,l)&&I}if(D=l.g=o,I=Un(D,f,!0,l)&&I,I=Un(D,f,!1,l)&&I,u)for(x=0;x<u.length;x++)D=l.g=u[x],I=Un(D,f,!1,l)&&I}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var u=o.g[l],f=0;f<u.length;f++)Bn(u[f]);delete o.g[l],o.h--}}this.F=null},ye.prototype.K=function(o,l,u,f){return this.i.add(String(o),l,!1,u,f)},ye.prototype.L=function(o,l,u,f){return this.i.add(String(o),l,!0,u,f)};function Un(o,l,u,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,x=0;x<l.length;++x){var D=l[x];if(D&&!D.da&&D.capture==u){var J=D.listener,he=D.ha||D.src;D.fa&&Wr(o.i,D),I=J.call(he,f)!==!1&&I}}return I&&!f.defaultPrevented}function Bo(o,l,u){if(typeof o=="function")u&&(o=v(o,u));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Fo(o){o.g=Bo(()=>{o.g=null,o.i&&(o.i=!1,Fo(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class ru extends Xe{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Fo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function en(o){Xe.call(this),this.h=o,this.g={}}S(en,Xe);var Uo=[];function $o(o){Y(o.g,function(l,u){this.g.hasOwnProperty(u)&&Jr(l)},o),o.g={}}en.prototype.N=function(){en.aa.N.call(this),$o(this)},en.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var es=c.JSON.stringify,su=c.JSON.parse,ou=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ts(){}ts.prototype.h=null;function qo(o){return o.h||(o.h=o.i())}function jo(){}var tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ns(){ge.call(this,"d")}S(ns,ge);function rs(){ge.call(this,"c")}S(rs,ge);var ht={},zo=null;function $n(){return zo=zo||new ye}ht.La="serverreachability";function Ho(o){ge.call(this,ht.La,o)}S(Ho,ge);function nn(o){const l=$n();Ie(l,new Ho(l))}ht.STAT_EVENT="statevent";function Go(o,l){ge.call(this,ht.STAT_EVENT,o),this.stat=l}S(Go,ge);function Te(o){const l=$n();Ie(l,new Go(l,o))}ht.Ma="timingevent";function Wo(o,l){ge.call(this,ht.Ma,o),this.size=l}S(Wo,ge);function rn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function sn(){this.g=!0}sn.prototype.xa=function(){this.g=!1};function iu(o,l,u,f,I,x){o.info(function(){if(o.g)if(x)for(var D="",J=x.split("&"),he=0;he<J.length;he++){var G=J[he].split("=");if(1<G.length){var ve=G[0];G=G[1];var _e=ve.split("_");D=2<=_e.length&&_e[1]=="type"?D+(ve+"="+G+"&"):D+(ve+"=redacted&")}}else D=null;else D=x;return"XMLHTTP REQ ("+f+") [attempt "+I+"]: "+l+`
`+u+`
`+D})}function au(o,l,u,f,I,x,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+I+"]: "+l+`
`+u+`
`+x+" "+D})}function St(o,l,u,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+cu(o,u)+(f?" "+f:"")})}function lu(o,l){o.info(function(){return"TIMEOUT: "+l})}sn.prototype.info=function(){};function cu(o,l){if(!o.g)return l;if(!l)return null;try{var u=JSON.parse(l);if(u){for(o=0;o<u.length;o++)if(Array.isArray(u[o])){var f=u[o];if(!(2>f.length)){var I=f[1];if(Array.isArray(I)&&!(1>I.length)){var x=I[0];if(x!="noop"&&x!="stop"&&x!="close")for(var D=1;D<I.length;D++)I[D]=""}}}}return es(u)}catch{return l}}var qn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ko={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ss;function jn(){}S(jn,ts),jn.prototype.g=function(){return new XMLHttpRequest},jn.prototype.i=function(){return{}},ss=new jn;function Je(o,l,u,f){this.j=o,this.i=l,this.l=u,this.R=f||1,this.U=new en(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qo}function Qo(){this.i=null,this.g="",this.h=!1}var Xo={},os={};function is(o,l,u){o.L=1,o.v=Wn(qe(l)),o.m=u,o.P=!0,Jo(o,null)}function Jo(o,l){o.F=Date.now(),zn(o),o.A=qe(o.v);var u=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),hi(u.i,"t",f),o.C=0,u=o.j.J,o.h=new Qo,o.g=Ri(o.j,u?l:null,!o.m),0<o.O&&(o.M=new ru(v(o.Y,o,o.g),o.O)),l=o.U,u=o.g,f=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(Uo[0]=I.toString()),I=Uo);for(var x=0;x<I.length;x++){var D=Lo(u,I[x],f||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),nn(),iu(o.i,o.u,o.A,o.l,o.R,o.m)}Je.prototype.ca=function(o){o=o.target;const l=this.M;l&&je(o)==3?l.j():this.Y(o)},Je.prototype.Y=function(o){try{if(o==this.g)e:{const _e=je(this.g);var l=this.g.Ba();const Ct=this.g.Z();if(!(3>_e)&&(_e!=3||this.g&&(this.h.h||this.g.oa()||vi(this.g)))){this.J||_e!=4||l==7||(l==8||0>=Ct?nn(3):nn(2)),as(this);var u=this.g.Z();this.X=u;t:if(Yo(this)){var f=vi(this.g);o="";var I=f.length,x=je(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dt(this),on(this);var D="";break t}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(x&&l==I-1)});f.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=u==200,au(this.i,this.u,this.A,this.l,this.R,_e,u),this.o){if(this.T&&!this.K){t:{if(this.g){var J,he=this.g;if((J=he.g?he.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(J)){var G=J;break t}}G=null}if(u=G)St(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ls(this,u);else{this.o=!1,this.s=3,Te(12),dt(this),on(this);break e}}if(this.P){u=!0;let ke;for(;!this.J&&this.C<D.length;)if(ke=uu(this,D),ke==os){_e==4&&(this.s=4,Te(14),u=!1),St(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==Xo){this.s=4,Te(15),St(this.i,this.l,D,"[Invalid Chunk]"),u=!1;break}else St(this.i,this.l,ke,null),ls(this,ke);if(Yo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_e!=4||D.length!=0||this.h.h||(this.s=1,Te(16),u=!1),this.o=this.o&&u,!u)St(this.i,this.l,D,"[Invalid Chunked Response]"),dt(this),on(this);else if(0<D.length&&!this.W){this.W=!0;var ve=this.j;ve.g==this&&ve.ba&&!ve.M&&(ve.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),ps(ve),ve.M=!0,Te(11))}}else St(this.i,this.l,D,null),ls(this,D);_e==4&&dt(this),this.o&&!this.J&&(_e==4?Si(this.j,this):(this.o=!1,zn(this)))}else xu(this.g),u==400&&0<D.indexOf("Unknown SID")?(this.s=3,Te(12)):(this.s=0,Te(13)),dt(this),on(this)}}}catch{}finally{}};function Yo(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function uu(o,l){var u=o.C,f=l.indexOf(`
`,u);return f==-1?os:(u=Number(l.substring(u,f)),isNaN(u)?Xo:(f+=1,f+u>l.length?os:(l=l.slice(f,f+u),o.C=f+u,l)))}Je.prototype.cancel=function(){this.J=!0,dt(this)};function zn(o){o.S=Date.now()+o.I,Zo(o,o.I)}function Zo(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=rn(v(o.ba,o),l)}function as(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Je.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(lu(this.i,this.A),this.L!=2&&(nn(),Te(17)),dt(this),this.s=2,on(this)):Zo(this,this.S-o)};function on(o){o.j.G==0||o.J||Si(o.j,o)}function dt(o){as(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,$o(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function ls(o,l){try{var u=o.j;if(u.G!=0&&(u.g==o||cs(u.h,o))){if(!o.K&&cs(u.h,o)&&u.G==3){try{var f=u.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var I=f;if(I[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<o.F)Zn(u),Jn(u);else break e;fs(u),Te(18)}}else u.za=I[1],0<u.za-u.T&&37500>I[2]&&u.F&&u.v==0&&!u.C&&(u.C=rn(v(u.Za,u),6e3));if(1>=ni(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else pt(u,11)}else if((o.K||u.g==o)&&Zn(u),!F(l))for(I=u.Da.g.parse(l),l=0;l<I.length;l++){let G=I[l];if(u.T=G[0],G=G[1],u.G==2)if(G[0]=="c"){u.K=G[1],u.ia=G[2];const ve=G[3];ve!=null&&(u.la=ve,u.j.info("VER="+u.la));const _e=G[4];_e!=null&&(u.Aa=_e,u.j.info("SVER="+u.Aa));const Ct=G[5];Ct!=null&&typeof Ct=="number"&&0<Ct&&(f=1.5*Ct,u.L=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const ke=o.g;if(ke){const tr=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tr){var x=f.h;x.g||tr.indexOf("spdy")==-1&&tr.indexOf("quic")==-1&&tr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(us(x,x.h),x.h=null))}if(f.D){const ms=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;ms&&(f.ya=ms,Z(f.I,f.D,ms))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-o.F,u.j.info("Handshake RTT: "+u.R+"ms")),f=u;var D=o;if(f.qa=Ci(f,f.J?f.ia:null,f.W),D.K){ri(f.h,D);var J=D,he=f.L;he&&(J.I=he),J.B&&(as(J),zn(J)),f.g=D}else Ii(f);0<u.i.length&&Yn(u)}else G[0]!="stop"&&G[0]!="close"||pt(u,7);else u.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?pt(u,7):ds(u):G[0]!="noop"&&u.l&&u.l.ta(G),u.v=0)}}nn(4)}catch{}}var hu=class{constructor(o,l){this.g=o,this.map=l}};function ei(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ti(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ni(o){return o.h?1:o.g?o.g.size:0}function cs(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function us(o,l){o.g?o.g.add(l):o.h=l}function ri(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ei.prototype.cancel=function(){if(this.i=si(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function si(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const u of o.g.values())l=l.concat(u.D);return l}return C(o.i)}function du(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(h(o)){for(var l=[],u=o.length,f=0;f<u;f++)l.push(o[f]);return l}l=[],u=0;for(f in o)l[u++]=o[f];return l}function fu(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(h(o)||typeof o=="string"){var l=[];o=o.length;for(var u=0;u<o;u++)l.push(u);return l}l=[],u=0;for(const f in o)l[u++]=f;return l}}}function oi(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(h(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var u=fu(o),f=du(o),I=f.length,x=0;x<I;x++)l.call(void 0,f[x],u&&u[x],o)}var ii=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pu(o,l){if(o){o=o.split("&");for(var u=0;u<o.length;u++){var f=o[u].indexOf("="),I=null;if(0<=f){var x=o[u].substring(0,f);I=o[u].substring(f+1)}else x=o[u];l(x,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ft(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ft){this.h=o.h,Hn(this,o.j),this.o=o.o,this.g=o.g,Gn(this,o.s),this.l=o.l;var l=o.i,u=new cn;u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),ai(this,u),this.m=o.m}else o&&(l=String(o).match(ii))?(this.h=!1,Hn(this,l[1]||"",!0),this.o=an(l[2]||""),this.g=an(l[3]||"",!0),Gn(this,l[4]),this.l=an(l[5]||"",!0),ai(this,l[6]||"",!0),this.m=an(l[7]||"")):(this.h=!1,this.i=new cn(null,this.h))}ft.prototype.toString=function(){var o=[],l=this.j;l&&o.push(ln(l,li,!0),":");var u=this.g;return(u||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ln(l,li,!0),"@"),o.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&o.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&o.push("/"),o.push(ln(u,u.charAt(0)=="/"?yu:gu,!0))),(u=this.i.toString())&&o.push("?",u),(u=this.m)&&o.push("#",ln(u,_u)),o.join("")};function qe(o){return new ft(o)}function Hn(o,l,u){o.j=u?an(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Gn(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ai(o,l,u){l instanceof cn?(o.i=l,wu(o.i,o.h)):(u||(l=ln(l,vu)),o.i=new cn(l,o.h))}function Z(o,l,u){o.i.set(l,u)}function Wn(o){return Z(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function an(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ln(o,l,u){return typeof o=="string"?(o=encodeURI(o).replace(l,mu),u&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mu(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var li=/[#\/\?@]/g,gu=/[#\?:]/g,yu=/[#\?]/g,vu=/[#\?@]/g,_u=/#/g;function cn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Ye(o){o.g||(o.g=new Map,o.h=0,o.i&&pu(o.i,function(l,u){o.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}n=cn.prototype,n.add=function(o,l){Ye(this),this.i=null,o=At(this,o);var u=this.g.get(o);return u||this.g.set(o,u=[]),u.push(l),this.h+=1,this};function ci(o,l){Ye(o),l=At(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ui(o,l){return Ye(o),l=At(o,l),o.g.has(l)}n.forEach=function(o,l){Ye(this),this.g.forEach(function(u,f){u.forEach(function(I){o.call(l,I,f,this)},this)},this)},n.na=function(){Ye(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),u=[];for(let f=0;f<l.length;f++){const I=o[f];for(let x=0;x<I.length;x++)u.push(l[f])}return u},n.V=function(o){Ye(this);let l=[];if(typeof o=="string")ui(this,o)&&(l=l.concat(this.g.get(At(this,o))));else{o=Array.from(this.g.values());for(let u=0;u<o.length;u++)l=l.concat(o[u])}return l},n.set=function(o,l){return Ye(this),this.i=null,o=At(this,o),ui(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function hi(o,l,u){ci(o,l),0<u.length&&(o.i=null,o.g.set(At(o,l),C(u)),o.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var u=0;u<l.length;u++){var f=l[u];const x=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var I=x;D[f]!==""&&(I+="="+encodeURIComponent(String(D[f]))),o.push(I)}}return this.i=o.join("&")};function At(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function wu(o,l){l&&!o.j&&(Ye(o),o.i=null,o.g.forEach(function(u,f){var I=f.toLowerCase();f!=I&&(ci(this,f),hi(this,I,u))},o)),o.j=l}function bu(o,l){const u=new sn;if(c.Image){const f=new Image;f.onload=A(Ze,u,"TestLoadImage: loaded",!0,l,f),f.onerror=A(Ze,u,"TestLoadImage: error",!1,l,f),f.onabort=A(Ze,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=A(Ze,u,"TestLoadImage: timeout",!1,l,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Eu(o,l){const u=new sn,f=new AbortController,I=setTimeout(()=>{f.abort(),Ze(u,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(x=>{clearTimeout(I),x.ok?Ze(u,"TestPingServer: ok",!0,l):Ze(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),Ze(u,"TestPingServer: error",!1,l)})}function Ze(o,l,u,f,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),f(u)}catch{}}function Iu(){this.g=new ou}function Tu(o,l,u){const f=u||"";try{oi(o,function(I,x){let D=I;d(I)&&(D=es(I)),l.push(f+x+"="+encodeURIComponent(D))})}catch(I){throw l.push(f+"type="+encodeURIComponent("_badmap")),I}}function Kn(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Kn,ts),Kn.prototype.g=function(){return new Qn(this.l,this.j)},Kn.prototype.i=function(o){return function(){return o}}({});function Qn(o,l){ye.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Qn,ye),n=Qn.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,hn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,un(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;di(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function di(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?un(this):hn(this),this.readyState==3&&di(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,un(this))},n.Qa=function(o){this.g&&(this.response=o,un(this))},n.ga=function(){this.g&&un(this)};function un(o){o.readyState=4,o.l=null,o.j=null,o.v=null,hn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,o.push(u[0]+": "+u[1]),u=l.next();return o.join(`\r
`)};function hn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function fi(o){let l="";return Y(o,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function hs(o,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=fi(u),typeof o=="string"?u!=null&&encodeURIComponent(String(u)):Z(o,l,u))}function ne(o){ye.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ne,ye);var Su=/^https?$/i,Au=["POST","PUT"];n=ne.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ss.g(),this.v=this.o?qo(this.o):qo(ss),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(x){pi(this,x);return}if(o=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var I in f)u.set(I,f[I]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const x of f.keys())u.set(x,f.get(x));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(x=>x.toLowerCase()=="content-type"),I=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Au,l,void 0))||f||I||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,D]of u)this.g.setRequestHeader(x,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yi(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){pi(this,x)}};function pi(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,mi(o),Xn(o)}function mi(o){o.A||(o.A=!0,Ie(o,"complete"),Ie(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ie(this,"complete"),Ie(this,"abort"),Xn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xn(this,!0)),ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?gi(this):this.bb())},n.bb=function(){gi(this)};function gi(o){if(o.h&&typeof a<"u"&&(!o.v[1]||je(o)!=4||o.Z()!=2)){if(o.u&&je(o)==4)Bo(o.Ea,0,o);else if(Ie(o,"readystatechange"),je(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=D===0){var I=String(o.D).match(ii)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),f=!Su.test(I?I.toLowerCase():"")}u=f}if(u)Ie(o,"complete"),Ie(o,"success");else{o.m=6;try{var x=2<je(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",mi(o)}}finally{Xn(o)}}}}function Xn(o,l){if(o.g){yi(o);const u=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ie(o,"ready");try{u.onreadystatechange=f}catch{}}}function yi(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function je(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<je(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),su(l)}};function vi(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function xu(o){const l={};o=(o.g&&2<=je(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(F(o[f]))continue;var u=E(o[f]);const I=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const x=l[I]||[];l[I]=x,x.push(u)}b(l,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function dn(o,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[o]||l}function _i(o){this.Aa=0,this.i=[],this.j=new sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=dn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=dn("baseRetryDelayMs",5e3,o),this.cb=dn("retryDelaySeedMs",1e4,o),this.Wa=dn("forwardChannelMaxRetries",2,o),this.wa=dn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ei(o&&o.concurrentRequestLimit),this.Da=new Iu,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=_i.prototype,n.la=8,n.G=1,n.connect=function(o,l,u,f){Te(0),this.W=o,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.I=Ci(this,null,this.W),Yn(this)};function ds(o){if(wi(o),o.G==3){var l=o.U++,u=qe(o.I);if(Z(u,"SID",o.K),Z(u,"RID",l),Z(u,"TYPE","terminate"),fn(o,u),l=new Je(o,o.j,l),l.L=2,l.v=Wn(qe(u)),u=!1,c.navigator&&c.navigator.sendBeacon)try{u=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!u&&c.Image&&(new Image().src=l.v,u=!0),u||(l.g=Ri(l.j,null),l.g.ea(l.v)),l.F=Date.now(),zn(l)}xi(o)}function Jn(o){o.g&&(ps(o),o.g.cancel(),o.g=null)}function wi(o){Jn(o),o.u&&(c.clearTimeout(o.u),o.u=null),Zn(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Yn(o){if(!ti(o.h)&&!o.s){o.s=!0;var l=o.Ga;Jt||Vo(),Yt||(Jt(),Yt=!0),Gr.add(l,o),o.B=0}}function Cu(o,l){return ni(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=rn(v(o.Ga,o,l),Ai(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new Je(this,this.j,o);let x=this.o;if(this.S&&(x?(x=g(x),w(x,this.S)):x=this.S),this.m!==null||this.O||(I.H=x,x=null),this.P)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=Ei(this,I,l),u=qe(this.I),Z(u,"RID",o),Z(u,"CVER",22),this.D&&Z(u,"X-HTTP-Session-Id",this.D),fn(this,u),x&&(this.O?l="headers="+encodeURIComponent(String(fi(x)))+"&"+l:this.m&&hs(u,this.m,x)),us(this.h,I),this.Ua&&Z(u,"TYPE","init"),this.P?(Z(u,"$req",l),Z(u,"SID","null"),I.T=!0,is(I,u,null)):is(I,u,l),this.G=2}}else this.G==3&&(o?bi(this,o):this.i.length==0||ti(this.h)||bi(this))};function bi(o,l){var u;l?u=l.l:u=o.U++;const f=qe(o.I);Z(f,"SID",o.K),Z(f,"RID",u),Z(f,"AID",o.T),fn(o,f),o.m&&o.o&&hs(f,o.m,o.o),u=new Je(o,o.j,u,o.B+1),o.m===null&&(u.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Ei(o,u,1e3),u.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),us(o.h,u),is(u,f,l)}function fn(o,l){o.H&&Y(o.H,function(u,f){Z(l,f,u)}),o.l&&oi({},function(u,f){Z(l,f,u)})}function Ei(o,l,u){u=Math.min(o.i.length,u);var f=o.l?v(o.l.Na,o.l,o):null;e:{var I=o.i;let x=-1;for(;;){const D=["count="+u];x==-1?0<u?(x=I[0].g,D.push("ofs="+x)):x=0:D.push("ofs="+x);let J=!0;for(let he=0;he<u;he++){let G=I[he].g;const ve=I[he].map;if(G-=x,0>G)x=Math.max(0,I[he].g-100),J=!1;else try{Tu(ve,D,"req"+G+"_")}catch{f&&f(ve)}}if(J){f=D.join("&");break e}}}return o=o.i.splice(0,u),l.D=o,f}function Ii(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Jt||Vo(),Yt||(Jt(),Yt=!0),Gr.add(l,o),o.v=0}}function fs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=rn(v(o.Fa,o),Ai(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ti(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=rn(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Te(10),Jn(this),Ti(this))};function ps(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Ti(o){o.g=new Je(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=qe(o.qa);Z(l,"RID","rpc"),Z(l,"SID",o.K),Z(l,"AID",o.T),Z(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&Z(l,"TO",o.ja),Z(l,"TYPE","xmlhttp"),fn(o,l),o.m&&o.o&&hs(l,o.m,o.o),o.L&&(o.g.I=o.L);var u=o.g;o=o.ia,u.L=1,u.v=Wn(qe(l)),u.m=null,u.P=!0,Jo(u,o)}n.Za=function(){this.C!=null&&(this.C=null,Jn(this),fs(this),Te(19))};function Zn(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Si(o,l){var u=null;if(o.g==l){Zn(o),ps(o),o.g=null;var f=2}else if(cs(o.h,l))u=l.D,ri(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){u=l.m?l.m.length:0,l=Date.now()-l.F;var I=o.B;f=$n(),Ie(f,new Wo(f,u)),Yn(o)}else Ii(o);else if(I=l.s,I==3||I==0&&0<l.X||!(f==1&&Cu(o,l)||f==2&&fs(o)))switch(u&&0<u.length&&(l=o.h,l.i=l.i.concat(u)),I){case 1:pt(o,5);break;case 4:pt(o,10);break;case 3:pt(o,6);break;default:pt(o,2)}}}function Ai(o,l){let u=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(u*=2),u*l}function pt(o,l){if(o.j.info("Error code "+l),l==2){var u=v(o.fb,o),f=o.Xa;const I=!f;f=new ft(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Hn(f,"https"),Wn(f),I?bu(f.toString(),u):Eu(f.toString(),u)}else Te(2);o.G=0,o.l&&o.l.sa(l),xi(o),wi(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Te(2)):(this.j.info("Failed to ping google.com"),Te(1))};function xi(o){if(o.G=0,o.ka=[],o.l){const l=si(o.h);(l.length!=0||o.i.length!=0)&&(P(o.ka,l),P(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function Ci(o,l,u){var f=u instanceof ft?qe(u):new ft(u);if(f.g!="")l&&(f.g=l+"."+f.g),Gn(f,f.s);else{var I=c.location;f=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var x=new ft(null);f&&Hn(x,f),l&&(x.g=l),I&&Gn(x,I),u&&(x.l=u),f=x}return u=o.D,l=o.ya,u&&l&&Z(f,u,l),Z(f,"VER",o.la),fn(o,f),f}function Ri(o,l,u){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ne(new Kn({eb:u})):new ne(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pi(){}n=Pi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function er(){}er.prototype.g=function(o,l){return new Ce(o,l)};function Ce(o,l){ye.call(this),this.g=new _i(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!F(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!F(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new xt(this)}S(Ce,ye),Ce.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ce.prototype.close=function(){ds(this.g)},Ce.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var u={};u.__data__=o,o=u}else this.u&&(u={},u.__data__=es(o),o=u);l.i.push(new hu(l.Ya++,o)),l.G==3&&Yn(l)},Ce.prototype.N=function(){this.g.l=null,delete this.j,ds(this.g),delete this.g,Ce.aa.N.call(this)};function ki(o){ns.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const u in l){o=u;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}S(ki,ns);function Di(){rs.call(this),this.status=1}S(Di,rs);function xt(o){this.g=o}S(xt,Pi),xt.prototype.ua=function(){Ie(this.g,"a")},xt.prototype.ta=function(o){Ie(this.g,new ki(o))},xt.prototype.sa=function(o){Ie(this.g,new Di)},xt.prototype.ra=function(){Ie(this.g,"b")},er.prototype.createWebChannel=er.prototype.g,Ce.prototype.send=Ce.prototype.o,Ce.prototype.open=Ce.prototype.m,Ce.prototype.close=Ce.prototype.close,dl=function(){return new er},hl=function(){return $n()},ul=ht,Vs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qn.NO_ERROR=0,qn.TIMEOUT=8,qn.HTTP_ERROR=6,lr=qn,Ko.COMPLETE="complete",cl=Ko,jo.EventType=tn,tn.OPEN="a",tn.CLOSE="b",tn.ERROR="c",tn.MESSAGE="d",ye.prototype.listen=ye.prototype.K,pn=jo,ne.prototype.listenOnce=ne.prototype.L,ne.prototype.getLastError=ne.prototype.Ka,ne.prototype.getLastErrorCode=ne.prototype.Ba,ne.prototype.getStatus=ne.prototype.Z,ne.prototype.getResponseJson=ne.prototype.Oa,ne.prototype.getResponseText=ne.prototype.oa,ne.prototype.send=ne.prototype.ea,ne.prototype.setWithCredentials=ne.prototype.Ha,ll=ne}).apply(typeof nr<"u"?nr:typeof self<"u"?self:typeof window<"u"?window:{});const Gi="@firebase/firestore",Wi="4.7.16";/**
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
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let Gt="11.8.1";/**
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
 */const yt=new tl("@firebase/firestore");function Rt(){return yt.logLevel}function L(n,...e){if(yt.logLevel<=H.DEBUG){const t=e.map(Ys);yt.debug(`Firestore (${Gt}): ${n}`,...t)}}function Ke(n,...e){if(yt.logLevel<=H.ERROR){const t=e.map(Ys);yt.error(`Firestore (${Gt}): ${n}`,...t)}}function Bt(n,...e){if(yt.logLevel<=H.WARN){const t=e.map(Ys);yt.warn(`Firestore (${Gt}): ${n}`,...t)}}function Ys(n){if(typeof n=="string")return n;try{/**
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
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,fl(n,r,t)}function fl(n,e,t){let r=`FIRESTORE (${Gt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ke(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||fl(e,s,r)}function $(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class st{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class pl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class Dd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Vd{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let i=new st;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new st,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=i;e.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new st)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new pl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new be(e)}}class Ld{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Nd{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ld(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ki{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Md{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pd(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ki(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ki(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Od(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function ml(){return new TextEncoder}/**
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
 */class gl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Od(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function Ls(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return q(r,s);{const i=ml(),a=Bd(i.encode(Qi(n,t)),i.encode(Qi(e,t)));return a!==0?a:q(r,s)}}t+=r>65535?2:1}return q(n.length,e.length)}function Qi(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Bd(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return q(n[t],e[t]);return q(n.length,e.length)}function Ft(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Xi=-62135596800,Ji=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ji);return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new N(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new N(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xi)throw new N(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ji}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Xi;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new ae(0,0))}static max(){return new U(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yi="__name__";class Le{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Le.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Le?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Le.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return q(e.length,t.length)}static compareSegments(e,t){const r=Le.isNumericId(e),s=Le.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Le.extractNumericId(e).compare(Le.extractNumericId(t)):Ls(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rt.fromString(e.substring(4,e.length-2))}}class re extends Le{construct(e,t,r){return new re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new re(t)}static emptyPath(){return new re([])}}const Fd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class fe extends Le{construct(e,t,r){return new fe(e,t,r)}static isValidIdentifier(e){return Fd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yi}static keyField(){return new fe([Yi])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new N(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new N(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new N(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new fe(t)}static emptyPath(){return new fe([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(re.fromString(e))}static fromName(e){return new M(re.fromString(e).popFirst(5))}static empty(){return new M(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new re(e.slice()))}}/**
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
 */const Sn=-1;function Ud(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new ot(s,M.empty(),e)}function $d(n){return new ot(n.readTime,n.key,Sn)}class ot{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ot(U.min(),M.empty(),Sn)}static max(){return new ot(U.max(),M.empty(),Sn)}}function qd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
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
 */const jd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Wt(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==jd)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof R?t:R.resolve(t)}catch(t){return R.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):R.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):R.reject(t)}static resolve(e){return new R((t,r)=>{t(e)})}static reject(e){return new R((t,r)=>{r(e)})}static waitFor(e){return new R((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},h=>r(h))}),a=!0,i===s&&t()})}static or(e){let t=R.resolve(!1);for(const r of e)t=t.next(s=>s?R.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new R((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let h=0;h<i;h++){const d=h;t(e[d]).next(p=>{a[d]=p,++c,c===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new R((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Hd(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Kt(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Dr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Dr.le=-1;/**
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
 */const Zs=-1;function Vr(n){return n==null}function _r(n){return n===0&&1/n==-1/0}function Gd(n){return typeof n=="number"&&Number.isInteger(n)&&!_r(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const yl="";function Wd(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Zi(e)),e=Kd(n.get(t),e);return Zi(e)}function Kd(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case yl:t+="";break;default:t+=i}}return t}function Zi(n){return n+yl+""}/**
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
 */function ea(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function _t(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class te{constructor(e,t){this.comparator=e,this.root=t||de.EMPTY}insert(e,t){return new te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,de.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,de.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rr(this.root,e,this.comparator,!0)}}class rr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class de{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??de.RED,this.left=s??de.EMPTY,this.right=i??de.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new de(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return de.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1;de.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new de(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class le{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ta(this.data.getIterator())}getIteratorFrom(e){return new ta(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new le(this.comparator);return t.data=e,t}}class ta{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class De{constructor(e){this.fields=e,e.sort(fe.comparator)}static empty(){return new De([])}unionWith(e){let t=new le(fe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new De(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ft(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class _l extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _l("Invalid base64 string: "+i):i}}(e);return new pe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pe.EMPTY_BYTE_STRING=new pe("");const Qd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function it(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=Qd.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:se(n.seconds),nanos:se(n.nanos)}}function se(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function at(n){return typeof n=="string"?pe.fromBase64String(n):pe.fromUint8Array(n)}/**
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
 */const wl="server_timestamp",bl="__type__",El="__previous_value__",Il="__local_write_time__";function eo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[bl])===null||t===void 0?void 0:t.stringValue)===wl}function Lr(n){const e=n.mapValue.fields[El];return eo(e)?Lr(e):e}function An(n){const e=it(n.mapValue.fields[Il].timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class Xd{constructor(e,t,r,s,i,a,c,h,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p}}const wr="(default)";class xn{constructor(e,t){this.projectId=e,this.database=t||wr}static empty(){return new xn("","")}get isDefaultDatabase(){return this.database===wr}isEqual(e){return e instanceof xn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tl="__type__",Jd="__max__",sr={mapValue:{}},Sl="__vector__",br="value";function lt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?eo(n)?4:Zd(n)?9007199254740991:Yd(n)?10:11:B(28295,{value:n})}function Oe(n,e){if(n===e)return!0;const t=lt(n);if(t!==lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return An(n).isEqual(An(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=it(s.timestampValue),c=it(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return at(s.bytesValue).isEqual(at(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return se(s.geoPointValue.latitude)===se(i.geoPointValue.latitude)&&se(s.geoPointValue.longitude)===se(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return se(s.integerValue)===se(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=se(s.doubleValue),c=se(i.doubleValue);return a===c?_r(a)===_r(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return Ft(n.arrayValue.values||[],e.arrayValue.values||[],Oe);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ea(a)!==ea(c))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(c[h]===void 0||!Oe(a[h],c[h])))return!1;return!0}(n,e);default:return B(52216,{left:n})}}function Cn(n,e){return(n.values||[]).find(t=>Oe(t,e))!==void 0}function Ut(n,e){if(n===e)return 0;const t=lt(n),r=lt(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=se(i.integerValue||i.doubleValue),h=se(a.integerValue||a.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,e);case 3:return na(n.timestampValue,e.timestampValue);case 4:return na(An(n),An(e));case 5:return Ls(n.stringValue,e.stringValue);case 6:return function(i,a){const c=at(i),h=at(a);return c.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),h=a.split("/");for(let d=0;d<c.length&&d<h.length;d++){const p=q(c[d],h[d]);if(p!==0)return p}return q(c.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=q(se(i.latitude),se(a.latitude));return c!==0?c:q(se(i.longitude),se(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ra(n.arrayValue,e.arrayValue);case 10:return function(i,a){var c,h,d,p;const m=i.fields||{},v=a.fields||{},A=(c=m[br])===null||c===void 0?void 0:c.arrayValue,S=(h=v[br])===null||h===void 0?void 0:h.arrayValue,C=q(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0);return C!==0?C:ra(A,S)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===sr.mapValue&&a===sr.mapValue)return 0;if(i===sr.mapValue)return 1;if(a===sr.mapValue)return-1;const c=i.fields||{},h=Object.keys(c),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let m=0;m<h.length&&m<p.length;++m){const v=Ls(h[m],p[m]);if(v!==0)return v;const A=Ut(c[h[m]],d[p[m]]);if(A!==0)return A}return q(h.length,p.length)}(n.mapValue,e.mapValue);default:throw B(23264,{Pe:t})}}function na(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=it(n),r=it(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function ra(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ut(t[s],r[s]);if(i)return i}return q(t.length,r.length)}function $t(n){return Ns(n)}function Ns(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=it(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return at(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ns(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ns(t.fields[a])}`;return s+"}"}(n.mapValue):B(61005,{value:n})}function cr(n){switch(lt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lr(n);return e?16+cr(e):16;case 5:return 2*n.stringValue.length;case 6:return at(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+cr(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return _t(r.fields,(i,a)=>{s+=i.length+cr(a)}),s}(n.mapValue);default:throw B(13486,{value:n})}}function Ms(n){return!!n&&"integerValue"in n}function to(n){return!!n&&"arrayValue"in n}function sa(n){return!!n&&"nullValue"in n}function oa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ur(n){return!!n&&"mapValue"in n}function Yd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Tl])===null||t===void 0?void 0:t.stringValue)===Sl}function vn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return _t(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=vn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=vn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Zd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Jd}/**
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
 */class Re{constructor(e){this.value=e}static empty(){return new Re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ur(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=vn(t)}setAll(e){let t=fe.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=vn(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ur(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Oe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ur(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){_t(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Re(vn(this.value))}}function Al(n){const e=[];return _t(n.fields,(t,r)=>{const s=new fe([t]);if(ur(r)){const i=Al(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new De(e)}/**
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
 */class Ee{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ee(e,0,U.min(),U.min(),U.min(),Re.empty(),0)}static newFoundDocument(e,t,r,s){return new Ee(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new Ee(e,2,t,U.min(),U.min(),Re.empty(),0)}static newUnknownDocument(e,t){return new Ee(e,3,t,U.min(),U.min(),Re.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Er{constructor(e,t){this.position=e,this.inclusive=t}}function ia(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=Ut(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function aa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Oe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ir{constructor(e,t="asc"){this.field=e,this.dir=t}}function ef(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class xl{}class ie extends xl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new nf(e,t,r):t==="array-contains"?new of(e,r):t==="in"?new af(e,r):t==="not-in"?new lf(e,r):t==="array-contains-any"?new cf(e,r):new ie(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new rf(e,r):new sf(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ut(t,this.value)):t!==null&&lt(this.value)===lt(t)&&this.matchesComparison(Ut(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Be extends xl{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Be(e,t)}matches(e){return Cl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Cl(n){return n.op==="and"}function Rl(n){return tf(n)&&Cl(n)}function tf(n){for(const e of n.filters)if(e instanceof Be)return!1;return!0}function Os(n){if(n instanceof ie)return n.field.canonicalString()+n.op.toString()+$t(n.value);if(Rl(n))return n.filters.map(e=>Os(e)).join(",");{const e=n.filters.map(t=>Os(t)).join(",");return`${n.op}(${e})`}}function Pl(n,e){return n instanceof ie?function(r,s){return s instanceof ie&&r.op===s.op&&r.field.isEqual(s.field)&&Oe(r.value,s.value)}(n,e):n instanceof Be?function(r,s){return s instanceof Be&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Pl(a,s.filters[c]),!0):!1}(n,e):void B(19439)}function kl(n){return n instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${$t(t.value)}`}(n):n instanceof Be?function(t){return t.op.toString()+" {"+t.getFilters().map(kl).join(" ,")+"}"}(n):"Filter"}class nf extends ie{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class rf extends ie{constructor(e,t){super(e,"in",t),this.keys=Dl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sf extends ie{constructor(e,t){super(e,"not-in",t),this.keys=Dl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Dl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class of extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return to(t)&&Cn(t.arrayValue,this.value)}}class af extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cn(this.value.arrayValue,t)}}class lf extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Cn(this.value.arrayValue,t)}}class cf extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!to(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Cn(this.value.arrayValue,r))}}/**
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
 */class uf{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Ie=null}}function la(n,e=null,t=[],r=[],s=null,i=null,a=null){return new uf(n,e,t,r,s,i,a)}function no(n){const e=$(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Os(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>$t(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>$t(r)).join(",")),e.Ie=t}return e.Ie}function ro(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ef(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Pl(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!aa(n.startAt,e.startAt)&&aa(n.endAt,e.endAt)}function Bs(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Nr{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=h,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function hf(n,e,t,r,s,i,a,c){return new Nr(n,e,t,r,s,i,a,c)}function so(n){return new Nr(n)}function ca(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function df(n){return n.collectionGroup!==null}function _n(n){const e=$(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new le(fe.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Ir(i,r))}),t.has(fe.keyField().canonicalString())||e.Ee.push(new Ir(fe.keyField(),r))}return e.Ee}function Ne(n){const e=$(n);return e.de||(e.de=ff(e,_n(n))),e.de}function ff(n,e){if(n.limitType==="F")return la(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ir(s.field,i)});const t=n.endAt?new Er(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Er(n.startAt.position,n.startAt.inclusive):null;return la(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Fs(n,e,t){return new Nr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mr(n,e){return ro(Ne(n),Ne(e))&&n.limitType===e.limitType}function Vl(n){return`${no(Ne(n))}|lt:${n.limitType}`}function Pt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>kl(s)).join(", ")}]`),Vr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>$t(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>$t(s)).join(",")),`Target(${r})`}(Ne(n))}; limitType=${n.limitType})`}function Or(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of _n(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,h){const d=ia(a,c,h);return a.inclusive?d<=0:d<0}(r.startAt,_n(r),s)||r.endAt&&!function(a,c,h){const d=ia(a,c,h);return a.inclusive?d>=0:d>0}(r.endAt,_n(r),s))}(n,e)}function pf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ll(n){return(e,t)=>{let r=!1;for(const s of _n(n)){const i=mf(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function mf(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,a,c){const h=a.data.field(i),d=c.data.field(i);return h!==null&&d!==null?Ut(h,d):B(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
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
 */class wt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){_t(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vl(this.inner)}size(){return this.innerSize}}/**
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
 */const gf=new te(M.comparator);function Qe(){return gf}const Nl=new te(M.comparator);function mn(...n){let e=Nl;for(const t of n)e=e.insert(t.key,t);return e}function Ml(n){let e=Nl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function gt(){return wn()}function Ol(){return wn()}function wn(){return new wt(n=>n.toString(),(n,e)=>n.isEqual(e))}const yf=new te(M.comparator),vf=new le(M.comparator);function j(...n){let e=vf;for(const t of n)e=e.add(t);return e}const _f=new le(q);function wf(){return _f}/**
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
 */function oo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_r(e)?"-0":e}}function Bl(n){return{integerValue:""+n}}function bf(n,e){return Gd(e)?Bl(e):oo(n,e)}/**
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
 */class Br{constructor(){this._=void 0}}function Ef(n,e,t){return n instanceof Tr?function(s,i){const a={fields:{[bl]:{stringValue:wl},[Il]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&eo(i)&&(i=Lr(i)),i&&(a.fields[El]=i),{mapValue:a}}(t,e):n instanceof Rn?Ul(n,e):n instanceof Pn?$l(n,e):function(s,i){const a=Fl(s,i),c=ua(a)+ua(s.Re);return Ms(a)&&Ms(s.Re)?Bl(c):oo(s.serializer,c)}(n,e)}function If(n,e,t){return n instanceof Rn?Ul(n,e):n instanceof Pn?$l(n,e):t}function Fl(n,e){return n instanceof Sr?function(r){return Ms(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Tr extends Br{}class Rn extends Br{constructor(e){super(),this.elements=e}}function Ul(n,e){const t=ql(e);for(const r of n.elements)t.some(s=>Oe(s,r))||t.push(r);return{arrayValue:{values:t}}}class Pn extends Br{constructor(e){super(),this.elements=e}}function $l(n,e){let t=ql(e);for(const r of n.elements)t=t.filter(s=>!Oe(s,r));return{arrayValue:{values:t}}}class Sr extends Br{constructor(e,t){super(),this.serializer=e,this.Re=t}}function ua(n){return se(n.integerValue||n.doubleValue)}function ql(n){return to(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Tf(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Rn&&s instanceof Rn||r instanceof Pn&&s instanceof Pn?Ft(r.elements,s.elements,Oe):r instanceof Sr&&s instanceof Sr?Oe(r.Re,s.Re):r instanceof Tr&&s instanceof Tr}(n.transform,e.transform)}class Sf{constructor(e,t){this.version=e,this.transformResults=t}}class He{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new He}static exists(e){return new He(void 0,e)}static updateTime(e){return new He(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fr{}function jl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Hl(n.key,He.none()):new Vn(n.key,n.data,He.none());{const t=n.data,r=Re.empty();let s=new le(fe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new bt(n.key,r,new De(s.toArray()),He.none())}}function Af(n,e,t){n instanceof Vn?function(s,i,a){const c=s.value.clone(),h=da(s.fieldTransforms,i,a.transformResults);c.setAll(h),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof bt?function(s,i,a){if(!hr(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=da(s.fieldTransforms,i,a.transformResults),h=i.data;h.setAll(zl(s)),h.setAll(c),i.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function bn(n,e,t,r){return n instanceof Vn?function(i,a,c,h){if(!hr(i.precondition,a))return c;const d=i.value.clone(),p=fa(i.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof bt?function(i,a,c,h){if(!hr(i.precondition,a))return c;const d=fa(i.fieldTransforms,h,a),p=a.data;return p.setAll(zl(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(i,a,c){return hr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function xf(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Fl(r.transform,s||null);i!=null&&(t===null&&(t=Re.empty()),t.set(r.field,i))}return t||null}function ha(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ft(r,s,(i,a)=>Tf(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Vn extends Fr{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class bt extends Fr{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function da(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,If(a,c,t[s]))}return r}function fa(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Ef(i,a,e))}return r}class Hl extends Fr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cf extends Fr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Rf{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Af(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=bn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=bn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ol();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const h=jl(a,c);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(U.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),j())}isEqual(e){return this.batchId===e.batchId&&Ft(this.mutations,e.mutations,(t,r)=>ha(t,r))&&Ft(this.baseMutations,e.baseMutations,(t,r)=>ha(t,r))}}class io{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return yf}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new io(e,t,r,s)}}/**
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
 */class Pf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kf{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var oe,z;function Df(n){switch(n){case k.OK:return B(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function Gl(n){if(n===void 0)return Ke("GRPC error has no .code"),k.UNKNOWN;switch(n){case oe.OK:return k.OK;case oe.CANCELLED:return k.CANCELLED;case oe.UNKNOWN:return k.UNKNOWN;case oe.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case oe.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case oe.INTERNAL:return k.INTERNAL;case oe.UNAVAILABLE:return k.UNAVAILABLE;case oe.UNAUTHENTICATED:return k.UNAUTHENTICATED;case oe.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case oe.NOT_FOUND:return k.NOT_FOUND;case oe.ALREADY_EXISTS:return k.ALREADY_EXISTS;case oe.PERMISSION_DENIED:return k.PERMISSION_DENIED;case oe.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case oe.ABORTED:return k.ABORTED;case oe.OUT_OF_RANGE:return k.OUT_OF_RANGE;case oe.UNIMPLEMENTED:return k.UNIMPLEMENTED;case oe.DATA_LOSS:return k.DATA_LOSS;default:return B(39323,{code:n})}}(z=oe||(oe={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Vf=new rt([4294967295,4294967295],0);function pa(n){const e=ml().encode(n),t=new al;return t.update(e),new Uint8Array(t.digest())}function ma(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new rt([t,r],0),new rt([s,i],0)]}class ao{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new gn(`Invalid padding: ${t}`);if(r<0)throw new gn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new gn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=rt.fromNumber(this.pe)}we(e,t,r){let s=e.add(t.multiply(rt.fromNumber(r)));return s.compare(Vf)===1&&(s=new rt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=pa(e),[r,s]=ma(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);if(!this.Se(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new ao(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.pe===0)return;const t=pa(e),[r,s]=ma(t);for(let i=0;i<this.hashCount;i++){const a=this.we(r,s,i);this.be(a)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ur{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ln.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ur(U.min(),s,new te(q),Qe(),j())}}class Ln{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ln(r,t,j(),j(),j())}}/**
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
 */class dr{constructor(e,t,r,s){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=s}}class Wl{constructor(e,t){this.targetId=e,this.Ce=t}}class Kl{constructor(e,t,r=pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ga{constructor(){this.Fe=0,this.Me=ya(),this.xe=pe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=j(),t=j(),r=j();return this.Me.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}}),new Ln(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=ya()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,X(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Lf{constructor(e){this.ze=e,this.je=new Map,this.He=Qe(),this.Je=or(),this.Ye=or(),this.Ze=new te(q)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:B(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,s)=>{this.it(s)&&t(s)})}ot(e){const t=e.targetId,r=e.Ce.count,s=this._t(t);if(s){const i=s.target;if(Bs(i))if(r===0){const a=new M(i.path);this.tt(t,a,Ee.newNoDocument(a,U.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ut(t);if(a!==r){const c=this.ct(e),h=c?this.lt(c,e,a):1;if(h!==0){this.st(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=at(r).toUint8Array()}catch(h){if(h instanceof _l)return Bt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new ao(a,s,i)}catch(h){return Bt(h instanceof gn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.pe===0?null:c}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.ze.Pt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.tt(t,i,null),s++)}),s}It(e){const t=new Map;this.je.forEach((i,a)=>{const c=this._t(a);if(c){if(i.current&&Bs(c.target)){const h=new M(c.target.path);this.Et(h).has(a)||this.dt(a,h)||this.tt(a,h,Ee.newNoDocument(h,e))}i.Le&&(t.set(a,i.qe()),i.Qe())}});let r=j();this.Ye.forEach((i,a)=>{let c=!0;a.forEachWhile(h=>{const d=this._t(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.He.forEach((i,a)=>a.setReadTime(e));const s=new Ur(e,t,this.Ze,this.He,r);return this.He=Qe(),this.Je=or(),this.Ye=or(),this.Ze=new te(q),s}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const s=this.rt(e);this.dt(e,t)?s.$e(t,1):s.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new ga,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new le(q),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new le(q),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new ga),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function or(){return new te(M.comparator)}function ya(){return new te(M.comparator)}const Nf={asc:"ASCENDING",desc:"DESCENDING"},Mf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Of={and:"AND",or:"OR"};class Bf{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Us(n,e){return n.useProto3Json||Vr(e)?e:{value:e}}function Ar(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ql(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ff(n,e){return Ar(n,e.toTimestamp())}function Me(n){return X(!!n,49232),U.fromTimestamp(function(t){const r=it(t);return new ae(r.seconds,r.nanos)}(n))}function lo(n,e){return $s(n,e).canonicalString()}function $s(n,e){const t=function(s){return new re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Xl(n){const e=re.fromString(n);return X(tc(e),10190,{key:e.toString()}),e}function qs(n,e){return lo(n.databaseId,e.path)}function Es(n,e){const t=Xl(e);if(t.get(1)!==n.databaseId.projectId)throw new N(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new N(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Yl(t))}function Jl(n,e){return lo(n.databaseId,e)}function Uf(n){const e=Xl(n);return e.length===4?re.emptyPath():Yl(e)}function js(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Yl(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function va(n,e,t){return{name:qs(n,e),fields:t.value.mapValue.fields}}function $f(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(X(p===void 0||typeof p=="string",58123),pe.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),pe.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(d){const p=d.code===void 0?k.UNKNOWN:Gl(d.code);return new N(p,d.message||"")}(a);t=new Kl(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Es(n,r.document.name),i=Me(r.document.updateTime),a=r.document.createTime?Me(r.document.createTime):U.min(),c=new Re({mapValue:{fields:r.document.fields}}),h=Ee.newFoundDocument(s,i,a,c),d=r.targetIds||[],p=r.removedTargetIds||[];t=new dr(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Es(n,r.document),i=r.readTime?Me(r.readTime):U.min(),a=Ee.newNoDocument(s,i),c=r.removedTargetIds||[];t=new dr([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Es(n,r.document),i=r.removedTargetIds||[];t=new dr([],i,s,null)}else{if(!("filter"in e))return B(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new kf(s,i),c=r.targetId;t=new Wl(c,a)}}return t}function qf(n,e){let t;if(e instanceof Vn)t={update:va(n,e.key,e.value)};else if(e instanceof Hl)t={delete:qs(n,e.key)};else if(e instanceof bt)t={update:va(n,e.key,e.data),updateMask:Jf(e.fieldMask)};else{if(!(e instanceof Cf))return B(16599,{ft:e.type});t={verify:qs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Tr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Rn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Pn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Sr)return{fieldPath:a.field.canonicalString(),increment:c.Re};throw B(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Ff(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)}(n,e.precondition)),t}function jf(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Me(s.updateTime):Me(i);return a.isEqual(U.min())&&(a=Me(i)),new Sf(a,s.transformResults||[])}(t,e))):[]}function zf(n,e){return{documents:[Jl(n,e.path)]}}function Hf(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Jl(n,s);const i=function(d){if(d.length!==0)return ec(Be.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(v){return{field:kt(v.field),direction:Kf(v.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Us(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{gt:t,parent:s}}function Gf(n){let e=Uf(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(m){const v=Zl(m);return v instanceof Be&&Rl(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(v=>function(S){return new Ir(Dt(S.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(v))}(t.orderBy));let c=null;t.limit&&(c=function(m){let v;return v=typeof m=="object"?m.value:m,Vr(v)?null:v}(t.limit));let h=null;t.startAt&&(h=function(m){const v=!!m.before,A=m.values||[];return new Er(A,v)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const v=!m.before,A=m.values||[];return new Er(A,v)}(t.endAt)),hf(e,s,a,i,c,"F",h,d)}function Wf(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Dt(t.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Dt(t.unaryFilter.field);return ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Dt(t.unaryFilter.field);return ie.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dt(t.unaryFilter.field);return ie.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}}(n):n.fieldFilter!==void 0?function(t){return ie.create(Dt(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Be.create(t.compositeFilter.filters.map(r=>Zl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}}(t.compositeFilter.op))}(n):B(30097,{filter:n})}function Kf(n){return Nf[n]}function Qf(n){return Mf[n]}function Xf(n){return Of[n]}function kt(n){return{fieldPath:n.canonicalString()}}function Dt(n){return fe.fromServerFormat(n.fieldPath)}function ec(n){return n instanceof ie?function(t){if(t.op==="=="){if(oa(t.value))return{unaryFilter:{field:kt(t.field),op:"IS_NAN"}};if(sa(t.value))return{unaryFilter:{field:kt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(oa(t.value))return{unaryFilter:{field:kt(t.field),op:"IS_NOT_NAN"}};if(sa(t.value))return{unaryFilter:{field:kt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kt(t.field),op:Qf(t.op),value:t.value}}}(n):n instanceof Be?function(t){const r=t.getFilters().map(s=>ec(s));return r.length===1?r[0]:{compositeFilter:{op:Xf(t.op),filters:r}}}(n):B(54877,{filter:n})}function Jf(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function tc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class et{constructor(e,t,r,s,i=U.min(),a=U.min(),c=pe.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new et(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new et(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Yf{constructor(e){this.wt=e}}function Zf(n){const e=Gf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fs(e,e.limit,"L"):e}/**
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
 */class ep{constructor(){this.Cn=new tp}addToCollectionParentIndex(e,t){return this.Cn.add(t),R.resolve()}getCollectionParents(e,t){return R.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return R.resolve()}deleteFieldIndex(e,t){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,t){return R.resolve()}getDocumentsMatchingTarget(e,t){return R.resolve(null)}getIndexType(e,t){return R.resolve(0)}getFieldIndexes(e,t){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,t){return R.resolve(ot.min())}getMinOffsetFromCollectionGroup(e,t){return R.resolve(ot.min())}updateCollectionGroup(e,t,r){return R.resolve()}updateIndexEntries(e,t){return R.resolve()}}class tp{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new le(re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new le(re.comparator)).toArray()}}/**
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
 */const _a={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},nc=41943040;class Ae{static withCacheSize(e){return new Ae(e,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ae.DEFAULT_COLLECTION_PERCENTILE=10,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ae.DEFAULT=new Ae(nc,Ae.DEFAULT_COLLECTION_PERCENTILE,Ae.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ae.DISABLED=new Ae(-1,0,0);/**
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
 */class qt{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new qt(0)}static lr(){return new qt(-1)}}/**
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
 */const wa="LruGarbageCollector",np=1048576;function ba([n,e],[t,r]){const s=q(n,t);return s===0?q(e,r):s}class rp{constructor(e){this.Er=e,this.buffer=new le(ba),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ba(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sp{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){L(wa,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Kt(t)?L(wa,"Ignoring IndexedDB error during garbage collection: ",t):await Wt(t)}await this.mr(3e5)})}}class op{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return R.resolve(Dr.le);const r=new rp(t);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(_a)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_a):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,s,i,a,c,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),s=this.params.maximumSequenceNumbersToCollect):s=m,a=Date.now(),this.nthSequenceNumber(e,s))).next(m=>(r=m,c=Date.now(),this.removeTargets(e,r,t))).next(m=>(i=m,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(m=>(d=Date.now(),Rt()<=H.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(h-c)+`ms
	Removed ${m} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:m})))}}function ip(n,e){return new op(n,e)}/**
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
 */class ap{constructor(){this.changes=new wt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?R.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class lp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class cp{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&bn(r.mutation,s,De.empty(),ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,t,r=j()){const s=gt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=mn();return i.forEach((c,h)=>{a=a.insert(c,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=gt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,j()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=Qe();const a=wn(),c=function(){return wn()}();return t.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof bt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),bn(p.mutation,d,p.mutation.getFieldMask(),ae.now())):a.set(d.key,De.empty())}),this.recalculateAndSaveOverlays(e,i).next(h=>(h.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>{var m;return c.set(d,new lp(p,(m=a.get(d))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const r=wn();let s=new te((a,c)=>a-c),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let p=r.get(h)||De.empty();p=c.applyToLocalView(d,p),r.set(h,p);const m=(s.get(c.batchId)||j()).add(h);s=s.insert(c.batchId,m)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,p=h.value,m=Ol();p.forEach(v=>{if(!i.has(v)){const A=jl(t.get(v),r.get(v));A!==null&&m.set(v,A),i=i.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):df(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):R.resolve(gt());let c=Sn,h=i;return a.next(d=>R.forEach(d,(p,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),i.get(p)?R.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{h=h.insert(p,v)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,h,d,j())).next(p=>({batchId:c,changes:Ml(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=mn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=mn();return this.indexManager.getCollectionParents(e,i).next(c=>R.forEach(c,h=>{const d=function(m,v){return new Nr(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,h.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((m,v)=>{a=a.insert(m,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ee.newInvalidDocument(p)))});let c=mn();return a.forEach((h,d)=>{const p=i.get(h);p!==void 0&&bn(p.mutation,d,De.empty(),ae.now()),Or(t,d)&&(c=c.insert(h,d))}),c})}}/**
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
 */class up{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return R.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Me(s.createTime)}}(t)),R.resolve()}getNamedQuery(e,t){return R.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(s){return{name:s.name,query:Zf(s.bundledQuery),readTime:Me(s.readTime)}}(t)),R.resolve()}}/**
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
 */class hp{constructor(){this.overlays=new te(M.comparator),this.Qr=new Map}getOverlay(e,t){return R.resolve(this.overlays.get(t))}getOverlays(e,t){const r=gt();return R.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),R.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),R.resolve()}getOverlaysForCollection(e,t,r){const s=gt(),i=t.length+1,a=new M(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&h.largestBatchId>r&&s.set(h.getKey(),h)}return R.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new te((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=gt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=gt(),h=i.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>c.set(d,p)),!(c.size()>=s)););return R.resolve(c)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Pf(t,r));let i=this.Qr.get(t);i===void 0&&(i=j(),this.Qr.set(t,i)),this.Qr.set(t,i.add(r.key))}}/**
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
 */class dp{constructor(){this.sessionToken=pe.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,R.resolve()}}/**
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
 */class co{constructor(){this.$r=new le(ue.Ur),this.Kr=new le(ue.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new ue(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new ue(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new M(new re([])),r=new ue(t,e),s=new ue(t,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new M(new re([])),r=new ue(t,e),s=new ue(t,e+1);let i=j();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ue(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ue{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return M.comparator(e.key,t.key)||q(e.Zr,t.Zr)}static Wr(e,t){return q(e.Zr,t.Zr)||M.comparator(e.key,t.key)}}/**
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
 */class fp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new le(ue.Ur)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Rf(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Xr=this.Xr.add(new ue(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,t){return R.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ti(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Zs:this.nr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ue(t,0),s=new ue(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const c=this.ei(a.Zr);i.push(c)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new le(q);return t.forEach(s=>{const i=new ue(s,0),a=new ue(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],c=>{r=r.add(c.Zr)})}),R.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const a=new ue(new M(i),0);let c=new le(q);return this.Xr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(h.Zr)),!0)},a),R.resolve(this.ni(c))}ni(e){const t=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){X(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return R.forEach(t.mutations,s=>{const i=new ue(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new ue(t,0),s=this.Xr.firstAfterOrEqual(r);return R.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class pp{constructor(e){this.ii=e,this.docs=function(){return new te(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return R.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(t))}getEntries(e,t){let r=Qe();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ee.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Qe();const a=t.path,c=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||qd($d(p),r)<=0||(s.has(p.key)||Or(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}si(e,t){return R.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new mp(this)}getSize(e){return R.resolve(this.size)}}class mp extends ap{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),R.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class gp{constructor(e){this.persistence=e,this.oi=new wt(t=>no(t),ro),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this._i=0,this.ai=new co,this.targetCount=0,this.ui=qt.cr()}forEachTarget(e,t){return this.oi.forEach((r,s)=>t(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),R.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new qt(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,R.resolve()}updateTargetData(e,t){return this.Tr(t),R.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.oi.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return R.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),R.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),R.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return R.resolve(r)}containsKey(e,t){return R.resolve(this.ai.containsKey(t))}}/**
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
 */class rc{constructor(e,t){this.ci={},this.overlays={},this.li=new Dr(0),this.hi=!1,this.hi=!0,this.Pi=new dp,this.referenceDelegate=e(this),this.Ti=new gp(this),this.indexManager=new ep,this.remoteDocumentCache=function(s){return new pp(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Yf(t),this.Ei=new up(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new fp(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new yp(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,t){return R.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class yp extends zd{constructor(e){super(),this.currentSequenceNumber=e}}class uo{constructor(e){this.persistence=e,this.Vi=new co,this.mi=null}static fi(e){return new uo(e)}get gi(){if(this.mi)return this.mi;throw B(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),R.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),R.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.gi,r=>{const s=M.fromPath(r);return this.pi(e,s).next(i=>{i||t.removeEntry(s,U.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return R.or([()=>R.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class xr{constructor(e,t){this.persistence=e,this.yi=new wt(r=>Wd(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=ip(this,t)}static fi(e,t){return new xr(e,t)}di(){}Ai(e){return R.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Sr(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return R.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?R.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,t).next(c=>{c||(r++,i.removeEntry(a,U.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),R.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),R.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=cr(e.data.value)),t}Dr(e,t,r){return R.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.yi.get(t);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ho{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.ds=r,this.As=s}static Rs(e,t){let r=j(),s=j();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ho(e,t.fromCache,r,s)}}/**
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
 */class vp{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _p{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return hh()?8:Hd(ch())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ws(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new vp;return this.bs(e,t,a).next(c=>{if(i.result=c,this.fs)return this.Ds(e,t,a,c.size)})}).next(()=>i.result)}Ds(e,t,r,s){return r.documentReadCount<this.gs?(Rt()<=H.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Pt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),R.resolve()):(Rt()<=H.DEBUG&&L("QueryEngine","Query:",Pt(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Rt()<=H.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Pt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ne(t))):R.resolve())}ws(e,t){if(ca(t))return R.resolve(null);let r=Ne(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Fs(t,null,"F"),r=Ne(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=j(...i);return this.ys.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.vs(t,c);return this.Cs(t,d,a,h.readTime)?this.ws(e,Fs(t,null,"F")):this.Fs(e,d,t,h)}))})))}Ss(e,t,r,s){return ca(t)||s.isEqual(U.min())?R.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(t,i);return this.Cs(t,a,r,s)?R.resolve(null):(Rt()<=H.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pt(t)),this.Fs(e,a,t,Ud(s,Sn)).next(c=>c))})}vs(e,t){let r=new le(Ll(e));return t.forEach((s,i)=>{Or(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,t,r){return Rt()<=H.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Pt(t)),this.ys.getDocumentsMatchingQuery(e,t,ot.min(),r)}Fs(e,t,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const fo="LocalStore",wp=3e8;class bp{constructor(e,t,r,s){this.persistence=e,this.Ms=t,this.serializer=s,this.xs=new te(q),this.Os=new wt(i=>no(i),ro),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cp(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Ep(n,e,t,r){return new bp(n,e,t,r)}async function sc(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let h=j();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of i){c.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(r,h).next(d=>({ks:d,removedBatchIds:a,addedBatchIds:c}))})})}function Ip(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Bs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,p){const m=d.batch,v=m.keys();let A=R.resolve();return v.forEach(S=>{A=A.next(()=>p.getEntry(h,S)).next(C=>{const P=d.docVersions.get(S);X(P!==null,48541),C.version.compareTo(P)<0&&(m.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),p.addEntry(C)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(h,m))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=j();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function oc(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function Tp(n,e){const t=$(n),r=e.snapshotVersion;let s=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Bs.newChangeBuffer({trackRemovals:!0});s=t.xs;const c=[];e.targetChanges.forEach((p,m)=>{const v=s.get(m);if(!v)return;c.push(t.Ti.removeMatchingKeys(i,p.removedDocuments,m).next(()=>t.Ti.addMatchingKeys(i,p.addedDocuments,m)));let A=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(pe.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),s=s.insert(m,A),function(C,P,O){return C.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=wp?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(v,A,p)&&c.push(t.Ti.updateTargetData(i,A))});let h=Qe(),d=j();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),c.push(Sp(i,a,e.documentUpdates).next(p=>{h=p.qs,d=p.Qs})),!r.isEqual(U.min())){const p=t.Ti.getLastRemoteSnapshotVersion(i).next(m=>t.Ti.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(p)}return R.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,h,d)).next(()=>h)}).then(i=>(t.xs=s,i))}function Sp(n,e,t){let r=j(),s=j();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=Qe();return t.forEach((c,h)=>{const d=i.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(U.min())?(e.removeEntry(c,h.readTime),a=a.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(c,h)):L(fo,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{qs:a,Qs:s}})}function Ap(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Zs),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xp(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ti.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):t.Ti.allocateTargetId(r).next(a=>(s=new et(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.xs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}async function zs(n,e,t){const r=$(n),s=r.xs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Kt(a))throw a;L(fo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.xs=r.xs.remove(e),r.Os.delete(s.target)}function Ea(n,e,t){const r=$(n);let s=U.min(),i=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const m=$(h),v=m.Os.get(p);return v!==void 0?R.resolve(m.xs.get(v)):m.Ti.getTargetData(d,p)}(r,a,Ne(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(a,c.targetId).next(h=>{i=h})}).next(()=>r.Ms.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:j())).next(c=>(Cp(r,pf(e),c),{documents:c,$s:i})))}function Cp(n,e,t){let r=n.Ns.get(e)||U.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ns.set(e,r)}class Ia{constructor(){this.activeTargetIds=wf()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Rp{constructor(){this.xo=new Ia,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Ia,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Pp{No(e){}shutdown(){}}/**
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
 */const Ta="ConnectivityMonitor";class Sa{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){L(Ta,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){L(Ta,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ir=null;function Hs(){return ir===null?ir=function(){return 268435456+Math.round(2147483648*Math.random())}():ir++,"0x"+ir.toString(16)}/**
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
 */const Is="RestConnection",kp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Dp{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===wr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,t,r,s,i){const a=Hs(),c=this.jo(e,t.toUriEncodedString());L(Is,`Sending RPC '${e}' ${a}:`,c,r);const h={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(h,s,i);const{host:d}=new URL(c),p=Xs(d);return this.Jo(e,c,h,r,p).then(m=>(L(Is,`Received RPC '${e}' ${a}: `,m),m),m=>{throw Bt(Is,`RPC '${e}' ${a} failed with error: `,m,"url: ",c,"request:",r),m})}Yo(e,t,r,s,i,a){return this.zo(e,t,r,s,i)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Gt}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,t){const r=kp[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Vp{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const we="WebChannelConnection";class Lp extends Dp{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=Hs();return new Promise((c,h)=>{const d=new ll;d.setWithCredentials(!0),d.listenOnce(cl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case lr.NO_ERROR:const m=d.getResponseJson();L(we,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(m)),c(m);break;case lr.TIMEOUT:L(we,`RPC '${e}' ${a} timed out`),h(new N(k.DEADLINE_EXCEEDED,"Request time out"));break;case lr.HTTP_ERROR:const v=d.getStatus();if(L(we,`RPC '${e}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let A=d.getResponseJson();Array.isArray(A)&&(A=A[0]);const S=A==null?void 0:A.error;if(S&&S.status&&S.message){const C=function(O){const F=O.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(F)>=0?F:k.UNKNOWN}(S.status);h(new N(C,S.message))}else h(new N(k.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new N(k.UNAVAILABLE,"Connection failed."));break;default:B(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{L(we,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);L(we,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}T_(e,t,r){const s=Hs(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=dl(),c=hl(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Ho(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const p=i.join("");L(we,`Creating RPC '${e}' stream ${s}: ${p}`,h);const m=a.createWebChannel(p,h);let v=!1,A=!1;const S=new Vp({Zo:P=>{A?L(we,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(v||(L(we,`Opening RPC '${e}' stream ${s} transport.`),m.open(),v=!0),L(we,`RPC '${e}' stream ${s} sending:`,P),m.send(P))},Xo:()=>m.close()}),C=(P,O,F)=>{P.listen(O,V=>{try{F(V)}catch(K){setTimeout(()=>{throw K},0)}})};return C(m,pn.EventType.OPEN,()=>{A||(L(we,`RPC '${e}' stream ${s} transport opened.`),S.__())}),C(m,pn.EventType.CLOSE,()=>{A||(A=!0,L(we,`RPC '${e}' stream ${s} transport closed`),S.u_())}),C(m,pn.EventType.ERROR,P=>{A||(A=!0,Bt(we,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),S.u_(new N(k.UNAVAILABLE,"The operation could not be completed")))}),C(m,pn.EventType.MESSAGE,P=>{var O;if(!A){const F=P.data[0];X(!!F,16349);const V=F,K=(V==null?void 0:V.error)||((O=V[0])===null||O===void 0?void 0:O.error);if(K){L(we,`RPC '${e}' stream ${s} received error:`,K);const ce=K.status;let Y=function(_){const w=oe[_];if(w!==void 0)return Gl(w)}(ce),b=K.message;Y===void 0&&(Y=k.INTERNAL,b="Unknown error status: "+ce+" with message "+K.message),A=!0,S.u_(new N(Y,b)),m.close()}else L(we,`RPC '${e}' stream ${s} received:`,F),S.c_(F)}}),C(c,ul.STAT_EVENT,P=>{P.stat===Vs.PROXY?L(we,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===Vs.NOPROXY&&L(we,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.a_()},0),S}}function Ts(){return typeof document<"u"?document:null}/**
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
 */function $r(n){return new Bf(n,!0)}/**
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
 */class ic{constructor(e,t,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const Aa="PersistentStream";class ac{constructor(e,t,r,s,i,a,c,h){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new ic(e,t)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Ke(t.toString()),Ke("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===t&&this.K_(r,s)},r=>{e(()=>{const s=new N(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,t){const r=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return L(Aa,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget(()=>this.S_===e?t():(L(Aa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Np extends ac{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=$f(this.serializer,e),r=function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Me(a.readTime):U.min()}(e);return this.listener.j_(t,r)}H_(e){const t={};t.database=js(this.serializer),t.addTarget=function(i,a){let c;const h=a.target;if(c=Bs(h)?{documents:zf(i,h)}:{query:Hf(i,h).gt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Ql(i,a.resumeToken);const d=Us(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=Ar(i,a.snapshotVersion.toTimestamp());const d=Us(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=Wf(this.serializer,e);r&&(t.labels=r),this.L_(t)}J_(e){const t={};t.database=js(this.serializer),t.removeTarget=e,this.L_(t)}}class Mp extends ac{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=jf(e.writeResults,e.commitTime),r=Me(e.commitTime);return this.listener.ea(r,t)}ta(){const e={};e.database=js(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>qf(this.serializer,r))};this.L_(t)}}/**
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
 */class Op{}class Bp extends Op{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new N(k.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,$s(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(k.UNKNOWN,i.toString())})}Yo(e,t,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Yo(e,$s(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(k.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class Fp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Ke(t),this.oa=!1):L("OnlineStateTracker",t)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const vt="RemoteStore";class Up{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(a=>{r.enqueueAndForget(async()=>{Et(this)&&(L(vt,"Restarting streams for network reachability change."),await async function(h){const d=$(h);d.Ta.add(4),await Nn(d),d.da.set("Unknown"),d.Ta.delete(4),await qr(d)}(this))})}),this.da=new Fp(r,s)}}async function qr(n){if(Et(n))for(const e of n.Ia)await e(!0)}async function Nn(n){for(const e of n.Ia)await e(!1)}function lc(n,e){const t=$(n);t.Pa.has(e.targetId)||(t.Pa.set(e.targetId,e),yo(t)?go(t):Qt(t).M_()&&mo(t,e))}function po(n,e){const t=$(n),r=Qt(t);t.Pa.delete(e),r.M_()&&cc(t,e),t.Pa.size===0&&(r.M_()?r.N_():Et(t)&&t.da.set("Unknown"))}function mo(n,e){if(n.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qt(n).H_(e)}function cc(n,e){n.Aa.Ke(e),Qt(n).J_(e)}function go(n){n.Aa=new Lf({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Pa.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Qt(n).start(),n.da._a()}function yo(n){return Et(n)&&!Qt(n).F_()&&n.Pa.size>0}function Et(n){return $(n).Ta.size===0}function uc(n){n.Aa=void 0}async function $p(n){n.da.set("Online")}async function qp(n){n.Pa.forEach((e,t)=>{mo(n,e)})}async function jp(n,e){uc(n),yo(n)?(n.da.ca(e),go(n)):n.da.set("Unknown")}async function zp(n,e,t){if(n.da.set("Online"),e instanceof Kl&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Pa.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Pa.delete(c),s.Aa.removeTarget(c))}(n,e)}catch(r){L(vt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cr(n,r)}else if(e instanceof dr?n.Aa.Xe(e):e instanceof Wl?n.Aa.ot(e):n.Aa.nt(e),!t.isEqual(U.min()))try{const r=await oc(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Aa.It(a);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=i.Pa.get(d);p&&i.Pa.set(d,p.withResumeToken(h.resumeToken,a))}}),c.targetMismatches.forEach((h,d)=>{const p=i.Pa.get(h);if(!p)return;i.Pa.set(h,p.withResumeToken(pe.EMPTY_BYTE_STRING,p.snapshotVersion)),cc(i,h);const m=new et(p.target,h,d,p.sequenceNumber);mo(i,m)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){L(vt,"Failed to raise snapshot:",r),await Cr(n,r)}}async function Cr(n,e,t){if(!Kt(e))throw e;n.Ta.add(1),await Nn(n),n.da.set("Offline"),t||(t=()=>oc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{L(vt,"Retrying IndexedDB access"),await t(),n.Ta.delete(1),await qr(n)})}function hc(n,e){return e().catch(t=>Cr(n,t,e))}async function jr(n){const e=$(n),t=ct(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Zs;for(;Hp(e);)try{const s=await Ap(e.localStore,r);if(s===null){e.ha.length===0&&t.N_();break}r=s.batchId,Gp(e,s)}catch(s){await Cr(e,s)}dc(e)&&fc(e)}function Hp(n){return Et(n)&&n.ha.length<10}function Gp(n,e){n.ha.push(e);const t=ct(n);t.M_()&&t.Y_&&t.Z_(e.mutations)}function dc(n){return Et(n)&&!ct(n).F_()&&n.ha.length>0}function fc(n){ct(n).start()}async function Wp(n){ct(n).ta()}async function Kp(n){const e=ct(n);for(const t of n.ha)e.Z_(t.mutations)}async function Qp(n,e,t){const r=n.ha.shift(),s=io.from(r,e,t);await hc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await jr(n)}async function Xp(n,e){e&&ct(n).Y_&&await async function(r,s){if(function(a){return Df(a)&&a!==k.ABORTED}(s.code)){const i=r.ha.shift();ct(r).O_(),await hc(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await jr(r)}}(n,e),dc(n)&&fc(n)}async function xa(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),L(vt,"RemoteStore received new credentials");const r=Et(t);t.Ta.add(3),await Nn(t),r&&t.da.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ta.delete(3),await qr(t)}async function Jp(n,e){const t=$(n);e?(t.Ta.delete(2),await qr(t)):e||(t.Ta.add(2),await Nn(t),t.da.set("Unknown"))}function Qt(n){return n.Ra||(n.Ra=function(t,r,s){const i=$(t);return i.ra(),new Np(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:$p.bind(null,n),n_:qp.bind(null,n),i_:jp.bind(null,n),j_:zp.bind(null,n)}),n.Ia.push(async e=>{e?(n.Ra.O_(),yo(n)?go(n):n.da.set("Unknown")):(await n.Ra.stop(),uc(n))})),n.Ra}function ct(n){return n.Va||(n.Va=function(t,r,s){const i=$(t);return i.ra(),new Mp(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:Wp.bind(null,n),i_:Xp.bind(null,n),X_:Kp.bind(null,n),ea:Qp.bind(null,n)}),n.Ia.push(async e=>{e?(n.Va.O_(),await jr(n)):(await n.Va.stop(),n.ha.length>0&&(L(vt,`Stopping write stream with ${n.ha.length} pending writes`),n.ha=[]))})),n.Va}/**
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
 */class vo{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new vo(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _o(n,e){if(Ke("AsyncQueue",`${e}: ${n}`),Kt(n))return new N(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Nt{static emptySet(e){return new Nt(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=mn(),this.sortedSet=new te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Nt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Ca{constructor(){this.ma=new te(M.comparator)}track(e){const t=e.doc.key,r=this.ma.get(t);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(t,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(t):e.type===1&&r.type===2?this.ma=this.ma.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):B(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal((t,r)=>{e.push(r)}),e}}class jt{constructor(e,t,r,s,i,a,c,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new jt(e,t,Nt.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Yp{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class Zp{constructor(){this.queries=Ra(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=Ra(),i.forEach((a,c)=>{for(const h of c.ya)h.onError(r)})})(this,new N(k.ABORTED,"Firestore shutting down"))}}function Ra(){return new wt(n=>Vl(n),Mr)}async function em(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.wa()&&e.Sa()&&(r=2):(i=new Yp,r=e.Sa()?0:1);try{switch(r){case 0:i.pa=await t.onListen(s,!0);break;case 1:i.pa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=_o(a,`Initialization of query '${Pt(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.ya.push(e),e.Da(t.onlineState),i.pa&&e.va(i.pa)&&wo(t)}async function tm(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ya.indexOf(e);a>=0&&(i.ya.splice(a,1),i.ya.length===0?s=e.Sa()?0:1:!i.wa()&&e.Sa()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function nm(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.ya)c.va(s)&&(r=!0);a.pa=s}}r&&wo(t)}function rm(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.ya)i.onError(t);r.queries.delete(e)}function wo(n){n.ba.forEach(e=>{e.next()})}var Gs,Pa;(Pa=Gs||(Gs={})).Ca="default",Pa.Cache="cache";class sm{constructor(e,t,r){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new jt(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache||!this.Sa())return!0;const r=t!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Ba(e){e=jt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Gs.Cache}}/**
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
 */class pc{constructor(e){this.key=e}}class mc{constructor(e){this.key=e}}class om{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=j(),this.mutatedKeys=j(),this.Ha=Ll(e),this.Ja=new Nt(this.Ha)}get Ya(){return this.Ga}Za(e,t){const r=t?t.Xa:new Ca,s=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const v=s.get(p),A=Or(this.query,m)?m:null,S=!!v&&this.mutatedKeys.has(v.key),C=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let P=!1;v&&A?v.data.isEqual(A.data)?S!==C&&(r.track({type:3,doc:A}),P=!0):this.eu(v,A)||(r.track({type:2,doc:A}),P=!0,(h&&this.Ha(A,h)>0||d&&this.Ha(A,d)<0)&&(c=!0)):!v&&A?(r.track({type:0,doc:A}),P=!0):v&&!A&&(r.track({type:1,doc:v}),P=!0,(h||d)&&(c=!0)),P&&(A?(a=a.add(A),i=C?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ja:a,Xa:r,Cs:c,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const a=e.Xa.ga();a.sort((p,m)=>function(A,S){const C=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{Vt:P})}};return C(A)-C(S)}(p.type,m.type)||this.Ha(p.doc,m.doc)),this.tu(r),s=s!=null&&s;const c=t&&!s?this.nu():[],h=this.ja.size===0&&this.current&&!s?1:0,d=h!==this.za;return this.za=h,a.length!==0||d?{snapshot:new jt(this.query,e.Ja,i,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:c}:{ru:c}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new Ca,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(t=>this.Ga=this.Ga.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ga=this.Ga.delete(t)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=j(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const t=[];return e.forEach(r=>{this.ja.has(r)||t.push(new mc(r))}),this.ja.forEach(r=>{e.has(r)||t.push(new pc(r))}),t}su(e){this.Ga=e.$s,this.ja=j();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return jt.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const bo="SyncEngine";class im{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class am{constructor(e){this.key=e,this._u=!1}}class lm{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new wt(c=>Vl(c),Mr),this.cu=new Map,this.lu=new Set,this.hu=new te(M.comparator),this.Pu=new Map,this.Tu=new co,this.Iu={},this.Eu=new Map,this.du=qt.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function cm(n,e,t=!0){const r=bc(n);let s;const i=r.uu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ou()):s=await gc(r,e,t,!0),s}async function um(n,e){const t=bc(n);await gc(t,e,!0,!1)}async function gc(n,e,t,r){const s=await xp(n.localStore,Ne(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await hm(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&lc(n.remoteStore,s),c}async function hm(n,e,t,r,s){n.Ru=(m,v,A)=>async function(C,P,O,F){let V=P.view.Za(O);V.Cs&&(V=await Ea(C.localStore,P.query,!1).then(({documents:b})=>P.view.Za(b,V)));const K=F&&F.targetChanges.get(P.targetId),ce=F&&F.targetMismatches.get(P.targetId)!=null,Y=P.view.applyChanges(V,C.isPrimaryClient,K,ce);return Da(C,P.targetId,Y.ru),Y.snapshot}(n,m,v,A);const i=await Ea(n.localStore,e,!0),a=new om(e,i.$s),c=a.Za(i.documents),h=Ln.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,h);Da(n,t,d.ru);const p=new im(e,t,a);return n.uu.set(e,p),n.cu.has(t)?n.cu.get(t).push(e):n.cu.set(t,[e]),d.snapshot}async function dm(n,e,t){const r=$(n),s=r.uu.get(e),i=r.cu.get(s.targetId);if(i.length>1)return r.cu.set(s.targetId,i.filter(a=>!Mr(a,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&po(r.remoteStore,s.targetId),Ws(r,s.targetId)}).catch(Wt)):(Ws(r,s.targetId),await zs(r.localStore,s.targetId,!0))}async function fm(n,e){const t=$(n),r=t.uu.get(e),s=t.cu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),po(t.remoteStore,r.targetId))}async function pm(n,e,t){const r=bm(n);try{const s=await function(a,c){const h=$(a),d=ae.now(),p=c.reduce((A,S)=>A.add(S.key),j());let m,v;return h.persistence.runTransaction("Locally write mutations","readwrite",A=>{let S=Qe(),C=j();return h.Bs.getEntries(A,p).next(P=>{S=P,S.forEach((O,F)=>{F.isValidDocument()||(C=C.add(O))})}).next(()=>h.localDocuments.getOverlayedDocuments(A,S)).next(P=>{m=P;const O=[];for(const F of c){const V=xf(F,m.get(F.key).overlayedDocument);V!=null&&O.push(new bt(F.key,V,Al(V.value.mapValue),He.exists(!0)))}return h.mutationQueue.addMutationBatch(A,d,O,c)}).next(P=>{v=P;const O=P.applyToLocalDocumentSet(m,C);return h.documentOverlayCache.saveOverlays(A,P.batchId,O)})}).then(()=>({batchId:v.batchId,changes:Ml(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,h){let d=a.Iu[a.currentUser.toKey()];d||(d=new te(q)),d=d.insert(c,h),a.Iu[a.currentUser.toKey()]=d}(r,s.batchId,t),await Mn(r,s.changes),await jr(r.remoteStore)}catch(s){const i=_o(s,"Failed to persist write");t.reject(i)}}async function yc(n,e){const t=$(n);try{const r=await Tp(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Pu.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a._u=!0:s.modifiedDocuments.size>0?X(a._u,14607):s.removedDocuments.size>0&&(X(a._u,42227),a._u=!1))}),await Mn(t,r,e)}catch(r){await Wt(r)}}function ka(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.uu.forEach((i,a)=>{const c=a.view.Da(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const h=$(a);h.onlineState=c;let d=!1;h.queries.forEach((p,m)=>{for(const v of m.ya)v.Da(c)&&(d=!0)}),d&&wo(h)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mm(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Pu.get(e),i=s&&s.key;if(i){let a=new te(M.comparator);a=a.insert(i,Ee.newNoDocument(i,U.min()));const c=j().add(i),h=new Ur(U.min(),new Map,new te(q),a,c);await yc(r,h),r.hu=r.hu.remove(i),r.Pu.delete(e),Eo(r)}else await zs(r.localStore,e,!1).then(()=>Ws(r,e,t)).catch(Wt)}async function gm(n,e){const t=$(n),r=e.batch.batchId;try{const s=await Ip(t.localStore,e);_c(t,r,null),vc(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Mn(t,s)}catch(s){await Wt(s)}}async function ym(n,e,t){const r=$(n);try{const s=await function(a,c){const h=$(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,c).next(m=>(X(m!==null,37113),p=m.keys(),h.mutationQueue.removeMutationBatch(d,m))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,e);_c(r,e,t),vc(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Mn(r,s)}catch(s){await Wt(s)}}function vc(n,e){(n.Eu.get(e)||[]).forEach(t=>{t.resolve()}),n.Eu.delete(e)}function _c(n,e,t){const r=$(n);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}function Ws(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.cu.get(e))n.uu.delete(r),t&&n.au.Vu(r,t);n.cu.delete(e),n.isPrimaryClient&&n.Tu.Hr(e).forEach(r=>{n.Tu.containsKey(r)||wc(n,r)})}function wc(n,e){n.lu.delete(e.path.canonicalString());const t=n.hu.get(e);t!==null&&(po(n.remoteStore,t),n.hu=n.hu.remove(e),n.Pu.delete(t),Eo(n))}function Da(n,e,t){for(const r of t)r instanceof pc?(n.Tu.addReference(r.key,e),vm(n,r)):r instanceof mc?(L(bo,"Document no longer in limbo: "+r.key),n.Tu.removeReference(r.key,e),n.Tu.containsKey(r.key)||wc(n,r.key)):B(19791,{mu:r})}function vm(n,e){const t=e.key,r=t.path.canonicalString();n.hu.get(t)||n.lu.has(r)||(L(bo,"New document in limbo: "+t),n.lu.add(r),Eo(n))}function Eo(n){for(;n.lu.size>0&&n.hu.size<n.maxConcurrentLimboResolutions;){const e=n.lu.values().next().value;n.lu.delete(e);const t=new M(re.fromString(e)),r=n.du.next();n.Pu.set(r,new am(t)),n.hu=n.hu.insert(t,r),lc(n.remoteStore,new et(Ne(so(t.path)),r,"TargetPurposeLimboResolution",Dr.le))}}async function Mn(n,e,t){const r=$(n),s=[],i=[],a=[];r.uu.isEmpty()||(r.uu.forEach((c,h)=>{a.push(r.Ru(h,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(h.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(h.targetId,m?"current":"not-current")}if(d){s.push(d);const m=ho.Rs(h.targetId,d);i.push(m)}}))}),await Promise.all(a),r.au.j_(s),await async function(h,d){const p=$(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>R.forEach(d,v=>R.forEach(v.ds,A=>p.persistence.referenceDelegate.addReference(m,v.targetId,A)).next(()=>R.forEach(v.As,A=>p.persistence.referenceDelegate.removeReference(m,v.targetId,A)))))}catch(m){if(!Kt(m))throw m;L(fo,"Failed to update sequence numbers: "+m)}for(const m of d){const v=m.targetId;if(!m.fromCache){const A=p.xs.get(v),S=A.snapshotVersion,C=A.withLastLimboFreeSnapshotVersion(S);p.xs=p.xs.insert(v,C)}}}(r.localStore,i))}async function _m(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){L(bo,"User change. New user:",e.toKey());const r=await sc(t.localStore,e);t.currentUser=e,function(i,a){i.Eu.forEach(c=>{c.forEach(h=>{h.reject(new N(k.CANCELLED,a))})}),i.Eu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mn(t,r.ks)}}function wm(n,e){const t=$(n),r=t.Pu.get(e);if(r&&r._u)return j().add(r.key);{let s=j();const i=t.cu.get(e);if(!i)return s;for(const a of i){const c=t.uu.get(a);s=s.unionWith(c.view.Ya)}return s}}function bc(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yc.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mm.bind(null,e),e.au.j_=nm.bind(null,e.eventManager),e.au.Vu=rm.bind(null,e.eventManager),e}function bm(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ym.bind(null,e),e}class Rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$r(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return Ep(this.persistence,new _p,e.initialUser,this.serializer)}yu(e){return new rc(uo.fi,this.serializer)}pu(e){return new Rp}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rr.provider={build:()=>new Rr};class Em extends Rr{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){X(this.persistence.referenceDelegate instanceof xr,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new sp(r,e.asyncQueue,t)}yu(e){const t=this.cacheSizeBytes!==void 0?Ae.withCacheSize(this.cacheSizeBytes):Ae.DEFAULT;return new rc(r=>xr.fi(r,t),this.serializer)}}class Ks{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ka(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_m.bind(null,this.syncEngine),await Jp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Zp}()}createDatastore(e){const t=$r(e.databaseInfo.databaseId),r=function(i){return new Lp(i)}(e.databaseInfo);return function(i,a,c,h){return new Bp(i,a,c,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new Up(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ka(this.syncEngine,t,0),function(){return Sa.C()?new Sa:new Pp}())}createSyncEngine(e,t){return function(s,i,a,c,h,d,p){const m=new lm(s,i,a,c,h,d);return p&&(m.Au=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=$(s);L(vt,"RemoteStore shutting down."),i.Ta.add(5),await Nn(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ks.provider={build:()=>new Ks};/**
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
 */class Im{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Ke("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ut="FirestoreClient";class Tm{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=be.UNAUTHENTICATED,this.clientId=gl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{L(ut,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(L(ut,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=_o(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ss(n,e){n.asyncQueue.verifyOperationInProgress(),L(ut,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await sc(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Va(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Sm(n);L(ut,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>xa(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>xa(e.remoteStore,s)),n._onlineComponents=e}async function Sm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(ut,"Using user provided OfflineComponentProvider");try{await Ss(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Bt("Error using user provided cache. Falling back to memory cache: "+t),await Ss(n,new Rr)}}else L(ut,"Using default OfflineComponentProvider"),await Ss(n,new Em(void 0));return n._offlineComponents}async function Ec(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(ut,"Using user provided OnlineComponentProvider"),await Va(n,n._uninitializedComponentsProvider._online)):(L(ut,"Using default OnlineComponentProvider"),await Va(n,new Ks))),n._onlineComponents}function Am(n){return Ec(n).then(e=>e.syncEngine)}async function xm(n){const e=await Ec(n),t=e.eventManager;return t.onListen=cm.bind(null,e.syncEngine),t.onUnlisten=dm.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=um.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fm.bind(null,e.syncEngine),t}function Cm(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,h,d){const p=new Im({next:v=>{p.Cu(),a.enqueueAndForget(()=>tm(i,m));const A=v.docs.has(c);!A&&v.fromCache?d.reject(new N(k.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&v.fromCache&&h&&h.source==="server"?d.reject(new N(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(v)},error:v=>d.reject(v)}),m=new sm(so(c.path),p,{includeMetadataChanges:!0,La:!0});return em(i,m)}(await xm(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Ic(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const La=new Map;/**
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
 */function Rm(n,e,t){if(!t)throw new N(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Pm(n,e,t,r){if(e===!0&&r===!0)throw new N(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Na(n){if(!M.isDocumentKey(n))throw new N(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Io(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function kn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new N(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Io(n);throw new N(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const Tc="firestore.googleapis.com",Ma=!0;class Oa{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new N(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tc,this.ssl=Ma}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ma;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=nc;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<np)throw new N(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ic((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class To{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new N(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oa(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kd;switch(r.type){case"firstParty":return new Nd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=La.get(t);r&&(L("ComponentProvider","Removing Datastore"),La.delete(t),r.terminate())}(this),Promise.resolve()}}function km(n,e,t,r={}){var s;n=kn(n,To);const i=Xs(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${e}:${t}`;i&&(sh(`https://${h}`),lh("Firestore",!0)),a.host!==Tc&&a.host!==h&&Bt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:h,ssl:i,emulatorOptions:r});if(!mr(d,c)&&(n._setSettings(d),r.mockUserToken)){let p,m;if(typeof r.mockUserToken=="string")p=r.mockUserToken,m=be.MOCK_USER;else{p=oh(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new N(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new be(v)}n._authCredentials=new Dd(new pl(p,m))}}/**
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
 */class So{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new So(this.firestore,e,this._query)}}class Pe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Dn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}}class Dn extends So{constructor(e,t,r){super(e,t,so(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new M(e))}withConverter(e){return new Dn(this.firestore,e,this._path)}}function Sc(n,e,...t){if(n=gr(n),arguments.length===1&&(e=gl.newId()),Rm("doc","path",e),n instanceof To){const r=re.fromString(e,...t);return Na(r),new Pe(n,null,new M(r))}{if(!(n instanceof Pe||n instanceof Dn))throw new N(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(re.fromString(e,...t));return Na(r),new Pe(n.firestore,n instanceof Dn?n.converter:null,new M(r))}}/**
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
 */const Ba="AsyncQueue";class Fa{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new ic(this,"async_queue_retry"),this.ec=()=>{const r=Ts();r&&L(Ba,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const t=Ts();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=Ts();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const t=new st;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Kt(e))throw e;L(Ba,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const t=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Ke("INTERNAL UNHANDLED ERROR: ",Ua(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=t,t}enqueueAfterDelay(e,t,r){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const s=vo.createAndSchedule(this,e,t,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&B(47125,{_c:Ua(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Hu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function Ua(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ao extends To{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Fa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fa(e),this._firestoreClient=void 0,await e}}}function Dm(n,e){const t=typeof n=="object"?n:vd(),r=typeof n=="string"?n:wr,s=fd(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nh("firestore");i&&km(s,...i)}return s}function Ac(n){if(n._terminated)throw new N(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Vm(n),n._firestoreClient}function Vm(n){var e,t,r;const s=n._freezeSettings(),i=function(c,h,d,p){return new Xd(c,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Ic(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Tm(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
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
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(pe.fromBase64String(e))}catch(t){throw new N(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new zt(pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new N(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class xc{constructor(e){this._methodName=e}}/**
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
 */class Co{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
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
 */class Ro{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Lm=/^__.*__$/;class Nm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Vn(e,this.data,t,this.fieldTransforms)}}function Cc(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{hc:n})}}class Po{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Po(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Pr(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(Cc(this.hc)&&Lm.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class Mm{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||$r(e)}gc(e,t,r,s=!1){return new Po({hc:e,methodName:t,fc:r,path:fe.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Om(n){const e=n._freezeSettings(),t=$r(n._databaseId);return new Mm(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Bm(n,e,t,r,s,i={}){const a=n.gc(i.merge||i.mergeFields?2:0,e,t,s);Dc("Data must be an object, but it was:",a,r);const c=Pc(r,a);let h,d;if(i.merge)h=new De(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const v=Fm(e,m,t);if(!a.contains(v))throw new N(k.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);$m(p,v)||p.push(v)}h=new De(p),d=a.fieldTransforms.filter(m=>h.covers(m.field))}else h=null,d=a.fieldTransforms;return new Nm(new Re(c),h,d)}function Rc(n,e){if(kc(n=gr(n)))return Dc("Unsupported field value:",e,n),Pc(n,e);if(n instanceof xc)return function(r,s){if(!Cc(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let h=Rc(c,s.Rc(a));h==null&&(h={nullValue:"NULL_VALUE"}),i.push(h),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=gr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ae.fromDate(r);return{timestampValue:Ar(s.serializer,i)}}if(r instanceof ae){const i=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ar(s.serializer,i)}}if(r instanceof Co)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:Ql(s.serializer,r._byteString)};if(r instanceof Pe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ro)return function(a,c){return{mapValue:{fields:{[Tl]:{stringValue:Sl},[br]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw c.Vc("VectorValues must only contain numeric values.");return oo(c.serializer,d)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${Io(r)}`)}(n,e)}function Pc(n,e){const t={};return vl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_t(n,(r,s)=>{const i=Rc(s,e.Ic(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function kc(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof Co||n instanceof zt||n instanceof Pe||n instanceof xc||n instanceof Ro)}function Dc(n,e,t){if(!kc(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Io(t);throw r==="an object"?e.Vc(n+" a custom object"):e.Vc(n+" "+r)}}function Fm(n,e,t){if((e=gr(e))instanceof xo)return e._internalPath;if(typeof e=="string")return Vc(n,e);throw Pr("Field path arguments must be of type string or ",n,!1,void 0,t)}const Um=new RegExp("[~\\*/\\[\\]]");function Vc(n,e,t){if(e.search(Um)>=0)throw Pr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xo(...e.split("."))._internalPath}catch{throw Pr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Pr(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(i||a)&&(h+=" (found",i&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(k.INVALID_ARGUMENT,c+n+h)}function $m(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Lc{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Nc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qm extends Lc{data(){return super.data()}}function Nc(n,e){return typeof e=="string"?Vc(n,e):e instanceof xo?e._internalPath:e._delegate._internalPath}class jm{convertValue(e,t="none"){switch(lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(at(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _t(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[br].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>se(a.doubleValue));return new Ro(i)}convertGeoPoint(e){return new Co(se(e.latitude),se(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Lr(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(An(e));default:return null}}convertTimestamp(e){const t=it(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=re.fromString(e);X(tc(r),9688,{name:e});const s=new xn(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||Ke(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function zm(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
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
 */class Hm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mc extends Lc{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Nc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Gm extends Mc{data(e={}){return super.data(e)}}/**
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
 */function Wm(n){n=kn(n,Pe);const e=kn(n.firestore,Ao);return Cm(Ac(e),n._key).then(t=>Jm(e,n,t))}class Km extends jm{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,t)}}function Qm(n,e,t){n=kn(n,Pe);const r=kn(n.firestore,Ao),s=zm(n.converter,e);return Xm(r,[Bm(Om(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,He.none())])}function Xm(n,e){return function(r,s){const i=new st;return r.asyncQueue.enqueueAndForget(async()=>pm(await Am(r),s,i)),i.promise}(Ac(n),e)}function Jm(n,e,t){const r=t.docs.get(e._key),s=new Km(n);return new Mc(n,s,e._key,r,new Hm(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Gt=s})(yd),vr(new In("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ao(new Vd(r.getProvider("auth-internal")),new Md(a,r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xn(d.options.projectId,p)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Lt(Gi,Wi,e),Lt(Gi,Wi,"esm2017")})();const Oc={apiKey:"AIzaSyCdNoC5xt3zkMpB5YNmx2spRsiBMiJl5Uo",authDomain:"checkmate-enova.firebaseapp.com",projectId:"checkmate-enova",storageBucket:"checkmate-enova.firebasestorage.app",messagingSenderId:"1036780232884",appId:"1:1036780232884:web:689229ef07859db22e77e1"},Ym=sl(Oc),Bc=Dm(Ym),Fc="settings",Zm={"Back Warehouse":["In Stock","Faulty","RMA","Reserved","Demo","Loaner"],"Enova Warehouse":["In Stock","Faulty","RMA","Reserved","Demo","Loaner"],"Contractor/Technician":["In Stock","Reserved","Loaner"],"Customer Stock":["Installed (Wevo)","Installed (Retail)","Faulty"],Public:["Installed","Decommissioned","Faulty"]};async function Ve(){const n={locations:[{name:"Back Warehouse",parent:null},{name:"Transworld - Shoham",parent:"Back Warehouse"},{name:"Transworld - Ashdod",parent:"Back Warehouse"},{name:"Enova Warehouse",parent:null},{name:"Level - 4 Storage",parent:"Enova Warehouse"},{name:"Office Storage",parent:"Enova Warehouse"},{name:"Lab",parent:"Enova Warehouse"},{name:"Contractor/Technician",parent:null},{name:"Customer Stock",parent:null},{name:"Installed (Wevo)",parent:"Customer Stock"},{name:"Installed (Retail)",parent:"Customer Stock"},{name:"Public",parent:null},{name:"Public Chargers",parent:"Public"},{name:"Factory",parent:null},{name:"Shipping",parent:null},{name:"Port",parent:null},{name:"Lost",parent:null},{name:"Unknown",parent:"Lost"}],statuses:["In Stock","Faulty","RMA","Reserved","Demo","Loaner","Installed (Wevo)","Installed (Retail)","Installed","Decommissioned","Unknown"],vendors:["Teison","ABL","EnelX","Vestel"],contractors:[{company:"Alpha Charge",name:"Dan Hen",phone:"0502329696"}]};try{const e=Sc(Bc,"appdata",Fc),t=await Wm(e);if(t.exists()){const r=t.data();return{locations:r.locations||n.locations,statuses:r.statuses||n.statuses,vendors:r.vendors||n.vendors,contractors:r.contractors||n.contractors}}else return n}catch(e){return console.error("Error loading settings from Firestore:",e),n}}async function Fe(n){try{await Qm(Sc(Bc,"appdata",Fc),n)}catch(e){console.error("Error saving settings to Firestore:",e)}}function eg(n,e){const t={};let r=0,s=0,i=0;return n.forEach(a=>{t[a.status]=(t[a.status]||0)+1,a.contractor&&r++,(a.location&&typeof a.location=="string"&&a.location.toLowerCase().includes("public")||typeof a.status=="string"&&a.status.toLowerCase().includes("public"))&&i++,a.assignedDate&&Date.now()-new Date(a.assignedDate).getTime()>14*24*60*60*1e3&&s++}),{total:n.length,byStatus:t,contractorCount:r,overdueCount:s,publicCount:i,nextShipment:e.length?Math.min(...e.map(a=>new Date(a.date).getTime())):null}}function $a(n,e,t,r,s){const i=document.createElement("li");return i.className="flex items-center justify-between px-3 py-2 rounded bg-green-200 dark:bg-gray-700 hover:bg-green-300 dark:hover:bg-gray-600 transition group cursor-grab text-gray-900 dark:text-gray-100",i.draggable=!0,i.innerHTML=`
  <span>${n}</span>
  <div class="flex gap-2 items-center">
    <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
    <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
    <span class="drag-icon cursor-grab text-gray-400 group-hover:text-gray-200 transition">&#9776;</span>
  </div>
  `,i.addEventListener("dragstart",a=>{a.dataTransfer.setData("index",e),a.dataTransfer.setData("listType",t)}),i.addEventListener("dragover",a=>a.preventDefault()),i.addEventListener("drop",a=>{a.preventDefault();const c=+a.dataTransfer.getData("index");a.dataTransfer.getData("listType")===t&&c!==e&&tg(t,c,e)}),i.querySelector(".edit-btn").onclick=()=>r(e),i.querySelector(".delete-btn").onclick=()=>s(e),i}function Uc(n,e=""){return new Promise(t=>{const r=document.getElementById("entryDialog");r.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${n}</h3>
        <input id="entryInput" type="text" class="border px-2 py-1 rounded" value="${e}" required autofocus>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `,r.showModal();const s=r.querySelector("form");s.querySelector('button[value="cancel"]').onclick=()=>{r.close(),t(void 0)},s.onsubmit=i=>{i.preventDefault(),t(r.querySelector("#entryInput").value.trim()),r.close()}})}function $c(n){return new Promise(e=>{const t=document.getElementById("confirmDialog");t.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4">
        <p>${n}</p>
        <div class="flex justify-end gap-2">
          <button value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </form>
    `,t.showModal(),t.querySelector("form").onsubmit=r=>{r.preventDefault(),e(document.activeElement.value==="ok"),t.close()}})}let Q;function Ge(n,e){const t=document.getElementById(e);t.innerHTML="",n==="locations"?Q[n].forEach((r,s)=>{let i=typeof r=="object"&&r.parent?`<span class="text-xs text-gray-500 ml-2">(${r.parent})</span>`:"";t.appendChild($a((typeof r=="object"?r.name:r)+i,s,n,a=>qa(n,a),a=>ja(n,a)))}):Q[n].forEach((r,s)=>{t.appendChild($a(r,s,n,i=>qa(n,i),i=>ja(n,i)))})}async function As(n,e,t){n==="locations"?qc("Add Location").then(async({value:r,parent:s})=>{!r||!s||(Array.isArray(Q[n])||(Q[n]=[]),Q[n].push({name:r,parent:s}),await Fe(Q),Ge(n,e),W(t+" added!","green"))}):Uc(`Add ${t}`).then(async r=>{r&&(Array.isArray(Q[n])||(Q[n]=[]),Q[n].push(r),await Fe(Q),Ge(n,e),W(t+" added!","green"))})}function qc(n){const e=Q.locations.map(t=>t.name);return new Promise(t=>{const r=document.getElementById("entryDialog");r.innerHTML=`
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
      `,r.showModal();const s=r.querySelector("form");s.querySelector('button[value="cancel"]').onclick=()=>{r.close(),t(void 0)},s.onsubmit=i=>{i.preventDefault();const a=r.querySelector("#entryInput").value.trim(),c=r.querySelector("#parentSelect").value;!a||!c||(r.close(),t({value:a,parent:c}))}})}async function qa(n,e){n==="locations"?qc("Edit Location").then(async({value:t,parent:r})=>{!t||!r||(Q[n][e]={name:t,parent:r},await Fe(Q),Ge(n,kr(n)),W("Location updated!","blue"))}):Uc("Edit",Q[n][e]).then(async t=>{t&&(Q[n][e]=t,await Fe(Q),Ge(n,kr(n)),W("Item updated!","blue"))})}async function ja(n,e){$c("Delete this item?").then(async t=>{t&&(Q[n].splice(e,1),await Fe(Q),Ge(n,kr(n)),W("Item deleted!","red"))})}async function tg(n,e,t){const r=Q[n],[s]=r.splice(e,1);r.splice(t,0,s),await Fe(Q),Ge(n,kr(n))}function kr(n){return n==="locations"?"locList":n==="statuses"?"statList":"vendorList"}function zr(){const n=document.getElementById("contractorList");n.innerHTML="",Array.isArray(Q.contractors)&&Q.contractors.forEach((e,t)=>{const r=document.createElement("li");r.className="flex items-center justify-between px-3 py-2 rounded bg-cyan-200 dark:bg-gray-700 hover:bg-cyan-300 dark:hover:bg-gray-600 transition group",r.innerHTML=`
      <div>
        <span class="font-semibold">${e.name}</span>
        <span class="text-xs text-gray-700 dark:text-gray-300 ml-2">(${e.company})</span>
        <span class="text-xs text-gray-500 ml-2">${e.phone}</span>
      </div>
      <div class="flex gap-2 items-center">
        <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
        <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
      </div>
    `,r.querySelector(".edit-btn").onclick=()=>rg(t),r.querySelector(".delete-btn").onclick=()=>sg(t),n.appendChild(r)})}async function ng(){jc().then(async n=>{n&&(Q.contractors.push({id:Date.now(),name:n.name,company:n.company,phone:n.phone}),await Fe(Q),zr(),W("Contractor added!","green"))})}async function rg(n){const e=Q.contractors[n];jc(e).then(async t=>{t&&(Q.contractors[n]={...e,...t},await Fe(Q),zr(),W("Contractor updated!","blue"))})}async function sg(n){$c("Delete this contractor?").then(async e=>{e&&(Q.contractors.splice(n,1),await Fe(Q),zr(),W("Contractor deleted!","red"))})}function jc(n={}){return new Promise(e=>{const t=document.getElementById("entryDialog");t.innerHTML=`
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
    `,t.showModal();const r=t.querySelector("form");r.querySelector('button[value="cancel"]').onclick=()=>{t.close(),e(void 0)},r.onsubmit=s=>{s.preventDefault(),e({name:t.querySelector("#contractorName").value.trim(),company:t.querySelector("#contractorCompany").value.trim(),phone:t.querySelector("#contractorPhone").value.trim()}),t.close()}})}async function og(){Q=await Ve(),Ge("locations","locList"),Ge("statuses","statList"),Ge("vendors","vendorList"),zr(),document.getElementById("addContractorBtn").onclick=ng,document.getElementById("addLocBtn").onclick=()=>As("locations","locList","Location"),document.getElementById("addStatBtn").onclick=()=>As("statuses","statList","Status"),document.getElementById("addVendorBtn").onclick=()=>As("vendors","vendorList","Vendor")}const ig=Object.freeze(Object.defineProperty({__proto__:null,allowedStatusesByLocation:Zm,firebaseConfig:Oc,getDashboardStats:eg,initSettings:og,loadSettings:Ve,saveSettings:Fe},Symbol.toStringTag,{value:"Module"}));window.selectedUnits=[];window.inventoryPage=1;window.inventoryPageSize=30;const ar={"Back Warehouse":{bg:"#f1f5ff",color:"#3b4252"},"Technician/Contractor":{bg:"#f0fdf4",color:"#166534"},Customer:{bg:"#fef9c3",color:"#92400e"},Public:{bg:"#fce7f3",color:"#8b5cf6"},"Back Warehouse - Container 1":{bg:"#def7ec",color:"#047857"},"Back Warehouse - Container 2":{bg:"#fde2e4",color:"#b91c1c"}};function za(n){if(!n)return{bg:"#f3f4f6",color:"#1f2937"};let e=n.trim();if(ar[e])return ar[e];for(let t in ar)if(e.startsWith(t))return ar[t];return{bg:"#f3f4f6",color:"#1f2937"}}const ag={"In Stock":{bg:"#e0f7fa",color:"#00838f"},Installed:{bg:"#e1ffe6",color:"#1b5e20"},Reserved:{bg:"#fff9c4",color:"#827717"},Faulty:{bg:"#ffebee",color:"#c62828"},RMA:{bg:"#e1bee7",color:"#6a1b9a"},Demo:{bg:"#e3f2fd",color:"#1565c0"},Loaner:{bg:"#f3e5f5",color:"#4527a0"},Decommissioned:{bg:"#cfd8dc",color:"#37474f"},Lost:{bg:"#ffe0b2",color:"#ef6c00"}};function Ha(n){return ag[n]||{bg:"#ececec",color:"#888"}}function zc(n,e,t){return n?!!(e.map(r=>r.name).includes(n)||n!=="Back Warehouse"&&!t.includes(n)):!1}function ko(){const n=Ve(),e=(n.contractors||[]).map(t=>({name:t.name,parent:"Contractor/Technician",isContractor:!0,company:t.company,phone:t.phone,id:t.id}));return[...n.locations||[],...e]}function me(){return JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]")}function xe(n){localStorage.setItem("cm_inventory_v1",JSON.stringify(n))}function It(){return JSON.parse(localStorage.getItem("cm_audit_v1")||"[]")}function Tt(n){localStorage.setItem("cm_audit_v1",JSON.stringify(n))}function Ue(){return localStorage.getItem("cm_user")||"Admin"}function xs(n,e){n&&(n.onmouseenter=t=>{const r=document.getElementById("hoverLegend");if(!r)return;r.textContent=e;const s=n.getBoundingClientRect();r.style.left=s.left-r.offsetWidth-16+"px",r.style.top=s.top+s.height/2-r.offsetHeight/2+"px",r.classList.remove("hidden"),r.classList.add("show")},n.onmousemove=t=>{const r=document.getElementById("hoverLegend");if(!r)return;const s=n.getBoundingClientRect();r.style.left=s.left-r.offsetWidth-16+"px",r.style.top=s.top+s.height/2-r.offsetHeight/2+"px"},n.onmouseleave=()=>{const t=document.getElementById("hoverLegend");t&&(t.classList.remove("show"),t.classList.add("hidden"))})}let ee=[];window.openBulkAddDialog=function(){const n=Ve(),e=document.getElementById("actionDialog");e.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-full sm:w-[32rem] max-w-2xl">
        <h3 class="font-bold mb-2">Bulk Add Units</h3>
        <div class="text-sm text-gray-600 mb-2">
          Paste columns: <b>Model</b>, <b>Charger ID, Serial, SIM Number</b> (one per line)<br>
          <b>Example:</b> SMART HOME MINI WALLBOX 5m Cable, 0312108101120001,TSAC03-24120109,89354080012345678901
        </div>
        <label>Default Location:
          <select id="bulkLocation" class="border px-2 py-1 rounded w-full">
          ${(n.locations||[]).map(t=>`<option value="${t.name}" ${t.name==="Back Warehouse"?"selected":""}>${t.name}</option>`).join("")}
          </select>
        </label>
        <label>Default Status:
          <select id="bulkStatus" class="border px-2 py-1 rounded w-full">
          ${(n.statuses||[]).map(t=>`<option value="${t}" ${t==="In Stock"?"selected":""}>${t}</option>`).join("")}
          </select>
        </label>
        <textarea id="bulkText" rows="7" class="border px-2 py-1 rounded w-full" placeholder="Paste here"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Add All</button>
        </div>
      </form>
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=t=>{t.preventDefault(),e.close()},e.querySelector("form").onsubmit=t=>{t.preventDefault();const r=e.querySelector("#bulkText").value.trim().split(`
`),s=e.querySelector("#bulkLocation").value,i=e.querySelector("#bulkStatus").value;let a=me(),c=0,h=new Set(a.map(d=>d.chargerId));for(let d of r){let[p,m,v,A]=d.split(/\t|,/).map(S=>S==null?void 0:S.trim());!m||h.has(m)||(h.add(m),a.push({chargerId:m,chargerSerial:v||"",simNumber:A||"",model:p||"",product:p||"",location:s,status:i,assigned:!1,created:new Date().toISOString(),addedBy:Ue(),lastAction:new Date().toISOString(),notes:""}),c++)}xe(a),W(`Bulk added ${c} units`,"green"),e.close(),ee=a,Se(document.getElementById("main-content"))}};window.bulkDelete=function(){if(!Hr())return;if(!window.selectedUnits||!window.selectedUnits.length){W("No units selected","red");return}if(!confirm(`Are you sure you want to delete ${window.selectedUnits.length} unit(s)?`))return;let n=me();const e=n.length;n=n.filter(r=>!window.selectedUnits.includes(r.chargerId)),xe(n);const t=It();window.selectedUnits.forEach(r=>{t.push({date:new Date().toISOString(),action:"Bulk Delete",chargerId:r,user:Ue()})}),Tt(t),W(`Deleted ${e-n.length} unit(s)`,"red"),window.selectedUnits=[],ee=n,Se(document.getElementById("main-content"))};window.clearBulkSelection=function(){window.selectedUnits=[],ze(),fr()};window.toggleRowMenu=function(n){document.querySelectorAll(".table-dot-menu").forEach((t,r)=>{r!==n&&t.classList.remove("show")});const e=document.getElementById(`row-menu-${n}`);e&&e.parentNode.classList.toggle("show"),document.addEventListener("click",function t(r){e.contains(r.target)||(e.parentNode.classList.remove("show"),document.removeEventListener("click",t))})};window.openCreateShipmentDialog=function(){typeof window.openShipmentDialog=="function"?window.openShipmentDialog():typeof openShipmentDialog=="function"?openShipmentDialog():W("Shipment dialog function not found","red")};function Hc(){if(window.innerWidth<640){["addItemBtn","bulkAddBtn","addShipmentBtn"].forEach(e=>{const t=document.getElementById(e);t&&t.remove()});return}if(document.getElementById("addItemBtn")||document.getElementById("bulkAddBtn")||document.getElementById("addShipmentBtn"))return;if(document.body.insertAdjacentHTML("beforeend",`
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
  `),!document.getElementById("barcodeScanDialog")){const e=document.createElement("dialog");e.id="barcodeScanDialog",e.className="rounded-xl p-4",document.body.appendChild(e)}}document.addEventListener("DOMContentLoaded",()=>{if(document.body.dataset.page==="inventory"){window.innerWidth>=640&&Hc();const n=document.getElementById("addItemBtn"),e=document.getElementById("bulkAddBtn"),t=document.getElementById("addShipmentBtn");ee=me(),Se(document.getElementById("main-content")),n&&(n.onclick=Wc),e&&(e.onclick=openBulkAddDialog),t&&(t.onclick=openCreateShipmentDialog),setTimeout(()=>{xs(n,"Add single charger"),xs(e,"Bulk add chargers"),xs(t,"Create shipment")},10);const r=sessionStorage.getItem("pendingInventoryAction");if(r){const{action:s,unit:i}=JSON.parse(r);sessionStorage.removeItem("pendingInventoryAction"),setTimeout(()=>{s==="move"&&typeof window.openMoveDialog=="function"&&window.openMoveDialog(i),s==="edit"&&typeof window.openEditDialog=="function"&&window.openEditDialog(i),s==="view"&&typeof window.openDetailsDialog=="function"&&window.openDetailsDialog(i)},300)}}});function Se(n){if(window.innerWidth<640){cg(n,ee);return}n.innerHTML=`
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
    `,n.querySelector("#searchInput").oninput=()=>{window.inventoryPage=1,ze()},n.querySelector("#filterStatus").onchange=()=>{window.inventoryPage=1,ze()},n.querySelector("#filterLocation").onchange=()=>{window.inventoryPage=1,ze()},n.querySelector("#downloadCSV").onclick=dg,n.querySelector("#downloadExcel").onclick=fg,ze()}window.addEventListener("resize",()=>{document.body.dataset.page==="inventory"&&(Hc(),Se(document.getElementById("main-content")))});function ze(){const n=document.getElementById("main-content"),e=n.querySelector("#searchInput").value.toLowerCase(),t=n.querySelector("#filterStatus").value,r=n.querySelector("#filterLocation").value,s=n.querySelector("#inventoryTableBody");let i=ee;e&&(i=i.filter(S=>[S.chargerId,S.chargerSerial,S.simNumber,S.product,S.model,S.status,S.location,S.notes,S.lastAction,S.addedBy,S.invoiceNumber].some(P=>(P||"").toLowerCase().includes(e)))),t&&(i=i.filter(S=>S.status===t)),r&&(i=i.filter(S=>S.location===r));const a=window.inventoryPageSize,c=window.inventoryPage,h=(c-1)*a,d=h+a,p=i.slice(h,d);window.selectedUnits=window.selectedUnits.filter(S=>ee.some(C=>C.chargerId===S)),s.innerHTML=p.map((S,C)=>`
      <tr class="inv-row${window.selectedUnits.includes(S.chargerId)?" selected":""}" data-idx="${C}" data-id="${S.chargerId}">
        <td class="p-2 border-b text-center">
          <input type="checkbox" data-chargerid="${S.chargerId}" ${window.selectedUnits.includes(S.chargerId)?"checked":""}>
        </td>
        <td class="p-2 border-b table-cell">${S.model||""}</td>
        <td class="p-2 border-b table-cell">${S.chargerId}</td>
        <td class="p-2 border-b table-cell">${S.chargerSerial||""}</td>
        <td class="p-2 border-b table-cell">${S.simNumber||""}</td>
        <td class="p-2 border-b table-cell">
          <span class="rounded-full px-3 py-1 text-xs font-semibold"
            style="
              background:${Ha(S.status).bg};
              color:${Ha(S.status).color};
              display:inline-block;
              min-width:86px;
              text-align:center;
              letter-spacing:0.03em;
              box-shadow:0 1px 3px 0 #0001;
            "
          >${S.status}</span>
        </td>
        <td class="p-2 border-b table-cell">
          <span class="rounded-full px-3 py-1 text-xs font-semibold"
            style="
              background:${za(S.location).bg};
              color:${za(S.location).color};
              min-width: 86px;
              display:inline-block;
              text-align:center;
              letter-spacing:0.03em;
              box-shadow:0 1px 3px 0 #0001;
            "
          >${S.location}</span>
        </td>
        <td class="p-2 border-b table-cell">${new Date(S.lastAction).toLocaleString()}</td>
        <td class="p-2 border-b table-cell">
          <div class="table-dot-menu" data-idx="${C}">
            <button class="px-2 py-1 text-lg font-bold" onclick="event.stopPropagation();toggleRowMenu(${C})">⋮</button>
            <div class="table-dot-menu-content" id="row-menu-${C}">
              <button onclick='openDetailsDialog(${JSON.stringify(S).replace(/"/g,"&quot;")})'>Details</button>
              <button onclick='openMoveDialog(${JSON.stringify(S).replace(/"/g,"&quot;")})'>Move</button>
              <button onclick='openStatusDialog(${JSON.stringify(S).replace(/"/g,"&quot;")})'>Change Status</button>
              <button onclick='openEditDialog(${JSON.stringify(S).replace(/"/g,"&quot;")})'>Edit</button>
              ${Hr()?`<button class="delete" onclick='deleteUnit("${S.chargerId}")'>Delete</button>`:""}
            </div>
          </div>
        </td>
      </tr>
    `).join(""),hg(),s.querySelectorAll(".table-dot-menu > button").forEach((S,C)=>{S.onclick=P=>{P.stopPropagation(),document.querySelectorAll(".table-dot-menu").forEach((O,F)=>{F!==C&&O.classList.remove("show")}),S.parentNode.classList.toggle("show"),document.addEventListener("click",function O(F){S.parentNode.contains(F.target)||(S.parentNode.classList.remove("show"),document.removeEventListener("click",O))})}}),s.querySelectorAll('input[type="checkbox"]').forEach(S=>{S.onchange=C=>{const P=C.target.dataset.chargerid;C.target.checked?window.selectedUnits.includes(P)||window.selectedUnits.push(P):window.selectedUnits=window.selectedUnits.filter(O=>O!==P),fr(),S.closest("tr").classList.toggle("selected",S.checked)}});const m=n.querySelector("#selectAll");m&&(m.checked=p.length>0&&p.every(S=>window.selectedUnits.includes(S.chargerId)),m.indeterminate=p.some(S=>window.selectedUnits.includes(S.chargerId))&&!m.checked,m.onchange=S=>{S.target.checked?p.forEach(C=>{window.selectedUnits.includes(C.chargerId)||window.selectedUnits.push(C.chargerId)}):window.selectedUnits=window.selectedUnits.filter(C=>!p.some(P=>P.chargerId===C)),ze(),fr()});const v=n.querySelector("#paginationBar"),A=Math.max(1,Math.ceil(i.length/a));v.innerHTML=`
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
    `,n.querySelector("#prevPageBtn").onclick=()=>{window.inventoryPage>1&&(window.inventoryPage--,ze())},n.querySelector("#nextPageBtn").onclick=()=>{window.inventoryPage<A&&(window.inventoryPage++,ze())},n.querySelector("#pageSizeSelect").onchange=S=>{window.inventoryPageSize=parseInt(S.target.value,10),window.inventoryPage=1,ze()},fr()}function lg(){["addItemDialog","actionDialog","shipmentDialog","globalSearchDialog"].forEach(n=>{if(!document.getElementById(n)){const e=document.createElement("dialog");e.id=n,e.className="rounded-xl p-4",document.body.appendChild(e)}})}function cg(n,e){lg(),n.innerHTML=`
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
    `;const t=n.querySelector("#mobileInventoryList");Ga(t,e),n.querySelector("#searchInput").oninput=ug(r=>{const s=r.target.value.toLowerCase(),i=ee.filter(a=>[a.chargerId,a.chargerSerial,a.simNumber,a.product,a.model,a.status,a.location,a.notes].some(c=>(c||"").toLowerCase().includes(s)));Ga(t,i)},250),n.querySelector("#scanBtn").onclick=()=>{openBarcodeScanner(r=>{if(r){const s=ee.find(i=>i.chargerSerial===r||i.chargerId===r);s?openDetailsDialog(s):W("Not found","red")}})},n.querySelector("#fabAdd").onclick=Wc}function ug(n,e){let t=null;return function(...r){clearTimeout(t),t=setTimeout(()=>n.apply(this,r),e)}}function Ga(n,e){n.innerHTML=e.map(t=>`
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
    `).join(""),n.querySelectorAll(".mobile-inv-card").forEach(t=>{let r=null,s=!1;t.addEventListener("touchstart",i=>{r=i.touches[0].clientX,s=!1},{passive:!0}),t.addEventListener("touchmove",i=>{if(r===null)return;const a=i.touches[0].clientX-r;if(a<-50&&!s){s=!0;const c=e.find(h=>h.chargerId===t.dataset.id);c&&window.openEditDialog(c)}else if(a>50&&!s){s=!0;const c=e.find(h=>h.chargerId===t.dataset.id);c&&window.openMoveDialog(c)}},{passive:!0}),t.addEventListener("touchend",()=>{r=null,s=!1})})}function hg(){document.getElementById("main-content").querySelectorAll(".inv-row").forEach(e=>{let t=null,r=!1;e.addEventListener("touchstart",s=>{t=s.touches[0].clientX,r=!1},{passive:!0}),e.addEventListener("touchmove",s=>{if(t===null)return;const i=s.touches[0].clientX-t;if(i<-50&&!r){e.classList.add("swiped");const a=e.dataset.idx,c=document.getElementById(`row-swipe-actions-${a}`);c&&c.classList.remove("hidden"),r=!0}else if(i>50&&!r){e.classList.add("swiped-right"),e.dataset.idx;const a=e.dataset.id,c=ee.find(h=>h.chargerId===a);c&&c.location==="Technician/Contractor"&&openAssignContractorDialog(c),r=!0}},{passive:!0}),e.addEventListener("touchend",()=>{if(t=null,!e.classList.contains("swiped-right")){e.classList.remove("swiped");const s=e.dataset.idx,i=document.getElementById(`row-swipe-actions-${s}`);i&&i.classList.add("hidden")}}),document.addEventListener("touchstart",s=>{if(!e.contains(s.target)){e.classList.remove("swiped","swiped-right");const i=e.dataset.idx,a=document.getElementById(`row-swipe-actions-${i}`);a&&a.classList.add("hidden")}},{passive:!0})})}function fr(){const e=document.getElementById("main-content").querySelector("#bulkActionBar");if(e){if(window.selectedUnits.length===0){e.innerHTML="";return}e.innerHTML=`
        <div class="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg mb-4 shadow">
          <span class="font-semibold">${window.selectedUnits.length} selected</span>
          <button onclick="openBulkMoveDialog()" class="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded">Bulk Move</button>
          <button onclick="openBulkStatusDialog()" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Bulk Status</button>
          ${Hr()?'<button onclick="bulkDelete()" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Bulk Delete</button>':""}
          <button onclick="clearBulkSelection()" class="ml-auto text-gray-500 hover:text-gray-900">Cancel</button>
        </div>
      `}}function dg(){const n=me(),e=["Charger ID","Serial","Status","Location","Last Action"],t=n.map(c=>[c.chargerId,c.chargerSerial,c.status,c.location,c.lastAction]);let r=e.join(",")+`
`+t.map(c=>c.join(",")).join(`
`),s=new Blob([r],{type:"text/csv"}),i=URL.createObjectURL(s),a=document.createElement("a");a.href=i,a.download="inventory.csv",a.click(),URL.revokeObjectURL(i)}async function fg(){const n=me(),e=XLSX.utils.book_new(),t=XLSX.utils.json_to_sheet(n);XLSX.utils.book_append_sheet(e,t,"Inventory"),XLSX.writeFile(e,"inventory.xlsx")}window.openBulkMoveDialog=function(){var c;const n=ee.filter(h=>window.selectedUnits.includes(h.chargerId));if(!n.length)return;const e=document.getElementById("actionDialog"),t=ko(),r=t.filter(h=>h.parent==="Contractor/Technician"),s=["Customer Stock","Public Network Stock"],i=(c=n[0])==null?void 0:c.location;let a="";Vt(i)||s.includes(i)?a=r.map(h=>`<option value="${h.name}">${h.name}${h.isContractor?` (${h.company}, ${h.phone})`:""}</option>`).join(""):zc(i,r,s)?a=t.filter(h=>h.name!==i).map(h=>`<option value="${h.name}">${h.name}${h.parent&&!h.isContractor?` (${h.parent})`:""}${h.isContractor?` (${h.company}, ${h.phone})`:""}</option>`).join(""):a=r.map(h=>`<option value="${h.name}">${h.name}${h.isContractor?` (${h.company}, ${h.phone})`:""}</option>`).join(""),e.innerHTML=`
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
    ${(settings.statuses||[]).map(h=>`<option value="${h}"${unit.status===h?" selected":""}>${h}</option>`).join("")}
  </select>
  <textarea id="moveComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
  <div class="flex justify-between gap-2 mt-3">
    <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
    <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Move</button>
  </div>
</form>
`,e.showModal(),e.querySelector('button[value="cancel"]').onclick=h=>{h.preventDefault(),e.close()},e.querySelector("form").onsubmit=h=>{h.preventDefault();const d=e.querySelector("#moveLoc").value.trim(),p=r.map(C=>C.name);if(!d){e.querySelector("#moveLoc").classList.add("border-red-500"),e.querySelector("#formError").textContent="Select a location.";return}if((Vt(i)||s.includes(i))&&!p.includes(d)){e.querySelector("#formError").textContent="You can only move units from warehouse/installed to a Contractor/Technician location.";return}if((i==="Back Warehouse"||s.includes(i))&&!p.includes(d)){e.querySelector("#formError").textContent="You can only move units from warehouse/installed to a Contractor/Technician location.";return}const m=n.filter(C=>C.location.startsWith("Back Warehouse")&&!C.chargerSerial&&!d.startsWith("Back Warehouse"));if(m.length){e.querySelector("#formError").textContent=`Cannot move ${m.length} unit(s) without serial out of warehouse.`;return}let v=me();const A=[];n.forEach(C=>{const P=v.findIndex(O=>O.chargerId===C.chargerId);P>=0&&(A.push({...v[P]}),v[P].location=d,moveStatus&&(v[P].status=moveStatus),v[P].lastAction=new Date().toISOString(),v[P].notes=e.querySelector("#moveComment").value.trim())}),xe(v);const S=It();n.forEach(C=>{S.push({date:new Date().toISOString(),action:"Bulk Move",chargerId:C.chargerId,chargerSerial:C.chargerSerial,simNumber:C.simNumber,product:C.product,from:C.location,to:d,statusFrom:C.status,statusTo:C.status,user:Ue(),comment:e.querySelector("#moveComment").value.trim()})}),Tt(S),Do("Units moved","blue",()=>{xe(Gc(v,A)),W("Bulk move undone","red"),ee=me(),window.selectedUnits=[],Se(document.getElementById("main-content"))}),e.close(),ee=v,window.selectedUnits=[],Se(document.getElementById("main-content"))}};window.openBulkStatusDialog=function(){const n=ee.filter(s=>selectedUnits.includes(s.chargerId));if(!n.length)return;const e=document.getElementById("actionDialog"),t=Ve().statuses||[];t.filter(s=>!n.every(i=>i.status===s)).map(s=>`<option value="${s}">${s}</option>`).join(""),e.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Change Status (${n.length} Units)</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <label>Set status to:</label>
        <select id="newStatus" required class="border px-2 py-1 rounded">
          <option value="">-- Select Status --</option>
          ${(t||[]).map(s=>`<option value="${s}">${s}</option>`).join("")}
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
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=s=>{s.preventDefault(),e.close()};const r=e.querySelector("#newStatus");r.onchange=()=>{r.value==="Installed"?e.querySelector("#privatePublicSection").style.display="":e.querySelector("#privatePublicSection").style.display="none"},e.querySelector("#privatePublic").onchange=()=>{e.querySelector("#invoiceNumber").style.display=e.querySelector("#privatePublic").value==="Private"?"":"none"},e.querySelector("form").onsubmit=s=>{s.preventDefault();const i=e.querySelector("#newStatus").value.trim();let a=!!i;if(e.querySelector("#formError").textContent="",i==="Installed"&&!e.querySelector("#privatePublic").value&&(e.querySelector("#privatePublic").classList.add("border-red-500"),a=!1),!a){e.querySelector("#formError").textContent="Select all required fields.";return}let c=me();const h=[];n.forEach(p=>{const m=c.findIndex(v=>v.chargerId===p.chargerId);m>=0&&(h.push({...c[m]}),c[m].status=i,c[m].lastAction=new Date().toISOString(),i==="Installed"&&(c[m].location="Customer Stock",c[m].isAsset=e.querySelector("#privatePublic").value==="Public",c[m].invoiceNumber=e.querySelector("#invoiceNumber").value.trim()))}),xe(c);const d=It();n.forEach(p=>{var m;d.push({date:new Date().toISOString(),action:"Bulk Status Change",chargerId:p.chargerId,chargerSerial:p.chargerSerial,simNumber:p.simNumber,product:p.product,from:p.location,to:((m=c.find(v=>v.chargerId===p.chargerId))==null?void 0:m.location)||p.location,statusFrom:p.status,statusTo:i,user:Ue(),comment:e.querySelector("#statusComment").value.trim()})}),Tt(d),Do("Status changed","blue",()=>{xe(Gc(c,h)),W("Bulk status undo","red"),ee=me(),window.selectedUnits=[],Se(document.getElementById("main-content"))}),e.close(),ee=c,window.selectedUnits=[],Se(document.getElementById("main-content"))}};function Gc(n,e){return e.map(t=>t.chargerId),n.map(t=>{const r=e.find(s=>s.chargerId===t.chargerId);return r||t})}function Do(n,e,t){const r=document.getElementById("toast");r.innerHTML=`
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
    `,e.showModal()};window.deleteUnit=function(n){if(!Hr())return;const e=document.getElementById("actionDialog");e.innerHTML=`
      <div class="w-96 p-4">
        <div class="text-xl font-bold mb-2 text-red-700">Delete Unit</div>
        <div class="mb-4">Are you sure you want to delete this item?</div>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="button" value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </div>
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=t=>{t.preventDefault(),e.close()},e.querySelector('button[value="ok"]').onclick=t=>{let r=me();r=r.filter(s=>s.chargerId!==n),xe(r),W("Unit deleted","red"),ee=r,Se(document.getElementById("main-content")),e.close()}};function Hr(){return Ue()==="Admin"}window.openMoveDialog=function(n){const e=document.getElementById("actionDialog"),t=Ve();function r(d){const p=(d.contractors||[]).map(m=>({name:m.name,parent:"Contractor/Technician",isContractor:!0,company:m.company,phone:m.phone,id:m.id}));return[...d.locations||[],...p]}const s=r(t),i=s.filter(d=>d.parent==="Contractor/Technician"),a=["Customer Stock","Public Network Stock"];let c="";const h=n.location;Vt(h)||a.includes(h)?c=i.map(d=>`<option value="${d.name}">${d.name}${d.isContractor?` (${d.company}, ${d.phone})`:""}</option>`).join(""):zc(h,i,a)?c=s.filter(d=>d.name!==h).map(d=>`<option value="${d.name}">${d.name}${d.parent&&!d.isContractor?` (${d.parent})`:""}${d.isContractor?` (${d.company}, ${d.phone})`:""}</option>`).join(""):c=i.map(d=>`<option value="${d.name}">${d.name}${d.isContractor?` (${d.company}, ${d.phone})`:""}</option>`).join(""),e.innerHTML=`
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
      ${t.statuses.map(d=>`<option value="${d}"${n.status===d?" selected":""}>${d}</option>`).join("")}
    </select>
    <textarea id="moveComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Move</button>
    </div>
  </form>
`,e.showModal(),e.querySelector('button[value="cancel"]').onclick=d=>{d.preventDefault(),e.close()},e.querySelector("form").onsubmit=d=>{d.preventDefault();const p=e.querySelector("#moveLoc").value.trim(),m=e.querySelector("#moveStatus").value.trim(),v=i.map(P=>P.name);if(!p){e.querySelector("#moveLoc").classList.add("border-red-500"),e.querySelector("#formError").textContent="Select a location.";return}if(!m){e.querySelector("#moveStatus").classList.add("border-red-500"),e.querySelector("#formError").textContent="Select a status.";return}if((Vt(n.location)||a.includes(n.location))&&!v.includes(p)){e.querySelector("#formError").textContent="You can only move units from warehouse/installed to a Contractor/Technician location.";return}if(Vt(n.location)&&!n.chargerSerial&&!Vt(p)){e.querySelector("#formError").textContent="Cannot move unit without serial out of warehouse.";return}let A=me();const S=A.findIndex(P=>P.chargerId===n.chargerId);S>=0&&(A[S].location=p,A[S].status=m,A[S].lastAction=new Date().toISOString(),A[S].notes=e.querySelector("#moveComment").value.trim()),xe(A);const C=It();C.push({date:new Date().toISOString(),action:"Move",chargerId:n.chargerId,chargerSerial:n.chargerSerial,simNumber:n.simNumber,product:n.product,from:n.location,to:p,statusFrom:n.status,statusTo:m,user:Ue(),comment:e.querySelector("#moveComment").value.trim()}),Tt(C),W("Unit moved","blue"),e.close(),ee=A,Se(document.getElementById("main-content"))}};function Vt(n){return/warehouse|stock/i.test(n)}function Wa(n){const e=Ve();if(!e.contractors)return"";const t=e.contractors.find(r=>n.toLowerCase().includes(r.name.toLowerCase()));return t?` (${t.phone})`:""}window.openAssignContractorDialog=function(n){const e=document.getElementById("actionDialog"),t=Ve().contractors||[];e.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Assign Unit ${n.chargerId} to Contractor</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <select id="contractor" required class="border px-2 py-1 rounded">
          <option value="">-- Select Contractor --</option>
          ${(t||[]).map(r=>`<option value="${r.id}">${r.name} (${r.company})</option>`).join("")}
        </select>
        <textarea id="assignComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Assign</button>
        </div>
      </form>
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=r=>{r.preventDefault(),e.close()},e.querySelector("form").onsubmit=r=>{r.preventDefault();const s=e.querySelector("#contractor").value.trim();if(!s){e.querySelector("#formError").textContent="Select a contractor.";return}const i=t.find(d=>d.id===s);if(!i){e.querySelector("#formError").textContent="Contractor not found.";return}let a=me();const c=a.findIndex(d=>d.chargerId===n.chargerId);c>=0&&(a[c].location=i.name,a[c].contractorId=i.id,a[c].status="Reserved",a[c].lastAction=new Date().toISOString()),xe(a);const h=It();h.push({date:new Date().toISOString(),action:"Assign to Contractor",chargerId:n.chargerId,chargerSerial:n.chargerSerial,simNumber:n.simNumber,product:n.product,from:n.location,to:`Assigned to ${i.name}`,contractorId:i.id,contractorName:i.name,statusFrom:n.status,statusTo:"Reserved",user:Ue(),comment:e.querySelector("#assignComment").value.trim()}),Tt(h),W("Unit assigned to contractor","blue"),e.close(),ee=a,Se(document.getElementById("main-content"))}};window.openEditDialog=function(n){const e=document.getElementById("actionDialog"),t=ko(),r=Ve().statuses;e.innerHTML=`
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
          ${c.name}${Wa(c.name)}
        </option>`).join(""):s.map(c=>c.name).includes(a)?t.filter(c=>c.name==="Back Warehouse"||i.includes(c.name)).map(c=>`<option value="${c.name}"${n.location===c.name?" selected":""}>
            ${c.name}${c.parent?` (${c.parent})`:""}
          </option>`).join(""):s.map(c=>`<option value="${c.name}"${n.location===c.name?" selected":""}>
          ${c.name}${Wa(c.name)}
        </option>`).join("")})()}
</select>
        <select id="editStatus" required class="border px-2 py-1 rounded">
          <option value="">-- Select Status --</option>
          ${(r||[]).map(s=>`<option value="${s}"${n.status===s?" selected":""}>${s}</option>`).join("")}
        </select>
        <textarea id="editNotes" class="border px-2 py-1 rounded" placeholder="Notes (optional)">${n.notes||""}</textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=s=>{s.preventDefault(),e.close()},e.querySelector("form").onsubmit=s=>{s.preventDefault();const i=e.querySelector("#editChargerSerial").value.trim(),a=e.querySelector("#editSimNumber").value.trim(),c=e.querySelector("#editProduct").value.trim(),h=e.querySelector("#editModel").value.trim(),d=e.querySelector("#editLocation").value.trim()||n.location,p=e.querySelector("#editStatus").value.trim()||n.status,m=e.querySelector("#editNotes").value.trim();if(!d||!p){e.querySelector("#formError").textContent="Location and status are required.";return}let v=me();const A=v.findIndex(P=>P.chargerId===n.chargerId);if(A<0){W("Unit not found","red"),e.close();return}const S={...v[A]};v[A]={...v[A],chargerSerial:i,simNumber:a,product:c,model:h,location:d,status:p,notes:m,lastAction:new Date().toISOString()},xe(v);const C=It();C.push({date:new Date().toISOString(),action:"Edit Unit",chargerId:n.chargerId,user:Ue(),changes:{from:S,to:v[A]}}),Tt(C),Do("Unit updated","blue",()=>{v[A]=S,xe(v),W("Edit undone","red"),ee=me(),Se(document.getElementById("main-content"))}),e.close(),ee=v,Se(document.getElementById("main-content"))}};window.openGlobalSearchDialog=function(){if(window.innerWidth<640){W("Global search is not available on mobile. Use the search box above.","blue");return}const n=document.getElementById("globalSearchDialog");n.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4 w-[30rem] max-w-full">
        <h3 class="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Global Search</h3>
        <input id="globalSearchInput" type="text" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800"
          placeholder="Type anything... (product, serial, shipment, vendor)" autofocus>
        <div id="globalSearchResults" class="max-h-60 overflow-y-auto mt-2"></div>
        <div class="flex justify-end gap-2 mt-2">
          <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Close</button>
        </div>
      </form>
    `,n.showModal(),n.querySelector('button[value="cancel"]').onclick=t=>{t.preventDefault(),n.close()};const e=n.querySelector("#globalSearchInput");e.oninput=function(){performGlobalSearch(e.value.trim())},setTimeout(()=>{e.focus()},50),performGlobalSearch("")};window.performGlobalSearch=function(n){const e=document.getElementById("globalSearchResults");if(!e)return;const t=JSON.parse(localStorage.getItem("cm_shipments_v1")||"[]"),r=JSON.parse(localStorage.getItem("cm_inventory_v1")||"[]"),s=JSON.parse(localStorage.getItem("cm_products_v1")||"[]");if(!n){e.innerHTML='<div class="text-gray-400 text-center py-6">Start typing to search...</div>';return}const i=n.toLowerCase(),a=t.filter(d=>(d.shipmentId||"").toLowerCase().includes(i)||(d.vendor||"").toLowerCase().includes(i)||(d.incoterm||"").toLowerCase().includes(i)||Array.isArray(d.products)&&d.products.some(p=>(p.model||"").toLowerCase().includes(i))),c=r.filter(d=>[d.chargerId,d.chargerSerial,d.simNumber,d.product,d.model,d.status,d.location,d.notes,d.lastAction,d.addedBy,d.invoiceNumber].some(m=>(m||"").toLowerCase().includes(i))),h=s.filter(d=>(d.name||"").toLowerCase().includes(i)||(d.hsCode||"").toLowerCase().includes(i)||(d.vendor||"").toLowerCase().includes(i));if(a.length===0&&c.length===0&&h.length===0){e.innerHTML='<div class="text-gray-400 text-center py-6">No results found.</div>';return}e.innerHTML=`
      <div>
        <div class="font-bold text-purple-700 dark:text-purple-300 mt-2">Inventory (${c.length})</div>
        ${c.length?c.map(d=>`
          <div class="border-b border-gray-200 dark:border-gray-700 py-1 flex flex-col gap-1">
            <div><b>ID:</b> ${d.chargerId}</div>
            <div><b>Serial:</b> ${d.chargerSerial||"-"}</div>
            <div><b>SIM:</b> ${d.simNumber||"-"}</div>
            <div><b>Product:</b> ${d.product||"-"}</div>
            <div class="flex gap-2 mt-1">
              <button type="button" class="move-btn px-2 py-1 text-xs rounded bg-blue-600 text-white"
                data-chargerid="${d.chargerId}" data-serial="${d.chargerSerial}">Move</button>
              <button type="button" class="edit-inventory-btn px-2 py-1 text-xs rounded bg-green-600 text-white"
                data-chargerid="${d.chargerId}" data-serial="${d.chargerSerial}">Edit</button>
              <button type="button" class="view-inventory-btn px-2 py-1 text-xs rounded bg-purple-600 text-white"
                data-chargerid="${d.chargerId}">View</button>
            </div>
          </div>
        `).join(""):'<div class="text-gray-400 text-sm">None</div>'}
      </div>
    `,e.querySelectorAll(".move-btn").forEach(d=>{d.onclick=function(){const p=d.dataset.chargerid,m=d.dataset.serial,v=r.find(A=>A.chargerId===p&&A.chargerSerial===m);v?(window.openMoveDialog(v),document.getElementById("globalSearchDialog").close()):W("Inventory unit not found","red")}}),e.querySelectorAll(".edit-inventory-btn").forEach(d=>{d.onclick=function(){const p=d.dataset.chargerid,m=d.dataset.serial,v=r.find(A=>A.chargerId===p&&A.chargerSerial===m);v?(window.openEditDialog(v),document.getElementById("globalSearchDialog").close()):W("Inventory unit not found","red")}}),e.querySelectorAll(".view-inventory-btn").forEach(d=>{d.onclick=function(){const p=d.dataset.chargerid,m=r.find(v=>v.chargerId===p);m?typeof window.openDetailsDialog=="function"?(window.openDetailsDialog(m),document.getElementById("globalSearchDialog").close()):W("Details dialog not available on this page","red"):W("Inventory unit not found","red")}})};async function Wc(){const n=document.getElementById("addItemDialog"),e=JSON.parse(localStorage.getItem("cm_products_v1")||"[]"),t=e.length?e.map(h=>h.name):[...new Set(ee.map(h=>h.product))],r=ko(),s=Ve().statuses;n.innerHTML=`
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
          ${(t||[]).map(h=>`<option value="${h}">${h}</option>`).join("")}
        </select>
        <input id="model" type="text" placeholder="Model (Optional)" class="border px-2 py-1 rounded">
        <select id="location" required class="border px-2 py-1 rounded">
          <option value="">-- Select Location --</option>
          ${(r||[]).map(h=>`<option value="${h.name}">${h.name}${h.parent?` (${h.parent})`:""}</option>`).join("")}
        </select>
        <select id="status" required class="border px-2 py-1 rounded">
          <option value="">-- Select Status --</option>
          ${(s||[]).map(h=>`<option value="${h}">${h}</option>`).join("")}
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
    `;const i=n.querySelector('button[value="cancel"]');i&&(i.onclick=h=>{h.preventDefault(),n.close()}),n.showModal();const a=n.querySelector("#scanBarcodeBtn");a&&(a.onclick=()=>{openBarcodeScanner(h=>{h&&(n.querySelector("#chargerSerial").value=h)})});const c=n.querySelector("#status");c.onchange=()=>{c.value==="Installed"?(n.querySelector("#privatePublicSection").style.display="",n.querySelector("#location").value="Customer Stock",n.querySelector("#location").disabled=!0):(n.querySelector("#privatePublicSection").style.display="none",n.querySelector("#location").disabled=!1)},n.querySelector("#privatePublic").onchange=()=>{const h=n.querySelector("#privatePublic").value;n.querySelector("#invoiceNumber").style.display=h==="Private"?"":"none"},n.querySelector("form").onsubmit=h=>{if(h.preventDefault(),document.activeElement.value==="cancel"){n.close();return}let d=!0;n.querySelectorAll("input, select, textarea").forEach(Y=>Y.classList.remove("border-red-500")),n.querySelector("#formError").textContent="";const p=n.querySelector("#chargerId").value.trim(),m=n.querySelector("#chargerSerial").value.trim(),v=n.querySelector("#simNumber").value.trim(),A=n.querySelector("#product").value.trim(),S=n.querySelector("#model").value.trim(),C=n.querySelector("#location").value.trim(),P=n.querySelector("#status").value.trim(),O=n.querySelector("#notes").value.trim(),F=n.querySelector("#privatePublic")?n.querySelector("#privatePublic").value:"",V=n.querySelector("#invoiceNumber")?n.querySelector("#invoiceNumber").value.trim():"";if(p||(n.querySelector("#chargerId").classList.add("border-red-500"),d=!1),A||(n.querySelector("#product").classList.add("border-red-500"),d=!1),C||(n.querySelector("#location").classList.add("border-red-500"),d=!1),P||(n.querySelector("#status").classList.add("border-red-500"),d=!1),P==="Installed"&&!F&&(n.querySelector("#privatePublic").classList.add("border-red-500"),d=!1),!d){n.querySelector("#formError").textContent="Please fill in all required fields.";return}const K={chargerId:p,chargerSerial:m,simNumber:v,product:A,model:S,location:C,status:P,assigned:P==="Installed",created:new Date().toISOString(),addedBy:Ue(),lastAction:new Date().toISOString(),notes:O,isAsset:P==="Installed"&&F==="Public",invoiceNumber:P==="Installed"&&F==="Private"?V:""},ce=me();ce.push(K),xe(ce),W("Inventory item added","green"),n.close(),ee=ce,Se(document.getElementById("main-content"))}}window.openStatusDialog=function(n){const e=document.getElementById("actionDialog"),t=Ve().statuses;e.innerHTML=`
    <form method="dialog" class="flex flex-col gap-3 w-80">
      <h3 class="font-bold mb-2">Change Status: ${n.chargerId}</h3>
      <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
      <label>New status:</label>
      <select id="newStatus" required class="border px-2 py-1 rounded">
        <option value="">-- Select Status --</option>
        ${(t||[]).map(r=>`<option value="${r}"${n.status===r?" selected":""}>${r}</option>`).join("")}
      </select>
      <textarea id="statusComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
      <div class="flex justify-between gap-2 mt-3">
        <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
        <button value="ok" class="bg-blue-600 text-white px-3 py-1 rounded">Change</button>
      </div>
    </form>
  `,e.showModal(),e.querySelector('button[value="cancel"]').onclick=r=>{r.preventDefault(),e.close()},e.querySelector("form").onsubmit=r=>{r.preventDefault();const s=e.querySelector("#newStatus").value.trim();if(!s){e.querySelector("#newStatus").classList.add("border-red-500"),e.querySelector("#formError").textContent="Please select a status.";return}let i=me();const a=i.findIndex(h=>h.chargerId===n.chargerId);a>=0&&(i[a].status=s,i[a].lastAction=new Date().toISOString()),xe(i);const c=It();c.push({date:new Date().toISOString(),action:"Status Change",chargerId:n.chargerId,chargerSerial:n.chargerSerial,simNumber:n.simNumber,product:n.product,from:n.location,statusFrom:n.status,statusTo:s,user:Ue(),comment:e.querySelector("#statusComment").value.trim()}),Tt(c),W("Status updated","blue"),e.close(),ee=i,Se(document.getElementById("main-content"))}};window.openBarcodeScanner=function(n){let e=document.getElementById("barcodeScanDialog");e||(e=document.createElement("dialog"),e.id="barcodeScanDialog",e.className="rounded-xl p-4",document.body.appendChild(e)),e.innerHTML=`
    <div style="position:relative;">
      <button id="cancelScanBtn" style="position:absolute;top:8px;right:8px;z-index:2;" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <div class="mb-2 font-bold text-lg text-blue-800 dark:text-blue-300">Scan Product Barcode</div>
      <div id="barcode-scan-video" style="width:350px;height:200px;max-width:100%;border:2px solid #9cf;border-radius:10px;"></div>
      <div id="barcode-feedback" class="mt-2 text-gray-700 dark:text-gray-200"></div>
    </div>
  `,e.showModal();let t=!1;function r(){try{Quagga.offDetected&&Quagga.offDetected()}catch{}try{Quagga.stop()}catch{}}function s(){r(),e.close()}function i(){t=!0,r(),e.close(),n&&n(null)}setTimeout(()=>{const a=document.getElementById("cancelScanBtn");a&&(a.onclick=i)},10),e.addEventListener("click",function(a){a.target===e&&i()}),setTimeout(()=>{Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:document.getElementById("barcode-scan-video"),constraints:{facingMode:"environment"}},decoder:{readers:["code_128_reader","ean_reader","ean_8_reader"]}},function(h){if(h){document.getElementById("barcode-feedback").textContent="Camera error: "+h,setTimeout(s,1500);return}Quagga.start()});let a=[],c=3;Quagga.onDetected(function(h){if(t)return;const d=h.codeResult.code||"",p=(d.match(/(\d{8})$/)||[])[1]||d;a.push(p),a.length>c&&a.shift(),a.length===c&&a.every(m=>m===a[0])&&(t=!0,document.getElementById("barcode-feedback").textContent="Scanned: "+p,setTimeout(()=>{s(),n&&n(p)},600))})},150)};window.openBulkAddDialog=openBulkAddDialog;window.openDetailsDialog=openDetailsDialog;window.toggleActionsMenu=toggleActionsMenu;window.bulkDelete=bulkDelete;window.clearBulkSelection=clearBulkSelection;window.toggleRowMenu=toggleRowMenu;window.openMoveDialog=openMoveDialog;window.openStatusDialog=openStatusDialog;window.openEditDialog=openEditDialog;window.deleteUnit=deleteUnit;function mg(n,e){const t=me();n.forEach(r=>{const s=t.find(i=>i.chargerId===r);s&&(s.location=e,s.lastAction=new Date().toISOString())}),xe(t)}export{Ve as a,It as b,Dm as c,Sc as d,Wm as e,W as f,eg as g,Oc as h,sl as i,xe as j,me as l,Qm as s,mg as u};

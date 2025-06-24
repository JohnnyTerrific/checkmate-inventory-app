const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/products-CUODTXFW.js","assets/users-BQb8VeAn.js","assets/shipments-BiXVsHL6.js"])))=>i.map(i=>d[i]);
import{b as _,d as Ge,g as Ye,l as ae,c as Ke,e as le,f as Je,h as Qe,i as ce,j as Ee,k as Ze,s as et,m as M}from"./users-BQb8VeAn.js";const tt="modulepreload",ot=function(e){return"/"+e},ve={},te=function(t,o,n){let r=Promise.resolve();if(o&&o.length>0){let s=function(l){return Promise.all(l.map(p=>Promise.resolve(p).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=s(o.map(l=>{if(l=ot(l),l in ve)return;ve[l]=!0;const p=l.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const c=document.createElement("link");if(c.rel=p?"stylesheet":tt,p||(c.as="script"),c.crossOrigin="",c.href=l,u&&c.setAttribute("nonce",u),document.head.appendChild(c),p)return new Promise((g,b)=>{c.addEventListener("load",g),c.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(s){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s}return r.then(s=>{for(const a of s||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},nt={SuperAdmin:{canAddUsers:!0,manageLocations:!0,manageContractors:!0,inventoryCrud:!0,viewDashboard:!0,viewIndex:!0,productsCrud:!0,settings:!0,viewAuditLog:!0,exportAuditLog:!0},CEO:{canAddUsers:!1,manageLocations:!1,manageContractors:!0,inventoryCrud:!0,viewDashboard:!0,viewIndex:!0,productsCrud:!1,settings:!0,viewAuditLog:!0,exportAuditLog:!0},COO:{canAddUsers:!1,manageLocations:!1,manageContractors:!0,inventoryCrud:!0,viewDashboard:!0,viewIndex:!0,productsCrud:!1,settings:!0,viewAuditLog:!0,exportAuditLog:!1},Agent:{canAddUsers:!1,manageLocations:!1,manageContractors:!1,inventoryCrud:!0,viewDashboard:!1,viewIndex:!1,productsCrud:!1,settings:!1,viewAuditLog:!0,exportAuditLog:!1}};function rt(e){return nt[e]||{}}async function ie(e){const t=await _();return!!rt(t)[e]}const at=`
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
`;async function O(){console.log("Opening Manage Users dialog...");let e=document.getElementById("userManagementDialog");e||(e=document.createElement("dialog"),e.id="userManagementDialog",e.className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-2xl w-full mx-auto border border-gray-200 dark:border-gray-800",document.body.appendChild(e));const t=await le();e.innerHTML=`
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
        ${t.map(r=>`
          <tr class="hover:bg-purple-50 dark:hover:bg-gray-800 transition">
            <td class="px-4 py-3">${r.email}</td>
            <td class="px-4 py-3">${r.role}</td>
            <td class="px-4 py-3 flex gap-2">
              ${r.role!=="SuperAdmin"?`
                <button data-user="${r.username}" class="editUserBtn group" title="Edit">
                  <svg class="w-5 h-5 text-blue-500 group-hover:text-blue-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z"/>
                  </svg>
                </button>
                <button data-user="${r.username}" class="pwUserBtn group" title="Show/Change Password">
                  <svg class="w-5 h-5 text-gray-500 group-hover:text-gray-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                </button>
                <button data-user="${r.username}" class="deleteUserBtn group" title="Delete">
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
`;const o=e.querySelector("#addPassword"),n=e.querySelector("#toggleAddPw");n&&(n.onclick=()=>{o.type=o.type==="password"?"text":"password"}),e.showModal(),e.querySelector("#addUserForm").onsubmit=async function(r){r.preventDefault();const i=e.querySelector("#addUsername").value.trim(),s=e.querySelector("#addPassword").value,a=e.querySelector("#addRole").value;try{await Je(i,s,a),await O()}catch(u){e.querySelector("#userMgmtError").textContent=u.message}},e.querySelectorAll(".deleteUserBtn").forEach(r=>{r.onclick=async function(){const i=r.dataset.user,s=t.find(a=>a.email===i);if(s&&confirm(`Delete user ${i}?`)){const a=getFirestore();await Qe(ce(a,"users",s.id)),O()}}}),e.querySelectorAll(".editUserBtn").forEach(r=>{r.onclick=function(){const i=r.dataset.user,s=t.find(a=>a.email===i);s&&it(s)}}),e.querySelectorAll(".pwUserBtn").forEach(r=>{r.onclick=function(){const i=r.dataset.user,s=t.find(a=>a.username===i);s&&st(s)}}),e.querySelector("#closeUserMgmt").onclick=function(){e.close()}}function it(e){const t=document.createElement("dialog");t.className="rounded-xl p-6 shadow-2xl max-w-md w-full",t.innerHTML=`
    <h3 class="text-lg font-bold mb-4 text-purple-700">Edit User</h3>
    <form id="editUserForm" class="flex flex-col gap-3">
      <input type="text" id="editUsername" value="${e.username}" class="border rounded px-2 py-1" required>
      <select id="editRole" class="border rounded px-2 py-1">
        <option value="CEO" ${e.role==="CEO"?"selected":""}>CEO</option>
        <option value="COO" ${e.role==="COO"?"selected":""}>COO</option>
        <option value="Agent" ${e.role==="Agent"?"selected":""}>Agent</option>
      </select>
      <div class="flex justify-end gap-2 mt-2">
        <button type="button" class="bg-gray-300 rounded px-3 py-1" id="cancelEditUser">Cancel</button>
        <button type="submit" class="bg-blue-600 text-white px-4 py-1 rounded">Save</button>
      </div>
      <div id="editUserError" class="text-red-600 mt-2"></div>
    </form>
  `,document.body.appendChild(t),t.showModal(),t.addEventListener("close",()=>t.remove()),t.querySelector("#cancelEditUser").onclick=()=>t.close(),t.querySelector("#editUserForm").onsubmit=function(o){o.preventDefault();const n=t.querySelector("#editUsername").value.trim(),r=t.querySelector("#editRole").value;if(!n){t.querySelector("#editUserError").textContent="Username required";return}const i=le();if(i.some(a=>a.username===n&&a.username!==e.username)){t.querySelector("#editUserError").textContent="Username already exists";return}const s=i.findIndex(a=>a.username===e.username);s!==-1&&(i[s].username=n,i[s].role=r,saveUsers(i),t.close(),O())}}function st(e){const t=document.createElement("dialog");t.className="rounded-xl p-6 shadow-2xl max-w-md w-full",t.innerHTML=`
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
  `,document.body.appendChild(t),t.showModal(),t.addEventListener("close",()=>t.remove()),t.querySelector("#cancelPw").onclick=()=>t.close();const o=t.querySelector("#newPassword");t.querySelector("#togglePw").onclick=()=>{o.type=o.type==="password"?"text":"password"},t.querySelector("#changePwForm").onsubmit=function(n){n.preventDefault();const r=o.value;if(!r){t.querySelector("#pwError").textContent="Password required";return}const i=le(),s=i.findIndex(a=>a.username===e.username);s!==-1&&(i[s].password=r,saveUsers(i),t.close(),O())}}function lt(){const e=document.getElementById("currentUserInfo"),t=document.getElementById("logoutBtn"),o=document.getElementById("manageUsersBtn"),n=Ke();n&&e&&(e.textContent=`User: ${n.username} (${n.role})`),n&&t&&(t.onclick=function(){console.log("Logout clicked"),ae(),window.location.replace("/login.html")}),n&&o&&n.role==="SuperAdmin"&&(o.classList.remove("hidden"),o.onclick=O)}async function ct(){const e=document.body;let t="";const o=e.querySelectorAll("section");o.length>0?t=o[0].outerHTML:t=Array.from(e.childNodes).filter(r=>r.nodeName!=="SCRIPT").map(r=>r.outerHTML||r.textContent).join(""),document.body.innerHTML=at;const n=document.getElementById("main-content");if(!n){console.error("main-content not found in shell!");return}n.innerHTML=t}function dt(){const e=document.body.dataset.page;document.querySelectorAll(".nav-link").forEach(t=>{t.dataset.page===e?t.classList.add("bg-purple-100","dark:bg-purple-900","text-purple-700","dark:text-purple-300","font-bold"):t.classList.remove("bg-purple-100","dark:bg-purple-900","text-purple-700","dark:text-purple-300","font-bold")})}function ut(){const e=document.documentElement,t=document.getElementById("darkModeToggle"),o=document.getElementById("sunIcon"),n=document.getElementById("moonIcon");function r(){return localStorage.theme?localStorage.theme==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function i(s){if(!(!e||!o||!n))if(s){e.classList.add("dark"),o.classList.add("hidden"),n.classList.remove("hidden"),localStorage.theme="dark";const a=document.getElementById("mainLogoImg");a&&(a.src="/img/CheckMate-app-logo-dark.png")}else{e.classList.remove("dark"),o.classList.remove("hidden"),n.classList.add("hidden"),localStorage.theme="light";const a=document.getElementById("mainLogoImg");a&&(a.src="/img/CheckMate-app-logo-light.png")}}i(r()),t.addEventListener("click",()=>{const s=e.classList.contains("dark");i(!s)})}function pt(){const e=document.getElementById("sidebar"),t=document.getElementById("sidebarToggle"),o=document.getElementById("sidebarOverlay"),n=window.matchMedia("(min-width: 768px)");let r=!1;function i(l){r=l,r?(e.classList.add("collapsed"),e.classList.remove("w-64"),e.classList.add("w-16"),document.querySelectorAll(".sidebar-label").forEach(p=>p.classList.add("hidden"))):(e.classList.remove("collapsed"),e.classList.remove("w-16"),e.classList.add("w-64"),document.querySelectorAll(".sidebar-label").forEach(p=>p.classList.remove("hidden"))),localStorage.sidebarCollapsed=r?"1":"0"}function s(){e.classList.remove("-translate-x-full"),o.classList.remove("hidden"),document.body.classList.add("overflow-hidden")}function a(){e.classList.add("-translate-x-full"),o.classList.add("hidden"),document.body.classList.remove("overflow-hidden")}function u(){n.matches?(e.classList.remove("-translate-x-full"),o.classList.add("hidden"),document.body.classList.remove("overflow-hidden"),i(localStorage.sidebarCollapsed==="1")):(a(),i(!1))}t.addEventListener("click",l=>{l.stopPropagation(),n.matches?i(!r):e.classList.contains("-translate-x-full")?s():a()}),o.addEventListener("click",a),n.addEventListener("change",u),u()}document.addEventListener("DOMContentLoaded",()=>{Ge(async e=>{if(!e){window.location.pathname.endsWith("/login.html")||window.location.replace("/login.html");return}const t=await Ye();if(!t){f("User profile not found.","red"),await ae(),window.location.replace("/login.html");return}await ct(),lt();const o=document.getElementById("currentUserInfo"),n=document.getElementById("logoutBtn"),r=document.getElementById("manageUsersBtn");o&&n&&(o.textContent=`User: ${t.username} (${t.role})`,n.onclick=function(){ae(),window.location.replace("/login.html")}),r&&(t.role==="SuperAdmin"?(r.classList.remove("hidden"),r.onclick=O):(r.classList.add("hidden"),r.onclick=null)),ut(),dt(),pt(),document.querySelectorAll(".nav-link").forEach(d=>{d.addEventListener("click",function(c){const g=this.dataset.page,b=document.body.dataset.page;if(g===b){c.preventDefault();return}document.body.classList.add("fade-out"),setTimeout(()=>window.location.href=this.href,200)})});const i=document.getElementById("alertBell"),s=document.getElementById("alertDropdown");if(i&&s){let d=function(c){!s.contains(c.target)&&c.target!==i&&s.classList.add("hidden")};i.onclick=function(c){c.stopPropagation(),s.classList.toggle("hidden"),s.classList.contains("hidden")||document.addEventListener("click",d,{once:!0})}}window.updateAlertBell=function(){const d=JSON.parse(localStorage.getItem("cm_shipments_v1")||"[]"),c=document.getElementById("shipmentList"),g=document.getElementById("alertCount");if(!c)return;const b=new Date,y=d.filter(h=>new Date(h.eta)>=b&&!h.arrived);if(d.filter(h=>new Date(h.eta)<b||h.arrived),!y.length)c.innerHTML='<div class="text-gray-400 text-center py-4">No pending shipments</div>',g&&g.classList.add("hidden");else{const h=y.slice(-5).reverse();c.innerHTML=h.map(x=>`
          <div class="border-b border-gray-200 dark:border-gray-700 py-2 px-1 last:border-0">
            <div class="font-semibold">${x.shipmentId||"[No ID]"}</div>
            <div class="text-xs text-gray-500">Vendor: ${x.vendor||"-"}</div>
            <div class="text-xs text-gray-500">Products: ${Array.isArray(x.products)?x.products.map(v=>`${v.model} ×${v.qty}`).join(", "):""}</div>
            <div class="text-xs text-gray-400">${new Date(x.departure).toLocaleDateString()} → ${new Date(x.eta).toLocaleDateString()}</div>
          </div>
        `).join(""),g&&(g.textContent=y.length,g.classList.remove("hidden"))}},typeof window.updateAlertBell=="function"&&updateAlertBell();const a=document.getElementById("globalSearchBtn"),u=document.getElementById("globalSearchDialog");a&&u&&(a.onclick=function(){openGlobalSearchDialog()}),window.openGlobalSearchDialog=function(){if(!window.inventory||window.inventory.length===0){f("Loading inventory data...","blue"),window.location.href="/inventory.html";return}let d=document.getElementById("globalSearchDialog");d||(d=document.createElement("dialog"),d.id="globalSearchDialog",d.className="rounded-xl p-4",document.body.appendChild(d)),d.innerHTML=`
    <form method="dialog" class="flex flex-col gap-4 w-[30rem] max-w-full">
      <h3 class="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Global Search</h3>
      <input id="globalSearchInput" type="text" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800"
        placeholder="Type anything... (product, serial, shipment, vendor)" autofocus>
      <div id="globalSearchResults" class="max-h-60 overflow-y-auto mt-2"></div>
      <div class="flex justify-end gap-2 mt-2">
        <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Close</button>
      </div>
    </form>
  `,d.showModal(),d.querySelector('button[value="cancel"]').onclick=g=>{g.preventDefault(),d.close()};const c=d.querySelector("#globalSearchInput");c.oninput=function(){performGlobalSearch(c.value.trim())},setTimeout(()=>{c.focus()},50),performGlobalSearch("")},window.performGlobalSearch=function(d){const c=document.getElementById("globalSearchResults");if(!c)return;const g=JSON.parse(localStorage.getItem("cm_shipments_v1")||"[]"),b=window.inventory||[],y=JSON.parse(localStorage.getItem("cm_products_v1")||"[]");if(!d){c.innerHTML='<div class="text-gray-400 text-center py-6">Start typing to search...</div>';return}const h=d.toLowerCase(),x=g.filter(m=>(m.shipmentId||"").toLowerCase().includes(h)||(m.vendor||"").toLowerCase().includes(h)||(m.incoterm||"").toLowerCase().includes(h)||Array.isArray(m.products)&&m.products.some(k=>(k.model||"").toLowerCase().includes(h))),v=b.filter(m=>(m.chargerId||"").toLowerCase().includes(h)||(m.chargerSerial||"").toLowerCase().includes(h)||(m.simNumber||"").toLowerCase().includes(h)||(m.product||"").toLowerCase().includes(h)||(m.model||"").toLowerCase().includes(h)||(m.notes||"").toLowerCase().includes(h)),S=y.filter(m=>(m.name||"").toLowerCase().includes(h)||(m.hsCode||"").toLowerCase().includes(h)||(m.vendor||"").toLowerCase().includes(h));if(x.length===0&&v.length===0&&S.length===0){c.innerHTML='<div class="text-gray-400 text-center py-6">No results found.</div>';return}c.innerHTML=`
  <div>
    <div class="font-bold text-purple-700 dark:text-purple-300 mt-2">Inventory (${v.length})</div>
    ${v.length?v.map(m=>`
      <div class="border-b border-gray-200 dark:border-gray-700 py-1 flex flex-col gap-1">
        <div><b>ID:</b> ${m.chargerId}</div>
        <div><b>Serial:</b> ${m.chargerSerial||"-"}</div>
        <div><b>SIM:</b> ${m.simNumber||"-"}</div>
        <div><b>Product:</b> ${m.product||m.model||"-"}</div>
        <div><b>Status:</b> ${m.status||"-"}</div>
        <div><b>Location:</b> ${m.location||"-"}</div>
        <div class="flex gap-2 mt-1">
  <button type="button" class="move-btn px-2 py-1 text-xs rounded bg-blue-600 text-white"
    data-chargerid="${m.chargerId}" data-serial="${m.chargerSerial||""}">Move</button>
  <button type="button" class="edit-inventory-btn px-2 py-1 text-xs rounded bg-green-600 text-white"
    data-chargerid="${m.chargerId}" data-serial="${m.chargerSerial}">Edit</button>
  <button type="button" class="view-inventory-btn px-2 py-1 text-xs rounded bg-purple-600 text-white"
    data-chargerid="${m.chargerId}">View</button>
</div>
      </div>
    `).join(""):'<div class="text-gray-400 text-sm">None</div>'}
  </div>
`,c.querySelectorAll(".move-btn").forEach(m=>{m.onclick=function(){const k=m.dataset.chargerid,I=m.dataset.serial,C=(window.inventory||[]).find(D=>D.chargerId===k&&D.chargerSerial===I);C?(document.body.dataset.page==="inventory"?window.openMoveDialog(C):(sessionStorage.setItem("pendingInventoryAction",JSON.stringify({action:"move",unit:C})),window.location.href="/inventory.html"),document.getElementById("globalSearchDialog").close()):f("Inventory unit not found","red")}}),c.querySelectorAll(".edit-inventory-btn").forEach(m=>{m.onclick=function(){const k=m.dataset.chargerid,I=m.dataset.serial,C=(window.inventory||[]).find(D=>D.chargerId===k&&D.chargerSerial===I);C?(document.body.dataset.page==="inventory"?window.openEditDialog(C):(sessionStorage.setItem("pendingInventoryAction",JSON.stringify({action:"edit",unit:C})),window.location.href="/inventory.html"),document.getElementById("globalSearchDialog").close()):f("Inventory unit not found","red")}}),c.querySelectorAll(".view-inventory-btn").forEach(m=>{m.onclick=function(){const k=m.dataset.chargerid,E=(window.inventory||[]).find(C=>C.chargerId===k);E?(document.body.dataset.page==="inventory"?window.openDetailsDialog(E):(sessionStorage.setItem("pendingInventoryAction",JSON.stringify({action:"view",unit:E})),window.location.href="/inventory.html"),document.getElementById("globalSearchDialog").close()):f("Inventory unit not found","red")}})};const l=document.body.dataset.page;l==="settings"&&te(()=>Promise.resolve().then(()=>It),void 0).then(d=>d.initSettings()),l==="products"&&te(()=>import("./products-CUODTXFW.js"),__vite__mapDeps([0,1])).then(d=>d.initProducts());const p=document.getElementById("addShipmentBtn");p&&te(()=>import("./shipments-BiXVsHL6.js"),__vite__mapDeps([2,1])).then(d=>{p.onclick=()=>d.openShipmentDialog()}).catch(d=>{console.error("Failed loading shipments module",d),p.onclick=()=>f("Shipment module failed to load","red")}),document.body.style.visibility="visible"})});function f(e,t="green"){let o=document.getElementById("toast");o||(o=document.createElement("div"),o.id="toast",document.body.appendChild(o)),o.textContent=e,o.className=`fixed bottom-6 right-6 z-50 min-w-[200px] max-w-xs bg-${t}-600 text-white font-semibold px-4 py-2 rounded shadow-lg opacity-100 pointer-events-auto transition-opacity duration-300`,o.style.display="block",setTimeout(()=>{o.classList.remove("opacity-100","pointer-events-auto"),o.classList.add("opacity-0","pointer-events-none"),o.style.display="none"},2e3)}window.showToast=f;window.showLegend=function(e,t){const o=document.getElementById("hoverLegend");o&&(o.textContent=e,o.style.display="block",t&&(o.style.left=t.clientX+16+"px",o.style.top=t.clientY+"px"))};window.hideLegend=function(){const e=document.getElementById("hoverLegend");e&&(e.style.display="none")};if(window.innerWidth<=640){let e=null;document.body.addEventListener("touchstart",function(t){t.touches[0].clientX<32?e=t.touches[0].clientX:e=null},{passive:!0}),document.body.addEventListener("touchend",function(t){e!==null&&t.changedTouches[0].clientX-e>80&&window.history.back(),e=null},{passive:!0})}const gt={apiKey:"AIzaSyCdNoC5xt3zkMpB5YNmx2spRsiBMiJl5Uo",authDomain:"checkmate-enova.firebaseapp.com",projectId:"checkmate-enova",storageBucket:"checkmate-enova.firebasestorage.app",messagingSenderId:"1036780232884",appId:"1:1036780232884:web:689229ef07859db22e77e1"},De="settings",Be={warehouse:["In Stock","Faulty","RMA","Reserved","Demo","Loaner"],contractor:["In Stock","Reserved","Loaner"],customer:["Installed (Wevo)","Installed (Retail)","Faulty"],public:["Installed","Decommissioned","Faulty"],other:["Unknown","Lost","In Transit","Faulty"]};function $e(e,t){const o=t.locations.find(r=>r.name===e);if(!o)return t.statuses;const n=o.parent;return Be[n]||t.statuses}async function $(){const e={parentContainers:[{id:"warehouse",name:"Warehouses",color:"#8b5cf6"},{id:"customer",name:"Customer Locations",color:"#38bdf8"},{id:"contractor",name:"Contractors",color:"#ef4444"},{id:"public",name:"Public Locations",color:"#22c55e"},{id:"other",name:"Other",color:"#f59e0b"}],locations:[{name:"Main Warehouse",parent:"warehouse"},{name:"Customer Site",parent:"customer"},{name:"Public Location",parent:"public"}],statuses:["In Stock","Faulty","RMA","Reserved","Demo","Loaner","Installed (Wevo)","Installed (Retail)","Installed","Decommissioned","Unknown"],vendors:["Teison","ABL","EnelX","Vestel"],contractors:[{company:"Alpha Charge",name:"Dan Hen",phone:"0502329696"}]};try{const t=ce(Ee,"appdata",De),o=await Ze(t);if(o.exists()){const n=o.data();return{parentContainers:n.parentContainers||e.parentContainers,locations:n.locations||e.locations,statuses:n.statuses||e.statuses,vendors:n.vendors||e.vendors,contractors:n.contractors||e.contractors}}else return e}catch(t){return console.error("Error loading settings from Firestore:",t),e}}async function q(e){try{await et(ce(Ee,"appdata",De),e)}catch(t){console.error("Error saving settings to Firestore:",t)}}function mt(e,t){return!t||!t.locations?[]:t.locations.filter(o=>o.parent===e)}function ft(e,t){return!t||!t.parentContainers?null:t.parentContainers.find(o=>o.id===e)}async function vt(e,t){const o=await $(),n=[...o.locations,...(o.contractors||[]).map(d=>({name:d.name,parent:"contractor"}))],r={};let i=0,s=0,a=0,u=0,l=0;e.forEach(d=>{const c=d.status||"Unknown",g=d.location||"";r[c]=(r[c]||0)+1;const b=n.find(h=>h.name===g),y=(b==null?void 0:b.parent)||"other";if(y==="warehouse")u++;else if(y==="customer")l++;else if(y==="contractor"){i++;const h=Date.now(),x=d.assignedDate?new Date(d.assignedDate).getTime():0;x&&h-x>14*24*60*60*1e3&&s++}else y==="public"&&a++}),console.log("Dashboard Stats Debug:",{total:e.length,inStockCount:`${u} (warehouse locations)`,installedCount:`${l} (customer locations)`,contractorCount:`${i} (contractor locations)`,publicCount:`${a} (public locations)`,contractorNames:(o.contractors||[]).map(d=>d.name),allLocations:n.map(d=>({name:d.name,parent:d.parent})),byStatus:r});const p=t&&t.length?t.sort((d,c)=>new Date(d.eta)-new Date(c.eta)).find(d=>new Date(d.eta)>new Date):null;return{total:e.length,byStatus:r,contractorCount:i,overdueCount:s,publicCount:a,inStockCount:u,installedCount:l,nextShipment:p?new Date(p.eta).getTime():null}}function he(e,t,o,n,r){const i=document.createElement("li");return i.className="flex items-center justify-between px-3 py-2 rounded bg-green-200 dark:bg-gray-700 hover:bg-green-300 dark:hover:bg-gray-600 transition group cursor-grab text-gray-900 dark:text-gray-100",i.draggable=!0,i.innerHTML=`
  <span>${e}</span>
  <div class="flex gap-2 items-center">
    <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
    <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
    <span class="drag-icon cursor-grab text-gray-400 group-hover:text-gray-200 transition">&#9776;</span>
  </div>
  `,i.addEventListener("dragstart",s=>{s.dataTransfer.setData("index",t),s.dataTransfer.setData("listType",o)}),i.addEventListener("dragover",s=>s.preventDefault()),i.addEventListener("drop",s=>{s.preventDefault();const a=+s.dataTransfer.getData("index");s.dataTransfer.getData("listType")===o&&a!==t&&Ae(o,a,t)}),i.querySelector(".edit-btn").onclick=()=>n(t),i.querySelector(".delete-btn").onclick=()=>r(t),i}function Me(e,t=""){return new Promise(o=>{const n=document.getElementById("entryDialog");n.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${e}</h3>
        <input id="entryInput" type="text" class="border px-2 py-1 rounded" value="${t}" required autofocus>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `,n.showModal();const r=n.querySelector("form");r.querySelector('button[value="cancel"]').onclick=()=>{n.close(),o(void 0)},r.onsubmit=i=>{i.preventDefault(),o(n.querySelector("#entryInput").value.trim()),n.close()}})}function de(e){return new Promise(t=>{const o=document.getElementById("confirmDialog");o.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4">
        <p>${e}</p>
        <div class="flex justify-end gap-2">
          <button value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </form>
    `,o.showModal(),o.querySelector("form").onsubmit=n=>{n.preventDefault(),t(document.activeElement.value==="ok"),o.close()}})}let w;function N(e,t){const o=document.getElementById(t);o.innerHTML="",e==="locations"?w[e].forEach((n,r)=>{var s;let i="";if(n.parent){const a=(s=w.parentContainers)==null?void 0:s.find(u=>u.id===n.parent);a?i=`<span class="text-xs text-gray-500 ml-2" style="color:${a.color}">
            (${a.name})
          </span>`:i=`<span class="text-xs text-gray-500 ml-2">(${n.parent})</span>`}o.appendChild(he(n.name+(i||""),r,e,a=>be(e,a),a=>we(e,a)))}):w[e].forEach((n,r)=>{o.appendChild(he(n,r,e,i=>be(e,i),i=>we(e,i)))})}async function oe(e,t,o){e==="locations"?qe("Add Location").then(async n=>{if(!n)return;const{value:r,parent:i}=n;!r||!i||(Array.isArray(w[e])||(w[e]=[]),w[e].push({name:r,parent:i}),await q(w),N(e,t),f(o+" added!","green"))}):Me(`Add ${o}`).then(async n=>{n&&(Array.isArray(w[e])||(w[e]=[]),w[e].push(n),await q(w),N(e,t),f(o+" added!","green"))})}function qe(e,t="",o=""){return new Promise(n=>{const r=document.getElementById("entryDialog"),i=w.parentContainers||[];r.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${e}</h3>
        <input id="entryInput" type="text" class="border px-2 py-1 rounded" required autofocus placeholder="Location Name" value="${t}">
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Parent Category</label>
          <select id="parentSelect" class="border px-2 py-1 rounded w-full">
            <option value="">-- Select Parent Container --</option>
            ${i.map(a=>`
              <option value="${a.id}"${a.id===o?" selected":""}>
                ${a.name}
              </option>
            `).join("")}
          </select>
        </div>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `,r.showModal();const s=r.querySelector("form");s.querySelector('button[value="cancel"]').onclick=()=>{r.close(),n(void 0)},s.onsubmit=a=>{a.preventDefault();const u=r.querySelector("#entryInput").value.trim(),l=r.querySelector("#parentSelect").value;!u||!l||(r.close(),n({value:u,parent:l}))}})}async function be(e,t){if(e==="locations"){const o=w[e][t];qe("Edit Location",o.name,o.parent).then(async n=>{if(!n)return;const{value:r,parent:i}=n;!r||!i||(w[e][t]={name:r,parent:i},await q(w),N(e,G(e)),f("Location updated!","blue"))})}else Me("Edit",w[e][t]).then(async o=>{o&&(w[e][t]=o,await q(w),N(e,G(e)),f("Item updated!","blue"))})}async function we(e,t){de("Delete this item?").then(async o=>{o&&(w[e].splice(t,1),await q(w),N(e,G(e)),f("Item deleted!","red"))})}async function Ae(e,t,o){const n=w[e],[r]=n.splice(t,1);n.splice(o,0,r),await q(w),N(e,G(e))}function G(e){return e==="locations"?"locList":e==="statuses"?"statList":"vendorList"}function Q(){const e=document.getElementById("contractorList");e.innerHTML="",Array.isArray(w.contractors)&&w.contractors.forEach((t,o)=>{const n=document.createElement("li");n.className="flex items-center justify-between px-3 py-2 rounded bg-cyan-200 dark:bg-gray-700 hover:bg-cyan-300 dark:hover:bg-gray-600 transition group",n.innerHTML=`
      <div>
        <span class="font-semibold">${t.name}</span>
        <span class="text-xs text-gray-700 dark:text-gray-300 ml-2">(${t.company})</span>
        <span class="text-xs text-gray-500 ml-2">${t.phone}</span>
      </div>
      <div class="flex gap-2 items-center">
        <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
        <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
      </div>
    `,n.querySelector(".edit-btn").onclick=()=>bt(o),n.querySelector(".delete-btn").onclick=()=>wt(o),e.appendChild(n)})}async function ht(){Pe().then(async e=>{e&&(w.contractors.push({id:Date.now(),name:e.name,company:e.company,phone:e.phone}),await q(w),Q(),f("Contractor added!","green"))})}async function bt(e){const t=w.contractors[e];Pe(t).then(async o=>{o&&(w.contractors[e]={...t,...o},await q(w),Q(),f("Contractor updated!","blue"))})}async function wt(e){de("Delete this contractor?").then(async t=>{t&&(w.contractors.splice(e,1),await q(w),Q(),f("Contractor deleted!","red"))})}function Pe(e={}){return new Promise(t=>{const o=document.getElementById("entryDialog");o.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${e.name?"Edit":"Add"} Contractor</h3>
        <input id="contractorName" type="text" class="border px-2 py-1 rounded" placeholder="Full Name" value="${e.name||""}" required>
        <input id="contractorCompany" type="text" class="border px-2 py-1 rounded" placeholder="Company Name" value="${e.company||""}" required>
        <input id="contractorPhone" type="tel" class="border px-2 py-1 rounded" placeholder="Phone Number" value="${e.phone||""}" required>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `,o.showModal();const n=o.querySelector("form");n.querySelector('button[value="cancel"]').onclick=()=>{o.close(),t(void 0)},n.onsubmit=r=>{r.preventDefault(),t({name:o.querySelector("#contractorName").value.trim(),company:o.querySelector("#contractorCompany").value.trim(),phone:o.querySelector("#contractorPhone").value.trim()}),o.close()}})}function Z(){const e=document.getElementById("parentContainerList");e&&(e.innerHTML="",Array.isArray(w.parentContainers)||(w.parentContainers=[]),w.parentContainers.forEach((t,o)=>{const n=document.createElement("li");n.className="flex items-center justify-between px-3 py-2 rounded bg-blue-200 dark:bg-gray-700 hover:bg-blue-300 dark:hover:bg-gray-600 transition group cursor-grab text-gray-900 dark:text-gray-100 mb-2",n.draggable=!0,n.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="w-4 h-4 rounded-full" style="background-color: ${t.color||"#6b7280"}"></span>
        <span class="font-medium">${t.name}</span>
        <span class="text-xs text-gray-500">(${t.id})</span>
      </div>
      <div class="flex gap-2 items-center">
        <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
        <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
        <span class="drag-icon cursor-grab text-gray-400 group-hover:text-gray-200 transition">&#9776;</span>
      </div>
    `,n.addEventListener("dragstart",r=>{r.dataTransfer.setData("index",o),r.dataTransfer.setData("listType","parentContainers")}),n.addEventListener("dragover",r=>r.preventDefault()),n.addEventListener("drop",r=>{r.preventDefault();const i=+r.dataTransfer.getData("index");r.dataTransfer.getData("listType")==="parentContainers"&&i!==o&&Ae("parentContainers",i,o)}),n.querySelector(".edit-btn").onclick=()=>xt(o),n.querySelector(".delete-btn").onclick=()=>St(o),e.appendChild(n)}))}function Te(e,t={}){return new Promise(o=>{const n=document.getElementById("entryDialog");n.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${e}</h3>
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">ID (for reference)</label>
          <input id="containerId" type="text" class="w-full border px-2 py-1 rounded" 
                 value="${t.id||""}" required placeholder="warehouse, customer, etc">
        </div>
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Display Name</label>
          <input id="containerName" type="text" class="w-full border px-2 py-1 rounded" 
                 value="${t.name||""}" required placeholder="Warehouses, Public Locations, etc">
        </div>
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Color</label>
          <input id="containerColor" type="color" class="w-full border px-2 py-1 rounded" 
                 value="${t.color||"#6b7280"}">
        </div>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `,n.showModal();const r=n.querySelector("form");r.querySelector('button[value="cancel"]').onclick=()=>{n.close(),o(void 0)},r.onsubmit=i=>{i.preventDefault(),o({id:n.querySelector("#containerId").value.trim(),name:n.querySelector("#containerName").value.trim(),color:n.querySelector("#containerColor").value}),n.close()}})}async function yt(){Te("Add Parent Container").then(async e=>{if(!e)return;const{id:t,name:o,color:n}=e;!t||!o||(Array.isArray(w.parentContainers)||(w.parentContainers=[]),w.parentContainers.push({id:t,name:o,color:n}),await q(w),Z(),f("Parent container added!","green"))})}async function xt(e){const t=w.parentContainers[e];Te("Edit Parent Container",t).then(async o=>{if(!o)return;const{id:n,name:r,color:i}=o;!n||!r||(w.parentContainers[e]={id:n,name:r,color:i},await q(w),Z(),f("Parent container updated!","blue"))})}async function St(e){const t=w.locations.filter(o=>o.parent===w.parentContainers[e].id);if(t.length>0)return f(`Cannot delete - ${t.length} locations are using this parent!`,"red");de("Delete this parent container? This will not affect locations.").then(async o=>{o&&(w.parentContainers.splice(e,1),await q(w),Z(),f("Parent container deleted!","red"))})}async function kt(){var e,t,o,n,r;w=await $(),Z(),N("locations","locList"),N("statuses","statList"),N("vendors","vendorList"),Q(),(e=document.getElementById("addParentContainerBtn"))==null||e.addEventListener("click",yt),(t=document.getElementById("addContractorBtn"))==null||t.addEventListener("click",ht),(o=document.getElementById("addLocBtn"))==null||o.addEventListener("click",()=>oe("locations","locList","Location")),(n=document.getElementById("addStatBtn"))==null||n.addEventListener("click",()=>oe("statuses","statList","Status")),(r=document.getElementById("addVendorBtn"))==null||r.addEventListener("click",()=>oe("vendors","vendorList","Vendor"))}const It=Object.freeze(Object.defineProperty({__proto__:null,allowedStatusesByParent:Be,firebaseConfig:gt,getAllowedStatusesForLocation:$e,getDashboardStats:vt,getLocationsByParent:mt,getParentContainerById:ft,initSettings:kt,loadSettings:$,saveSettings:q},Symbol.toStringTag,{value:"Module"}));window.isInitialLoad=!0;let R=null,ye=window.innerWidth<900?"mobile":"desktop";function L(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/\//g,"&#x2F;"):""}function Ne(){return window.innerWidth<900||"ontouchstart"in window}function Ue(e,t){window._unitDataMap||(window._unitDataMap=new Map);const o=`unit_${t}_${e.chargerId}`;return window._unitDataMap.set(o,e),o}function z(e){return window._unitDataMap?window._unitDataMap.get(e):null}async function Lt(){return await ie("inventoryCrud")&&await ie("settings")}async function T(){return await ie("inventoryCrud")}async function ee(){return await _()==="SuperAdmin"}async function Ct(){return await _()==="SuperAdmin"}function je(){var r,i;const e=document.getElementById("main-content"),t=e==null?void 0:e.querySelector("#searchInput"),o=(t==null?void 0:t.value.toLowerCase())||"";let n=[...window.inventory];return o&&(n=n.filter(s=>[s.chargerId,s.chargerSerial,s.simNumber,s.product,s.model,s.status,s.location,s.notes,s.lastAction,s.addedBy,s.invoiceNumber].some(u=>(u||"").toLowerCase().includes(o)))),((r=window.inventoryFilters)==null?void 0:r.selectedStatuses.size)>0&&(n=n.filter(s=>window.inventoryFilters.selectedStatuses.has(s.status))),((i=window.inventoryFilters)==null?void 0:i.selectedLocations.size)>0&&(n=n.filter(s=>window.inventoryFilters.selectedLocations.has(s.location))),n}async function He(){return(await window.db.collection("inventory").get()).docs.map(t=>({chargerId:t.id,...t.data()}))}async function Ot(e){const o=await window.db.collection("inventory").get(),n=[];for(let i=0;i<o.docs.length;i+=450){const s=window.db.batch();o.docs.slice(i,i+450).forEach(u=>{s.delete(window.db.collection("inventory").doc(u.id))}),n.push(s.commit())}await Promise.all(n);const r=[];for(let i=0;i<e.length;i+=450){const s=window.db.batch();e.slice(i,i+450).forEach(u=>{s.set(window.db.collection("inventory").doc(u.chargerId),{chargerSerial:u.chargerSerial||"",simNumber:u.simNumber||"",model:u.model||"",product:u.product||"",location:u.location,status:u.status,assigned:u.assigned||!1,created:u.created||new Date().toISOString(),addedBy:u.addedBy||M(),lastAction:u.lastAction||new Date().toISOString(),notes:u.notes||"",...u.isAsset!==void 0&&{isAsset:u.isAsset},...u.invoiceNumber&&{invoiceNumber:u.invoiceNumber},...u.contractorId&&{contractorId:u.contractorId}})}),r.push(s.commit())}await Promise.all(r)}async function A(e){try{ue(e)}catch(t){throw f(t.message,"red"),t}return Dt(async()=>{await window.db.collection("inventory").doc(e.chargerId).set({chargerSerial:e.chargerSerial||"",simNumber:e.simNumber||"",model:e.model||"",product:e.product||"",location:e.location,status:e.status,assigned:e.assigned||!1,created:e.created||new Date().toISOString(),addedBy:e.addedBy||M(),lastAction:e.lastAction||new Date().toISOString(),notes:e.notes||"",...e.isAsset!==void 0&&{isAsset:e.isAsset},...e.invoiceNumber&&{invoiceNumber:e.invoiceNumber},...e.contractorId&&{contractorId:e.contractorId}});const t=window.inventory.findIndex(o=>o.chargerId===e.chargerId);t>=0?window.inventory[t]=e:window.inventory.push(e)},"item update")}function Et(){R&&R(),R=window.db.collection("inventory").onSnapshot(ge(t=>{try{window.inventory=t.docs.map(o=>({chargerId:o.id,...o.data()})),document.body.dataset.page==="inventory"&&document.getElementById("main-content")&&!window.isInitialLoad&&P()}catch(o){console.error("Real-time update failed:",o),f("Connection issue - please refresh","yellow")}},500),t=>{console.error("Firestore listener error:",t),f("Database connection lost - please refresh","red")})}window.addEventListener("beforeunload",()=>{R&&R(),window._globalSearchCache=null});async function Dt(e,t){try{return await e()}catch(o){throw console.error(`Firebase ${t} failed:`,o),f(`Database error: ${t} failed. Please try again.`,"red"),o}}function ue(e){const o=["chargerId","location","status"].filter(n=>!e[n]||String(e[n]).trim()==="");if(o.length>0)throw new Error(`Missing required fields: ${o.join(", ")}`);if(e.chargerId&&e.chargerId.length>50)throw new Error("Charger ID too long (max 50 characters)");if(e.chargerSerial&&e.chargerSerial.length>50)throw new Error("Charger Serial too long (max 50 characters)");if(e.simNumber&&e.simNumber.length>20)throw new Error("SIM Number too long (max 20 characters)");if(e.chargerId&&!/^[a-zA-Z0-9\-_]+$/.test(e.chargerId))throw new Error("Charger ID contains invalid characters (only letters, numbers, hyphens, and underscores allowed)");if(e.simNumber&&e.simNumber.length>0&&!/^\d+$/.test(e.simNumber))throw new Error("SIM Number must contain only digits");if(e.status==="Installed"&&!e.location)throw new Error("Installed items must have a location");return!0}function j(e,t=2e3){if(!e)return!1;if(e.dataset.submitting==="true")return f("Please wait, processing...","yellow"),!1;const o=e.textContent;return e.textContent="Processing...",e.disabled=!0,e.dataset.submitting="true",setTimeout(()=>{e.dataset.submitting="false",e.textContent=o,e.disabled=!1},t),!0}async function Bt(){return(await window.db.collection("auditLog").orderBy("date","asc").get()).docs.map(t=>({id:t.id,...t.data()}))}async function U(e){if(!e||e.length===0){console.warn("No audit entries to save");return}try{const t=window.db.batch(),o=window.db.collection("auditLog");e.forEach(n=>{const r=o.doc();t.set(r,{date:n.date||new Date().toISOString(),action:n.action||"Unknown Action",chargerId:n.chargerId||"",chargerSerial:n.chargerSerial||"",simNumber:n.simNumber||"",product:n.product||"",from:n.from||"",to:n.to||"",statusFrom:n.statusFrom||"",statusTo:n.statusTo||"",user:n.user||M(),comment:n.comment||"",contractorId:n.contractorId||"",contractorName:n.contractorName||""})}),await t.commit(),console.log(`Successfully saved ${e.length} audit log entries`)}catch(t){console.error("Failed to save audit log:",t),f("Warning: Action completed but audit log failed to save","yellow")}}window.selectedUnits=[];window.inventoryPage=1;window.inventoryPageSize=30;const V={"Back Warehouse":{bg:"#f1f5ff",color:"#3b4252"},"Back Warehouse - Container 1":{bg:"#def7ec",color:"#047857"},"Back Warehouse - Container 2":{bg:"#fde2e4",color:"#b91c1c"},"Technician/Contractor":{bg:"#f0fdf4",color:"#166534"},"Customer Stock":{bg:"#fef9c3",color:"#92400e"},"Public Network Stock":{bg:"#fce7f3",color:"#8b5cf6"},Customer:{bg:"#fef9c3",color:"#92400e"},Public:{bg:"#fce7f3",color:"#8b5cf6"},"Demo Site":{bg:"#e0f2fe",color:"#0369a1"},"Service Center":{bg:"#fef3c7",color:"#d97706"}};function Y(e){if(!e)return{bg:"#f3f4f6",color:"#1f2937"};let t=e.trim();if(V[t])return V[t];for(let o in V)if(t.startsWith(o))return V[o];return t.includes("Contractor")||t.includes("Technician")?{bg:"#f0fdf4",color:"#166534"}:t.includes("Customer")?{bg:"#fef9c3",color:"#92400e"}:t.includes("Public")?{bg:"#fce7f3",color:"#8b5cf6"}:{bg:"#f3f4f6",color:"#1f2937"}}const $t={"In Stock":{bg:"#e0f7fa",color:"#00838f"},Installed:{bg:"#e1ffe6",color:"#1b5e20"},Reserved:{bg:"#fff9c4",color:"#827717"},Faulty:{bg:"#ffebee",color:"#c62828"},RMA:{bg:"#e1bee7",color:"#6a1b9a"},Demo:{bg:"#e3f2fd",color:"#1565c0"},Loaner:{bg:"#f3e5f5",color:"#4527a0"},Decommissioned:{bg:"#cfd8dc",color:"#37474f"},Unknown:{bg:"#ffe0b2",color:"#ef6c00"},Shipped:{bg:"#e8f5e8",color:"#2e7d32"},Returned:{bg:"#fff3e0",color:"#f57c00"},Testing:{bg:"#f3e5f5",color:"#7b1fa2"}};function K(e){return e?$t[e]||{bg:"#ececec",color:"#888888"}:{bg:"#f5f5f5",color:"#666666"}}async function H(){const e=await $(),t=(e.contractors||[]).map(o=>({name:o.name,parent:"contractor",isContractor:!0,company:o.company,phone:o.phone,id:o.id}));return[...e.locations||[],...t]}function ne(e,t){e&&(e.onmouseenter=o=>{const n=document.getElementById("hoverLegend");if(!n)return;n.textContent=t;const r=e.getBoundingClientRect();n.style.left=r.left-n.offsetWidth-16+"px",n.style.top=r.top+r.height/2-n.offsetHeight/2+"px",n.classList.remove("hidden"),n.classList.add("show")},e.onmousemove=o=>{const n=document.getElementById("hoverLegend");if(!n)return;const r=e.getBoundingClientRect();n.style.left=r.left-n.offsetWidth-16+"px",n.style.top=r.top+r.height/2-n.offsetHeight/2+"px"},e.onmouseleave=()=>{const o=document.getElementById("hoverLegend");o&&(o.classList.remove("show"),o.classList.add("hidden"))})}window.inventory=[];let W=null,re=null;window.openBulkAddDialog=async function(){if(!await T()){f("You don't have permission to manage inventory","red");return}const e=await $(),t=document.getElementById("actionDialog"),o=await _();t.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-full sm:w-[32rem] max-w-2xl">
    <h3 class="font-bold mb-2">Bulk Add Units</h3>
    <div class="text-sm text-gray-600 mb-2">
      Paste columns: <b>Model</b>, <b>Charger ID, Serial, SIM Number, Comment</b> (one per line)<br>
      <b>Example:</b> SMART HOME MINI WALLBOX 5m Cable, 0312108101120001,TSAC03-24120109,89354080012345678901,<span class="text-blue-700">belongs to Johnn - 50st LA</span>
    </div>
    <label>Default Location:
      <select id="bulkLocation" class="border px-2 py-1 rounded w-full">
      ${(e.locations||[]).map(n=>`<option value="${n.name}" ${n.name==="Back Warehouse"?"selected":""}>${n.name}</option>`).join("")}
      </select>
    </label>
    <label>Default Status:
      <select id="bulkStatus" class="border px-2 py-1 rounded w-full">
      ${(e.statuses||[]).filter(n=>o==="Agent"?!["Decommissioned","Lost"].includes(n):!0).map(n=>`<option value="${n}" ${n==="In Stock"?"selected":""}>${n}</option>`).join("")}
      </select>
    </label>
    <label>Default Comment (optional):
      <textarea id="bulkComment" rows="2" class="border px-2 py-1 rounded w-full" placeholder="Optional comment for all items"></textarea>
    </label>
    <textarea id="bulkText" rows="7" class="border px-2 py-1 rounded w-full" placeholder="Paste here"></textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Add All</button>
    </div>
  </form>
`,t.showModal(),t.addEventListener("click",function(n){n.target===t&&t.close()}),t.querySelector('button[value="cancel"]').onclick=n=>{n.preventDefault(),t.close()},t.querySelector("form").onsubmit=async n=>{n.preventDefault();const r=n.target.querySelector('button[value="ok"]');if(!j(r))return;const i=t.querySelector("#bulkText").value.trim().split(`
`),s=t.querySelector("#bulkLocation").value,a=t.querySelector("#bulkStatus").value,u=t.querySelector("#bulkComment").value.trim();t.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>';let l=[...window.inventory],p=0,d=new Set(l.map(g=>g.chargerId));for(let g of i){let[b,y,h,x,v]=g.split(/\t|,/).map(m=>m==null?void 0:m.trim());if(!y||d.has(y))continue;d.add(y);const S={chargerId:y,chargerSerial:h||"",simNumber:x||"",model:b||"",product:b||"",location:s,status:a,assigned:!1,created:new Date().toISOString(),addedBy:M(),lastAction:new Date().toISOString(),notes:v||u};try{ue(S),l.push(S),p++}catch(m){console.warn(`Skipping invalid item ${y}:`,m.message),f(`Skipped invalid item ${y}: ${m.message}`,"yellow")}}for(const g of l.slice(window.inventory.length))await A(g);const c=l.slice(window.inventory.length).map(g=>({date:new Date().toISOString(),action:"Bulk Add",chargerId:g.chargerId,chargerSerial:g.chargerSerial,simNumber:g.simNumber,product:g.product,from:"",to:g.location,statusFrom:"",statusTo:g.status,user:M(),comment:g.notes}));try{await U(c),console.log("Bulk add audit entries saved:",c.length)}catch(g){console.error("Failed to save bulk add audit log:",g),f("Warning: Items added but audit log failed","yellow")}f(`Bulk added ${p} units`,"green"),t.close(),window.inventory=l,B(document.getElementById("main-content"))}};window.bulkDelete=async function(){if(!await ee()){f("You don't have permission to delete items","red");return}if(!confirm(`Are you sure you want to delete ${window.selectedUnits.length} unit(s)?`))return;const e=window.db.batch();window.selectedUnits.forEach(o=>{e.delete(window.db.collection("inventory").doc(o))}),await e.commit(),window.inventory=window.inventory.filter(o=>!window.selectedUnits.includes(o.chargerId));const t=window.selectedUnits.map(o=>({date:new Date().toISOString(),action:"Bulk Delete",chargerId:o,user:M()}));await U(t),f(`Deleted ${window.selectedUnits.length} unit(s)`,"red"),window.selectedUnits=[],B(document.getElementById("main-content"))};window.clearBulkSelection=function(){window.selectedUnits=[],P(),X()};window.toggleRowMenu=function(e){document.querySelectorAll(".table-dot-menu").forEach((o,n)=>{n!==e&&o.classList.remove("show")});const t=document.getElementById(`row-menu-${e}`);t&&t.parentNode.classList.toggle("show"),document.addEventListener("click",function o(n){t.contains(n.target)||(t.parentNode.classList.remove("show"),document.removeEventListener("click",o))})};window.openCreateShipmentDialog=function(){typeof window.openShipmentDialog=="function"?window.openShipmentDialog():typeof openShipmentDialog=="function"?openShipmentDialog():f("Shipment dialog function not found","red")};async function Fe(){const e=await T();if(await Ct(),window.innerWidth<640||!e){["addItemBtn","bulkAddBtn","addShipmentBtn"].forEach(i=>{const s=document.getElementById(i);s&&s.remove()});return}if(document.getElementById("addItemBtn")||document.getElementById("bulkAddBtn")||document.getElementById("addShipmentBtn"))return;document.body.insertAdjacentHTML("beforeend",`
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
      <dialog id="barcodeScanDialog" class="rounded-xl p-4"></dialog>
    `);const o=document.getElementById("addItemBtn"),n=document.getElementById("bulkAddBtn"),r=document.getElementById("addShipmentBtn");if(o&&(o.onclick=()=>J()),n&&(n.onclick=window.openBulkAddDialog),r&&(r.onclick=window.openCreateShipmentDialog),!document.getElementById("barcodeScanDialog")){const i=document.createElement("dialog");i.id="barcodeScanDialog",i.className="rounded-xl p-4",document.body.appendChild(i)}}document.addEventListener("DOMContentLoaded",async()=>{if(document.body.dataset.page==="inventory"){window.isInitialLoad=!0;try{Ut(),F("Initializing Firebase connection...");let e=0;for(;!window.db&&e<50;)await new Promise(t=>setTimeout(t,100)),e++;if(!window.db)throw new Error("Firebase not initialized after 5 seconds");F("Loading inventory data..."),console.log("Loading inventory data..."),window.inventory=await He(),console.log("Inventory loaded:",window.inventory.length,"items"),F("Setting up user interface..."),await Fe(),B(document.getElementById("main-content")),window.dispatchEvent(new Event("resize")),F("Initializing features..."),setTimeout(()=>{Oe(),pe(),Mt(),qt(),F("Starting real-time updates..."),window.isInitialLoad=!1,Et(),F("Inventory ready!"),setTimeout(()=>{Le()},500)},150)}catch(e){console.error("Failed to load inventory:",e),Le();const t=document.getElementById("main-content");t&&(t.innerHTML=`
          <div class="flex items-center justify-center h-screen">
            <div class="text-center">
              <div class="text-red-500 mb-4">
                <svg class="w-16 h-16 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                </svg>
              </div>
              <p class="text-red-600 mb-4">Failed to load inventory</p>
              <button onclick="location.reload()" class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Retry
              </button>
            </div>
          </div>
        `),f("Failed to load inventory data. Please refresh the page.","red")}}});function Oe(){const e=document.getElementById("main-content");if(!e){console.log("Main content not found for download handlers");return}const t=e.querySelector("#downloadCSV"),o=e.querySelector("#downloadExcel");t&&!t.onclick&&(t.onclick=n=>{n.preventDefault(),n.stopPropagation(),console.log("CSV download triggered");try{typeof window.downloadInventoryCSV=="function"?window.downloadInventoryCSV():(console.error("downloadInventoryCSV function not found"),f("CSV download function not available","red"))}catch(r){console.error("CSV download error:",r),f("CSV download failed: "+r.message,"red")}},console.log("CSV download handler attached")),o&&!o.onclick&&(o.onclick=n=>{n.preventDefault(),n.stopPropagation(),console.log("Excel download triggered");try{typeof window.downloadInventoryExcel=="function"?window.downloadInventoryExcel():(console.error("downloadInventoryExcel function not found"),f("Excel download function not available","red"))}catch(r){console.error("Excel download error:",r),f("Excel download failed: "+r.message,"red")}},console.log("Excel download handler attached"))}function Mt(){const e=document.getElementById("addItemBtn"),t=document.getElementById("bulkAddBtn"),o=document.getElementById("addShipmentBtn");ne(e,"Add single charger"),ne(t,"Bulk add chargers"),ne(o,"Create shipment")}function qt(){const e=sessionStorage.getItem("pendingInventoryAction");if(e){const{action:t,unit:o}=JSON.parse(e);sessionStorage.removeItem("pendingInventoryAction"),setTimeout(()=>{t==="move"&&typeof window.openMoveDialog=="function"&&window.openMoveDialog(o),t==="edit"&&typeof window.openEditDialog=="function"&&window.openEditDialog(o),t==="view"&&typeof window.openDetailsDialog=="function"&&window.openDetailsDialog(o)},300)}}async function ze(e){const t=await $(),o=await _();let n=$e(e,t);return(!n||n.length===0)&&(n=t.statuses||[]),o==="Agent"&&(n=n.filter(r=>!["Decommissioned","Lost"].includes(r))),n}function B(e){if(Ne()){Pt(e,window.inventory);return}e.innerHTML=`
    <div class="flex flex-wrap gap-3 mb-4 items-center">
      <input id="searchInput" type="text" placeholder="Search Anything" class="border px-3 py-1 rounded" style="min-width:200px;">

            <!-- Multi-select Status Filter -->
      <div class="relative">
        <button id="statusFilterBtn" class="border px-3 py-1 rounded bg-white flex items-center gap-2 min-w-32">
          <span id="statusFilterText">All Statuses</span>
          <span>▼</span>
        </button>
        <div id="statusFilterDropdown" class="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg z-50 hidden min-w-48 max-h-60 overflow-y-auto">
          <div class="p-2 border-b">
            <label class="flex items-center gap-2 text-sm font-semibold">
              <input type="checkbox" id="selectAllStatuses">
              Select All
            </label>
          </div>
          <div id="statusCheckboxes" class="p-2 space-y-1"></div>
        </div>
      </div>
      
      <!-- Multi-select Location Filter -->
      <div class="relative">
        <button id="locationFilterBtn" class="border px-3 py-1 rounded bg-white flex items-center gap-2 min-w-32">
          <span id="locationFilterText">All Locations</span>
          <span>▼</span>
        </button>
        <div id="locationFilterDropdown" class="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg z-50 hidden min-w-48 max-h-60 overflow-y-auto">
          <div class="p-2 border-b">
            <label class="flex items-center gap-2 text-sm font-semibold">
              <input type="checkbox" id="selectAllLocations">
              Select All
            </label>
          </div>
          <div id="locationCheckboxes" class="p-2 space-y-1"></div>
        </div>
      </div>
      
      <button id="downloadCSV" class="bg-gray-200 px-3 py-1 rounded">Download CSV</button>
      <button id="downloadExcel" class="bg-gray-200 px-3 py-1 rounded">Download Excel</button>
    </div>
    <div class="inventory-scroll-area min-h-[340px] overflow-x-auto" style="max-height:70vh;">
      <div class="min-w-max">
        <table class="w-full table-auto border rounded-xl bg-white dark:bg-gray-900 shadow" style="min-width: 1200px;">
          <thead class="table-header">
            <tr>
              <th class="p-2 border-b w-12 resize-x overflow-hidden"><input type="checkbox" id="selectAll"></th>
              <th class="p-2 border-b min-w-32 resize-x overflow-hidden">Model</th>
              <th class="p-2 border-b min-w-32 resize-x overflow-hidden">Charger ID</th>
              <th class="p-2 border-b min-w-24 resize-x overflow-hidden">Serial</th>
              <th class="p-2 border-b min-w-28 resize-x overflow-hidden">SIM Number</th>
              <th class="p-2 border-b min-w-20 resize-x overflow-hidden">Status</th>
              <th class="p-2 border-b min-w-24 resize-x overflow-hidden">Location</th>
              <th class="p-2 border-b min-w-32 resize-x overflow-hidden">Comment</th>
              <th class="p-2 border-b min-w-32 resize-x overflow-hidden">Last Action</th>
              <th class="p-2 border-b w-20">Actions</th>
            </tr>
          </thead>
          <tbody id="inventoryTableBody"></tbody>
        </table>
      </div>
    </div>
    <div id="bulkActionBar"></div>
    <div id="paginationBar"></div>
  `,window.inventoryFilters||(window.inventoryFilters={selectedStatuses:new Set,selectedLocations:new Set}),P(),setTimeout(()=>{pe(),At()},50)}window.addEventListener("resize",()=>{const e=Ne()?"mobile":"desktop";e!==ye&&(ye=e,Fe(),B(document.getElementById("main-content")),setTimeout(()=>{Oe()},100))});function At(){if(!document.getElementById("main-content"))return;const t=[...new Set(window.inventory.map(n=>n.status))].filter(Boolean).sort(),o=[...new Set(window.inventory.map(n=>n.location))].filter(Boolean).sort();xe("status",t),xe("location",o),document.addEventListener("click",n=>{var r,i;!n.target.closest("#statusFilterBtn")&&!n.target.closest("#statusFilterDropdown")&&((r=document.getElementById("statusFilterDropdown"))==null||r.classList.add("hidden")),!n.target.closest("#locationFilterBtn")&&!n.target.closest("#locationFilterDropdown")&&((i=document.getElementById("locationFilterDropdown"))==null||i.classList.add("hidden"))})}function xe(e,t,o){const n=document.getElementById(`${e}FilterBtn`),r=document.getElementById(`${e}FilterDropdown`),i=document.getElementById(`${e}Checkboxes`),s=document.getElementById(`selectAll${e==="status"?"Statuses":"Locations"}`);!n||!r||!i||!s||(i.innerHTML=t.map(a=>`
      <label class="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded cursor-pointer">
        <input type="checkbox" value="${a}" class="${e}-checkbox">
        ${a}
      </label>
    `).join(""),n.onclick=a=>{var l;a.stopPropagation(),r.classList.toggle("hidden");const u=e==="status"?"location":"status";(l=document.getElementById(`${u}FilterDropdown`))==null||l.classList.add("hidden")},s.onchange=a=>{const u=i.querySelectorAll(`.${e}-checkbox`),l=e==="status"?"selectedStatuses":"selectedLocations";a.target.checked?u.forEach(p=>{p.checked=!0,window.inventoryFilters[l].add(p.value)}):u.forEach(p=>{p.checked=!1,window.inventoryFilters[l].delete(p.value)}),Se(),window.inventoryPage=1,P()},i.addEventListener("change",a=>{if(a.target.classList.contains(`${e}-checkbox`)){const u=e==="status"?"selectedStatuses":"selectedLocations";a.target.checked?window.inventoryFilters[u].add(a.target.value):window.inventoryFilters[u].delete(a.target.value);const l=i.querySelectorAll(`.${e}-checkbox`),p=i.querySelectorAll(`.${e}-checkbox:checked`);s.checked=l.length===p.length,s.indeterminate=p.length>0&&p.length<l.length,Se(),window.inventoryPage=1,P()}}))}function Se(){const e=document.getElementById("statusFilterText");if(e){const o=window.inventoryFilters.selectedStatuses.size;e.textContent=o===0?"All Statuses":o===1?[...window.inventoryFilters.selectedStatuses][0]:`${o} Statuses`}const t=document.getElementById("locationFilterText");if(t){const o=window.inventoryFilters.selectedLocations.size;t.textContent=o===0?"All Locations":o===1?[...window.inventoryFilters.selectedLocations][0]:`${o} Locations`}}function pe(){const e=document.getElementById("main-content");if(!e)return;const t=e.querySelector("#searchInput");if(!t){console.log("Search elements not found, retrying..."),setTimeout(pe,100);return}t.oninput=ge(()=>{window.inventoryPage=1,P()},250),console.log("Search functionality initialized")}async function P(){var h,x;const e=document.getElementById("main-content");if(!e)return;const t=await ee(),o=e.querySelector("#searchInput"),n=e.querySelector("#inventoryTableBody");if(!o||!n)return;const r=o.value.toLowerCase();let i=window.inventory;r&&(i=i.filter(v=>[v.chargerId,v.chargerSerial,v.simNumber,v.product,v.model,v.status,v.location,v.notes,v.lastAction,v.addedBy,v.invoiceNumber].some(m=>(m||"").toLowerCase().includes(r)))),((h=window.inventoryFilters)==null?void 0:h.selectedStatuses.size)>0&&(i=i.filter(v=>window.inventoryFilters.selectedStatuses.has(v.status))),((x=window.inventoryFilters)==null?void 0:x.selectedLocations.size)>0&&(i=i.filter(v=>window.inventoryFilters.selectedLocations.has(v.location)));const s=window.inventoryPageSize,a=window.inventoryPage,u=(a-1)*s,l=u+s,p=i.slice(u,l);window.selectedUnits=window.selectedUnits.filter(v=>window.inventory.some(S=>S.chargerId===v)),n.innerHTML=p.map((v,S)=>{const m=Ue(v,S);return`
    <tr class="inv-row${window.selectedUnits.includes(v.chargerId)?" selected":""}" data-idx="${S}" data-id="${v.chargerId}">
        <td class="p-2 border-b text-center">
          <input type="checkbox" data-chargerid="${v.chargerId}" ${window.selectedUnits.includes(v.chargerId)?"checked":""}>
        </td>
        <td class="p-2 border-b table-cell">${v.model||""}</td>
        <td class="p-2 border-b table-cell">${v.chargerId}</td>
        <td class="p-2 border-b table-cell">${v.chargerSerial||""}</td>
        <td class="p-2 border-b table-cell">${v.simNumber||""}</td>
        <td class="p-2 border-b table-cell">
          <span class="rounded-full px-3 py-1 text-xs font-semibold"
            style="
              background:${K(v.status).bg};
              color:${K(v.status).color};
              display:inline-block;
              min-width:86px;
              text-align:center;
              letter-spacing:0.03em;
              box-shadow:0 1px 3px 0 #0001;
            "
          >${v.status}</span>
        </td>
        <td class="p-2 border-b table-cell">
          <span class="rounded-full px-3 py-1 text-xs font-semibold"
            style="
              background:${Y(v.location).bg};
              color:${Y(v.location).color};
              min-width: 86px;
              display:inline-block;
              text-align:center;
              letter-spacing:0.03em;
              box-shadow:0 1px 3px 0 #0001;
            "
          >${v.location}</span>
        </td>
        <td class="p-2 border-b table-cell text-xs text-gray-600 max-w-32 truncate" title="${(v.notes||"").replace(/"/g,"&quot;")}">${v.notes||"-"}</td>
        <td class="p-2 border-b table-cell">${new Date(v.lastAction).toLocaleString()}</td>
        <td class="p-2 border-b text-center relative table-dot-menu">
          <button class="px-2 py-1 text-lg font-bold" onclick="event.stopPropagation();toggleRowMenu(${S})">⋮</button>
          <div class="table-dot-menu-content" id="row-menu-${S}">
            <button onclick="openDetailsDialogSafe('${m}')">Details</button>
            <button onclick="openMoveDialogSafe('${m}')">Move</button>
            <button onclick="openStatusDialogSafe('${m}')">Change Status</button>
            <button onclick="openEditDialogSafe('${m}')">Edit</button>
            ${t?`<button class="delete" onclick='deleteUnit("${v.chargerId}")'>Delete</button>`:""}
          </div>
        </td>
        </div>
      </td>
    </tr>`}).join(""),n.querySelectorAll(".table-dot-menu > button").forEach((v,S)=>{v.onclick=m=>{m.stopPropagation(),document.querySelectorAll(".table-dot-menu").forEach((k,I)=>{I!==S&&k.classList.remove("show")}),v.parentNode.classList.toggle("show"),document.addEventListener("click",function k(I){v.parentNode.contains(I.target)||(v.parentNode.classList.remove("show"),document.removeEventListener("click",k))})}}),n.querySelectorAll('input[type="checkbox"]').forEach(v=>{v.onchange=S=>{const m=S.target.dataset.chargerid;S.target.checked?window.selectedUnits.includes(m)||window.selectedUnits.push(m):window.selectedUnits=window.selectedUnits.filter(k=>k!==m),X(),v.closest("tr").classList.toggle("selected",v.checked)}});const d=e.querySelector("#selectAll");if(d){const v=p.length>0&&p.every(S=>window.selectedUnits.includes(S.chargerId));d.checked=v,d.indeterminate=!v&&p.some(S=>window.selectedUnits.includes(S.chargerId)),d.onchange=S=>{S.target.checked?p.forEach(m=>{window.selectedUnits.includes(m.chargerId)||window.selectedUnits.push(m.chargerId)}):window.selectedUnits=[],P(),X()}}const c=e.querySelector("#paginationBar"),g=Math.max(1,Math.ceil(i.length/s)),b=Math.min(u+1,i.length),y=Math.min(l,i.length);c.innerHTML=`
  <div class="flex flex-col items-center gap-3 py-4">
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <div class="flex items-center gap-2">
        <button id="prevPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${a===1?"opacity-50 cursor-not-allowed":""}" ${a===1?"disabled":""}>Prev</button>
        <span id="pageNumSpan" class="font-semibold">Page ${a} of ${g}</span>
        <button id="nextPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${a===g?"opacity-50 cursor-not-allowed":""}" ${a===g?"disabled":""}>Next</button>
      </div>
      <label class="flex items-center gap-1 text-sm">
        Show
        <select id="pageSizeSelect" class="border px-2 py-1 rounded">
          <option value="30" ${s===30?"selected":""}>30</option>
          <option value="50" ${s===50?"selected":""}>50</option>
          <option value="100" ${s===100?"selected":""}>100</option>
        </select>
        entries per page
      </label>
    </div>
    <div class="text-sm text-gray-600 dark:text-gray-400 text-center">
      Showing ${b} to ${y} of ${i.length} entries
      ${i.length!==window.inventory.length?` (filtered from ${window.inventory.length} total)`:""}
    </div>
  </div>
`,e.querySelector("#prevPageBtn").onclick=()=>{window.inventoryPage>1&&(window.inventoryPage--,P())},e.querySelector("#nextPageBtn").onclick=()=>{window.inventoryPage<g&&(window.inventoryPage++,P())},e.querySelector("#pageSizeSelect").onchange=v=>{window.inventoryPageSize=parseInt(v.target.value,10),window.inventoryPage=1,P()},X()}window.openDetailsDialogSafe=function(e){const t=z(e);t&&typeof window.openDetailsDialog=="function"&&window.openDetailsDialog(t)};window.openMoveDialogSafe=function(e){const t=z(e);t&&typeof window.openMoveDialog=="function"&&window.openMoveDialog(t)};window.openStatusDialogSafe=function(e){const t=z(e);t&&typeof window.openStatusDialog=="function"&&window.openStatusDialog(t)};window.openEditDialogSafe=function(e){const t=z(e);t&&typeof window.openEditDialog=="function"&&window.openEditDialog(t)};function ke(){["addItemDialog","actionDialog","shipmentDialog","globalSearchDialog","moveDialog","editDialog","barcodeScanDialog"].forEach(e=>{if(!document.getElementById(e)){const t=document.createElement("dialog");t.id=e,t.className="rounded-xl p-4 max-w-md mx-auto",document.body.appendChild(t)}})}function Pt(e,t){ke(),e.innerHTML=`
    <div class="sticky top-0 z-20 bg-white dark:bg-gray-900 p-3 flex gap-2 items-center shadow">
      <input id="searchInput" type="text" placeholder="Search anything..." class="flex-1 border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800" />
      <button id="scanBtn" class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center" title="Scan Barcode">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <circle cx="12" cy="13.5" r="3.5" />
        </svg>
      </button>
    </div>
    <div id="mobileInventoryList" class="flex flex-col gap-3 mt-3 px-3 pb-32"></div>
    <button id="fabAdd" class="fixed bottom-24 right-6 bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-3xl z-50">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="white"/>
        <path d="M12 8v8m4-4H8" stroke="white"/>
      </svg>
    </button>
  `,ke();const o=e.querySelector("#mobileInventoryList"),n=e.querySelector("#searchInput");Ie(o,t),n.oninput=ge(r=>{const i=r.target.value.toLowerCase();let s=[...window.inventory];i&&(s=s.filter(a=>[a.chargerId,a.chargerSerial,a.simNumber,a.product,a.model,a.status,a.location,a.notes,a.lastAction,a.addedBy,a.invoiceNumber].some(l=>(l||"").toLowerCase().includes(i)))),Ie(o,s),i&&s.length===0?o.innerHTML=`
        <div class="flex items-center justify-center h-32">
          <div class="text-center">
            <div class="text-gray-500 dark:text-gray-400">No results found for "${i}"</div>
            <button onclick="document.getElementById('searchInput').value=''; document.getElementById('searchInput').dispatchEvent(new Event('input'))" 
                    class="mt-2 text-blue-600 hover:text-blue-700">Clear search</button>
          </div>
        </div>
      `:i&&s.length>0&&o.insertAdjacentHTML("afterbegin",`
        <div class="bg-blue-50 dark:bg-blue-900 rounded-lg p-3 mb-3">
          <div class="text-sm text-blue-700 dark:text-blue-300">
            Found ${s.length} result${s.length!==1?"s":""} for "${i}"
            <button onclick="document.getElementById('searchInput').value=''; document.getElementById('searchInput').dispatchEvent(new Event('input'))" 
                    class="ml-2 text-blue-600 hover:text-blue-700 underline">Clear</button>
          </div>
        </div>
      `)},250),e.querySelector("#scanBtn").onclick=()=>{typeof window.openBarcodeScanner=="function"?window.openBarcodeScanner(r=>{if(r){const i=window.inventory.find(s=>s.chargerSerial===r||s.chargerId===r||s.simNumber===r);i?(n.value=r,n.dispatchEvent(new Event("input")),Re(i)):f(`No unit found with barcode: ${r}`,"red")}}):f("Barcode scanner not available","red")},e.querySelector("#fabAdd").onclick=async()=>{await T()?typeof J=="function"?J():f("Add function not available","red"):f("You don't have permission to add inventory","red")}}function Re(e){const t=document.getElementById("actionDialog");window._tempDialogUnit=e;const o=K(e.status),n=Y(e.location);t.innerHTML=`
    <div class="w-full max-w-sm mx-auto">
      <div class="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
        Unit Found
      </div>
      
      <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4 space-y-3">
        <div class="font-bold text-lg text-gray-900 dark:text-gray-100">${L(e.chargerId)}</div>
        
        <div class="flex gap-2">
          <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full shadow-sm"
                style="background-color: ${o.bg}; color: ${o.color}; border: 1px solid ${o.color}20;">
            ${L(e.status)}
          </span>
          <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full shadow-sm"
                style="background-color: ${n.bg}; color: ${n.color}; border: 1px solid ${n.color}20;">
            ${L(e.location)}
          </span>
        </div>
        
        <div class="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span class="text-gray-500 dark:text-gray-400">Model:</span>
            <div class="text-gray-900 dark:text-gray-100 truncate" title="${L(e.model||e.product||"")}">
              ${L(e.model||e.product||"Unknown")}
            </div>
          </div>
          <div>
            <span class="text-gray-500 dark:text-gray-400">Serial:</span>
            <div class="text-gray-900 dark:text-gray-100 truncate" title="${L(e.chargerSerial||"")}">
              ${e.chargerSerial?L(e.chargerSerial):'<span class="text-gray-400">Not set</span>'}
            </div>
          </div>
        </div>
        
        ${e.notes?`
          <div class="text-sm">
            <span class="text-gray-500 dark:text-gray-400">Notes:</span>
            <div class="text-gray-700 dark:text-gray-300 mt-1 line-clamp-2" title="${L(e.notes)}">
              ${L(e.notes)}
            </div>
          </div>
        `:""}
      </div>
      
      <div class="flex flex-col gap-3">
        <button type="button" id="viewDetailsBtn" class="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
          View Details
        </button>
        
        <div class="grid grid-cols-2 gap-3">
          <button type="button" id="moveUnitBtn" class="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
            Move
          </button>
          <button type="button" id="editUnitBtn" class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors shadow-sm flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
            Edit
          </button>
        </div>
        
        <button type="button" id="closeDialogBtn" class="w-full bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium transition-colors">
          Close
        </button>
      </div>
    </div>
  `,t.querySelector("#viewDetailsBtn").onclick=()=>{t.close(),typeof window.openDetailsDialog=="function"?window.openDetailsDialog(window._tempDialogUnit):f("Details function not available","red")},t.querySelector("#moveUnitBtn").onclick=async()=>{await T()?(t.close(),typeof window.openMoveDialog=="function"?window.openMoveDialog(window._tempDialogUnit):f("Move function not available","red")):f("You don't have permission to move inventory","red")},t.querySelector("#editUnitBtn").onclick=async()=>{await T()?(t.close(),typeof window.openEditDialog=="function"?window.openEditDialog(window._tempDialogUnit):f("Edit function not available","red")):f("You don't have permission to edit inventory","red")},t.querySelector("#closeDialogBtn").onclick=()=>{t.close()},t.showModal(),t.addEventListener("close",()=>{window._tempDialogUnit=null})}function ge(e,t){let o=null;return function(...n){clearTimeout(o),o=setTimeout(()=>e.apply(this,n),t)}}function Ie(e,t){if(!t||t.length===0){e.innerHTML=`
      <div class="flex items-center justify-center h-64">
        <div class="text-center">
          <div class="text-gray-500 dark:text-gray-400 mb-4">
            <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
            </svg>
            No inventory items found
          </div>
          <button onclick="location.reload()" class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Refresh
          </button>
        </div>
      </div>
    `;return}e.innerHTML=t.map((o,n)=>{const r=Ue(o,n),i=K(o.status),s=Y(o.location);return`
      <div class="mobile-inv-card bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-3 transition-all duration-200 hover:shadow-md">
        <div class="flex justify-between items-start mb-3">
          <div class="flex-1 min-w-0">
            <div class="font-bold text-lg truncate text-gray-900 dark:text-gray-100" title="${L(o.chargerId)}">
              ${L(o.chargerId)}
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400 truncate" title="${L(o.model||o.product||"")}">
              ${L(o.model||o.product||"Unknown Model")}
            </div>
          </div>
          <div class="text-right flex-shrink-0">
            <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full shadow-sm"
                  style="background-color: ${i.bg}; color: ${i.color}; border: 1px solid ${i.color}20;">
              ${L(o.status)}
            </span>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-3 text-sm mb-3">
          <div>
            <span class="text-gray-500 dark:text-gray-400 font-medium">Serial:</span>
            <div class="truncate text-gray-900 dark:text-gray-100 mt-1" title="${L(o.chargerSerial||"")}">
              ${o.chargerSerial?L(o.chargerSerial):'<span class="text-gray-400">Not set</span>'}
            </div>
          </div>
          <div>
            <span class="text-gray-500 dark:text-gray-400 font-medium">SIM:</span>
            <div class="truncate text-gray-900 dark:text-gray-100 mt-1" title="${L(o.simNumber||"")}">
              ${o.simNumber?L(o.simNumber):'<span class="text-gray-400">Not set</span>'}
            </div>
          </div>
        </div>
        
        <div class="mb-3">
          <span class="text-gray-500 dark:text-gray-400 text-sm font-medium">Location:</span>
          <div class="mt-1">
            <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full shadow-sm"
                  style="background-color: ${s.bg}; color: ${s.color}; border: 1px solid ${s.color}20;">
              ${L(o.location)}
            </span>
          </div>
        </div>
        
        ${o.notes?`
          <div class="mb-3">
            <span class="text-gray-500 dark:text-gray-400 text-sm font-medium">Notes:</span>
            <div class="text-sm text-gray-700 dark:text-gray-300 mt-1 line-clamp-2" title="${L(o.notes)}">
              ${L(o.notes)}
            </div>
          </div>
        `:""}
        
        <div class="flex gap-2 mt-4">
          <button type="button" class="view-details-btn flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors shadow-sm" 
                  data-unit-key="${r}">
            <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
            View
          </button>
          <button type="button" class="move-unit-btn flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors shadow-sm"
                  data-unit-key="${r}">
            <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
            Move
          </button>
          <button type="button" class="edit-unit-btn flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded text-sm font-medium transition-colors shadow-sm"
                  data-unit-key="${r}">
            <svg class="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
            Edit
          </button>
        </div>
        
        <div class="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
          <div class="text-xs text-gray-400 truncate">
            Last updated: ${new Date(o.lastAction).toLocaleDateString()} • Added by: ${L(o.addedBy||"Unknown")}
          </div>
        </div>
      </div>
    `}).join(""),e.addEventListener("click",Tt),Nt(e)}function Tt(e){const t=e.target.dataset.unitKey;if(!t)return;const o=z(t);if(!o){f("Unit data not found","red");return}e.preventDefault(),e.stopPropagation(),e.target.classList.contains("view-details-btn")?typeof window.openDetailsDialog=="function"?window.openDetailsDialog(o):(console.error("openDetailsDialog function not found"),f("View function not available","red")):e.target.classList.contains("move-unit-btn")?typeof window.openMoveDialog=="function"?window.openMoveDialog(o):(console.error("openMoveDialog function not found"),f("Move function not available","red")):e.target.classList.contains("edit-unit-btn")&&(typeof window.openEditDialog=="function"?window.openEditDialog(o):(console.error("openEditDialog function not found"),f("Edit function not available","red")))}function Nt(e){let t=0,o=0,n=null;e.addEventListener("touchstart",r=>{const i=r.target.closest(".mobile-inv-card");i&&(n=i,t=r.touches[0].clientX,o=r.touches[0].clientY)},{passive:!0}),e.addEventListener("touchmove",r=>{if(!n)return;const i=r.touches[0].clientX-t,s=r.touches[0].clientY-o;Math.abs(s)>Math.abs(i)||Math.abs(i)>10&&(r.preventDefault(),n.style.transform=`translateX(${i}px)`,n.style.opacity=Math.max(.3,1-Math.abs(i)/200))}),e.addEventListener("touchend",r=>{var s;if(!n)return;const i=r.changedTouches[0].clientX-t;if(n.style.transform="",n.style.opacity="",Math.abs(i)>100){const a=(s=n.querySelector("[data-unit-key]"))==null?void 0:s.dataset.unitKey,u=a?z(a):null;u&&(i>0?typeof window.openMoveDialog=="function"&&window.openMoveDialog(u):typeof window.openEditDialog=="function"&&window.openEditDialog(u))}n=null},{passive:!0})}function Ut(){const e=document.getElementById("inventoryLoadingScreen");e&&e.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="inventoryLoadingScreen" class="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center z-50">
      <div class="text-center">
        <div class="loading-pulse mb-8">
          <div class="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <svg class="w-16 h-16 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-white mb-4">CheckMate</h2>
        <p class="text-purple-200 text-lg mb-8">Loading Inventory</p>
        
        <div class="flex justify-center space-x-2">
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
        </div>
        
        <p id="inventoryLoadingProgress" class="text-purple-300 mt-6 text-sm">Initializing...</p>
      </div>
    </div>
  `)}function Le(){const e=document.getElementById("inventoryLoadingScreen");e&&(e.style.opacity="0",e.style.transition="opacity 0.5s ease-out",setTimeout(()=>{e.remove()},500))}function F(e){const t=document.getElementById("inventoryLoadingProgress");t&&(t.textContent=e)}async function X(){const t=document.getElementById("main-content").querySelector("#bulkActionBar");if(!t)return;if(window.selectedUnits.length===0){t.innerHTML="";return}const o=await T(),n=await ee();if(!o){t.innerHTML=`
      <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-lg mb-4">
        <span class="font-semibold text-gray-500">${window.selectedUnits.length} selected (view only)</span>
        <button onclick="clearBulkSelection()" class="ml-auto text-gray-500 hover:text-gray-900">Cancel</button>
      </div>
    `;return}t.innerHTML=`
    <div class="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg mb-4 shadow">
      <span class="font-semibold">${window.selectedUnits.length} selected</span>
      <button onclick="openBulkMoveDialog()" class="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded">Bulk Move</button>
      <button onclick="openBulkStatusDialog()" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Bulk Status</button>
      ${n?'<button onclick="bulkDelete()" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Bulk Delete</button>':""}
      <button onclick="clearBulkSelection()" class="ml-auto text-gray-500 hover:text-gray-900">Cancel</button>
    </div>
  `}window.openBulkMoveDialog=async function(){var u;const e=window.inventory.filter(l=>window.selectedUnits.includes(l.chargerId));if(!e.length)return;const t=document.getElementById("actionDialog"),o=await H(),n=(o||[]).filter(l=>l.parent==="contractor"),r=o.filter(l=>l.parent==="customer"||l.parent==="public").map(l=>l.name),i=(u=e[0])==null?void 0:u.location;let s="";Ce(i)||r.includes(i)?s=(n||[]).map(l=>`<option value="${l.name}">${l.name}${l.isContractor?` (${l.company}, ${l.phone})`:""}</option>`).join(""):(n||[]).map(l=>l.name).includes(i)?s=(o||[]).filter(l=>l.name!==i).map(l=>`<option value="${l.name}">${l.name}${l.parent&&!l.isContractor?` (${l.parent})`:""}${l.isContractor?` (${l.company}, ${l.phone})`:""}</option>`).join(""):s=(n||[]).map(l=>`<option value="${l.name}">${l.name}${l.isContractor?` (${l.company}, ${l.phone})`:""}</option>`).join("");const a=await $();t.innerHTML=`
  <form method="dialog" class="flex flex-col gap-4 w-full sm:w-[40rem] max-w-3xl">
    <h3 class="font-bold mb-2">Move ${e.length} Units</h3>
    <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
    <label>Move to location:</label>
    <select id="moveLoc" required class="border px-2 py-1 rounded">
      <option value="">-- Select Location --</option>
      ${s}
    </select>
    <label>Set status (optional):</label>
    <select id="moveStatus" class="border px-2 py-1 rounded">
      <option value="">-- Keep Current Status --</option>
      ${(a.statuses||[]).map(l=>`<option value="${l}"${e.every(p=>p.status===l)?" selected":""}>${l}</option>`).join("")}
    </select>
    <textarea id="moveComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Move</button>
    </div>
  </form>
  `,t.showModal(),t.addEventListener("click",function(l){l.target===t&&t.close()}),t.querySelector('button[value="cancel"]').onclick=l=>{l.preventDefault(),t.close()},t.querySelector("form").onsubmit=async l=>{var I;l.preventDefault();const p=l.target.querySelector('button[value="ok"]');if(!j(p))return;const d=t.querySelector("#moveLoc").value.trim(),c=t.querySelector("#moveStatus").value.trim(),g=t.querySelector("#moveComment").value.trim();if(!d){t.querySelector("#moveLoc").classList.add("border-red-500"),t.querySelector("#formError").textContent="Select a location.";return}const b=await Ve(),y=await _e(),h=(I=e[0])==null?void 0:I.location,x=await Ce(h),v=await se(h),S=b.includes(d);if(y.includes(d),(x||v)&&!S&&!await jt(h,d,o)&&!await Lt()){t.querySelector("#formError").textContent="You can only move units from warehouse/installed to a Contractor/Technician location, unless moving within the same location group.";return}t.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>';let m=[...window.inventory];const k=[];e.forEach(E=>{const C=m.findIndex(D=>D.chargerId===E.chargerId);C>=0&&(k.push({...m[C]}),d&&(m[C].location=d),c&&(m[C].status=c),m[C].lastAction=new Date().toISOString(),g&&(m[C].notes=g))});try{const E=e.map(D=>{const fe=m.findIndex(Xe=>Xe.chargerId===D.chargerId);if(fe>=0)return A(m[fe])});await Promise.all(E.filter(Boolean));const C=e.map(D=>({date:new Date().toISOString(),action:"Bulk Move",chargerId:D.chargerId,chargerSerial:D.chargerSerial||"",simNumber:D.simNumber||"",product:D.product||"",from:D.location,to:d,statusFrom:D.status,statusTo:c||D.status,user:M(),comment:g}));await U(C),console.log("Audit entries saved:",C.length)}catch(E){console.error("Bulk move failed:",E),f("Bulk move failed: "+E.message,"red"),t.close();return}me("Units moved","blue",async()=>{for(const E of k)await A(E);f("Bulk move undone","red"),window.selectedUnits=[],window.inventory=[...window.inventory].map(E=>k.find(D=>D.chargerId===E.chargerId)||E),B(document.getElementById("main-content"))}),t.close(),window.selectedUnits=[],window.inventory=m,B(document.getElementById("main-content"))}};window.openBulkStatusDialog=async function(){var s;if(!await T()){f("You don't have permission to manage inventory","red");return}const e=window.inventory.filter(a=>window.selectedUnits.includes(a.chargerId));if(!e.length)return;const t=document.getElementById("actionDialog"),o=(s=e[0])==null?void 0:s.location,r=(await ze(o)).filter(a=>!e.every(u=>u.status===a)).map(a=>`<option value="${a}">${a}</option>`).join("");t.innerHTML=`
    <form method="dialog" class="flex flex-col gap-3 w-80">
      <h3 class="font-bold mb-2">Change Status (${e.length} Units)</h3>
      <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
      <label>Set status to:</label>
      <select id="newStatus" required class="border px-2 py-1 rounded">
        <option value="">-- Select Status --</option>
        ${r}
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
    `,t.showModal(),t.addEventListener("click",function(a){a.target===t&&t.close()}),t.querySelector('button[value="cancel"]').onclick=a=>{a.preventDefault(),t.close()};const i=t.querySelector("#newStatus");i.onchange=()=>{i.value==="Installed"?t.querySelector("#privatePublicSection").style.display="":t.querySelector("#privatePublicSection").style.display="none"},t.querySelector("#privatePublic").onchange=()=>{t.querySelector("#invoiceNumber").style.display=t.querySelector("#privatePublic").value==="Private"?"":"none"},t.querySelector("form").onsubmit=async a=>{a.preventDefault();const u=a.target.querySelector('button[value="ok"]');if(!j(u))return;const l=t.querySelector("#newStatus").value.trim(),p=t.querySelector("#statusComment").value.trim(),d=t.querySelector("#privatePublic")?t.querySelector("#privatePublic").value:"",c=t.querySelector("#invoiceNumber")?t.querySelector("#invoiceNumber").value.trim():"";if(!l){t.querySelector("#newStatus").classList.add("border-red-500"),t.querySelector("#formError").textContent="Please select a status.";return}if(l==="Installed"&&!d){privPubEl&&privPubEl.classList.add("border-red-500"),t.querySelector("#formError").textContent="Please select Private or Public for installed status.";return}t.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>';let g=[...window.inventory];const b=[];e.forEach(h=>{const x=g.findIndex(v=>v.chargerId===h.chargerId);x>=0&&(b.push({...g[x]}),g[x].status=l,g[x].lastAction=new Date().toISOString(),l==="Installed"&&(g[x].isAsset=d==="Public",g[x].invoiceNumber=d==="Private"?c:""),p&&(g[x].notes=p))});for(const h of e){const x=g.findIndex(v=>v.chargerId===h.chargerId);x>=0&&await A(g[x])}const y=e.map(h=>{var x;return{date:new Date().toISOString(),action:"Bulk Status Change",chargerId:h.chargerId,chargerSerial:h.chargerSerial,simNumber:h.simNumber,product:h.product,from:h.location,to:((x=g.find(v=>v.chargerId===h.chargerId))==null?void 0:x.location)||h.location,statusFrom:h.status,statusTo:l,user:M(),comment:p}});try{await U(y),console.log("Bulk status change audit entries saved:",y.length)}catch(h){console.error("Failed to save bulk status audit log:",h),f("Warning: Status changed but audit log failed","yellow")}me("Status changed","blue",async()=>{for(const h of b)await A(h);f("Bulk status undo","red"),window.inventory=[...window.inventory].map(h=>b.find(v=>v.chargerId===h.chargerId)||h),B(document.getElementById("main-content")),window.selectedUnits=[]}),t.close(),window.selectedUnits=[],window.inventory=g,B(document.getElementById("main-content"))}};function me(e,t,o){const n=document.getElementById("toast");n.innerHTML=`
      ${e}
      <button id="undoBtn" class="ml-3 underline text-white">Undo</button>
    `,n.className=`fixed top-6 right-6 z-50 min-w-[200px] max-w-xs bg-${t}-600 text-white font-semibold px-4 py-2 rounded shadow-lg opacity-100 pointer-events-auto transition-opacity duration-300`,document.getElementById("undoBtn").onclick=()=>{o(),n.classList.remove("opacity-100","pointer-events-auto"),n.classList.add("opacity-0","pointer-events-none")},setTimeout(()=>{n.classList.remove("opacity-100","pointer-events-auto"),n.classList.add("opacity-0","pointer-events-none")},3500)}window.toggleActionsMenu=function(e){document.querySelectorAll('[id^="unit-actions-"]').forEach(o=>o.classList.add("hidden"));const t=document.getElementById(`unit-actions-${e}`);t&&t.classList.toggle("hidden"),document.addEventListener("click",function o(n){t.contains(n.target)||(t.classList.add("hidden"),document.removeEventListener("click",o))})};window.openDetailsDialog=function(e){const t=document.getElementById("actionDialog");t.innerHTML=`
      <div class="w-96 p-4">
        <div class="text-xl font-bold mb-2 text-purple-700">Unit Details</div>
        <div class="space-y-2 text-gray-700 dark:text-gray-200">
          <div><b>ID:</b> ${e.chargerId}</div>
          <div><b>Serial:</b> ${e.chargerSerial||'<span class="text-red-400">[none]</span>'}</div>
          <div><b>SIM:</b> ${e.simNumber||"-"}</div>
          <div><b>Product:</b> ${e.product}</div>
          <div><b>Model:</b> ${e.model}</div>
          <div><b>Location:</b> ${e.location}</div>
          <div><b>Status:</b> ${e.status}</div>
          <div><b>Added:</b> ${new Date(e.created).toLocaleString()}</div>
          <div><b>Last Action:</b> ${new Date(e.lastAction).toLocaleString()}</div>
          <div><b>Notes:</b> ${e.notes||"-"}</div>
        </div>
        <div class="flex justify-end mt-4">
          <button class="bg-purple-600 text-white px-3 py-1 rounded" onclick="document.getElementById('actionDialog').close()">Close</button>
        </div>
      </div>
    `,t.showModal(),t.addEventListener("click",function(o){o.target===t&&t.close()})};window.deleteUnit=async function(e){if(!await ee()){f("You don't have permission to delete items","red");return}const t=document.getElementById("actionDialog");t.innerHTML=`
      <div class="w-96 p-4">
        <div class="text-xl font-bold mb-2 text-red-700">Delete Unit</div>
        <div class="mb-4">Are you sure you want to delete this item?</div>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="button" value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </div>
    `,t.showModal(),t.addEventListener("click",function(o){o.target===t&&t.close()}),t.querySelector('button[value="cancel"]').onclick=o=>{o.preventDefault(),t.close()},t.querySelector('button[value="ok"]').onclick=async o=>{let n=[...window.inventory];n=n.filter(r=>r.chargerId!==e),await window.db.collection("inventory").doc(e).delete(),window.inventory=window.inventory.filter(r=>r.chargerId!==e),f("Unit deleted","red"),window.inventory=n,B(document.getElementById("main-content")),t.close()}};async function jt(e,t,o){if(!e||!t||!o)return!1;const n=o.find(i=>i.name===e),r=o.find(i=>i.name===t);return n&&r&&n.parent&&r.parent&&n.parent===r.parent}window.openMoveDialog=async function(e){if(!await T()){f("You don't have permission to move inventory","red");return}const t=document.getElementById("actionDialog");t.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Loading...</div>',t.showModal();const o=await $(),n=await H(),r=n.filter(l=>l.parent==="contractor"),i=e.location;let s="";const a=n.find(l=>l.name===i),u=a==null?void 0:a.parent;if(u==="warehouse")s=n.filter(p=>p.parent==="warehouse"&&p.name!==i).map(p=>`<option value="${p.name}">${p.name} (Warehouse)</option>`).join(""),s+=r.map(p=>`<option value="${p.name}">${p.name}${p.isContractor?` (${p.company}, ${p.phone})`:""}</option>`).join("");else if(u==="contractor"){const l=n.filter(d=>d.parent==="warehouse"),p=n.filter(d=>d.parent==="customer"||d.parent==="public");s=l.map(d=>`<option value="${d.name}">${d.name} (Warehouse)</option>`).join(""),s+=p.map(d=>`<option value="${d.name}">${d.name} (${d.parent==="customer"?"Customer":"Public"})</option>`).join("")}else u==="customer"||u==="public"?s=r.map(l=>`<option value="${l.name}">${l.name}${l.isContractor?` (${l.company}, ${l.phone})`:""}</option>`).join(""):s=n.filter(l=>l.name!==i).map(l=>{const p=l.parent?` (${l.parent})`:"",d=l.isContractor?` (${l.company}, ${l.phone})`:"";return`<option value="${l.name}">${l.name}${p}${d}</option>`}).join("");t.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Move Unit ${e.chargerId}</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <label>Move to location:</label>
        <select id="moveLoc" class="border px-2 py-1 rounded">
          <option value="">-- Keep Current Location --</option>
          ${s}
        </select>
        <label>Set status (optional):</label>
        <select id="moveStatus" class="border px-2 py-1 rounded">
          <option value="">-- Keep Current Status --</option>
          ${(o.statuses||[]).map(l=>`<option value="${l}"${e.status===l?" selected":""}>${l}</option>`).join("")}
        </select>
        <textarea id="moveComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Move</button>
        </div>
      </form>
    `,t.addEventListener("click",function(l){l.target===t&&t.close()}),t.querySelector('button[value="cancel"]').onclick=l=>{l.preventDefault(),t.close()},t.querySelector("form").onsubmit=async l=>{l.preventDefault();const p=l.target.querySelector('button[value="ok"]');if(!j(p))return;const d=t.querySelector("#moveLoc").value.trim(),c=t.querySelector("#moveStatus").value.trim(),g=t.querySelector("#moveComment").value.trim(),b=await Ve();await _e();const y=e.location,h=d,x=await se(y),v=await se(h),S=b.includes(y),m=b.includes(h);if(v&&!S){f("To move a unit to an installed location, it must first go through a contractor/technician.","red");return}if(x&&!m){f("To move a unit out of an installed location, it must first go through a contractor/technician.","red");return}t.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>';let k=[...window.inventory];const I=k.findIndex(E=>E.chargerId===e.chargerId);I>=0&&(d&&(k[I].location=d),c&&(k[I].status=c),k[I].lastAction=new Date().toISOString(),k[I].notes=g),await A(k[I]),await U([{date:new Date().toISOString(),action:"Move",chargerId:e.chargerId,chargerSerial:e.chargerSerial,simNumber:e.simNumber,product:e.product,from:e.location,to:d||e.location,statusFrom:e.status,statusTo:c||e.status,user:M(),comment:g}]),f("Unit moved","blue"),t.close(),window.inventory=k,B(document.getElementById("main-content"))}};async function Ce(e){if(!e)return!1;await $();const o=(await H()).find(n=>n.name===e);return(o==null?void 0:o.parent)==="warehouse"}async function se(e){if(!e)return!1;const o=(await H()).find(n=>n.name===e);return(o==null?void 0:o.parent)==="customer"||(o==null?void 0:o.parent)==="public"}async function _e(){return(await H()).filter(t=>t.parent==="customer"||t.parent==="public").map(t=>t.name)}async function Ve(){return(await H()).filter(t=>t.parent==="contractor").map(t=>t.name)}window.openAssignContractorDialog=async function(e){const t=document.getElementById("actionDialog"),o=(await $()).contractors||[];t.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Assign Unit ${e.chargerId} to Contractor</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <select id="contractor" required class="border px-2 py-1 rounded">
          <option value="">-- Select Contractor --</option>
          ${(o||[]).map(n=>`<option value="${n.id}">${n.name} (${n.company})</option>`).join("")}
        </select>
        <textarea id="assignComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Assign</button>
        </div>
      </form>
    `,t.showModal(),t.addEventListener("click",function(n){n.target===t&&t.close()}),t.querySelector('button[value="cancel"]').onclick=n=>{n.preventDefault(),t.close()},t.querySelector("form").onsubmit=async n=>{n.preventDefault();const r=n.target.querySelector('button[value="ok"]');if(!j(r))return;const i=t.querySelector("#contractor").value,s=t.querySelector("#assignComment").value.trim();if(!i){t.querySelector("#contractor").classList.add("border-red-500"),t.querySelector("#formError").textContent="Please select a contractor.";return}const u=((await $()).contractors||[]).find(d=>d.id===i);if(!u){t.querySelector("#formError").textContent="Selected contractor not found.";return}t.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>';let l=[...window.inventory];const p=l.findIndex(d=>d.chargerId===e.chargerId);p>=0&&(l[p].location=u.name,l[p].contractorId=u.id,l[p].status="Reserved",l[p].lastAction=new Date().toISOString(),s&&(l[p].notes=s)),await A(l[p]),await U([{date:new Date().toISOString(),action:"Assign to Contractor",chargerId:e.chargerId,chargerSerial:e.chargerSerial,simNumber:e.simNumber,product:e.product,from:e.location,to:`Assigned to ${u.name}`,contractorId:u.id,contractorName:u.name,statusFrom:e.status,statusTo:"Reserved",user:M(),comment:s}]),f("Unit assigned to contractor","blue"),t.close(),window.inventory=l,B(document.getElementById("main-content"))}};window.openEditDialog=async function(e){if(!await T()){f("You don't have permission to edit inventory","red");return}const t=document.getElementById("actionDialog");await H();const o=(await $()).statuses;t.innerHTML=`
    <form method="dialog" class="flex flex-col gap-3 w-80">
      <h3 class="font-bold mb-2">Edit Unit ${e.chargerId}</h3>
      <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
      <input id="editChargerId" type="text" class="border px-2 py-1 rounded" value="${e.chargerId}" disabled>
      <input id="editChargerSerial" type="text" class="border px-2 py-1 rounded" value="${e.chargerSerial||""}" placeholder="Serial (optional)">
      <input id="editSimNumber" type="text" class="border px-2 py-1 rounded" value="${e.simNumber||""}" placeholder="SIM Number (optional)">
      <input id="editProduct" type="text" class="border px-2 py-1 rounded" value="${e.product||""}" placeholder="Product">
      <input id="editModel" type="text" class="border px-2 py-1 rounded" value="${e.model||""}" placeholder="Model">
      <input id="editLocation" type="text" class="border px-2 py-1 rounded bg-gray-100" value="${e.location}" readonly>
      <select id="editStatus" required class="border px-2 py-1 rounded">
        <option value="">-- Select Status --</option>
        ${(o||[]).map(n=>`<option value="${n}"${e.status===n?" selected":""}>${n}</option>`).join("")}
      </select>
      <textarea id="editNotes" class="border px-2 py-1 rounded" placeholder="Notes (optional)">${e.notes||""}</textarea>
      <div class="flex justify-between gap-2 mt-3">
        <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
        <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
      </div>
    </form>
  `,t.showModal(),t.addEventListener("click",function(n){n.target===t&&t.close()}),t.querySelector('button[value="cancel"]').onclick=n=>{n.preventDefault(),t.close()},t.querySelector("form").onsubmit=async n=>{n.preventDefault();const r=n.target.querySelector('button[value="ok"]');if(!j(r))return;const i=t.querySelector("#editChargerSerial").value.trim(),s=t.querySelector("#editSimNumber").value.trim(),a=t.querySelector("#editProduct").value.trim(),u=t.querySelector("#editModel").value.trim(),l=e.location,p=t.querySelector("#editStatus").value.trim()||e.status,d=t.querySelector("#editNotes").value.trim();if(!l||!p){t.querySelector("#formError").textContent="Location and status are required.";return}t.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>';let c=[...window.inventory];const g=c.findIndex(y=>y.chargerId===e.chargerId);if(g<0){f("Unit not found","red"),t.close();return}const b={...c[g]};c[g]={...c[g],chargerSerial:i,simNumber:s,product:a,model:u,location:l,status:p,notes:d,lastAction:new Date().toISOString()},await A(c[g]),await U([{date:new Date().toISOString(),action:"Edit Unit",chargerId:e.chargerId,user:M(),changes:{from:b,to:c[g]}}]),me("Unit updated","blue",async()=>{await A(b),f("Edit undone","red");const y=window.inventory.findIndex(h=>h.chargerId===b.chargerId);y>=0&&(window.inventory[y]=b),B(document.getElementById("main-content"))}),t.close(),window.inventory=c,B(document.getElementById("main-content"))}};window.openGlobalSearchDialog=function(){if(window.innerWidth<640){f("Global search is not available on mobile. Use the search box above.","blue");return}const e=document.getElementById("globalSearchDialog");e.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4 w-[30rem] max-w-full">
        <h3 class="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Global Search</h3>
        <input id="globalSearchInput" type="text" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800"
          placeholder="Type anything... (product, serial, shipment, vendor)" autofocus>
        <div id="globalSearchResults" class="max-h-60 overflow-y-auto mt-2"></div>
        <div class="flex justify-end gap-2 mt-2">
          <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Close</button>
        </div>
      </form>
    `,e.showModal(),e.addEventListener("click",function(o){o.target===e&&e.close()}),e.querySelector('button[value="cancel"]').onclick=o=>{o.preventDefault(),e.close()};const t=e.querySelector("#globalSearchInput");t.oninput=function(){window.performGlobalSearch(t.value.trim())},setTimeout(()=>{t.focus()},50),window.performGlobalSearch("")};async function Ht(){return(await window.db.collection("shipments").get()).docs.map(t=>({id:t.id,...t.data()}))}async function We(){return(await window.db.collection("Products").get()).docs.map(t=>({id:t.id,...t.data()}))}window.performGlobalSearch=async function(e,t=!1){var d;const o=document.getElementById("globalSearchResults");if(!o)return;const n=(d=window._globalSearchCache)!=null&&d.timestamp?Date.now()-window._globalSearchCache.timestamp:1/0;(!window._globalSearchCache||t||n>3e5)&&(window._globalSearchCache={shipments:await Ht(),products:await We(),inventory:window.inventory.length?window.inventory:await He(),timestamp:Date.now()});const{shipments:r,products:i,inventory:s}=window._globalSearchCache;if(!e){o.innerHTML='<div class="text-gray-400 text-center py-6">Start typing to search...</div>';return}const a=e.toLowerCase(),u=r.filter(c=>(c.shipmentId||"").toLowerCase().includes(a)||(c.vendor||"").toLowerCase().includes(a)||(c.incoterm||"").toLowerCase().includes(a)||Array.isArray(c.products)&&c.products.some(g=>(g.model||"").toLowerCase().includes(a))),l=s.filter(c=>[c.chargerId,c.chargerSerial,c.simNumber,c.product,c.model,c.status,c.location,c.notes,c.lastAction,c.addedBy,c.invoiceNumber].some(b=>(b||"").toLowerCase().includes(a))),p=i.filter(c=>(c.name||"").toLowerCase().includes(a)||(c.hsCode||"").toLowerCase().includes(a)||(c.vendor||"").toLowerCase().includes(a));if(u.length===0&&l.length===0&&p.length===0){o.innerHTML='<div class="text-gray-400 text-center py-6">No results found.</div>';return}o.innerHTML=`
      <div>
        <div class="font-bold text-purple-700 dark:text-purple-300 mt-2">Inventory (${l.length})</div>
        ${l.length?l.map(c=>`
          <div class="border-b border-gray-200 dark:border-gray-700 py-1 flex flex-col gap-1">
            <div><b>ID:</b> ${c.chargerId}</div>
            <div><b>Serial:</b> ${c.chargerSerial||"-"}</div>
            <div><b>SIM:</b> ${c.simNumber||"-"}</div>
            <div><b>Product:</b> ${c.product||"-"}</div>
            <div class="flex gap-2 mt-1">
              <button type="button" class="move-btn px-2 py-1 text-xs rounded bg-blue-600 text-white"
                data-chargerid="${c.chargerId}" data-serial="${c.chargerSerial}">Move</button>
              <button type="button" class="edit-inventory-btn px-2 py-1 text-xs rounded bg-green-600 text-white"
                data-chargerid="${c.chargerId}" data-serial="${c.chargerSerial}">Edit</button>
              <button type="button" class="view-inventory-btn px-2 py-1 text-xs rounded bg-purple-600 text-white"
                data-chargerid="${c.chargerId}">View</button>
            </div>
          </div>
        `).join(""):'<div class="text-gray-400 text-sm">None</div>'}
      </div>
    `,o.querySelectorAll(".move-btn").forEach(c=>{c.onclick=function(){const g=c.dataset.chargerid,b=window.inventory.find(y=>y.chargerId===g);b?(window.openMoveDialog(b),document.getElementById("globalSearchDialog").close()):f("Inventory unit not found","red")}}),o.querySelectorAll(".edit-inventory-btn").forEach(c=>{c.onclick=function(){const g=c.dataset.chargerid,b=window.inventory.find(y=>y.chargerId===g);b?(window.openEditDialog(b),document.getElementById("globalSearchDialog").close()):f("Inventory unit not found","red")}}),o.querySelectorAll(".view-inventory-btn").forEach(c=>{c.onclick=function(){const g=c.dataset.chargerid,b=window.inventory.find(y=>y.chargerId===g);b?typeof window.openDetailsDialog=="function"?(window.openDetailsDialog(b),document.getElementById("globalSearchDialog").close()):f("Details dialog not available on this page","red"):f("Inventory unit not found","red")}})};async function J(){const e=document.getElementById("addItemDialog");e.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Loading...</div>',e.showModal(),W||(W=await We()),re||(re=await H());const t=W.length?W:window.inventory.map(a=>({name:a.product})),o=re,n=(await $()).statuses||[];e.innerHTML=`
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
          ${(t||[]).map(a=>`<option value="${a.name}">${a.name}${a.vendor?" ("+a.vendor+")":""}</option>`).join("")}
        </select>
        <input id="model" type="text" placeholder="Model (Optional)" class="border px-2 py-1 rounded">
        <select id="location" required class="border px-2 py-1 rounded">
          <option value="">-- Select Location --</option>
          ${(o||[]).map(a=>`<option value="${a.name}">${a.name}${a.parent?` (${a.parent})`:""}</option>`).join("")}
        </select>
        <select id="status" required class="border px-2 py-1 rounded">
          <option value="">-- Select Status --</option>
          ${(n||[]).map(a=>`<option value="${a}">${a}</option>`).join("")}
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
    `;const r=e.querySelector('button[value="cancel"]');r&&(r.onclick=a=>{a.preventDefault(),e.close()}),e.showModal(),e.addEventListener("click",function(a){a.target===e&&e.close()});const i=e.querySelector("#scanBarcodeBtn");i&&(i.onclick=()=>{openBarcodeScanner(a=>{a&&(e.querySelector("#chargerSerial").value=a)})});const s=e.querySelector("#status");s.onchange=()=>{s.value==="Installed"?(e.querySelector("#privatePublicSection").style.display="",e.querySelector("#location").value="Customer Stock",e.querySelector("#location").disabled=!0):(e.querySelector("#privatePublicSection").style.display="none",e.querySelector("#location").disabled=!1)},e.querySelector("#privatePublic").onchange=()=>{const a=e.querySelector("#privatePublic").value;e.querySelector("#invoiceNumber").style.display=a==="Private"?"":"none"},e.querySelector("form").onsubmit=async a=>{a.preventDefault();const u=a.target.querySelector('button[value="ok"]');if(!j(u))return;if(document.activeElement.value==="cancel"){e.close();return}let l=!0;e.querySelectorAll("input, select, textarea").forEach(I=>I.classList.remove("border-red-500")),e.querySelector("#formError").textContent="";const p=e.querySelector("#chargerId").value.trim(),d=e.querySelector("#chargerSerial").value.trim(),c=e.querySelector("#simNumber").value.trim(),g=e.querySelector("#product").value.trim(),b=e.querySelector("#model").value.trim(),y=e.querySelector("#location").value.trim(),h=e.querySelector("#status").value.trim(),x=e.querySelector("#notes").value.trim(),v=e.querySelector("#privatePublic")?e.querySelector("#privatePublic").value:"",S=e.querySelector("#invoiceNumber")?e.querySelector("#invoiceNumber").value.trim():"";if(p||(e.querySelector("#chargerId").classList.add("border-red-500"),l=!1),g||(e.querySelector("#product").classList.add("border-red-500"),l=!1),y||(e.querySelector("#location").classList.add("border-red-500"),l=!1),h||(e.querySelector("#status").classList.add("border-red-500"),l=!1),h==="Installed"&&!v&&(e.querySelector("#privatePublic").classList.add("border-red-500"),l=!1),!l){e.querySelector("#formError").textContent="Please fill in all required fields.";return}const m={chargerId:p,chargerSerial:d,simNumber:c,product:g,model:b,location:y,status:h,assigned:h==="Installed",created:new Date().toISOString(),addedBy:M(),lastAction:new Date().toISOString(),notes:x,isAsset:h==="Installed"&&v==="Public",invoiceNumber:h==="Installed"&&v==="Private"?S:""},k=[...window.inventory];if(k.some(I=>I.chargerId===p)){e.querySelector("#formError").textContent="Charger ID already exists!",e.querySelector("#chargerId").classList.add("border-red-500");return}try{ue(m)}catch(I){e.querySelector("#formError").textContent=I.message;return}e.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>',k.push(m),await A(m),f("Inventory item added","green"),e.close(),window.inventory=k,B(document.getElementById("main-content"))}}window.openStatusDialog=async function(e){if(!await T()){f("You don't have permission to manage inventory","red");return}const t=document.getElementById("actionDialog");t.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Loading...</div>',t.showModal();const o=await ze(e.location);t.addEventListener("click",function(r){r.target===t&&t.close()}),(await $()).statuses,t.innerHTML=`
    <form method="dialog" class="flex flex-col gap-3 w-80">
      <h3 class="font-bold mb-2">Change Status: ${e.chargerId}</h3>
      <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
      <label>New status:</label>
      <select id="newStatus" required class="border px-2 py-1 rounded">
        <option value="">-- Select Status --</option>
        ${o.map(r=>`<option value="${r}"${e.status===r?" selected":""}>${r}</option>`).join("")}
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
  `,t.showModal(),t.addEventListener("click",function(r){r.target===t&&t.close()}),t.querySelector('button[value="cancel"]').onclick=r=>{r.preventDefault(),t.close()};const n=t.querySelector("#newStatus");n.onchange=()=>{n.value==="Installed"?t.querySelector("#privatePublicSection").style.display="":t.querySelector("#privatePublicSection").style.display="none"},t.querySelector("#privatePublic").onchange=()=>{t.querySelector("#invoiceNumber").style.display=t.querySelector("#privatePublic").value==="Private"?"":"none"},t.querySelector("form").onsubmit=async r=>{var b;r.preventDefault();const i=r.target.querySelector('button[value="ok"]');if(!j(i))return;const s=t.querySelector("#newStatus").value.trim(),a=t.querySelector("#privatePublic"),u=a?a.value:"",l=t.querySelector("#invoiceNumber"),p=l?l.value.trim():"",d=t.querySelector("#statusComment").value.trim();if(t.querySelectorAll("input, select, textarea").forEach(y=>y.classList.remove("border-red-500")),t.querySelector("#formError").textContent="",!s){t.querySelector("#newStatus").classList.add("border-red-500"),t.querySelector("#formError").textContent="Please select a status.";return}if(s==="Installed"&&a&&!u){a.classList.add("border-red-500"),t.querySelector("#formError").textContent="Please select Private or Public for installed status.";return}t.innerHTML='<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>';let c=[...window.inventory];const g=c.findIndex(y=>y.chargerId===e.chargerId);g>=0&&(c[g].status=s,c[g].lastAction=new Date().toISOString(),s==="Installed"&&(c[g].location="Customer Stock",c[g].isAsset=u==="Public",c[g].invoiceNumber=u==="Private"?p:"")),await A(c[g]),await U([{date:new Date().toISOString(),action:"Status Change",chargerId:e.chargerId,chargerSerial:e.chargerSerial,simNumber:e.simNumber,product:e.product,from:e.location,to:((b=c[g])==null?void 0:b.location)||e.location,statusFrom:e.status,statusTo:s,user:M(),comment:d}]),f("Status updated","blue"),t.close(),window.inventory=c,B(document.getElementById("main-content"))}};window.openBarcodeScanner=function(e){let t=document.getElementById("barcodeScanDialog");t||(t=document.createElement("dialog"),t.id="barcodeScanDialog",t.className="rounded-xl p-4",document.body.appendChild(t)),t.innerHTML=`
    <div style="position:relative;">
      <button id="cancelScanBtn" style="position:absolute;top:8px;right:8px;z-index:2;" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <div class="mb-2 font-bold text-lg text-blue-800 dark:text-blue-300">Scan Product Barcode</div>
      <div id="barcode-scan-video" style="width:350px;height:200px;max-width:100%;border:2px solid #9cf;border-radius:10px;"></div>
      <div id="barcode-feedback" class="mt-2 text-gray-700 dark:text-gray-200"></div>
    </div>
  `,t.showModal();let o=!1;function n(){try{Quagga.offDetected&&Quagga.offDetected()}catch{}try{Quagga.stop()}catch{}}function r(){n(),t.close()}function i(){o=!0,n(),t.close(),e&&e(null)}setTimeout(()=>{const s=document.getElementById("cancelScanBtn");s&&(s.onclick=i)},10),t.addEventListener("click",function(s){s.target===t&&i()}),setTimeout(()=>{Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:document.getElementById("barcode-scan-video"),constraints:{facingMode:"environment"}},decoder:{readers:["code_128_reader","ean_reader","ean_8_reader"]}},function(u){if(u){console.error("Camera initialization failed:",u),document.getElementById("barcode-feedback").textContent="Camera error: "+u.message,setTimeout(()=>{r(),e&&e(null)},1500);return}Quagga.start()});let s=[],a=3;Quagga.onDetected(function(u){if(o)return;const l=u.codeResult.code||"",p=(l.match(/(\d{8})$/)||[])[1]||l;s.push(p),s.length>a&&s.shift(),s.length===a&&s.every(d=>d===s[0])&&(o=!0,document.getElementById("barcode-feedback").textContent="Scanned: "+p,setTimeout(()=>{r(),e&&e(p)},600))})},150)};window.openDetailsDialog=openDetailsDialog;window.toggleActionsMenu=toggleActionsMenu;window.bulkDelete=bulkDelete;window.clearBulkSelection=clearBulkSelection;window.toggleRowMenu=toggleRowMenu;window.openMoveDialog=openMoveDialog;window.openStatusDialog=openStatusDialog;window.openEditDialog=openEditDialog;window.deleteUnit=deleteUnit;window.loadAuditLog=Bt;window.saveAuditLog=U;window.showAddItemDialog=J;window.openBarcodeScanner=openBarcodeScanner;window.performGlobalSearch=performGlobalSearch;window.openGlobalSearchDialog=openGlobalSearchDialog;window.openMobileSearchDialog=Re;window.openAssignContractorDialog=openAssignContractorDialog;window.downloadInventoryCSV=function(){console.log("downloadInventoryCSV called");try{const e=je(),t=window.inventory.length,o=e.length,n=["Charger ID","Serial","Status","Location","Last Action"],r=p=>p?String(p).replace(/^[=+\-@]/,"'$&").replace(/"/g,'""'):"",i=e.map(p=>[r(p.chargerId),r(p.chargerSerial),r(p.status),r(p.location),r(p.lastAction)]);let s=n.join(",")+`
`+i.map(p=>p.map(d=>`"${d}"`).join(",")).join(`
`),a=new Blob([s],{type:"text/csv"}),u=URL.createObjectURL(a),l=document.createElement("a");l.href=u,l.download=`inventory_${o===t?"all":"filtered"}_${new Date().toISOString().split("T")[0]}.csv`,l.click(),URL.revokeObjectURL(u),f(`CSV downloaded: ${o} of ${t} items`,"green")}catch(e){console.error("CSV download error:",e),f("CSV download failed: "+e.message,"red")}};window.downloadInventoryExcel=function(){console.log("downloadInventoryExcel called");try{if(typeof XLSX>"u"){console.error("XLSX library not available"),f("Excel feature not available. Please refresh the page.","red");return}const e=je(),t=window.inventory.length,o=e.length;if(!e.length){f("No inventory data to export","yellow");return}const n=e.map(a=>({"Charger ID":a.chargerId||"",Serial:a.chargerSerial||"","SIM Number":a.simNumber||"",Product:a.product||"",Model:a.model||"",Status:a.status||"",Location:a.location||"",Notes:a.notes||"","Last Action":a.lastAction?new Date(a.lastAction).toLocaleString():"","Added By":a.addedBy||""})),r=XLSX.utils.book_new(),i=XLSX.utils.json_to_sheet(n),s=[{wch:20},{wch:15},{wch:15},{wch:25},{wch:20},{wch:12},{wch:20},{wch:30},{wch:18},{wch:15}];i["!cols"]=s,XLSX.utils.book_append_sheet(r,i,"Inventory"),XLSX.writeFile(r,`inventory_${o===t?"all":"filtered"}_${new Date().toISOString().split("T")[0]}.xlsx`),f(`Excel downloaded: ${o} of ${t} items`,"green")}catch(e){console.error("Excel download error:",e),f("Excel download failed: "+e.message,"red")}};export{$ as a,Bt as b,ie as c,Ht as d,Ot as e,vt as g,He as l,f as s};

// js/pages/partials/shell.js

export const shellHTML = `
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
`;


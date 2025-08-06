import { loadAuditLog } from './inventory.js';
import { getCurrentUser, getCurrentUserRole } from './utils/users.js';
import { can } from './utils/permissions.js';
import { showToast, renderAccessDenied } from './core.js';

// Global state
let auditData = {
  logs: [],
  filteredLogs: [],
  currentPage: 1,
  pageSize: 25,
  searchQuery: ''
};

// FIXED: Loading screen functions at the top level
function showLoadingScreen() {
  // Remove any existing loading screen and initial loader
  const existingLoader = document.getElementById('auditLoadingScreen');
  if (existingLoader) {
    existingLoader.remove();
  }

  const initialLoader = document.getElementById('initialLoader');
  if (initialLoader) {
    initialLoader.remove();
  }

  // Create loading screen HTML
  const loadingHTML = `
    <div id="auditLoadingScreen" class="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center z-50">
      <div class="text-center">
        <div class="loading-pulse mb-8">
          <div class="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <svg class="w-16 h-16 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
        <h2 class="text-3xl font-bold text-white mb-4">CheckMate</h2>
        <p class="text-purple-200 text-lg mb-8">Loading Audit Log</p>
        <div class="flex justify-center space-x-2">
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
        </div>
        <p id="auditLoadingProgress" class="text-purple-300 mt-6 text-sm">Initializing...</p>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', loadingHTML);
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('auditLoadingScreen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }
  
  const initialLoader = document.getElementById('initialLoader');
  if (initialLoader) {
    initialLoader.remove();
  }
}

function updateLoadingProgress(message) {
  const progressElement = document.getElementById('auditLoadingProgress');
  if (progressElement) {
    progressElement.textContent = message;
  }
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', async () => {
  if (document.body.dataset.page === "audit") {
    try {
      console.log('Starting audit page initialization...');
      
      // FIXED: Wait for auth state to be established
      await new Promise(resolve => {
        const checkAuth = () => {
          if (window.auth && window.auth.currentUser) {
            resolve();
          } else {
            setTimeout(checkAuth, 100);
          }
        };
        checkAuth();
      });

      showLoadingScreen();
      updateLoadingProgress('Initializing audit system...');

      updateLoadingProgress('Checking permissions...');
      
      // FIXED: Add more detailed logging and multiple fallback checks
      const userRole = await getCurrentUserRole();
      console.log('User role from getCurrentUserRole():', userRole);
      
      // FIXED: Try fallback role check if first fails
      let effectiveRole = userRole;
      if (!effectiveRole) {
        console.log('Primary role check failed, trying localStorage fallback...');
        effectiveRole = localStorage.getItem('userRole');
        console.log('Fallback role from localStorage:', effectiveRole);
      }
      
      // FIXED: More permissive role check - allow all except Agents
      const canViewAudit = effectiveRole && effectiveRole !== 'Agent';
      console.log('Can view audit:', canViewAudit, 'for role:', effectiveRole);
      
      if (!canViewAudit) {
        console.log('Access denied for role:', effectiveRole);
        hideLoadingScreen();
        renderLocalAccessDenied();
        document.body.style.visibility = 'visible';
        return;
      }

      console.log('Access granted, initializing page...');
      await initializeAuditPage();
      document.body.style.visibility = 'visible';
      
    } catch (error) {
      console.error('Error initializing audit page:', error);
      hideLoadingScreen();
      renderError('Failed to initialize audit page: ' + error.message);
      document.body.style.visibility = 'visible';
    }
  }
});

function renderLocalAccessDenied() {
  let mainContent = document.getElementById('main-content');
  if (!mainContent) {
    mainContent = document.createElement('div');
    mainContent.id = 'main-content';
    mainContent.className = 'p-6';
    document.body.appendChild(mainContent);
  }
  
  mainContent.innerHTML = `
    <div class="flex items-center justify-center min-h-[60vh]">
      <div class="text-center max-w-md mx-auto p-8">
        <div class="w-20 h-20 mx-auto mb-6 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 15v2m0 0v2m0-2h2m-2 0H8m13-9a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 class="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Access Restricted</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
          You don't have permission to view audit logs.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button onclick="window.location.href='/inventory.html'" 
                  class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
            Go to Inventory
          </button>
          <button onclick="window.history.back()" 
                  class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium">
            Go Back
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderError(message) {
  let mainContent = document.getElementById('main-content');
  if (!mainContent) {
    mainContent = document.createElement('div');
    mainContent.id = 'main-content';
    mainContent.className = 'p-6';
    document.body.appendChild(mainContent);
  }
  
  mainContent.innerHTML = `
    <div class="flex items-center justify-center min-h-[60vh]">
      <div class="text-center max-w-md mx-auto p-8">
        <div class="w-16 h-16 mx-auto mb-4 text-red-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Loading Error</h2>
        <p class="text-gray-500 dark:text-gray-400 mb-4">${message}</p>
        <button onclick="window.location.reload()" 
                class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
          Retry
        </button>
      </div>
    </div>
  `;
}

async function initializeAuditPage() {
  let mainContent = document.getElementById('main-content');
  if (!mainContent) {
    mainContent = document.createElement('div');
    mainContent.id = 'main-content';
    mainContent.className = 'p-6';
    document.body.appendChild(mainContent);
  }
  
  try {
    updateLoadingProgress('Loading audit data...');
    await loadAuditData();
    
    updateLoadingProgress('Setting up interface...');
    await renderAuditInterface();
    
    updateLoadingProgress('Initializing controls...');
    initializeEventListeners();
    
    updateLoadingProgress('Rendering table...');
    renderAuditTable();
    
    updateLoadingProgress('Audit log ready!');
    
    setTimeout(() => {
      hideLoadingScreen();
    }, 500);
    
  } catch (error) {
    console.error('Error initializing audit page:', error);
    hideLoadingScreen();
    renderError('Failed to load audit logs: ' + error.message);
  }
}

async function loadAuditData() {
  try {
    updateLoadingProgress('Fetching audit entries...');
    const logs = ((await loadAuditLog()) || []).reverse();
    const userRole = await getCurrentUserRole();
    const currentUser = getCurrentUser();
    
    updateLoadingProgress('Filtering entries by permissions...');
    auditData.logs = logs;
    
    if (userRole === 'Agent') {
      auditData.filteredLogs = logs.filter(log => log.user === currentUser?.email);
    } else {
      auditData.filteredLogs = logs;
    }
    
    auditData.currentPage = 1;
    auditData.searchQuery = '';
    
  } catch (error) {
    console.error('Error loading audit data:', error);
    throw new Error('Failed to load audit logs from database');
  }
}

async function refreshAuditLog() {
  showLoadingScreen();
  updateLoadingProgress('Refreshing audit data...');
  
  try {
    await loadAuditData();
    updateLoadingProgress('Updating display...');
    renderAuditTable();
    updateLoadingProgress('Refresh complete!');
    showToast('Audit log refreshed successfully', 'green');
    
    setTimeout(() => {
      hideLoadingScreen();
    }, 500);
  } catch (error) {
    console.error('Error refreshing audit log:', error);
    hideLoadingScreen();
    showToast('Failed to refresh audit log', 'red');
  }
}

async function renderAuditInterface() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) {
    console.error('main-content element not found');
    return;
  }
  
  const canExport = await can('settings');
  const userRole = await getCurrentUserRole();
  
  mainContent.innerHTML = `
    <div class="max-w-7xl mx-auto">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Audit Log</h1>
        <p class="text-gray-600 dark:text-gray-400">
          ${userRole === 'Agent' ? 'Viewing your audit entries' : 'Viewing all system audit entries'}
          (${auditData.filteredLogs.length} entries)
        </p>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
        <div class="p-4">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div class="flex gap-2 flex-1">
              <div class="relative flex-1">
                <input id="auditSearch" 
                       type="text" 
                       placeholder="Search by Charger ID, Action, User..." 
                       class="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 pl-10 rounded-lg 
                              shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400
                              bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition" />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            ${canExport ? `
            <div class="flex gap-2">
              <button id="refreshAuditBtn" 
                      class="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 
                             font-semibold hover:bg-blue-200 dark:hover:bg-blue-600 shadow transition flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                Refresh
              </button>
              <button id="exportAuditCSV" 
                      class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                             font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 shadow transition flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Export CSV
              </button>
              <button id="exportAuditXLSX" 
                      class="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white 
                             font-semibold shadow transition flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Export XLSX
              </button>
            </div>
            ` : ''}
          </div>
        </div>
      </div>

      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto">
            <thead class="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Charger ID</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">From</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">To</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status Change</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Comment</th>
              </tr>
            </thead>
            <tbody id="auditTableBody" class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            </tbody>
          </table>
        </div>
        
        <div id="auditPagination" class="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
        </div>
      </div>
    </div>
  `;
}

// ... rest of the functions (initializeEventListeners, handleSearch, applyFilters, renderAuditTable, formatDate, getActionBadgeClass, renderPagination, exportToCSV, exportToXLSX) stay exactly the same ...

function initializeEventListeners() {
  const searchInput = document.getElementById('auditSearch');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  const refreshButton = document.getElementById('refreshAuditBtn');
  if (refreshButton) {
    refreshButton.addEventListener('click', refreshAuditLog);
  }

  const csvButton = document.getElementById('exportAuditCSV');
  const xlsxButton = document.getElementById('exportAuditXLSX');
  
  if (csvButton) csvButton.addEventListener('click', exportToCSV);
  if (xlsxButton) xlsxButton.addEventListener('click', exportToXLSX);
}

function handleSearch(event) {
  auditData.searchQuery = event.target.value.toLowerCase();
  auditData.currentPage = 1;
  applyFilters();
  renderAuditTable();
}

function applyFilters() {
  let filtered = auditData.logs;
  
  if (auditData.searchQuery) {
    filtered = filtered.filter(log => {
      const searchableFields = [
        log.chargerId,
        log.action,
        log.user,
        log.product,
        log.from,
        log.to,
        log.statusFrom,
        log.statusTo,
        log.comment
      ];
      
      return searchableFields.some(field => 
        (field || '').toString().toLowerCase().includes(auditData.searchQuery)
      );
    });
  }
  
  auditData.filteredLogs = filtered;
}

function renderAuditTable() {
  const tbody = document.getElementById('auditTableBody');
  if (!tbody) return;

  const startIdx = (auditData.currentPage - 1) * auditData.pageSize;
  const endIdx = startIdx + auditData.pageSize;
  const paginatedLogs = auditData.filteredLogs.slice(startIdx, endIdx);

  if (paginatedLogs.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="9" class="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
          ${auditData.searchQuery ? 'No audit entries match your search.' : 'No audit entries found.'}
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = paginatedLogs.map((log, idx) => `
      <tr class="${idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'} 
                 hover:bg-purple-50 dark:hover:bg-purple-900 transition">
        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
          ${formatDate(log.date)}
        </td>
        <td class="px-4 py-3 text-sm">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getActionBadgeClass(log.action)}">
            ${log.action}
          </span>
        </td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">${log.user || ''}</td>
        <td class="px-4 py-3 text-sm font-mono text-gray-900 dark:text-gray-100">${log.chargerId || ''}</td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">${log.product || ''}</td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">${log.from || ''}</td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">${log.to || ''}</td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
          ${log.statusFrom && log.statusTo ? `${log.statusFrom} → ${log.statusTo}` : ''}
        </td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
          ${log.comment ? `<span class="truncate max-w-xs block" title="${log.comment}">${log.comment}</span>` : ''}
        </td>
      </tr>
    `).join('');
  }

  renderPagination();
}

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch {
    return dateString || '';
  }
}

function getActionBadgeClass(action) {
  const actionClasses = {
    'Status Change': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Move': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'Add': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Edit': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Delete': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'Bulk Add': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200'
  };
  
  return actionClasses[action] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
}

function renderPagination() {
  const paginationContainer = document.getElementById('auditPagination');
  if (!paginationContainer) return;

  const totalPages = Math.ceil(auditData.filteredLogs.length / auditData.pageSize);
  const startEntry = (auditData.currentPage - 1) * auditData.pageSize + 1;
  const endEntry = Math.min(auditData.currentPage * auditData.pageSize, auditData.filteredLogs.length);

  paginationContainer.innerHTML = `
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Showing <span class="font-medium">${startEntry}</span> to <span class="font-medium">${endEntry}</span>
          of <span class="font-medium">${auditData.filteredLogs.length}</span> results
        </p>
        
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-700 dark:text-gray-300">Show:</label>
          <select id="pageSizeSelect" class="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm
                                             bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      
      <div class="flex items-center gap-2">
        <button id="prevPageBtn" class="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 
                                       text-sm font-medium text-gray-700 dark:text-gray-300 
                                       hover:bg-gray-50 dark:hover:bg-gray-700 transition
                                       disabled:opacity-50 disabled:cursor-not-allowed"
                ${auditData.currentPage <= 1 ? 'disabled' : ''}>
          Previous
        </button>
        
        <span class="px-3 py-1 text-sm text-gray-700 dark:text-gray-300">
          Page ${auditData.currentPage} of ${totalPages}
        </span>
        
        <button id="nextPageBtn" class="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 
                                       text-sm font-medium text-gray-700 dark:text-gray-300 
                                       hover:bg-gray-50 dark:hover:bg-gray-700 transition
                                       disabled:opacity-50 disabled:cursor-not-allowed"
                ${auditData.currentPage >= totalPages ? 'disabled' : ''}>
          Next
        </button>
      </div>
    </div>
  `;

  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  const pageSizeSelect = document.getElementById('pageSizeSelect');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (auditData.currentPage > 1) {
        auditData.currentPage--;
        renderAuditTable();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (auditData.currentPage < totalPages) {
        auditData.currentPage++;
        renderAuditTable();
      }
    });
  }

  if (pageSizeSelect) {
    pageSizeSelect.value = auditData.pageSize;
    pageSizeSelect.addEventListener('change', (e) => {
      auditData.pageSize = parseInt(e.target.value);
      auditData.currentPage = 1;
      renderAuditTable();
    });
  }
}

function exportToCSV() {
  try {
    const headers = [
      'Date', 'Action', 'User', 'Charger ID', 'Product', 
      'From', 'To', 'Status From', 'Status To', 'Comment'
    ];
    
    const csvData = auditData.filteredLogs.map(log => [
      formatDate(log.date),
      log.action || '',
      log.user || '',
      log.chargerId || '',
      log.product || '',
      log.from || '',
      log.to || '',
      log.statusFrom || '',
      log.statusTo || '',
      log.comment || ''
    ]);
    
    const csvContent = [headers, ...csvData]
      .map(row => row.map(cell => `"${(cell || '').toString().replace(/"/g, '""')}"`).join(','))
      .join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `audit_log_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('Audit log exported to CSV', 'green');
  } catch (error) {
    console.error('Error exporting CSV:', error);
    showToast('Failed to export CSV', 'red');
  }
}

function exportToXLSX() {
  try {
    if (typeof XLSX === 'undefined') {
      showToast('XLSX library not loaded', 'red');
      return;
    }
    
    const exportData = auditData.filteredLogs.map(log => ({
      'Date': formatDate(log.date),
      'Action': log.action || '',
      'User': log.user || '',
      'Charger ID': log.chargerId || '',
      'Product': log.product || '',
      'From': log.from || '',
      'To': log.to || '',
      'Status From': log.statusFrom || '',
      'Status To': log.statusTo || '',
      'Comment': log.comment || ''
    }));
    
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Audit Log');
    XLSX.writeFile(workbook, `audit_log_${new Date().toISOString().split('T')[0]}.xlsx`);
    
    showToast('Audit log exported to XLSX', 'green');
  } catch (error) {
    console.error('Error exporting XLSX:', error);
    showToast('Failed to export XLSX', 'red');
  }
}

// Expose function for retry button
window.initializeAuditPage = initializeAuditPage;
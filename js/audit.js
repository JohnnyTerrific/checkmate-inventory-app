import { loadAuditLog } from './inventory.js';
import { getCurrentUser, getCurrentUserRole } from './utils/users.js';
import { can } from './utils/permissions.js';
import { showToast } from './core.js';

// Global state
let auditData = {
  logs: [],
  filteredLogs: [],
  currentPage: 1,
  pageSize: 25,
  searchQuery: ''
};

// Wait for both DOM and shell to be ready
document.addEventListener('DOMContentLoaded', async () => {
  showLoadingScreen();
  updateLoadingProgress('Initializing audit system...');

  // Wait for shell to load the main-content element
  await waitForElement('main-content');

  try {
    updateLoadingProgress('Checking permissions...');
    // Check if user has permission to view audit logs
    const canViewAudit = await can('viewDashboard');
    if (!canViewAudit) {
      hideLoadingScreen();
      renderAccessDenied();
      return;
    }

    await initializeAuditPage();
  } catch (error) {
    console.error('Error initializing audit page:', error);
    hideLoadingScreen();
    renderError('Failed to initialize audit page');
  }
});

// Helper function to wait for an element to exist
function waitForElement(elementId, timeout = 5000) {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    function checkElement() {
      const element = document.getElementById(elementId);
      if (element) {
        resolve(element);
        return;
      }
      
      if (Date.now() - startTime > timeout) {
        reject(new Error(`Element #${elementId} not found within ${timeout}ms`));
        return;
      }
      
      // Check again in 100ms
      setTimeout(checkElement, 100);
    }
    
    checkElement();
  });
}

function renderAccessDenied() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) {
    console.error('main-content element not found');
    return;
  }
  
  mainContent.innerHTML = `
    <div class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 15v2m0 0v2m0-2h2m-2 0H8m13-9a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Access Denied</h2>
        <p class="text-gray-500 dark:text-gray-400">You don't have permission to view audit logs.</p>
        <button onclick="window.location.href='/index.html'" 
                class="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
          Return Home
        </button>
      </div>
    </div>
  `;
}

function renderError(message) {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) {
    console.error('main-content element not found');
    return;
  }
  
  mainContent.innerHTML = `
    <div class="flex items-center justify-center h-64">
      <div class="text-center text-red-600">
        <div class="w-16 h-16 mx-auto mb-4">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 class="text-xl font-semibold mb-2">Error</h2>
        <p class="mb-4">${message}</p>
        <button onclick="window.initializeAuditPage()" 
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Retry
        </button>
      </div>
    </div>
  `;
}

async function initializeAuditPage() {
  const mainContent = document.getElementById('main-content');
  if (!mainContent) {
    console.error('main-content element not found');
    hideLoadingScreen();
    return;
  }
  
  try {
    updateLoadingProgress('Loading audit data...');
    // Load and filter audit data
    await loadAuditData();
    
    updateLoadingProgress('Setting up interface...');
    // Render the audit interface
    await renderAuditInterface();
    
    updateLoadingProgress('Initializing controls...');
    // Initialize event listeners
    initializeEventListeners();
    
    updateLoadingProgress('Rendering table...');
    // Initial render
    renderAuditTable();
    
    updateLoadingProgress('Audit log ready!');
    
    // Hide loading screen after a brief delay
    setTimeout(() => {
      hideLoadingScreen();
    }, 500);
    
  } catch (error) {
    console.error('Error initializing audit page:', error);
    hideLoadingScreen();
    renderError('Failed to load audit logs');
  }
}

async function loadAuditData() {
  try {
    updateLoadingProgress('Fetching audit entries...');
    const logs = ((await loadAuditLog()) || []).reverse();
    const userRole = await getCurrentUserRole();
    const currentUser = getCurrentUser();
    
    updateLoadingProgress('Filtering entries by permissions...');
    // Store original logs
    auditData.logs = logs;
    
    // Filter logs based on user role
    if (userRole === 'Agent') {
      // Agents can only see their own actions
      auditData.filteredLogs = logs.filter(log => log.user === currentUser?.email);
    } else {
      // Admins and other roles can see all logs
      auditData.filteredLogs = logs;
    }
    
    // Reset pagination
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
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Audit Log</h1>
        <p class="text-gray-600 dark:text-gray-400">
          ${userRole === 'Agent' ? 'Viewing your audit entries' : 'Viewing all system audit entries'}
          (${auditData.filteredLogs.length} entries)
        </p>
      </div>

      <!-- Controls -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
        <div class="p-4">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <!-- Search -->
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
            
            <!-- Export buttons -->
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

      <!-- Table Container -->
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
              <!-- Table rows will be inserted here -->
            </tbody>
          </table>
        </div>
        
        <!-- Pagination -->
        <div id="auditPagination" class="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
          <!-- Pagination will be inserted here -->
        </div>
      </div>
    </div>
  `;
}

function initializeEventListeners() {
  // Search functionality
  const searchInput = document.getElementById('auditSearch');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  // Refresh functionality
  const refreshButton = document.getElementById('refreshAuditBtn');
  if (refreshButton) {
    refreshButton.addEventListener('click', refreshAuditLog);
  }

  // Export functionality
  const csvButton = document.getElementById('exportAuditCSV');
  const xlsxButton = document.getElementById('exportAuditXLSX');
  
  if (csvButton) csvButton.addEventListener('click', exportToCSV);
  if (xlsxButton) xlsxButton.addEventListener('click', exportToXLSX);
}

function handleSearch(event) {
  auditData.searchQuery = event.target.value.toLowerCase();
  auditData.currentPage = 1; // Reset to first page
  applyFilters();
  renderAuditTable();
}

function applyFilters() {
  let filtered = auditData.logs;
  
  // Apply role-based filtering
  const userRole = getCurrentUserRole();
  const currentUser = getCurrentUser();
  
  if (userRole === 'Agent') {
    filtered = filtered.filter(log => log.user === currentUser?.email);
  }
  
  // Apply search filter
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

  // Add event listeners for pagination
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

function showLoadingScreen() {
  // Remove any existing loading screen
  const existingLoader = document.getElementById('auditLoadingScreen');
  if (existingLoader) {
    existingLoader.remove();
  }

  // Create loading screen HTML
  const loadingHTML = `
    <div id="auditLoadingScreen" class="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center z-50">
      <div class="text-center">
        <!-- Pulsating Logo -->
        <div class="loading-pulse mb-8">
          <div class="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <svg class="w-16 h-16 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
        
        <!-- Loading Text -->
        <h2 class="text-3xl font-bold text-white mb-4">CheckMate</h2>
        <p class="text-purple-200 text-lg mb-8">Loading Audit Log</p>
        
        <!-- Loading Dots -->
        <div class="flex justify-center space-x-2">
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
        </div>
        
        <!-- Progress Text -->
        <p id="auditLoadingProgress" class="text-purple-300 mt-6 text-sm">Initializing...</p>
      </div>
    </div>
  `;

    // Insert loading screen
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
  }

  function updateLoadingProgress(message) {
    const progressElement = document.getElementById('auditLoadingProgress');
    if (progressElement) {
      progressElement.textContent = message;
    }
  }





// Expose function for retry button
window.initializeAuditPage = initializeAuditPage;
import { loadInventory } from "../js/inventory.js";
import { loadShipments } from "../js/shipments.js";
import { checkPageAccess, renderAccessDenied } from './core.js';
import { showToast } from './core.js';
import { 
  getDashboardStats, 
  loadSettings,
} from "../js/settings.js";

if (document.body.dataset.page === "dashboard") {
  showLoadingScreen();
  updateLoadingProgress('Initializing dashboard...');
}

function showLoadingScreen() {
  const existingLoader = document.getElementById('dashboardLoadingScreen');
  if (existingLoader) {
    existingLoader.remove();
  }

  // Create loading screen HTML
  const loadingHTML = `
    <div id="dashboardLoadingScreen" class="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center z-50">
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
        <p class="text-purple-200 text-lg mb-8">Loading Dashboard</p>
        
        <!-- Loading Dots -->
        <div class="flex justify-center space-x-2">
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
        </div>
        
        <!-- Progress Text -->
        <p id="dashboardLoadingProgress" class="text-purple-300 mt-6 text-sm">Initializing...</p>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', loadingHTML);
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('dashboardLoadingScreen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }
}

function updateLoadingProgress(message) {
  const progressElement = document.getElementById('dashboardLoadingProgress');
  if (progressElement) {
    progressElement.textContent = message;
  }
}

// 1. Stat Cards Data Aggregation
function injectDashboardPage() {
  document.getElementById('main-content').innerHTML = `
    <section class="max-w-full mx-auto px-2 py-6 space-y-6">
      <!-- Modern Header with Breadcrumbs -->
      <header class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-1">Real-time inventory overview and analytics</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Last updated: <span id="lastUpdated">--</span>
            </div>
            <button id="refreshDashboard" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Refresh
            </button>
          </div>
        </div>
      </header>

      <!-- Enhanced KPI Cards with animations -->
      <div id="stat-cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8"></div>

      <!-- Enhanced Filter Bar -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div class="flex flex-wrap gap-4 items-center">
          <div class="flex items-center gap-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Status:</label>
            <select id="filterStatus" class="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700">
              <option value="">All Statuses</option>
            </select>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Time Period:</label>
            <select id="filterPeriod" class="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700">
              <option value="all">All Time</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
              <option value="365">Last Year</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Enhanced Alerts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Shipment Countdown -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-xl shadow-sm border border-blue-200 dark:border-blue-700 p-6">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Next Shipment</h3>
              <div id="nextShipmentTimer" class="text-2xl font-bold text-blue-700 dark:text-blue-200">—</div>
            </div>
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7"/>
              </svg>
            </div>
          </div>
        </div>

        

        <!-- Aging Alerts -->
        <div id="agingAlerts" class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900 dark:to-pink-900 rounded-xl shadow-sm border border-red-200 dark:border-red-700 p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-red-900 dark:text-red-100">Overdue Assignments</h3>
            <div class="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <div id="agingList" class="space-y-2"></div>
        </div>
      </div>

    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mb-8">
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Shipments</h3>
          <div class="flex items-center gap-3">
            <button id="refreshShipments" class="text-sm text-purple-600 hover:text-purple-700 underline">
              Refresh
            </button>
            <!-- REMOVED: New Shipment button - shipments are created in inventory page -->
          </div>
        </div>
        
        <!-- Shipments Tabs -->
        <div class="mb-4">
          <nav class="flex space-x-8 border-b border-gray-200 dark:border-gray-700">
            <button id="pendingShipmentsTab" class="shipment-tab active py-2 px-1 border-b-2 border-purple-500 text-purple-600 font-medium text-sm">
              Pending
            </button>
            <button id="arrivedShipmentsTab" class="shipment-tab py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              Arrived
            </button>
            <button id="allShipmentsTab" class="shipment-tab py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm">
              All
            </button>
          </nav>
        </div>
        
        <!-- Shipments Content -->
        <div id="shipmentsList" class="space-y-3 min-h-[200px]">
          <!-- Shipments will be populated here -->
        </div>
      </div>
    </div>

      <!-- Charts and Performance Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Status Distribution Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Status Distribution</h3>
            <button id="statusChartToggle" class="text-sm text-purple-600 hover:text-purple-700">
              Toggle View
            </button>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-64 h-64 flex items-center justify-center mb-4">
              <canvas id="statusChart" width="240" height="240"></canvas>
            </div>
            <div id="statusPills" class="w-full flex gap-2 flex-wrap justify-center"></div>
          </div>
        </div>

        <!-- Risk Analysis Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Risk Analysis</h3>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <span class="text-sm text-gray-600 dark:text-gray-400">Lost/Unknown</span>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-64 h-64 flex items-center justify-center mb-4">
              <canvas id="lostMeter" width="240" height="240"></canvas>
            </div>
            <div class="text-center">
              <div id="lostMeterLabel" class="text-sm font-medium text-gray-700 dark:text-gray-300"></div>
              <div id="lostMeterLegend" class="text-xs text-gray-500 dark:text-gray-400 mt-2"></div>
            </div>
          </div>
        </div>

        <!-- MOVED: Performance Metrics Section - Now takes 1 column -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Performance Metrics</h3>
          <div class="space-y-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400" id="utilizationRate">--</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Utilization Rate</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600 dark:text-blue-400" id="avgDeploymentTime">--</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Avg. Deployment Time</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-600 dark:text-purple-400" id="inventoryTurnover">--</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Inventory Turnover</div>
            </div>
          </div>
  `;
}
  
function renderStatusDonut(byStatus, originalByStatus) {
  const ctx = document.getElementById('statusChart').getContext('2d');
  if (window.statusChart && typeof window.statusChart.destroy === 'function') {
    window.statusChart.destroy();
  }

  // FIXED: Store original data properly
  if (!originalByStatus) {
    originalByStatus = { ...byStatus }; // Create a copy
  }

  // Rainbow color palette - SAME as pills
  const rainbowColors = [
    '#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff'
  ];

  const total = Object.values(byStatus).reduce((sum, val) => sum + val, 0);
  const threshold = Math.max(1, Math.floor(total * 0.02));
  
  let processedData = {};
  let othersCount = 0;
  
  Object.entries(byStatus).forEach(([status, count]) => {
    if (count >= threshold) {
      processedData[status] = count;
    } else {
      othersCount += count;
    }
  });
  
  if (othersCount > 0) {
    processedData['Others'] = othersCount;
  }

  const chartLabels = Object.keys(processedData);
  const chartColors = chartLabels.map((_label, index) => rainbowColors[index % rainbowColors.length]);

  // FIXED: Create chart without DataLabels plugin for status chart
  window.statusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: chartLabels,
      datasets: [{
        data: Object.values(processedData),
        backgroundColor: chartColors,
        borderWidth: 0,
        hoverOffset: 8,
        hoverBorderWidth: 2,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      cutout: '70%',
      responsive: true,
      maintainAspectRatio: true,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: { display: false },
        // FIXED: Don't register datalabels for this chart
        datalabels: false, // Explicitly disable
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: '#374151',
          borderWidth: 1,
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            label: function(context) {
              const label = context.label;
              const value = context.parsed;
              const percentage = ((value / total) * 100).toFixed(1);
              
              if (label === 'Others') {
                const otherItems = Object.entries(byStatus)
                  .filter(([_status, count]) => count < threshold)
                  .map(([status, count]) => `${status}: ${count}`)
                  .join(', ');
                return [`Others (${percentage}%): ${value}`, otherItems];
              }
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      },
      animation: {
        animateRotate: true,
        duration: 1000
      },
      onClick: function(evt, elements) {
        if (elements.length > 0) {
          const idx = elements[0].index;
          const status = this.data.labels[idx];
          
          if (status !== 'Others') {
            // Filter to show only the selected status
            const originalValue = originalByStatus[status] || 0;
            if (originalValue > 0) {
              renderStatusDonut({ [status]: originalValue }, originalByStatus);
            }
          }
        } else {
          // FIXED: Click on empty area to restore full chart
          renderStatusDonut(originalByStatus, originalByStatus);
        }
      }
    }
  });

  // FIXED: Store original data on chart instance for reset functionality
  window.statusChart.originalByStatus = originalByStatus;
  window.statusChart.currentByStatus = byStatus;

  // Pass the same rainbow colors to pills
  renderStatusPills(byStatus, chartLabels, chartColors, (selectedStatus) => {
    showChargerListForStatus(selectedStatus);
  });
}
  
function renderStatusPills(statusMap, chartLabels, chartColors, onClickStatus) {
  const container = document.getElementById('statusPills');
  const rainbowColors = [
    '#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff'
  ];

  const labels = Object.keys(statusMap);
  
  // Add scrollable container styling with smaller padding
  container.className = 'mt-2 flex gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-1 max-w-full';
  container.style.scrollbarWidth = 'thin';
  
  container.innerHTML = labels.map((label, i) => {
    // Use same color mapping as chart
    const colorIndex = chartLabels ? chartLabels.indexOf(label) : i;
    const color = chartColors && colorIndex >= 0 ? chartColors[colorIndex] : rainbowColors[i % rainbowColors.length];
    
    return `
      <button 
        class="px-2 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform active:ring-2 active:ring-offset-1 flex-shrink-0"
        style="background: ${color}; color: white; text-shadow: 1px 1px 1px rgba(0,0,0,0.5);"
        data-status="${label}">
        ${label}
      </button>
    `;
  }).join('');

  // Add click handlers
  Array.from(container.children).forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.status;
      onClickStatus(selected);
    });
  });
  
  // FIXED: Add "Reset View" button for chart restoration
  const resetBtn = document.createElement('button');
  resetBtn.className = 'px-2 py-1 rounded-full text-gray-700 text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform border border-gray-300 flex-shrink-0';
  resetBtn.style.background = 'white';
  resetBtn.style.color = '#374151';
  resetBtn.textContent = 'Reset View';
  resetBtn.onclick = () => {
    // FIXED: Use the stored original data
    if (window.statusChart && window.statusChart.originalByStatus) {
      renderStatusDonut(window.statusChart.originalByStatus, window.statusChart.originalByStatus);
    }
  };
  container.appendChild(resetBtn);
}

  const rainbowColors = [
    '#ff0000', // Red
    '#ff7f00', // Orange
    '#ffff00', // Yellow
    '#00ff00', // Green
    '#0000ff', // Blue
    '#4b0082', // Indigo
    '#8f00ff'  // Violet
  ];

  function renderLostMeter(stats, inventory) {
    const lostCount = inventory.filter(i => 
      (i.location && typeof i.location === "string" && i.location.toLowerCase().includes('lost')) ||
      (typeof i.status === "string" && i.status.toLowerCase() === "unknown")
    ).length;
    const percent = stats.total > 0 ? Math.round((lostCount / stats.total) * 100) : 0;
  
    const ctx = document.getElementById('lostMeter').getContext('2d');
    if (window.lostMeterChart && typeof window.lostMeterChart.destroy === 'function') {
      window.lostMeterChart.destroy();
    }
  
    const rainbowColors = [
      '#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff'
    ];
    
    const colorIndex = Math.min(Math.floor(percent / 15), rainbowColors.length - 1);
    
    // FIXED: Create chart with proper DataLabels configuration
    const chartConfig = {
      type: 'doughnut',
      data: {
        labels: ['Lost/Unknown', 'Other'],
        datasets: [{
          data: [lostCount, stats.total - lostCount],
          backgroundColor: [rainbowColors[colorIndex], 'rgba(209,213,219,0.4)'],
          borderWidth: 2,
          borderColor: '#fff',
          hoverOffset: 8
        }]
      },
      options: {
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: { display: false },
          tooltip: { 
            enabled: true,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff'
          }
        },
        animation: {
          animateRotate: true,
          duration: 1000
        }
      }
    };
  
    // FIXED: Only add datalabels if available and register it properly
    if (typeof ChartDataLabels !== 'undefined') {
      try {
        // Register plugin only for this chart instance
        Chart.register(ChartDataLabels); // Add this line
        chartConfig.options.plugins.datalabels = {
          color: ['#ffffff', '#6b7280'],
          font: { weight: 'bold', size: 16 },
          textStrokeColor: '#000000',
          textStrokeWidth: 1,
          formatter: (value, context) => {
            if (context.dataIndex === 0) {
              return `${percent}%`;
            }
            return '';
          }
        };
      } catch (error) {
        console.warn('ChartDataLabels plugin configuration failed:', error);
        // Continue without the plugin
      }
    }
  
    window.lostMeterChart = new Chart(ctx, chartConfig);
  
    // Rest of the function remains the same...
    const label = document.getElementById('lostMeterLabel');
    if (label) {
      let current = 0;
      const target = percent;
      const step = Math.ceil(target / 24) || 1;
      function animate() {
        if (current < target) {
          current += step;
          if (current > target) current = target;
          label.textContent = `Lost Chargers: ${current}% (${lostCount} of ${stats.total})`;
          requestAnimationFrame(animate);
        } else {
          label.textContent = `Lost Chargers: ${target}% (${lostCount} of ${stats.total})`;
        }
      }
      animate();
    }
  
    const legend = document.getElementById('lostMeterLegend');
    if (legend) {
      const grouped = {};
      inventory.filter(i => 
        (i.location && typeof i.location === "string" && i.location.toLowerCase().includes('lost')) ||
        (typeof i.status === "string" && i.status.toLowerCase() === "unknown")
      ).forEach(i => {
        const model = i.model || 'Unknown';
        grouped[model] = (grouped[model] || 0) + 1;
      });
      legend.innerHTML = Object.entries(grouped).map(([model, qty]) => `${model}: <b>${qty}</b>`).join(', ');
    }
  }

  // ① Renders the KPI cards
async function renderStatCards(stats, inventory) {
  // Load settings for tooltip logic
  const settings = await loadSettings();
  
  const cards = [
    { label: 'Total Units', value: stats.total, key: 'total' },
    { label: 'In Stock', value: stats.inStockCount || 0, key: 'inStockCount' },
    { label: 'Installed', value: stats.installedCount || 0, key: 'installedCount' },
    { label: 'With Contractors', value: stats.contractorCount || 0, key: 'contractorCount' },
    { label: 'Overdue (>14d)', value: stats.overdueCount || 0, key: 'overdueCount' },
    { label: 'Public Assets', value: stats.publicCount || 0, key: 'publicCount' }
  ];
  const container = document.getElementById('stat-cards');
  container.innerHTML = cards.map((c, i) => `
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 flex flex-col animate-countup relative stat-card"
         style="border-left: 6px solid ${rainbowColors[i % rainbowColors.length]};"
         data-key="${c.key}">
      <span class="text-xs font-medium text-gray-500 dark:text-gray-400">${c.label}</span>
      <span class="text-xl font-bold text-gray-900 dark:text-gray-100">${c.value}</span>
      <div class="stat-tooltip absolute z-10 left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded px-3 py-2 shadow-lg hidden whitespace-nowrap"></div>
    </div>
  `).join('');

  // Tooltip handling - FIXED TO USE PARENT CONTAINER LOGIC
  document.querySelectorAll('.stat-card').forEach(card => {
    const key = card.dataset.key;
    const tooltip = card.querySelector('.stat-tooltip');
    card.addEventListener('mouseenter', e => {
      let modelCounts = {};
      if (key === 'total') {
        // Count all models
        inventory.forEach(u => {
          const m = u.model || 'Unknown';
          modelCounts[m] = (modelCounts[m] || 0) + 1;
        });
      } else if (
        key === 'inStockCount' ||
        key === 'installedCount' ||
        key === 'contractorCount' ||
        key === 'publicCount'
      ) {
        let filterFn;
        
        // ✅ FIXED: Use parent container logic for ALL cards
if (key === 'inStockCount') {
  filterFn = u => {
    const location = settings.locations?.find(loc => loc.name === u.location);
    return location?.parent === "warehouse";
  };
} else if (key === 'installedCount') {
  filterFn = u => {
    const location = settings.locations?.find(loc => loc.name === u.location);
    return location?.parent === "customer";
  };
} else if (key === 'contractorCount') {
  filterFn = u => {
    // Check both regular locations and contractor names
    const location = settings.locations?.find(loc => loc.name === u.location);
    if (location?.parent === "contractor") return true;
    
    // Also check if location matches a contractor name directly
    const contractorNames = (settings.contractors || []).map(c => c.name);
    return contractorNames.includes(u.location);
  };
} else if (key === 'publicCount') {
  filterFn = u => {
    const location = settings.locations?.find(loc => loc.name === u.location);
    return location?.parent === "public";
  };
}
        
        inventory.filter(filterFn).forEach(u => {
          const m = u.model || 'Unknown';
          modelCounts[m] = (modelCounts[m] || 0) + 1;
        });
      }
      
      if (Object.keys(modelCounts).length === 0) {
        tooltip.innerHTML = "No data";
      } else {
        tooltip.innerHTML = Object.entries(modelCounts).map(
          ([model, qty]) => `<div>${model}: <b>${qty}</b></div>`
        ).join('');
      }
      tooltip.classList.remove('hidden');
    });
    card.addEventListener('mouseleave', e => {
      tooltip.classList.add('hidden');
    });
  });
}

// ② Starts the shipment countdown
function renderShipmentCountdown(nextTs) {
  const el = document.getElementById('nextShipmentTimer');
  if (!nextTs) return el.textContent = '—';
  function update() {
    const diff = nextTs - Date.now();
    if (diff <= 0) return el.textContent = 'Arrived';
    const d = Math.floor(diff/86400000);
    const h = Math.floor(diff%86400000/3600000);
    const m = Math.floor(diff%3600000/60000);
    el.textContent = `${d}d ${h}h ${m}m`;
    requestAnimationFrame(update);
  }
  update();
}


async function renderAgingAlerts(stats, inventory) {
  const list = document.getElementById('agingList');
  if (!list) return;
  
  // FIXED: Use the overdueCount from stats, but also manually calculate for display
  const now = Date.now();
  const settings = await loadSettings();
  const contractorNames = (settings.contractors || []).map(c => c.name);

  // Find overdue items - items with contractors for > 14 days
  const overdueItems = inventory.filter(unit => {
    // Must have an assigned date
    if (!unit.assignedDate) return false;
    
    // Must be assigned to a contractor
    const location = settings.locations?.find(loc => loc.name === unit.location);
    const isWithContractor = 
      contractorNames.includes(unit.location) || // Location matches contractor name
      (location?.parent === "contractor") || // Location has contractor parent
      unit.contractorId || // Has contractor ID field
      unit.status === 'Reserved'; // Has reserved status
    
    if (!isWithContractor) return false;
    
    // Check if overdue (> 14 days)
    const assignedTime = new Date(unit.assignedDate).getTime();
    const daysPassed = (now - assignedTime) / (1000 * 60 * 60 * 24);
    
    return daysPassed > 14;
  });

  console.log('Overdue items found:', overdueItems.length, 'Expected from stats:', stats.overdueCount);

  if (overdueItems.length === 0) {
    list.innerHTML = '<div class="text-gray-500 text-sm">No overdue contractor assignments</div>';
    return;
  }

  // Sort by most overdue first
  overdueItems.sort((a, b) => new Date(a.assignedDate) - new Date(b.assignedDate));

  list.innerHTML = overdueItems
    .slice(0, 5) // Show only top 5 most overdue
    .map(unit => {
      const daysPassed = Math.floor((now - new Date(unit.assignedDate).getTime()) / (1000 * 60 * 60 * 24));
      const contractor = contractorNames.find(name => name === unit.location) || 
                        settings.contractors?.find(c => c.id === unit.contractorId)?.name ||
                        unit.location;
      
      return `
        <div class="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900 rounded-lg border-l-4 border-red-500">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-red-900 dark:text-red-100 truncate">
              ${unit.chargerId}
            </div>
            <div class="text-sm text-red-700 dark:text-red-300 truncate">
              ${contractor}
            </div>
            <div class="text-xs text-red-600 dark:text-red-400">
              Assigned: ${new Date(unit.assignedDate).toLocaleDateString()}
            </div>
          </div>
          <div class="text-right flex-shrink-0">
            <div class="text-lg font-bold text-red-600 dark:text-red-400">
              ${daysPassed}
            </div>
            <div class="text-xs text-red-500">
              days overdue
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  // Show summary if there are more than 5
  if (overdueItems.length > 5) {
    list.insertAdjacentHTML('beforeend', `
      <div class="text-center p-2 text-sm text-gray-500">
        +${overdueItems.length - 5} more overdue assignments
      </div>
    `);
  }
}

async function renderLocationStackedBar(locStats, inventory) {
  // FIXED: First check if we already have a location distribution section
  let container = document.getElementById('locationDistributionSection');
  
  // If we don't have the section, create it
  if (!container) {
    // Try to find the old canvas container first
    let parentContainer = document.querySelector('#locationBar')?.parentElement;
    
    // If not found, find an appropriate parent
    if (!parentContainer) {
      parentContainer = document.querySelector('.grid.grid-cols-1.lg\\:grid-cols-3.gap-6.mb-8');
      if (parentContainer) {
        // Add a new full-width section after the charts
        const newSection = document.createElement('div');
        newSection.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 col-span-full';
        newSection.id = 'locationDistributionSection';
        parentContainer.parentElement.insertBefore(newSection, parentContainer.nextSibling);
        container = newSection;
      } else {
        console.error('Could not find suitable container for location distribution');
        return;
      }
    } else {
      // Use existing parent container
      parentContainer.id = 'locationDistributionSection';
      container = parentContainer;
    }
  }
  
  // FIXED: Always update the innerHTML of the EXISTING container
  container.innerHTML = `
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Inventory Distribution</h3>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">View:</label>
          <select id="viewModeSelector" class="text-sm border rounded px-2 py-1">
            <option value="treemap">Treemap View</option>
            <option value="heatmap">Heatmap View</option>
            <option value="cards">Card View</option>
          </select>
        </div>
        <button id="locationChartExport" class="text-sm text-purple-600 hover:text-purple-700">
          Export
        </button>
      </div>
    </div>
    
    <!-- Search and Filter Bar -->
    <div class="mb-4 flex gap-3 items-center">
      <input type="text" id="locationSearch" placeholder="Search locations..." 
             class="flex-1 px-3 py-2 border rounded-lg text-sm">
      <select id="modelFilter" class="px-3 py-2 border rounded-lg text-sm">
        <option value="">All Models</option>
      </select>
      <button id="resetFilters" class="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
        Reset
      </button>
    </div>
    
    <!-- View Container -->
    <div id="inventoryViewContainer" class="w-full" style="min-height: 600px;">
      <!-- Dynamic content will be inserted here -->
    </div>
    
    <!-- Quick Stats Bar -->
    <div id="quickStats" class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <!-- Stats will be populated here -->
    </div>
  `;

  // Initialize the enhanced view
  await initializeInventoryView(locStats, inventory);
}

async function initializeInventoryView(locStats, inventory) {
  const settings = await loadSettings();
  
  // Prepare data structures
  const locationData = prepareLocationData(inventory, settings);
  const allModels = [...new Set(inventory.map(i => i.model || 'Unknown'))];
  
  // Populate model filter
  const modelFilter = document.getElementById('modelFilter');
  modelFilter.innerHTML = '<option value="">All Models</option>' + 
    allModels.map(model => `<option value="${model}">${model}</option>`).join('');
  
  // Set up event listeners
  setupInventoryViewListeners(locationData, inventory, settings);
  
  // Render initial view (treemap by default)
  renderTreemapView(locationData);
  updateQuickStats(locationData);
}

function prepareLocationData(inventory, settings) {
  const locationData = {};
  
  inventory.forEach(item => {
    const location = item.location || 'Unknown';
    const model = item.model || 'Unknown';
    
    if (!locationData[location]) {
      locationData[location] = {
        total: 0,
        models: {},
        parentInfo: getLocationParentInfo(location, settings)
      };
    }
    
    locationData[location].total++;
    locationData[location].models[model] = (locationData[location].models[model] || 0) + 1;
  });
  
  return locationData;
}

function getLocationParentInfo(locationName, settings) {
  const locationConfig = settings.locations?.find(l => l.name === locationName);
  if (locationConfig?.parent) {
    const parent = settings.parentContainers?.find(p => p.id === locationConfig.parent);
    return parent ? { name: parent.name, id: parent.id } : null;
  }
  return null;
}

function setupInventoryViewListeners(locationData, inventory, settings) {
  const viewSelector = document.getElementById('viewModeSelector');
  const searchInput = document.getElementById('locationSearch');
  const modelFilter = document.getElementById('modelFilter');
  const resetButton = document.getElementById('resetFilters');
  
  viewSelector.addEventListener('change', (e) => {
    const mode = e.target.value;
    const filteredData = applyFilters(locationData, searchInput.value, modelFilter.value);
    
    switch(mode) {
      case 'treemap':
        renderTreemapView(filteredData);
        break;
      case 'heatmap':
        renderHeatmapView(filteredData, inventory);
        break;
      case 'cards':
        renderCardView(filteredData);
        break;
    }
  });
  
  searchInput.addEventListener('input', () => {
    const filteredData = applyFilters(locationData, searchInput.value, modelFilter.value);
    renderCurrentView(filteredData, inventory);
  });
  
  modelFilter.addEventListener('change', () => {
    const filteredData = applyFilters(locationData, searchInput.value, modelFilter.value);
    renderCurrentView(filteredData, inventory);
  });
  
  resetButton.addEventListener('click', () => {
    searchInput.value = '';
    modelFilter.value = '';
    renderCurrentView(locationData, inventory);
  });
}

function applyFilters(locationData, searchTerm, modelFilter) {
  const filtered = {};
  
  Object.entries(locationData).forEach(([location, data]) => {
    // Apply search filter
    if (searchTerm && !location.toLowerCase().includes(searchTerm.toLowerCase())) {
      return;
    }
    
    // Apply model filter
    let filteredModels = { ...data.models };
    if (modelFilter) {
      filteredModels = { [modelFilter]: data.models[modelFilter] || 0 };
    }
    
    const total = Object.values(filteredModels).reduce((sum, count) => sum + count, 0);
    if (total > 0) {
      filtered[location] = {
        ...data,
        models: filteredModels,
        total: total
      };
    }
  });
  
  return filtered;
}

function renderCurrentView(locationData, inventory) {
  const viewMode = document.getElementById('viewModeSelector').value;
  
  switch(viewMode) {
    case 'treemap':
      renderTreemapView(locationData);
      break;
    case 'heatmap':
      renderHeatmapView(locationData, inventory);
      break;
    case 'cards':
      renderCardView(locationData);
      break;
  }
  
  updateQuickStats(locationData);
}

function renderTreemapView(locationData) {
  const container = document.getElementById('inventoryViewContainer');
  
  // Sort locations by total count
  const sortedLocations = Object.entries(locationData)
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 20); // Limit to top 20 for better UX
  
  // Calculate total for percentage calculations
  const grandTotal = sortedLocations.reduce((sum, [, data]) => sum + data.total, 0);
  
  container.innerHTML = `
    <div class="grid gap-2" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
      ${sortedLocations.map(([location, data], index) => {
        const percentage = ((data.total / grandTotal) * 100).toFixed(1);
        const color = rainbowColors[index % rainbowColors.length];
        
        // Calculate relative size for visual hierarchy
        const maxCount = sortedLocations[0][1].total;
        const relativeSize = Math.max(0.3, data.total / maxCount);
        const minHeight = 80;
        const maxHeight = 200;
        const height = minHeight + (maxHeight - minHeight) * relativeSize;
        
        return `
          <div class="location-treemap-item bg-white dark:bg-gray-800 rounded-lg border-2 hover:shadow-lg transition-all cursor-pointer group"
               style="height: ${height}px; border-color: ${color}25; background: linear-gradient(135deg, ${color}10, ${color}05);"
               data-location="${location}"
               data-location-data='${JSON.stringify(data)}'>
            
            <div class="p-3 h-full flex flex-col justify-between relative overflow-hidden">
              <!-- Location Header -->
              <div class="flex-shrink-0">
                <div class="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate" title="${location}">
                  ${location}
                </div>
                ${data.parentInfo ? `
                  <div class="text-xs text-gray-500 truncate" title="${data.parentInfo.name}">
                    ${data.parentInfo.name}
                  </div>
                ` : ''}
              </div>
              
              <!-- Count Display -->
              <div class="flex-1 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-2xl font-bold" style="color: ${color}">
                    ${data.total}
                  </div>
                  <div class="text-xs text-gray-500">
                    ${percentage}% of total
                  </div>
                </div>
              </div>
              
              <!-- Model Preview -->
              <div class="flex-shrink-0">
                <div class="text-xs text-gray-400 truncate">
                  ${Object.keys(data.models).length} model${Object.keys(data.models).length !== 1 ? 's' : ''}
                </div>
              </div>
              
              <!-- Hover Indicator -->
              <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
    
    ${sortedLocations.length === 0 ? `
      <div class="flex items-center justify-center h-40 text-gray-500">
        <div class="text-center">
          <svg class="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <p>No locations match your current filters</p>
        </div>
      </div>
    ` : ''}
  `;

  // Add event delegation for location clicks
  container.addEventListener('click', (e) => {
    const locationItem = e.target.closest('.location-treemap-item');
    if (locationItem) {
      const location = locationItem.dataset.location;
      const data = JSON.parse(locationItem.dataset.locationData);
      showLocationBreakdown(location, data);
    }
  });
}

function renderHeatmapView(locationData, inventory) {
  const container = document.getElementById('inventoryViewContainer');
  
  // Get all unique models
  const allModels = [...new Set(inventory.map(i => i.model || 'Unknown'))];
  const locations = Object.keys(locationData).slice(0, 15); // Limit for readability
  
  // Find max count for color intensity calculation
  const maxCount = Math.max(...Object.values(locationData).flatMap(data => Object.values(data.models)));
  
  container.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="p-2 text-left font-semibold text-sm border-b">Location</th>
            ${allModels.slice(0, 10).map(model => `
              <th class="p-2 text-center font-semibold text-xs border-b transform -rotate-45 origin-bottom-left" 
                  style="min-width: 80px;" title="${model}">
                ${model.length > 15 ? model.substring(0, 12) + '...' : model}
              </th>
            `).join('')}
            <th class="p-2 text-center font-semibold text-sm border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          ${locations.map(location => {
            const data = locationData[location];
            return `
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer location-row"
                  data-location="${location}"
                  data-location-data='${JSON.stringify(data)}'>
                <td class="p-2 font-medium text-sm border-b truncate" title="${location}">
                  ${location}
                  ${data.parentInfo ? `<div class="text-xs text-gray-500">${data.parentInfo.name}</div>` : ''}
                </td>
                ${allModels.slice(0, 10).map(model => {
                  const count = data.models[model] || 0;
                  const intensity = count > 0 ? Math.min(1, count / maxCount) : 0;
                  const colorIndex = allModels.indexOf(model) % rainbowColors.length;
                  const color = rainbowColors[colorIndex];
                  
                  return `
                    <td class="p-2 text-center text-xs border-b"
                        style="background-color: ${count > 0 ? `${color}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}` : 'transparent'}; color: ${intensity > 0.5 ? 'white' : 'inherit'}">
                      ${count > 0 ? count : ''}
                    </td>
                  `;
                }).join('')}
                <td class="p-2 text-center font-bold border-b">${data.total}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;

  // Add event delegation for row clicks
  container.addEventListener('click', (e) => {
    const locationRow = e.target.closest('.location-row');
    if (locationRow) {
      const location = locationRow.dataset.location;
      const data = JSON.parse(locationRow.dataset.locationData);
      showLocationBreakdown(location, data);
    }
  });
}

function renderCardView(locationData) {
  const container = document.getElementById('inventoryViewContainer');
  
  const sortedLocations = Object.entries(locationData)
    .sort((a, b) => b[1].total - a[1].total);
  
  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      ${sortedLocations.map(([location, data], index) => {
        const color = rainbowColors[index % rainbowColors.length];
        const topModels = Object.entries(data.models)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 3);
        
        return `
          <div class="bg-white dark:bg-gray-800 rounded-lg border shadow-sm hover:shadow-md transition-shadow cursor-pointer location-card"
               style="border-left: 4px solid ${color};"
               data-location="${location}"
               data-location-data='${JSON.stringify(data)}'>
            <div class="p-4">
              <div class="flex items-start justify-between mb-3">
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100 truncate" title="${location}">
                    ${location}
                  </h4>
                  ${data.parentInfo ? `
                    <p class="text-sm text-gray-500 truncate">${data.parentInfo.name}</p>
                  ` : ''}
                </div>
                <div class="text-right flex-shrink-0">
                  <div class="text-2xl font-bold" style="color: ${color}">
                    ${data.total}
                  </div>
                  <div class="text-xs text-gray-500">units</div>
                </div>
              </div>
              
              <div class="space-y-1">
                <div class="text-xs text-gray-500 mb-2">Top Models:</div>
                ${topModels.map(([model, count]) => `
                  <div class="flex justify-between items-center text-sm">
                    <span class="truncate flex-1 pr-2" title="${model}">
                      ${model.length > 20 ? model.substring(0, 17) + '...' : model}
                    </span>
                    <span class="font-medium flex-shrink-0">${count}</span>
                  </div>
                `).join('')}
                ${Object.keys(data.models).length > 3 ? `
                  <div class="text-xs text-gray-400 italic">
                    +${Object.keys(data.models).length - 3} more model${Object.keys(data.models).length - 3 !== 1 ? 's' : ''}
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Add event delegation for card clicks
  container.addEventListener('click', (e) => {
    const locationCard = e.target.closest('.location-card');
    if (locationCard) {
      const location = locationCard.dataset.location;
      const data = JSON.parse(locationCard.dataset.locationData);
      showLocationBreakdown(location, data);
    }
  });
}

function updateQuickStats(locationData) {
  const container = document.getElementById('quickStats');
  
  const totalLocations = Object.keys(locationData).length;
  const totalUnits = Object.values(locationData).reduce((sum, data) => sum + data.total, 0);
  const allModels = new Set();
  Object.values(locationData).forEach(data => {
    Object.keys(data.models).forEach(model => allModels.add(model));
  });
  
  const avgUnitsPerLocation = totalLocations > 0 ? Math.round(totalUnits / totalLocations) : 0;
  
  container.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border">
      <div class="text-lg font-bold text-blue-600">${totalLocations}</div>
      <div class="text-xs text-gray-500">Locations</div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border">
      <div class="text-lg font-bold text-green-600">${totalUnits}</div>
      <div class="text-xs text-gray-500">Total Units</div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border">
      <div class="text-lg font-bold text-purple-600">${allModels.size}</div>
      <div class="text-xs text-gray-500">Unique Models</div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border">
      <div class="text-lg font-bold text-orange-600">${avgUnitsPerLocation}</div>
      <div class="text-xs text-gray-500">Avg per Location</div>
    </div>
  `;
}

function showUnitsForModel(location, model) {
  // This function is called from the location breakdown modal
  console.log(`Showing units for ${model} in ${location}`);
  showToast(`Viewing ${model} units in ${location}`, 'blue');
}

function showAllUnitsForLocation(location) {
  // This function is called from the location breakdown modal
  console.log(`Showing all units for ${location}`);
  showToast(`Viewing all units in ${location}`, 'blue');
}

// Enhanced location breakdown modal
function showLocationBreakdown(location, data) {
  let dialog = document.getElementById('chargerListDialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'chargerListDialog';
    dialog.className = 'rounded-xl p-0 max-w-4xl w-full mx-auto max-h-[90vh] overflow-hidden backdrop:bg-black backdrop:bg-opacity-50';
    document.body.appendChild(dialog);
  }
  
  const sortedModels = Object.entries(data.models).sort((a, b) => b[1] - a[1]);
  
  dialog.innerHTML = `
    <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold">${location}</h2>
            ${data.parentInfo ? `
              <p class="text-purple-200 text-sm">Parent: ${data.parentInfo.name}</p>
            ` : ''}
            <p class="text-purple-200 text-sm">${data.total} total units • ${sortedModels.length} model types</p>
          </div>
          <button onclick="this.closest('dialog').close()" 
                  class="text-white hover:text-gray-200 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Content -->
      <div class="p-6 max-h-96 overflow-y-auto">
        <div class="grid gap-4">
          ${sortedModels.map(([model, count], index) => {
            const percentage = ((count / data.total) * 100).toFixed(1);
            const color = rainbowColors[index % rainbowColors.length];
            
            return `
              <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition cursor-pointer"
                   onclick="showUnitsForModel('${location}', '${model}')">
                <div class="flex items-center justify-between mb-2">
                  <div class="font-semibold text-gray-900 dark:text-gray-100 flex-1 min-w-0 pr-4">
                    <div class="truncate" title="${model}">${model}</div>
                  </div>
                  <div class="text-right flex-shrink-0">
                    <div class="text-xl font-bold" style="color: ${color}">${count}</div>
                    <div class="text-sm text-gray-500">${percentage}%</div>
                  </div>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="h-2 rounded-full transition-all duration-500" 
                       style="width: ${percentage}%; background: ${color}"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
      
      <!-- Footer -->
      <div class="bg-gray-50 dark:bg-gray-700 p-4 flex justify-between items-center">
        <button onclick="showAllUnitsForLocation('${location}')"
                class="text-purple-600 hover:text-purple-700 underline text-sm">
          View All Individual Units
        </button>
        <button onclick="this.closest('dialog').close()" 
                class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
          Close
        </button>
      </div>
    </div>
  `;
  
  dialog.showModal();
}

async function showChargerListForStatus(status) {
  const dialog = document.getElementById('chargerListDialog') || document.createElement('dialog');
  dialog.id = 'chargerListDialog';
  dialog.className = 'rounded-xl p-5';
  if (!dialog.parentElement) document.body.appendChild(dialog);

  const inventory = await loadInventory();
  const chargers = inventory.filter(i => i.status === status);
  dialog.innerHTML = `
    <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">${chargers.length} Chargers with "${status}"</div>
    <div class="overflow-auto" style="max-height:350px">
      ${chargers.map(i =>
        `<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${i.chargerId}</div>
          <div><b>Model:</b> ${i.model}</div>
        </div>`
      ).join("")}
    </div>
    <div class="flex justify-end mt-4">
      <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
    </div>
  `;
  dialog.showModal();
}

  function waitForMainContent(cb) {
    const el = document.getElementById('main-content');
    if (el) cb();
    else setTimeout(() => waitForMainContent(cb), 30);
  }
  
// Update the main loader
document.addEventListener('DOMContentLoaded', async () => {
  if (document.body.dataset.page === "dashboard") {
    showLoadingScreen();
    updateLoadingProgress('Checking permissions...');
    
    // Check if user has access to dashboard
    const hasAccess = await checkPageAccess('viewDashboard');
    if (!hasAccess) {
      hideLoadingScreen();
      renderAccessDenied('#main-content');
      return;
    }
    
    updateLoadingProgress('Loading dashboard data...');
    
    waitForMainContent(async () => {
      try {
        injectDashboardPage();
        
        updateLoadingProgress('Loading inventory...');
        const inventory = await loadInventory();
        console.log('Dashboard: Loaded inventory items:', inventory.length);
        
        updateLoadingProgress('Loading shipments...');
        const shipments = await loadShipments();
        console.log('Dashboard: Loaded shipments:', shipments.length);
        
        updateLoadingProgress('Calculating statistics...');
        const stats = await getDashboardStats(inventory, shipments);
        console.log('Dashboard: Calculated stats:', stats);
        
        updateLoadingProgress('Rendering components...');
        await renderStatCards(stats, inventory);
        console.log('Dashboard: Rendered stat cards');
        
        renderStatusDonut(stats.byStatus, stats.byStatus);
        console.log('Dashboard: Rendered status donut');
        
        renderLostMeter(stats, inventory);
        console.log('Dashboard: Rendered lost meter');
        renderShipmentCountdown(stats.nextShipment);
        await renderAgingAlerts(stats, inventory);
        await renderLocationStackedBar({}, inventory);
        await initializeShipmentsSection();
        
        // Set up refresh button
        document.getElementById('refreshDashboard')?.addEventListener('click', refreshDashboard);
        
        updateLoadingProgress('Dashboard ready!');
        // Reveal the body and fade out loader only after everything is ready
        document.body.style.visibility = 'visible';
        setTimeout(() => hideLoadingScreen(), 500);
        
      } catch (error) {
        console.error("Dashboard loading error:", error);
        hideLoadingScreen();
        showToast("Failed to load dashboard", "red");
      }
    });
  }
});

      async function refreshDashboard() {
        showLoadingScreen();
        updateLoadingProgress('Refreshing data...');
        
        const refreshBtn = document.getElementById('refreshDashboard');
        refreshBtn.disabled = true;
        refreshBtn.innerHTML = `
          <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Refreshing...
        `;
        
        try {
          updateLoadingProgress('Loading inventory...');
          const inventory = await loadInventory();
          
          updateLoadingProgress('Loading shipments...');
          const shipments = await loadShipments(); // ADD THIS LINE
          
          updateLoadingProgress('Refreshing shipments...');
          const activeTab = document.querySelector('.shipment-tab.active');
          const tabType = activeTab?.id.replace('ShipmentsTab', '').toLowerCase() || 'pending';
          await populateShipmentsList(tabType);
          
          updateLoadingProgress('Calculating stats...');
          const stats = await getDashboardStats(inventory, shipments); // NOW shipments is defined
          
          updateLoadingProgress('Updating dashboard...');
          await renderStatCards(stats, inventory);
          renderShipmentCountdown(stats.nextShipment);
          await renderAgingAlerts(stats, inventory);
          renderStatusDonut(stats.byStatus, stats.byStatus);
          renderLostMeter(stats, inventory);
          await renderLocationStackedBar(null, inventory);
          
          document.getElementById('lastUpdated').textContent = new Date().toLocaleTimeString();
          
          updateLoadingProgress('Refresh complete!');
          showToast('Dashboard refreshed successfully', 'green');
          
          setTimeout(() => {
            hideLoadingScreen();
          }, 500);
        } catch (error) {
          console.error('Error refreshing dashboard:', error);
          hideLoadingScreen();
          showToast('Failed to refresh dashboard', 'red');
        } finally {
          refreshBtn.disabled = false;
          refreshBtn.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            Refresh
          `;
        }
      }

async function initializeShipmentsSection() {
  try {
    await populateShipmentsList('pending');
    setupShipmentsEventListeners();
  } catch (error) {
    console.error('Error initializing shipments section:', error);
  }
}

// Setup event listeners for shipments section
function setupShipmentsEventListeners() {
  // Tab switching
  document.querySelectorAll('.shipment-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Remove active class from all tabs
      document.querySelectorAll('.shipment-tab').forEach(t => {
        t.classList.remove('active', 'border-purple-500', 'text-purple-600');
        t.classList.add('border-transparent', 'text-gray-500');
      });
      
      // Add active class to clicked tab
      e.target.classList.add('active', 'border-purple-500', 'text-purple-600');
      e.target.classList.remove('border-transparent', 'text-gray-500');
      
      // Load appropriate data
      const tabType = e.target.id.replace('ShipmentsTab', '').toLowerCase();
      populateShipmentsList(tabType);
    });
  });

  // Refresh button
  document.getElementById('refreshShipments')?.addEventListener('click', () => {
    const activeTab = document.querySelector('.shipment-tab.active');
    const tabType = activeTab?.id.replace('ShipmentsTab', '').toLowerCase() || 'pending';
    populateShipmentsList(tabType);
  });
}

// Function to populate the shipments list
async function populateShipmentsList(filterType = 'pending') {
  const container = document.getElementById('shipmentsList');
  if (!container) return;

  // Show loading state
  container.innerHTML = `
    <div class="flex items-center justify-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      <span class="ml-2 text-gray-600">Loading shipments...</span>
    </div>
  `;

  try {
    const shipments = await loadShipments();
    
    let filteredShipments = shipments;
    if (filterType === 'pending') {
      filteredShipments = shipments.filter(s => !s.arrived);
    } else if (filterType === 'arrived') {
      filteredShipments = shipments.filter(s => s.arrived);
    }

    if (filteredShipments.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8 text-gray-500">
          <svg class="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7"/>
          </svg>
          <p>No ${filterType} shipments found</p>
          ${filterType === 'pending' ? '<p class="text-sm text-gray-400 mt-2">Shipments are created in the Inventory page</p>' : ''}
        </div>
      `;
      return;
    }

    // Sort by ETA (most recent first)
    filteredShipments.sort((a, b) => new Date(b.eta) - new Date(a.eta));

    container.innerHTML = filteredShipments.map(shipment => {
      const isOverdue = !shipment.arrived && new Date(shipment.eta) < new Date();
      const daysUntilETA = Math.ceil((new Date(shipment.eta) - new Date()) / (1000 * 60 * 60 * 24));
      
      return `
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
          <div class="flex justify-between items-start mb-3">
            <div class="flex-1">
              <h4 class="font-semibold text-gray-900 dark:text-gray-100">${shipment.shipmentId || 'No ID'}</h4>
              <p class="text-sm text-gray-600 dark:text-gray-400">${shipment.vendor} • ${shipment.shipType} • ${shipment.port}</p>
            </div>
            <div class="flex items-center gap-2">
              ${shipment.arrived ? `
                <span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Arrived
                </span>
              ` : isOverdue ? `
                <span class="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                  Overdue
                </span>
              ` : `
                <span class="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  In Transit
                </span>
              `}
            </div>
          </div>
          
          <div class="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
            <span>ETA: ${new Date(shipment.eta).toLocaleDateString()}</span>
            ${!shipment.arrived ? `
              <span class="${isOverdue ? 'text-red-600' : 'text-blue-600'}">
                ${isOverdue ? `${Math.abs(daysUntilETA)} days overdue` : `${daysUntilETA} days to go`}
              </span>
            ` : `
              <span class="text-green-600">
                Arrived ${shipment.actualArrivalDate ? new Date(shipment.actualArrivalDate).toLocaleDateString() : 'Recently'}
              </span>
            `}
          </div>
          
          <!-- Products -->
          <div class="flex flex-wrap gap-2 mb-3">
            ${(shipment.products || []).map(p => `
              <span class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded">
                ${p.model} (${p.qty})
              </span>
            `).join('')}
          </div>
          
          <!-- Milestones -->
          <div class="flex items-center gap-2">
            ${(shipment.milestones || []).map((milestone, index) => `
              <div class="flex items-center">
                <div class="w-3 h-3 rounded-full ${milestone.complete ? 'bg-green-500' : 'bg-gray-300'}" 
                     title="${milestone.name}"></div>
                ${index < shipment.milestones.length - 1 ? `
                  <div class="w-4 h-px ${milestone.complete ? 'bg-green-500' : 'bg-gray-300'} mx-1"></div>
                ` : ''}
              </div>
            `).join('')}
          </div>
          
          <!-- REMOVED: Action buttons since dialog functions don't exist in dashboard -->
          <div class="mt-3 pt-2 border-t border-gray-100 dark:border-gray-700">
            <p class="text-xs text-gray-500">
              Manage shipments in the Inventory page
            </p>
          </div>
        </div>
      `;
    }).join('');
    
  } catch (error) {
    console.error('Error loading shipments:', error);
    container.innerHTML = `
      <div class="text-center py-8 text-red-500">
        <p>Error loading shipments: ${error.message}</p>
        <button onclick="populateShipmentsList('${filterType}')" class="mt-2 text-sm underline">
          Try Again
        </button>
      </div>
    `;
  }
}
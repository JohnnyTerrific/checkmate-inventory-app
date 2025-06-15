import { loadInventory, loadShipments } from "../js/inventory.js";
import { getCurrentUserRole } from './utils/users.js';
import { can } from './utils/permissions.js';
import { showToast } from './core.js'; // ADD THIS LINE
import { 
  getDashboardStats, 
  loadSettings,
  getLocationsByParent,
  getParentContainerById 
} from "../js/settings.js";

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
        </div>
      </div>

            <!-- FULL WIDTH Location Distribution Chart - Gets ALL the space it wants! -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Top Locations & Model Distribution</h3>
          <button id="locationChartExport" class="text-sm text-purple-600 hover:text-purple-700">
            Export
          </button>
        </div>
        <div class="w-full" style="height: 700px;"> <!-- Increased from 600px to 700px -->
          <canvas id="locationBar"></canvas>
        </div>
      </div>
    </section>
  `;
}
  
function renderStatusDonut(byStatus, originalByStatus) {
  const ctx = document.getElementById('statusChart').getContext('2d');
  if (window.statusChart && typeof window.statusChart.destroy === 'function') {
    window.statusChart.destroy();
  }

  if (!originalByStatus) originalByStatus = byStatus;

  // Rainbow color palette - SAME as pills
  const rainbowColors = [
    '#ff0000', // Red
    '#ff7f00', // Orange
    '#ffff00', // Yellow
    '#00ff00', // Green
    '#0000ff', // Blue
    '#4b0082', // Indigo
    '#8f00ff'  // Violet
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

  // Create color array that matches the order of labels
  const chartLabels = Object.keys(processedData);
  const chartColors = chartLabels.map((label, index) => rainbowColors[index % rainbowColors.length]);

  window.statusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: chartLabels,
      datasets: [{
        data: Object.values(processedData),
        backgroundColor: chartColors, // Use rainbow colors
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
                  .filter(([status, count]) => count < threshold)
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
            if (Object.keys(byStatus).length > 1) {
              const originalValue = byStatus[status];
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

  // FIXED: Pass the same rainbow colors to pills
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
    // FIXED: Use same color mapping as chart
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
  resetBtn.textContent = 'Reset View';
  resetBtn.onclick = () => {
    // Get the original data from the chart instance
    if (window.statusChart && window.statusChart.originalByStatus) {
      renderStatusDonut(window.statusChart.originalByStatus, window.statusChart.originalByStatus);
    }
  };
  container.appendChild(resetBtn);
}
  
  function renderPublicMeter(stats) {
    const ctx = document.getElementById('publicMeter').getContext('2d');
    const percent = stats.total > 0 ? Math.round((stats.publicCount / stats.total) * 100) : 0;
  
    if (window.publicMeterChart && typeof window.publicMeterChart.destroy === 'function') {
      window.publicMeterChart.destroy();
    }
  
    // Create a gradient for the public portion
    const rainbowColors = [
      'rgba(255,0,0,0.7)',    // Red
      'rgba(255,127,0,0.7)',  // Orange
      'rgba(255,255,0,0.7)',  // Yellow
      'rgba(0,255,0,0.7)',    // Green
      'rgba(0,0,255,0.7)',    // Blue
      'rgba(75,0,130,0.7)',   // Indigo
      'rgba(143,0,255,0.7)'   // Violet
    ];
    const colorIdx = stats.publicCount % rainbowColors.length;
    window.publicMeterChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Public', 'Other'],
        datasets: [{
          data: [stats.publicCount, stats.total - stats.publicCount],
          backgroundColor: [rainbowColors[colorIdx], 'rgba(209,213,219,0.4)'],
          borderWidth: 2,
          borderColor: '#fff',
          hoverOffset: 8
        }]
      },
      options: {
        cutout: '80%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
          datalabels: {
            color: ['#b45309', '#6b7280'],
            font: { weight: 'bold', size: 16 },
            formatter: (value, context) => {
              if (context.dataIndex === 0) {
                return `${percent}%`;
              }
              return '';
            }
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  
    // Animate the label (count up)
    const label = document.getElementById('publicMeterLabel');
    let current = 0;
    const target = percent;
    const step = Math.ceil(target / 24) || 1;
    function animate() {
      if (current < target) {
        current += step;
        if (current > target) current = target;
        label.textContent = `Public Chargers: ${current}% (${stats.publicCount} of ${stats.total})`;
        requestAnimationFrame(animate);
      } else {
        label.textContent = `Public Chargers: ${target}% (${stats.publicCount} of ${stats.total})`;
      }
    }
    animate();
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
    // Count lost
    const lostCount = inventory.filter(i => 
      (i.location && typeof i.location === "string" && i.location.toLowerCase().includes('lost')) ||
      (typeof i.status === "string" && i.status.toLowerCase() === "unknown")
    ).length;
    const percent = stats.total > 0 ? Math.round((lostCount / stats.total) * 100) : 0;
  
    const ctx = document.getElementById('lostMeter').getContext('2d');
    if (window.lostMeterChart && typeof window.lostMeterChart.destroy === 'function') {
      window.lostMeterChart.destroy();
    }
  
    // FIXED: Use rainbow colors for lost meter
    const colorIndex = Math.min(Math.floor(percent / 15), rainbowColors.length - 1);
    
    window.lostMeterChart = new Chart(ctx, {
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
          },
          datalabels: {
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
          }
        },
        animation: {
          animateRotate: true,
          duration: 1000
        }
      },
      plugins: [ChartDataLabels] // FIXED: Only include if available
    });
  
    // Animate the label (count up)
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
  
    // Render a legend below the pie
    const legend = document.getElementById('lostMeterLegend');
    if (legend) {
      // Group by model for lost
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
  if (stats.overdueCount === 0) {
    return list.innerHTML = '<li>No overdue items</li>';
  }
  const now = Date.now();
  const threshold = 14 * 24 * 60 * 60 * 1000;

  // Get contractor names from settings
  const settings = await loadSettings();
  const contractorNames = (settings.contractors || []).map(c => c.name);

  // Only show overdue items assigned to a contractor
  const overdueItems = inventory.filter(i =>
    i.assignedDate &&
    (now - new Date(i.assignedDate).getTime()) > threshold &&
    contractorNames.includes(i.location)
  );

  list.innerHTML = overdueItems.length
    ? overdueItems
        .map(i => `<li>Charger ${i.chargerId} assigned on ${new Date(i.assignedDate).toLocaleDateString()}</li>`)
        .join('')
    : '<li>No overdue items</li>';
}

function getChartPlugins() {
  const plugins = [];
  if (typeof ChartDataLabels !== 'undefined') {
    plugins.push(ChartDataLabels);
  }
  return plugins;
}

async function renderLocationStackedBar(locStats, inventory) {
  const ctx = document.getElementById('locationBar').getContext('2d');
  if (window.locationBarChart && typeof window.locationBarChart.destroy === 'function') {
    window.locationBarChart.destroy();
  }

  const settings = await loadSettings();
  const sortedLocations = Object.entries(locStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15);

  // Get all unique models and shorten their names for the legend
  const allModels = [...new Set(inventory.map(i => i.model || 'Unknown'))];
  const modelShortNames = {};
  
  allModels.forEach(model => {
    if (model.includes('SMART HOME MINI WALLBOX')) {
      modelShortNames[model] = model.replace('SMART HOME MINI WALLBOX', 'SHMW');
    } else if (model.includes('DC Fast EV Charger')) {
      modelShortNames[model] = model.replace('DC Fast EV Charger', 'DC Fast');
    } else if (model.includes('EV WALLBOX Pro-Smart OCPP')) {
      modelShortNames[model] = 'EV WALLBOX Pro';
    } else if (model.length > 25) {
      modelShortNames[model] = model.substring(0, 22) + '...';
    } else {
      modelShortNames[model] = model;
    }
  });
  
  // Create datasets for each model
  const datasets = allModels.map((model, index) => {
    const data = sortedLocations.map(([loc]) => {
      return inventory.filter(i => i.location === loc && (i.model || 'Unknown') === model).length;
    });

    return {
      label: modelShortNames[model],
      data: data,
      backgroundColor: rainbowColors[index % rainbowColors.length] + 'DD',
      borderColor: rainbowColors[index % rainbowColors.length],
      borderWidth: 1,
      borderRadius: 2,
      originalModel: model
    };
  }).filter(dataset => dataset.data.some(val => val > 0));

  window.locationBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedLocations.map(([loc]) => loc),
      datasets: datasets
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index', // FIXED: Better interaction mode
        intersect: false
      },
      plugins: {
        legend: { 
          display: true,
          position: 'right',
          labels: { 
            boxWidth: 12, 
            font: { size: 10 },
            padding: 15,
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // FIXED: More opaque
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: '#374151',
          borderWidth: 1,
          cornerRadius: 8,
          padding: 12, // FIXED: Better padding
          displayColors: true,
          callbacks: {
            title: function(context) {
              const loc = context[0].label;
              const locationConfig = settings.locations?.find(l => l.name === loc);
              let parentInfo = "";
              if (locationConfig?.parent) {
                const parent = settings.parentContainers?.find(p => p.id === locationConfig.parent);
                if (parent) parentInfo = ` (${parent.name})`;
              }
              return loc + parentInfo;
            },
            label: function(context) {
              const dataset = context.dataset;
              const originalModel = dataset.originalModel || dataset.label;
              const value = context.parsed.x;
              return `${originalModel}: ${value} units`;
            },
            footer: function(context) {
              const total = context.reduce((sum, item) => sum + item.parsed.x, 0);
              return `Total: ${total} units`;
            }
          }
        }
      },
      scales: {
        x: {
          type: 'linear',
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return Number.isInteger(value) ? value.toString() : '';
            },
            font: { size: 11 },
            stepSize: 1
          },
          stacked: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)',
            lineWidth: 1
          },
          title: {
            display: true,
            text: 'Number of Units',
            font: { size: 12, weight: 'bold' }
          }
        },
        y: {
          stacked: true,
          ticks: { 
            font: { size: 11 },
            maxRotation: 0,
            padding: 15,
            callback: function(value, index) {
              const label = this.getLabelForValue(value);
              return label.length > 20 ? label.substring(0, 17) + '...' : label;
            }
          },
          grid: {
            display: false
          },
          title: {
            display: true,
            text: 'Locations',
            font: { size: 12, weight: 'bold' }
          }
        }
      },
      onClick: function(evt, elements) {
        // FIXED: Better click detection for both bars and Y-axis area
        if (elements.length > 0) {
          const idx = elements[0].index;
          const loc = this.data.labels[idx];
          showLocationModelBreakdown(loc, inventory);
        } else {
          // FIXED: Handle clicks on Y-axis labels
          const rect = ctx.canvas.getBoundingClientRect();
          const x = evt.clientX - rect.left;
          const y = evt.clientY - rect.top;
          const chartArea = this.chartArea;
          
          // Check if click is on Y-axis label area
          if (x >= 0 && x <= chartArea.left && y >= chartArea.top && y <= chartArea.bottom) {
            const locationIndex = Math.floor((y - chartArea.top) / (chartArea.height / sortedLocations.length));
            
            if (locationIndex >= 0 && locationIndex < sortedLocations.length) {
              const [loc] = sortedLocations[locationIndex];
              showLocationModelBreakdown(loc, inventory);
            }
          }
        }
      }
    }
  });
}

async function showLocationModelBreakdown(loc, inventory) {
  let dialog = document.getElementById('chargerListDialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'chargerListDialog';
    dialog.className = 'rounded-xl p-6 max-w-2xl';
    document.body.appendChild(dialog);
  }
  
  // Load settings to get parent container information
  const settings = await loadSettings();
  const chargers = inventory.filter(i => i.location === loc);
  
  // Get model breakdown for this location
  const locationModels = {};
  chargers.forEach(i => {
    const model = i.model || 'Unknown';
    locationModels[model] = (locationModels[model] || 0) + 1;
  });
  
  // Get parent container info
  const locationConfig = settings.locations?.find(l => l.name === loc);
  let parentInfo = "";
  if (locationConfig?.parent) {
    const parent = settings.parentContainers?.find(p => p.id === locationConfig.parent);
    if (parent) {
      parentInfo = `<div class="text-sm text-gray-500 mb-3">Parent Container: <span class="font-medium">${parent.name}</span></div>`;
    }
  }
  
  // Sort models by quantity (descending)
  const sortedModels = Object.entries(locationModels).sort((a, b) => b[1] - a[1]);
  
  dialog.innerHTML = `
    <div class="mb-4">
      <div class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">
        ${loc} - Model Distribution
      </div>
      ${parentInfo}
      <div class="text-sm text-gray-600 dark:text-gray-400">
        Total Units: <span class="font-bold">${chargers.length}</span>
      </div>
    </div>
    
    <div class="overflow-auto mb-6" style="max-height: 400px;">
      <div class="grid gap-3">
        ${sortedModels.map(([model, count]) => {
          const percentage = ((count / chargers.length) * 100).toFixed(1);
          const colorIndex = Object.keys(locationModels).indexOf(model);
          const color = rainbowColors[colorIndex % rainbowColors.length];
          
          return `
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div class="flex items-start justify-between mb-2 gap-4">
                <div class="font-semibold text-gray-900 dark:text-gray-100 flex-1 min-w-0">
                  <div class="break-words">${model}</div>
                </div>
                <div class="text-lg font-bold flex-shrink-0" style="color: ${color}">${count} units</div>
              </div>
              <div class="flex items-center gap-2">
                <div class="flex-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="h-2 rounded-full transition-all duration-500" 
                       style="width: ${percentage}%; background: ${color}"></div>
                </div>
                <span class="text-sm text-gray-600 dark:text-gray-400 font-medium flex-shrink-0">${percentage}%</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
    
    <div class="flex justify-between items-center">
      <button class="text-sm text-purple-600 hover:text-purple-700 underline" 
              id="viewIndividualUnitsBtn">
        View Individual Units
      </button>
      <button class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition" 
              id="closeDialogBtn">
        Close
      </button>
    </div>
  `;
  
  // FIXED: Add event listeners after DOM creation
  document.getElementById('viewIndividualUnitsBtn').addEventListener('click', () => {
    showChargerListForLocation(loc, inventory);
  });
  
  document.getElementById('closeDialogBtn').addEventListener('click', () => {
    dialog.close();
  });
  
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
  
async function showChargerListForLocation(loc, inventory) {
  let dialog = document.getElementById('chargerListDialog');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'chargerListDialog';
    dialog.className = 'rounded-xl p-5 max-w-2xl w-full mx-4';
    document.body.appendChild(dialog);
  }
  
  // Load settings to get parent container information
  const settings = await loadSettings();
  const chargers = inventory.filter(i => i.location === loc);
  
  // Get parent container info
  const locationConfig = settings.locations?.find(l => l.name === loc);
  let parentInfo = "";
  if (locationConfig?.parent) {
    const parent = settings.parentContainers?.find(p => p.id === locationConfig.parent);
    if (parent) {
      parentInfo = `<div class="text-sm text-gray-500">Parent: ${parent.name}</div>`;
    }
  }
  
  dialog.innerHTML = `
    <div class="mb-4">
      <div class="text-xl font-bold text-purple-700 dark:text-purple-300 mb-2">
        Individual Units at ${loc}
      </div>
      ${parentInfo}
      <button class="text-sm text-purple-600 hover:text-purple-700 underline" 
              id="backToModelBtn">
        ← Back to Model Breakdown
      </button>
    </div>
    
    <div class="overflow-auto mb-4" style="max-height:350px">
      ${chargers.map(i =>
        `<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${i.chargerId}</div>
          <div><b>Status:</b> ${i.status}</div>
          <div><b>Model:</b> <span class="break-words">${i.model}</span></div>
        </div>`
      ).join("")}
    </div>
    
    <div class="flex justify-end">
      <button class="bg-purple-600 text-white px-4 py-2 rounded" 
              id="closeDialogBtn2">
        Close
      </button>
    </div>
  `;
  
  // FIXED: Add event listeners after DOM creation
  document.getElementById('backToModelBtn').addEventListener('click', () => {
    showLocationModelBreakdown(loc, inventory);
  });
  
  document.getElementById('closeDialogBtn2').addEventListener('click', () => {
    dialog.close();
  });
  
  dialog.showModal();
}
  
  function getLocationCounts(inventory) {
    const locCounts = {};
    inventory.forEach(i => {
      const key = i.location || 'Unknown';
      locCounts[key] = (locCounts[key] || 0) + 1;
    });
    // Sort by value descending for nicer chart, limit to top 10
    return Object.fromEntries(
      Object.entries(locCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)  // Only top 10
    );
  }

  function waitForMainContent(cb) {
    const el = document.getElementById('main-content');
    if (el) cb();
    else setTimeout(() => waitForMainContent(cb), 30);
  }
  
// Update the main loader
document.addEventListener('DOMContentLoaded', () => {
  if (document.body.dataset.page === "dashboard") {
    waitForMainContent(async () => {
      showLoadingScreen();
      updateLoadingProgress('Checking permissions...');
      // Check permissions
      const canViewDashboard = await can('viewDashboard');
      if (!canViewDashboard) {
        document.getElementById('main-content').innerHTML = `
          <div class="flex items-center justify-center h-64">
            <div class="text-center">
              <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Access Denied</h2>
              <p class="text-gray-500 dark:text-gray-400">You don't have permission to view the dashboard.</p>
            </div>
          </div>
        `;
        return;
      }

      updateLoadingProgress('Injecting dashboard layout...');
      injectDashboardPage();
      
      updateLoadingProgress('Loading inventory data...');
      const inventory = await loadInventory();
      
      updateLoadingProgress('Loading shipments...');
      const shipments = await loadShipments();
      
      updateLoadingProgress('Calculating statistics...');
      const stats = await getDashboardStats(inventory, shipments);
      
      updateLoadingProgress('Rendering components...');
      await renderStatCards(stats, inventory);
      renderShipmentCountdown(stats.nextShipment);
      await renderAgingAlerts(stats, inventory);
      
            // FIXED: Store original data for reset functionality
            renderStatusDonut(stats.byStatus);
            if (window.statusChart) {
              window.statusChart.originalByStatus = stats.byStatus;
            }
            
            renderLostMeter(stats, inventory);
            await renderLocationStackedBar(getLocationCounts(inventory), inventory);
            
            updateLoadingProgress('Setting up event handlers...');
            // Add refresh functionality
            document.getElementById('refreshDashboard').addEventListener('click', async () => {
              await refreshDashboard();
            });
            
            // Update last updated time
            document.getElementById('lastUpdated').textContent = new Date().toLocaleTimeString();
            
            updateLoadingProgress('Dashboard ready!');
            
            // Hide loading screen after a brief delay
            setTimeout(() => {
              hideLoadingScreen();
            }, 500);
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
          const shipments = await loadShipments();
          
          updateLoadingProgress('Calculating stats...');
          const stats = await getDashboardStats(inventory, shipments);
          
          updateLoadingProgress('Updating dashboard...');
          await renderStatCards(stats, inventory);
          renderShipmentCountdown(stats.nextShipment);
          await renderAgingAlerts(stats, inventory);
          renderStatusDonut(stats.byStatus);
          renderLostMeter(stats, inventory);
          await renderLocationStackedBar(getLocationCounts(inventory), inventory);
          
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
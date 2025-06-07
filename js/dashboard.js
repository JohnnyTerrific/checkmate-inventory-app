import { loadInventory, loadShipments } from "../js/inventory.js";
import { 
  getDashboardStats, 
  loadSettings,
  getLocationsByParent,
  getParentContainerById 
} from "../js/settings.js";

// 1. Stat Cards Data Aggregation
function injectDashboardPage() {
  document.getElementById('main-content').innerHTML = `
    <section class="max-w-7xl mx-auto px-3 py-3 space-y-4">
      <header class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
       </header>

       <!-- 1️⃣ KPI CARDS -->
       <div id="stat-cards" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-3"></div>

       <!-- 2️⃣ FILTER BAR -->
       <div id="dashboardFilters" class="flex flex-wrap gap-3 items-center mb-3">
         <select id="filterStatus" class="p-2 border rounded text-sm">
           <option value="">All Statuses</option>
         </select>
       </div>

       <!-- 3️⃣ SHIPMENT COUNTDOWN -->
       <div id="shipmentCountdown" class="p-3 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center mb-3">
         <span class="font-medium text-gray-600 dark:text-gray-400 mr-2 text-sm">Next Shipment:</span>
         <span id="nextShipmentTimer" class="font-bold text-lg text-gray-800 dark:text-gray-100">—</span>
       </div>

       <!-- 4️⃣ AGING ALERTS -->
       <div id="agingAlerts" class="p-3 bg-red-50 dark:bg-red-900 rounded-xl shadow mb-4">
         <h2 class="font-semibold text-red-700 dark:text-red-300 mb-2 text-sm">Overdue Assignments</h2>
         <ul id="agingList" class="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm"></ul>
       </div>

       <!-- 5️⃣ CHARTS - FIXED HEIGHT CONTAINERS -->
       <div class="grid grid-cols-1 lg:grid-cols-3 gap-4" style="height: 340px;">
         <!-- Status Donut -->
         <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center h-full">
           <div class="w-64 h-64 flex items-center justify-center mb-3 flex-shrink-0">
             <canvas id="statusChart" width="240" height="240" class="!w-[240px] !h-[240px]"></canvas>
           </div>
           <div id="statusPills" class="w-full flex-1 min-h-0 flex gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-1 items-start content-start flex-wrap"></div>
         </div>

         <!-- Lost Meter -->
         <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center h-full">
           <div class="w-64 h-64 flex items-center justify-center mb-3 flex-shrink-0">
             <canvas id="lostMeter" width="240" height="240" class="!w-[240px] !h-[240px]"></canvas>
           </div>
           <div class="flex flex-col items-center flex-1">
             <div id="lostMeterLabel" class="text-xs text-center text-gray-700 dark:text-gray-300"></div>
             <div id="lostMeterLegend" class="text-xs text-gray-500 dark:text-gray-400 text-center mt-1"></div>
           </div>
         </div>

         <!-- Location Bar Chart -->
         <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col h-full">
           <div class="w-64 h-64 mx-auto flex-shrink-0">
             <canvas id="locationBar" width="240" height="240" class="!w-[240px] !h-[240px]"></canvas>
           </div>
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
  // Keep a reference to the original byStatus for reset
  if (!originalByStatus) originalByStatus = byStatus;

  // Group small values together for better readability
  const total = Object.values(byStatus).reduce((sum, val) => sum + val, 0);
  const threshold = Math.max(1, Math.floor(total * 0.02)); // 2% minimum or at least 1
  
  let processedData = {};
  let othersCount = 0;
  
  Object.entries(byStatus).forEach(([status, count]) => {
    if (count >= threshold) {
      processedData[status] = count;
    } else {
      othersCount += count;
    }
  });
  
  // Add "Others" category if there are grouped items
  if (othersCount > 0) {
    processedData['Others'] = othersCount;
  }

  window.statusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(processedData),
      datasets: [{
        data: Object.values(processedData),
        backgroundColor: [
          'rgba(255,0,0,0.7)', 'rgba(255,127,0,0.7)', 'rgba(255,255,0,0.7)',
          'rgba(0,255,0,0.7)', 'rgba(0,0,255,0.7)', 'rgba(75,0,130,0.7)', 'rgba(143,0,255,0.7)',
          'rgba(0,255,255,0.7)', 'rgba(255,105,180,0.7)', 'rgba(165,42,42,0.7)'
        ],
        borderWidth: 3,
        borderColor: '#fff',
        hoverOffset: 12
      }]
    },
    options: {
      cutout: '65%',
      responsive: false,
      maintainAspectRatio: true,
      aspectRatio: 1,
      plugins: {
        legend: { display: false },
        tooltip: { 
          enabled: true,
          callbacks: {
            label: function(context) {
              const label = context.label;
              const value = context.parsed;
              const percentage = ((value / total) * 100).toFixed(1);
              
              if (label === 'Others') {
                // Show breakdown of "Others" in tooltip
                const otherItems = Object.entries(byStatus)
                  .filter(([status, count]) => count < threshold)
                  .map(([status, count]) => `${status}: ${count}`)
                  .join(', ');
                return [`Others (${percentage}%): ${value}`, otherItems];
              }
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        },
        datalabels: {
          display: function(context) {
            // Only show labels for slices > 5% to avoid overcrowding
            const percentage = (context.parsed / total) * 100;
            return percentage > 5;
          },
          color: '#222',
          font: { weight: 'bold', size: 14 },
          formatter: (value, context) => {
            const percentage = ((value / total) * 100).toFixed(0);
            return percentage > 8 ? value : ''; // Only show number if > 8%
          }
        }
      },
      // Click handler for filtering
      onClick: function(evt, elements) {
        if (elements.length > 0) {
          const idx = elements[0].index;
          const status = this.data.labels[idx];
          
          // Don't allow filtering on "Others" category
          if (status === 'Others') return;
          
          // Only filter if not already filtered to one status
          if (Object.keys(byStatus).length > 1) {
            // Filter to just the clicked status
            const originalValue = byStatus[status];
            renderStatusDonut({ [status]: originalValue }, originalByStatus);
          }
        } else {
          // If user clicks outside, reset to all statuses
          renderStatusDonut(originalByStatus, originalByStatus);
        }
      }
    },
    plugins: [ChartDataLabels]
  });

  // Use original data for pills (not the grouped data)
  renderStatusPills(byStatus, (selectedStatus) => {
    showChargerListForStatus(selectedStatus);
  });
}
  
function renderStatusPills(statusMap, onClickStatus) {
  const container = document.getElementById('statusPills');
  const rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff'];

  const labels = Object.keys(statusMap);
  
  // Add scrollable container styling with smaller padding
  container.className = 'mt-2 flex gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-1 max-w-full';
  container.style.scrollbarWidth = 'thin';
  
  container.innerHTML = labels.map((label, i) => `
    <button 
      class="px-2 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform active:ring-2 active:ring-offset-1 flex-shrink-0"
      style="background:${rainbowColors[i % rainbowColors.length]}"
      data-status="${label}">
      ${label}
    </button>
  `).join('');

  // Add click handlers
  Array.from(container.children).forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.status;
      onClickStatus(selected);
    });
  });
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
    window.lostMeterChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Lost', 'Other'],
        datasets: [{
          data: [lostCount, stats.total - lostCount],
          backgroundColor: ['rgba(239, 68, 68, 0.8)', 'rgba(209,213,219,0.4)'],
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
            color: ['#b91c1c', '#6b7280'],
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
    const label = document.getElementById('lostMeterLabel');
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
  
    // Render a legend below the pie: Model: Qty for Lost chargers
    const legend = document.getElementById('lostMeterLegend');
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

  // ① Renders the KPI cards
  function renderStatCards(stats, inventory) {
    const cards = [
      { label: 'Total Units', value: stats.total, key: 'total' },
      { label: 'In Stock', value: stats.inStockCount || 0, key: 'In Stock' },
      { label: 'Installed', value: stats.installedCount || 0, key: 'Installed' },
      { label: 'With Contractors', value: stats.contractorCount, key: 'With Contractors' },
      { label: 'Overdue (>14d)', value: stats.overdueCount, key: 'Overdue' },
      { label: 'Public Assets', value: stats.publicCount, key: 'Public' }
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
  
    // Tooltip handling
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
          key === 'In Stock' ||
          key === 'Installed' || // <-- Added Installed here
          key === 'With Contractors' ||
          key === 'Public'
        ) {
          let filterFn;
          if (key === 'In Stock') filterFn = u => u.status === 'In Stock';
          else if (key === 'Installed') filterFn = u => u.status === 'Installed'; // <-- Added Installed filter
          else if (key === 'With Contractors') filterFn = u => !!u.contractor;
          else if (key === 'Public') filterFn = u => (u.location && u.location.toLowerCase().includes('public'));
          inventory.filter(filterFn).forEach(u => {
            const m = u.model || 'Unknown';
            modelCounts[m] = (modelCounts[m] || 0) + 1;
          });
        } else if (key === 'Overdue') {
          const now = Date.now();
          const threshold = 14 * 24 * 60 * 60 * 1000;
          inventory.filter(i => i.assignedDate && (now - new Date(i.assignedDate).getTime()) > threshold)
            .forEach(u => {
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


function renderAgingAlerts(stats, inventory) {
  const list = document.getElementById('agingList');
  if (stats.overdueCount === 0) {
    return list.innerHTML = '<li>No overdue items</li>';
  }
  const now = Date.now();
  const threshold = 14 * 24 * 60 * 60 * 1000;

  // Get contractor names from settings
  const settings = loadSettings();
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
  
async function renderLocationBar(locStats, inventory) {
  const ctx = document.getElementById('locationBar').getContext('2d');
  if (window.locationBarChart && typeof window.locationBarChart.destroy === 'function') {
    window.locationBarChart.destroy();
  }
  
  // Load settings to get parent container information
  const settings = await loadSettings();
  
  // Sort locations by count (descending) and get top 10
  const sortedLocations = Object.entries(locStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  
  const labels = sortedLocations.map(([loc]) => loc);
  const data = sortedLocations.map(([_, count]) => count);
  
  // Map each location to its parent's color
  const backgroundColors = labels.map(loc => {
    const locationConfig = settings.locations.find(l => l.name === loc);
    if (!locationConfig || !locationConfig.parent) return '#6b7280'; // Default gray
    
    const parentContainer = settings.parentContainers.find(p => p.id === locationConfig.parent);
    return parentContainer?.color || '#6b7280';
  });
  
  const options = {
    indexAxis: 'y',
    responsive: false,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            const loc = context.label;
            const inv = context.chart.options.inventory || [];
            
            // Add parent container info to tooltip
            const locationConfig = settings.locations.find(l => l.name === loc);
            let parentInfo = "";
            if (locationConfig && locationConfig.parent) {
              const parent = settings.parentContainers.find(p => p.id === locationConfig.parent);
              if (parent) {
                parentInfo = ` (${parent.name})`;
              }
            }
            
            // Group by model for this location
            const grouped = {};
            inv.filter(u => (u.location || 'Unknown') === loc).forEach(u => {
              const model = u.model || 'Unknown';
              grouped[model] = (grouped[model] || 0) + 1;
            });
            
            const modelInfo = Object.entries(grouped)
              .map(([model, qty]) => `${model}: ${qty}`)
              .join(', ');
              
            return [`${loc}${parentInfo}`, modelInfo || 'No data'];
          }
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'right',
        color: '#6366f1',
        font: { weight: 'bold', size: 12 }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
        ticks: { font: { size: 11 } }
      },
      y: {
        grid: { display: false },
        ticks: { font: { size: 11 } }
      }
    },
    onClick: function(evt, elements) {
      if (elements.length > 0) {
        const idx = elements[0].index;
        const loc = this.data.labels[idx];
        showChargerListForLocation(loc, inventory);
      }
    }
  };
  
  // Inject inventory for tooltip callbacks
  options.inventory = inventory;

  window.locationBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Chargers by Location',
        data: data,
        backgroundColor: backgroundColors, // Use parent container colors
        borderRadius: 8,
        borderSkipped: false,
        barPercentage: 0.8,
        categoryPercentage: 0.9
      }]
    },
    options: options,
    plugins: [ChartDataLabels]
  });
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
    dialog.className = 'rounded-xl p-5';
    document.body.appendChild(dialog);
  }
  
  // Load settings to get parent container information
  const settings = await loadSettings();
  const chargers = inventory.filter(i => i.location === loc);
  
  // Get parent container info
  const locationConfig = settings.locations.find(l => l.name === loc);
  let parentInfo = "";
  if (locationConfig && locationConfig.parent) {
    const parent = settings.parentContainers.find(p => p.id === locationConfig.parent);
    if (parent) {
      parentInfo = `<div class="text-sm text-gray-500">Parent: ${parent.name}</div>`;
    }
  }
  
  dialog.innerHTML = `
    <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Chargers at ${loc}</div>
    ${parentInfo}
    <div class="overflow-auto" style="max-height:350px">
      ${chargers.map(i =>
        `<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${i.chargerId}</div>
          <div><b>Status:</b> ${i.status}</div>
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
  
  // Main Dashboard Loader
  document.addEventListener('DOMContentLoaded', () => {
    if (document.body.dataset.page === "dashboard") {
      waitForMainContent(async () => {
        injectDashboardPage();
        const inventory = await loadInventory();
        const shipments = await loadShipments();
        const stats = getDashboardStats(inventory, shipments);
        renderStatCards(stats, inventory);
        // ...other render calls...
        renderShipmentCountdown(stats.nextShipment);
        renderAgingAlerts(stats, inventory);
        renderStatusDonut(stats.byStatus);
        renderLostMeter(stats, inventory);
        renderLocationBar(getLocationCounts(inventory), inventory);
      });
    }
  });
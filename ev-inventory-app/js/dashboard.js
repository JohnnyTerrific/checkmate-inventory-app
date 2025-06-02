import { loadInventory } from "../js/inventory.js";
import { getDashboardStats } from "../js/settings.js";
import { updateUnitsLocation } from './inventory.js';

// 1. Stat Cards Data Aggregation
 function injectDashboardPage() {
   document.getElementById('main-content').innerHTML = `
     <section class="max-w-7xl mx-auto px-4 py-6 space-y-8">
       <header class="flex items-center justify-between">
         <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
        </header>
 
        <!-- 1️⃣ KPI CARDS -->
  <div id="stat-cards" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-2"></div>
 
        <!-- 2️⃣ FILTER BAR -->
        <div id="dashboardFilters" class="flex flex-wrap gap-4 items-center">
          <select id="filterStatus" class="p-2 border rounded">
            <option value="">All Statuses</option>
          </select>
        </div>
 
        <!-- 3️⃣ SHIPMENT COUNTDOWN -->
        <div id="shipmentCountdown" class="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow flex items-center">
          <span class="font-medium text-gray-600 dark:text-gray-400 mr-2">Next Shipment:</span>
          <span id="nextShipmentTimer" class="font-bold text-xl text-gray-800 dark:text-gray-100">—</span>
        </div>
 
        <!-- 4️⃣ AGING ALERTS -->
        <div id="agingAlerts" class="p-4 bg-red-50 dark:bg-red-900 rounded-2xl shadow">
          <h2 class="font-semibold text-red-700 dark:text-red-300 mb-2">Overdue Assignments</h2>
          <ul id="agingList" class="list-disc list-inside text-gray-700 dark:text-gray-200"></ul>
        </div>
 
        <!-- 5️⃣ EXISTING CHARTS -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
  <!-- Status Donut -->
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-col items-center justify-center h-[260px] relative overflow-hidden">
    <canvas id="statusChart" width="220" height="220" class="!w-[220px] !h-[220px]"></canvas>
    <!-- Pills Here -->
<div id="statusPills" class="mt-3 flex gap-2 flex-wrap justify-center max-w-full"></div>  </div>

    <!-- Lost Meter -->
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-col items-center justify-center h-[260px] relative overflow-hidden">
    <canvas id="lostMeter" width="220" height="220" class="!w-[220px] !h-[220px]"></canvas>
    <div id="lostMeterLabel" class="mt-2 text-sm text-center text-gray-700 dark:text-gray-300"></div>
    <div id="lostMeterLegend" class="mt-2 text-xs text-gray-500 dark:text-gray-400"></div>
  </div>

    <!-- Location Bar Chart -->
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 h-[260px]">
    <canvas id="locationBar"></canvas>
  </div>

  </div> <!-- 🔹 Closes the grid for charts -->
</section> <!-- 🔹 Closes the section -->
    `;
  }
  
  function renderStatusDonut(byStatus, originalByStatus) {
    const ctx = document.getElementById('statusChart').getContext('2d');
    if (window.statusChart && typeof window.statusChart.destroy === 'function') {
      window.statusChart.destroy();
    }
    // Keep a reference to the original byStatus for reset
    if (!originalByStatus) originalByStatus = byStatus;
  
    window.statusChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(byStatus),
        datasets: [{
          data: Object.values(byStatus),
          backgroundColor: [
            'rgba(255,0,0,0.7)', 'rgba(255,127,0,0.7)', 'rgba(255,255,0,0.7)',
            'rgba(0,255,0,0.7)', 'rgba(0,0,255,0.7)', 'rgba(75,0,130,0.7)', 'rgba(143,0,255,0.7)',
            'rgba(0,255,255,0.7)', 'rgba(255,105,180,0.7)', 'rgba(165,42,42,0.7)'
          ],
          borderWidth: 2,
          borderColor: '#fff',
          hoverOffset: 8
        }]
      },
      options: {
        cutout: '70%',
        responsive: false,
        maintainAspectRatio: true,
        aspectRatio: 1,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
          datalabels: {
            color: '#222',
            font: { weight: 'bold', size: 14 },
            formatter: (value) => value
          }
        },
        // 👇 Add click handler for filtering
        onClick: function(evt, elements) {
          if (elements.length > 0) {
            const idx = elements[0].index;
            const status = this.data.labels[idx];
            // Only filter if not already filtered to one status
            if (Object.keys(byStatus).length > 1) {
              // Filter to just the clicked status
              renderStatusDonut({ [status]: this.data.datasets[0].data[idx] }, originalByStatus);
            }
          } else {
            // If user clicks outside, reset to all statuses
            renderStatusDonut(originalByStatus, originalByStatus);
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  
    renderStatusPills(byStatus, (selectedStatus) => {
      showChargerListForStatus(selectedStatus);
    });
  }
  
  function renderStatusPills(statusMap, onClickStatus) {
    const container = document.getElementById('statusPills');
    const rainbowColors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#8f00ff'];
  
    const labels = Object.keys(statusMap);
    container.innerHTML = labels.map((label, i) => `
      <button 
        class="px-3 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform active:ring-2 active:ring-offset-1"
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
      { label: 'In Stock', value: stats.byStatus['In Stock'] || 0, key: 'In Stock' },
      { label: 'Installed', value: stats.byStatus['Installed'] || 0, key: 'Installed' },
      { label: 'With Contractors', value: stats.contractorCount, key: 'With Contractors' },
      { label: 'Overdue (>14d)', value: stats.overdueCount, key: 'Overdue' },
      { label: 'Public Assets', value: stats.publicCount, key: 'Public' }
    ];
    const container = document.getElementById('stat-cards');
    container.innerHTML = cards.map((c, i) => `
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col animate-countup relative stat-card"
           style="border-left: 8px solid ${rainbowColors[i % rainbowColors.length]};"
           data-key="${c.key}">
        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">${c.label}</span>
        <span class="text-2xl font-bold text-gray-900 dark:text-gray-100">${c.value}</span>
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

// ③ Lists overdue assignments
function renderAgingAlerts(stats, inventory) {
  const list = document.getElementById('agingList');
  if (stats.overdueCount === 0) {
    return list.innerHTML = '<li>No overdue items</li>';
  }
  const now = Date.now();
  const threshold = 14 * 24 * 60 * 60 * 1000;
  const overdueItems = inventory
    .filter(i => i.assignedDate && (now - new Date(i.assignedDate).getTime()) > threshold);
  list.innerHTML = overdueItems
    .map(i => `<li>Charger ${i.chargerId} assigned on ${new Date(i.assignedDate).toLocaleDateString()}</li>`)
    .join('');
}
  
function renderLocationBar(locStats, inventory) {
  const ctx = document.getElementById('locationBar').getContext('2d');
  if (window.locationBarChart && typeof window.locationBarChart.destroy === 'function') {
    window.locationBarChart.destroy();
  }
  const rainbowColors = [
    'rgba(255,0,0,0.7)', 'rgba(255,127,0,0.7)', 'rgba(255,255,0,0.7)',
    'rgba(0,255,0,0.7)', 'rgba(0,0,255,0.7)', 'rgba(75,0,130,0.7)', 'rgba(143,0,255,0.7)'
  ];
  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            const loc = context.label;
            const inv = context.chart.options.inventory || [];
            // Group by model for this location
            const grouped = {};
            inv.filter(u => (u.location || 'Unknown') === loc).forEach(u => {
              const model = u.model || 'Unknown';
              grouped[model] = (grouped[model] || 0) + 1;
            });
            return Object.entries(grouped).map(([model, qty]) => `${model}: ${qty}`).join(', ') || 'No data';
          }
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'right',
        color: '#6366f1',
        font: { weight: 'bold', size: 14 }
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
      labels: Object.keys(locStats),
      datasets: [{
        label: 'Chargers by Location',
        data: Object.values(locStats),
        backgroundColor: Object.keys(locStats).map((_, i) => rainbowColors[i % rainbowColors.length]),
        borderRadius: 12,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.7
      }]
    },
    options: options,
    plugins: [ChartDataLabels]
  });
}

function showChargerListForStatus(status) {
  const dialog = document.getElementById('chargerListDialog') || document.createElement('dialog');
  dialog.id = 'chargerListDialog';
  dialog.className = 'rounded-xl p-5';
  if (!dialog.parentElement) document.body.appendChild(dialog);

  const chargers = loadInventory().filter(i => i.status === status);
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
  
  function showChargerListForLocation(loc, inventory) {
    let dialog = document.getElementById('chargerListDialog');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.id = 'chargerListDialog';
      dialog.className = 'rounded-xl p-5';
      document.body.appendChild(dialog);
    }
    const chargers = inventory.filter(i => i.location === loc);
    dialog.innerHTML = `
      <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Chargers at ${loc}</div>
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
      waitForMainContent(() => {
        injectDashboardPage();
        const inventory = loadInventory();
        const stats = getDashboardStats(inventory, window.shipments || []);
        renderStatCards(stats, inventory);
        // populate filters…
        renderShipmentCountdown(stats.nextShipment);
        renderAgingAlerts(stats, inventory);
        renderStatusDonut(stats.byStatus);
        renderLostMeter(stats, inventory);
        renderLocationBar(getLocationCounts(inventory), inventory);
      });
    }
  });
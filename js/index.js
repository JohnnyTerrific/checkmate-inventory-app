import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase.js';
import { loadProducts } from './products.js';
import { loadInventory } from './inventory.js';
import { loadSettings, getParentContainerById } from './settings.js';

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "/login.html";
  } else {
    document.body.style.visibility = "visible";
    initializeIndexPageContent();
  }
});

async function initializeIndexPageContent() {
  // Load necessary data
  const products = await loadProducts();
  const inventory = await loadInventory();
  const settings = await loadSettings();
  window.inventory = inventory;

  // Create product lookup map
  const productMap = {};
  products.forEach(p => productMap[p.name] = p);

  // Initialize counters and data structures
  let publicCount = 0, inventoryCount = 0, unknownCount = 0;
  let publicValue = 0, inventoryValue = 0;
  const now = new Date();
  const assetStages = { factory: [], shipping: [], port: [], warehouse: [], installed: [], unknown: [] };
  const publicDepreciationRows = [];

  // Process each inventory item
  inventory.forEach(unit => {
    // Get unit product and value
    const product = productMap[unit.model] || productMap[unit.product];
    const value = parseFloat(product?.price) || 0;
    
    // Determine stage based on parent container rather than text matching
    // Find the location configuration
    const locationConfig = settings.locations.find(loc => loc.name === unit.location);
    const parentId = locationConfig?.parent || "other";
    
    // Determine stage based on parent container
    let stage = "unknown";
    if (parentId === "public" || unit.status?.includes("Installed")) {
      stage = "installed";
    } else if (parentId === "warehouse") {
      stage = "warehouse";
    } else if (unit.location?.toLowerCase().includes("port")) {
      stage = "port";
    } else if (unit.location?.toLowerCase().includes("shipping")) {
      stage = "shipping";
    } else if (unit.location?.toLowerCase().includes("factory")) {
      stage = "factory";
    } 
    
    // Add to appropriate stage for visualization
    if (stage && stage !== "installed" && assetStages[stage]) {
      assetStages[stage].push(unit);
    }

    // Classify unit based on isPublicAsset flag or parent container
    const isPublicAsset = unit.isPublicAsset || parentId === "public";

    if (isPublicAsset) {
      publicCount++;
      publicValue += value;
      
      // Calculate depreciation for public assets
      if (stage === "installed" || unit.status?.includes("Installed")) {
        const depreciationRate = parseFloat(product?.depreciationRate) / 100 || 0.15;
        const installDate = new Date(unit.installedDate || unit.lastAction || unit.created);
        const years = (now - installDate) / (365.25 * 24 * 3600 * 1000);
        const currentValue = value * Math.pow(1 - depreciationRate, years);
        
        publicDepreciationRows.push({
          chargerId: unit.chargerId,
          model: unit.model,
          installDate: installDate.toLocaleDateString(),
          originalValue: value,
          depreciationRate,
          years: years.toFixed(2),
          currentValue: currentValue.toFixed(0),
          location: unit.location
        });
      }
    } else if (parentId === "other") {
      unknownCount++;
    } else if (product) {
      inventoryCount++;
      inventoryValue += value;
    }
  });

  // Apply consistent colors using parent container colors where possible
  const parentColors = {};
  settings.parentContainers.forEach(container => {
    parentColors[container.id] = container.color;
  });

  const rainbowColors = [
    parentColors.public || "#ef4444", // red for public
    parentColors.warehouse || "#38bdf8", // blue for warehouse
    parentColors.other || "#f59e0b", // orange for other
    parentColors.customer || "#22c55e" // green for customer
  ];

  const kpis = [
    { label: "Public Chargers", value: publicCount, value2: `$${publicValue.toLocaleString()}` },
    { label: "Inventory Chargers", value: inventoryCount, value2: `$${inventoryValue.toLocaleString()}` },
    { label: "Unknown Chargers", value: unknownCount, value2: "" },
    { label: "Total Chargers", value: inventory.length, value2: "" }
  ].map((kpi, i) => ({ ...kpi, color: rainbowColors[i % rainbowColors.length] }));

  // Render UI components with the processed data
  renderKpiCards(kpis);
  renderDonutChart(publicValue, inventoryValue);
  renderMilestoneProgress(assetStages);
  renderDepreciationSummary(publicDepreciationRows);
}

// Add this function after initializeIndexPageContent

function renderKpiCards(kpis) {
  const container = document.getElementById('kpi-cards');
  if (!container) return;
  
  container.innerHTML = kpis.map(kpi => `
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full">
      <div class="flex items-center justify-between mb-4">
        <div>
          <div class="text-3xl font-bold">${kpi.value}</div>
          ${kpi.value2 ? `<div class="text-xl text-gray-500 mt-1">${kpi.value2}</div>` : '<div class="h-7"></div>'}
        </div>
        <div class="w-14 h-14 rounded-full flex items-center justify-center" style="background-color: ${kpi.color}25">
          <svg class="w-7 h-7" style="color: ${kpi.color}" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      <div class="text-base text-gray-500 mt-auto pt-2 font-medium">${kpi.label}</div>
    </div>
  `).join('');
}

// Also add these other rendering functions that might be missing

function renderDonutChart(publicValue, inventoryValue) {
  console.log("Rendering donut chart with values:", { publicValue, inventoryValue });
  
  const container = document.getElementById('assetDonut');
  if (!container) {
    console.error("Donut chart container not found!");
    return;
  }
  
  const ctx = container.getContext('2d');
  
  // Clear any existing charts
  if (window.valueChart && typeof window.valueChart.destroy === 'function') {
    window.valueChart.destroy();
  }
  
  const totalValue = publicValue + inventoryValue;
  
  // More professional styling
  window.valueChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Public Assets', 'Inventory Assets'],
      datasets: [{
        data: [publicValue, inventoryValue],
        backgroundColor: ['#ef4444', '#38bdf8'],
        borderColor: ['#dc2626', '#0ea5e9'],
        borderWidth: 1,
        hoverOffset: 30,
        hoverBorderWidth: 3,
        borderRadius: 4,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      cutout: '60%',
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: 20
      },
      plugins: {
        title: {
          display: true,
          text: 'Asset Value Distribution',
          font: { size: 18, weight: 'bold' },
          padding: {
            bottom: 15
          }
        },
        legend: {
          position: 'bottom',
          labels: {
            padding: 25,
            font: { size: 16 },
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          // Enhanced tooltip styling
          backgroundColor: 'rgba(255,255,255,0.95)',
          titleColor: '#333',
          bodyColor: '#333',
          bodyFont: { size: 16 },
          titleFont: { size: 18 },
          borderColor: '#ccc',
          borderWidth: 1,
          padding: 15,
          boxPadding: 8,
          cornerRadius: 6,
          displayColors: true,
          callbacks: {
            label: function(context) {
              const value = context.raw;
              const percent = totalValue > 0 ? Math.round(value / totalValue * 100) : 0;
              return `${context.label}: $${value.toLocaleString()} (${percent}%)`;
            }
          }
        }
      }
    }
  });
}

function renderMilestoneProgress(stagesData) {
  const container = document.getElementById('milestone-progress');
  if (!container) return;
  
  const stageOrder = [
    { key: 'factory', label: 'Factory' }, 
    { key: 'shipping', label: 'Shipping' }, 
    { key: 'port', label: 'Port' }, 
    { key: 'warehouse', label: 'Warehouse' }
  ];
  
  const counts = stageOrder.map(stage => stagesData[stage.key]?.length || 0);
  const total = counts.reduce((sum, val) => sum + val, 0);
  
  // Create milestone bar with more height and visual prominence
  container.innerHTML = `
    <div class="bg-gray-100 dark:bg-gray-700 rounded-full h-6 mb-5">
      ${stageOrder.map((stage, i) => {
        const percent = total > 0 ? (counts[i] / total) * 100 : 0;
        const colors = ['#f97316', '#0ea5e9', '#8b5cf6', '#10b981'];
        return `<div class="h-full rounded-full transition-all duration-500" 
                    style="width:${percent}%; background:${colors[i]}; display:inline-block;"></div>`;
      }).join('')}
    </div>
    <div class="flex justify-between mt-8">
      ${stageOrder.map((stage, i) => {
        const colors = ['#f97316', '#0ea5e9', '#8b5cf6', '#10b981'];
        return `
          <div class="text-center flex flex-col items-center">
            <div class="w-10 h-10 rounded-full mb-2 flex items-center justify-center" 
                 style="background-color: ${colors[i]}">
              <span class="text-white font-bold">${counts[i]}</span>
            </div>
            <div class="text-sm font-medium">${stage.label}</div>
          </div>
        `;
      }).join('')}
    </div>
    <div class="flex mt-12 justify-center">
      <div class="text-center py-4 px-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <div class="text-xl font-bold">${total}</div>
        <div class="text-sm text-gray-500">Total Units in Pipeline</div>
      </div>
    </div>
  `;
}

function renderDepreciationSummary(rows) {
  const container = document.getElementById('depreciation-summary');
  if (!container) return;
  
  // Calculate total depreciation using current data
  const totalOriginal = rows.reduce((sum, row) => sum + Number(row.originalValue), 0);
  const totalCurrent = rows.reduce((sum, row) => sum + Number(row.currentValue), 0);
  const totalDepreciation = totalOriginal - totalCurrent;
  
  container.innerHTML = `
    <div class="text-lg font-semibold">
      Total Depreciation: <span class="text-purple-600">$${totalDepreciation.toLocaleString()}</span>
      <span class="text-sm text-gray-500">(${rows.length} public assets, yearly calculation)</span>
    </div>
  `;
}
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase.js';
import { loadProducts } from './products.js';
import { loadInventory } from './inventory.js';
import { loadSettings } from './settings.js';
import { loadAuditLog } from './inventory.js';

function updateLoadingProgress(message) {
  const progressElement = document.getElementById('loadingProgress');
  if (progressElement) {
    progressElement.textContent = message;
  }
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }
}

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "/login.html";
  } else {
    document.body.style.visibility = "visible";
    initializeIndexPageContent();
  }
});

async function initializeIndexPageContent() {
  try {
    console.log('Starting dashboard initialization...');
    
    // Load all necessary data
    const [products, inventory, settings, auditLog] = await Promise.all([
      loadProducts(),
      loadInventory(), 
      loadSettings(),
      loadAuditLog()
    ]);

    console.log('Data loaded:', {
      products: products.length,
      inventory: inventory.length,
      settings: !!settings,
      auditLog: auditLog.length
    });

    window.inventory = inventory;

    // Create comprehensive business intelligence
    const businessMetrics = await calculateBusinessMetrics(inventory, products, settings, auditLog);
    
    console.log('Business metrics calculated:', businessMetrics);
    
    // Render executive dashboard with delays to prevent conflicts
    renderExecutiveKPIs(businessMetrics);
    
    setTimeout(() => {
      renderAssetDistributionChart(businessMetrics);
    }, 100);
    
    setTimeout(() => {
      renderDeploymentPipeline(businessMetrics.pipeline);
      renderDepreciationAnalysis(businessMetrics.depreciation);
      renderAssetHealthMetrics(businessMetrics.health);
      renderGrowthTrajectory(businessMetrics.growth);
    }, 200);
    
  } catch (error) {
    console.error("Error initializing index page:", error);
    showErrorState();
  }
}

async function calculateBusinessMetrics(inventory, products, settings, auditLog) {
  // Create product lookup map
  const productMap = {};
  products.forEach(p => productMap[p.name] = p);

  // Create combined locations including contractors
  const allLocations = [
    ...settings.locations,
    ...(settings.contractors || []).map(contractor => ({
      name: contractor.name,
      parent: "contractor"
    }))
  ];

  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);

  // Initialize comprehensive metrics
  const metrics = {
    // Financial KPIs
    financial: {
      revenueAssets: { count: 0, value: 0 }, // Deployed units generating revenue
      idleInventory: { count: 0, value: 0 }, // Warehouse stock tying up cash
      inTransit: { count: 0, value: 0 }, // Units being deployed
      totalAssetValue: 0,
      cashFlowImpact: 0, // Idle inventory cost
      utilizationRate: 0 // % of assets deployed
    },
    
    // Operational KPIs
    operational: {
      deploymentVelocity: 0, // Units deployed per month
      inventoryTurnover: 0, // Deployed / Warehouse ratio
      avgTimeToDeployment: 0, // Days from warehouse to deployed
      lifeCycleEfficiency: {} // Time in each stage
    },
    
    // Strategic KPIs
    strategic: {
      marketExpansion: {
        publicInstallations: 0,
        customerInstallations: 0,
        expansionRate: 0
      },
      assetHealth: {
        healthy: 0,
        faulty: 0,
        maintenance: 0,
        faultRate: 0
      }
    },

    // Pipeline and trends
    pipeline: {
      warehouse: [],
      contractor: [],
      deployed: [],
      unknown: []
    },

    depreciation: {
      totalOriginal: 0,
      totalCurrent: 0,
      totalDepreciation: 0,
      assets: []
    },

    health: {
      operational: 0,
      faulty: 0,
      maintenance: 0,
      rma: 0
    },

    growth: {
      deploymentsThisMonth: 0,
      deploymentsLastMonth: 0,
      growthRate: 0,
      trend: []
    }
  };

  // Process each inventory item
  inventory.forEach(unit => {
    const product = productMap[unit.model] || productMap[unit.product];
    const value = parseFloat(product?.price) || 0;
    
    console.log('Processing unit:', {
      chargerId: unit.chargerId,
      model: unit.model,
      product: unit.product,
      location: unit.location,
      foundProduct: product,
      price: product?.price,
      parsedValue: value
    });
    
    const locationObj = allLocations.find(loc => loc.name === unit.location);
    const parentId = locationObj?.parent || "other";
    
  
    console.log('Location mapping:', {
      unitLocation: unit.location,
      foundLocationObj: locationObj,
      parentId: parentId
    });
    
    if (parentId === "customer" || parentId === "public" || 
        unit.status?.includes("Installed")) {
      // Revenue-generating assets
      metrics.financial.revenueAssets.count++;
      metrics.financial.revenueAssets.value += value;
      metrics.pipeline.deployed.push(unit);
      
      console.log('Added to revenue assets:', unit.chargerId);
      
    } else if (parentId === "warehouse") {
      // Idle inventory - cash tied up
      metrics.financial.idleInventory.count++;
      metrics.financial.idleInventory.value += value;
      metrics.pipeline.warehouse.push(unit);
      
      console.log('Added to idle inventory:', unit.chargerId);
      
    } else if (parentId === "contractor") {
      // In transit - being deployed
      metrics.financial.inTransit.count++;
      metrics.financial.inTransit.value += value;
      metrics.pipeline.contractor.push(unit);
      
      console.log('Added to in transit:', unit.chargerId);
      
    } else {
      metrics.pipeline.unknown.push(unit);
      console.log('Added to unknown:', unit.chargerId, 'parentId:', parentId);
    }  
    
    // Asset health tracking
    if (unit.status === "Faulty") {
      metrics.health.faulty++;
      metrics.strategic.assetHealth.faulty++;
    } else if (unit.status === "RMA") {
      metrics.health.rma++;
      metrics.strategic.assetHealth.maintenance++;
    } else if (unit.status?.includes("In Stock") || unit.status?.includes("Installed")) {
      metrics.health.operational++;
      metrics.strategic.assetHealth.healthy++;
    } else {
      metrics.health.maintenance++;
      metrics.strategic.assetHealth.maintenance++;
    }
  });

  // Calculate financial metrics
  metrics.financial.totalAssetValue = metrics.financial.revenueAssets.value + 
                                     metrics.financial.idleInventory.value + 
                                     metrics.financial.inTransit.value;
  
  metrics.financial.cashFlowImpact = metrics.financial.idleInventory.value;
  
  metrics.financial.utilizationRate = inventory.length > 0 ? 
    (metrics.financial.revenueAssets.count / inventory.length * 100) : 0;

  // Calculate operational metrics
  metrics.operational.inventoryTurnover = metrics.financial.idleInventory.count > 0 ?
    (metrics.financial.revenueAssets.count / metrics.financial.idleInventory.count) : 0;

  // Calculate deployment velocity from audit log (last 30 days)
  const recentDeployments = auditLog.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= thirtyDaysAgo && 
           (entry.statusTo?.includes("Installed") || 
            entry.to?.includes("Customer") || 
            entry.to?.includes("Public"));
  });
  metrics.operational.deploymentVelocity = recentDeployments.length;

  // Calculate growth metrics
  const deploymentsThisMonth = auditLog.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= thirtyDaysAgo && 
           (entry.statusTo?.includes("Installed") || 
            entry.to?.includes("Customer") || 
            entry.to?.includes("Public"));
  }).length;

  const deploymentsLastMonth = auditLog.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate >= sixtyDaysAgo && entryDate < thirtyDaysAgo &&
           (entry.statusTo?.includes("Installed") || 
            entry.to?.includes("Customer") || 
            entry.to?.includes("Public"));
  }).length;

  metrics.growth.deploymentsThisMonth = deploymentsThisMonth;
  metrics.growth.deploymentsLastMonth = deploymentsLastMonth;
  metrics.growth.growthRate = deploymentsLastMonth > 0 ? 
    ((deploymentsThisMonth - deploymentsLastMonth) / deploymentsLastMonth * 100) : 0;

  // Calculate strategic metrics
  metrics.strategic.assetHealth.faultRate = inventory.length > 0 ?
    (metrics.strategic.assetHealth.faulty / inventory.length * 100) : 0;

  metrics.strategic.marketExpansion.expansionRate = inventory.length > 0 ?
    ((metrics.strategic.marketExpansion.publicInstallations + 
      metrics.strategic.marketExpansion.customerInstallations) / inventory.length * 100) : 0;

  // Calculate depreciation totals
  metrics.depreciation.totalDepreciation = metrics.depreciation.totalOriginal - 
                                          metrics.depreciation.totalCurrent;

  return metrics;
}

function renderExecutiveKPIs(metrics) {
  const container = document.getElementById('kpi-cards');
  if (!container) return;
  
  const kpis = [
    { 
      label: "Revenue Assets", 
      value: metrics.financial.revenueAssets.count, 
      value2: `$${metrics.financial.revenueAssets.value.toLocaleString()}`,
      color: "#22c55e",
      subtitle: `${metrics.financial.utilizationRate.toFixed(1)}% utilization`,
      trend: metrics.growth.growthRate > 0 ? "↗" : metrics.growth.growthRate < 0 ? "↘" : "→"
    },
    { 
      label: "Cash Flow Impact", 
      value: metrics.financial.idleInventory.count, 
      value2: `$${metrics.financial.cashFlowImpact.toLocaleString()}`,
      color: "#f59e0b",
      subtitle: `Turnover: ${metrics.operational.inventoryTurnover.toFixed(1)}x`,
      trend: metrics.operational.inventoryTurnover > 2 ? "↗" : "→"
    },
    { 
      label: "Deployment Velocity", 
      value: `${metrics.operational.deploymentVelocity}/mo`, 
      value2: `${metrics.growth.growthRate.toFixed(1)}% growth`,
      color: "#8b5cf6",
      subtitle: "Monthly deployment rate",
      trend: metrics.growth.growthRate > 0 ? "↗" : metrics.growth.growthRate < 0 ? "↘" : "→"
    },
    { 
      label: "Asset Health", 
      value: `${(100 - metrics.strategic.assetHealth.faultRate).toFixed(1)}%`, 
      value2: `${metrics.strategic.assetHealth.faulty} faulty`,
      color: metrics.strategic.assetHealth.faultRate > 5 ? "#ef4444" : "#22c55e",
      subtitle: `${metrics.health.rma} in maintenance`,
      trend: metrics.strategic.assetHealth.faultRate < 5 ? "↗" : "↘"
    }
  ];
  
  container.innerHTML = kpis.map(kpi => `
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full relative overflow-hidden">
      <div class="absolute top-0 right-0 text-6xl opacity-10" style="color: ${kpi.color}">
        ${kpi.trend}
      </div>
      <div class="flex items-center justify-between mb-4 relative z-10">
        <div>
          <div class="text-3xl font-bold">${kpi.value}</div>
          ${kpi.value2 ? `<div class="text-xl text-gray-500 mt-1">${kpi.value2}</div>` : '<div class="h-7"></div>'}
        </div>
        <div class="w-14 h-14 rounded-full flex items-center justify-center" style="background-color: ${kpi.color}25">
          <div class="w-6 h-6 rounded-full" style="background-color: ${kpi.color}"></div>
        </div>
      </div>
      <div class="text-base text-gray-500 mt-auto pt-2 font-medium">${kpi.label}</div>
      <div class="text-xs text-gray-400 mt-1">${kpi.subtitle}</div>
    </div>
  `).join('');
}

function renderAssetDistributionChart(metrics) {
  const container = document.getElementById('assetDonut');
  if (!container) {
    console.error('Canvas element with ID "assetDonut" not found');
    return;
  }
  
  const ctx = container.getContext('2d');
  
  // Destroy any existing chart instance more safely
  if (window.assetChart) {
    try {
      window.assetChart.destroy();
    } catch (e) {
      console.warn('Error destroying previous chart:', e);
    }
  }
  
  // Use count data since value data is all 0
  const data = [
    metrics.financial?.revenueAssets?.count || 0,
    metrics.financial?.idleInventory?.count || 0,
    metrics.financial?.inTransit?.count || 0
  ];
  
  const totalValue = data.reduce((sum, val) => sum + val, 0);

  console.log('Chart data:', {
    revenueAssets: metrics.financial?.revenueAssets?.count || 0,
    idleInventory: metrics.financial?.idleInventory?.count || 0,
    inTransit: metrics.financial?.inTransit?.count || 0,
    totalValue,
    data
  });
    
  // If no data, show a placeholder
  if (totalValue === 0) {
    ctx.clearRect(0, 0, container.width, container.height);
    ctx.fillStyle = '#9ca3af';
    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('No asset data available', container.width / 2, container.height / 2);
    return;
  }
  
  // Create new chart with unique variable name
  window.assetChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Revenue Assets', 'Idle Inventory', 'In Transit'],
      datasets: [{
        data: data,
        backgroundColor: ['#22c55e', '#f59e0b', '#8b5cf6'],
        borderColor: ['#16a34a', '#d97706', '#7c3aed'],
        borderWidth: 2,
        hoverOffset: 30,
        hoverBorderWidth: 3,
        borderRadius: 4,
        hoverBorderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1000 // Add animation duration
      },
      plugins: {
        title: {
          display: true,
          text: `Total Units: ${totalValue}`,
          font: { size: 18, weight: 'bold' },
          padding: {
            bottom: 15
          }
        },
        legend: {
          position: 'bottom',
          labels: {
            padding: 25,
            font: { size: 14 },
            usePointStyle: true,
            pointStyle: 'circle'
          }
        },
        tooltip: {
          backgroundColor: 'rgba(255,255,255,0.95)',
          titleColor: '#333',
          bodyColor: '#333',
          bodyFont: { size: 14 },
          titleFont: { size: 16 },
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
              return `${context.label}: ${value} units (${percent}%)`;
            }
          }
        }
      }
    }
  });
  
  console.log('Chart created successfully:', window.assetChart);
}

function renderDeploymentPipeline(pipeline) {
  const container = document.getElementById('milestone-progress');
  if (!container) return;
  
  const stages = [
    { key: 'warehouse', label: 'Warehouse', color: '#3b82f6' },
    { key: 'contractor', label: 'With Contractors', color: '#8b5cf6' }, 
    { key: 'deployed', label: 'Deployed', color: '#22c55e' },
    { key: 'unknown', label: 'Other', color: '#6b7280' }
  ];
  
  const counts = stages.map(stage => pipeline[stage.key]?.length || 0);
  const total = counts.reduce((sum, val) => sum + val, 0);
  
  container.innerHTML = `
    <div class="space-y-4">
      ${stages.map((stage, i) => {
        const count = counts[i];
        const percent = total > 0 ? (count / total * 100) : 0;
        return `
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-4 h-4 rounded-full" style="background-color: ${stage.color}"></div>
              <span class="font-medium">${stage.label}</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-32 bg-gray-200 rounded-full h-2">
                <div class="h-2 rounded-full transition-all duration-500" 
                     style="width: ${percent}%; background-color: ${stage.color}"></div>
              </div>
              <span class="font-bold text-lg w-8 text-right">${count}</span>
            </div>
          </div>
        `;
      }).join('')}
    </div>
    <div class="flex mt-8 justify-center">
      <div class="text-center py-4 px-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <div class="text-2xl font-bold">${total}</div>
        <div class="text-sm text-gray-500">Total Units</div>
      </div>
    </div>
  `;
}

function renderDepreciationAnalysis(depreciation) {
  const container = document.getElementById('depreciation-summary');
  if (!container) return;
  
  const depreciationRate = depreciation.totalOriginal > 0 ? 
    (depreciation.totalDepreciation / depreciation.totalOriginal * 100) : 0;
  
  container.innerHTML = `
    <div class="grid md:grid-cols-3 gap-6">
      <div class="text-center">
        <div class="text-3xl font-bold text-blue-600">$${depreciation.totalOriginal.toLocaleString()}</div>
        <div class="text-sm text-gray-500">Original Value</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-purple-600">$${depreciation.totalDepreciation.toLocaleString()}</div>
        <div class="text-sm text-gray-500">Total Depreciation</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-green-600">$${depreciation.totalCurrent.toLocaleString()}</div>
        <div class="text-sm text-gray-500">Current Value</div>
      </div>
    </div>
    <div class="mt-4 text-center">
      <div class="text-lg font-semibold">
        Depreciation Rate: <span class="text-purple-600">${depreciationRate.toFixed(1)}%</span>
        <span class="text-sm text-gray-500 ml-2">(${depreciation.assets.length} deployed assets)</span>
      </div>
    </div>
  `;
}

function renderAssetHealthMetrics(health) {
  const container = document.getElementById('asset-health');
  if (!container) return;
  
  const total = health.operational + health.faulty + health.maintenance + health.rma;
  
  container.innerHTML = `
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="text-center p-4 bg-green-50 rounded-lg">
        <div class="text-2xl font-bold text-green-600">${health.operational}</div>
        <div class="text-sm text-gray-600">Operational</div>
      </div>
      <div class="text-center p-4 bg-red-50 rounded-lg">
        <div class="text-2xl font-bold text-red-600">${health.faulty}</div>
        <div class="text-sm text-gray-600">Faulty</div>
      </div>
      <div class="text-center p-4 bg-yellow-50 rounded-lg">
        <div class="text-2xl font-bold text-yellow-600">${health.maintenance}</div>
        <div class="text-sm text-gray-600">Maintenance</div>
      </div>
      <div class="text-center p-4 bg-purple-50 rounded-lg">
        <div class="text-2xl font-bold text-purple-600">${health.rma}</div>
        <div class="text-sm text-gray-600">RMA</div>
      </div>
    </div>
  `;
}

function renderGrowthTrajectory(growth) {
  const container = document.getElementById('growth-trajectory');
  if (!container) return;
  
  const trendIcon = growth.growthRate > 0 ? "📈" : growth.growthRate < 0 ? "📉" : "➡️";
  const trendColor = growth.growthRate > 0 ? "text-green-600" : growth.growthRate < 0 ? "text-red-600" : "text-gray-600";
  
  container.innerHTML = `
    <div class="flex items-center justify-between">
      <div>
        <div class="text-4xl">${trendIcon}</div>
        <div class="text-sm text-gray-500">Growth Trend</div>
      </div>
      <div class="text-right">
        <div class="text-2xl font-bold ${trendColor}">
          ${growth.growthRate > 0 ? '+' : ''}${growth.growthRate.toFixed(1)}%
        </div>
        <div class="text-sm text-gray-500">vs. Last Month</div>
      </div>
      <div class="text-center">
        <div class="text-lg font-semibold">${growth.deploymentsThisMonth}</div>
        <div class="text-sm text-gray-500">This Month</div>
      </div>
      <div class="text-center">
        <div class="text-lg font-semibold">${growth.deploymentsLastMonth}</div>
        <div class="text-sm text-gray-500">Last Month</div>
      </div>
    </div>
  `;
}

function showErrorState() {
  const container = document.getElementById('kpi-cards');
  if (container) {
    container.innerHTML = `
      <div class="col-span-full text-center py-8">
        <div class="text-red-500 text-lg">Error loading dashboard data</div>
        <button onclick="window.location.reload()" class="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
          Retry
        </button>
      </div>
    `;
  }
}
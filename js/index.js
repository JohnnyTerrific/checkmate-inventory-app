import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase.js';
import { loadProducts } from './products.js';
import { loadInventory } from './inventory.js';
import { loadSettings } from './settings.js';
import { loadAuditLog } from './inventory.js';
import { getCurrentUserProfile, getCurrentUserRole } from './utils/users.js'; // FIXED: Added getCurrentUserRole
import { checkPageAccess, renderAccessDenied } from './core.js';

function checkMobileAndRedirect() {
  const isMobile = window.innerWidth < 768;
  
  // Check if we're explicitly allowing index access (from logo click)
  const allowIndexAccess = sessionStorage.getItem('allowIndexAccess');
  if (allowIndexAccess) {
    sessionStorage.removeItem('allowIndexAccess');
    console.log('Index access explicitly allowed, not redirecting');
    return false;
  }
  
  // Prevent redirect loops
  const isRedirecting = sessionStorage.getItem('isRedirecting');
  if (isRedirecting) {
    sessionStorage.removeItem('isRedirecting');
    console.log('Already redirecting, preventing loop');
    return false;
  }
  
  if (isMobile) {
    const lastUserRole = localStorage.getItem('userRole');
    
    console.log('Mobile device detected, checking user role:', lastUserRole);
    
    // For Agents, always redirect to inventory
    if (lastUserRole === 'Agent') {
      console.log('Agent user on mobile, redirecting to inventory');
      sessionStorage.setItem('isRedirecting', 'true');
      window.location.href = "/inventory.html";
      return true;
    }
    
    // For other users, redirect to inventory unless they're specifically accessing index
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      console.log('Mobile user accessing index, redirecting to inventory');
      sessionStorage.setItem('isRedirecting', 'true');
      window.location.href = "/inventory.html";
      return true;
    }
  }
  return false;
}

// FIXED: Update onAuthStateChanged to properly handle role checking
onAuthStateChanged(auth, async user => {
  if (!user) {
    window.location.href = "/login.html";
  } else {
    // Store user role for mobile redirect logic
    const userProfile = await getCurrentUserProfile();
    if (userProfile) {
      localStorage.setItem('userRole', userProfile.role);
    }
    
    // FIXED: Check if Agent is trying to access this page before mobile redirect
    const userRole = await getCurrentUserRole();
    if (userRole === 'Agent') {
      console.log('Agent detected, redirecting to inventory');
      window.location.href = "/inventory.html";
      return;
    }
    
    // Check mobile redirect before initializing dashboard
    if (checkMobileAndRedirect()) {
      return;
    }
    
    initializeIndexPageContent();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Handle logo clicks to prevent mobile redirect loop
  const logoElements = document.querySelectorAll('.logo, [onclick*="index.html"], [href="index.html"], [href="/"]');
  logoElements.forEach(logo => {
    logo.addEventListener('click', (e) => {
      const isMobile = window.innerWidth < 768;
      const userRole = localStorage.getItem('userRole');
      
      if (isMobile && userRole === 'Agent') {
        e.preventDefault();
        showToast('Mobile agents should stay on inventory page', 'blue');
        return;
      }
      
      if (isMobile) {
        // Set flag to allow index access
        sessionStorage.setItem('allowIndexAccess', 'true');
      }
    });
  });
});

function showLoadingScreen() {
  // Remove any existing loader first
  const existingLoader = document.getElementById('indexLoadingScreen');
  if (existingLoader) {
    existingLoader.remove();
  }

  const loadingHTML = `
    <div id="indexLoadingScreen" class="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center z-50">
      <div class="text-center">
        <div class="loading-pulse mb-8">
          <div class="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <svg class="w-16 h-16 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
        
        <h2 class="text-3xl font-bold text-white mb-4">CheckMate</h2>
        <p class="text-purple-200 text-lg mb-8">Loading Executive Dashboard</p>
        
        <div class="flex justify-center space-x-2">
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
        </div>
        
        <p id="indexLoadingProgress" class="text-purple-300 mt-6 text-sm">Initializing...</p>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', loadingHTML);
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('indexLoadingScreen');
  if (loadingScreen) {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }
}

function updateLoadingProgress(message) {
  const progressElement = document.getElementById('indexLoadingProgress');
  if (progressElement) {
    progressElement.textContent = message;
  }
}

async function initializeIndexPageContent() {
  try {
    // Hide any existing static loader first
    const staticLoader = document.getElementById('loadingScreen');
    if (staticLoader) {
      staticLoader.style.display = 'none';
    }
    
    showLoadingScreen();
    updateLoadingProgress('Checking permissions...');
    
    const startTime = Date.now();
    const minLoadingTime = 2000; // Reduced from 3000
    
    // FIXED: Better access checking with proper error handling
    const hasAccess = await checkPageAccess('viewIndex');
    if (!hasAccess) {
      hideLoadingScreen();
      renderAccessDenied('#main-content-area');
      return;
    }

    // FIXED: Add error handling for data loading
    try {
      updateLoadingProgress('Loading inventory data...');
      await new Promise(resolve => setTimeout(resolve, 300));
      const inventory = await loadInventory();
      
      updateLoadingProgress('Loading products...');
      await new Promise(resolve => setTimeout(resolve, 300));
      const products = await loadProducts();
      
      updateLoadingProgress('Loading settings...');
      await new Promise(resolve => setTimeout(resolve, 300));
      const settings = await loadSettings();
      
      updateLoadingProgress('Loading audit log...');
      await new Promise(resolve => setTimeout(resolve, 300));
      const auditLog = await loadAuditLog();

      // Validate data before proceeding
      if (!inventory || !products || !settings) {
        throw new Error('Failed to load required data');
      }

      updateLoadingProgress('Calculating business metrics...');
      await new Promise(resolve => setTimeout(resolve, 400));
      const businessMetrics = await calculateBusinessMetrics(inventory, products, settings, auditLog);
      
      updateLoadingProgress('Rendering KPI dashboard...');
      await new Promise(resolve => setTimeout(resolve, 300));
      renderExecutiveKPIs(businessMetrics);

      updateLoadingProgress('Creating charts and analysis...');
      
      await Promise.all([
        renderAssetDistributionChart(businessMetrics),
        renderDeploymentPipeline(businessMetrics.pipeline),
        renderDepreciationAnalysis(businessMetrics.depreciation),
        renderAssetHealthMetrics(businessMetrics.health),
        renderGrowthTrajectory(businessMetrics.growth)
      ]);

      updateLoadingProgress('Finalizing dashboard...');
      
      // Ensure minimum loading time has passed
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        const main = document.getElementById('main-content-area') || 
                     document.getElementById('main-content') ||
                     document.querySelector('main');
        if (main) {
          main.classList.remove('opacity-0', 'pointer-events-none');
          main.classList.add('opacity-100');
        }
        updateLoadingProgress('Dashboard ready!');
        setTimeout(() => hideLoadingScreen(), 500);
      }, remainingTime);

    } catch (dataError) {
      console.error("Error loading data:", dataError);
      hideLoadingScreen();
      showErrorState();
    }

  } catch (error) {
    console.error("Error initializing index page:", error);
    hideLoadingScreen();
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

    let estimatedValue = value;
  if (estimatedValue === 0) {
    if (unit.model?.includes('SMART HOME MINI WALLBOX')) {
      estimatedValue = 300; // Default estimate for wallbox
    } else if (unit.model?.includes('DC Fast')) {
      estimatedValue = 15000; // Default estimate for DC fast charger
    } else {
      estimatedValue = 500; // Generic default
    }
    console.log(`Using estimated value ${estimatedValue} for ${unit.chargerId}`);
  }
    
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
metrics.financial.revenueAssets.value += estimatedValue; // FIXED: Use estimatedValue instead of value
metrics.pipeline.deployed.push(unit);

// ADD DEPRECIATION CALCULATION HERE
const deployedDate = new Date(unit.lastAction || unit.created || Date.now());
const monthsDeployed = Math.max(0, (Date.now() - deployedDate.getTime()) / (1000 * 60 * 60 * 24 * 30));
const depreciationRate = (product?.depreciationRate || 10) / 100; // Annual rate
const annualDepreciation = estimatedValue * depreciationRate; // FIXED: Use estimatedValue
const totalDepreciation = Math.min(estimatedValue * 0.9, (annualDepreciation * monthsDeployed / 12)); // Cap at 90%
const currentValue = Math.max(estimatedValue * 0.1, estimatedValue - totalDepreciation); // Floor at 10%

metrics.depreciation.totalOriginal += estimatedValue; // FIXED: Use estimatedValue
metrics.depreciation.totalCurrent += currentValue;
metrics.depreciation.assets.push({
  chargerId: unit.chargerId,
  originalValue: estimatedValue, // FIXED: Use estimatedValue
  currentValue: currentValue,
  depreciation: totalDepreciation,
  monthsDeployed: Math.round(monthsDeployed)
});

console.log('Added to revenue assets:', unit.chargerId, 'value:', estimatedValue);

} else if (parentId === "warehouse") {
// Idle inventory - cash tied up
metrics.financial.idleInventory.count++;
metrics.financial.idleInventory.value += estimatedValue; // FIXED: Use estimatedValue instead of value
metrics.pipeline.warehouse.push(unit);

console.log('Added to idle inventory:', unit.chargerId, 'value:', estimatedValue);

} else if (parentId === "contractor") {
// In transit - being deployed
metrics.financial.inTransit.count++;
metrics.financial.inTransit.value += estimatedValue; // FIXED: Use estimatedValue instead of value
metrics.pipeline.contractor.push(unit);

console.log('Added to in transit:', unit.chargerId, 'value:', estimatedValue);

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
    } else {
      // Everything else is considered operational/healthy
      metrics.health.operational++;
      metrics.strategic.assetHealth.healthy++;
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
  return new Promise((resolve) => {
    const container = document.getElementById('assetDonut');
    if (!container) {
      resolve();
      return;
    }
    
    if (typeof Chart === 'undefined') {
      console.error('Chart.js not available');
      container.innerHTML = '<div class="text-center p-4 text-red-500">Chart.js library not loaded</div>';
      resolve();
      return;
    }

    // Clear any existing chart
    if (window.assetChart) {
      try { 
        window.assetChart.destroy(); 
        window.assetChart = null;
      } catch (e) {
        console.warn('Chart destruction failed:', e);
      }
    }

    const ctx = container.getContext('2d');
    
    // Prepare data (same as before)
    const valueData = [
      metrics.financial?.revenueAssets?.value || 0,
      metrics.financial?.idleInventory?.value || 0,
      metrics.financial?.inTransit?.value || 0
    ];
    
    const countData = [
      metrics.financial?.revenueAssets?.count || 0,
      metrics.financial?.idleInventory?.count || 0,
      metrics.financial?.inTransit?.count || 0
    ];
    
    const totalValue = valueData.reduce((sum, val) => sum + val, 0);
    const totalCount = countData.reduce((sum, val) => sum + val, 0);
    const useValueData = totalValue > 0;
    const data = useValueData ? valueData : countData;
    const total = useValueData ? totalValue : totalCount;
    
    if (total === 0) {
      ctx.clearRect(0, 0, container.width, container.height);
      ctx.fillStyle = '#9ca3af';
      ctx.font = '16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('No asset data available', container.width / 2, container.height / 2);
      resolve();
      return;
    }

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
          duration: 1000,
          onComplete: () => {
            console.log('Asset chart animation complete');
            resolve(); // FIXED: Properly resolve when animation completes
          }
        },
        plugins: {
          title: {
            display: true,
            text: useValueData ? `Total Value: $${total.toLocaleString()}` : `Total Units: ${total}`,
            font: { size: 18, weight: 'bold' },
            padding: { bottom: 15 }
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
                const percent = total > 0 ? Math.round(value / total * 100) : 0;
                
                if (useValueData) {
                  return `${context.label}: $${value.toLocaleString()} (${percent}%)`;
                } else {
                  return `${context.label}: ${value} units (${percent}%)`;
                }
              }
            }
          }
        }
      }
    });
  });
}

function renderDeploymentPipeline(pipeline) {
  return new Promise(resolve => {
    const container = document.getElementById('milestone-progress');
    if (!container) {
      resolve();
      return;
    }

    container.classList.add('opacity-0');
    
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
    
    // Simulate loading time and resolve
    setTimeout(() => {
      container.classList.remove('opacity-0');
      container.classList.add('opacity-100');
      resolve();
    }, 300);
  });
}


function renderDepreciationAnalysis(depreciation) {
  return new Promise(resolve => {
    const container = document.getElementById('depreciation-summary');
    if (!container) {
      resolve();
      return;
    }
    
    if (!depreciation.assets || depreciation.assets.length === 0) {
      container.innerHTML = `
        <div class="text-center py-8">
          <div class="text-gray-500 text-lg">No deployed assets for depreciation analysis</div>
          <div class="text-sm text-gray-400 mt-2">Assets will appear here once deployed to customers or public locations</div>
        </div>
      `;
      resolve();
      return;
    }
    
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
    
    setTimeout(() => resolve(), 200);
  });
}


function renderAssetHealthMetrics(health) {
  return new Promise(resolve => {
    const container = document.getElementById('asset-health');
    if (!container) {
      resolve();
      return;
    }
    
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
    
    setTimeout(() => resolve(), 200);
  });
}

function renderGrowthTrajectory(growth) {
  return new Promise(resolve => {
    const container = document.getElementById('growth-trajectory');
    if (!container) {
      resolve();
      return;
    }
    
    const trendIcon = growth.growthRate > 0 ? "📈" : growth.growthRate < 0 ? "📉" : "➡️";
    const trendColor = growth.growthRate > 0 ? "text-green-600" : growth.growthRate < 0 ? "text-red-600" : "text-gray-600";
    
    container.innerHTML = `
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div class="text-center">
          <div class="text-4xl mb-2">${trendIcon}</div>
          <div class="text-sm text-gray-500">Growth Trend</div>
        </div>
        <div class="text-center">
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
      ${growth.trend && growth.trend.length > 0 ? `
      <div class="mt-4">
        <div class="text-sm font-medium text-gray-600 mb-2">6-Month Trend:</div>
        <div class="flex justify-between items-end h-16 bg-gray-50 rounded p-2">
          ${growth.trend.map(month => `
            <div class="flex flex-col items-center">
              <div class="bg-purple-600 rounded-t" style="height: ${Math.max(4, (month.deployments / Math.max(...growth.trend.map(m => m.deployments), 1)) * 48)}px; width: 12px;"></div>
              <div class="text-xs mt-1">${month.month}</div>
              <div class="text-xs text-gray-500">${month.deployments}</div>
            </div>
          `).join('')}
        </div>
      </div>
      ` : ''}
    `;
    
    setTimeout(() => resolve(), 200);
  });
}


function showErrorState() {
  const container = document.getElementById('kpi-cards') || 
                   document.getElementById('main-content-area') ||
                   document.querySelector('main');
  if (container) {
    container.innerHTML = `
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="text-center max-w-md mx-auto p-8">
          <div class="w-16 h-16 mx-auto mb-4 text-red-400">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Dashboard Error</h2>
          <p class="text-gray-500 dark:text-gray-400 mb-4">Unable to load dashboard data. Please try again.</p>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <button onclick="window.location.reload()" 
                    class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
              Retry
            </button>
            <button onclick="window.location.href='/inventory.html'" 
                    class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium">
              Go to Inventory
            </button>
          </div>
        </div>
      </div>
    `;
  }
}
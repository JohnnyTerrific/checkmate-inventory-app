import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase.js'; // Import from your centralized file
import { loadProducts } from './products.js';
import { loadInventory } from './inventory.js';
// core.js is likely imported in index.html if shell is needed
// import { initApp as coreInitApp } from './core.js'; // If you need to explicitly call core's init

onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "/login.html";
  } else {
    // User is signed in.
    document.body.style.visibility = "visible";
    // Initialize page-specific content now that user is authenticated
    initializeIndexPageContent();
    // if (typeof coreInitApp === 'function') {
    //    coreInitApp(); // Or let core.js handle its own init via its DOMContentLoaded
    // }
  }
});

async function initializeIndexPageContent() {
  // This function will contain the logic previously in DOMContentLoaded for index.js
  const products = await loadProducts();
  const inventory = await loadInventory();
  window.inventory = inventory; // If you need it globally

  const productMap = {};
  products.forEach(p => productMap[p.name] = p);

  let publicCount = 0, inventoryCount = 0, unknownCount = 0;
  let publicValue = 0, inventoryValue = 0;
  const now = new Date();
  const assetStages = { factory: [], shipping: [], port: [], warehouse: [], installed: [], unknown: [] };
  const publicDepreciationRows = [];
  const warehouseNames = ["enova warehouse", "back warehouse"];

  inventory.forEach(unit => {
    const product = productMap[unit.model] || productMap[unit.product];
    const isPublicAsset = product?.isPublicAsset || false;
    const value = parseFloat(product?.price) || 0;
    let stage = null;
    const loc = unit.location?.toLowerCase() || "";
    if (loc.includes("public") || loc.includes("arrived") || loc.includes("installed")) stage = "installed";
    else if (warehouseNames.includes(loc)) stage = "warehouse";
    else if (loc.includes("port")) stage = "port";
    else if (loc.includes("shipping")) stage = "shipping";
    else if (loc.includes("factory")) stage = "factory";
    else stage = "unknown";
    if (stage && stage !== "installed" && assetStages[stage]) assetStages[stage].push(unit);

    if (isPublicAsset || loc.includes("public")) {
      publicCount++;
      publicValue += value;
      const depreciationRate = parseFloat(product?.depreciationRate) / 100 || 0.15;
      const installDate = new Date(unit.installedDate || unit.lastAction || unit.created);
      const years = (now - installDate) / (365.25 * 24 * 3600 * 1000);
      const currentValue = value * Math.pow(1 - depreciationRate, years);
      publicDepreciationRows.push({
        chargerId: unit.chargerId, model: unit.model, installDate: installDate.toLocaleDateString(),
        originalValue: value, depreciationRate, years: years.toFixed(2),
        currentValue: currentValue.toFixed(0), location: unit.location
      });
    } else if (product) {
      inventoryCount++;
      inventoryValue += value;
    } else {
      unknownCount++;
    }
  });

  const rainbowColors = ["bg-red-400 dark:bg-red-700", "bg-orange-400 dark:bg-orange-700", "bg-yellow-400 dark:bg-yellow-700", "bg-green-400 dark:bg-green-700", "bg-blue-400 dark:bg-blue-700", "bg-indigo-400 dark:bg-indigo-700", "bg-purple-400 dark:bg-purple-700"];
  const kpis = [
    { label: "Public Chargers", value: publicCount, value2: `$${publicValue.toLocaleString()}` },
    { label: "Inventory Chargers", value: inventoryCount, value2: `$${inventoryValue.toLocaleString()}` },
    { label: "Total Chargers", value: publicCount + inventoryCount, value2: "" }
  ].map((kpi, i) => ({ ...kpi, color: rainbowColors[i % rainbowColors.length] }));

  function renderKpiCards() {
    const kpiContainer = document.getElementById('kpi-cards');
    if (kpiContainer) {
        kpiContainer.innerHTML = kpis.map(kpi => `
        <div class="${kpi.color} rounded-xl p-6 text-center shadow text-white">
            <div class="text-2xl font-bold">${kpi.value}</div>
            <div class="text-lg">${kpi.label}</div>
            ${kpi.value2 ? `<div class="text-lg font-semibold mt-1">${kpi.value2}</div>` : ""}
        </div>`).join('');
    }
  }

  function renderDonutChart() {
    const donutContainer = document.getElementById('assetDonut')?.parentElement;
    if (!donutContainer) return;
    if (publicValue === 0 && inventoryValue === 0) {
      donutContainer.innerHTML = `<div class="text-gray-400 text-center pt-24">No asset data to display</div>`;
    } else {
      const ctx = document.getElementById('assetDonut')?.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'doughnut',
          data: { labels: ['Public Assets', 'Inventory'], datasets: [{ data: [publicValue, inventoryValue], backgroundColor: ['#8b5cf6', '#38bdf8'], borderWidth: 2, borderColor: '#fff' }] },
          options: { plugins: { legend: { position: 'bottom' } }, maintainAspectRatio: false }
        });
      }
    }
  }

  function renderMilestoneProgress(stagesData) {
    const container = document.getElementById('milestone-progress');
    if (!container) return;
    const stageOrder = [ { key: 'factory', label: 'Factory' }, { key: 'shipping', label: 'Shipping' }, { key: 'port', label: 'Port' }, { key: 'warehouse', label: 'Warehouse' }];
    const total = stageOrder.reduce((sum, s) => sum + (stagesData[s.key]?.length || 0), 0);
    if (total === 0) {
      container.innerHTML = `<div class="text-gray-400 text-center">No assets in transit.</div>`; return;
    }
    container.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        ${stageOrder.map(s => `<div class="flex flex-col items-center flex-1"><div class="text-lg font-semibold">${stagesData[s.key]?.length || 0}</div><div class="text-xs text-gray-600">${s.label}</div></div>`).join('')}
      </div>
      <div class="flex w-full h-4 rounded bg-gray-200 overflow-hidden shadow">
        ${stageOrder.map((s, i) => {
          const count = stagesData[s.key]?.length || 0; const percent = total ? (count / total) * 100 : 0;
          const color = ["bg-purple-400", "bg-blue-400", "bg-yellow-400", "bg-green-400"][i % 4];
          return `<div class="${color}" style="width:${percent}%;"></div>`;
        }).join('')}
      </div>`;
  }

  function renderDepreciationSummary(rows) {
    const container = document.getElementById('depreciation-summary');
    if (!container) return;
    const totalOriginal = rows.reduce((sum, row) => sum + Number(row.originalValue), 0);
    const totalCurrent = rows.reduce((sum, row) => sum + Number(row.currentValue), 0);
    const totalDepreciation = totalOriginal - totalCurrent;
    container.innerHTML = `Total Depreciation This Year: <span class="text-purple-600">$${totalDepreciation.toLocaleString()}</span>`;
  }
  
  // Ensure this function exists and is correctly imported if it's from another module
  // For now, assuming updateUnitsLocation is globally available or defined in this scope
  // async function updateUnitsLocation(unitIds, newLocation) { /* ... */ }


  const moveToPortBtn = document.getElementById('moveToPortBtn');
  if (moveToPortBtn) {
    moveToPortBtn.onclick = async () => { // Make async if updateUnitsLocation is async
      const selectedUnitIds = (window.inventory || []).map(u => u.chargerId); // Example: get all unit IDs
      // await updateUnitsLocation(selectedUnitIds, "Port"); // Call your function
      console.log("Move to Port clicked for units:", selectedUnitIds); // Placeholder
    };
  }

  renderKpiCards();
  renderDonutChart();
  renderMilestoneProgress(assetStages);
  renderDepreciationSummary(publicDepreciationRows);
}
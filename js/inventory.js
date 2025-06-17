// inventory.js (starter for Inventory Management tab)

import { showToast } from './core.js';
import { allowedStatusesByParent, getAllowedStatusesForLocation, loadSettings } from './settings.js';
import { getCurrentUserRole, getCurrentUserEmail } from './utils/users.js';
import { can, getPermissions } from './utils/permissions.js';
import Quagga from 'quagga';
import * as XLSX from 'xlsx';
import { db } from './utils/firebase.js';
import { collection, getDocs, doc, setDoc, deleteDoc, writeBatch, orderBy, query, onSnapshot } from "firebase/firestore";
window.isInitialLoad = true;

let inventoryUnsubscribe = null;
let currentLayoutMode = window.innerWidth < 900 ? 'mobile' : 'desktop';

function shouldUseMobileLayout() {
  // Force mobile layout for screens smaller than 900px OR touch devices
  return window.innerWidth < 900 || ('ontouchstart' in window);
}

function escapeForHTML(obj) {
  return JSON.stringify(obj)
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")      // Regular apostrophe
    .replace(/'/g, "&#8217;")    // Hebrew geresh (וינצ'י)
    .replace(/'/g, "&#8216;")    // Left single quote
    .replace(/\\/g, "\\\\");
}

async function isAdmin() {
  return await can('inventoryCrud') && await can('settings');
}

async function canManageInventory() {
  return await can('inventoryCrud');
}

async function canDeleteItems() {
  const role = await getCurrentUserRole();
  return role === 'SuperAdmin'; // Only SuperAdmin can delete
}

async function isSuperAdmin() {
  return (await getCurrentUserRole()) === 'SuperAdmin';
}

// 1) Load entire inventory from Firestore
export async function loadInventory() {
  const snapshot = await getDocs(collection(db, "inventory"));
  return snapshot.docs.map(doc => ({ chargerId: doc.id, ...doc.data() }));
}

// 2) Save (overwrite) inventory array into Firestore
export async function saveInventory(list) {
  const colRef = collection(db, "inventory");
  
  // Delete all existing docs in batches
  const existing = await getDocs(colRef);
  const deletePromises = [];
  
  for (let i = 0; i < existing.docs.length; i += 450) { // Firebase batch limit is 500
    const batch = writeBatch(db);
    const chunk = existing.docs.slice(i, i + 450);
    
    chunk.forEach(docSnap => {
      batch.delete(doc(db, "inventory", docSnap.id));
    });
    
    deletePromises.push(batch.commit());
  }
  
  await Promise.all(deletePromises);
  
  // Add new items in batches
  const addPromises = [];
  
  for (let i = 0; i < list.length; i += 450) {
    const batch = writeBatch(db);
    const chunk = list.slice(i, i + 450);
    
    chunk.forEach(unit => {
      batch.set(doc(db, "inventory", unit.chargerId), {
        chargerSerial: unit.chargerSerial || "",
        simNumber: unit.simNumber || "",
        model: unit.model || "",
        product: unit.product || "",
        location: unit.location,
        status: unit.status,
        assigned: unit.assigned || false,
        created: unit.created || new Date().toISOString(),
        addedBy: unit.addedBy || getCurrentUserEmail(),
        lastAction: unit.lastAction || new Date().toISOString(),
        notes: unit.notes || "",
        ...(unit.isAsset !== undefined && { isAsset: unit.isAsset }),
        ...(unit.invoiceNumber && { invoiceNumber: unit.invoiceNumber }),
        ...(unit.contractorId && { contractorId: unit.contractorId })
      });
    });
    
    addPromises.push(batch.commit());
  }
  
  await Promise.all(addPromises);
}

export async function updateSingleItem(item) {
  // Add validation
  try {
    validateInventoryItem(item);
  } catch (error) {
    showToast(error.message, 'red');
    throw error;
  }

  return safeFirebaseOperation(async () => {
    await setDoc(doc(db, "inventory", item.chargerId), {
      chargerSerial: item.chargerSerial || "",
      simNumber: item.simNumber || "",
      model: item.model || "",
      product: item.product || "",
      location: item.location,
      status: item.status,
      assigned: item.assigned || false,
      created: item.created || new Date().toISOString(),
      addedBy: item.addedBy || getCurrentUserEmail(),
      lastAction: item.lastAction || new Date().toISOString(),
      notes: item.notes || "",
      ...(item.isAsset !== undefined && { isAsset: item.isAsset }),
      ...(item.invoiceNumber && { invoiceNumber: item.invoiceNumber }),
      ...(item.contractorId && { contractorId: item.contractorId })
    });
    
    // Update the global inventory array
    const index = window.inventory.findIndex(u => u.chargerId === item.chargerId);
    if (index >= 0) {
      window.inventory[index] = item;
    } else {
      window.inventory.push(item);
    }
  }, 'item update');
}

function listenToInventoryUpdates() {
  if (inventoryUnsubscribe) {
    inventoryUnsubscribe();
  }
  
  const colRef = collection(db, "inventory");
  inventoryUnsubscribe = onSnapshot(colRef, 
    debounce((snapshot) => {
      try {
        window.inventory = snapshot.docs.map(doc => ({ chargerId: doc.id, ...doc.data() }));
        if (document.body.dataset.page === "inventory" && 
            document.getElementById('main-content') && 
            !window.isInitialLoad) {
          renderTableRows();
        }
      } catch (error) {
        console.error('Real-time update failed:', error);
        showToast('Connection issue - please refresh', 'yellow');
      }
    }, 500),
    (error) => {
      console.error('Firestore listener error:', error);
      showToast('Database connection lost - please refresh', 'red');
    }
  );
}

// Add cache cleanup when leaving page:
window.addEventListener('beforeunload', () => {
  if (inventoryUnsubscribe) {
    inventoryUnsubscribe();
  }
  // Clear search cache
  window._globalSearchCache = null;
});

async function safeFirebaseOperation(operation, operationName) {
  try {
    return await operation();
  } catch (error) {
    console.error(`Firebase ${operationName} failed:`, error);
    showToast(`Database error: ${operationName} failed. Please try again.`, 'red');
    throw error;
  }
}

function validateInventoryItem(item) {
  const required = ['chargerId', 'location', 'status'];
  const missing = required.filter(field => !item[field] || item[field].trim() === '');
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
  
  if (item.chargerId.length > 50) {
    throw new Error('Charger ID too long (max 50 characters)');
  }
  
  return true;
}

function debounceSubmit(element, delay = 2000) {
  if (element.dataset.submitting === 'true') {
    showToast('Please wait, processing...', 'yellow');
    return false;
  }
  
  element.dataset.submitting = 'true';
  setTimeout(() => {
    element.dataset.submitting = 'false';
  }, delay);
  
  return true;
}

// 3) Load entire audit log from Firestore
export async function loadAuditLog() {
  const colRef = collection(db, "auditLog");
  const q = query(colRef, orderBy("date", "asc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// 4) Save (append) an array of audit entries into Firestore
// Replace the saveAuditLog function around line 220:
export async function saveAuditLog(newEntries) {
  if (!newEntries || newEntries.length === 0) {
    console.warn('No audit entries to save');
    return;
  }

  try {
    const batch = writeBatch(db);
    const colRef = collection(db, "auditLog");

    newEntries.forEach(entry => {
      const docRef = doc(colRef);
      batch.set(docRef, {
        date: entry.date || new Date().toISOString(),
        action: entry.action || "Unknown Action",
        chargerId: entry.chargerId || "",
        chargerSerial: entry.chargerSerial || "",
        simNumber: entry.simNumber || "",
        product: entry.product || "",
        from: entry.from || "",
        to: entry.to || "",
        statusFrom: entry.statusFrom || "",
        statusTo: entry.statusTo || "",
        user: entry.user || getCurrentUserEmail(),
        comment: entry.comment || "",
        contractorId: entry.contractorId || "",
        contractorName: entry.contractorName || ""
      });
    });

    await batch.commit();
    console.log(`Successfully saved ${newEntries.length} audit log entries`);
  } catch (error) {
    console.error('Failed to save audit log:', error);
    showToast('Warning: Action completed but audit log failed to save', 'yellow');
    // Don't throw - let the main action succeed even if audit fails
  }
}

window.selectedUnits = [];
window.inventoryPage = 1;
window.inventoryPageSize = 30;


const locationColors = {
  "Back Warehouse": { bg: "#f1f5ff", color: "#3b4252" },
  "Technician/Contractor":    { bg: "#f0fdf4", color: "#166534" },
  "Customer":       { bg: "#fef9c3", color: "#92400e" },
  "Public":         { bg: "#fce7f3", color: "#8b5cf6" },
  // Add others and sublocations as needed:
  "Back Warehouse - Container 1": { bg: "#def7ec", color: "#047857" },
  "Back Warehouse - Container 2": { bg: "#fde2e4", color: "#b91c1c" }
  // Fallback:
  // ...
};
function getLocationColor(loc) {
  if (!loc) return { bg: "#f3f4f6", color: "#1f2937" };
  let normalized = loc.trim();
  // Exact match
  if (locationColors[normalized]) return locationColors[normalized];
  // Partial match (for sublocations)
  for (let key in locationColors) {
    if (normalized.startsWith(key)) return locationColors[key];
  }
  return { bg: "#f3f4f6", color: "#1f2937" };
}

  const statusColors = {
    "In Stock":      { bg: "#e0f7fa",    color: "#00838f" },
    "Installed":     { bg: "#e1ffe6",    color: "#1b5e20" },
    "Reserved":      { bg: "#fff9c4",    color: "#827717" },
    "Faulty":        { bg: "#ffebee",    color: "#c62828" },
    "RMA":           { bg: "#e1bee7",    color: "#6a1b9a" },
    "Demo":          { bg: "#e3f2fd",    color: "#1565c0" },
    "Loaner":        { bg: "#f3e5f5",    color: "#4527a0" },
    "Decommissioned":{ bg: "#cfd8dc",    color: "#37474f" },
    "Lost":          { bg: "#ffe0b2",    color: "#ef6c00" },
    // Add or adjust as needed
  };
  function getStatusColor(status) {
    return statusColors[status] || { bg: "#ececec", color: "#888" };
  }

  function isContractorLocation(loc, contractorLocations, installedLocations) {
    if (!loc) return false;
    if (contractorLocations.map(l => l.name).includes(loc)) return true;
    // Fallback: treat any location that is not warehouse/installed as contractor
    if (
      loc !== "Back Warehouse" &&
      !installedLocations.includes(loc)
    ) {
      return true;
    }
    return false;
  }

  async function getAllLocationsWithContractors() {
    const settings = await loadSettings();
    const contractorLocations = (settings.contractors || []).map(c => ({
      name: c.name,
      parent: "contractor", // Changed from "Contractor/Technician" to match the parent container ID
      isContractor: true,
      company: c.company,
      phone: c.phone,
      id: c.id,
    }));
    return [...(settings.locations || []), ...contractorLocations];
  }


function attachHoverLegend(btn, text) {
    if (!btn) return;
    btn.onmouseenter = e => {
      const legend = document.getElementById('hoverLegend');
      if (!legend) return;
      legend.textContent = text;
      // Set position BEFORE showing
      const rect = btn.getBoundingClientRect();
      legend.style.left = (rect.left - legend.offsetWidth - 16) + 'px';
      legend.style.top = (rect.top + rect.height / 2 - legend.offsetHeight / 2) + 'px';
      legend.classList.remove('hidden');
      legend.classList.add('show');
    };
    btn.onmousemove = e => {
      const legend = document.getElementById('hoverLegend');
      if (!legend) return;
      const rect = btn.getBoundingClientRect();
      legend.style.left = (rect.left - legend.offsetWidth - 16) + 'px';
      legend.style.top = (rect.top + rect.height / 2 - legend.offsetHeight / 2) + 'px';
    };
    btn.onmouseleave = () => {
      const legend = document.getElementById('hoverLegend');
      if (!legend) return;
      legend.classList.remove('show');
      legend.classList.add('hidden');
    };
  }
  
  
// UI State
window.inventory = [];

let cachedProducts = null;
let cachedLocations = null;


window.openBulkAddDialog = async function() {
  if (!(await canManageInventory())) {
    showToast("You don't have permission to manage inventory", "red");
    return;
  }
  const settings = await loadSettings();
  const dialog = document.getElementById('actionDialog');
  const userRole = await getCurrentUserRole();

  dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-3 w-full sm:w-[32rem] max-w-2xl">
    <h3 class="font-bold mb-2">Bulk Add Units</h3>
    <div class="text-sm text-gray-600 mb-2">
      Paste columns: <b>Model</b>, <b>Charger ID, Serial, SIM Number, Comment</b> (one per line)<br>
      <b>Example:</b> SMART HOME MINI WALLBOX 5m Cable, 0312108101120001,TSAC03-24120109,89354080012345678901,<span class="text-blue-700">belongs to Johnn - 50st LA</span>
    </div>
    <label>Default Location:
      <select id="bulkLocation" class="border px-2 py-1 rounded w-full">
      ${(settings.locations || []).map(loc => `<option value="${loc.name}" ${loc.name === 'Back Warehouse' ? 'selected' : ''}>${loc.name}</option>`).join("")}
      </select>
    </label>
    <label>Default Status:
      <select id="bulkStatus" class="border px-2 py-1 rounded w-full">
      ${(settings.statuses || [])
        .filter(s => {
          // Filter out restricted statuses for non-admins
          if (userRole === 'Agent') {
            return !['Decommissioned', 'Lost'].includes(s);
          }
          return true;
        })
        .map(s => `<option value="${s}" ${s === 'In Stock' ? 'selected' : ''}>${s}</option>`).join("")}
      </select>
    </label>
    <label>Default Comment (optional):
      <textarea id="bulkComment" rows="2" class="border px-2 py-1 rounded w-full" placeholder="Optional comment for all items"></textarea>
    </label>
    <textarea id="bulkText" rows="7" class="border px-2 py-1 rounded w-full" placeholder="Paste here"></textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Add All</button>
    </div>
  </form>
`;
  dialog.showModal();

  dialog.addEventListener('click', function(e) {
    if (e.target === dialog) dialog.close();
  });

  dialog.querySelector('button[value="cancel"]').onclick = e => { e.preventDefault(); dialog.close(); };
  
  dialog.querySelector('form').onsubmit = async e => {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[value="ok"]');
    if (!debounceSubmit(submitBtn)) return;

    const rows = dialog.querySelector("#bulkText").value.trim().split("\n");
    const defaultLocation = dialog.querySelector("#bulkLocation").value;
    const defaultStatus = dialog.querySelector("#bulkStatus").value;
    const defaultComment = dialog.querySelector("#bulkComment").value.trim();
  
    dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>`;
  
    let items = [...window.inventory];
    let added = 0;
    let existingIds = new Set(items.map(i => i.chargerId));
  
    for (let row of rows) {
      let [model, chargerId, chargerSerial, simNumber, comment] = row.split(/\t|,/).map(v => v?.trim());
      if (!chargerId || existingIds.has(chargerId)) continue;
      existingIds.add(chargerId);
      
      const newItem = {
        chargerId,
        chargerSerial: chargerSerial || "",
        simNumber: simNumber || "",
        model: model || "",
        product: model || "",
        location: defaultLocation,
        status: defaultStatus,
        assigned: false,
        created: new Date().toISOString(),
        addedBy: getCurrentUserEmail(),
        lastAction: new Date().toISOString(),
        notes: comment || defaultComment
      };
      
      // ADD VALIDATION HERE:
      try {
        validateInventoryItem(newItem);
        items.push(newItem);
        added++;
      } catch (error) {
        console.warn(`Skipping invalid item ${chargerId}:`, error.message);
        showToast(`Skipped invalid item ${chargerId}: ${error.message}`, 'yellow');
      }
    }
  
  // Replace lines 450-457 with:
for (const item of items.slice(window.inventory.length)) {
  await updateSingleItem(item);
}

// Create audit log entries for bulk add
const newEntries = items.slice(window.inventory.length).map(item => ({
  date: new Date().toISOString(),
  action: "Bulk Add",
  chargerId: item.chargerId,
  chargerSerial: item.chargerSerial,
  simNumber: item.simNumber,
  product: item.product,
  from: "",
  to: item.location,
  statusFrom: "",
  statusTo: item.status,
  user: getCurrentUserEmail(),
  comment: item.notes
}));

try {
  await saveAuditLog(newEntries);
  console.log('Bulk add audit entries saved:', newEntries.length);
} catch (error) {
  console.error('Failed to save bulk add audit log:', error);
  showToast('Warning: Items added but audit log failed', 'yellow');
}

showToast(`Bulk added ${added} units`, "green");
dialog.close();
window.inventory = items;
renderInventoryTable(document.getElementById('main-content'));
};
  }; 

  window.bulkDelete = async function() {
    if (!(await canDeleteItems())) {
      showToast("You don't have permission to delete items", "red");
      return;
    }

    if (!confirm(`Are you sure you want to delete ${window.selectedUnits.length} unit(s)?`)) return;
  
    // Use batch delete
    const batch = writeBatch(db);
    window.selectedUnits.forEach(chargerId => {
      batch.delete(doc(db, "inventory", chargerId));
    });
    await batch.commit();
  
    // Update local inventory
    window.inventory = window.inventory.filter(i => !window.selectedUnits.includes(i.chargerId));
  
    // Log deletions
    const newEntries = window.selectedUnits.map(chargerId => ({
      date: new Date().toISOString(),
      action: "Bulk Delete",
      chargerId,
      user: getCurrentUserEmail()
    }));
    await saveAuditLog(newEntries);
  
    showToast(`Deleted ${window.selectedUnits.length} unit(s)`, "red");
    window.selectedUnits = [];
    renderInventoryTable(document.getElementById('main-content'));
  };

  window.clearBulkSelection = function() {
    window.selectedUnits = [];
    renderTableRows();
    renderBulkActionBar();
  };

  window.toggleRowMenu = function(idx) {
    // Hide all other menus
    document.querySelectorAll('.table-dot-menu').forEach((el, i) => {
      if (i !== idx) el.classList.remove('show');
    });
    // Toggle this one
    const menu = document.getElementById(`row-menu-${idx}`);
    if (menu) menu.parentNode.classList.toggle('show');
    // Close on outside click
    document.addEventListener('click', function closeMenu(e) {
      if (!menu.contains(e.target)) {
        menu.parentNode.classList.remove('show');
        document.removeEventListener('click', closeMenu);
      }
    });
  };

  window.openCreateShipmentDialog = function() {
    if (typeof window.openShipmentDialog === "function") {
      window.openShipmentDialog();
    } else if (typeof openShipmentDialog === "function") {
      openShipmentDialog();
    } else {
      showToast("Shipment dialog function not found", "red");
    }
  };

  async function injectInventoryFABs() {
    const isSuper = await isSuperAdmin();
    // Remove FABs if on mobile or not SuperAdmin
    if (window.innerWidth < 640 || !isSuper) {
      ['addItemBtn', 'bulkAddBtn', 'addShipmentBtn'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.remove();
      });
      return;
    }
  
    // Prevent duplicates: check all three
    if (
      document.getElementById('addItemBtn') ||
      document.getElementById('bulkAddBtn') ||
      document.getElementById('addShipmentBtn')
    ) return;
  
    const fabHTML = `
    <button id="addShipmentBtn"
      class="fixed bottom-48 right-8 z-40 bg-green-600 hover:bg-green-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-3xl transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9" fill="none" viewBox="0 0 32 32" stroke="currentColor">
        <rect x="10" y="10" width="12" height="6" rx="2" fill="#bbf7d0" stroke="white" stroke-width="2"/>
        <rect x="13" y="6" width="6" height="4" rx="1" fill="#4ade80" stroke="white" stroke-width="2"/>
        <path d="M4 22c2 3 6 5 12 5s10-2 12-5l-12-4-12 4z" fill="#22d3ee" stroke="white" stroke-width="2"/>
        <path d="M8 25c1 1 3 2 8 2s7-1 8-2" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
        <circle cx="16" cy="18" r="1.5" fill="white"/>
      </svg>
    </button>
    <button id="bulkAddBtn"
      class="fixed bottom-28 right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-3xl transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="7" y="7" width="10" height="10" rx="2" fill="#3b82f6" stroke="white" stroke-width="2"/>
        <rect x="3" y="3" width="10" height="10" rx="2" fill="#60a5fa" stroke="white" stroke-width="2" opacity="0.7"/>
        <path d="M12 12v4m2-2h-4" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <button id="addItemBtn"
      class="fixed bottom-8 right-8 z-40 bg-purple-600 hover:bg-purple-700 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg text-3xl transition">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" fill="#a78bfa" stroke="white" stroke-width="2"/>
        <path d="M12 8v8m4-4H8" stroke="white" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
      <dialog id="addItemDialog" class="rounded-xl p-4"></dialog>
      <dialog id="actionDialog" class="rounded-xl p-4"></dialog>
      <dialog id="shipmentDialog" class="rounded-xl p-4"></dialog>
      <dialog id="globalSearchDialog" class="rounded-xl p-4"></dialog>
      <dialog id="barcodeScanDialog" class="rounded-xl p-4"></dialog>
  `;
  document.body.insertAdjacentHTML('beforeend', fabHTML);

  const addItemBtn = document.getElementById("addItemBtn");
  const bulkAddBtn = document.getElementById("bulkAddBtn");
  const addShipmentBtn = document.getElementById("addShipmentBtn");
  
  if (addItemBtn) addItemBtn.onclick = () => showAddItemDialog(); // Add arrow function
  if (bulkAddBtn) bulkAddBtn.onclick = window.openBulkAddDialog;
  if (addShipmentBtn) addShipmentBtn.onclick = window.openCreateShipmentDialog;

  if (!document.getElementById('barcodeScanDialog')) {
    const scanDialog = document.createElement('dialog');
    scanDialog.id = 'barcodeScanDialog';
    scanDialog.className = 'rounded-xl p-4';
    document.body.appendChild(scanDialog);
  }
}
  
// Initial load
document.addEventListener('DOMContentLoaded', async () => {
  if (document.body.dataset.page === "inventory") {
    window.isInitialLoad = true;
    
    // 1. Load data first
    window.inventory = await loadInventory();
    
    // 2. Render UI components
    injectInventoryFABs();
    renderInventoryTable(document.getElementById('main-content'));

    // 3. Force resize event for layout adjustments
    window.dispatchEvent(new Event('resize'));

    // 4. Initialize all event handlers and listeners in proper sequence
    setTimeout(() => {
      // Attach download handlers explicitly AFTER DOM is stable
      attachDownloadHandlers();
      
      // Initialize search functionality
      initializeInventorySearch();
      
      // Attach hover legends
      attachHoverLegends();
      
      // Handle pending actions
      handlePendingActions();
      
      // Mark initial load complete and start real-time updates
      window.isInitialLoad = false;
      listenToInventoryUpdates();
    }, 150); // Slightly reduced timeout but still safe
  }
});

// Add this new function to handle download button attachment
function attachDownloadHandlers() {
  const main = document.getElementById('main-content');
  if (!main) {
    console.log('Main content not found for download handlers');
    return;
  }
  
  const csvBtn = main.querySelector('#downloadCSV');
  const excelBtn = main.querySelector('#downloadExcel');

  if (csvBtn && !csvBtn.onclick) { // Prevent double-binding
    csvBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('CSV download triggered');
      try {
        if (typeof window.downloadInventoryCSV === 'function') {
          window.downloadInventoryCSV();
        } else {
          console.error('downloadInventoryCSV function not found');
          showToast('CSV download function not available', 'red');
        }
      } catch (error) {
        console.error('CSV download error:', error);
        showToast('CSV download failed: ' + error.message, 'red');
      }
    };
    console.log('CSV download handler attached');
  }

  if (excelBtn && !excelBtn.onclick) { // Prevent double-binding
    excelBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Excel download triggered');
      try {
        if (typeof window.downloadInventoryExcel === 'function') {
          window.downloadInventoryExcel();
        } else {
          console.error('downloadInventoryExcel function not found');
          showToast('Excel download function not available', 'red');
        }
      } catch (error) {
        console.error('Excel download error:', error);
        showToast('Excel download failed: ' + error.message, 'red');
      }
    };
    console.log('Excel download handler attached');
  }
}

// Add this new function to handle hover legends
function attachHoverLegends() {
  const addItemBtn = document.getElementById("addItemBtn");
  const bulkAddBtn = document.getElementById("bulkAddBtn");
  const addShipmentBtn = document.getElementById("addShipmentBtn");
  
  attachHoverLegend(addItemBtn, "Add single charger");
  attachHoverLegend(bulkAddBtn, "Bulk add chargers");
  attachHoverLegend(addShipmentBtn, "Create shipment");
}

// Add this new function to handle pending actions
function handlePendingActions() {
  const pendingAction = sessionStorage.getItem('pendingInventoryAction');
  if (pendingAction) {
    const { action, unit } = JSON.parse(pendingAction);
    sessionStorage.removeItem('pendingInventoryAction');
    setTimeout(() => {
      if (action === 'move' && typeof window.openMoveDialog === "function") {
        window.openMoveDialog(unit);
      }
      if (action === 'edit' && typeof window.openEditDialog === "function") {
        window.openEditDialog(unit);
      }
      if (action === 'view' && typeof window.openDetailsDialog === "function") {
        window.openDetailsDialog(unit);
      }
    }, 300);
  }
}
  
async function getStatusesForLocation(location) {
  const settings = await loadSettings();
  const userRole = await getCurrentUserRole();
  
  // Get allowed statuses for this location
  let allowedStatuses = getAllowedStatusesForLocation(location, settings);
  
  // If no location-specific restrictions, use all statuses
  if (!allowedStatuses || allowedStatuses.length === 0) {
    allowedStatuses = settings.statuses || [];
  }
  
  // Further restrict based on user role if needed
  if (userRole === 'Agent') {
    // Agents might not be able to set certain statuses
    allowedStatuses = allowedStatuses.filter(status => 
      !['Decommissioned', 'Lost'].includes(status)
    );
  }
  
  return allowedStatuses;
}



function renderInventoryTable(main) {
  if (shouldUseMobileLayout()) {
    renderInventoryMobile(main, window.inventory);
    return;
  }
  
  main.innerHTML = `
    <div class="flex flex-wrap gap-3 mb-4 items-center">
      <input id="searchInput" type="text" placeholder="Search Anything" class="border px-3 py-1 rounded" style="min-width:200px;">

            <!-- Multi-select Status Filter -->
      <div class="relative">
        <button id="statusFilterBtn" class="border px-3 py-1 rounded bg-white flex items-center gap-2 min-w-32">
          <span id="statusFilterText">All Statuses</span>
          <span>▼</span>
        </button>
        <div id="statusFilterDropdown" class="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg z-50 hidden min-w-48 max-h-60 overflow-y-auto">
          <div class="p-2 border-b">
            <label class="flex items-center gap-2 text-sm font-semibold">
              <input type="checkbox" id="selectAllStatuses">
              Select All
            </label>
          </div>
          <div id="statusCheckboxes" class="p-2 space-y-1"></div>
        </div>
      </div>
      
      <!-- Multi-select Location Filter -->
      <div class="relative">
        <button id="locationFilterBtn" class="border px-3 py-1 rounded bg-white flex items-center gap-2 min-w-32">
          <span id="locationFilterText">All Locations</span>
          <span>▼</span>
        </button>
        <div id="locationFilterDropdown" class="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg z-50 hidden min-w-48 max-h-60 overflow-y-auto">
          <div class="p-2 border-b">
            <label class="flex items-center gap-2 text-sm font-semibold">
              <input type="checkbox" id="selectAllLocations">
              Select All
            </label>
          </div>
          <div id="locationCheckboxes" class="p-2 space-y-1"></div>
        </div>
      </div>
      
      <button id="downloadCSV" class="bg-gray-200 px-3 py-1 rounded">Download CSV</button>
      <button id="downloadExcel" class="bg-gray-200 px-3 py-1 rounded">Download Excel</button>
    </div>
    <div class="inventory-scroll-area min-h-[340px] overflow-x-auto" style="max-height:70vh;">
      <div class="min-w-max">
        <table class="w-full table-auto border rounded-xl bg-white dark:bg-gray-900 shadow" style="min-width: 1200px;">
          <thead class="table-header">
            <tr>
              <th class="p-2 border-b w-12 resize-x overflow-hidden"><input type="checkbox" id="selectAll"></th>
              <th class="p-2 border-b min-w-32 resize-x overflow-hidden">Model</th>
              <th class="p-2 border-b min-w-32 resize-x overflow-hidden">Charger ID</th>
              <th class="p-2 border-b min-w-24 resize-x overflow-hidden">Serial</th>
              <th class="p-2 border-b min-w-28 resize-x overflow-hidden">SIM Number</th>
              <th class="p-2 border-b min-w-20 resize-x overflow-hidden">Status</th>
              <th class="p-2 border-b min-w-24 resize-x overflow-hidden">Location</th>
              <th class="p-2 border-b min-w-32 resize-x overflow-hidden">Comment</th>
              <th class="p-2 border-b min-w-32 resize-x overflow-hidden">Last Action</th>
              <th class="p-2 border-b w-20">Actions</th>
            </tr>
          </thead>
          <tbody id="inventoryTableBody"></tbody>
        </table>
      </div>
    </div>
    <div id="bulkActionBar"></div>
    <div id="paginationBar"></div>
  `;

    if (!window.inventoryFilters) {
      window.inventoryFilters = {
        selectedStatuses: new Set(),
        selectedLocations: new Set()
      };
    }

    // First render the table rows
        renderTableRows();
    
    // Then initialize search after DOM is ready
    setTimeout(() => {
      initializeInventorySearch();
      initializeMultiSelectFilters();
    }, 50);
  }

  window.addEventListener('resize', () => {
    const newMode = shouldUseMobileLayout() ? 'mobile' : 'desktop';
    if (newMode !== currentLayoutMode) {
      currentLayoutMode = newMode;
      injectInventoryFABs();
      
      // Re-render the table
      renderInventoryTable(document.getElementById('main-content'));
      
      // Re-attach download handlers after re-render
      setTimeout(() => {
        attachDownloadHandlers();
      }, 100);
    }
  });

function initializeMultiSelectFilters() {
  const main = document.getElementById('main-content');
  if (!main) return;

  // Get unique values
  const allStatuses = [...new Set(window.inventory.map(i => i.status))].filter(Boolean).sort();
  const allLocations = [...new Set(window.inventory.map(i => i.location))].filter(Boolean).sort();

  // Setup status filter
  setupMultiSelectFilter('status', allStatuses, 'Status');
  setupMultiSelectFilter('location', allLocations, 'Location');

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#statusFilterBtn') && !e.target.closest('#statusFilterDropdown')) {
      document.getElementById('statusFilterDropdown')?.classList.add('hidden');
    }
    if (!e.target.closest('#locationFilterBtn') && !e.target.closest('#locationFilterDropdown')) {
      document.getElementById('locationFilterDropdown')?.classList.add('hidden');
    }
  });
}

function setupMultiSelectFilter(type, allValues, label) {
  const btn = document.getElementById(`${type}FilterBtn`);
  const dropdown = document.getElementById(`${type}FilterDropdown`);
  const checkboxes = document.getElementById(`${type}Checkboxes`);
  const selectAll = document.getElementById(`selectAll${type === 'status' ? 'Statuses' : 'Locations'}`);

  if (!btn || !dropdown || !checkboxes || !selectAll) return;

    // Populate checkboxes
    checkboxes.innerHTML = allValues.map(value => `
      <label class="flex items-center gap-2 text-sm hover:bg-gray-50 p-1 rounded cursor-pointer">
        <input type="checkbox" value="${value}" class="${type}-checkbox">
        ${value}
      </label>
    `).join('');
  
    // Button click
    btn.onclick = (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('hidden');
      // Close other dropdown
      const otherType = type === 'status' ? 'location' : 'status';
      document.getElementById(`${otherType}FilterDropdown`)?.classList.add('hidden');
    };
  
    // Select all checkbox
    selectAll.onchange = (e) => {
      const checkboxList = checkboxes.querySelectorAll(`.${type}-checkbox`);
      const propertyName = type === 'status' ? 'selectedStatuses' : 'selectedLocations';
      
      if (e.target.checked) {
        checkboxList.forEach(cb => {
          cb.checked = true;
          window.inventoryFilters[propertyName].add(cb.value);
        });
      } else {
        checkboxList.forEach(cb => {
          cb.checked = false;
          window.inventoryFilters[propertyName].delete(cb.value);
        });
      }
      updateFilterUI();
      window.inventoryPage = 1;
      renderTableRows();
    };

   // Individual checkboxes
   checkboxes.addEventListener('change', (e) => {
    if (e.target.classList.contains(`${type}-checkbox`)) {
      const propertyName = type === 'status' ? 'selectedStatuses' : 'selectedLocations';
      
      if (e.target.checked) {
        window.inventoryFilters[propertyName].add(e.target.value);
      } else {
        window.inventoryFilters[propertyName].delete(e.target.value);
      }
      
      // Update select all state
      const allCheckboxList = checkboxes.querySelectorAll(`.${type}-checkbox`);
      const checkedCheckboxList = checkboxes.querySelectorAll(`.${type}-checkbox:checked`);
      selectAll.checked = allCheckboxList.length === checkedCheckboxList.length;
      selectAll.indeterminate = checkedCheckboxList.length > 0 && checkedCheckboxList.length < allCheckboxList.length;
      
      updateFilterUI();
      window.inventoryPage = 1;
      renderTableRows();
    }
  });
}

function updateFilterUI() {
  // Update status button text
  const statusText = document.getElementById('statusFilterText');
  if (statusText) {
    const count = window.inventoryFilters.selectedStatuses.size;
    statusText.textContent = count === 0 ? 'All Statuses' : 
                            count === 1 ? [...window.inventoryFilters.selectedStatuses][0] : 
                            `${count} Statuses`;
  }

  // Update location button text
  const locationText = document.getElementById('locationFilterText');
  if (locationText) {
    const count = window.inventoryFilters.selectedLocations.size;
    locationText.textContent = count === 0 ? 'All Locations' : 
                              count === 1 ? [...window.inventoryFilters.selectedLocations][0] : 
                              `${count} Locations`;
  }
}

  // Add this function after the renderInventoryTable function
  function initializeInventorySearch() {
    const main = document.getElementById('main-content');
    if (!main) return;
    
    const searchInput = main.querySelector('#searchInput');
    
    if (!searchInput) {
      console.log('Search elements not found, retrying...');
      setTimeout(initializeInventorySearch, 100);
      return;
    }
    
    // Simple direct event listeners - no cloning needed
    searchInput.oninput = debounce(() => {
      window.inventoryPage = 1;
      renderTableRows();
    }, 250);
    
    console.log('Search functionality initialized');
  }
  

// Fix the renderTableRows function to properly handle async permissions
async function renderTableRows() {
  const main = document.getElementById('main-content');
  if (!main) return; 
  const canDelete = await canDeleteItems();
  const searchInput = main.querySelector('#searchInput');
  const tbody = main.querySelector('#inventoryTableBody');
  if (!searchInput || !tbody) return;
  const q = searchInput.value.toLowerCase();
    
      let filtered = window.inventory;
      
      // Apply search filter
      if (q) {
        filtered = filtered.filter(i => {
          const allFields = [
            i.chargerId, i.chargerSerial, i.simNumber, i.product, i.model, i.status,
            i.location, i.notes, i.lastAction, i.addedBy, i.invoiceNumber
          ];
          return allFields.some(field => (field || '').toLowerCase().includes(q));
        });
      }
      
      // Apply status filter (NEW MULTI-SELECT LOGIC)
      if (window.inventoryFilters?.selectedStatuses.size > 0) {
        filtered = filtered.filter(i => window.inventoryFilters.selectedStatuses.has(i.status));
      }
      
      // Apply location filter (NEW MULTI-SELECT LOGIC)
      if (window.inventoryFilters?.selectedLocations.size > 0) {
        filtered = filtered.filter(i => window.inventoryFilters.selectedLocations.has(i.location));
      }
    
      const pageSize = window.inventoryPageSize;
      const page = window.inventoryPage;
      const startIdx = (page - 1) * pageSize;
      const endIdx = startIdx + pageSize;
      const paginated = filtered.slice(startIdx, endIdx);
  
    // Only keep selectedUnits that are visible in the filtered list
    window.selectedUnits = window.selectedUnits.filter(id => window.inventory.some(i => i.chargerId === id));
    // Render table rows
    tbody.innerHTML = paginated.map((unit, idx) => `
    <tr class="inv-row${window.selectedUnits.includes(unit.chargerId) ? ' selected' : ''}" data-idx="${idx}" data-id="${unit.chargerId}">
        <td class="p-2 border-b text-center">
          <input type="checkbox" data-chargerid="${unit.chargerId}" ${window.selectedUnits.includes(unit.chargerId) ? "checked" : ""}>
        </td>
        <td class="p-2 border-b table-cell">${unit.model || ""}</td>
        <td class="p-2 border-b table-cell">${unit.chargerId}</td>
        <td class="p-2 border-b table-cell">${unit.chargerSerial || ""}</td>
        <td class="p-2 border-b table-cell">${unit.simNumber || ""}</td>
        <td class="p-2 border-b table-cell">
          <span class="rounded-full px-3 py-1 text-xs font-semibold"
            style="
              background:${getStatusColor(unit.status).bg};
              color:${getStatusColor(unit.status).color};
              display:inline-block;
              min-width:86px;
              text-align:center;
              letter-spacing:0.03em;
              box-shadow:0 1px 3px 0 #0001;
            "
          >${unit.status}</span>
        </td>
        <td class="p-2 border-b table-cell">
          <span class="rounded-full px-3 py-1 text-xs font-semibold"
            style="
              background:${getLocationColor(unit.location).bg};
              color:${getLocationColor(unit.location).color};
              min-width: 86px;
              display:inline-block;
              text-align:center;
              letter-spacing:0.03em;
              box-shadow:0 1px 3px 0 #0001;
            "
          >${unit.location}</span>
        </td>
        <td class="p-2 border-b table-cell text-xs text-gray-600 max-w-32 truncate" title="${unit.notes || ''}">${unit.notes || '-'}</td>
        <td class="p-2 border-b table-cell">${new Date(unit.lastAction).toLocaleString()}</td>
        <td class="p-2 border-b text-center relative table-dot-menu">
          <button class="px-2 py-1 text-lg font-bold" onclick="event.stopPropagation();toggleRowMenu(${idx})">⋮</button>
          <div class="table-dot-menu-content" id="row-menu-${idx}">
            <button onclick="openDetailsDialog(${escapeForHTML(unit)})">Details</button>
            <button onclick="openMoveDialog(${escapeForHTML(unit)})">Move</button>
            <button onclick="openStatusDialog(${escapeForHTML(unit)})">Change Status</button>
            <button onclick="openEditDialog(${escapeForHTML(unit)})">Edit</button>
            ${canDelete ? `<button class="delete" onclick='deleteUnit("${unit.chargerId}")'>Delete</button>` : ""}
          </div>
        </td>
        </div>
      </td>
    </tr>
  `).join("");
  
    // Menu logic
    tbody.querySelectorAll('.table-dot-menu > button').forEach((btn, idx) => {
      btn.onclick = (e) => {
        e.stopPropagation();
        document.querySelectorAll('.table-dot-menu').forEach((m, j) => {
          if (j !== idx) m.classList.remove('show');
        });
        btn.parentNode.classList.toggle('show');
        // Close on outside click
        document.addEventListener('click', function closeMenu(ev) {
          if (!btn.parentNode.contains(ev.target)) {
            btn.parentNode.classList.remove('show');
            document.removeEventListener('click', closeMenu);
          }
        });
      };
    });
  
    // Checkbox logic (row)
    tbody.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.onchange = (e) => {
        const chargerId = e.target.dataset.chargerid;
        if (e.target.checked) {
          if (!window.selectedUnits.includes(chargerId)) {
            window.selectedUnits.push(chargerId);
          }
        } else {
          window.selectedUnits = window.selectedUnits.filter(id => id !== chargerId);
        }
        renderBulkActionBar();
        cb.closest('tr').classList.toggle('selected', cb.checked);
      };
    });
  
    // Select All logic (only for visible page)
    const selectAll = main.querySelector('#selectAll');
if (selectAll) {
  const allPageItemsSelected = paginated.length > 0 && paginated.every(unit => window.selectedUnits.includes(unit.chargerId));
  
  selectAll.checked = allPageItemsSelected;
  selectAll.indeterminate = !allPageItemsSelected && paginated.some(unit => window.selectedUnits.includes(unit.chargerId));
  
  selectAll.onchange = (e) => {
    if (e.target.checked) {
      paginated.forEach(unit => {
        if (!window.selectedUnits.includes(unit.chargerId)) {
          window.selectedUnits.push(unit.chargerId);
        }
      });
    } else {
      window.selectedUnits = [];
    }
    renderTableRows(); // re-render to update checked
    renderBulkActionBar();
  };
}
  
    // Pagination controls
    const paginationBar = main.querySelector('#paginationBar');
    const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
    const startRecord = Math.min(startIdx + 1, filtered.length);
    const endRecord = Math.min(endIdx, filtered.length);
    
    paginationBar.innerHTML = `
  <div class="flex flex-col items-center gap-3 py-4">
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <div class="flex items-center gap-2">
        <button id="prevPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}" ${page === 1 ? 'disabled' : ''}>Prev</button>
        <span id="pageNumSpan" class="font-semibold">Page ${page} of ${pageCount}</span>
        <button id="nextPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${page === pageCount ? 'opacity-50 cursor-not-allowed' : ''}" ${page === pageCount ? 'disabled' : ''}>Next</button>
      </div>
      <label class="flex items-center gap-1 text-sm">
        Show
        <select id="pageSizeSelect" class="border px-2 py-1 rounded">
          <option value="30" ${pageSize === 30 ? 'selected' : ''}>30</option>
          <option value="50" ${pageSize === 50 ? 'selected' : ''}>50</option>
          <option value="100" ${pageSize === 100 ? 'selected' : ''}>100</option>
        </select>
        entries per page
      </label>
    </div>
    <div class="text-sm text-gray-600 dark:text-gray-400 text-center">
      Showing ${startRecord} to ${endRecord} of ${filtered.length} entries
      ${filtered.length !== window.inventory.length ? ` (filtered from ${window.inventory.length} total)` : ''}
    </div>
  </div>
`;
  
    // Pagination event handlers
    main.querySelector('#prevPageBtn').onclick = () => {
      if (window.inventoryPage > 1) {
        window.inventoryPage--;
        renderTableRows();
      }
    };
    main.querySelector('#nextPageBtn').onclick = () => {
      if (window.inventoryPage < pageCount) {
        window.inventoryPage++;
        renderTableRows();
      }
    };
    main.querySelector('#pageSizeSelect').onchange = (e) => {
      window.inventoryPageSize = parseInt(e.target.value, 10);
      window.inventoryPage = 1;
      renderTableRows();
    };
  
    renderBulkActionBar();
  }

  function ensureDialogs() {
    ['addItemDialog', 'actionDialog', 'shipmentDialog', 'globalSearchDialog', 'moveDialog', 'editDialog', 'barcodeScanDialog'].forEach(id => {
      if (!document.getElementById(id)) {
        const dialog = document.createElement('dialog');
        dialog.id = id;
        dialog.className = 'rounded-xl p-4 max-w-md mx-auto';
        document.body.appendChild(dialog);
      }
    });
  }


  function renderInventoryMobile(main, items) {
    ensureDialogs();
    main.innerHTML = `
      <div class="sticky top-0 z-20 bg-white dark:bg-gray-900 p-3 flex gap-2 items-center shadow">
        <input id="searchInput" type="text" placeholder="Search" class="flex-1 border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800" />
        <button id="scanBtn" class="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center" title="Scan Barcode">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <circle cx="12" cy="13.5" r="3.5" />
          </svg>
        </button>
      </div>
      <div id="mobileInventoryList" class="flex flex-col gap-3 mt-3 px-3"></div>
      <button id="fabAdd" class="fixed bottom-6 right-6 bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-3xl z-50">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="white"/>
          <path d="M12 8v8m4-4H8" stroke="white"/>
        </svg>
      </button>
    `;
  
    // Ensure all dialogs exist after clearing main content
    ensureDialogs();
    
    const list = main.querySelector('#mobileInventoryList');
    renderMobileInventoryList(list, items);
  
    // Fix search functionality for mobile
    const searchInput = main.querySelector('#searchInput');
searchInput.oninput = debounce((e) => {
  const q = e.target.value.toLowerCase();
  const filtered = window.inventory.filter(i =>
    [i.chargerId, i.chargerSerial, i.simNumber, i.product, i.model, i.status, i.location, i.notes]
      .some(f => (f || '').toLowerCase().includes(q))
  );
  renderMobileInventoryList(list, filtered);
}, 250);
  
    // Fix scan button logic
    main.querySelector('#scanBtn').onclick = () => {
      if (typeof window.openBarcodeScanner === 'function') {
        window.openBarcodeScanner(result => {
          if (result) {
            const found = window.inventory.find(i => i.chargerSerial === result || i.chargerId === result);
            if (found) {
              // Open the mobile search dialog instead of details
              openMobileSearchDialog(found);
            } else {
              showToast("Not found", "red");
            }
          }
        });
      }
    };
  
    // FAB add logic
    main.querySelector('#fabAdd').onclick = () => {
      if (typeof showAddItemDialog === 'function') {
        showAddItemDialog();
      }
    };
  }

  function openMobileSearchDialog(unit) {
    const dialog = document.getElementById('actionDialog');
    
    // Store unit data globally for the dialog buttons
    window._tempDialogUnit = unit;
    
    dialog.innerHTML = `
      <div class="w-full max-w-sm mx-auto">
        <div class="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">Unit Found</div>
        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
          <div class="font-bold text-lg">${unit.chargerId}</div>
          <div class="text-sm text-gray-600 dark:text-gray-300">${unit.status} • ${unit.location}</div>
          <div class="text-sm text-gray-400">${unit.model || unit.product || ""}${unit.chargerSerial ? " • " + unit.chargerSerial : ""}</div>
        </div>
        <div class="flex flex-col gap-2">
          <button type="button" id="editUnitBtn" class="w-full bg-purple-600 text-white py-2 px-4 rounded">Edit Unit</button>
          <button type="button" id="moveUnitBtn" class="w-full bg-blue-600 text-white py-2 px-4 rounded">Move Unit</button>
          <button type="button" id="viewDetailsBtn" class="w-full bg-green-600 text-white py-2 px-4 rounded">View Details</button>
          <button type="button" id="closeDialogBtn" class="w-full bg-gray-300 dark:bg-gray-700 py-2 px-4 rounded">Close</button>
        </div>
      </div>
    `;
    
  // Attach handlers after DOM creation
  dialog.querySelector('#editUnitBtn').onclick = () => {
    dialog.close();
    if (typeof window.openEditDialog === 'function') {
      window.openEditDialog(window._tempDialogUnit);
    }
  };
  
  dialog.querySelector('#moveUnitBtn').onclick = () => {
    dialog.close();
    if (typeof window.openMoveDialog === 'function') {
      window.openMoveDialog(window._tempDialogUnit);
    }
  };
  
  dialog.querySelector('#viewDetailsBtn').onclick = () => {
    dialog.close();
    if (typeof window.openDetailsDialog === 'function') {
      window.openDetailsDialog(window._tempDialogUnit);
    }
  };
  
  dialog.querySelector('#closeDialogBtn').onclick = () => {
    dialog.close();
  };
  
  dialog.showModal();
  }

  function debounce(fn, delay) {
    let timer = null;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function renderMobileInventoryList(list, items) {
    list.innerHTML = items.map(unit => `
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow flex items-center px-4 py-3 relative mobile-inv-card" data-id="${unit.chargerId}">
                <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
          <svg class="w-7 h-7 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6zm4 2v8h8V8H8zm2 2h4v2h-4v-2zm0 3h4v1h-4v-1z"/>
            <circle cx="8" cy="16" r="1"/>
            <circle cx="16" cy="16" r="1"/>
            <path d="M12 4v2M12 18v2"/>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-bold text-base text-gray-900 dark:text-white truncate">${unit.chargerId}</div>
          <div class="text-xs text-gray-600 dark:text-gray-300">${unit.status} • ${unit.location}</div>
          <div class="text-xs text-gray-400 truncate">${unit.model || unit.product || ""}${unit.chargerSerial ? " • " + unit.chargerSerial : ""}</div>
          ${unit.notes ? `<div class="text-xs text-blue-600 dark:text-blue-400 truncate italic">"${unit.notes}"</div>` : ''}
        </div>
        <button class="ml-2 text-gray-400 hover:text-purple-600 transition-all" onclick="window.openDetailsDialog(${escapeForHTML(unit)})" title="View Details">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M1.5 12s3.5-7 10.5-7 10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="ml-1 text-gray-400 hover:text-green-600 transition-all" onclick="window.openMoveDialog(${escapeForHTML(unit)})" title="Move Unit">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M3 12h18m0 0l-4-4m4 4l-4 4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 6h18M3 18h18" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    `).join('');
  
    setTimeout(() => {
      attachMobileSwipeHandlers(list);
    }, 100);
  }
  
  function attachMobileSwipeHandlers(list) {
    // Get the current filtered items for the mobile list
    const searchInput = document.querySelector('#searchInput');
    const q = searchInput ? searchInput.value.toLowerCase() : '';
    
    let items = window.inventory;
    if (q) {
      items = window.inventory.filter(i =>
        [i.chargerId, i.chargerSerial, i.simNumber, i.product, i.model, i.status, i.location, i.notes]
          .some(f => (f || '').toLowerCase().includes(q))
      );
    }
  
    list.querySelectorAll('.mobile-inv-card').forEach(card => {
      let startX = null;
      let dx = 0;
      let swiped = false;
  
      card.addEventListener('touchstart', (e) => {
        try {
          startX = e.touches[0].clientX;
          dx = 0;
          swiped = false;
          card.style.transition = 'none';
        } catch (err) {
          console.warn('Touch start error:', err);
        }
      }, { passive: true });
  
      card.addEventListener('touchmove', (e) => {
        try {
          if (startX === null) return;
          dx = e.touches[0].clientX - startX;
          card.style.transform = `translateX(${dx}px)`;
  
          if (dx < -50 && !swiped) { // Swipe left for Edit
            swiped = true;
            card.style.transition = 'transform 0.2s';
            card.style.transform = 'translateX(-80px)';
            setTimeout(() => {
              card.style.transform = '';
              const unit = items.find(i => i.chargerId === card.dataset.id);
              if (unit && typeof window.openEditDialog === 'function') {
                window.openEditDialog(unit);
              }
            }, 180);
          } else if (dx > 50 && !swiped) { // Swipe right for Move
            swiped = true;
            card.style.transition = 'transform 0.2s';
            card.style.transform = 'translateX(80px)';
            setTimeout(() => {
              card.style.transform = '';
              const unit = items.find(i => i.chargerId === card.dataset.id);
              if (unit && typeof window.openMoveDialog === 'function') {
                window.openMoveDialog(unit);
              }
            }, 180);
          } 
        } catch (err) {
          console.warn('Touch move error:', err);
        }
      }, { passive: true });
  
      card.addEventListener('touchend', () => {
        try {
          startX = null;
          dx = 0;
          swiped = false;
          card.style.transition = 'transform 0.2s';
          card.style.transform = '';
        } catch (err) {
          console.warn('Touch end error:', err);
        }
      });
    });
  }


  
  async function renderBulkActionBar() {
    const main = document.getElementById('main-content');
    const bar = main.querySelector('#bulkActionBar');
    if (!bar) return;
    if (window.selectedUnits.length === 0) {
      bar.innerHTML = "";
      return;
    }
    
    const canManage = await canManageInventory();
    const canDelete = await canDeleteItems();
    
    if (!canManage) {
      bar.innerHTML = `
        <div class="flex items-center gap-4 p-3 bg-gray-50 rounded-lg mb-4">
          <span class="font-semibold text-gray-500">${window.selectedUnits.length} selected (view only)</span>
          <button onclick="clearBulkSelection()" class="ml-auto text-gray-500 hover:text-gray-900">Cancel</button>
        </div>
      `;
      return;
    }
    
    bar.innerHTML = `
      <div class="flex items-center gap-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg mb-4 shadow">
        <span class="font-semibold">${window.selectedUnits.length} selected</span>
        <button onclick="openBulkMoveDialog()" class="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded">Bulk Move</button>
        <button onclick="openBulkStatusDialog()" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">Bulk Status</button>
        ${canDelete ? `<button onclick="bulkDelete()" class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">Bulk Delete</button>` : ""}
        <button onclick="clearBulkSelection()" class="ml-auto text-gray-500 hover:text-gray-900">Cancel</button>
      </div>
    `;
  }

  window.openBulkMoveDialog = async function() {
    const selected = window.inventory.filter(i => window.selectedUnits.includes(i.chargerId));
    if (!selected.length) return;
  
    const dialog = document.getElementById('actionDialog');
    const locations = await getAllLocationsWithContractors();
    const contractorLocations = (locations || []).filter(l => l.parent === "contractor");
    const installedLocations = locations.filter(l => l.parent === "customer" || l.parent === "public").map(l => l.name);
    const currentLocation = selected[0]?.location;
    let options = "";
  
    if (
      isStorage(currentLocation) ||
      installedLocations.includes(currentLocation)
    ) {
      options = (contractorLocations || []).map(l =>
        `<option value="${l.name}">${l.name}${l.isContractor ? ` (${l.company}, ${l.phone})` : ""}</option>`
      ).join("");
    } else if ((contractorLocations || []).map(l => l.name).includes(currentLocation)) {
      options = (locations || [])
        .filter(l => l.name !== currentLocation)
        .map(l =>
          `<option value="${l.name}">${l.name}${l.parent && !l.isContractor ? ` (${l.parent})` : ""}${l.isContractor ? ` (${l.company}, ${l.phone})` : ""}</option>`
        ).join("");
    } else {
      options = (contractorLocations || []).map(l =>
        `<option value="${l.name}">${l.name}${l.isContractor ? ` (${l.company}, ${l.phone})` : ""}</option>`
      ).join("");
    }
  
    const settings = await loadSettings();
  
    dialog.innerHTML = `
  <form method="dialog" class="flex flex-col gap-4 w-full sm:w-[40rem] max-w-3xl">
    <h3 class="font-bold mb-2">Move ${selected.length} Units</h3>
    <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
    <label>Move to location:</label>
    <select id="moveLoc" required class="border px-2 py-1 rounded">
      <option value="">-- Select Location --</option>
      ${options}
    </select>
    <label>Set status (optional):</label>
    <select id="moveStatus" class="border px-2 py-1 rounded">
      <option value="">-- Keep Current Status --</option>
      ${(settings.statuses || []).map(s => `<option value="${s}"${selected.every(u => u.status === s) ? " selected" : ""}>${s}</option>`).join("")}
    </select>
    <textarea id="moveComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Move</button>
    </div>
  </form>
  `;
    dialog.showModal();

    dialog.addEventListener('click', function(e) {
      if (e.target === dialog) dialog.close();
    });
  
    dialog.querySelector('button[value="cancel"]').onclick = e => {
      e.preventDefault();
      dialog.close();
    };
  
    dialog.querySelector('form').onsubmit = async e => {
      e.preventDefault();

      const submitBtn = e.target.querySelector('button[value="ok"]');
      if (!debounceSubmit(submitBtn)) return;

      const moveLoc = dialog.querySelector("#moveLoc").value.trim();
      const moveStatus = dialog.querySelector("#moveStatus").value.trim();
      const moveComment = dialog.querySelector("#moveComment").value.trim();
      const contractorLocationsNames = (contractorLocations || []).map(l => l.name);
    
      if (!moveLoc) {
        dialog.querySelector("#moveLoc").classList.add('border-red-500');
        dialog.querySelector("#formError").textContent = "Select a location.";
        return;
      }
    
      if (
        (isStorage(currentLocation) || installedLocations.includes(currentLocation)) &&
        !contractorLocationsNames.includes(moveLoc) &&
        !haveSameParent(currentLocation, moveLoc, locations) &&
        !isAdmin() // Super admin bypass
      ) {
        dialog.querySelector("#formError").textContent =
          "You can only move units from warehouse/installed to a Contractor/Technician location, unless moving within the same warehouse group.";
        return;
      }
    
      const cannotMove = selected.filter(unit =>
        unit.location.startsWith("Back Warehouse") && !unit.chargerSerial && !moveLoc.startsWith("Back Warehouse")
      );
      if (cannotMove.length) {
        dialog.querySelector("#formError").textContent =
          `Cannot move ${cannotMove.length} unit(s) without serial out of warehouse.`;
        return;
      }
    
      dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>`;
    
      let items = [...window.inventory];
      const prevStates = [];
      selected.forEach(unit => {
        const idx = items.findIndex(i => i.chargerId === unit.chargerId);
        if (idx >= 0) {
          prevStates.push({...items[idx]});
          if (moveLoc) items[idx].location = moveLoc;
          if (moveStatus) items[idx].status = moveStatus;
          items[idx].lastAction = new Date().toISOString();
          if (moveComment) items[idx].notes = moveComment;
        }
      });
      
      // Update all items at once
      try {
        // Update all items at once
        const updatePromises = selected.map(unit => {
          const idx = items.findIndex(i => i.chargerId === unit.chargerId);
          if (idx >= 0) {
            return updateSingleItem(items[idx]);
          }
        });
        
        await Promise.all(updatePromises.filter(Boolean));
        
        // Create audit log entries
        const newEntries = selected.map(unit => ({
          date: new Date().toISOString(),
          action: "Bulk Move",
          chargerId: unit.chargerId,
          chargerSerial: unit.chargerSerial || "",
          simNumber: unit.simNumber || "",
          product: unit.product || "",
          from: unit.location,
          to: moveLoc,
          statusFrom: unit.status,
          statusTo: moveStatus || unit.status,
          user: getCurrentUserEmail(),
          comment: moveComment
        }));
        
        await saveAuditLog(newEntries);
        console.log('Audit entries saved:', newEntries.length);
        
      } catch (error) {
        console.error('Bulk move failed:', error);
        showToast('Bulk move failed: ' + error.message, 'red');
        dialog.close();
        return;
      }

      showUndoToast("Units moved", "blue", async () => {
        for (const prevState of prevStates) {
          await updateSingleItem(prevState);
        }
        showToast("Bulk move undone", "red");
        window.selectedUnits = [];
        window.inventory = [...window.inventory].map(item => {
          const prev = prevStates.find(p => p.chargerId === item.chargerId);
          return prev || item;
        });
        renderInventoryTable(document.getElementById('main-content'));
      });
    
      dialog.close();
      window.selectedUnits = [];
      window.inventory = items;
      renderInventoryTable(document.getElementById('main-content'));
    };
  };
  
  window.openBulkStatusDialog = async function() {
    if (!(await canManageInventory())) {
      showToast("You don't have permission to manage inventory", "red");
      return;
    }
    
    const selected = window.inventory.filter(i => window.selectedUnits.includes(i.chargerId));
    if (!selected.length) return;
  
    const dialog = document.getElementById('actionDialog');
    
    // Get allowed statuses for the current location
    const currentLocation = selected[0]?.location;
    const allowedStatuses = await getStatusesForLocation(currentLocation);
    
    const statusOptions = allowedStatuses
      .filter(s => !selected.every(i => i.status === s))
      .map(s => `<option value="${s}">${s}</option>`).join("");
  
      dialog.innerHTML = `
    <form method="dialog" class="flex flex-col gap-3 w-80">
      <h3 class="font-bold mb-2">Change Status (${selected.length} Units)</h3>
      <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
      <label>Set status to:</label>
      <select id="newStatus" required class="border px-2 py-1 rounded">
        <option value="">-- Select Status --</option>
        ${statusOptions}
      </select>
        <div id="privatePublicSection" style="display:none">
          <label class="font-bold">Installed as:</label>
          <select id="privatePublic" class="border px-2 py-1 rounded">
            <option value="">-- Select --</option>
            <option value="Private">Private (optionally enter invoice)</option>
            <option value="Public">Public (asset for depreciation)</option>
          </select>
          <input id="invoiceNumber" type="text" placeholder="Invoice Number (Optional)" class="border px-2 py-1 rounded" style="display:none">
        </div>
        <textarea id="statusComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-blue-600 text-white px-3 py-1 rounded">Change</button>
        </div>
      </form>
    `;
    dialog.showModal();

    dialog.addEventListener('click', function(e) {
      if (e.target === dialog) dialog.close();
    });
  
    dialog.querySelector('button[value="cancel"]').onclick = e => {
      e.preventDefault();
      dialog.close();
    };
  
    // Show/hide Installed section for bulk (only works if all will be installed)
    const statusSel = dialog.querySelector("#newStatus");
    statusSel.onchange = () => {
      if (statusSel.value === "Installed") {
        dialog.querySelector("#privatePublicSection").style.display = "";
      } else {
        dialog.querySelector("#privatePublicSection").style.display = "none";
      }
    };
    dialog.querySelector("#privatePublic").onchange = () => {
      dialog.querySelector("#invoiceNumber").style.display =
        dialog.querySelector("#privatePublic").value === "Private" ? "" : "none";
    };
  
    dialog.querySelector('form').onsubmit = async e => {
      e.preventDefault();
    
      const submitBtn = e.target.querySelector('button[value="ok"]');
      if (!debounceSubmit(submitBtn)) return;

      // Read all form values BEFORE replacing dialog content
      const newStatus = dialog.querySelector("#newStatus").value.trim();
      const statusComment = dialog.querySelector("#statusComment").value.trim();
      const privPub = dialog.querySelector("#privatePublic") ? dialog.querySelector("#privatePublic").value : "";
      const invoice = dialog.querySelector("#invoiceNumber") ? dialog.querySelector("#invoiceNumber").value.trim() : "";
    
      if (!newStatus) {
      dialog.querySelector("#newStatus").classList.add('border-red-500');
      dialog.querySelector("#formError").textContent = "Please select a status.";
      return;
    }

    if (newStatus === "Installed" && !privPub) {
    if (privPubEl) privPubEl.classList.add('border-red-500');
    dialog.querySelector("#formError").textContent = "Please select Private or Public for installed status.";
    return;
    }
    
      // NOW replace dialog content with loading spinner
      dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>`;
    
      let items = [...window.inventory];
      const prevStates = [];
      selected.forEach(unit => {
        const idx = items.findIndex(i => i.chargerId === unit.chargerId);
        if (idx >= 0) {
          prevStates.push({...items[idx]});
          items[idx].status = newStatus;
          items[idx].lastAction = new Date().toISOString();
          if (newStatus === "Installed") {
            // Don't automatically set location - let user choose through move dialog
            items[idx].isAsset = privPub === "Public";
            items[idx].invoiceNumber = privPub === "Private" ? invoice : "";
          }
          if (statusComment) items[idx].notes = statusComment;
        }
      });
    
      // Update all items in database
      for (const unit of selected) {
        const idx = items.findIndex(i => i.chargerId === unit.chargerId);
        if (idx >= 0) {
          await updateSingleItem(items[idx]);
        }
      }
    
      // Create and save audit log entries
      const newEntries = selected.map(unit => ({
        date: new Date().toISOString(),
        action: "Bulk Status Change",
        chargerId: unit.chargerId,
        chargerSerial: unit.chargerSerial,
        simNumber: unit.simNumber,
        product: unit.product,
        from: unit.location,
        to: items.find(i => i.chargerId === unit.chargerId)?.location || unit.location,
        statusFrom: unit.status,
        statusTo: newStatus,
        user: getCurrentUserEmail(),
        comment: statusComment
      }));
      
      try {
        await saveAuditLog(newEntries);
        console.log('Bulk status change audit entries saved:', newEntries.length);
      } catch (error) {
        console.error('Failed to save bulk status audit log:', error);
        showToast('Warning: Status changed but audit log failed', 'yellow');
      }

      // Undo support
      showUndoToast("Status changed", "blue", async () => {
        for (const prevState of prevStates) {
          await updateSingleItem(prevState);
        }
        showToast("Bulk status undo", "red");
        window.inventory = [...window.inventory].map(item => {
          const prev = prevStates.find(p => p.chargerId === item.chargerId);
          return prev || item;
        });
        renderInventoryTable(document.getElementById('main-content'));
        window.selectedUnits = [];
      });
    
      dialog.close();
      window.selectedUnits = [];
      window.inventory = items;
      renderInventoryTable(document.getElementById('main-content'));
    };
  };   

  function restoreItems(current, prevStates) {
    // Returns a new array with previous states restored for affected items
    const ids = prevStates.map(i => i.chargerId);
    return current.map(i => {
      const prev = prevStates.find(p => p.chargerId === i.chargerId);
      return prev ? prev : i;
    });
  }
  
  // showUndoToast(message, color, undoCallback)
  function showUndoToast(message, color, undoCallback) {
    const toast = document.getElementById("toast");
    toast.innerHTML = `
      ${message}
      <button id="undoBtn" class="ml-3 underline text-white">Undo</button>
    `;
    toast.className = `fixed top-6 right-6 z-50 min-w-[200px] max-w-xs bg-${color}-600 text-white font-semibold px-4 py-2 rounded shadow-lg opacity-100 pointer-events-auto transition-opacity duration-300`;
    document.getElementById("undoBtn").onclick = () => {
      undoCallback();
      toast.classList.remove("opacity-100", "pointer-events-auto");
      toast.classList.add("opacity-0", "pointer-events-none");
    };
    setTimeout(() => {
      toast.classList.remove("opacity-100", "pointer-events-auto");
      toast.classList.add("opacity-0", "pointer-events-none");
    }, 3500);
  }  

window.toggleActionsMenu = function(idx) {
    // Hide all other menus
    document.querySelectorAll('[id^="unit-actions-"]').forEach(div => div.classList.add('hidden'));
    const menu = document.getElementById(`unit-actions-${idx}`);
    if (menu) menu.classList.toggle('hidden');
    // Optional: click outside closes menu
    document.addEventListener('click', function hideMenu(e) {
      if (!menu.contains(e.target)) {
        menu.classList.add('hidden');
        document.removeEventListener('click', hideMenu);
      }
    });
  };
  
  window.openDetailsDialog = function(unit) {
    const dialog = document.getElementById('actionDialog');
    dialog.innerHTML = `
      <div class="w-96 p-4">
        <div class="text-xl font-bold mb-2 text-purple-700">Unit Details</div>
        <div class="space-y-2 text-gray-700 dark:text-gray-200">
          <div><b>ID:</b> ${unit.chargerId}</div>
          <div><b>Serial:</b> ${unit.chargerSerial || '<span class="text-red-400">[none]</span>'}</div>
          <div><b>SIM:</b> ${unit.simNumber || '-'}</div>
          <div><b>Product:</b> ${unit.product}</div>
          <div><b>Model:</b> ${unit.model}</div>
          <div><b>Location:</b> ${unit.location}</div>
          <div><b>Status:</b> ${unit.status}</div>
          <div><b>Added:</b> ${new Date(unit.created).toLocaleString()}</div>
          <div><b>Last Action:</b> ${new Date(unit.lastAction).toLocaleString()}</div>
          <div><b>Notes:</b> ${unit.notes || '-'}</div>
        </div>
        <div class="flex justify-end mt-4">
          <button class="bg-purple-600 text-white px-3 py-1 rounded" onclick="document.getElementById('actionDialog').close()">Close</button>
        </div>
      </div>
    `;
    dialog.showModal();

    dialog.addEventListener('click', function(e) {
      if (e.target === dialog) dialog.close();
    });
  };
  
  window.deleteUnit = async function(chargerId) {
    if (!(await canDeleteItems())) {
      showToast("You don't have permission to delete items", "red");
      return;
    }
    const dialog = document.getElementById('actionDialog');
    dialog.innerHTML = `
      <div class="w-96 p-4">
        <div class="text-xl font-bold mb-2 text-red-700">Delete Unit</div>
        <div class="mb-4">Are you sure you want to delete this item?</div>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="button" value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </div>
    `;
    dialog.showModal();

    dialog.addEventListener('click', function(e) {
      if (e.target === dialog) dialog.close();
    });

    dialog.querySelector('button[value="cancel"]').onclick = e => { e.preventDefault(); dialog.close(); };
    dialog.querySelector('button[value="ok"]').onclick = async e => {
      let items = [...window.inventory];
      items = items.filter(i => i.chargerId !== chargerId);
      await deleteDoc(doc(db, "inventory", chargerId));
      window.inventory = window.inventory.filter(i => i.chargerId !== chargerId);
      showToast("Unit deleted", "red");
      window.inventory = items;
      renderInventoryTable(document.getElementById('main-content'));
      dialog.close();
    };
  };

  function haveSameParent(locA, locB, locations) {
    if (!locA || !locB) return false;
    const a = locations.find(l => l.name === locA);
    const b = locations.find(l => l.name === locB);
    return a && b && a.parent && b.parent && a.parent === b.parent;
  }
  
  // Update openMoveDialog to use getAllowedMoveDestinations:
  window.openMoveDialog = async function(unit) {
    if (!(await canManageInventory())) {
      showToast("You don't have permission to move inventory", "red");
      return;
    }
    const dialog = document.getElementById('actionDialog');
    // Show loading spinner immediately
    dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Loading...</div>`;
    dialog.showModal();
  
    // Await settings and locations
    const settings = await loadSettings();
    const locations = await getAllLocationsWithContractors();
    const contractorLocations = locations.filter(l => l.parent === "contractor");
    const installedLocations = locations.filter(l => l.parent === "customer" || l.parent === "public").map(l => l.name);
    let options = "";
    const currentLocation = unit.location;
  
    if (
      isStorage(currentLocation) ||
      installedLocations.includes(currentLocation)
    ) {
      // Add warehouse siblings first
      const currentObj = locations.find(l => l.name === currentLocation);
      const warehouseLocations = locations.filter(l => 
        l.parent === "warehouse" && l.name !== currentLocation
      );
      
      options = warehouseLocations.map(l =>
        `<option value="${l.name}">${l.name} (Warehouse)</option>`
      ).join("");
      
            // Then add contractors
            options += (contractorLocations || []).map(l =>
              `<option value="${l.name}">${l.name}${l.isContractor ? ` (${l.company}, ${l.phone})` : ""}</option>`
            ).join("");
          } else if ((contractorLocations || []).map(l => l.name).includes(currentLocation)) {
            // From contractor location - can go to warehouses or installed locations
            options = (locations || [])
              .filter(l => l.name !== currentLocation && l.parent === "warehouse")
              .map(l =>
                `<option value="${l.name}">${l.name} (${l.parent})</option>`
              ).join("");
            
            // Also add the installed locations explicitly
            installedLocations.forEach(installLoc => {
              if (!options.includes(`value="${installLoc}"`)) {
                options += `<option value="${installLoc}">${installLoc}</option>`;
              }
            });
          } else {
            // Default case - show all available locations except current
            options = (locations || [])
              .filter(l => l.name !== currentLocation)
              .map(l =>
                `<option value="${l.name}">${l.name}${l.parent ? ` (${l.parent})` : ""}${l.isContractor ? ` (${l.company}, ${l.phone})` : ""}</option>`
              ).join("");
          }
  
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Move Unit ${unit.chargerId}</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <label>Move to location:</label>
        <select id="moveLoc" class="border px-2 py-1 rounded">
          <option value="">-- Keep Current Location --</option>
          ${options}
        </select>
        <label>Set status (optional):</label>
        <select id="moveStatus" class="border px-2 py-1 rounded">
          <option value="">-- Keep Current Status --</option>
          ${(settings.statuses || []).map(s => `<option value="${s}"${unit.status === s ? " selected" : ""}>${s}</option>`).join("")}
        </select>
        <textarea id="moveComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Move</button>
        </div>
      </form>
    `;
    dialog.addEventListener('click', function(e) {
      if (e.target === dialog) dialog.close();
    });
  
    dialog.querySelector('button[value="cancel"]').onclick = e => {
      e.preventDefault();
      dialog.close();
    };
  
    dialog.querySelector('form').onsubmit = async e => {
      e.preventDefault();

      const submitBtn = e.target.querySelector('button[value="ok"]');
      if (!debounceSubmit(submitBtn)) return;

      const moveLoc = dialog.querySelector("#moveLoc").value.trim();
      const moveStatus = dialog.querySelector("#moveStatus").value.trim();
      const moveComment = dialog.querySelector("#moveComment").value.trim();
    
      // Define your key locations
      const contractorLocationsNames = (contractorLocations || []).map(l => l.name);
      const installedLocations = locations.filter(l => l.parent === "customer" || l.parent === "public").map(l => l.name);
      const fromLoc = unit.location;
      const toLoc = moveLoc;
    
      // Enforce: must go through contractor when moving to or from installed locations
      const isFromInstalled = installedLocations.includes(fromLoc);
      const isToInstalled = installedLocations.includes(toLoc);
      const isFromContractor = contractorLocationsNames.includes(fromLoc);
      const isToContractor = contractorLocationsNames.includes(toLoc);
    
      // Moving to installed location, must come from contractor
      if (isToInstalled && !isFromContractor) {
        showToast("To move a unit to Customer Stock or Public Network Stock, it must first go through a contractor/technician.", "red");
        return;
      }
      // Moving out of installed location, must go to contractor
      if (isFromInstalled && !isToContractor) {
        showToast("To move a unit out of Customer Stock or Public Network Stock, it must first go through a contractor/technician.", "red");
        return;
      }
    
      // ...existing validation and move logic...
      dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>`;

      let items = [...window.inventory];
      const idx = items.findIndex(i => i.chargerId === unit.chargerId);
      if (idx >= 0) {
        if (moveLoc) { // Only update if a new location is selected
          items[idx].location = moveLoc;
        }
        if (moveStatus) items[idx].status = moveStatus;
        items[idx].lastAction = new Date().toISOString();
        items[idx].notes = moveComment;
      }
      await updateSingleItem(items[idx]);
    
      await saveAuditLog([{
        date: new Date().toISOString(),
        action: "Move",
        chargerId: unit.chargerId,
        chargerSerial: unit.chargerSerial,
        simNumber: unit.simNumber,
        product: unit.product,
        from: unit.location,
        to: moveLoc || unit.location, // Show correct "to" in audit log
        statusFrom: unit.status,
        statusTo: moveStatus || unit.status,
        user: getCurrentUserEmail(),
        comment: moveComment
      }]);

      showToast("Unit moved", "blue");
  dialog.close();
  window.inventory = items;
  renderInventoryTable(document.getElementById('main-content'));
};
  };



  // Helper functions for hierarchy logic
  function isStorage(loc) {
    // Adjust as needed for your storage location names
    return /warehouse|stock/i.test(loc);
  }
  function isInstalled(loc) {
    return /installed|customer/i.test(loc);
  }
  async function getContractorLocations() {
    const settings = await loadSettings();
    return settings.locations.filter(loc => loc.parent === "Technician/Contractor");
  }
  
  async function getContractorContactInfo(locationName) {
    // Try to match the name within the contractor's assigned location string
    const settings = await loadSettings();
    if (!settings.contractors) return "";
    const contractor = settings.contractors.find(
      c => locationName.toLowerCase().includes(c.name.toLowerCase())
    );
    return contractor ? ` (${contractor.phone})` : "";
  }
  
  
  // 2. Assign Contractor Dialog: Use real contractor list from settings and store contractorId
  window.openAssignContractorDialog = async function(unit) {
    const dialog = document.getElementById('actionDialog');
    const contractors = (await loadSettings()).contractors || [];
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Assign Unit ${unit.chargerId} to Contractor</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <select id="contractor" required class="border px-2 py-1 rounded">
          <option value="">-- Select Contractor --</option>
          ${(contractors || []).map(c => `<option value="${c.id}">${c.name} (${c.company})</option>`).join('')}
        </select>
        <textarea id="assignComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Assign</button>
        </div>
      </form>
    `;
    dialog.showModal();

    dialog.addEventListener('click', function(e) {
      if (e.target === dialog) dialog.close();
    });

    dialog.querySelector('button[value="cancel"]').onclick = e => {
      e.preventDefault();
      dialog.close();
    };

    dialog.querySelector('form').onsubmit = async e => {
      e.preventDefault();
    
      const submitBtn = e.target.querySelector('button[value="ok"]');
      if (!debounceSubmit(submitBtn)) return;
    
      const contractorId = dialog.querySelector("#contractor").value;
      const assignComment = dialog.querySelector("#assignComment").value.trim();
    
      if (!contractorId) {
        dialog.querySelector("#contractor").classList.add('border-red-500');
        dialog.querySelector("#formError").textContent = "Please select a contractor.";
        return;
      }
    
      const contractors = (await loadSettings()).contractors || [];
      const contractor = contractors.find(c => c.id === contractorId);
      
      if (!contractor) {
        dialog.querySelector("#formError").textContent = "Selected contractor not found.";
        return;
      }
    
      dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>`;
    
      let items = [...window.inventory];
      const idx = items.findIndex(i => i.chargerId === unit.chargerId);
      if (idx >= 0) {
        items[idx].location = contractor.name;
        items[idx].contractorId = contractor.id;
        items[idx].status = 'Reserved';
        items[idx].lastAction = new Date().toISOString();
        if (assignComment) items[idx].notes = assignComment;
      }
      await updateSingleItem(items[idx]);

  await saveAuditLog([{
    date: new Date().toISOString(),
    action: 'Assign to Contractor',
    chargerId: unit.chargerId,
    chargerSerial: unit.chargerSerial,
    simNumber: unit.simNumber,
    product: unit.product,
    from: unit.location,
    to: `Assigned to ${contractor.name}`,
    contractorId: contractor.id,
    contractorName: contractor.name,
    statusFrom: unit.status,
    statusTo: 'Reserved',
    user: getCurrentUserEmail(),
    comment: assignComment
  }]);


  showToast('Unit assigned to contractor', 'blue');
  dialog.close();
  window.inventory = items;
  renderInventoryTable(document.getElementById('main-content'));
};
  };

  window.openEditDialog = async function(unit) {
    if (!(await canManageInventory())) {
      showToast("You don't have permission to edit inventory", "red");
      return;
    }
    const dialog = document.getElementById('actionDialog');
    // Use canonical settings
    const locations = await getAllLocationsWithContractors();
    const statusOptions = (await loadSettings()).statuses;
  
    dialog.innerHTML = `
    <form method="dialog" class="flex flex-col gap-3 w-80">
      <h3 class="font-bold mb-2">Edit Unit ${unit.chargerId}</h3>
      <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
      <input id="editChargerId" type="text" class="border px-2 py-1 rounded" value="${unit.chargerId}" disabled>
      <input id="editChargerSerial" type="text" class="border px-2 py-1 rounded" value="${unit.chargerSerial || ''}" placeholder="Serial (optional)">
      <input id="editSimNumber" type="text" class="border px-2 py-1 rounded" value="${unit.simNumber || ''}" placeholder="SIM Number (optional)">
      <input id="editProduct" type="text" class="border px-2 py-1 rounded" value="${unit.product || ''}" placeholder="Product">
      <input id="editModel" type="text" class="border px-2 py-1 rounded" value="${unit.model || ''}" placeholder="Model">
      <input id="editLocation" type="text" class="border px-2 py-1 rounded bg-gray-100" value="${unit.location}" readonly>
      <select id="editStatus" required class="border px-2 py-1 rounded">
        <option value="">-- Select Status --</option>
        ${(statusOptions || []).map(s => `<option value="${s}"${unit.status === s ? " selected" : ""}>${s}</option>`).join("")}
      </select>
      <textarea id="editNotes" class="border px-2 py-1 rounded" placeholder="Notes (optional)">${unit.notes || ''}</textarea>
      <div class="flex justify-between gap-2 mt-3">
        <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
        <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
      </div>
    </form>
  `;
  
    dialog.showModal();
    
    dialog.addEventListener('click', function(e) {
      if (e.target === dialog) dialog.close();
    });
  
    dialog.querySelector('button[value="cancel"]').onclick = e => {
      e.preventDefault();
      dialog.close();
    };
  
    dialog.querySelector('form').onsubmit = async e => {
      e.preventDefault();

      const submitBtn = e.target.querySelector('button[value="ok"]');
      if (!debounceSubmit(submitBtn)) return;
    
      const chargerSerial = dialog.querySelector("#editChargerSerial").value.trim();
      const simNumber = dialog.querySelector("#editSimNumber").value.trim();
      const product = dialog.querySelector("#editProduct").value.trim();
      const model = dialog.querySelector("#editModel").value.trim();
      const location = unit.location;
      const status = dialog.querySelector("#editStatus").value.trim() || unit.status;
      const notes = dialog.querySelector("#editNotes").value.trim();
    
      if (!location || !status) {
        dialog.querySelector("#formError").textContent = "Location and status are required.";
        return;
      }
    
      dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>`;
    
      let items = [...window.inventory];
      const idx = items.findIndex(i => i.chargerId === unit.chargerId);
      if (idx < 0) {
        showToast("Unit not found", "red");
        dialog.close();
        return;
      }
      const prev = {...items[idx]};
      items[idx] = {
        ...items[idx],
        chargerSerial, simNumber, product, model,
        location, status, notes,
        lastAction: new Date().toISOString()
      };
      await updateSingleItem(items[idx]);
    
      await saveAuditLog([{
        date: new Date().toISOString(),
        action: "Edit Unit",
        chargerId: unit.chargerId,
        user: getCurrentUserEmail(),
        changes: {
          from: prev,
          to: items[idx]
        }
      }]);
    
      showUndoToast("Unit updated", "blue", async () => {
        await updateSingleItem(prev);
        showToast("Edit undone", "red");
        const index = window.inventory.findIndex(i => i.chargerId === prev.chargerId);
        if (index >= 0) {
        window.inventory[index] = prev;
      }
        renderInventoryTable(document.getElementById('main-content'));
      });
  
      dialog.close();
      window.inventory = items;
      renderInventoryTable(document.getElementById('main-content'));
    };
  };  
  
  window.openGlobalSearchDialog = function () {
    if (window.innerWidth < 640) {
      showToast("Global search is not available on mobile. Use the search box above.", "blue");
      return;
    }
    const dialog = document.getElementById('globalSearchDialog');
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-4 w-[30rem] max-w-full">
        <h3 class="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">Global Search</h3>
        <input id="globalSearchInput" type="text" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800"
          placeholder="Type anything... (product, serial, shipment, vendor)" autofocus>
        <div id="globalSearchResults" class="max-h-60 overflow-y-auto mt-2"></div>
        <div class="flex justify-end gap-2 mt-2">
          <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Close</button>
        </div>
      </form>
    `;
    dialog.showModal();
  
    dialog.addEventListener('click', function(e) {
      if (e.target === dialog) dialog.close();
    });
  
    dialog.querySelector('button[value="cancel"]').onclick = e => { 
      e.preventDefault(); dialog.close(); 
    };
  
    const input = dialog.querySelector('#globalSearchInput');
    input.oninput = function () {
      window.performGlobalSearch(input.value.trim());
    };
    setTimeout(() => { input.focus(); }, 50);
    window.performGlobalSearch('');
  };
  
  export async function loadShipments() {
    const snapshot = await getDocs(collection(db, "shipments"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
  export async function loadProducts() {
    const snapshot = await getDocs(collection(db, "Products"));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
  
// --- Global Search using Firestore ---
window.performGlobalSearch = async function(query, forceReload = false) {
  const resultsDiv = document.getElementById('globalSearchResults');
  if (!resultsDiv) return;

  // Cache data at window level with expiration
  const cacheAge = window._globalSearchCache?.timestamp ? 
    Date.now() - window._globalSearchCache.timestamp : Infinity;
  
  if (!window._globalSearchCache || forceReload || cacheAge > 300000) { // 5 minutes
    window._globalSearchCache = {
      shipments: await loadShipments(),
      products: await loadProducts(),
      inventory: window.inventory.length ? window.inventory : await loadInventory(),
      timestamp: Date.now()
    };
  }

  const { shipments, products, inventory } = window._globalSearchCache;

  if (!query) {
    resultsDiv.innerHTML = `<div class="text-gray-400 text-center py-6">Start typing to search...</div>`;
    return;
  }

  const q = query.toLowerCase();

  const shipmentMatches = shipments.filter(s =>
    (s.shipmentId || '').toLowerCase().includes(q) ||
    (s.vendor || '').toLowerCase().includes(q) ||
    (s.incoterm || '').toLowerCase().includes(q) ||
    (Array.isArray(s.products) && s.products.some(p => (p.model || '').toLowerCase().includes(q)))
  );
  const inventoryMatches = inventory.filter(i => {
    const allFields = [
      i.chargerId, i.chargerSerial, i.simNumber, i.product, i.model, i.status,
      i.location, i.notes, i.lastAction, i.addedBy, i.invoiceNumber
    ];
    return allFields.some(field => (field || '').toLowerCase().includes(q));
  });
  const productMatches = products.filter(p =>
    (p.name || '').toLowerCase().includes(q) ||
    (p.hsCode || '').toLowerCase().includes(q) ||
    (p.vendor || '').toLowerCase().includes(q)
  );
  
    if (shipmentMatches.length === 0 && inventoryMatches.length === 0 && productMatches.length === 0) {
      resultsDiv.innerHTML = `<div class="text-gray-400 text-center py-6">No results found.</div>`;
      return;
    }

    resultsDiv.innerHTML = `
      <div>
        <div class="font-bold text-purple-700 dark:text-purple-300 mt-2">Inventory (${inventoryMatches.length})</div>
        ${inventoryMatches.length ? inventoryMatches.map(i => `
          <div class="border-b border-gray-200 dark:border-gray-700 py-1 flex flex-col gap-1">
            <div><b>ID:</b> ${i.chargerId}</div>
            <div><b>Serial:</b> ${i.chargerSerial || '-'}</div>
            <div><b>SIM:</b> ${i.simNumber || '-'}</div>
            <div><b>Product:</b> ${i.product || '-'}</div>
            <div class="flex gap-2 mt-1">
              <button type="button" class="move-btn px-2 py-1 text-xs rounded bg-blue-600 text-white"
                data-chargerid="${i.chargerId}" data-serial="${i.chargerSerial}">Move</button>
              <button type="button" class="edit-inventory-btn px-2 py-1 text-xs rounded bg-green-600 text-white"
                data-chargerid="${i.chargerId}" data-serial="${i.chargerSerial}">Edit</button>
              <button type="button" class="view-inventory-btn px-2 py-1 text-xs rounded bg-purple-600 text-white"
                data-chargerid="${i.chargerId}">View</button>
            </div>
          </div>
        `).join('') : '<div class="text-gray-400 text-sm">None</div>'}
      </div>
    `;
    resultsDiv.querySelectorAll('.move-btn').forEach(btn => {
      btn.onclick = function() {
        const chargerId = btn.dataset.chargerid;
        // const chargerSerial = btn.dataset.serial; // Not needed
        const unit = window.inventory.find(i => i.chargerId === chargerId);
        if (unit) {
          window.openMoveDialog(unit);
          document.getElementById('globalSearchDialog').close();
        } else {
          showToast('Inventory unit not found', 'red');
        }
      };
    });
    resultsDiv.querySelectorAll('.edit-inventory-btn').forEach(btn => {
      btn.onclick = function() {
        const chargerId = btn.dataset.chargerid;
        // const chargerSerial = btn.dataset.serial; // Not needed
        const unit = window.inventory.find(i => i.chargerId === chargerId);
        if (unit) {
          window.openEditDialog(unit);
          document.getElementById('globalSearchDialog').close();
        } else {
          showToast('Inventory unit not found', 'red');
        }
      };
    });
    resultsDiv.querySelectorAll('.view-inventory-btn').forEach(btn => {
      btn.onclick = function() {
        const chargerId = btn.dataset.chargerid;
        const unit = window.inventory.find(i => i.chargerId === chargerId);
        if (unit) {
          if (typeof window.openDetailsDialog === "function") {
            window.openDetailsDialog(unit);
            document.getElementById('globalSearchDialog').close();
          } else {
            showToast('Details dialog not available on this page', 'red');
          }
        } else {
          showToast('Inventory unit not found', 'red');
        }
      };
    });
  };

  async function showAddItemDialog() {
    const dialog = document.getElementById('addItemDialog');
    dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Loading...</div>`;
    dialog.showModal();
  
    if (!cachedProducts) cachedProducts = await loadProducts();
    if (!cachedLocations) cachedLocations = await getAllLocationsWithContractors();
    const products = cachedProducts.length ? cachedProducts : window.inventory.map(i => ({ name: i.product }));
    const locations = cachedLocations;
    const statusOptions = (await loadSettings()).statuses || [];
  
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-3 w-80">
        <h3 class="font-bold mb-2">Add Inventory Item</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
        <input id="chargerId" type="text" placeholder="Charger ID (Required)" required class="border px-2 py-1 rounded">
        <div class="flex gap-2">
          <input id="chargerSerial" type="text" placeholder="Charger Serial (Optional)" class="border px-2 py-1 rounded flex-1">
          <button type="button" id="scanBarcodeBtn" class="bg-blue-600 text-white px-3 py-1 rounded">Scan Barcode</button>
        </div>
        <input id="simNumber" type="text" placeholder="SIM Number (Optional)" class="border px-2 py-1 rounded">
        <select id="product" required class="border px-2 py-1 rounded">
          <option value="">-- Select Product --</option>
          ${(products || []).map(p =>
            `<option value="${p.name}">${p.name}${p.vendor ? ' (' + p.vendor + ')' : ''}</option>`
          ).join("")}
        </select>
        <input id="model" type="text" placeholder="Model (Optional)" class="border px-2 py-1 rounded">
        <select id="location" required class="border px-2 py-1 rounded">
          <option value="">-- Select Location --</option>
          ${(locations || []).map(l => `<option value="${l.name}">${l.name}${l.parent ? ` (${l.parent})` : ""}</option>`).join("")}
        </select>
        <select id="status" required class="border px-2 py-1 rounded">
          <option value="">-- Select Status --</option>
          ${(statusOptions || []).map(s => `<option value="${s}">${s}</option>`).join("")}
        </select>
        <textarea id="notes" placeholder="Notes (Optional)" class="border px-2 py-1 rounded"></textarea>
        <div id="privatePublicSection" style="display:none">
          <label class="font-bold">Installed as:</label>
          <select id="privatePublic" class="border px-2 py-1 rounded">
            <option value="">-- Select --</option>
            <option value="Private">Private (optionally enter invoice)</option>
            <option value="Public">Public (will be flagged as asset)</option>
          </select>
          <input id="invoiceNumber" type="text" placeholder="Invoice Number (Optional)" class="border px-2 py-1 rounded" style="display:none">
        </div>
        <div class="flex justify-between gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </form>
    `;

  const cancelBtn = dialog.querySelector('button[value="cancel"]');
if (cancelBtn) {
  cancelBtn.onclick = e => {
    e.preventDefault();
    dialog.close();
  };
}

  dialog.showModal();

  dialog.addEventListener('click', function(e) {
    if (e.target === dialog) dialog.close();
  });

  const scanBtn = dialog.querySelector('#scanBarcodeBtn');
if (scanBtn) {
  scanBtn.onclick = () => {
    openBarcodeScanner(result => {
      if (result) {
        dialog.querySelector("#chargerSerial").value = result;
        // Optionally, also autofill chargerId if logic fits:
        // dialog.querySelector("#chargerId").value = result;
      }
    });
  };
}

  // Show/hide Private/Public logic if Installed status is selected
  const statusSel = dialog.querySelector("#status");
  statusSel.onchange = () => {
    if (statusSel.value === "Installed") {
      dialog.querySelector("#privatePublicSection").style.display = "";
      dialog.querySelector("#location").value = "Customer Stock";
      dialog.querySelector("#location").disabled = true;
    } else {
      dialog.querySelector("#privatePublicSection").style.display = "none";
      dialog.querySelector("#location").disabled = false;
    }
  };
  // Show/hide invoice number for Private
  dialog.querySelector("#privatePublic").onchange = () => {
    const val = dialog.querySelector("#privatePublic").value;
    dialog.querySelector("#invoiceNumber").style.display = val === "Private" ? "" : "none";
  };

  // Replace the broken form.onsubmit section around line 2540:
  dialog.querySelector('form').onsubmit = async e => {
    e.preventDefault();
  
    const submitBtn = e.target.querySelector('button[value="ok"]');
    if (!debounceSubmit(submitBtn)) return;

  if (document.activeElement.value === "cancel") {
    dialog.close();
    return;
  }

  // Validation
  let valid = true;
  dialog.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('border-red-500'));
  dialog.querySelector("#formError").textContent = "";

  const chargerId = dialog.querySelector("#chargerId").value.trim();
  const chargerSerial = dialog.querySelector("#chargerSerial").value.trim();
  const simNumber = dialog.querySelector("#simNumber").value.trim();
  const product = dialog.querySelector("#product").value.trim();
  const model = dialog.querySelector("#model").value.trim();
  const location = dialog.querySelector("#location").value.trim();
  const status = dialog.querySelector("#status").value.trim();
  const notes = dialog.querySelector("#notes").value.trim();
  const privPub = dialog.querySelector("#privatePublic") ? dialog.querySelector("#privatePublic").value : "";
  const invoice = dialog.querySelector("#invoiceNumber") ? dialog.querySelector("#invoiceNumber").value.trim() : "";

  if (!chargerId) { dialog.querySelector("#chargerId").classList.add('border-red-500'); valid = false; }
  if (!product) { dialog.querySelector("#product").classList.add('border-red-500'); valid = false; }
  if (!location) { dialog.querySelector("#location").classList.add('border-red-500'); valid = false; }
  if (!status) { dialog.querySelector("#status").classList.add('border-red-500'); valid = false; }
  if (status === "Installed" && !privPub) { dialog.querySelector("#privatePublic").classList.add('border-red-500'); valid = false; }

  if (!valid) {
    dialog.querySelector("#formError").textContent = "Please fill in all required fields.";
    return;
  }
  
  // Construct item BEFORE checking for duplicates
  const item = {
    chargerId, chargerSerial, simNumber, product, model, location,
    status,
    assigned: status === "Installed",
    created: new Date().toISOString(),
    addedBy: getCurrentUserEmail(),
    lastAction: new Date().toISOString(),
    notes,
    isAsset: (status === "Installed" && privPub === "Public"),
    invoiceNumber: (status === "Installed" && privPub === "Private") ? invoice : ""
  };
  
  // Check for duplicates
  const items = [...window.inventory];
  if (items.some(i => i.chargerId === chargerId)) {
    dialog.querySelector("#formError").textContent = "Charger ID already exists!";
    dialog.querySelector("#chargerId").classList.add('border-red-500');
    return;
  }
  
  // Validate the item
  try {
    validateInventoryItem(item);
  } catch (error) {
    dialog.querySelector("#formError").textContent = error.message;
    return;
  }
  
  dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>`;
  
  items.push(item);
  await updateSingleItem(item);
  showToast("Inventory item added", "green");
  dialog.close();
  window.inventory = items;
  renderInventoryTable(document.getElementById('main-content'));
};
}

window.openStatusDialog = async function(unit) {
  if (!(await canManageInventory())) {
    showToast("You don't have permission to manage inventory", "red");
    return;
  }

  const dialog = document.getElementById('actionDialog');
  dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Loading...</div>`;
  dialog.showModal();

  const allowedStatuses = await getStatusesForLocation(unit.location);

  dialog.addEventListener('click', function(e) {
    if (e.target === dialog) dialog.close();
  });

  const statusOptions = (await loadSettings()).statuses;
  dialog.innerHTML = `
    <form method="dialog" class="flex flex-col gap-3 w-80">
      <h3 class="font-bold mb-2">Change Status: ${unit.chargerId}</h3>
      <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
      <label>New status:</label>
      <select id="newStatus" required class="border px-2 py-1 rounded">
        <option value="">-- Select Status --</option>
        ${allowedStatuses.map(s => `<option value="${s}"${unit.status === s ? " selected" : ""}>${s}</option>`).join("")}
      </select>
      <div id="privatePublicSection" style="display:none">
        <label class="font-bold">Installed as:</label>
        <select id="privatePublic" class="border px-2 py-1 rounded">
          <option value="">-- Select --</option>
          <option value="Private">Private (optionally enter invoice)</option>
          <option value="Public">Public (asset for depreciation)</option>
        </select>
        <input id="invoiceNumber" type="text" placeholder="Invoice Number (Optional)" class="border px-2 py-1 rounded" style="display:none">
      </div>
      <textarea id="statusComment" placeholder="Comment (optional)" class="border px-2 py-1 rounded"></textarea>
      <div class="flex justify-between gap-2 mt-3">
        <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
        <button value="ok" class="bg-blue-600 text-white px-3 py-1 rounded">Change</button>
      </div>
    </form>
  `;
  dialog.showModal();

  dialog.addEventListener('click', function(e) {
    if (e.target === dialog) dialog.close();
  });

  dialog.querySelector('button[value="cancel"]').onclick = e => {
    e.preventDefault();
    dialog.close();
  };

  // Show/hide Installed section
  const statusSel = dialog.querySelector("#newStatus");
  statusSel.onchange = () => {
    if (statusSel.value === "Installed") {
      dialog.querySelector("#privatePublicSection").style.display = "";
    } else {
      dialog.querySelector("#privatePublicSection").style.display = "none";
    }
  };
  dialog.querySelector("#privatePublic").onchange = () => {
    dialog.querySelector("#invoiceNumber").style.display =
      dialog.querySelector("#privatePublic").value === "Private" ? "" : "none";
  };

  dialog.querySelector('form').onsubmit = async e => {
    e.preventDefault();
  
    const submitBtn = e.target.querySelector('button[value="ok"]');
    if (!debounceSubmit(submitBtn)) return;
  
    const newStatus = dialog.querySelector("#newStatus").value.trim();
    const privPubEl = dialog.querySelector("#privatePublic");
    const privPub = privPubEl ? privPubEl.value : "";
    const invoiceEl = dialog.querySelector("#invoiceNumber");
    const invoice = invoiceEl ? invoiceEl.value.trim() : "";
    const statusComment = dialog.querySelector("#statusComment").value.trim();
  
    // Clear previous errors
    dialog.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('border-red-500'));
    dialog.querySelector("#formError").textContent = "";
  
    // Validate required fields
    if (!newStatus) {
      dialog.querySelector("#newStatus").classList.add('border-red-500');
      dialog.querySelector("#formError").textContent = "Please select a status.";
      return;
    }
  
    if (newStatus === "Installed" && privPubEl && !privPub) {
      privPubEl.classList.add('border-red-500');
      dialog.querySelector("#formError").textContent = "Please select Private or Public for installed status.";
      return;
    }

    dialog.innerHTML = `<div class="flex items-center justify-center h-32"><div class="loader"></div>Saving...</div>`;

    let items = [...window.inventory];
    const idx = items.findIndex(i => i.chargerId === unit.chargerId);
    if (idx >= 0) {
      items[idx].status = newStatus;
      items[idx].lastAction = new Date().toISOString();
      if (newStatus === "Installed") {
        items[idx].location = "Customer Stock";
        items[idx].isAsset = privPub === "Public";
        items[idx].invoiceNumber = privPub === "Private" ? invoice : "";
      }
    }
    await updateSingleItem(items[idx]);

    // Audit log
    await saveAuditLog([{
      date: new Date().toISOString(),
      action: "Status Change",
      chargerId: unit.chargerId,
      chargerSerial: unit.chargerSerial,
      simNumber: unit.simNumber,
      product: unit.product,
      from: unit.location,
      to: items[idx]?.location || unit.location,
      statusFrom: unit.status,
      statusTo: newStatus,
      user: getCurrentUserEmail(),
      comment: statusComment
    }]);

    showToast("Status updated", "blue");
    dialog.close();
    window.inventory = items;
    renderInventoryTable(document.getElementById('main-content'));
  };
};

window.openBarcodeScanner = function(onDetected) {
  let scanDialog = document.getElementById('barcodeScanDialog');
  if (!scanDialog) {
    scanDialog = document.createElement('dialog');
    scanDialog.id = 'barcodeScanDialog';
    scanDialog.className = 'rounded-xl p-4';
    document.body.appendChild(scanDialog);
  }
  scanDialog.innerHTML = `
    <div style="position:relative;">
      <button id="cancelScanBtn" style="position:absolute;top:8px;right:8px;z-index:2;" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <div class="mb-2 font-bold text-lg text-blue-800 dark:text-blue-300">Scan Product Barcode</div>
      <div id="barcode-scan-video" style="width:350px;height:200px;max-width:100%;border:2px solid #9cf;border-radius:10px;"></div>
      <div id="barcode-feedback" class="mt-2 text-gray-700 dark:text-gray-200"></div>
    </div>
  `;
  scanDialog.showModal();

  let scanned = false;

  function cleanup() {
    try { Quagga.offDetected && Quagga.offDetected(); } catch (e) {}
    try { Quagga.stop(); } catch (e) {}
  }

  function closeScanner() {
    cleanup();
    scanDialog.close();
  }

  function cancelScanHandler() {
    scanned = true;
    cleanup();
    scanDialog.close();
    if (onDetected) onDetected(null);
  }

  // Cancel button
  setTimeout(() => {
    const cancelBtn = document.getElementById('cancelScanBtn');
    if (cancelBtn) {
      cancelBtn.onclick = cancelScanHandler;
    }
  }, 10);

  // Click outside dialog to close
  scanDialog.addEventListener('click', function(e) {
    if (e.target === scanDialog) {
      cancelScanHandler();
    }
  });

  // Give DOM time to render before initializing Quagga
  setTimeout(() => {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.getElementById('barcode-scan-video'),
        constraints: { facingMode: "environment" }
      },
      decoder: { readers: ["code_128_reader", "ean_reader", "ean_8_reader"] }
    }, function(err) {
      if (err) {
        console.error('Camera initialization failed:', err);
        document.getElementById('barcode-feedback').textContent = "Camera error: " + err.message;
        setTimeout(() => {
          closeScanner();
          if (onDetected) onDetected(null); // Notify caller that scan failed
        }, 1500);
        return;
      }
      Quagga.start();
    });

    let lastResults = [];
    let requiredStableReads = 3;

    Quagga.onDetected(function(data) {
      if (scanned) return;
      const code = data.codeResult.code || "";
      const numeric = (code.match(/(\d{8})$/) || [])[1] || code;
    
      lastResults.push(numeric);
      if (lastResults.length > requiredStableReads) lastResults.shift();
    
      if (
        lastResults.length === requiredStableReads &&
        lastResults.every(val => val === lastResults[0])
      ) {
        scanned = true;
        document.getElementById('barcode-feedback').textContent = "Scanned: " + numeric;
        setTimeout(() => {
          closeScanner();
          if (onDetected) onDetected(numeric);
        }, 600);
      }
    });
  }, 150);
};

export async function updateUnitsLocation(unitIds, newLocation) {
  let items = [...window.inventory];
  unitIds.forEach(id => {
    const unit = window.inventory.find(i => i.chargerId === id);
    if (unit) {
      unit.location = newLocation;
      unit.lastAction = new Date().toISOString();
    }
  });
  await saveInventory(items);
  window.inventory = items; // <-- update global
  
  // Only re-render if we're on the inventory page and DOM is ready
  if (document.body.dataset.page === "inventory" && document.getElementById('main-content')) {
    // Add a small delay to ensure all handlers are attached
    setTimeout(() => {
      renderInventoryTable(document.getElementById('main-content'));
    }, 100);
  }
}

window.openDetailsDialog = openDetailsDialog;
window.toggleActionsMenu = toggleActionsMenu;
window.bulkDelete = bulkDelete;
window.clearBulkSelection = clearBulkSelection;
window.toggleRowMenu = toggleRowMenu;
window.openMoveDialog = openMoveDialog;
window.openStatusDialog = openStatusDialog;
window.openEditDialog = openEditDialog;
window.deleteUnit = deleteUnit;
// Add at the very end with other window assignments:
window.loadAuditLog = loadAuditLog;
window.saveAuditLog = saveAuditLog;
window.showAddItemDialog = showAddItemDialog;
window.openBarcodeScanner = openBarcodeScanner;
window.performGlobalSearch = performGlobalSearch;
window.openGlobalSearchDialog = openGlobalSearchDialog;
window.openMobileSearchDialog = openMobileSearchDialog;
window.openAssignContractorDialog = openAssignContractorDialog;
window.downloadInventoryCSV = function() {
  console.log('downloadInventoryCSV called');
  try {
    const items = [...window.inventory];
    const header = ["Charger ID", "Serial", "Status", "Location", "Last Action"];
    
    // Sanitize data to prevent CSV injection
    const sanitizeCell = (value) => {
      if (!value) return '';
      const str = String(value);
      // Remove dangerous characters that could be interpreted as formulas
      return str.replace(/^[=+\-@]/, "'$&").replace(/"/g, '""');
    };
    
    const rows = items.map(i => [
      sanitizeCell(i.chargerId),
      sanitizeCell(i.chargerSerial),
      sanitizeCell(i.status),
      sanitizeCell(i.location),
      sanitizeCell(i.lastAction)
    ]);
    
    let csv = header.join(",") + "\n" + 
      rows.map(r => r.map(cell => `"${cell}"`).join(",")).join("\n");
    
    let blob = new Blob([csv], {type: "text/csv"});
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = `inventory_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('CSV downloaded successfully', 'green');
  } catch (error) {
    console.error('CSV download error:', error);
    showToast('CSV download failed: ' + error.message, 'red');
  }
};

window.downloadInventoryExcel = function() {
  console.log('downloadInventoryExcel called');
  try {
    if (typeof XLSX === 'undefined') {
      console.error('XLSX library not available');
      showToast('Excel feature not available. Please refresh the page.', 'red');
      return;
    }
    
    const items = [...window.inventory];
    if (!items.length) {
      showToast('No inventory data to export', 'yellow');
      return;
    }
    
    // Sanitize data for Excel
    const sanitizedItems = items.map(item => ({
      'Charger ID': item.chargerId || '',
      'Serial': item.chargerSerial || '',
      'SIM Number': item.simNumber || '',
      'Product': item.product || '',
      'Model': item.model || '',
      'Status': item.status || '',
      'Location': item.location || '',
      'Notes': item.notes || '',
      'Last Action': item.lastAction ? new Date(item.lastAction).toLocaleString() : '',
      'Added By': item.addedBy || ''
    }));
    
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(sanitizedItems);
    
    // Set column widths
    const colWidths = [
      {wch: 20}, {wch: 15}, {wch: 15}, {wch: 25}, {wch: 20},
      {wch: 12}, {wch: 20}, {wch: 30}, {wch: 18}, {wch: 15}
    ];
    ws['!cols'] = colWidths;
    
    XLSX.utils.book_append_sheet(wb, ws, "Inventory");
    XLSX.writeFile(wb, `inventory_${new Date().toISOString().split('T')[0]}.xlsx`);
    showToast('Excel downloaded successfully', 'green');
  } catch (error) {
    console.error('Excel download error:', error);
    showToast('Excel download failed: ' + error.message, 'red');
  }
};
  


// --- Data service abstraction ---
import { showToast } from './core.js'; // FIXED: Remove ../js/
import { db } from './utils/firebase.js';
import { doc, getDoc, setDoc } from "firebase/firestore";
import { checkPageAccess, renderAccessDenied } from './core.js';
import { getCurrentUserRole } from './utils/users.js';
import { can } from './utils/permissions.js';
import { loadProducts } from './products.js';
import { loadInventory } from './inventory.js';

document.addEventListener('DOMContentLoaded', async () => {
  if (document.body.dataset.page === "settings") {
    try {
      console.log('Initializing settings page...');
      await initSettings();
      document.body.style.visibility = 'visible'; // FIXED: Show body after initialization
    } catch (error) {
      console.error('Failed to initialize settings page:', error);
      showToast('Failed to load settings page: ' + error.message, 'red');
      document.body.style.visibility = 'visible'; // Show body even on error
    }
  }
});

const SETTINGS_KEY = "settings"; // Firestore doc id

// Only show allowed statuses for each location
export const allowedStatusesByParent = {
  "warehouse": ["In Stock", "Faulty", "RMA", "Reserved", "Demo", "Loaner"],
  "contractor": ["In Stock", "Reserved", "Loaner"],
  "customer": ["Installed (Wevo)", "Installed (Retail)", "Faulty"],
  "public": ["Installed", "Decommissioned", "Faulty"],
  "other": ["Unknown", "Lost", "In Transit", "Faulty"]
};

export function getAllowedStatusesForLocation(locationName, settings) {
  // Find the location in settings
  const location = settings.locations.find(loc => loc.name === locationName);
  if (!location) {
    console.warn(`Location "${locationName}" not found in settings`);
    return settings.statuses; // If location not found, allow all statuses
  }
  
  // Get the parent container
  const parentId = location.parent;
  
  // Return statuses allowed for this parent type, with fallback
  const allowedStatuses = allowedStatusesByParent[parentId];
  if (!allowedStatuses) {
    console.warn(`No status rules defined for parent "${parentId}"`);
    return settings.statuses;
  }
  
  return allowedStatuses;
}

export async function loadSettings() {
  const defaults = {
    parentContainers: [
      { id: "warehouse", name: "Warehouses", color: "#8b5cf6" },
      { id: "customer", name: "Customer Locations", color: "#38bdf8" },
      { id: "contractor", name: "Contractors", color: "#ef4444" },
      { id: "public", name: "Public Locations", color: "#22c55e" },
      { id: "other", name: "Other", color: "#f59e0b" }
    ],
    // Only include a minimal set of example locations
    locations: [
      { name: "Main Warehouse", parent: "warehouse" },
      { name: "Customer Site", parent: "customer" },
      { name: "Public Location", parent: "public" }
    ],
    statuses: [
      "In Stock",
      "Faulty",
      "RMA",
      "Reserved",
      "Demo",
      "Loaner",
      "Installed (Wevo)",
      "Installed (Retail)",
      "Installed",
      "Decommissioned",
      "Unknown"
    ],
    vendors: ["Teison", "ABL", "EnelX", "Vestel"],
    contractors: [
      {
        company: "Alpha Charge",
        name: "Dan Hen",
        phone: "0502329696"
      }
    ]
  };

  try {
    const docRef = doc(db, "appdata", SETTINGS_KEY);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const loaded = docSnap.data();
      return {
        parentContainers: loaded.parentContainers || defaults.parentContainers, // Add this line
        locations: loaded.locations || defaults.locations,
        statuses: loaded.statuses || defaults.statuses,
        vendors: loaded.vendors || defaults.vendors,
        contractors: loaded.contractors || defaults.contractors
      };
    } else {
      return defaults;
    }
  } catch (e) {
    console.error("Error loading settings from Firestore:", e);
    return defaults;
  }
}

export async function saveSettings(data) {
  try {
    await setDoc(doc(db, "appdata", SETTINGS_KEY), data);
  } catch (e) {
    console.error("Error saving settings to Firestore:", e);
  }
}

// Add this helper function to your settings.js
export function getLocationsByParent(parentId, settings) {
  if (!settings || !settings.locations) return [];
  return settings.locations.filter(loc => loc.parent === parentId);
}

// And this one to get a parent container by ID
export function getParentContainerById(parentId, settings) {
  if (!settings || !settings.parentContainers) return null;
  return settings.parentContainers.find(p => p.id === parentId);
}

export async function getDashboardStats(inventory, shipments = []) {
  if (!inventory || !Array.isArray(inventory)) {
    console.warn('getDashboardStats: Invalid inventory data');
    return {
      total: 0,
      byStatus: {},
      byLocation: {},
      nextShipment: null,
      overdueCount: 0,
      inStockCount: 0,
      installedCount: 0,
      contractorCount: 0,
      publicCount: 0
    };
  }

  const settings = await loadSettings();
  
  // Get contractor names for direct matching
  const contractorNames = (settings.contractors || []).map(c => c.name);
  
  // Status breakdown
  const byStatus = {};
  inventory.forEach(item => {
    const status = item.status || 'Unknown';
    byStatus[status] = (byStatus[status] || 0) + 1;
  });

  // Location breakdown with parent container logic
  let inStockCount = 0;
  let installedCount = 0; 
  let contractorCount = 0;
  let publicCount = 0;
  let overdueCount = 0;

  const now = Date.now();

  inventory.forEach(item => {
    const location = settings.locations?.find(loc => loc.name === item.location);
    const parentType = location?.parent;
    
    // Count by parent type
    switch(parentType) {
      case 'warehouse':
        inStockCount++;
        break;
      case 'customer':
        installedCount++;
        break;
      case 'contractor':
        contractorCount++;
        break;
      case 'public':
        publicCount++;
        break;
    }
    
    // FIXED: Also check if location name matches contractor name directly
    if (!location?.parent && contractorNames.includes(item.location)) {
      contractorCount++;
    }
    
    // FIXED: Check for overdue contractor assignments (> 14 days)
    // Use assignedDate if available, otherwise fall back to lastAction for existing data
    const assignmentDate = item.assignedDate || item.lastAction;
    if (assignmentDate) {
      const isWithContractor = 
        parentType === 'contractor' || // Has contractor parent
        contractorNames.includes(item.location) || // Location matches contractor name
        item.contractorId || // Has contractor ID field
        item.status === 'Reserved'; // Reserved status items
        
      if (isWithContractor) {
        const daysPassed = (now - new Date(assignmentDate).getTime()) / (1000 * 60 * 60 * 24);
        if (daysPassed > 14) {
          overdueCount++;
        }
      }
    }
  });

  // Next shipment
  const pendingShipments = shipments.filter(s => !s.arrived && s.eta);
  const nextShipment = pendingShipments.length > 0 
    ? Math.min(...pendingShipments.map(s => new Date(s.eta).getTime()))
    : null;

  console.log('Dashboard stats calculated:', {
    total: inventory.length,
    byStatus,
    inStockCount,
    installedCount,
    contractorCount,
    publicCount,
    overdueCount,
    contractorNames: contractorNames.length
  });

  return {
    total: inventory.length,
    byStatus,
    byLocation: {}, // Can add location breakdown if needed
    nextShipment,
    overdueCount,
    inStockCount,
    installedCount,
    contractorCount,
    publicCount
  };
}


// --- UI Utility Functions ---
function createListItem(text, idx, listType, onEdit, onDelete) {
  const li = document.createElement('li');
  li.className = "flex items-center justify-between px-3 py-2 rounded bg-green-200 dark:bg-gray-700 hover:bg-green-300 dark:hover:bg-gray-600 transition group cursor-grab text-gray-900 dark:text-gray-100";
  li.draggable = true;
  li.innerHTML = `
  <span>${text}</span>
  <div class="flex gap-2 items-center">
    <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
    <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
    <span class="drag-icon cursor-grab text-gray-400 group-hover:text-gray-200 transition">&#9776;</span>
  </div>
  `;
  // Drag events
  li.addEventListener('dragstart', e => {
    e.dataTransfer.setData("index", idx);
    e.dataTransfer.setData("listType", listType);
  });
  li.addEventListener('dragover', e => e.preventDefault());
  li.addEventListener('drop', e => {
    e.preventDefault();
    const fromIdx = +e.dataTransfer.getData("index");
    const fromListType = e.dataTransfer.getData("listType");
    if (fromListType !== listType) return;
    if (fromIdx !== idx) {
      reorderItem(listType, fromIdx, idx);
    }
  });
  // Button events
  li.querySelector('.edit-btn').onclick = () => onEdit(idx);
  li.querySelector('.delete-btn').onclick = () => onDelete(idx);
  return li;
}

// --- Modal Functions ---
function showEntryDialog(title, initValue = "") {
  return new Promise(resolve => {
    const dialog = document.getElementById("entryDialog");
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${title}</h3>
        <input id="entryInput" type="text" class="border px-2 py-1 rounded" value="${initValue}" required autofocus>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `;
    dialog.showModal();
    const form = dialog.querySelector('form');
    form.querySelector('button[value="cancel"]').onclick = () => {
      dialog.close();
      resolve(undefined);
    };
    form.onsubmit = e => {
      e.preventDefault();
      resolve(dialog.querySelector("#entryInput").value.trim());
      dialog.close();
    };
  });
}
function showConfirmDialog(msg) {
  return new Promise(resolve => {
    const dialog = document.getElementById("confirmDialog");
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-4">
        <p>${msg}</p>
        <div class="flex justify-end gap-2">
          <button value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </form>
    `;
    dialog.showModal();
    dialog.querySelector('form').onsubmit = e => {
      e.preventDefault();
      resolve(document.activeElement.value === "ok");
      dialog.close();
    };
  });
}

// --- CRUD Handlers and Rendering ---
let settings;
function renderList(type, listId) {
  const ul = document.getElementById(listId);
  ul.innerHTML = "";
  if (type === "locations") {
    settings[type].forEach((item, idx) => {
      // Find parent container name instead of using raw parent ID
      let parentName = "";
      if (item.parent) {
        const parentContainer = settings.parentContainers?.find(p => p.id === item.parent);
        if (parentContainer) {
          parentName = `<span class="text-xs text-gray-500 ml-2" style="color:${parentContainer.color}">
            (${parentContainer.name})
          </span>`;
        } else {
          parentName = `<span class="text-xs text-gray-500 ml-2">(${item.parent})</span>`;
        }
      }
      
      ul.appendChild(createListItem(
        item.name + (parentName || ""),
        idx,
        type,
        i => onEditItem(type, i),
        i => onDeleteItem(type, i)
      ));
    });
  } else {
    // Existing code for other types
    settings[type].forEach((item, idx) => {
      ul.appendChild(createListItem(
        item,
        idx,
        type,
        i => onEditItem(type, i),
        i => onDeleteItem(type, i)
      ));
    });
  }
}  
  async function onAddItem(type, listId, label) {
    if (type === "locations") {
      showEntryWithParentDialog("Add Location").then(async (result) => {
        if (!result) return; // <-- Fix: check for undefined
        const { value, parent } = result;
        if (!value || !parent) return;
        if (!Array.isArray(settings[type])) settings[type] = [];
        settings[type].push({ name: value, parent });
        await saveSettings(settings);
        renderList(type, listId);
        showToast(label + " added!", "green");
      });
    } else {
      showEntryDialog(`Add ${label}`).then(async value => {
        if (!value) return;
        if (!Array.isArray(settings[type])) settings[type] = [];
        settings[type].push(value);
        await saveSettings(settings);
        renderList(type, listId);
        showToast(label + " added!", "green");
      });
    }
  }

  // Replace the existing showEntryWithParentDialog function with this one:
function showEntryWithParentDialog(title, initValue = "", initParent = "") {
  return new Promise(resolve => {
    const dialog = document.getElementById("entryDialog");
    const parentOptions = settings.parentContainers || [];
    
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${title}</h3>
        <input id="entryInput" type="text" class="border px-2 py-1 rounded" required autofocus placeholder="Location Name" value="${initValue}">
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Parent Category</label>
          <select id="parentSelect" class="border px-2 py-1 rounded w-full">
            <option value="">-- Select Parent Container --</option>
            ${parentOptions.map(opt => `
              <option value="${opt.id}"${opt.id === initParent ? " selected" : ""}>
                ${opt.name}
              </option>
            `).join("")}
          </select>
        </div>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `;
    dialog.showModal();
    const form = dialog.querySelector('form');
    form.querySelector('button[value="cancel"]').onclick = () => {
      dialog.close();
      resolve(undefined);
    };
    form.onsubmit = e => {
      e.preventDefault();
      const value = dialog.querySelector("#entryInput").value.trim();
      const parent = dialog.querySelector("#parentSelect").value;
      if (!value || !parent) return;
      dialog.close();
      resolve({ value, parent });
    };
  });
}
  
  async function onEditItem(type, idx) {
    if (type === "locations") {
      const current = settings[type][idx];
      showEntryWithParentDialog("Edit Location", current.name, current.parent).then(async (result) => {
        if (!result) return;
        const { value, parent } = result;
        if (!value || !parent) return;
        settings[type][idx] = { name: value, parent };
        await saveSettings(settings);
        renderList(type, getListId(type));
        showToast("Location updated!", "blue");
      });
    } else {
      showEntryDialog(`Edit`, settings[type][idx]).then(async value => {
        if (!value) return;
        settings[type][idx] = value;
        await saveSettings(settings);
        renderList(type, getListId(type));
        showToast("Item updated!", "blue");
      });
    }
  }

  async function onDeleteItem(type, idx) {
    // Add validation for locations
    if (type === "locations") {
      const locationName = settings[type][idx].name;
      // Check if location is in use by inventory
      try {
        const inventory = await loadInventory();
        const itemsAtLocation = inventory.filter(i => i.location === locationName);
        if (itemsAtLocation.length > 0) {
          return showToast(
            `Cannot delete - ${itemsAtLocation.length} inventory items are at this location!`, 
            "red"
          );
        }
      } catch (error) {
        console.warn('Could not check location usage:', error);
      }
    }
  
    showConfirmDialog(`Delete this item?`).then(async ok => {
      if (!ok) return;
      settings[type].splice(idx, 1);
      await saveSettings(settings);
      renderList(type, getListId(type));
      showToast("Item deleted!", "red");
    });
  }

async function reorderItem(type, fromIdx, toIdx) {
  const arr = settings[type];
  const [moved] = arr.splice(fromIdx, 1);
  arr.splice(toIdx, 0, moved);
  await saveSettings(settings);
  renderList(type, getListId(type));
}

function getListId(type) {
  return type === "locations" ? "locList"
    : type === "statuses" ? "statList"
    : "vendorList";
}

function renderContractorList() {
  const ul = document.getElementById("contractorList");
  ul.innerHTML = "";
  if (!Array.isArray(settings.contractors)) return;
  settings.contractors.forEach((c, idx) => {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between px-3 py-2 rounded bg-cyan-200 dark:bg-gray-700 hover:bg-cyan-300 dark:hover:bg-gray-600 transition group";
    li.innerHTML = `
      <div>
        <span class="font-semibold">${c.name}</span>
        <span class="text-xs text-gray-700 dark:text-gray-300 ml-2">(${c.company})</span>
        <span class="text-xs text-gray-500 ml-2">${c.phone}</span>
      </div>
      <div class="flex gap-2 items-center">
        <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
        <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
      </div>
    `;
    li.querySelector('.edit-btn').onclick = () => onEditContractor(idx);
    li.querySelector('.delete-btn').onclick = () => onDeleteContractor(idx);
    ul.appendChild(li);
  });
}

async function onAddContractor() {
  showContractorDialog().then(async values => {
    if (!values) return;
    settings.contractors.push({
      id: Date.now(),
      name: values.name,
      company: values.company,
      phone: values.phone
    });
    await saveSettings(settings);
    renderContractorList();
    showToast("Contractor added!", "green");
  });
}

async function onEditContractor(idx) {
  const c = settings.contractors[idx];
  showContractorDialog(c).then(async values => {
    if (!values) return;
    settings.contractors[idx] = { ...c, ...values };
    await saveSettings(settings);
    renderContractorList();
    showToast("Contractor updated!", "blue");
  });
}

async function onDeleteContractor(idx) {
  showConfirmDialog("Delete this contractor?").then(async ok => {
    if (!ok) return;
    settings.contractors.splice(idx, 1);
    await saveSettings(settings);
    renderContractorList();
    showToast("Contractor deleted!", "red");
  });
}

function showContractorDialog(init = {}) {
  return new Promise(resolve => {
    const dialog = document.getElementById("entryDialog");
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${init.name ? "Edit" : "Add"} Contractor</h3>
        <input id="contractorName" type="text" class="border px-2 py-1 rounded" placeholder="Full Name" value="${init.name || ""}" required>
        <input id="contractorCompany" type="text" class="border px-2 py-1 rounded" placeholder="Company Name" value="${init.company || ""}" required>
        <input id="contractorPhone" type="tel" class="border px-2 py-1 rounded" placeholder="Phone Number" value="${init.phone || ""}" required>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `;
    dialog.showModal();
    const form = dialog.querySelector('form');
    form.querySelector('button[value="cancel"]').onclick = () => {
      dialog.close();
      resolve(undefined);
    };
    form.onsubmit = e => {
      e.preventDefault();
      resolve({
        name: dialog.querySelector("#contractorName").value.trim(),
        company: dialog.querySelector("#contractorCompany").value.trim(),
        phone: dialog.querySelector("#contractorPhone").value.trim()
      });
      dialog.close();
    };
  });
}

function renderParentContainerList() {
  const ul = document.getElementById("parentContainerList");
  if (!ul) return;
  ul.innerHTML = "";
  
  if (!Array.isArray(settings.parentContainers)) {
    settings.parentContainers = [];
  }

  settings.parentContainers.forEach((item, idx) => {
    const li = document.createElement('li');
    li.className = "flex items-center justify-between px-3 py-2 rounded bg-blue-200 dark:bg-gray-700 hover:bg-blue-300 dark:hover:bg-gray-600 transition group cursor-grab text-gray-900 dark:text-gray-100 mb-2";
    li.draggable = true;
    li.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="w-4 h-4 rounded-full" style="background-color: ${item.color || '#6b7280'}"></span>
        <span class="font-medium">${item.name}</span>
        <span class="text-xs text-gray-500">(${item.id})</span>
      </div>
      <div class="flex gap-2 items-center">
        <button class="edit-btn text-blue-400 hover:text-blue-300 transition" title="Edit">&#9998;</button>
        <button class="delete-btn text-red-400 hover:text-red-300 transition" title="Delete">&times;</button>
        <span class="drag-icon cursor-grab text-gray-400 group-hover:text-gray-200 transition">&#9776;</span>
      </div>
    `;
    
    // Add event listeners similar to other lists
    li.addEventListener('dragstart', e => {
      e.dataTransfer.setData("index", idx);
      e.dataTransfer.setData("listType", "parentContainers");
    });
    li.addEventListener('dragover', e => e.preventDefault());
    li.addEventListener('drop', e => {
      e.preventDefault();
      const fromIdx = +e.dataTransfer.getData("index");
      const fromListType = e.dataTransfer.getData("listType");
      if (fromListType !== "parentContainers") return;
      if (fromIdx !== idx) {
        reorderItem("parentContainers", fromIdx, idx);
      }
    });
    
    // Button events
    li.querySelector('.edit-btn').onclick = () => onEditParentContainer(idx);
    li.querySelector('.delete-btn').onclick = () => onDeleteParentContainer(idx);
    
    ul.appendChild(li);
  });
}

function showParentContainerDialog(title, init = {}) {
  return new Promise(resolve => {
    const dialog = document.getElementById("entryDialog");
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-3">
        <h3 class="font-bold">${title}</h3>
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">ID (for reference)</label>
          <input id="containerId" type="text" class="w-full border px-2 py-1 rounded" 
                 value="${init.id || ''}" required placeholder="warehouse, customer, etc">
        </div>
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Display Name</label>
          <input id="containerName" type="text" class="w-full border px-2 py-1 rounded" 
                 value="${init.name || ''}" required placeholder="Warehouses, Public Locations, etc">
        </div>
        <div>
          <label class="block text-sm text-gray-600 dark:text-gray-300 mb-1">Color</label>
          <input id="containerColor" type="color" class="w-full border px-2 py-1 rounded" 
                 value="${init.color || '#6b7280'}">
        </div>
        <div class="flex justify-end gap-2">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button type="submit" value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Save</button>
        </div>
      </form>
    `;
    dialog.showModal();
    const form = dialog.querySelector('form');
    form.querySelector('button[value="cancel"]').onclick = () => {
      dialog.close();
      resolve(undefined);
    };
    form.onsubmit = e => {
      e.preventDefault();
      resolve({
        id: dialog.querySelector("#containerId").value.trim(),
        name: dialog.querySelector("#containerName").value.trim(),
        color: dialog.querySelector("#containerColor").value
      });
      dialog.close();
    };
  });
}

async function onAddParentContainer() {
  showParentContainerDialog("Add Parent Container").then(async result => {
    if (!result) return;
    const { id, name, color } = result;
    if (!id || !name) return;
    
    // Check for duplicate IDs
    if (settings.parentContainers.some(p => p.id === id)) {
      showToast(`A parent container with ID "${id}" already exists!`, "red");
      return;
    }
    
    if (!Array.isArray(settings.parentContainers)) settings.parentContainers = [];
    settings.parentContainers.push({ id, name, color });
    await saveSettings(settings);
    renderParentContainerList();
    showToast("Parent container added!", "green");
  });
}

async function onEditParentContainer(idx) {
  const current = settings.parentContainers[idx];
  showParentContainerDialog("Edit Parent Container", current).then(async result => {
    if (!result) return;
    const { id, name, color } = result;
    if (!id || !name) return;
    settings.parentContainers[idx] = { id, name, color };
    await saveSettings(settings);
    renderParentContainerList();
    showToast("Parent container updated!", "blue");
  });
}

async function onDeleteParentContainer(idx) {
  // Check if this parent is in use by any locations
  const locationsUsingParent = settings.locations.filter(
    loc => loc.parent === settings.parentContainers[idx].id
  );
  
  if (locationsUsingParent.length > 0) {
    return showToast(
      `Cannot delete - ${locationsUsingParent.length} locations are using this parent!`, 
      "red"
    );
  }
  
  showConfirmDialog(`Delete this parent container? This will not affect locations.`).then(async ok => {
    if (!ok) return;
    settings.parentContainers.splice(idx, 1);
    await saveSettings(settings);
    renderParentContainerList();
    showToast("Parent container deleted!", "red");
  });
}


export async function initSettings() {
  try {
    console.log('Starting settings initialization...');
    
    // FIXED: Check permissions with proper container selector
    const hasAccess = await checkPageAccess('settings');
    if (!hasAccess) {
      const userRole = await getCurrentUserRole();
      if (userRole === 'Agent') {
        console.log('Agent trying to access settings, redirecting to inventory');
        window.location.href = '/inventory.html';
        return;
      }
      console.log('Access denied to settings page');
      renderAccessDenied('section'); // FIXED: Use 'section' instead of default
      return;
    }

    console.log('Loading settings data...');
    settings = await loadSettings();
    console.log('Settings loaded:', settings);
    
    // Render all sections
    renderParentContainerList();
    renderList("locations", "locList");
    renderList("statuses", "statList");
    renderList("vendors", "vendorList");
    renderContractorList();

    // Set up event listeners with null checks
    const addParentBtn = document.getElementById("addParentContainerBtn");
    if (addParentBtn) {
      addParentBtn.addEventListener("click", onAddParentContainer);
    }
    
    const addContractorBtn = document.getElementById("addContractorBtn");
    if (addContractorBtn) {
      addContractorBtn.addEventListener("click", onAddContractor);
    }
    
    const addLocBtn = document.getElementById("addLocBtn");
    if (addLocBtn) {
      addLocBtn.addEventListener("click", () => onAddItem("locations", "locList", "Location"));
    }
    
    const addStatBtn = document.getElementById("addStatBtn");
    if (addStatBtn) {
      addStatBtn.addEventListener("click", () => onAddItem("statuses", "statList", "Status"));
    }
    
    const addVendorBtn = document.getElementById("addVendorBtn");
    if (addVendorBtn) {
      addVendorBtn.addEventListener("click", () => onAddItem("vendors", "vendorList", "Vendor"));
    }

    console.log('Settings page initialized successfully');
    
  } catch (error) {
    console.error('Failed to initialize settings:', error);
    showToast('Failed to load settings: ' + error.message, 'red');
    
    // Show error in the main section
    const section = document.querySelector('section');
    if (section) {
      section.innerHTML = `
        <div class="flex items-center justify-center min-h-[60vh]">
          <div class="text-center max-w-md mx-auto p-8">
            <div class="w-16 h-16 mx-auto mb-4 text-red-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" class="w-full h-full">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Settings Error</h2>
            <p class="text-gray-500 dark:text-gray-400 mb-4">Failed to load settings: ${error.message}</p>
            <button onclick="window.location.reload()" 
                    class="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
              Retry
            </button>
          </div>
        </div>
      `;
    }
  }
}

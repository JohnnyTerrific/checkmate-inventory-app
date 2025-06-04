// --- Data service abstraction ---
import { showToast } from '../js/core.js';
import { db } from './utils/firebase.js'; // <-- Use your shared db instance!
import { doc, getDoc, setDoc } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCdNoC5xt3zkMpB5YNmx2spRsiBMiJl5Uo",
  authDomain: "checkmate-enova.firebaseapp.com",
  projectId: "checkmate-enova",
  storageBucket: "checkmate-enova.firebasestorage.app",
  messagingSenderId: "1036780232884",
  appId: "1:1036780232884:web:689229ef07859db22e77e1"
};

const SETTINGS_KEY = "settings"; // Firestore doc id

// Only show allowed statuses for each location
export const allowedStatusesByLocation = {
    "Back Warehouse":    ["In Stock","Faulty","RMA","Reserved","Demo","Loaner"],
    "Enova Warehouse":   ["In Stock","Faulty","RMA","Reserved","Demo","Loaner"],
    "Contractor/Technician": ["In Stock","Reserved","Loaner"],
    "Customer Stock":    ["Installed (Wevo)","Installed (Retail)","Faulty"],
    "Public":            ["Installed","Decommissioned","Faulty"]
};

export async function loadSettings() {
  const defaults = {
    locations: [
      { name: "Back Warehouse",    parent: null },
      { name: "Transworld - Shoham", parent: "Back Warehouse" },
      { name: "Transworld - Ashdod", parent: "Back Warehouse" },

      { name: "Enova Warehouse",   parent: null },
      { name: "Level - 4 Storage", parent: "Enova Warehouse" },
      { name: "Office Storage",    parent: "Enova Warehouse" },
      { name: "Lab",               parent: "Enova Warehouse" },

      { name: "Contractor/Technician", parent: null },
      // specific contractors will be added via the UI

      { name: "Customer Stock",  parent: null },
      { name: "Installed (Wevo)",   parent: "Customer Stock" },
      { name: "Installed (Retail)", parent: "Customer Stock" },

      { name: "Public",                parent: null },
      { name: "Public Chargers",       parent: "Public" },

      { name: "Factory", parent: null },
      { name: "Shipping", parent: null },
      { name: "Port", parent: null },
      { name: "Lost", parent: null },
      { name: "Unknown", parent: "Lost" }
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
        locations: loaded.locations || defaults.locations,
        statuses: loaded.statuses || defaults.statuses,
        vendors: loaded.vendors || defaults.vendors,
        contractors: loaded.contractors || defaults.contractors
      };
    } else {
      // No settings in Firestore, return defaults
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

export function getDashboardStats(inventory, shipments) {
  const byStatus = {};
  let contractorCount = 0, overdueCount = 0, publicCount = 0;
  inventory.forEach(i => {
    byStatus[i.status] = (byStatus[i.status] || 0) + 1;
    if (i.contractor) contractorCount++;
    // Patch: count public by location or status
    if (
      (i.location && typeof i.location === "string" && i.location.toLowerCase().includes('public')) || 
      (typeof i.status === "string" && i.status.toLowerCase().includes('public'))
    ) publicCount++;
    if (i.assignedDate && (Date.now() - new Date(i.assignedDate).getTime()) > 14 * 24 * 60 * 60 * 1000) overdueCount++;
  });
  return {
    total: inventory.length,
    byStatus,
    contractorCount,
    overdueCount,
    publicCount,
    nextShipment: shipments.length ? Math.min(...shipments.map(s => new Date(s.date).getTime())) : null
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
        let label = (typeof item === "object" && item.parent) ? `<span class="text-xs text-gray-500 ml-2">(${item.parent})</span>` : "";
        ul.appendChild(createListItem(
          (typeof item === "object" ? item.name : item) + label,
          idx,
          type,
          i => onEditItem(type, i),
          i => onDeleteItem(type, i)
        ));
      });
    } else {
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

  function showEntryWithParentDialog(title, initValue = "", initParent = "") {
    const parentOptions = settings.locations.map(loc => loc.name);
    return new Promise(resolve => {
      const dialog = document.getElementById("entryDialog");
      dialog.innerHTML = `
        <form method="dialog" class="flex flex-col gap-3">
          <h3 class="font-bold">${title}</h3>
          <input id="entryInput" type="text" class="border px-2 py-1 rounded" required autofocus placeholder="Location Name" value="${initValue}">
          <select id="parentSelect" class="border px-2 py-1 rounded">
            <option value="">-- Select Parent Stock --</option>
            ${parentOptions.map(opt => `<option value="${opt}"${opt === initParent ? " selected" : ""}>${opt}</option>`).join("")}
          </select>
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


// --- Wire Everything ---
export async function initSettings() {
  settings = await loadSettings();
  renderList("locations", "locList");
  renderList("statuses", "statList");
  renderList("vendors", "vendorList");
  renderContractorList();

  document.getElementById("addContractorBtn").onclick = onAddContractor;
  document.getElementById("addLocBtn").onclick = () => onAddItem("locations", "locList", "Location");
  document.getElementById("addStatBtn").onclick = () => onAddItem("statuses", "statList", "Status");
  document.getElementById("addVendorBtn").onclick = () => onAddItem("vendors", "vendorList", "Vendor");
}

// Utility: get from your product/vendor/settings data source
import { showToast } from '../js/core.js';
import { loadInventory, saveInventory } from './inventory.js'; // Add at the top if not already

/** Loads all shipments from localStorage. */
function loadShipments() {
    return JSON.parse(localStorage.getItem('cm_shipments_v1') || '[]');
  }
/** Saves all shipments to localStorage. */  
  function saveShipments(arr) {
    localStorage.setItem('cm_shipments_v1', JSON.stringify(arr));
  }
  
/** Loads the product list from localStorage and ensures each has a name. */  
function getProductList() {
    const arr = JSON.parse(localStorage.getItem('cm_products_v1') || '[]');
    return arr.map(p => ({
      ...p,
      name: p.name || p.model || ""
    }));
  }
/** Loads the vendor list from settings (v2, fallback to v1). */
  function getVendorList() {
    const v2 = JSON.parse(localStorage.getItem('cm_settings_v2') || '{}').vendors || [];
    if (v2.length) return v2;
    // fallback for legacy support:
    return JSON.parse(localStorage.getItem('cm_settings_v1') || '{}').vendors || [];
}
// TODO: Move these arrays to settings.js or dynamic config in the future
  const incoterms = ["FOB", "CIF", "DAP", "EXW", "DDP"];
  const shipmentTypes = ["Sea", "Air", "Rail", "Truck"];
  const ports = ["Haifa", "Ashdod", "Eilat", "Ben Gurion", "Other"];
  
  export function openShipmentDialog() {
    const dialog = document.getElementById("shipmentDialog");
    const products = getProductList();
    const vendors = getVendorList();
    
        dialog.innerHTML = `
        <form method="dialog"
          class="flex flex-col gap-4 w-full sm:w-[40rem] max-w-3xl"
          style="margin:0 auto;">
        
          <!-- Scrollable main content -->
          <div class="flex-1 overflow-y-auto p-6">
            <h3 class="font-bold text-xl mb-4 text-blue-800 dark:text-blue-300">Create New Shipment</h3>
            <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-semibold mb-1">Vendor <span class="text-red-500">*</span></label>
                      <select id="shipVendor" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                        <option value="">Select Vendor</option>
                        ${vendors.map(v => `<option value="${v}">${v}</option>`).join("")}
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold mb-1">Shipment ID</label>
                      <input id="shipId" type="text" placeholder="Auto if blank" class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                    </div>
                    <div>
                      <label class="block text-sm font-semibold mb-1">Incoterm <span class="text-red-500">*</span></label>
                      <select id="incoterm" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                        <option value="">Select Incoterm</option>
                        ${incoterms.map(i => `<option value="${i}">${i}</option>`).join("")}
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold mb-1">Shipment Type <span class="text-red-500">*</span></label>
                      <select id="shipType" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                        <option value="">Shipment Type</option>
                        ${shipmentTypes.map(t => `<option value="${t}">${t}</option>`).join("")}
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold mb-1">Port of Arrival <span class="text-red-500">*</span></label>
                      <select id="port" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                        <option value="">Port of Arrival</option>
                        ${ports.map(p => `<option value="${p}">${p}</option>`).join("")}
                      </select>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <div>
                        <label class="block text-sm font-semibold mb-1">Departure Date <span class="text-red-500">*</span></label>
                        <input id="departure" type="date" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                      </div>
                      <div>
                        <label class="block text-sm font-semibold mb-1">Arrival Date <span class="text-red-500">*</span></label>
                        <input id="arrival" type="date" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                      </div>
                    </div>
                  </div>
                
                    <div class="mt-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border">
      <label class="block text-sm font-semibold mb-2">Products <span class="text-red-500">*</span></label>
      <div id="productsArea" class="space-y-2"></div>
      <button id="addProdRowBtn" type="button" class="mt-2 text-blue-600 dark:text-blue-300 underline">+ Add Product</button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
      <input id="sumVat" type="number" placeholder="VAT Paid" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
      <input id="sumDuty" type="number" placeholder="Duty Paid" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
      <input id="sumShip" type="number" placeholder="Shipping Cost" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
      <input id="sumCustoms" type="number" placeholder="Customs Fee" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
    </div>
    <textarea id="shipNotes" placeholder="Notes (optional)" class="mt-4 border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800 w-full"></textarea>
  </div>
    <!-- Sticky footer for actions -->
  <div class="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-2 p-4 z-10">
    <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Cancel</button>
    <button value="ok" class="px-5 py-2 bg-purple-600 text-white rounded">Create Shipment</button>
  </div>
</form>
`;
    
        dialog.showModal();
    
        // Dynamic product rows:
        const area = dialog.querySelector("#productsArea");
        function renderRows() {
        area.innerHTML = Array.from(area.children).map((row, i) => row.outerHTML).join('');
        if (!area.children.length) addProdRow();
        }
        function addProdRow(model = "", qty = "") {
            const row = document.createElement("div");
            row.className = "flex items-center gap-2 mb-1";
            row.innerHTML = `
              <select class="prodSel border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 rounded flex-1" required>
                <option value="">Select Product</option>
                ${products.map(p => `<option value="${p.name}">${p.name}</option>`).join("")}
              </select>
              <input class="prodQty border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 rounded w-20" type="number" min="1" placeholder="Qty" value="${qty}" required>
              <button type="button" class="text-red-600 text-lg font-bold removeRowBtn ml-2">&times;</button>
            `;
            area.appendChild(row);
            row.querySelector(".removeRowBtn").onclick = () => { row.remove(); };
            row.querySelector(".prodSel").value = model;
          }

        dialog.querySelector("#addProdRowBtn").onclick = () => addProdRow();
        
        if (area.children.length === 0) addProdRow();
    
        // Cancel
        dialog.querySelector('button[value="cancel"]').onclick = e => { e.preventDefault(); dialog.close(); };
  
    // Submit logic:
    dialog.querySelector('form').onsubmit = e => {
        e.preventDefault();
        // Validation
        dialog.querySelectorAll('input, select').forEach(el => el.classList.remove('border-red-500'));
        const errorDiv = dialog.querySelector("#formError");
        errorDiv.textContent = "";
        const vendor = dialog.querySelector("#shipVendor").value.trim();
        let shipmentId = dialog.querySelector("#shipId").value.trim();
        const incoterm = dialog.querySelector("#incoterm").value;
        const shipType = dialog.querySelector("#shipType").value;
        const port = dialog.querySelector("#port").value;
        const departure = dialog.querySelector("#departure").value;
        const arrival = dialog.querySelector("#arrival").value;
        const sumVat = parseFloat(dialog.querySelector("#sumVat").value) || 0;
        const sumDuty = parseFloat(dialog.querySelector("#sumDuty").value) || 0;
        const sumShip = parseFloat(dialog.querySelector("#sumShip").value) || 0;
        const sumCustoms = parseFloat(dialog.querySelector("#sumCustoms").value) || 0;
        const notes = dialog.querySelector("#shipNotes").value.trim();
      
        // Product validation
        let productsArr = [];
        let anyProductMissing = false;
        for (let row of area.children) {
          const model = row.querySelector(".prodSel")?.value;
          const qty = parseInt(row.querySelector(".prodQty")?.value);
          if (!model || !qty) {
            row.querySelector(".prodSel")?.classList.add('border-red-500');
            row.querySelector(".prodQty")?.classList.add('border-red-500');
            anyProductMissing = true;
            continue;
          }
          productsArr.push({ model, qty });
        }
      
        let valid = true;
        if (!vendor) { valid = false; errorDiv.textContent = "Vendor required."; dialog.querySelector("#shipVendor").classList.add("border-red-500"); }
        else if (!incoterm) { valid = false; errorDiv.textContent = "Incoterm required."; dialog.querySelector("#incoterm").classList.add("border-red-500"); }
        else if (!shipType) { valid = false; errorDiv.textContent = "Shipment type required."; dialog.querySelector("#shipType").classList.add("border-red-500"); }
        else if (!port) { valid = false; errorDiv.textContent = "Port required."; dialog.querySelector("#port").classList.add("border-red-500"); }
        else if (!departure) { valid = false; errorDiv.textContent = "Departure date required."; dialog.querySelector("#departure").classList.add("border-red-500"); }
        else if (!arrival) { valid = false; errorDiv.textContent = "Arrival date required."; dialog.querySelector("#arrival").classList.add("border-red-500"); }
        else if (!productsArr.length || anyProductMissing) { valid = false; errorDiv.textContent = "Add at least one product (model and quantity required)."; }
      
        if (!valid) return;
      
        if (!shipmentId) shipmentId = "SHIP" + Date.now();
      
        const shipment = {
          shipmentId, vendor, incoterm, shipType, port,
          departure, eta: arrival,
          products: productsArr,
          milestones: [
            { name: "Order Placed", date: new Date(departure).toISOString(), complete: true },
            { name: "Dispatched", date: "", complete: false },
            { name: "At Port", date: "", complete: false },
            { name: "In Transit", date: "", complete: false },
            { name: "Arrived", date: "", complete: false }
          ],
          sums: { vat: sumVat, duty: sumDuty, shipping: sumShip, customs: sumCustoms },
          notes,
          arrived: false
        };
      
        const arr = loadShipments();
        arr.push(shipment);
        saveShipments(arr);

        const inventory = loadInventory();
productsArr.forEach(({ model, qty }) => {
  let count = 0;
  for (let unit of inventory) {
    // Only update units that are available for shipping (e.g., in Factory or Back Warehouse)
    if (
      unit.model === model &&
      (unit.location === "Factory" || unit.location === "Back Warehouse") &&
      unit.status !== "Shipping"
    ) {
      unit.location = "Shipping";
      unit.status = "Shipping";
      unit.lastAction = new Date().toISOString();
      count++;
      if (count >= qty) break;
    }
  }
});
saveInventory(inventory);

        showToast("Shipment created", "green");
        dialog.close();
        if (typeof updateAlertBell === "function") updateAlertBell();
        if (typeof renderShipmentList === "function") renderShipmentList();
      };
    }
    window.openShipmentDialog = openShipmentDialog;

  
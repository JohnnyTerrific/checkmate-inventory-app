import { showToast, showToastWithAction } from './core.js';
import { loadInventory, saveInventory } from './inventory.js';
import { getCurrentUserEmail } from './utils/users.js';

// Firestore Operations
export async function loadShipments() {
  try {
    // Use window.db consistently instead of mixing v8/v9 syntax
    const snapshot = await window.db.collection('shipments')
      .orderBy('departure', 'desc')
      .get();
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Ensure dates are properly formatted
      departure: doc.data().departure,
      eta: doc.data().eta,
      created: doc.data().created || new Date().toISOString()
    }));
  } catch (error) {
    console.error('Error loading shipments:', error);
    return [];
  }
}

export async function saveShipment(shipmentData) {
  try {
    const docRef = await window.db.collection('shipments').add({
      ...shipmentData,
      created: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    });
    
    console.log('Shipment saved with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving shipment:', error);
    throw error;
  }
}

export async function updateShipment(shipmentId, updates) {
  try {
    const shipmentRef = doc(db, 'shipments', shipmentId);
    await updateDoc(shipmentRef, {
      ...updates,
      lastUpdated: new Date().toISOString()
    });
    
    console.log('Shipment updated:', shipmentId);
  } catch (error) {
    console.error('Error updating shipment:', error);
    throw error;
  }
}

export async function deleteShipment(shipmentId) {
  try {
    const shipmentRef = doc(db, 'shipments', shipmentId);
    await deleteDoc(shipmentRef);
    
    console.log('Shipment deleted:', shipmentId);
  } catch (error) {
    console.error('Error deleting shipment:', error);
    throw error;
  }
}

// Get shipments arriving today or overdue
export async function getArrivingShipments() {
  try {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    
    const snapshot = await window.db.collection('shipments')
      .where('arrived', '==', false)
      .where('acknowledged', '==', false)
      .get();
    
    const allPending = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    const arriving = allPending.filter(shipment => {
      if (!shipment.eta) return false;
      const etaDate = new Date(shipment.eta);
      return etaDate <= today; // This line was incomplete in your code
    });
    
    return arriving;
  } catch (error) {
    console.error('Error getting arriving shipments:', error);
    return [];
  }
}

export async function acknowledgeArrivedShipments() {
  try {
    const today = new Date();
    const arrivedShipments = await getArrivingShipments();

    if (arrivedShipments.length === 0) return;

    // Mark shipments as acknowledged
    const batch = window.db.batch();
    arrivedShipments.forEach(shipment => {
      const docRef = window.db.collection("shipments").doc(shipment.id);
      batch.update(docRef, {
        acknowledged: true,
        acknowledgedDate: new Date().toISOString(),
        acknowledgedBy: getCurrentUserEmail() || 'unknown_user'
      });
    });

    await batch.commit();
    
    showToast(`Acknowledged ${arrivedShipments.length} arrived shipment(s)`, 'green');
    
    // Clear the cached arriving shipments
    window._arrivingShipments = [];
    
  } catch (error) {
    console.error('Failed to acknowledge shipments:', error);
    showToast('Failed to acknowledge shipments: ' + error.message, 'red');
  }
}

// Mark shipment as arrived
export async function markShipmentArrived(shipmentId) {
  try {
    const shipmentRef = doc(db, 'shipments', shipmentId);
    await updateDoc(shipmentRef, {
      arrived: true,
      actualArrivalDate: new Date().toISOString(),
      lastUpdated: new Date().toISOString(),
      // Update the final milestone
      milestones: [
        { name: "Order Placed", date: "", complete: true },
        { name: "Dispatched", date: "", complete: true },
        { name: "At Port", date: "", complete: true },
        { name: "In Transit", date: "", complete: true },
        { name: "Arrived", date: new Date().toISOString(), complete: true }
      ]
    });
    
    console.log('Shipment marked as arrived:', shipmentId);
  } catch (error) {
    console.error('Error marking shipment as arrived:', error);
    throw error;
  }
}

// Update shipment milestone
export async function updateShipmentMilestone(shipmentId, milestoneIndex, completed = true) {
  try {
    const shipmentsRef = collection(db, 'shipments');
    const shipmentDoc = await getDocs(query(shipmentsRef, where('__name__', '==', shipmentId)));
    
    if (shipmentDoc.empty) {
      throw new Error('Shipment not found');
    }
    
    const shipmentData = shipmentDoc.docs[0].data();
    const milestones = [...shipmentData.milestones];
    
    if (milestones[milestoneIndex]) {
      milestones[milestoneIndex].complete = completed;
      if (completed) {
        milestones[milestoneIndex].date = new Date().toISOString();
      }
    }
    
    const shipmentRef = doc(db, 'shipments', shipmentId);
    await updateDoc(shipmentRef, {
      milestones,
      lastUpdated: new Date().toISOString()
    });
    
    console.log('Milestone updated:', shipmentId, milestoneIndex);
  } catch (error) {
    console.error('Error updating milestone:', error);
    throw error;
  }
}

// Load settings from Firestore
async function loadSettings() {
  try {
    const settingsRef = collection(db, 'appdata');
    const q = query(settingsRef, where('__name__', '==', 'settings'));
    const snapshot = await getDocs(q);
    
    if (!snapshot.empty) {
      return snapshot.docs[0].data();
    }
    
    // Return defaults if no settings found
    return {
      vendors: ["Teison", "ABL", "EnelX", "Vestel"],
      statuses: ["In Stock", "Installed", "Faulty", "RMA", "Reserved"]
    };
  } catch (error) {
    console.error('Error loading settings:', error);
    return {
      vendors: ["Teison", "ABL", "EnelX", "Vestel"],
      statuses: ["In Stock", "Installed", "Faulty", "RMA", "Reserved"]
    };
  }
}

// Load products from Firestore
async function loadProducts() {
  try {
    const productsRef = collection(db, 'Products');
    const snapshot = await getDocs(productsRef);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      name: doc.data().name || doc.data().model || doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error loading products:', error);
    return [];
  }
}

// Static data - consider moving to Firestore settings in the future
const incoterms = ["FOB", "CIF", "DAP", "EXW", "DDP"];
const shipmentTypes = ["Sea", "Air", "Rail", "Truck"];
const ports = ["Haifa", "Ashdod", "Eilat", "Ben Gurion", "Other"];

export function openShipmentDialog() {
  const dialog = document.getElementById("shipmentDialog");
  if (!dialog) {
    console.error("Shipment dialog not found");
    return;
  }

  // Show loading state
  dialog.innerHTML = `
    <div class="flex items-center justify-center h-32">
      <div class="loader"></div>
      <span class="ml-2">Loading...</span>
    </div>
  `;
  dialog.showModal();

  // Load data and render form
  Promise.all([loadProducts(), loadSettings()])
    .then(([products, settings]) => {
      const vendors = settings.vendors || [];
      
      dialog.innerHTML = `
        <form method="dialog" class="flex flex-col gap-4 w-full sm:w-[40rem] max-w-3xl" style="margin:0 auto;">
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
                  <label class="block text-sm font-semibold mb-1">ETA <span class="text-red-500">*</span></label>
                  <input id="arrival" type="date" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                </div>
              </div>
            </div>
            
            <!-- Products Section -->
            <div class="mt-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border">
              <label class="block text-sm font-semibold mb-2">Products <span class="text-red-500">*</span></label>
              <div id="productsArea" class="space-y-2"></div>
              <button id="addProdRowBtn" type="button" class="mt-2 text-blue-600 dark:text-blue-300 underline">+ Add Product</button>
            </div>
            
            <!-- Financial Fields -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
              <input id="sumVat" type="number" placeholder="VAT Paid" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
              <input id="sumDuty" type="number" placeholder="Duty Paid" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
              <input id="sumShip" type="number" placeholder="Shipping Cost" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
              <input id="sumCustoms" type="number" placeholder="Customs Fee" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
            </div>
            
            <!-- Notes -->
            <textarea id="shipNotes" placeholder="Notes (optional)" class="mt-4 border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800 w-full"></textarea>
          </div>
          
          <!-- Sticky footer for actions -->
          <div class="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-2 p-4 z-10">
            <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Cancel</button>
            <button value="ok" class="px-5 py-2 bg-purple-600 text-white rounded">Create Shipment</button>
          </div>
        </form>
      `;

      // Initialize dynamic product rows
      const area = dialog.querySelector("#productsArea");
      
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
        
        row.querySelector(".removeRowBtn").onclick = () => row.remove();
        row.querySelector(".prodSel").value = model;
      }

      dialog.querySelector("#addProdRowBtn").onclick = () => addProdRow();
      
      // Add initial row
      if (area.children.length === 0) addProdRow();

      // Event handlers
      dialog.querySelector('button[value="cancel"]').onclick = e => {
        e.preventDefault();
        dialog.close();
      };

      dialog.querySelector('form').onsubmit = async e => {
        e.preventDefault();
        
        const submitBtn = e.target.querySelector('button[value="ok"]');
        if (submitBtn.disabled) return;
        
        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.textContent = 'Creating...';
        
        try {
          // Collect form data
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
          
          // Validate products
          let productsArr = [];
          let anyProductMissing = false;
          const errorDiv = dialog.querySelector("#formError");
          
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
          
          // Validation
          let valid = true;
          if (!vendor) {
            valid = false;
            errorDiv.textContent = "Vendor required.";
            dialog.querySelector("#shipVendor").classList.add("border-red-500");
          } else if (!incoterm) {
            valid = false;
            errorDiv.textContent = "Incoterm required.";
            dialog.querySelector("#incoterm").classList.add("border-red-500");
          } else if (!shipType) {
            valid = false;
            errorDiv.textContent = "Shipment type required.";
            dialog.querySelector("#shipType").classList.add("border-red-500");
          } else if (!port) {
            valid = false;
            errorDiv.textContent = "Port required.";
            dialog.querySelector("#port").classList.add("border-red-500");
          } else if (!departure) {
            valid = false;
            errorDiv.textContent = "Departure date required.";
            dialog.querySelector("#departure").classList.add("border-red-500");
          } else if (!arrival) {
            valid = false;
            errorDiv.textContent = "Arrival date required.";
            dialog.querySelector("#arrival").classList.add("border-red-500");
          } else if (!productsArr.length || anyProductMissing) {
            valid = false;
            errorDiv.textContent = "Add at least one product (model and quantity required).";
          }
          
          if (!valid) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Create Shipment';
            return;
          }
          
          // Generate shipment ID if not provided
          if (!shipmentId) {
            shipmentId = "SHIP" + Date.now();
          }
          
          // Create shipment object
          const shipment = {
            shipmentId,
            vendor,
            incoterm,
            shipType,
            port,
            departure,
            eta: arrival,
            products: productsArr,
            milestones: [
              { name: "Order Placed", date: new Date().toISOString(), complete: true },
              { name: "Dispatched", date: "", complete: false },
              { name: "At Port", date: "", complete: false },
              { name: "In Transit", date: "", complete: false },
              { name: "Arrived", date: "", complete: false }
            ],
            sums: {
              vat: sumVat,
              duty: sumDuty,
              shipping: sumShip,
              customs: sumCustoms
            },
            notes,
            arrived: false,
            createdBy: getCurrentUserEmail(),
            notificationsEnabled: true
          };
          
          // Save shipment to Firestore
          await saveShipment(shipment);
          
          // Update inventory status for shipping units
          const inventory = await loadInventory();
          let updatedUnits = 0;
          
          for (const { model, qty } of productsArr) {
            let count = 0;
            for (let unit of inventory) {
              if (
                (unit.model === model || unit.product === model) &&
                (unit.location === "Factory" || unit.location === "Back Warehouse") &&
                unit.status !== "Shipping"
              ) {
                unit.location = "Shipping";
                unit.status = "Shipping";
                unit.lastAction = new Date().toISOString();
                unit.shipmentId = shipmentId; // Link to shipment
                count++;
                updatedUnits++;
                if (count >= qty) break;
              }
            }
          }
          
          if (updatedUnits > 0) {
            await saveInventory(inventory);
          }
          
          showToast(`Shipment created successfully! ${updatedUnits} units marked as shipping.`, "green");
          dialog.close();
          
          // Update alert bell and refresh any shipment displays
          if (typeof window.updateAlertBell === "function") {
            window.updateAlertBell();
          }
          
          // Refresh dashboard if we're on it
          if (document.body.dataset.page === "dashboard") {
            if (typeof window.refreshDashboard === "function") {
              window.refreshDashboard();
            }
          }
          
        } catch (error) {
          console.error('Error creating shipment:', error);
          showToast('Failed to create shipment: ' + error.message, 'red');
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Create Shipment';
        }
      };
    })
    .catch(error => {
      console.error('Error loading shipment form data:', error);
      dialog.innerHTML = `
        <div class="p-6 text-center">
          <div class="text-red-600 mb-4">Error loading form data</div>
          <button onclick="this.closest('dialog').close()" class="bg-gray-300 px-4 py-2 rounded">Close</button>
        </div>
      `;
    });
}

// Export for use in other modules
window.openShipmentDialog = openShipmentDialog;

// Notification system integration
export async function checkForArrivingShipments() {
  try {
    const arrivingShipments = await getArrivingShipments();
    
    window._arrivingShipments = [];
    
    if (arrivingShipments && arrivingShipments.length > 0) {
      const message = `${arrivingShipments.length} shipment(s) have arrived or are overdue!`;
      
      // Use the correct format for showToastWithAction - array of action objects
      if (typeof showToastWithAction === 'function') {
        showToastWithAction(
          message,
          'orange',
          [
            {
              text: 'Acknowledge',
              action: () => {
                acknowledgeArrivedShipments();
              }
            }
          ]
        );
      } else {
        showToast(message, 'orange');
      }
      
      window._arrivingShipments = arrivingShipments;
      console.log('Arriving shipments detected:', arrivingShipments.length);
    } else {
      console.log('No arriving shipments found, clearing notifications');
    }
  } catch (error) {
    console.error('Error checking for arriving shipments:', error);
    window._arrivingShipments = [];
  }
}

export async function migrateOldOverdueShipments() {
  try {
    const today = new Date();
    const snapshot = await window.db.collection("shipments").get();
    const batch = window.db.batch();
    let updateCount = 0;

    snapshot.docs.forEach(doc => {
      const shipment = doc.data();
      if (!shipment.eta) return;
      
      const etaDate = new Date(shipment.eta);
      
      // If shipment is overdue and doesn't have acknowledged field, mark as acknowledged
      if (etaDate <= today && !shipment.arrived && shipment.acknowledged === undefined) {
        batch.update(doc.ref, {
          acknowledged: true,
          acknowledgedDate: new Date().toISOString(),
          acknowledgedBy: 'system_migration'
        });
        updateCount++;
      }
    });

    if (updateCount > 0) {
      await batch.commit();
      console.log(`Migrated ${updateCount} old overdue shipments`);
      showToast(`Migrated ${updateCount} old overdue shipments`, 'green');
    }
    
  } catch (error) {
    console.error('Migration failed:', error);
    showToast('Migration failed: ' + error.message, 'red');
  }
}

function initializeShipmentNotifications() {
  // Only check for notifications if we're on relevant pages
  const currentPage = document.body.dataset.page;
  if (!['dashboard', 'inventory'].includes(currentPage)) {
    return;
  }
  
  // Reduce frequency on mobile to avoid performance issues
  const isMobile = window.innerWidth < 900;
  const checkInterval = isMobile ? 10 * 60 * 1000 : 5 * 60 * 1000; // 10 min mobile, 5 min desktop
  
  // Check immediately on load with delay to avoid race conditions
  setTimeout(() => {
    checkForArrivingShipments();
  }, 3000); // 3 second delay
  
  // Set up periodic checking
  setInterval(checkForArrivingShipments, checkInterval);
}

if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeShipmentNotifications);
  } else {
    // DOM is already ready
    setTimeout(initializeShipmentNotifications, 1000);
  }
}

window.acknowledgeArrivedShipments = acknowledgeArrivedShipments;
window.migrateOldOverdueShipments = migrateOldOverdueShipments;

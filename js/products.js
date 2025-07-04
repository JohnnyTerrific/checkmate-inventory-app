// products.js
import { showToast } from '../js/core.js';
import { loadSettings } from './settings.js';
import { db } from './utils/firebase.js'; // <-- Use the shared db instance!
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  writeBatch,
  query,
  orderBy
} from "firebase/firestore";


export async function loadCategories() {
  // Read from appdata/categories (document)
  const docRef = doc(db, "appdata", "categories");
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return [];
  return snapshot.data().categories || [];
}

export async function saveCategories(categories) {
  await setDoc(
    doc(db, "appdata", "categories"),
    { categories }
  );
}

const PRODUCTS_SUBCOLLECTION_PATH = ["Products"];
const PRODUCTS_PER_PAGE = 8;

// Load all products from the products collection
export async function loadProducts() {
    // Query the “products” subcollection under /Products/appdata/
    const q = query(
      collection(db, ...PRODUCTS_SUBCOLLECTION_PATH),
      orderBy("order", "asc")
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

// Add a new product
export async function saveProduct(prod) {
    await addDoc(
      collection(db, ...PRODUCTS_SUBCOLLECTION_PATH),
      prod
    );
  }

// Update an existing product
export async function updateProduct(id, prod) {
    await updateDoc(
      doc(db, ...PRODUCTS_SUBCOLLECTION_PATH, id),
      prod
    );
  }

// Delete a product
export async function deleteProductById(id) {
    await deleteDoc(doc(db, ...PRODUCTS_SUBCOLLECTION_PATH, id));
  }


// Reorder products
export async function reorderProducts(idsInOrder) {
    const batch = writeBatch(db);
    idsInOrder.forEach((id, idx) => {
      batch.update(
        doc(db, ...PRODUCTS_SUBCOLLECTION_PATH, id),
        { order: idx }
      );
    });
    await batch.commit();
  }

// --- Render logic ---

let products = [];
let currentPage = 1;

export async function initProducts() {
  products = await loadProducts();
  renderProductsGrid();
  renderPagination();
  document.getElementById("addProductBtn").onclick = () => showProductDialog().then(addProduct);
}

async function renderProductsGrid() {
  products = await loadProducts();
  products.sort((a, b) => a.order - b.order);
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = "";

  grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start";
  
  const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageProducts = products.slice(start, start + PRODUCTS_PER_PAGE);

  for (let i = 0; i < pageProducts.length; ++i) {
    const p = pageProducts[i];
    const card = document.createElement("div");
    card.className = "relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col gap-2 cursor-grab group";
    card.draggable = true;
    card.setAttribute("data-index", start + i);

    card.innerHTML = `
      <div class="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button title="Edit" class="edit-btn text-blue-600"><svg width="20" height="20"><path d="M4 13.5V16h2.5l7.3-7.3-2.5-2.5L4 13.5zM17.7 6.3c.4-.4.4-1 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.8 1.8 4 4 1.8-1.8z" fill="currentColor"/></svg></button>
        <button title="Delete" class="delete-btn text-red-600"><svg width="20" height="20"><path d="M6 19c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/></svg></button>
        <span class="drag-handle cursor-grab text-gray-400" title="Drag">&#9776;</span>
      </div>
      <div><span class="font-bold">Model:</span> ${escapeHtml(p.name)}</div>
      <div><span class="font-bold">Vendor:</span> ${escapeHtml(p.vendor)}</div>
      <div><span class="font-bold">HS Code:</span> ${escapeHtml(p.hsCode)}</div>
      <div><span class="font-bold">Category:</span> ${escapeHtml(p.category)}</div>
      <div><span class="font-bold">Price:</span> ${
  isNaN(parseFloat(p.price)) ? "-" : parseFloat(p.price).toLocaleString(undefined, {style: "currency", currency: "USD"})
}</div>
      <div><span class="font-bold">Duty Rate:</span> ${p.dutyRate}%</div>
      <div><span class="font-bold">Customs Liability:</span> ${escapeHtml(p.customsLiability)}</div>
      <div><span class="font-bold">Depreciation Rate:</span> ${p.depreciationRate}%</div>
      <div><span class="font-bold">Description:</span> ${escapeHtml(p.description)}</div>
    `;

    card.querySelector(".edit-btn").onclick = () => showProductDialog(p, start + i).then(prod => editProduct(prod, start + i));
    card.querySelector(".delete-btn").onclick = () => showConfirmProductDialog(p).then(ok => { if (ok) deleteProduct(p); });

    card.querySelector(".drag-handle").onmousedown = e => e.stopPropagation();
    card.ondragstart = e => {
      e.dataTransfer.setData("dragIndex", start + i);
      card.classList.add("opacity-50");
    };
    card.ondragend = () => card.classList.remove("opacity-50");
    card.ondragover = e => { e.preventDefault(); card.classList.add("ring-2", "ring-purple-400"); };
    card.ondragleave = e => card.classList.remove("ring-2", "ring-purple-400");
    card.ondrop = e => {
      card.classList.remove("ring-2", "ring-purple-400");
      const fromIdx = +e.dataTransfer.getData("dragIndex");
      if (fromIdx !== start + i) reorderProductsByIndex(fromIdx, start + i);
    };

    grid.appendChild(card);
  }
}

function renderPagination() {
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE) || 1;
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = `
    <div class="flex justify-center items-center gap-4 py-4">
      <button id="productsPrevPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}" ${currentPage === 1 ? 'disabled' : ''}>Prev</button>
      <span class="font-semibold" id="pageNumSpan">Page ${currentPage} of ${totalPages}</span>
      <button id="productsNextPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}" ${currentPage === totalPages ? 'disabled' : ''}>Next</button>
      <label class="ml-6">Show
        <select id="productsPageSizeSelect" class="border px-2 py-1 rounded ml-2">
          <option value="8" ${PRODUCTS_PER_PAGE == 8 ? 'selected' : ''}>8</option>
          <option value="16" ${PRODUCTS_PER_PAGE == 16 ? 'selected' : ''}>16</option>
          <option value="25" ${PRODUCTS_PER_PAGE == 25 ? 'selected' : ''}>25</option>
          <option value="50" ${PRODUCTS_PER_PAGE == 50 ? 'selected' : ''}>50</option>
          <option value="100" ${PRODUCTS_PER_PAGE == 100 ? 'selected' : ''}>100</option>
        </select>
        entries per page
      </label>
    </div>
  `;

  // Event bindings - exactly as before
  pagination.querySelector('#productsPrevPageBtn').onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      renderProductsGrid();
      renderPagination();
    }
  };
  pagination.querySelector('#productsNextPageBtn').onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProductsGrid();
      renderPagination();
    }
  };
  pagination.querySelector('#productsPageSizeSelect').onchange = (e) => {
    window.PRODUCTS_PER_PAGE = parseInt(e.target.value, 10);
    currentPage = 1;
    renderProductsGrid();
    renderPagination();
  };
}

// --- CRUD and Dialogs ---

async function showProductDialog(product = null, editIndex = null) {
  return new Promise(async resolve => {
    const vendors = (await loadSettings()).vendors || [];
    const categories = await loadCategories();
    console.log("Loaded categories:", categories);

    // If editing, prefill values
    let initial = product || {
      name: "", vendor: "", hsCode: "", category: "", price: "", dutyRate: "", customsLiability: "",
      depreciationRate: "", description: ""
    };

    // Dialog HTML
    const dialog = document.getElementById("productDialog");
    dialog.innerHTML = `
  <form method="dialog" class="flex flex-col gap-3 w-80">
    <h3 class="font-bold mb-2">${product ? "Edit Product" : "Add Product"}</h3>
    <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
    <input id="name" type="text" placeholder="Model" required class="border px-2 py-1 rounded" value="${escapeHtml(initial.name)}">
    <select id="vendor" required class="border px-2 py-1 rounded">
      <option value="">-- Select Vendor --</option>
      ${vendors.map(v => `<option value="${escapeHtml(v)}" ${v === initial.vendor ? "selected" : ""}>${escapeHtml(v)}</option>`).join("")}
    </select>
    <input id="hsCode" type="text" placeholder="HS Code" required class="border px-2 py-1 rounded" value="${escapeHtml(initial.hsCode)}">
    <select id="category" required class="border px-2 py-1 rounded">
  <option value="">-- Select Category --</option>
  ${categories
    .map(
      (c) =>
        `<option value="${escapeHtml(c)}" ${
          c === initial.category ? "selected" : ""
        }>${escapeHtml(c)}</option>`
    )
    .join("")}
</select>
    <input id="price" type="number" placeholder="Price" min="0" required class="border px-2 py-1 rounded" value="${escapeHtml(initial.price)}">
    <input id="dutyRate" type="number" placeholder="Duty Rate (%)" min="0" max="100" required class="border px-2 py-1 rounded" value="${escapeHtml(initial.dutyRate)}">
    <select id="customsLiability" required class="border px-2 py-1 rounded">
      <option value="">-- Select Customs Liability --</option>
      <option value="Liable" ${initial.customsLiability === "Liable" ? "selected" : ""}>Liable</option>
      <option value="Non-Liable" ${initial.customsLiability === "Non-Liable" ? "selected" : ""}>Non-Liable</option>
    </select>
    <input id="depreciationRate" type="number" placeholder="Depreciation Rate (%)" min="0" max="100" required class="border px-2 py-1 rounded" value="${escapeHtml(initial.depreciationRate)}">
    <!-- Add your checkbox here -->
    <label class="flex items-center gap-2">
      <input type="checkbox" id="isPublicAsset" ${initial.isPublicAsset ? "checked" : ""}/>
      Public Asset
    </label>
    <textarea id="description" placeholder="Description" required class="border px-2 py-1 rounded">${escapeHtml(initial.description)}</textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">${product ? "Save" : "Add"}</button>
    </div>
    <button id="addCatBtn" type="button" class="text-xs text-blue-500 underline mt-1">Add new category</button>
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

    // inside showProductDialog
dialog.querySelector("#addCatBtn").onclick = async () => {
  const newCat = await showAddCategoryDialog(categories);
  if (newCat && !categories.includes(newCat)) {
    categories.push(newCat);
    await saveCategories(categories);
    dialog.querySelector("#category").innerHTML = `
      <option value="">-- Select Category --</option>
      ${categories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("")}
    `;
  }
};

    dialog.querySelector('form').onsubmit = e => {
      e.preventDefault();
      if (document.activeElement.value === "cancel") {
        dialog.close();
        resolve(undefined); // or resolve({}) for showEntryWithParentDialog
        return;
      }
        // Clear previous error states
        dialog.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('border-red-500'));
        dialog.querySelector("#formError").textContent = "";
      
        // Get all values
        const name = dialog.querySelector("#name").value.trim();
        const vendor = dialog.querySelector("#vendor").value;
        const hsCode = dialog.querySelector("#hsCode").value.trim();
        const category = dialog.querySelector("#category").value;
        const price = dialog.querySelector("#price").value;
        const dutyRate = dialog.querySelector("#dutyRate").value;
        const customsLiability = dialog.querySelector("#customsLiability").value;
        const depreciationRate = dialog.querySelector("#depreciationRate").value;
        const description = dialog.querySelector("#description").value.trim();
      
        // Field validation
        let valid = true;
      
        function markInvalid(selector) {
          dialog.querySelector(selector).classList.add('border-red-500');
          valid = false;
        }
      
        if (!name) markInvalid("#name");
        if (!vendor) markInvalid("#vendor");
        if (!hsCode) markInvalid("#hsCode");
        if (!category) markInvalid("#category");
        if (!price || isNaN(price) || Number(price) <= 0) markInvalid("#price");
        if (!dutyRate || isNaN(dutyRate) || Number(dutyRate) < 0) markInvalid("#dutyRate");
        if (!customsLiability) markInvalid("#customsLiability");
        if (depreciationRate === "" || isNaN(depreciationRate) || Number(depreciationRate) < 0) markInvalid("#depreciationRate");
        if (!description) markInvalid("#description");
      
        // Uniqueness check
        const duplicate = products.some((p, idx) => p.name.toLowerCase() === name.toLowerCase() && idx !== editIndex);
        if (duplicate) {
          markInvalid("#name");
          dialog.querySelector("#formError").textContent = "Product name must be unique!";
          return;
        }
      
        if (!valid) {
          dialog.querySelector("#formError").textContent = "Please fill in all required fields correctly.";
          return;
        }

        const isPublicAsset = dialog.querySelector('#isPublicAsset').checked;
      
        dialog.close();
        resolve({
          name,
          vendor,
          hsCode,
          category,
          price: price === "" ? null : Number(price),
          dutyRate: Number(dutyRate),
          customsLiability,
          depreciationRate: Number(depreciationRate),
          description,
          isPublicAsset,
          id: product && product.id ? product.id : undefined // <-- add this line
        });
    };     
    });     
}
      

function showConfirmProductDialog(product) {
  return new Promise(resolve => {
    const dialog = document.getElementById("confirmProductDialog");
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-4 w-64">
        <p>Delete product <span class="font-bold">${escapeHtml(product.name)}</span>? This cannot be undone.</p>
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

async function addProduct(prod) {
  if (!prod) return;
  products = await loadProducts();
  prod.order = products.length > 0 ? Math.max(...products.map(p => p.order)) + 1 : 0;
  // Remove id field if present (addDoc will generate it)
  if ('id' in prod) delete prod.id;
  await saveProduct(prod);
  showToast("Product added", "green");
  await renderProductsGrid();
  renderPagination();
}

async function editProduct(prod, idx) {
  if (!prod) return;
  await updateProduct(prod.id, prod);
  showToast("Product updated", "blue");
  await renderProductsGrid();
}

async function deleteProduct(prod) {
  await deleteProductById(prod.id);
  showToast("Product deleted", "red");
  await renderProductsGrid();
  renderPagination();
}

async function reorderProductsByIndex(fromIdx, toIdx) {
  products = await loadProducts();
  products.sort((a, b) => a.order - b.order);
  const [moved] = products.splice(fromIdx, 1);
  products.splice(toIdx, 0, moved);

  const batch = writeBatch(db);
  products.forEach((p, i) => {
    batch.update(doc(db, "Products", p.id), { order: i });
  });
  await batch.commit();

  await renderProductsGrid();
  renderPagination();
}

function showAddCategoryDialog(existingCategories = []) {
  return new Promise(resolve => {
    const dialog = document.getElementById("addCategoryDialog");
    dialog.innerHTML = `
      <form method="dialog" class="flex flex-col gap-3 w-80 p-4 bg-white dark:bg-gray-800 rounded-xl">
        <h3 class="font-bold mb-2 text-purple-700">Add New Category</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="catFormError"></div>
        <input id="catNameInput" type="text" placeholder="Category name" required class="border px-2 py-1 rounded" autofocus>
        <div class="flex justify-end gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </form>
    `;
    dialog.showModal();

    const form = dialog.querySelector("form");
    const input = dialog.querySelector("#catNameInput");
    const errorDiv = dialog.querySelector("#catFormError");

    dialog.querySelector('button[value="cancel"]').onclick = e => {
      e.preventDefault();
      dialog.close();
      resolve(null);
    };

    form.onsubmit = e => {
      e.preventDefault();
      const value = input.value.trim();
      if (!value) {
        errorDiv.textContent = "Category name is required.";
        input.classList.add("border-red-500");
        return;
      }
      if (existingCategories.includes(value)) {
        errorDiv.textContent = "Category already exists.";
        input.classList.add("border-red-500");
        return;
      }
      dialog.close();
      resolve(value);
    };
  });
}

// --- Utility ---

function escapeHtml(str) {
  return ("" + str).replace(/[<>&"']/g, s => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&#39;"
  })[s]);
}

// --- For Settings.js: Prevent vendor deletion if in use ---
export async function vendorInUse(vendorName) {
  const prods = await loadProducts();
  return prods.filter(p => p.vendor === vendorName).map(p => p.name);
}

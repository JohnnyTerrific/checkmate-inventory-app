// js/audit.js

import { loadAuditLog } from './inventory.js';
import { getCurrentUser } from './utils/users.js';

document.addEventListener('DOMContentLoaded', () => {
  renderAuditLog();
});

async function renderAuditLog() {
  const logs = ((await loadAuditLog()) || []).reverse();
    const container = document.getElementById('auditTableContainer');
    let auditPage = 1;
    let auditPageSize = 25;
    let filtered = logs;

        container.innerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div class="flex gap-2 flex-1">
            <input id="auditSearch" type="text" placeholder="Search by Charger ID, Action, User..." 
                class="border border-gray-300 dark:border-gray-700 px-3 py-1 rounded shadow-sm focus:ring-2 focus:ring-purple-400 bg-gray-50 dark:bg-gray-800 w-full transition" />
            </div>
            <div class="flex gap-2">
            <button id="exportAuditCSV" class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 shadow transition">
                Export CSV
            </button>
            <button id="exportAuditBtn" class="px-3 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 shadow transition">
                Export XLSX
            </button>
            </div>
        </div>
        <div class="audit-scroll-area overflow-x-auto" style="max-height:70vh;">
            <table class="audit-table min-w-full table-auto border rounded-xl bg-white dark:bg-gray-900 shadow">
            <thead class="table-header">
                <tr>
                <th class="p-2 border-b">Date</th>
                <th class="p-2 border-b">Action</th>
                <th class="p-2 border-b">User</th>
                <th class="p-2 border-b">Charger ID</th>
                <th class="p-2 border-b">Product</th>
                <th class="p-2 border-b">From</th>
                <th class="p-2 border-b">To</th>
                <th class="p-2 border-b">Status From</th>
                <th class="p-2 border-b">Status To</th>
                <th class="p-2 border-b">Comment</th>
                </tr>
            </thead>
            <tbody id="auditTableBody"></tbody>
            </table>
        </div>
        <div id="auditPaginationBar" class="mt-2"></div>
        `;

    function renderTableRows() {
        const startIdx = (auditPage - 1) * auditPageSize;
        const endIdx = startIdx + auditPageSize;
        const paginated = filtered.slice(startIdx, endIdx);
        const tbody = container.querySelector('#auditTableBody');
        tbody.innerHTML = paginated.map((l, idx) => `
          <tr class="${(startIdx + idx) % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'} hover:bg-purple-50 dark:hover:bg-purple-900 transition">
            <td class="p-2 whitespace-nowrap">${new Date(l.date).toLocaleString()}</td>
            <td class="p-2">${l.action}</td>
            <td class="p-2">${l.user}</td>
            <td class="p-2">${l.chargerId}</td>
            <td class="p-2">${l.product || ''}</td>
            <td class="p-2">${l.from || ''}</td>
            <td class="p-2">${l.to || ''}</td>
            <td class="p-2">${l.statusFrom || ''}</td>
            <td class="p-2">${l.statusTo || ''}</td>
            <td class="p-2">${l.comment || ''}</td>
          </tr>
        `).join("");

        // Pagination bar (outside scroll area, like Inventory)
        const pageCount = Math.ceil(filtered.length / auditPageSize) || 1;
        const bar = container.querySelector('#auditPaginationBar');
        bar.innerHTML = `
          <div class="flex justify-center items-center gap-4 py-4">
            <button id="auditPrevPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">Prev</button>
            <span id="auditPageNumSpan" class="font-semibold"></span>
            <button id="auditNextPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition">Next</button>
            <label class="ml-6">Show
              <select id="auditPageSizeSelect" class="border px-2 py-1 rounded ml-2">
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries per page
            </label>
          </div>
        `;
        bar.querySelector('#auditPageNumSpan').textContent = `Page ${auditPage} of ${pageCount}`;
        bar.querySelector('#auditPageSizeSelect').value = auditPageSize;

        bar.querySelector('#auditPrevPageBtn').onclick = () => {
          if (auditPage > 1) {
            auditPage--;
            renderTableRows();
          }
        };
        bar.querySelector('#auditNextPageBtn').onclick = () => {
          if (auditPage < pageCount) {
            auditPage++;
            renderTableRows();
          }
        };
        bar.querySelector('#auditPageSizeSelect').onchange = (e) => {
          auditPageSize = parseInt(e.target.value, 10);
          auditPage = 1;
          renderTableRows();
        };
    }

    container.querySelector('#auditSearch').oninput = function() {
      const q = this.value.toLowerCase();
      filtered = logs.filter(l =>
          (!q || Object.values(l).some(val => (val == null ? "" : String(val)).toLowerCase().includes(q)))
      );
      auditPage = 1;
      renderTableRows();
  };

    renderTableRows();

    // Export CSV
    container.querySelector('#exportAuditCSV').onclick = () => {
      const header = ["Date", "Action", "User", "Charger ID", "Product", "From", "To", "Status From", "Status To", "Comment"];
      const rows = filtered.map(l => [
        new Date(l.date).toLocaleString(), l.action, l.user, l.chargerId, l.product || "",
        l.from || "", l.to || "", l.statusFrom || "", l.statusTo || "", l.comment || ""
      ]);
      const csv = header.join(",") + "\n" + rows.map(r => r.map(cell => `"${(cell || "").replace(/"/g, '""')}"`).join(",")).join("\n");
      const blob = new Blob([csv], {type: "text/csv"});
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "audit_log.csv";
      a.click();
      URL.revokeObjectURL(url);
    };

    // Export XLSX (requires SheetJS to be loaded globally as XLSX)
    container.querySelector('#exportAuditBtn').onclick = function() {
      if (typeof XLSX === "undefined") {
        alert("XLSX library not loaded.");
        return;
      }
      const ws = XLSX.utils.json_to_sheet(filtered);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Audit Logs");
      XLSX.writeFile(wb, "audit_logs.xlsx");
    };
}

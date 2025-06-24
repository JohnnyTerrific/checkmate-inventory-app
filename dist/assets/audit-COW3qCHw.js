import{b as p,c as m}from"./users-BQb8VeAn.js";import{c as y,b as k,s as l}from"./inventory-DH0gflHQ.js";let e={logs:[],filteredLogs:[],currentPage:1,pageSize:25,searchQuery:""};document.addEventListener("DOMContentLoaded",async()=>{v(),s("Initializing audit system..."),await w("main-content");try{if(s("Checking permissions..."),!await y("viewDashboard")){c(),L();return}await h()}catch(t){console.error("Error initializing audit page:",t),c(),b("Failed to initialize audit page")}});function w(t,a=5e3){return new Promise((o,r)=>{const n=Date.now();function d(){const i=document.getElementById(t);if(i){o(i);return}if(Date.now()-n>a){r(new Error(`Element #${t} not found within ${a}ms`));return}setTimeout(d,100)}d()})}function L(){const t=document.getElementById("main-content");if(!t){console.error("main-content element not found");return}t.innerHTML=`
    <div class="flex items-center justify-center h-64">
      <div class="text-center">
        <div class="w-16 h-16 mx-auto mb-4 text-gray-400">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 15v2m0 0v2m0-2h2m-2 0H8m13-9a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Access Denied</h2>
        <p class="text-gray-500 dark:text-gray-400">You don't have permission to view audit logs.</p>
        <button onclick="window.location.href='/index.html'" 
                class="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
          Return Home
        </button>
      </div>
    </div>
  `}function b(t){const a=document.getElementById("main-content");if(!a){console.error("main-content element not found");return}a.innerHTML=`
    <div class="flex items-center justify-center h-64">
      <div class="text-center text-red-600">
        <div class="w-16 h-16 mx-auto mb-4">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 class="text-xl font-semibold mb-2">Error</h2>
        <p class="mb-4">${t}</p>
        <button onclick="window.initializeAuditPage()" 
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Retry
        </button>
      </div>
    </div>
  `}async function h(){if(!document.getElementById("main-content")){console.error("main-content element not found"),c();return}try{s("Loading audit data..."),await f(),s("Setting up interface..."),await E(),s("Initializing controls..."),C(),s("Rendering table..."),g(),s("Audit log ready!"),setTimeout(()=>{c()},500)}catch(a){console.error("Error initializing audit page:",a),c(),b("Failed to load audit logs")}}async function f(){try{s("Fetching audit entries...");const t=(await k()||[]).reverse(),a=await p(),o=m();s("Filtering entries by permissions..."),e.logs=t,a==="Agent"?e.filteredLogs=t.filter(r=>r.user===(o==null?void 0:o.email)):e.filteredLogs=t,e.currentPage=1,e.searchQuery=""}catch(t){throw console.error("Error loading audit data:",t),new Error("Failed to load audit logs from database")}}async function S(){v(),s("Refreshing audit data...");try{await f(),s("Updating display..."),g(),s("Refresh complete!"),l("Audit log refreshed successfully","green"),setTimeout(()=>{c()},500)}catch(t){console.error("Error refreshing audit log:",t),c(),l("Failed to refresh audit log","red")}}async function E(){const t=document.getElementById("main-content");if(!t){console.error("main-content element not found");return}const a=await y("settings"),o=await p();t.innerHTML=`
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Audit Log</h1>
        <p class="text-gray-600 dark:text-gray-400">
          ${o==="Agent"?"Viewing your audit entries":"Viewing all system audit entries"}
          (${e.filteredLogs.length} entries)
        </p>
      </div>

      <!-- Controls -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
        <div class="p-4">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <!-- Search -->
            <div class="flex gap-2 flex-1">
              <div class="relative flex-1">
                <input id="auditSearch" 
                       type="text" 
                       placeholder="Search by Charger ID, Action, User..." 
                       class="w-full border border-gray-300 dark:border-gray-600 px-3 py-2 pl-10 rounded-lg 
                              shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400
                              bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition" />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Export buttons -->
                        ${a?`
            <div class="flex gap-2">
              <button id="refreshAuditBtn" 
                      class="px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 
                             font-semibold hover:bg-blue-200 dark:hover:bg-blue-600 shadow transition flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                Refresh
              </button>
              <button id="exportAuditCSV" 
                      class="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
                             font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 shadow transition flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Export CSV
              </button>
              <button id="exportAuditXLSX" 
                      class="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white 
                             font-semibold shadow transition flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Export XLSX
              </button>
            </div>
            `:""}
          </div>
        </div>
      </div>

      <!-- Table Container -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto">
            <thead class="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Charger ID</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">From</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">To</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status Change</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Comment</th>
              </tr>
            </thead>
            <tbody id="auditTableBody" class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              <!-- Table rows will be inserted here -->
            </tbody>
          </table>
        </div>
        
        <!-- Pagination -->
        <div id="auditPagination" class="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
          <!-- Pagination will be inserted here -->
        </div>
      </div>
    </div>
  `}function C(){const t=document.getElementById("auditSearch");t&&t.addEventListener("input",B);const a=document.getElementById("refreshAuditBtn");a&&a.addEventListener("click",S);const o=document.getElementById("exportAuditCSV"),r=document.getElementById("exportAuditXLSX");o&&o.addEventListener("click",I),r&&r.addEventListener("click",$)}function B(t){e.searchQuery=t.target.value.toLowerCase(),e.currentPage=1,A(),g()}function A(){let t=e.logs;const a=p(),o=m();a==="Agent"&&(t=t.filter(r=>r.user===(o==null?void 0:o.email))),e.searchQuery&&(t=t.filter(r=>[r.chargerId,r.action,r.user,r.product,r.from,r.to,r.statusFrom,r.statusTo,r.comment].some(d=>(d||"").toString().toLowerCase().includes(e.searchQuery)))),e.filteredLogs=t}function g(){const t=document.getElementById("auditTableBody");if(!t)return;const a=(e.currentPage-1)*e.pageSize,o=a+e.pageSize,r=e.filteredLogs.slice(a,o);r.length===0?t.innerHTML=`
      <tr>
        <td colspan="9" class="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
          ${e.searchQuery?"No audit entries match your search.":"No audit entries found."}
        </td>
      </tr>
    `:t.innerHTML=r.map((n,d)=>`
      <tr class="${d%2===0?"bg-white dark:bg-gray-800":"bg-gray-50 dark:bg-gray-900"} 
                 hover:bg-purple-50 dark:hover:bg-purple-900 transition">
        <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
          ${x(n.date)}
        </td>
        <td class="px-4 py-3 text-sm">
          <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full ${P(n.action)}">
            ${n.action}
          </span>
        </td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">${n.user||""}</td>
        <td class="px-4 py-3 text-sm font-mono text-gray-900 dark:text-gray-100">${n.chargerId||""}</td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">${n.product||""}</td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">${n.from||""}</td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">${n.to||""}</td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
          ${n.statusFrom&&n.statusTo?`${n.statusFrom} → ${n.statusTo}`:""}
        </td>
        <td class="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
          ${n.comment?`<span class="truncate max-w-xs block" title="${n.comment}">${n.comment}</span>`:""}
        </td>
      </tr>
    `).join(""),T()}function x(t){try{return new Date(t).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return t||""}}function P(t){return{"Status Change":"bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",Move:"bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",Add:"bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",Edit:"bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",Delete:"bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200","Bulk Add":"bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"}[t]||"bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"}function T(){const t=document.getElementById("auditPagination");if(!t)return;const a=Math.ceil(e.filteredLogs.length/e.pageSize),o=(e.currentPage-1)*e.pageSize+1,r=Math.min(e.currentPage*e.pageSize,e.filteredLogs.length);t.innerHTML=`
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <p class="text-sm text-gray-700 dark:text-gray-300">
          Showing <span class="font-medium">${o}</span> to <span class="font-medium">${r}</span>
          of <span class="font-medium">${e.filteredLogs.length}</span> results
        </p>
        
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-700 dark:text-gray-300">Show:</label>
          <select id="pageSizeSelect" class="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm
                                             bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      
      <div class="flex items-center gap-2">
        <button id="prevPageBtn" class="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 
                                       text-sm font-medium text-gray-700 dark:text-gray-300 
                                       hover:bg-gray-50 dark:hover:bg-gray-700 transition
                                       disabled:opacity-50 disabled:cursor-not-allowed"
                ${e.currentPage<=1?"disabled":""}>
          Previous
        </button>
        
        <span class="px-3 py-1 text-sm text-gray-700 dark:text-gray-300">
          Page ${e.currentPage} of ${a}
        </span>
        
        <button id="nextPageBtn" class="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 
                                       text-sm font-medium text-gray-700 dark:text-gray-300 
                                       hover:bg-gray-50 dark:hover:bg-gray-700 transition
                                       disabled:opacity-50 disabled:cursor-not-allowed"
                ${e.currentPage>=a?"disabled":""}>
          Next
        </button>
      </div>
    </div>
  `;const n=document.getElementById("prevPageBtn"),d=document.getElementById("nextPageBtn"),i=document.getElementById("pageSizeSelect");n&&n.addEventListener("click",()=>{e.currentPage>1&&(e.currentPage--,g())}),d&&d.addEventListener("click",()=>{e.currentPage<a&&(e.currentPage++,g())}),i&&(i.value=e.pageSize,i.addEventListener("change",u=>{e.pageSize=parseInt(u.target.value),e.currentPage=1,g()}))}function I(){try{const t=["Date","Action","User","Charger ID","Product","From","To","Status From","Status To","Comment"],a=e.filteredLogs.map(i=>[x(i.date),i.action||"",i.user||"",i.chargerId||"",i.product||"",i.from||"",i.to||"",i.statusFrom||"",i.statusTo||"",i.comment||""]),o=[t,...a].map(i=>i.map(u=>`"${(u||"").toString().replace(/"/g,'""')}"`).join(",")).join(`
`),r=new Blob([o],{type:"text/csv;charset=utf-8;"}),n=document.createElement("a"),d=URL.createObjectURL(r);n.setAttribute("href",d),n.setAttribute("download",`audit_log_${new Date().toISOString().split("T")[0]}.csv`),n.style.visibility="hidden",document.body.appendChild(n),n.click(),document.body.removeChild(n),l("Audit log exported to CSV","green")}catch(t){console.error("Error exporting CSV:",t),l("Failed to export CSV","red")}}function $(){try{if(typeof XLSX>"u"){l("XLSX library not loaded","red");return}const t=e.filteredLogs.map(r=>({Date:x(r.date),Action:r.action||"",User:r.user||"","Charger ID":r.chargerId||"",Product:r.product||"",From:r.from||"",To:r.to||"","Status From":r.statusFrom||"","Status To":r.statusTo||"",Comment:r.comment||""})),a=XLSX.utils.json_to_sheet(t),o=XLSX.utils.book_new();XLSX.utils.book_append_sheet(o,a,"Audit Log"),XLSX.writeFile(o,`audit_log_${new Date().toISOString().split("T")[0]}.xlsx`),l("Audit log exported to XLSX","green")}catch(t){console.error("Error exporting XLSX:",t),l("Failed to export XLSX","red")}}function v(){const t=document.getElementById("auditLoadingScreen");t&&t.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="auditLoadingScreen" class="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center z-50">
      <div class="text-center">
        <!-- Pulsating Logo -->
        <div class="loading-pulse mb-8">
          <div class="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <svg class="w-16 h-16 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
        
        <!-- Loading Text -->
        <h2 class="text-3xl font-bold text-white mb-4">CheckMate</h2>
        <p class="text-purple-200 text-lg mb-8">Loading Audit Log</p>
        
        <!-- Loading Dots -->
        <div class="flex justify-center space-x-2">
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
        </div>
        
        <!-- Progress Text -->
        <p id="auditLoadingProgress" class="text-purple-300 mt-6 text-sm">Initializing...</p>
      </div>
    </div>
  `)}function c(){const t=document.getElementById("auditLoadingScreen");t&&(t.style.opacity="0",t.style.transition="opacity 0.5s ease-out",setTimeout(()=>{t.remove()},500))}function s(t){const a=document.getElementById("auditLoadingProgress");a&&(a.textContent=t)}window.initializeAuditPage=h;

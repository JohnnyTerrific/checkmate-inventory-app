import"./users-CxsDH44-.js";import{c as g}from"./inventory-Cvhx57H-.js";document.addEventListener("DOMContentLoaded",()=>{h()});async function h(){const b=(await g()||[]).reverse(),s=document.getElementById("auditTableContainer");let a=1,n=25,i=b;s.innerHTML=`
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
        `;function c(){const e=(a-1)*n,r=e+n,d=i.slice(e,r),u=s.querySelector("#auditTableBody");u.innerHTML=d.map((t,p)=>`
          <tr class="${(e+p)%2===0?"bg-white dark:bg-gray-900":"bg-gray-50 dark:bg-gray-800"} hover:bg-purple-50 dark:hover:bg-purple-900 transition">
            <td class="p-2 whitespace-nowrap">${new Date(t.date).toLocaleString()}</td>
            <td class="p-2">${t.action}</td>
            <td class="p-2">${t.user}</td>
            <td class="p-2">${t.chargerId}</td>
            <td class="p-2">${t.product||""}</td>
            <td class="p-2">${t.from||""}</td>
            <td class="p-2">${t.to||""}</td>
            <td class="p-2">${t.statusFrom||""}</td>
            <td class="p-2">${t.statusTo||""}</td>
            <td class="p-2">${t.comment||""}</td>
          </tr>
        `).join("");const l=Math.ceil(i.length/n)||1,o=s.querySelector("#auditPaginationBar");o.innerHTML=`
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
        `,o.querySelector("#auditPageNumSpan").textContent=`Page ${a} of ${l}`,o.querySelector("#auditPageSizeSelect").value=n,o.querySelector("#auditPrevPageBtn").onclick=()=>{a>1&&(a--,c())},o.querySelector("#auditNextPageBtn").onclick=()=>{a<l&&(a++,c())},o.querySelector("#auditPageSizeSelect").onchange=t=>{n=parseInt(t.target.value,10),a=1,c()}}s.querySelector("#auditSearch").oninput=function(){const e=this.value.toLowerCase();i=b.filter(r=>!e||Object.values(r).some(d=>(d==null?"":String(d)).toLowerCase().includes(e))),a=1,c()},c(),s.querySelector("#exportAuditCSV").onclick=()=>{const e=["Date","Action","User","Charger ID","Product","From","To","Status From","Status To","Comment"],r=i.map(t=>[new Date(t.date).toLocaleString(),t.action,t.user,t.chargerId,t.product||"",t.from||"",t.to||"",t.statusFrom||"",t.statusTo||"",t.comment||""]),d=e.join(",")+`
`+r.map(t=>t.map(p=>`"${(p||"").replace(/"/g,'""')}"`).join(",")).join(`
`),u=new Blob([d],{type:"text/csv"}),l=URL.createObjectURL(u),o=document.createElement("a");o.href=l,o.download="audit_log.csv",o.click(),URL.revokeObjectURL(l)},s.querySelector("#exportAuditBtn").onclick=function(){if(typeof XLSX>"u"){alert("XLSX library not loaded.");return}const e=XLSX.utils.json_to_sheet(i),r=XLSX.utils.book_new();XLSX.utils.book_append_sheet(r,e,"Audit Logs"),XLSX.writeFile(r,"audit_logs.xlsx")}}

import"./users-CxsDH44-.js";import{l as w,b as k,g as L,a as x}from"./inventory-CiL_UlbO.js";import"./shipments-DvAFWwBp.js";function $(){document.getElementById("main-content").innerHTML=`
    <section class="max-w-7xl mx-auto px-3 py-3 space-y-4">
      <header class="flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
       </header>

       <!-- 1️⃣ KPI CARDS -->
       <div id="stat-cards" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-3"></div>

       <!-- 2️⃣ FILTER BAR -->
       <div id="dashboardFilters" class="flex flex-wrap gap-3 items-center mb-3">
         <select id="filterStatus" class="p-2 border rounded text-sm">
           <option value="">All Statuses</option>
         </select>
       </div>

       <!-- 3️⃣ SHIPMENT COUNTDOWN -->
       <div id="shipmentCountdown" class="p-3 bg-white dark:bg-gray-800 rounded-xl shadow flex items-center mb-3">
         <span class="font-medium text-gray-600 dark:text-gray-400 mr-2 text-sm">Next Shipment:</span>
         <span id="nextShipmentTimer" class="font-bold text-lg text-gray-800 dark:text-gray-100">—</span>
       </div>

       <!-- 4️⃣ AGING ALERTS -->
       <div id="agingAlerts" class="p-3 bg-red-50 dark:bg-red-900 rounded-xl shadow mb-4">
         <h2 class="font-semibold text-red-700 dark:text-red-300 mb-2 text-sm">Overdue Assignments</h2>
         <ul id="agingList" class="list-disc list-inside text-gray-700 dark:text-gray-200 text-sm"></ul>
       </div>

       <!-- 5️⃣ CHARTS - FIXED HEIGHT CONTAINERS -->
       <div class="grid grid-cols-1 lg:grid-cols-3 gap-4" style="height: 340px;">
         <!-- Status Donut -->
         <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center h-full">
           <div class="w-64 h-64 flex items-center justify-center mb-3 flex-shrink-0">
             <canvas id="statusChart" width="240" height="240" class="!w-[240px] !h-[240px]"></canvas>
           </div>
           <div id="statusPills" class="w-full flex-1 min-h-0 flex gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-1 items-start content-start flex-wrap"></div>
         </div>

         <!-- Lost Meter -->
         <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col items-center h-full">
           <div class="w-64 h-64 flex items-center justify-center mb-3 flex-shrink-0">
             <canvas id="lostMeter" width="240" height="240" class="!w-[240px] !h-[240px]"></canvas>
           </div>
           <div class="flex flex-col items-center flex-1">
             <div id="lostMeterLabel" class="text-xs text-center text-gray-700 dark:text-gray-300"></div>
             <div id="lostMeterLegend" class="text-xs text-gray-500 dark:text-gray-400 text-center mt-1"></div>
           </div>
         </div>

         <!-- Location Bar Chart -->
         <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col h-full">
           <div class="w-64 h-64 mx-auto flex-shrink-0">
             <canvas id="locationBar" width="240" height="240" class="!w-[240px] !h-[240px]"></canvas>
           </div>
         </div>
       </div>
</section>
   `}function b(t,o){const e=document.getElementById("statusChart").getContext("2d");window.statusChart&&typeof window.statusChart.destroy=="function"&&window.statusChart.destroy(),o||(o=t);const l=Object.values(t).reduce((a,s)=>a+s,0),c=Math.max(1,Math.floor(l*.02));let r={},f=0;Object.entries(t).forEach(([a,s])=>{s>=c?r[a]=s:f+=s}),f>0&&(r.Others=f),window.statusChart=new Chart(e,{type:"doughnut",data:{labels:Object.keys(r),datasets:[{data:Object.values(r),backgroundColor:["rgba(255,0,0,0.7)","rgba(255,127,0,0.7)","rgba(255,255,0,0.7)","rgba(0,255,0,0.7)","rgba(0,0,255,0.7)","rgba(75,0,130,0.7)","rgba(143,0,255,0.7)","rgba(0,255,255,0.7)","rgba(255,105,180,0.7)","rgba(165,42,42,0.7)"],borderWidth:3,borderColor:"#fff",hoverOffset:12}]},options:{cutout:"65%",responsive:!1,maintainAspectRatio:!0,aspectRatio:1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:function(a){const s=a.label,i=a.parsed,n=(i/l*100).toFixed(1);if(s==="Others"){const g=Object.entries(t).filter(([d,u])=>u<c).map(([d,u])=>`${d}: ${u}`).join(", ");return[`Others (${n}%): ${i}`,g]}return`${s}: ${i} (${n}%)`}}},datalabels:{display:function(a){return a.parsed/l*100>5},color:"#222",font:{weight:"bold",size:14},formatter:(a,s)=>(a/l*100).toFixed(0)>8?a:""}},onClick:function(a,s){if(s.length>0){const i=s[0].index,n=this.data.labels[i];if(n==="Others")return;if(Object.keys(t).length>1){const g=t[n];b({[n]:g},o)}}else b(o,o)}},plugins:[ChartDataLabels]}),I(t,a=>{S(a)})}function I(t,o){const e=document.getElementById("statusPills"),l=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"],c=Object.keys(t);e.className="mt-2 flex gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-1 max-w-full",e.style.scrollbarWidth="thin",e.innerHTML=c.map((r,f)=>`
    <button 
      class="px-2 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform active:ring-2 active:ring-offset-1 flex-shrink-0"
      style="background:${l[f%l.length]}"
      data-status="${r}">
      ${r}
    </button>
  `).join(""),Array.from(e.children).forEach(r=>{r.addEventListener("click",()=>{const f=r.dataset.status;o(f)})})}const v=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"];function E(t,o){const e=o.filter(d=>d.location&&typeof d.location=="string"&&d.location.toLowerCase().includes("lost")||typeof d.status=="string"&&d.status.toLowerCase()==="unknown").length,l=t.total>0?Math.round(e/t.total*100):0,c=document.getElementById("lostMeter").getContext("2d");window.lostMeterChart&&typeof window.lostMeterChart.destroy=="function"&&window.lostMeterChart.destroy(),window.lostMeterChart=new Chart(c,{type:"doughnut",data:{labels:["Lost","Other"],datasets:[{data:[e,t.total-e],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(209,213,219,0.4)"],borderWidth:2,borderColor:"#fff",hoverOffset:8}]},options:{cutout:"80%",plugins:{legend:{display:!1},tooltip:{enabled:!0},datalabels:{color:["#b91c1c","#6b7280"],font:{weight:"bold",size:16},formatter:(d,u)=>u.dataIndex===0?`${l}%`:""}}},plugins:[ChartDataLabels]});const r=document.getElementById("lostMeterLabel");let f=0;const a=l,s=Math.ceil(a/24)||1;function i(){f<a?(f+=s,f>a&&(f=a),r.textContent=`Lost Chargers: ${f}% (${e} of ${t.total})`,requestAnimationFrame(i)):r.textContent=`Lost Chargers: ${a}% (${e} of ${t.total})`}i();const n=document.getElementById("lostMeterLegend"),g={};o.filter(d=>d.location&&typeof d.location=="string"&&d.location.toLowerCase().includes("lost")||typeof d.status=="string"&&d.status.toLowerCase()==="unknown").forEach(d=>{const u=d.model||"Unknown";g[u]=(g[u]||0)+1}),n.innerHTML=Object.entries(g).map(([d,u])=>`${d}: <b>${u}</b>`).join(", ")}function M(t,o){const e=[{label:"Total Units",value:t.total,key:"total"},{label:"In Stock",value:t.inStockCount||0,key:"In Stock"},{label:"Installed",value:t.installedCount||0,key:"Installed"},{label:"With Contractors",value:t.contractorCount,key:"With Contractors"},{label:"Overdue (>14d)",value:t.overdueCount,key:"Overdue"},{label:"Public Assets",value:t.publicCount,key:"Public"}],l=document.getElementById("stat-cards");l.innerHTML=e.map((c,r)=>`
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 flex flex-col animate-countup relative stat-card"
           style="border-left: 6px solid ${v[r%v.length]};"
           data-key="${c.key}">
        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">${c.label}</span>
        <span class="text-xl font-bold text-gray-900 dark:text-gray-100">${c.value}</span>
        <div class="stat-tooltip absolute z-10 left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded px-3 py-2 shadow-lg hidden whitespace-nowrap"></div>
      </div>
    `).join(""),document.querySelectorAll(".stat-card").forEach(c=>{const r=c.dataset.key,f=c.querySelector(".stat-tooltip");c.addEventListener("mouseenter",a=>{let s={};if(r==="total")o.forEach(i=>{const n=i.model||"Unknown";s[n]=(s[n]||0)+1});else if(r==="In Stock"||r==="Installed"||r==="With Contractors"||r==="Public"){let i;r==="In Stock"?i=n=>n.status==="In Stock":r==="Installed"?i=n=>n.status==="Installed":r==="With Contractors"?i=n=>!!n.contractor:r==="Public"&&(i=n=>n.location&&n.location.toLowerCase().includes("public")),o.filter(i).forEach(n=>{const g=n.model||"Unknown";s[g]=(s[g]||0)+1})}else if(r==="Overdue"){const i=Date.now(),n=14*24*60*60*1e3;o.filter(g=>g.assignedDate&&i-new Date(g.assignedDate).getTime()>n).forEach(g=>{const d=g.model||"Unknown";s[d]=(s[d]||0)+1})}Object.keys(s).length===0?f.innerHTML="No data":f.innerHTML=Object.entries(s).map(([i,n])=>`<div>${i}: <b>${n}</b></div>`).join(""),f.classList.remove("hidden")}),c.addEventListener("mouseleave",a=>{f.classList.add("hidden")})})}function D(t){const o=document.getElementById("nextShipmentTimer");if(!t)return o.textContent="—";function e(){const l=t-Date.now();if(l<=0)return o.textContent="Arrived";const c=Math.floor(l/864e5),r=Math.floor(l%864e5/36e5),f=Math.floor(l%36e5/6e4);o.textContent=`${c}d ${r}h ${f}m`,requestAnimationFrame(e)}e()}function j(t,o){const e=document.getElementById("agingList");if(t.overdueCount===0)return e.innerHTML="<li>No overdue items</li>";const l=Date.now(),c=14*24*60*60*1e3,f=(x().contractors||[]).map(s=>s.name),a=o.filter(s=>s.assignedDate&&l-new Date(s.assignedDate).getTime()>c&&f.includes(s.location));e.innerHTML=a.length?a.map(s=>`<li>Charger ${s.chargerId} assigned on ${new Date(s.assignedDate).toLocaleDateString()}</li>`).join(""):"<li>No overdue items</li>"}async function O(t,o){const e=document.getElementById("locationBar").getContext("2d");window.locationBarChart&&typeof window.locationBarChart.destroy=="function"&&window.locationBarChart.destroy();const l=await x(),c=Object.entries(t).sort((i,n)=>n[1]-i[1]).slice(0,10),r=c.map(([i])=>i),f=c.map(([i,n])=>n),a=r.map(i=>{const n=l.locations.find(d=>d.name===i);if(!n||!n.parent)return"#6b7280";const g=l.parentContainers.find(d=>d.id===n.parent);return(g==null?void 0:g.color)||"#6b7280"}),s={indexAxis:"y",responsive:!1,maintainAspectRatio:!0,aspectRatio:1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:function(i){const n=i.label,g=i.chart.options.inventory||[],d=l.locations.find(h=>h.name===n);let u="";if(d&&d.parent){const h=l.parentContainers.find(m=>m.id===d.parent);h&&(u=` (${h.name})`)}const p={};g.filter(h=>(h.location||"Unknown")===n).forEach(h=>{const m=h.model||"Unknown";p[m]=(p[m]||0)+1});const C=Object.entries(p).map(([h,m])=>`${h}: ${m}`).join(", ");return[`${n}${u}`,C||"No data"]}}},datalabels:{anchor:"end",align:"right",color:"#6366f1",font:{weight:"bold",size:12}}},scales:{x:{beginAtZero:!0,grid:{display:!1},ticks:{font:{size:11}}},y:{grid:{display:!1},ticks:{font:{size:11}}}},onClick:function(i,n){if(n.length>0){const g=n[0].index,d=this.data.labels[g];T(d,o)}}};s.inventory=o,window.locationBarChart=new Chart(e,{type:"bar",data:{labels:r,datasets:[{label:"Chargers by Location",data:f,backgroundColor:a,borderRadius:8,borderSkipped:!1,barPercentage:.8,categoryPercentage:.9}]},options:s,plugins:[ChartDataLabels]})}async function S(t){const o=document.getElementById("chargerListDialog")||document.createElement("dialog");o.id="chargerListDialog",o.className="rounded-xl p-5",o.parentElement||document.body.appendChild(o);const l=(await w()).filter(c=>c.status===t);o.innerHTML=`
    <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">${l.length} Chargers with "${t}"</div>
    <div class="overflow-auto" style="max-height:350px">
      ${l.map(c=>`<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${c.chargerId}</div>
          <div><b>Model:</b> ${c.model}</div>
        </div>`).join("")}
    </div>
    <div class="flex justify-end mt-4">
      <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
    </div>
  `,o.showModal()}async function T(t,o){let e=document.getElementById("chargerListDialog");e||(e=document.createElement("dialog"),e.id="chargerListDialog",e.className="rounded-xl p-5",document.body.appendChild(e));const l=await x(),c=o.filter(a=>a.location===t),r=l.locations.find(a=>a.name===t);let f="";if(r&&r.parent){const a=l.parentContainers.find(s=>s.id===r.parent);a&&(f=`<div class="text-sm text-gray-500">Parent: ${a.name}</div>`)}e.innerHTML=`
    <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Chargers at ${t}</div>
    ${f}
    <div class="overflow-auto" style="max-height:350px">
      ${c.map(a=>`<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${a.chargerId}</div>
          <div><b>Status:</b> ${a.status}</div>
          <div><b>Model:</b> ${a.model}</div>
        </div>`).join("")}
    </div>
    <div class="flex justify-end mt-4">
      <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
    </div>
  `,e.showModal()}function A(t){const o={};return t.forEach(e=>{const l=e.location||"Unknown";o[l]=(o[l]||0)+1}),Object.fromEntries(Object.entries(o).sort((e,l)=>l[1]-e[1]).slice(0,10))}function y(t){document.getElementById("main-content")?t():setTimeout(()=>y(t),30)}document.addEventListener("DOMContentLoaded",()=>{document.body.dataset.page==="dashboard"&&y(async()=>{$();const t=await w(),o=await k(),e=L(t,o);M(e,t),D(e.nextShipment),j(e,t),b(e.byStatus),E(e,t),O(A(t),t)})});

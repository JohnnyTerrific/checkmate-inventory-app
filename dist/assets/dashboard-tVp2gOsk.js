import"./users-CxsDH44-.js";import{l as w,b as k,g as L,a as x}from"./inventory-Qxuz6K7Y.js";import"./shipments-B2VUV5kC.js";function $(){document.getElementById("main-content").innerHTML=`
    <section class="max-w-7xl mx-auto px-3 py-3 space-y-4">
      <header class="flex items-center justify-between">
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
   `}function b(t,n){const e=document.getElementById("statusChart").getContext("2d");window.statusChart&&typeof window.statusChart.destroy=="function"&&window.statusChart.destroy(),n||(n=t);const r=Object.values(t).reduce((o,s)=>o+s,0),c=Math.max(1,Math.floor(r*.02));let i={},u=0;Object.entries(t).forEach(([o,s])=>{s>=c?i[o]=s:u+=s}),u>0&&(i.Others=u),window.statusChart=new Chart(e,{type:"doughnut",data:{labels:Object.keys(i),datasets:[{data:Object.values(i),backgroundColor:["rgba(255,0,0,0.7)","rgba(255,127,0,0.7)","rgba(255,255,0,0.7)","rgba(0,255,0,0.7)","rgba(0,0,255,0.7)","rgba(75,0,130,0.7)","rgba(143,0,255,0.7)","rgba(0,255,255,0.7)","rgba(255,105,180,0.7)","rgba(165,42,42,0.7)"],borderWidth:3,borderColor:"#fff",hoverOffset:12}]},options:{cutout:"65%",responsive:!1,maintainAspectRatio:!0,aspectRatio:1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:function(o){const s=o.label,d=o.parsed,a=(d/r*100).toFixed(1);if(s==="Others"){const f=Object.entries(t).filter(([l,g])=>g<c).map(([l,g])=>`${l}: ${g}`).join(", ");return[`Others (${a}%): ${d}`,f]}return`${s}: ${d} (${a}%)`}}},datalabels:{display:function(o){return o.parsed/r*100>5},color:"#222",font:{weight:"bold",size:14},formatter:(o,s)=>(o/r*100).toFixed(0)>8?o:""}},onClick:function(o,s){if(s.length>0){const d=s[0].index,a=this.data.labels[d];if(a==="Others")return;if(Object.keys(t).length>1){const f=t[a];b({[a]:f},n)}}else b(n,n)}},plugins:[ChartDataLabels]}),I(t,o=>{S(o)})}function I(t,n){const e=document.getElementById("statusPills"),r=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"],c=Object.keys(t);e.className="mt-2 flex gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-1 max-w-full",e.style.scrollbarWidth="thin",e.innerHTML=c.map((i,u)=>`
    <button 
      class="px-2 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform active:ring-2 active:ring-offset-1 flex-shrink-0"
      style="background:${r[u%r.length]}"
      data-status="${i}">
      ${i}
    </button>
  `).join(""),Array.from(e.children).forEach(i=>{i.addEventListener("click",()=>{const u=i.dataset.status;n(u)})})}const v=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"];function E(t,n){const e=n.filter(l=>l.location&&typeof l.location=="string"&&l.location.toLowerCase().includes("lost")||typeof l.status=="string"&&l.status.toLowerCase()==="unknown").length,r=t.total>0?Math.round(e/t.total*100):0,c=document.getElementById("lostMeter").getContext("2d");window.lostMeterChart&&typeof window.lostMeterChart.destroy=="function"&&window.lostMeterChart.destroy(),window.lostMeterChart=new Chart(c,{type:"doughnut",data:{labels:["Lost","Other"],datasets:[{data:[e,t.total-e],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(209,213,219,0.4)"],borderWidth:2,borderColor:"#fff",hoverOffset:8}]},options:{cutout:"80%",plugins:{legend:{display:!1},tooltip:{enabled:!0},datalabels:{color:["#b91c1c","#6b7280"],font:{weight:"bold",size:16},formatter:(l,g)=>g.dataIndex===0?`${r}%`:""}}},plugins:[ChartDataLabels]});const i=document.getElementById("lostMeterLabel");let u=0;const o=r,s=Math.ceil(o/24)||1;function d(){u<o?(u+=s,u>o&&(u=o),i.textContent=`Lost Chargers: ${u}% (${e} of ${t.total})`,requestAnimationFrame(d)):i.textContent=`Lost Chargers: ${o}% (${e} of ${t.total})`}d();const a=document.getElementById("lostMeterLegend"),f={};n.filter(l=>l.location&&typeof l.location=="string"&&l.location.toLowerCase().includes("lost")||typeof l.status=="string"&&l.status.toLowerCase()==="unknown").forEach(l=>{const g=l.model||"Unknown";f[g]=(f[g]||0)+1}),a.innerHTML=Object.entries(f).map(([l,g])=>`${l}: <b>${g}</b>`).join(", ")}function M(t,n){const e=[{label:"Total Units",value:t.total,key:"total"},{label:"In Stock",value:t.inStockCount||0,key:"inStockCount"},{label:"Installed",value:t.installedCount||0,key:"installedCount"},{label:"With Contractors",value:t.contractorCount||0,key:"contractorCount"},{label:"Overdue (>14d)",value:t.overdueCount||0,key:"overdueCount"},{label:"Public Assets",value:t.publicCount||0,key:"publicCount"}],r=document.getElementById("stat-cards");r.innerHTML=e.map((c,i)=>`
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 flex flex-col animate-countup relative stat-card"
           style="border-left: 6px solid ${v[i%v.length]};"
           data-key="${c.key}">
        <span class="text-xs font-medium text-gray-500 dark:text-gray-400">${c.label}</span>
        <span class="text-xl font-bold text-gray-900 dark:text-gray-100">${c.value}</span>
        <div class="stat-tooltip absolute z-10 left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded px-3 py-2 shadow-lg hidden whitespace-nowrap"></div>
      </div>
    `).join(""),document.querySelectorAll(".stat-card").forEach(c=>{const i=c.dataset.key,u=c.querySelector(".stat-tooltip");c.addEventListener("mouseenter",o=>{let s={};if(i==="total")n.forEach(d=>{const a=d.model||"Unknown";s[a]=(s[a]||0)+1});else if(i==="inStockCount"||i==="installedCount"||i==="contractorCount"||i==="publicCount"){let d;i==="inStockCount"?d=a=>a.status==="In Stock":i==="installedCount"?d=a=>a.status==="Installed":i==="contractorCount"?d=a=>{var l,g;const f=(g=(l=window.settings)==null?void 0:l.locations)==null?void 0:g.find(p=>p.name===a.location);return(f==null?void 0:f.parent)==="contractor"}:i==="publicCount"&&(d=a=>{var l,g;const f=(g=(l=window.settings)==null?void 0:l.locations)==null?void 0:g.find(p=>p.name===a.location);return(f==null?void 0:f.parent)==="public"}),n.filter(d).forEach(a=>{const f=a.model||"Unknown";s[f]=(s[f]||0)+1})}Object.keys(s).length===0?u.innerHTML="No data":u.innerHTML=Object.entries(s).map(([d,a])=>`<div>${d}: <b>${a}</b></div>`).join(""),u.classList.remove("hidden")}),c.addEventListener("mouseleave",o=>{u.classList.add("hidden")})})}function j(t){const n=document.getElementById("nextShipmentTimer");if(!t)return n.textContent="—";function e(){const r=t-Date.now();if(r<=0)return n.textContent="Arrived";const c=Math.floor(r/864e5),i=Math.floor(r%864e5/36e5),u=Math.floor(r%36e5/6e4);n.textContent=`${c}d ${i}h ${u}m`,requestAnimationFrame(e)}e()}function D(t,n){const e=document.getElementById("agingList");if(t.overdueCount===0)return e.innerHTML="<li>No overdue items</li>";const r=Date.now(),c=14*24*60*60*1e3,u=(x().contractors||[]).map(s=>s.name),o=n.filter(s=>s.assignedDate&&r-new Date(s.assignedDate).getTime()>c&&u.includes(s.location));e.innerHTML=o.length?o.map(s=>`<li>Charger ${s.chargerId} assigned on ${new Date(s.assignedDate).toLocaleDateString()}</li>`).join(""):"<li>No overdue items</li>"}async function O(t,n){const e=document.getElementById("locationBar").getContext("2d");window.locationBarChart&&typeof window.locationBarChart.destroy=="function"&&window.locationBarChart.destroy();const r=await x(),c=Object.entries(t).sort((d,a)=>a[1]-d[1]).slice(0,10),i=c.map(([d])=>d),u=c.map(([d,a])=>a),o=i.map(d=>{const a=r.locations.find(l=>l.name===d);if(!a||!a.parent)return"#6b7280";const f=r.parentContainers.find(l=>l.id===a.parent);return(f==null?void 0:f.color)||"#6b7280"}),s={indexAxis:"y",responsive:!1,maintainAspectRatio:!0,aspectRatio:1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:function(d){const a=d.label,f=d.chart.options.inventory||[],l=r.locations.find(h=>h.name===a);let g="";if(l&&l.parent){const h=r.parentContainers.find(m=>m.id===l.parent);h&&(g=` (${h.name})`)}const p={};f.filter(h=>(h.location||"Unknown")===a).forEach(h=>{const m=h.model||"Unknown";p[m]=(p[m]||0)+1});const C=Object.entries(p).map(([h,m])=>`${h}: ${m}`).join(", ");return[`${a}${g}`,C||"No data"]}}},datalabels:{anchor:"end",align:"right",color:"#6366f1",font:{weight:"bold",size:12}}},scales:{x:{beginAtZero:!0,grid:{display:!1},ticks:{font:{size:11}}},y:{grid:{display:!1},ticks:{font:{size:11}}}},onClick:function(d,a){if(a.length>0){const f=a[0].index,l=this.data.labels[f];A(l,n)}}};s.inventory=n,window.locationBarChart=new Chart(e,{type:"bar",data:{labels:i,datasets:[{label:"Chargers by Location",data:u,backgroundColor:o,borderRadius:8,borderSkipped:!1,barPercentage:.8,categoryPercentage:.9}]},options:s,plugins:[ChartDataLabels]})}async function S(t){const n=document.getElementById("chargerListDialog")||document.createElement("dialog");n.id="chargerListDialog",n.className="rounded-xl p-5",n.parentElement||document.body.appendChild(n);const r=(await w()).filter(c=>c.status===t);n.innerHTML=`
    <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">${r.length} Chargers with "${t}"</div>
    <div class="overflow-auto" style="max-height:350px">
      ${r.map(c=>`<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${c.chargerId}</div>
          <div><b>Model:</b> ${c.model}</div>
        </div>`).join("")}
    </div>
    <div class="flex justify-end mt-4">
      <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
    </div>
  `,n.showModal()}async function A(t,n){let e=document.getElementById("chargerListDialog");e||(e=document.createElement("dialog"),e.id="chargerListDialog",e.className="rounded-xl p-5",document.body.appendChild(e));const r=await x(),c=n.filter(o=>o.location===t),i=r.locations.find(o=>o.name===t);let u="";if(i&&i.parent){const o=r.parentContainers.find(s=>s.id===i.parent);o&&(u=`<div class="text-sm text-gray-500">Parent: ${o.name}</div>`)}e.innerHTML=`
    <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Chargers at ${t}</div>
    ${u}
    <div class="overflow-auto" style="max-height:350px">
      ${c.map(o=>`<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${o.chargerId}</div>
          <div><b>Status:</b> ${o.status}</div>
          <div><b>Model:</b> ${o.model}</div>
        </div>`).join("")}
    </div>
    <div class="flex justify-end mt-4">
      <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
    </div>
  `,e.showModal()}function T(t){const n={};return t.forEach(e=>{const r=e.location||"Unknown";n[r]=(n[r]||0)+1}),Object.fromEntries(Object.entries(n).sort((e,r)=>r[1]-e[1]).slice(0,10))}function y(t){document.getElementById("main-content")?t():setTimeout(()=>y(t),30)}document.addEventListener("DOMContentLoaded",()=>{document.body.dataset.page==="dashboard"&&y(async()=>{$();const t=await w(),n=await k(),e=await L(t,n);M(e,t),j(e.nextShipment),D(e,t),b(e.byStatus),E(e,t),O(T(t),t)})});

import"./users-B1oCCdPH.js";import{l as m,a as x,g as v,b as w}from"./inventory-CC2awVC6.js";import"./shipments-DsUs0R8O.js";function y(){document.getElementById("main-content").innerHTML=`
     <section class="max-w-7xl mx-auto px-4 py-6 space-y-8">
       <header class="flex items-center justify-between">
         <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Dashboard</h1>
        </header>
 
        <!-- 1️⃣ KPI CARDS -->
  <div id="stat-cards" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-2"></div>
 
        <!-- 2️⃣ FILTER BAR -->
        <div id="dashboardFilters" class="flex flex-wrap gap-4 items-center">
          <select id="filterStatus" class="p-2 border rounded">
            <option value="">All Statuses</option>
          </select>
        </div>
 
        <!-- 3️⃣ SHIPMENT COUNTDOWN -->
        <div id="shipmentCountdown" class="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow flex items-center">
          <span class="font-medium text-gray-600 dark:text-gray-400 mr-2">Next Shipment:</span>
          <span id="nextShipmentTimer" class="font-bold text-xl text-gray-800 dark:text-gray-100">—</span>
        </div>
 
        <!-- 4️⃣ AGING ALERTS -->
        <div id="agingAlerts" class="p-4 bg-red-50 dark:bg-red-900 rounded-2xl shadow">
          <h2 class="font-semibold text-red-700 dark:text-red-300 mb-2">Overdue Assignments</h2>
          <ul id="agingList" class="list-disc list-inside text-gray-700 dark:text-gray-200"></ul>
        </div>
 
        <!-- 5️⃣ EXISTING CHARTS -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
  <!-- Status Donut -->
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-col items-center justify-center h-[260px] relative overflow-hidden">
    <canvas id="statusChart" width="220" height="220" class="!w-[220px] !h-[220px]"></canvas>
    <!-- Pills Here -->
<div id="statusPills" class="mt-3 flex gap-2 flex-wrap justify-center max-w-full"></div>  </div>

    <!-- Lost Meter -->
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 flex flex-col items-center justify-center h-[260px] relative overflow-hidden">
    <canvas id="lostMeter" width="220" height="220" class="!w-[220px] !h-[220px]"></canvas>
    <div id="lostMeterLabel" class="mt-2 text-sm text-center text-gray-700 dark:text-gray-300"></div>
    <div id="lostMeterLegend" class="mt-2 text-xs text-gray-500 dark:text-gray-400"></div>
  </div>

    <!-- Location Bar Chart -->
  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-4 h-[260px]">
    <canvas id="locationBar"></canvas>
  </div>

  </div> <!-- 🔹 Closes the grid for charts -->
</section> <!-- 🔹 Closes the section -->
    `}function h(t,o){const e=document.getElementById("statusChart").getContext("2d");window.statusChart&&typeof window.statusChart.destroy=="function"&&window.statusChart.destroy(),o||(o=t),window.statusChart=new Chart(e,{type:"doughnut",data:{labels:Object.keys(t),datasets:[{data:Object.values(t),backgroundColor:["rgba(255,0,0,0.7)","rgba(255,127,0,0.7)","rgba(255,255,0,0.7)","rgba(0,255,0,0.7)","rgba(0,0,255,0.7)","rgba(75,0,130,0.7)","rgba(143,0,255,0.7)","rgba(0,255,255,0.7)","rgba(255,105,180,0.7)","rgba(165,42,42,0.7)"],borderWidth:2,borderColor:"#fff",hoverOffset:8}]},options:{cutout:"70%",responsive:!1,maintainAspectRatio:!0,aspectRatio:1,plugins:{legend:{display:!1},tooltip:{enabled:!0},datalabels:{color:"#222",font:{weight:"bold",size:14},formatter:a=>a}},onClick:function(a,s){if(s.length>0){const n=s[0].index,r=this.data.labels[n];Object.keys(t).length>1&&h({[r]:this.data.datasets[0].data[n]},o)}else h(o,o)}},plugins:[ChartDataLabels]}),C(t,a=>{M(a)})}function C(t,o){const e=document.getElementById("statusPills"),a=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"],s=Object.keys(t);e.innerHTML=s.map((n,r)=>`
      <button 
        class="px-3 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform active:ring-2 active:ring-offset-1"
        style="background:${a[r%a.length]}"
        data-status="${n}">
        ${n}
      </button>
    `).join(""),Array.from(e.children).forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.status;o(r)})})}const b=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"];function k(t,o){const e=o.filter(c=>c.location&&typeof c.location=="string"&&c.location.toLowerCase().includes("lost")||typeof c.status=="string"&&c.status.toLowerCase()==="unknown").length,a=t.total>0?Math.round(e/t.total*100):0,s=document.getElementById("lostMeter").getContext("2d");window.lostMeterChart&&typeof window.lostMeterChart.destroy=="function"&&window.lostMeterChart.destroy(),window.lostMeterChart=new Chart(s,{type:"doughnut",data:{labels:["Lost","Other"],datasets:[{data:[e,t.total-e],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(209,213,219,0.4)"],borderWidth:2,borderColor:"#fff",hoverOffset:8}]},options:{cutout:"80%",plugins:{legend:{display:!1},tooltip:{enabled:!0},datalabels:{color:["#b91c1c","#6b7280"],font:{weight:"bold",size:16},formatter:(c,f)=>f.dataIndex===0?`${a}%`:""}}},plugins:[ChartDataLabels]});const n=document.getElementById("lostMeterLabel");let r=0;const g=a,l=Math.ceil(g/24)||1;function d(){r<g?(r+=l,r>g&&(r=g),n.textContent=`Lost Chargers: ${r}% (${e} of ${t.total})`,requestAnimationFrame(d)):n.textContent=`Lost Chargers: ${g}% (${e} of ${t.total})`}d();const i=document.getElementById("lostMeterLegend"),u={};o.filter(c=>c.location&&typeof c.location=="string"&&c.location.toLowerCase().includes("lost")||typeof c.status=="string"&&c.status.toLowerCase()==="unknown").forEach(c=>{const f=c.model||"Unknown";u[f]=(u[f]||0)+1}),i.innerHTML=Object.entries(u).map(([c,f])=>`${c}: <b>${f}</b>`).join(", ")}function L(t,o){const e=[{label:"Total Units",value:t.total,key:"total"},{label:"In Stock",value:t.byStatus["In Stock"]||0,key:"In Stock"},{label:"Installed",value:t.byStatus.Installed||0,key:"Installed"},{label:"With Contractors",value:t.contractorCount,key:"With Contractors"},{label:"Overdue (>14d)",value:t.overdueCount,key:"Overdue"},{label:"Public Assets",value:t.publicCount,key:"Public"}],a=document.getElementById("stat-cards");a.innerHTML=e.map((s,n)=>`
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col animate-countup relative stat-card"
           style="border-left: 8px solid ${b[n%b.length]};"
           data-key="${s.key}">
        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">${s.label}</span>
        <span class="text-2xl font-bold text-gray-900 dark:text-gray-100">${s.value}</span>
        <div class="stat-tooltip absolute z-10 left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded px-3 py-2 shadow-lg hidden whitespace-nowrap"></div>
      </div>
    `).join(""),document.querySelectorAll(".stat-card").forEach(s=>{const n=s.dataset.key,r=s.querySelector(".stat-tooltip");s.addEventListener("mouseenter",g=>{let l={};if(n==="total")o.forEach(d=>{const i=d.model||"Unknown";l[i]=(l[i]||0)+1});else if(n==="In Stock"||n==="Installed"||n==="With Contractors"||n==="Public"){let d;n==="In Stock"?d=i=>i.status==="In Stock":n==="Installed"?d=i=>i.status==="Installed":n==="With Contractors"?d=i=>!!i.contractor:n==="Public"&&(d=i=>i.location&&i.location.toLowerCase().includes("public")),o.filter(d).forEach(i=>{const u=i.model||"Unknown";l[u]=(l[u]||0)+1})}else if(n==="Overdue"){const d=Date.now(),i=14*24*60*60*1e3;o.filter(u=>u.assignedDate&&d-new Date(u.assignedDate).getTime()>i).forEach(u=>{const c=u.model||"Unknown";l[c]=(l[c]||0)+1})}Object.keys(l).length===0?r.innerHTML="No data":r.innerHTML=Object.entries(l).map(([d,i])=>`<div>${d}: <b>${i}</b></div>`).join(""),r.classList.remove("hidden")}),s.addEventListener("mouseleave",g=>{r.classList.add("hidden")})})}function I(t){const o=document.getElementById("nextShipmentTimer");if(!t)return o.textContent="—";function e(){const a=t-Date.now();if(a<=0)return o.textContent="Arrived";const s=Math.floor(a/864e5),n=Math.floor(a%864e5/36e5),r=Math.floor(a%36e5/6e4);o.textContent=`${s}d ${n}h ${r}m`,requestAnimationFrame(e)}e()}function E(t,o){const e=document.getElementById("agingList");if(t.overdueCount===0)return e.innerHTML="<li>No overdue items</li>";const a=Date.now(),s=14*24*60*60*1e3,r=(w().contractors||[]).map(l=>l.name),g=o.filter(l=>l.assignedDate&&a-new Date(l.assignedDate).getTime()>s&&r.includes(l.location));e.innerHTML=g.length?g.map(l=>`<li>Charger ${l.chargerId} assigned on ${new Date(l.assignedDate).toLocaleDateString()}</li>`).join(""):"<li>No overdue items</li>"}function $(t,o){const e=document.getElementById("locationBar").getContext("2d");window.locationBarChart&&typeof window.locationBarChart.destroy=="function"&&window.locationBarChart.destroy();const a=["rgba(255,0,0,0.7)","rgba(255,127,0,0.7)","rgba(255,255,0,0.7)","rgba(0,255,0,0.7)","rgba(0,0,255,0.7)","rgba(75,0,130,0.7)","rgba(143,0,255,0.7)"],s={indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:function(n){const r=n.label,g=n.chart.options.inventory||[],l={};return g.filter(d=>(d.location||"Unknown")===r).forEach(d=>{const i=d.model||"Unknown";l[i]=(l[i]||0)+1}),Object.entries(l).map(([d,i])=>`${d}: ${i}`).join(", ")||"No data"}}},datalabels:{anchor:"end",align:"right",color:"#6366f1",font:{weight:"bold",size:14}}},onClick:function(n,r){if(r.length>0){const g=r[0].index,l=this.data.labels[g];D(l,o)}}};s.inventory=o,window.locationBarChart=new Chart(e,{type:"bar",data:{labels:Object.keys(t),datasets:[{label:"Chargers by Location",data:Object.values(t),backgroundColor:Object.keys(t).map((n,r)=>a[r%a.length]),borderRadius:12,borderSkipped:!1,barPercentage:.7,categoryPercentage:.7}]},options:s,plugins:[ChartDataLabels]})}function M(t){const o=document.getElementById("chargerListDialog")||document.createElement("dialog");o.id="chargerListDialog",o.className="rounded-xl p-5",o.parentElement||document.body.appendChild(o);const e=m().filter(a=>a.status===t);o.innerHTML=`
    <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">${e.length} Chargers with "${t}"</div>
    <div class="overflow-auto" style="max-height:350px">
      ${e.map(a=>`<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${a.chargerId}</div>
          <div><b>Model:</b> ${a.model}</div>
        </div>`).join("")}
    </div>
    <div class="flex justify-end mt-4">
      <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
    </div>
  `,o.showModal()}function D(t,o){let e=document.getElementById("chargerListDialog");e||(e=document.createElement("dialog"),e.id="chargerListDialog",e.className="rounded-xl p-5",document.body.appendChild(e));const a=o.filter(s=>s.location===t);e.innerHTML=`
      <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Chargers at ${t}</div>
      <div class="overflow-auto" style="max-height:350px">
        ${a.map(s=>`<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
            <div><b>ID:</b> ${s.chargerId}</div>
            <div><b>Status:</b> ${s.status}</div>
            <div><b>Model:</b> ${s.model}</div>
          </div>`).join("")}
      </div>
      <div class="flex justify-end mt-4">
        <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
      </div>
    `,e.showModal()}function j(t){const o={};return t.forEach(e=>{const a=e.location||"Unknown";o[a]=(o[a]||0)+1}),Object.fromEntries(Object.entries(o).sort((e,a)=>a[1]-e[1]).slice(0,10))}function p(t){document.getElementById("main-content")?t():setTimeout(()=>p(t),30)}document.addEventListener("DOMContentLoaded",()=>{document.body.dataset.page==="dashboard"&&p(async()=>{y();const t=await m(),o=await x(),e=v(t,o);L(e,t),I(e.nextShipment),E(e,t),h(e.byStatus),k(e,t),$(j(t),t)})});

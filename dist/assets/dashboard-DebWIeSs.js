import"./users-BmXr6znz.js";import{l as m,a as x,g as v,b as w}from"./inventory-D5gaGQmU.js";import"./shipments-DrLl8NiI.js";function y(){document.getElementById("main-content").innerHTML=`
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
    `}function h(t,e){const o=document.getElementById("statusChart").getContext("2d");window.statusChart&&typeof window.statusChart.destroy=="function"&&window.statusChart.destroy(),e||(e=t),window.statusChart=new Chart(o,{type:"doughnut",data:{labels:Object.keys(t),datasets:[{data:Object.values(t),backgroundColor:["rgba(255,0,0,0.7)","rgba(255,127,0,0.7)","rgba(255,255,0,0.7)","rgba(0,255,0,0.7)","rgba(0,0,255,0.7)","rgba(75,0,130,0.7)","rgba(143,0,255,0.7)","rgba(0,255,255,0.7)","rgba(255,105,180,0.7)","rgba(165,42,42,0.7)"],borderWidth:2,borderColor:"#fff",hoverOffset:8}]},options:{cutout:"70%",responsive:!1,maintainAspectRatio:!0,aspectRatio:1,plugins:{legend:{display:!1},tooltip:{enabled:!0},datalabels:{color:"#222",font:{weight:"bold",size:14},formatter:n=>n}},onClick:function(n,a){if(a.length>0){const s=a[0].index,r=this.data.labels[s];Object.keys(t).length>1&&h({[r]:this.data.datasets[0].data[s]},e)}else h(e,e)}},plugins:[ChartDataLabels]}),C(t,n=>{M(n)})}function C(t,e){const o=document.getElementById("statusPills"),n=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"],a=Object.keys(t);o.innerHTML=a.map((s,r)=>`
      <button 
        class="px-3 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform active:ring-2 active:ring-offset-1"
        style="background:${n[r%n.length]}"
        data-status="${s}">
        ${s}
      </button>
    `).join(""),Array.from(o.children).forEach(s=>{s.addEventListener("click",()=>{const r=s.dataset.status;e(r)})})}const b=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"];function k(t,e){const o=e.filter(c=>c.location&&typeof c.location=="string"&&c.location.toLowerCase().includes("lost")||typeof c.status=="string"&&c.status.toLowerCase()==="unknown").length,n=t.total>0?Math.round(o/t.total*100):0,a=document.getElementById("lostMeter").getContext("2d");window.lostMeterChart&&typeof window.lostMeterChart.destroy=="function"&&window.lostMeterChart.destroy(),window.lostMeterChart=new Chart(a,{type:"doughnut",data:{labels:["Lost","Other"],datasets:[{data:[o,t.total-o],backgroundColor:["rgba(239, 68, 68, 0.8)","rgba(209,213,219,0.4)"],borderWidth:2,borderColor:"#fff",hoverOffset:8}]},options:{cutout:"80%",plugins:{legend:{display:!1},tooltip:{enabled:!0},datalabels:{color:["#b91c1c","#6b7280"],font:{weight:"bold",size:16},formatter:(c,f)=>f.dataIndex===0?`${n}%`:""}}},plugins:[ChartDataLabels]});const s=document.getElementById("lostMeterLabel");let r=0;const g=n,l=Math.ceil(g/24)||1;function d(){r<g?(r+=l,r>g&&(r=g),s.textContent=`Lost Chargers: ${r}% (${o} of ${t.total})`,requestAnimationFrame(d)):s.textContent=`Lost Chargers: ${g}% (${o} of ${t.total})`}d();const i=document.getElementById("lostMeterLegend"),u={};e.filter(c=>c.location&&typeof c.location=="string"&&c.location.toLowerCase().includes("lost")||typeof c.status=="string"&&c.status.toLowerCase()==="unknown").forEach(c=>{const f=c.model||"Unknown";u[f]=(u[f]||0)+1}),i.innerHTML=Object.entries(u).map(([c,f])=>`${c}: <b>${f}</b>`).join(", ")}function L(t,e){const o=[{label:"Total Units",value:t.total,key:"total"},{label:"In Stock",value:t.byStatus["In Stock"]||0,key:"In Stock"},{label:"Installed",value:t.byStatus.Installed||0,key:"Installed"},{label:"With Contractors",value:t.contractorCount,key:"With Contractors"},{label:"Overdue (>14d)",value:t.overdueCount,key:"Overdue"},{label:"Public Assets",value:t.publicCount,key:"Public"}],n=document.getElementById("stat-cards");n.innerHTML=o.map((a,s)=>`
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex flex-col animate-countup relative stat-card"
           style="border-left: 8px solid ${b[s%b.length]};"
           data-key="${a.key}">
        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">${a.label}</span>
        <span class="text-2xl font-bold text-gray-900 dark:text-gray-100">${a.value}</span>
        <div class="stat-tooltip absolute z-10 left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded px-3 py-2 shadow-lg hidden whitespace-nowrap"></div>
      </div>
    `).join(""),document.querySelectorAll(".stat-card").forEach(a=>{const s=a.dataset.key,r=a.querySelector(".stat-tooltip");a.addEventListener("mouseenter",g=>{let l={};if(s==="total")e.forEach(d=>{const i=d.model||"Unknown";l[i]=(l[i]||0)+1});else if(s==="In Stock"||s==="Installed"||s==="With Contractors"||s==="Public"){let d;s==="In Stock"?d=i=>i.status==="In Stock":s==="Installed"?d=i=>i.status==="Installed":s==="With Contractors"?d=i=>!!i.contractor:s==="Public"&&(d=i=>i.location&&i.location.toLowerCase().includes("public")),e.filter(d).forEach(i=>{const u=i.model||"Unknown";l[u]=(l[u]||0)+1})}else if(s==="Overdue"){const d=Date.now(),i=14*24*60*60*1e3;e.filter(u=>u.assignedDate&&d-new Date(u.assignedDate).getTime()>i).forEach(u=>{const c=u.model||"Unknown";l[c]=(l[c]||0)+1})}Object.keys(l).length===0?r.innerHTML="No data":r.innerHTML=Object.entries(l).map(([d,i])=>`<div>${d}: <b>${i}</b></div>`).join(""),r.classList.remove("hidden")}),a.addEventListener("mouseleave",g=>{r.classList.add("hidden")})})}function I(t){const e=document.getElementById("nextShipmentTimer");if(!t)return e.textContent="—";function o(){const n=t-Date.now();if(n<=0)return e.textContent="Arrived";const a=Math.floor(n/864e5),s=Math.floor(n%864e5/36e5),r=Math.floor(n%36e5/6e4);e.textContent=`${a}d ${s}h ${r}m`,requestAnimationFrame(o)}o()}function E(t,e){const o=document.getElementById("agingList");if(t.overdueCount===0)return o.innerHTML="<li>No overdue items</li>";const n=Date.now(),a=14*24*60*60*1e3,r=(w().contractors||[]).map(l=>l.name),g=e.filter(l=>l.assignedDate&&n-new Date(l.assignedDate).getTime()>a&&r.includes(l.location));o.innerHTML=g.length?g.map(l=>`<li>Charger ${l.chargerId} assigned on ${new Date(l.assignedDate).toLocaleDateString()}</li>`).join(""):"<li>No overdue items</li>"}function $(t,e){const o=document.getElementById("locationBar").getContext("2d");window.locationBarChart&&typeof window.locationBarChart.destroy=="function"&&window.locationBarChart.destroy();const n=["rgba(255,0,0,0.7)","rgba(255,127,0,0.7)","rgba(255,255,0,0.7)","rgba(0,255,0,0.7)","rgba(0,0,255,0.7)","rgba(75,0,130,0.7)","rgba(143,0,255,0.7)"],a={indexAxis:"y",responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{enabled:!0,callbacks:{label:function(s){const r=s.label,g=s.chart.options.inventory||[],l={};return g.filter(d=>(d.location||"Unknown")===r).forEach(d=>{const i=d.model||"Unknown";l[i]=(l[i]||0)+1}),Object.entries(l).map(([d,i])=>`${d}: ${i}`).join(", ")||"No data"}}},datalabels:{anchor:"end",align:"right",color:"#6366f1",font:{weight:"bold",size:14}}},onClick:function(s,r){if(r.length>0){const g=r[0].index,l=this.data.labels[g];D(l,e)}}};a.inventory=e,window.locationBarChart=new Chart(o,{type:"bar",data:{labels:Object.keys(t),datasets:[{label:"Chargers by Location",data:Object.values(t),backgroundColor:Object.keys(t).map((s,r)=>n[r%n.length]),borderRadius:12,borderSkipped:!1,barPercentage:.7,categoryPercentage:.7}]},options:a,plugins:[ChartDataLabels]})}async function M(t){const e=document.getElementById("chargerListDialog")||document.createElement("dialog");e.id="chargerListDialog",e.className="rounded-xl p-5",e.parentElement||document.body.appendChild(e);const n=(await m()).filter(a=>a.status===t);e.innerHTML=`
    <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">${n.length} Chargers with "${t}"</div>
    <div class="overflow-auto" style="max-height:350px">
      ${n.map(a=>`<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${a.chargerId}</div>
          <div><b>Model:</b> ${a.model}</div>
        </div>`).join("")}
    </div>
    <div class="flex justify-end mt-4">
      <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
    </div>
  `,e.showModal()}function D(t,e){let o=document.getElementById("chargerListDialog");o||(o=document.createElement("dialog"),o.id="chargerListDialog",o.className="rounded-xl p-5",document.body.appendChild(o));const n=e.filter(a=>a.location===t);o.innerHTML=`
      <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Chargers at ${t}</div>
      <div class="overflow-auto" style="max-height:350px">
        ${n.map(a=>`<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
            <div><b>ID:</b> ${a.chargerId}</div>
            <div><b>Status:</b> ${a.status}</div>
            <div><b>Model:</b> ${a.model}</div>
          </div>`).join("")}
      </div>
      <div class="flex justify-end mt-4">
        <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
      </div>
    `,o.showModal()}function j(t){const e={};return t.forEach(o=>{const n=o.location||"Unknown";e[n]=(e[n]||0)+1}),Object.fromEntries(Object.entries(e).sort((o,n)=>n[1]-o[1]).slice(0,10))}function p(t){document.getElementById("main-content")?t():setTimeout(()=>p(t),30)}document.addEventListener("DOMContentLoaded",()=>{document.body.dataset.page==="dashboard"&&p(async()=>{y();const t=await m(),e=await x(),o=v(t,e);L(o,t),I(o.nextShipment),E(o,t),h(o.byStatus),k(o,t),$(j(t),t)})});

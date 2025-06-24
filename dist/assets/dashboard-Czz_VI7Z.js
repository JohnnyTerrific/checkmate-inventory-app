import"./users-BQb8VeAn.js";import{c as N,l as C,d as S,g as E,s as j,a as $}from"./inventory-DH0gflHQ.js";import"./shipments-BiXVsHL6.js";function P(){document.getElementById("main-content").innerHTML=`
    <section class="max-w-full mx-auto px-2 py-6 space-y-6">
      <!-- Modern Header with Breadcrumbs -->
      <header class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
            <p class="text-gray-600 dark:text-gray-400 mt-1">Real-time inventory overview and analytics</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="text-sm text-gray-500 dark:text-gray-400">
              Last updated: <span id="lastUpdated">--</span>
            </div>
            <button id="refreshDashboard" class="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Refresh
            </button>
          </div>
        </div>
      </header>

      <!-- Enhanced KPI Cards with animations -->
      <div id="stat-cards" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8"></div>

      <!-- Enhanced Filter Bar -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
        <div class="flex flex-wrap gap-4 items-center">
          <div class="flex items-center gap-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Filter by Status:</label>
            <select id="filterStatus" class="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700">
              <option value="">All Statuses</option>
            </select>
          </div>
          <div class="flex items-center gap-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Time Period:</label>
            <select id="filterPeriod" class="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700">
              <option value="all">All Time</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
              <option value="365">Last Year</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Enhanced Alerts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Shipment Countdown -->
        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-xl shadow-sm border border-blue-200 dark:border-blue-700 p-6">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Next Shipment</h3>
              <div id="nextShipmentTimer" class="text-2xl font-bold text-blue-700 dark:text-blue-200">—</div>
            </div>
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Aging Alerts -->
        <div id="agingAlerts" class="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900 dark:to-pink-900 rounded-xl shadow-sm border border-red-200 dark:border-red-700 p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-red-900 dark:text-red-100">Overdue Assignments</h3>
            <div class="w-12 h-12 bg-red-100 dark:bg-red-800 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
          </div>
          <div id="agingList" class="space-y-2"></div>
        </div>
      </div>

      <!-- Charts and Performance Section -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Status Distribution Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Status Distribution</h3>
            <button id="statusChartToggle" class="text-sm text-purple-600 hover:text-purple-700">
              Toggle View
            </button>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-64 h-64 flex items-center justify-center mb-4">
              <canvas id="statusChart" width="240" height="240"></canvas>
            </div>
            <div id="statusPills" class="w-full flex gap-2 flex-wrap justify-center"></div>
          </div>
        </div>

        <!-- Risk Analysis Chart -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Risk Analysis</h3>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <span class="text-sm text-gray-600 dark:text-gray-400">Lost/Unknown</span>
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-64 h-64 flex items-center justify-center mb-4">
              <canvas id="lostMeter" width="240" height="240"></canvas>
            </div>
            <div class="text-center">
              <div id="lostMeterLabel" class="text-sm font-medium text-gray-700 dark:text-gray-300"></div>
              <div id="lostMeterLegend" class="text-xs text-gray-500 dark:text-gray-400 mt-2"></div>
            </div>
          </div>
        </div>

        <!-- MOVED: Performance Metrics Section - Now takes 1 column -->
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Performance Metrics</h3>
          <div class="space-y-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400" id="utilizationRate">--</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Utilization Rate</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600 dark:text-blue-400" id="avgDeploymentTime">--</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Avg. Deployment Time</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-600 dark:text-purple-400" id="inventoryTurnover">--</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Inventory Turnover</div>
            </div>
          </div>
  `}function x(e,o){const s=document.getElementById("statusChart").getContext("2d");window.statusChart&&typeof window.statusChart.destroy=="function"&&window.statusChart.destroy(),o||(o=e);const a=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"],t=Object.values(e).reduce((u,c)=>u+c,0),n=Math.max(1,Math.floor(t*.02));let r={},l=0;Object.entries(e).forEach(([u,c])=>{c>=n?r[u]=c:l+=c}),l>0&&(r.Others=l);const i=Object.keys(r),d=i.map((u,c)=>a[c%a.length]);window.statusChart=new Chart(s,{type:"doughnut",data:{labels:i,datasets:[{data:Object.values(r),backgroundColor:d,borderWidth:0,hoverOffset:8,hoverBorderWidth:2,hoverBorderColor:"#ffffff"}]},options:{cutout:"70%",responsive:!0,maintainAspectRatio:!0,interaction:{intersect:!1,mode:"index"},plugins:{legend:{display:!1},tooltip:{backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:"#ffffff",bodyColor:"#ffffff",borderColor:"#374151",borderWidth:1,cornerRadius:8,displayColors:!0,callbacks:{label:function(u){const c=u.label,g=u.parsed,m=(g/t*100).toFixed(1);if(c==="Others"){const v=Object.entries(e).filter(([p,b])=>b<n).map(([p,b])=>`${p}: ${b}`).join(", ");return[`Others (${m}%): ${g}`,v]}return`${c}: ${g} (${m}%)`}}}},animation:{animateRotate:!0,duration:1e3},onClick:function(u,c){if(c.length>0){const g=c[0].index,m=this.data.labels[g];if(m!=="Others"&&Object.keys(e).length>1){const v=e[m];x({[m]:v},o)}}else x(o,o)}}}),R(e,i,d,u=>{Q(u)})}function R(e,o,s,a){const t=document.getElementById("statusPills"),n=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"],r=Object.keys(e);t.className="mt-2 flex gap-1 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 pb-1 max-w-full",t.style.scrollbarWidth="thin",t.innerHTML=r.map((i,d)=>{const u=o?o.indexOf(i):d;return`
      <button 
        class="px-2 py-1 rounded-full text-white text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform active:ring-2 active:ring-offset-1 flex-shrink-0"
        style="background: ${s&&u>=0?s[u]:n[d%n.length]}; color: white; text-shadow: 1px 1px 1px rgba(0,0,0,0.5);"
        data-status="${i}">
        ${i}
      </button>
    `}).join(""),Array.from(t.children).forEach(i=>{i.addEventListener("click",()=>{const d=i.dataset.status;a(d)})});const l=document.createElement("button");l.className="px-2 py-1 rounded-full text-gray-700 text-xs font-semibold whitespace-nowrap hover:scale-105 transition transform border border-gray-300 flex-shrink-0",l.style.background="white",l.textContent="Reset View",l.onclick=()=>{window.statusChart&&window.statusChart.originalByStatus&&x(window.statusChart.originalByStatus,window.statusChart.originalByStatus)},t.appendChild(l)}const h=["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#8f00ff"];function I(e,o){const s=o.filter(i=>i.location&&typeof i.location=="string"&&i.location.toLowerCase().includes("lost")||typeof i.status=="string"&&i.status.toLowerCase()==="unknown").length,a=e.total>0?Math.round(s/e.total*100):0,t=document.getElementById("lostMeter").getContext("2d");window.lostMeterChart&&typeof window.lostMeterChart.destroy=="function"&&window.lostMeterChart.destroy();const n=Math.min(Math.floor(a/15),h.length-1);window.lostMeterChart=new Chart(t,{type:"doughnut",data:{labels:["Lost/Unknown","Other"],datasets:[{data:[s,e.total-s],backgroundColor:[h[n],"rgba(209,213,219,0.4)"],borderWidth:2,borderColor:"#fff",hoverOffset:8}]},options:{cutout:"80%",responsive:!0,maintainAspectRatio:!0,plugins:{legend:{display:!1},tooltip:{enabled:!0,backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:"#ffffff",bodyColor:"#ffffff"},datalabels:{color:["#ffffff","#6b7280"],font:{weight:"bold",size:16},textStrokeColor:"#000000",textStrokeWidth:1,formatter:(i,d)=>d.dataIndex===0?`${a}%`:""}},animation:{animateRotate:!0,duration:1e3}},plugins:[ChartDataLabels]});const r=document.getElementById("lostMeterLabel");if(r){let c=function(){i<d?(i+=u,i>d&&(i=d),r.textContent=`Lost Chargers: ${i}% (${s} of ${e.total})`,requestAnimationFrame(c)):r.textContent=`Lost Chargers: ${d}% (${s} of ${e.total})`},i=0;const d=a,u=Math.ceil(d/24)||1;c()}const l=document.getElementById("lostMeterLegend");if(l){const i={};o.filter(d=>d.location&&typeof d.location=="string"&&d.location.toLowerCase().includes("lost")||typeof d.status=="string"&&d.status.toLowerCase()==="unknown").forEach(d=>{const u=d.model||"Unknown";i[u]=(i[u]||0)+1}),l.innerHTML=Object.entries(i).map(([d,u])=>`${d}: <b>${u}</b>`).join(", ")}}async function B(e,o){const s=await $(),a=[{label:"Total Units",value:e.total,key:"total"},{label:"In Stock",value:e.inStockCount||0,key:"inStockCount"},{label:"Installed",value:e.installedCount||0,key:"installedCount"},{label:"With Contractors",value:e.contractorCount||0,key:"contractorCount"},{label:"Overdue (>14d)",value:e.overdueCount||0,key:"overdueCount"},{label:"Public Assets",value:e.publicCount||0,key:"publicCount"}],t=document.getElementById("stat-cards");t.innerHTML=a.map((n,r)=>`
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 flex flex-col animate-countup relative stat-card"
         style="border-left: 6px solid ${h[r%h.length]};"
         data-key="${n.key}">
      <span class="text-xs font-medium text-gray-500 dark:text-gray-400">${n.label}</span>
      <span class="text-xl font-bold text-gray-900 dark:text-gray-100">${n.value}</span>
      <div class="stat-tooltip absolute z-10 left-1/2 -translate-x-1/2 mt-2 bg-gray-800 text-white text-xs rounded px-3 py-2 shadow-lg hidden whitespace-nowrap"></div>
    </div>
  `).join(""),document.querySelectorAll(".stat-card").forEach(n=>{const r=n.dataset.key,l=n.querySelector(".stat-tooltip");n.addEventListener("mouseenter",i=>{let d={};if(r==="total")o.forEach(u=>{const c=u.model||"Unknown";d[c]=(d[c]||0)+1});else if(r==="inStockCount"||r==="installedCount"||r==="contractorCount"||r==="publicCount"){let u;r==="inStockCount"?u=c=>{var m;const g=(m=s.locations)==null?void 0:m.find(v=>v.name===c.location);return(g==null?void 0:g.parent)==="warehouse"}:r==="installedCount"?u=c=>{var m;const g=(m=s.locations)==null?void 0:m.find(v=>v.name===c.location);return(g==null?void 0:g.parent)==="customer"}:r==="contractorCount"?u=c=>{var v;const g=(v=s.locations)==null?void 0:v.find(p=>p.name===c.location);return(g==null?void 0:g.parent)==="contractor"?!0:(s.contractors||[]).map(p=>p.name).includes(c.location)}:r==="publicCount"&&(u=c=>{var m;const g=(m=s.locations)==null?void 0:m.find(v=>v.name===c.location);return(g==null?void 0:g.parent)==="public"}),o.filter(u).forEach(c=>{const g=c.model||"Unknown";d[g]=(d[g]||0)+1})}Object.keys(d).length===0?l.innerHTML="No data":l.innerHTML=Object.entries(d).map(([u,c])=>`<div>${u}: <b>${c}</b></div>`).join(""),l.classList.remove("hidden")}),n.addEventListener("mouseleave",i=>{l.classList.add("hidden")})})}function D(e){const o=document.getElementById("nextShipmentTimer");if(!e)return o.textContent="—";function s(){const a=e-Date.now();if(a<=0)return o.textContent="Arrived";const t=Math.floor(a/864e5),n=Math.floor(a%864e5/36e5),r=Math.floor(a%36e5/6e4);o.textContent=`${t}d ${n}h ${r}m`,requestAnimationFrame(s)}s()}async function O(e,o){const s=document.getElementById("agingList");if(e.overdueCount===0)return s.innerHTML="<li>No overdue items</li>";const a=Date.now(),t=14*24*60*60*1e3,r=((await $()).contractors||[]).map(i=>i.name),l=o.filter(i=>i.assignedDate&&a-new Date(i.assignedDate).getTime()>t&&r.includes(i.location));s.innerHTML=l.length?l.map(i=>`<li>Charger ${i.chargerId} assigned on ${new Date(i.assignedDate).toLocaleDateString()}</li>`).join(""):"<li>No overdue items</li>"}async function T(e,o){var a;let s=document.getElementById("locationDistributionSection");if(!s){let t=(a=document.querySelector("#locationBar"))==null?void 0:a.parentElement;if(t)t.id="locationDistributionSection",s=t;else if(t=document.querySelector(".grid.grid-cols-1.lg\\:grid-cols-3.gap-6.mb-8"),t){const n=document.createElement("div");n.className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8 col-span-full",n.id="locationDistributionSection",t.parentElement.insertBefore(n,t.nextSibling),s=n}else{console.error("Could not find suitable container for location distribution");return}}s.innerHTML=`
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">Inventory Distribution</h3>
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">View:</label>
          <select id="viewModeSelector" class="text-sm border rounded px-2 py-1">
            <option value="treemap">Treemap View</option>
            <option value="heatmap">Heatmap View</option>
            <option value="cards">Card View</option>
          </select>
        </div>
        <button id="locationChartExport" class="text-sm text-purple-600 hover:text-purple-700">
          Export
        </button>
      </div>
    </div>
    
    <!-- Search and Filter Bar -->
    <div class="mb-4 flex gap-3 items-center">
      <input type="text" id="locationSearch" placeholder="Search locations..." 
             class="flex-1 px-3 py-2 border rounded-lg text-sm">
      <select id="modelFilter" class="px-3 py-2 border rounded-lg text-sm">
        <option value="">All Models</option>
      </select>
      <button id="resetFilters" class="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm">
        Reset
      </button>
    </div>
    
    <!-- View Container -->
    <div id="inventoryViewContainer" class="w-full" style="min-height: 600px;">
      <!-- Dynamic content will be inserted here -->
    </div>
    
    <!-- Quick Stats Bar -->
    <div id="quickStats" class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <!-- Stats will be populated here -->
    </div>
  `,await z(e,o)}async function z(e,o){const s=await $(),a=q(o,s),t=[...new Set(o.map(r=>r.model||"Unknown"))],n=document.getElementById("modelFilter");n.innerHTML='<option value="">All Models</option>'+t.map(r=>`<option value="${r}">${r}</option>`).join(""),J(a,o),L(a),V(a)}function q(e,o){const s={};return e.forEach(a=>{const t=a.location||"Unknown",n=a.model||"Unknown";s[t]||(s[t]={total:0,models:{},parentInfo:W(t,o)}),s[t].total++,s[t].models[n]=(s[t].models[n]||0)+1}),s}function W(e,o){var a,t;const s=(a=o.locations)==null?void 0:a.find(n=>n.name===e);if(s!=null&&s.parent){const n=(t=o.parentContainers)==null?void 0:t.find(r=>r.id===s.parent);return n?{name:n.name,id:n.id}:null}return null}function J(e,o,s){const a=document.getElementById("viewModeSelector"),t=document.getElementById("locationSearch"),n=document.getElementById("modelFilter"),r=document.getElementById("resetFilters");a.addEventListener("change",l=>{const i=l.target.value,d=y(e,t.value,n.value);switch(i){case"treemap":L(d);break;case"heatmap":H(d,o);break;case"cards":A(d);break}}),t.addEventListener("input",()=>{const l=y(e,t.value,n.value);w(l,o)}),n.addEventListener("change",()=>{const l=y(e,t.value,n.value);w(l,o)}),r.addEventListener("click",()=>{t.value="",n.value="",w(e,o)})}function y(e,o,s){const a={};return Object.entries(e).forEach(([t,n])=>{if(o&&!t.toLowerCase().includes(o.toLowerCase()))return;let r={...n.models};s&&(r={[s]:n.models[s]||0});const l=Object.values(r).reduce((i,d)=>i+d,0);l>0&&(a[t]={...n,models:r,total:l})}),a}function w(e,o){switch(document.getElementById("viewModeSelector").value){case"treemap":L(e);break;case"heatmap":H(e,o);break;case"cards":A(e);break}V(e)}function L(e){const o=document.getElementById("inventoryViewContainer"),s=Object.entries(e).sort((t,n)=>n[1].total-t[1].total).slice(0,20),a=s.reduce((t,[,n])=>t+n.total,0);o.innerHTML=`
    <div class="grid gap-2" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
      ${s.map(([t,n],r)=>{const l=(n.total/a*100).toFixed(1),i=h[r%h.length],d=s[0][1].total,u=Math.max(.3,n.total/d),c=80;return`
          <div class="location-treemap-item bg-white dark:bg-gray-800 rounded-lg border-2 hover:shadow-lg transition-all cursor-pointer group"
               style="height: ${c+(200-c)*u}px; border-color: ${i}25; background: linear-gradient(135deg, ${i}10, ${i}05);"
               data-location="${t}"
               data-location-data='${JSON.stringify(n)}'>
            
            <div class="p-3 h-full flex flex-col justify-between relative overflow-hidden">
              <!-- Location Header -->
              <div class="flex-shrink-0">
                <div class="font-semibold text-sm text-gray-900 dark:text-gray-100 truncate" title="${t}">
                  ${t}
                </div>
                ${n.parentInfo?`
                  <div class="text-xs text-gray-500 truncate" title="${n.parentInfo.name}">
                    ${n.parentInfo.name}
                  </div>
                `:""}
              </div>
              
              <!-- Count Display -->
              <div class="flex-1 flex items-center justify-center">
                <div class="text-center">
                  <div class="text-2xl font-bold" style="color: ${i}">
                    ${n.total}
                  </div>
                  <div class="text-xs text-gray-500">
                    ${l}% of total
                  </div>
                </div>
              </div>
              
              <!-- Model Preview -->
              <div class="flex-shrink-0">
                <div class="text-xs text-gray-400 truncate">
                  ${Object.keys(n.models).length} model${Object.keys(n.models).length!==1?"s":""}
                </div>
              </div>
              
              <!-- Hover Indicator -->
              <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </div>
            </div>
          </div>
        `}).join("")}
    </div>
    
    ${s.length===0?`
      <div class="flex items-center justify-center h-40 text-gray-500">
        <div class="text-center">
          <svg class="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <p>No locations match your current filters</p>
        </div>
      </div>
    `:""}
  `,o.addEventListener("click",t=>{const n=t.target.closest(".location-treemap-item");if(n){const r=n.dataset.location,l=JSON.parse(n.dataset.locationData);M(r,l)}})}function H(e,o){const s=document.getElementById("inventoryViewContainer"),a=[...new Set(o.map(r=>r.model||"Unknown"))],t=Object.keys(e).slice(0,15),n=Math.max(...Object.values(e).flatMap(r=>Object.values(r.models)));s.innerHTML=`
    <div class="overflow-x-auto">
      <table class="w-full border-collapse">
        <thead>
          <tr>
            <th class="p-2 text-left font-semibold text-sm border-b">Location</th>
            ${a.slice(0,10).map(r=>`
              <th class="p-2 text-center font-semibold text-xs border-b transform -rotate-45 origin-bottom-left" 
                  style="min-width: 80px;" title="${r}">
                ${r.length>15?r.substring(0,12)+"...":r}
              </th>
            `).join("")}
            <th class="p-2 text-center font-semibold text-sm border-b">Total</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(r=>{const l=e[r];return`
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer location-row"
                  data-location="${r}"
                  data-location-data='${JSON.stringify(l)}'>
                <td class="p-2 font-medium text-sm border-b truncate" title="${r}">
                  ${r}
                  ${l.parentInfo?`<div class="text-xs text-gray-500">${l.parentInfo.name}</div>`:""}
                </td>
                ${a.slice(0,10).map(i=>{const d=l.models[i]||0,u=d>0?Math.min(1,d/n):0,c=a.indexOf(i)%h.length,g=h[c];return`
                    <td class="p-2 text-center text-xs border-b"
                        style="background-color: ${d>0?`${g}${Math.floor(u*255).toString(16).padStart(2,"0")}`:"transparent"}; color: ${u>.5?"white":"inherit"}">
                      ${d>0?d:""}
                    </td>
                  `}).join("")}
                <td class="p-2 text-center font-bold border-b">${l.total}</td>
              </tr>
            `}).join("")}
        </tbody>
      </table>
    </div>
  `,s.addEventListener("click",r=>{const l=r.target.closest(".location-row");if(l){const i=l.dataset.location,d=JSON.parse(l.dataset.locationData);M(i,d)}})}function A(e){const o=document.getElementById("inventoryViewContainer"),s=Object.entries(e).sort((a,t)=>t[1].total-a[1].total);o.innerHTML=`
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      ${s.map(([a,t],n)=>{const r=h[n%h.length],l=Object.entries(t.models).sort((i,d)=>d[1]-i[1]).slice(0,3);return`
          <div class="bg-white dark:bg-gray-800 rounded-lg border shadow-sm hover:shadow-md transition-shadow cursor-pointer location-card"
               style="border-left: 4px solid ${r};"
               data-location="${a}"
               data-location-data='${JSON.stringify(t)}'>
            <div class="p-4">
              <div class="flex items-start justify-between mb-3">
                <div class="flex-1 min-w-0">
                  <h4 class="font-semibold text-gray-900 dark:text-gray-100 truncate" title="${a}">
                    ${a}
                  </h4>
                  ${t.parentInfo?`
                    <p class="text-sm text-gray-500 truncate">${t.parentInfo.name}</p>
                  `:""}
                </div>
                <div class="text-right flex-shrink-0">
                  <div class="text-2xl font-bold" style="color: ${r}">
                    ${t.total}
                  </div>
                  <div class="text-xs text-gray-500">units</div>
                </div>
              </div>
              
              <div class="space-y-1">
                <div class="text-xs text-gray-500 mb-2">Top Models:</div>
                ${l.map(([i,d])=>`
                  <div class="flex justify-between items-center text-sm">
                    <span class="truncate flex-1 pr-2" title="${i}">
                      ${i.length>20?i.substring(0,17)+"...":i}
                    </span>
                    <span class="font-medium flex-shrink-0">${d}</span>
                  </div>
                `).join("")}
                ${Object.keys(t.models).length>3?`
                  <div class="text-xs text-gray-400 italic">
                    +${Object.keys(t.models).length-3} more model${Object.keys(t.models).length-3!==1?"s":""}
                  </div>
                `:""}
              </div>
            </div>
          </div>
        `}).join("")}
    </div>
  `,o.addEventListener("click",a=>{const t=a.target.closest(".location-card");if(t){const n=t.dataset.location,r=JSON.parse(t.dataset.locationData);M(n,r)}})}function V(e){const o=document.getElementById("quickStats"),s=Object.keys(e).length,a=Object.values(e).reduce((r,l)=>r+l.total,0),t=new Set;Object.values(e).forEach(r=>{Object.keys(r.models).forEach(l=>t.add(l))});const n=s>0?Math.round(a/s):0;o.innerHTML=`
    <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border">
      <div class="text-lg font-bold text-blue-600">${s}</div>
      <div class="text-xs text-gray-500">Locations</div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border">
      <div class="text-lg font-bold text-green-600">${a}</div>
      <div class="text-xs text-gray-500">Total Units</div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border">
      <div class="text-lg font-bold text-purple-600">${t.size}</div>
      <div class="text-xs text-gray-500">Unique Models</div>
    </div>
    <div class="bg-white dark:bg-gray-800 rounded-lg p-3 text-center border">
      <div class="text-lg font-bold text-orange-600">${n}</div>
      <div class="text-xs text-gray-500">Avg per Location</div>
    </div>
  `}function M(e,o){let s=document.getElementById("chargerListDialog");s||(s=document.createElement("dialog"),s.id="chargerListDialog",s.className="rounded-xl p-0 max-w-4xl w-full mx-auto max-h-[90vh] overflow-hidden backdrop:bg-black backdrop:bg-opacity-50",document.body.appendChild(s));const a=Object.entries(o.models).sort((t,n)=>n[1]-t[1]);s.innerHTML=`
    <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6">
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold">${e}</h2>
            ${o.parentInfo?`
              <p class="text-purple-200 text-sm">Parent: ${o.parentInfo.name}</p>
            `:""}
            <p class="text-purple-200 text-sm">${o.total} total units • ${a.length} model types</p>
          </div>
          <button onclick="this.closest('dialog').close()" 
                  class="text-white hover:text-gray-200 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Content -->
      <div class="p-6 max-h-96 overflow-y-auto">
        <div class="grid gap-4">
          ${a.map(([t,n],r)=>{const l=(n/o.total*100).toFixed(1),i=h[r%h.length];return`
              <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition cursor-pointer"
                   onclick="showUnitsForModel('${e}', '${t}')">
                <div class="flex items-center justify-between mb-2">
                  <div class="font-semibold text-gray-900 dark:text-gray-100 flex-1 min-w-0 pr-4">
                    <div class="truncate" title="${t}">${t}</div>
                  </div>
                  <div class="text-right flex-shrink-0">
                    <div class="text-xl font-bold" style="color: ${i}">${n}</div>
                    <div class="text-sm text-gray-500">${l}%</div>
                  </div>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="h-2 rounded-full transition-all duration-500" 
                       style="width: ${l}%; background: ${i}"></div>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
      
      <!-- Footer -->
      <div class="bg-gray-50 dark:bg-gray-700 p-4 flex justify-between items-center">
        <button onclick="showAllUnitsForLocation('${e}')"
                class="text-purple-600 hover:text-purple-700 underline text-sm">
          View All Individual Units
        </button>
        <button onclick="this.closest('dialog').close()" 
                class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
          Close
        </button>
      </div>
    </div>
  `,s.showModal()}async function Q(e){const o=document.getElementById("chargerListDialog")||document.createElement("dialog");o.id="chargerListDialog",o.className="rounded-xl p-5",o.parentElement||document.body.appendChild(o);const a=(await C()).filter(t=>t.status===e);o.innerHTML=`
    <div class="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">${a.length} Chargers with "${e}"</div>
    <div class="overflow-auto" style="max-height:350px">
      ${a.map(t=>`<div class="mb-2 p-2 bg-gray-50 dark:bg-gray-800 rounded shadow">
          <div><b>ID:</b> ${t.chargerId}</div>
          <div><b>Model:</b> ${t.model}</div>
        </div>`).join("")}
    </div>
    <div class="flex justify-end mt-4">
      <button class="bg-purple-600 text-white px-4 py-2 rounded" onclick="document.getElementById('chargerListDialog').close()">Close</button>
    </div>
  `,o.showModal()}function U(e){document.getElementById("main-content")?e():setTimeout(()=>U(e),30)}document.addEventListener("DOMContentLoaded",()=>{document.body.dataset.page==="dashboard"&&U(async()=>{if(F(),f("Checking permissions..."),!await N("viewDashboard")){document.getElementById("main-content").innerHTML=`
          <div class="flex items-center justify-center h-64">
            <div class="text-center">
              <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Access Denied</h2>
              <p class="text-gray-500 dark:text-gray-400">You don't have permission to view the dashboard.</p>
            </div>
          </div>
        `;return}f("Injecting dashboard layout..."),P(),f("Loading inventory data...");const o=await C();f("Loading shipments...");const s=await S();f("Calculating statistics...");const a=await E(o,s);f("Rendering components..."),await B(a,o),D(a.nextShipment),await O(a,o),x(a.byStatus),window.statusChart&&(window.statusChart.originalByStatus=a.byStatus),I(a,o),await T(null,o),f("Setting up event handlers..."),document.getElementById("refreshDashboard").addEventListener("click",async()=>{await Y()}),document.getElementById("lastUpdated").textContent=new Date().toLocaleTimeString(),f("Dashboard ready!"),setTimeout(()=>{k()},500)})});async function Y(){F(),f("Refreshing data...");const e=document.getElementById("refreshDashboard");e.disabled=!0,e.innerHTML=`
          <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          Refreshing...
        `;try{f("Loading inventory...");const o=await C();f("Loading shipments...");const s=await S();f("Calculating stats...");const a=await E(o,s);f("Updating dashboard..."),await B(a,o),D(a.nextShipment),await O(a,o),x(a.byStatus),I(a,o),await T(null,o),document.getElementById("lastUpdated").textContent=new Date().toLocaleTimeString(),f("Refresh complete!"),j("Dashboard refreshed successfully","green"),setTimeout(()=>{k()},500)}catch(o){console.error("Error refreshing dashboard:",o),k(),j("Failed to refresh dashboard","red")}finally{e.disabled=!1,e.innerHTML=`
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            Refresh
          `}}function F(){const e=document.getElementById("dashboardLoadingScreen");e&&e.remove(),document.body.insertAdjacentHTML("beforeend",`
    <div id="dashboardLoadingScreen" class="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center z-50">
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
        <p class="text-purple-200 text-lg mb-8">Loading Dashboard</p>
        
        <!-- Loading Dots -->
        <div class="flex justify-center space-x-2">
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
          <div class="loading-dots w-3 h-3 bg-white rounded-full"></div>
        </div>
        
        <!-- Progress Text -->
        <p id="dashboardLoadingProgress" class="text-purple-300 mt-6 text-sm">Initializing...</p>
      </div>
    </div>
  `)}function k(){const e=document.getElementById("dashboardLoadingScreen");e&&(e.style.opacity="0",e.style.transition="opacity 0.5s ease-out",setTimeout(()=>{e.remove()},500))}function f(e){const o=document.getElementById("dashboardLoadingProgress");o&&(o.textContent=e)}

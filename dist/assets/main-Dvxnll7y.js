import{o as C,g as P,a as E}from"./users-BQb8VeAn.js";import{l as S,a as k,b as H}from"./inventory-DH0gflHQ.js";import{loadProducts as F}from"./products-CUODTXFW.js";function V(){if(window.innerWidth<768){const n=localStorage.getItem("userRole");if(console.log("Mobile device detected, checking user role:",n),n==="Agent")return console.log("Agent user on mobile, redirecting to inventory"),window.location.href="/inventory.html",!0;const o=localStorage.getItem("mobileStartPage");return o?(window.location.href=o,!0):(console.log("Mobile user, redirecting to inventory by default"),window.location.href="/inventory.html",!0)}return!1}C(E,async e=>{if(!e)window.location.href="/login.html";else{const n=await P();if(n&&localStorage.setItem("userRole",n.role),V())return;B()}});function b(e){const n=document.getElementById("loadingProgress");n&&(n.textContent=e)}function L(){const e=document.getElementById("loadingScreen");e&&(e.style.opacity="0",e.style.transition="opacity 0.5s ease-out",setTimeout(()=>{e.style.display="none"},500))}async function B(){try{b("Loading products...");const e=await F();b("Loading inventory...");const n=await S();b("Loading settings...");const o=await k();b("Loading audit log...");const l=await H();window.inventory=n;const r=await z(n,e,o,l);b("Rendering KPIs..."),O(r),b("Rendering charts..."),await Promise.all([new Promise(s=>j(r,s)),new Promise(s=>W(r.pipeline).then(s)),new Promise(s=>U(r.depreciation).then(s)),new Promise(s=>N(r.health).then(s)),new Promise(s=>G(r.growth).then(s))]),b("Finalizing..."),setTimeout(()=>L(),200)}catch(e){console.error("Error initializing index page:",e),K(),L()}}async function z(e,n,o,l){const r={};n.forEach(a=>r[a.name]=a);const s=[...o.locations,...(o.contractors||[]).map(a=>({name:a.name,parent:"contractor"}))],d=new Date,v=new Date(d.getTime()-30*24*60*60*1e3),p=new Date(d.getTime()-60*24*60*60*1e3),t={financial:{revenueAssets:{count:0,value:0},idleInventory:{count:0,value:0},inTransit:{count:0,value:0},totalAssetValue:0,cashFlowImpact:0,utilizationRate:0},operational:{deploymentVelocity:0,inventoryTurnover:0,avgTimeToDeployment:0,lifeCycleEfficiency:{}},strategic:{marketExpansion:{publicInstallations:0,customerInstallations:0,expansionRate:0},assetHealth:{healthy:0,faulty:0,maintenance:0,faultRate:0}},pipeline:{warehouse:[],contractor:[],deployed:[],unknown:[]},depreciation:{totalOriginal:0,totalCurrent:0,totalDepreciation:0,assets:[]},health:{operational:0,faulty:0,maintenance:0,rma:0},growth:{deploymentsThisMonth:0,deploymentsLastMonth:0,growthRate:0,trend:[]}};e.forEach(a=>{var I,T,M;const c=r[a.model]||r[a.product],g=parseFloat(c==null?void 0:c.price)||0;console.log("Processing unit:",{chargerId:a.chargerId,model:a.model,product:a.product,location:a.location,foundProduct:c,price:c==null?void 0:c.price,parsedValue:g});let i=g;i===0&&((I=a.model)!=null&&I.includes("SMART HOME MINI WALLBOX")?i=300:(T=a.model)!=null&&T.includes("DC Fast")?i=15e3:i=500,console.log(`Using estimated value ${i} for ${a.chargerId}`));const u=s.find(w=>w.name===a.location),h=(u==null?void 0:u.parent)||"other";if(console.log("Location mapping:",{unitLocation:a.location,foundLocationObj:u,parentId:h}),h==="customer"||h==="public"||(M=a.status)!=null&&M.includes("Installed")){t.financial.revenueAssets.count++,t.financial.revenueAssets.value+=i,t.pipeline.deployed.push(a);const w=new Date(a.lastAction||a.created||Date.now()),f=Math.max(0,(Date.now()-w.getTime())/(1e3*60*60*24*30)),m=((c==null?void 0:c.depreciationRate)||10)/100,D=i*m,R=Math.min(i*.9,D*f/12),A=Math.max(i*.1,i-R);t.depreciation.totalOriginal+=i,t.depreciation.totalCurrent+=A,t.depreciation.assets.push({chargerId:a.chargerId,originalValue:i,currentValue:A,depreciation:R,monthsDeployed:Math.round(f)}),console.log("Added to revenue assets:",a.chargerId,"value:",i)}else h==="warehouse"?(t.financial.idleInventory.count++,t.financial.idleInventory.value+=i,t.pipeline.warehouse.push(a),console.log("Added to idle inventory:",a.chargerId,"value:",i)):h==="contractor"?(t.financial.inTransit.count++,t.financial.inTransit.value+=i,t.pipeline.contractor.push(a),console.log("Added to in transit:",a.chargerId,"value:",i)):(t.pipeline.unknown.push(a),console.log("Added to unknown:",a.chargerId,"parentId:",h));a.status==="Faulty"?(t.health.faulty++,t.strategic.assetHealth.faulty++):a.status==="RMA"?(t.health.rma++,t.strategic.assetHealth.maintenance++):(t.health.operational++,t.strategic.assetHealth.healthy++)}),t.financial.totalAssetValue=t.financial.revenueAssets.value+t.financial.idleInventory.value+t.financial.inTransit.value,t.financial.cashFlowImpact=t.financial.idleInventory.value,t.financial.utilizationRate=e.length>0?t.financial.revenueAssets.count/e.length*100:0,t.operational.inventoryTurnover=t.financial.idleInventory.count>0?t.financial.revenueAssets.count/t.financial.idleInventory.count:0;const y=l.filter(a=>{var g,i,u;return new Date(a.date)>=v&&(((g=a.statusTo)==null?void 0:g.includes("Installed"))||((i=a.to)==null?void 0:i.includes("Customer"))||((u=a.to)==null?void 0:u.includes("Public")))});t.operational.deploymentVelocity=y.length;const $=l.filter(a=>{var g,i,u;return new Date(a.date)>=v&&(((g=a.statusTo)==null?void 0:g.includes("Installed"))||((i=a.to)==null?void 0:i.includes("Customer"))||((u=a.to)==null?void 0:u.includes("Public")))}).length,x=l.filter(a=>{var g,i,u;const c=new Date(a.date);return c>=p&&c<v&&(((g=a.statusTo)==null?void 0:g.includes("Installed"))||((i=a.to)==null?void 0:i.includes("Customer"))||((u=a.to)==null?void 0:u.includes("Public")))}).length;return t.growth.deploymentsThisMonth=$,t.growth.deploymentsLastMonth=x,t.growth.growthRate=x>0?($-x)/x*100:0,t.strategic.assetHealth.faultRate=e.length>0?t.strategic.assetHealth.faulty/e.length*100:0,t.strategic.marketExpansion.expansionRate=e.length>0?(t.strategic.marketExpansion.publicInstallations+t.strategic.marketExpansion.customerInstallations)/e.length*100:0,t.depreciation.totalDepreciation=t.depreciation.totalOriginal-t.depreciation.totalCurrent,t}function O(e){const n=document.getElementById("kpi-cards");if(!n)return;const o=[{label:"Revenue Assets",value:e.financial.revenueAssets.count,value2:`$${e.financial.revenueAssets.value.toLocaleString()}`,color:"#22c55e",subtitle:`${e.financial.utilizationRate.toFixed(1)}% utilization`,trend:e.growth.growthRate>0?"↗":e.growth.growthRate<0?"↘":"→"},{label:"Cash Flow Impact",value:e.financial.idleInventory.count,value2:`$${e.financial.cashFlowImpact.toLocaleString()}`,color:"#f59e0b",subtitle:`Turnover: ${e.operational.inventoryTurnover.toFixed(1)}x`,trend:e.operational.inventoryTurnover>2?"↗":"→"},{label:"Deployment Velocity",value:`${e.operational.deploymentVelocity}/mo`,value2:`${e.growth.growthRate.toFixed(1)}% growth`,color:"#8b5cf6",subtitle:"Monthly deployment rate",trend:e.growth.growthRate>0?"↗":e.growth.growthRate<0?"↘":"→"},{label:"Asset Health",value:`${(100-e.strategic.assetHealth.faultRate).toFixed(1)}%`,value2:`${e.strategic.assetHealth.faulty} faulty`,color:e.strategic.assetHealth.faultRate>5?"#ef4444":"#22c55e",subtitle:`${e.health.rma} in maintenance`,trend:e.strategic.assetHealth.faultRate<5?"↗":"↘"}];n.innerHTML=o.map(l=>`
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full relative overflow-hidden">
      <div class="absolute top-0 right-0 text-6xl opacity-10" style="color: ${l.color}">
        ${l.trend}
      </div>
      <div class="flex items-center justify-between mb-4 relative z-10">
        <div>
          <div class="text-3xl font-bold">${l.value}</div>
          ${l.value2?`<div class="text-xl text-gray-500 mt-1">${l.value2}</div>`:'<div class="h-7"></div>'}
        </div>
        <div class="w-14 h-14 rounded-full flex items-center justify-center" style="background-color: ${l.color}25">
          <div class="w-6 h-6 rounded-full" style="background-color: ${l.color}"></div>
        </div>
      </div>
      <div class="text-base text-gray-500 mt-auto pt-2 font-medium">${l.label}</div>
      <div class="text-xs text-gray-400 mt-1">${l.subtitle}</div>
    </div>
  `).join("")}function j(e,n){var $,x,a,c,g,i,u,h,I,T,M,w;const o=document.getElementById("assetDonut");if(!o){n&&n();return}const l=o.getContext("2d");if(window.assetChart)try{window.assetChart.destroy()}catch{}const r=[((x=($=e.financial)==null?void 0:$.revenueAssets)==null?void 0:x.value)||0,((c=(a=e.financial)==null?void 0:a.idleInventory)==null?void 0:c.value)||0,((i=(g=e.financial)==null?void 0:g.inTransit)==null?void 0:i.value)||0],s=[((h=(u=e.financial)==null?void 0:u.revenueAssets)==null?void 0:h.count)||0,((T=(I=e.financial)==null?void 0:I.idleInventory)==null?void 0:T.count)||0,((w=(M=e.financial)==null?void 0:M.inTransit)==null?void 0:w.count)||0],d=r.reduce((f,m)=>f+m,0),v=s.reduce((f,m)=>f+m,0),p=d>0,t=p?r:s,y=p?d:v;if(console.log("Chart data:",{valueData:r,countData:s,totalValue:d,totalCount:v,useValueData:p,data:t}),y===0){l.clearRect(0,0,o.width,o.height),l.fillStyle="#9ca3af",l.font="16px sans-serif",l.textAlign="center",l.fillText("No asset data available",o.width/2,o.height/2),n&&n();return}window.assetChart=new Chart(l,{type:"doughnut",data:{labels:["Revenue Assets","Idle Inventory","In Transit"],datasets:[{data:t,backgroundColor:["#22c55e","#f59e0b","#8b5cf6"],borderColor:["#16a34a","#d97706","#7c3aed"],borderWidth:2,hoverOffset:30,hoverBorderWidth:3,borderRadius:4,hoverBorderColor:"#ffffff"}]},options:{responsive:!0,maintainAspectRatio:!1,animation:{duration:1e3,onComplete:()=>{n&&n()}},plugins:{title:{display:!0,text:p?`Total Value: $${y.toLocaleString()}`:`Total Units: ${y}`,font:{size:18,weight:"bold"},padding:{bottom:15}},legend:{position:"bottom",labels:{padding:25,font:{size:14},usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"rgba(255,255,255,0.95)",titleColor:"#333",bodyColor:"#333",bodyFont:{size:14},titleFont:{size:16},borderColor:"#ccc",borderWidth:1,padding:15,boxPadding:8,cornerRadius:6,displayColors:!0,callbacks:{label:function(f){const m=f.raw,D=y>0?Math.round(m/y*100):0;return p?`${f.label}: $${m.toLocaleString()} (${D}%)`:`${f.label}: ${m} units (${D}%)`}}}}}}),console.log("Chart created successfully:",window.assetChart)}function W(e){return new Promise(n=>{const o=document.getElementById("milestone-progress");if(!o)return n();const l=[{key:"warehouse",label:"Warehouse",color:"#3b82f6"},{key:"contractor",label:"With Contractors",color:"#8b5cf6"},{key:"deployed",label:"Deployed",color:"#22c55e"},{key:"unknown",label:"Other",color:"#6b7280"}],r=l.map(d=>{var v;return((v=e[d.key])==null?void 0:v.length)||0}),s=r.reduce((d,v)=>d+v,0);o.innerHTML=`
    <div class="space-y-4">
      ${l.map((d,v)=>{const p=r[v],t=s>0?p/s*100:0;return`
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-4 h-4 rounded-full" style="background-color: ${d.color}"></div>
              <span class="font-medium">${d.label}</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-32 bg-gray-200 rounded-full h-2">
                <div class="h-2 rounded-full transition-all duration-500" 
                     style="width: ${t}%; background-color: ${d.color}"></div>
              </div>
              <span class="font-bold text-lg w-8 text-right">${p}</span>
            </div>
          </div>
        `}).join("")}
    </div>
    <div class="flex mt-8 justify-center">
      <div class="text-center py-4 px-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <div class="text-2xl font-bold">${s}</div>
        <div class="text-sm text-gray-500">Total Units</div>
      </div>
    </div>
  `,n()})}function U(e){return new Promise(n=>{const o=document.getElementById("depreciation-summary");if(!o)return n();if(!e.assets||e.assets.length===0){o.innerHTML=`
      <div class="text-center py-8">
        <div class="text-gray-500 text-lg">No deployed assets for depreciation analysis</div>
        <div class="text-sm text-gray-400 mt-2">Assets will appear here once deployed to customers or public locations</div>
      </div>
    `;return}const l=e.totalOriginal>0?e.totalDepreciation/e.totalOriginal*100:0;o.innerHTML=`
    <div class="grid md:grid-cols-3 gap-6">
      <div class="text-center">
        <div class="text-3xl font-bold text-blue-600">$${e.totalOriginal.toLocaleString()}</div>
        <div class="text-sm text-gray-500">Original Value</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-purple-600">$${e.totalDepreciation.toLocaleString()}</div>
        <div class="text-sm text-gray-500">Total Depreciation</div>
      </div>
      <div class="text-center">
        <div class="text-3xl font-bold text-green-600">$${e.totalCurrent.toLocaleString()}</div>
        <div class="text-sm text-gray-500">Current Value</div>
      </div>
    </div>
    <div class="mt-4 text-center">
      <div class="text-lg font-semibold">
        Depreciation Rate: <span class="text-purple-600">${l.toFixed(1)}%</span>
        <span class="text-sm text-gray-500 ml-2">(${e.assets.length} deployed assets)</span>
      </div>
    </div>
  `,n()})}function N(e){return new Promise(n=>{const o=document.getElementById("asset-health");if(!o)return n();e.operational+e.faulty+e.maintenance+e.rma,o.innerHTML=`
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="text-center p-4 bg-green-50 rounded-lg">
        <div class="text-2xl font-bold text-green-600">${e.operational}</div>
        <div class="text-sm text-gray-600">Operational</div>
      </div>
      <div class="text-center p-4 bg-red-50 rounded-lg">
        <div class="text-2xl font-bold text-red-600">${e.faulty}</div>
        <div class="text-sm text-gray-600">Faulty</div>
      </div>
      <div class="text-center p-4 bg-yellow-50 rounded-lg">
        <div class="text-2xl font-bold text-yellow-600">${e.maintenance}</div>
        <div class="text-sm text-gray-600">Maintenance</div>
      </div>
      <div class="text-center p-4 bg-purple-50 rounded-lg">
        <div class="text-2xl font-bold text-purple-600">${e.rma}</div>
        <div class="text-sm text-gray-600">RMA</div>
      </div>
    </div>
  `,n()})}function G(e){return new Promise(n=>{const o=document.getElementById("growth-trajectory");if(!o)return n();const l=e.growthRate>0?"📈":e.growthRate<0?"📉":"➡️",r=e.growthRate>0?"text-green-600":e.growthRate<0?"text-red-600":"text-gray-600";o.innerHTML=`
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      <div class="text-center">
        <div class="text-4xl mb-2">${l}</div>
        <div class="text-sm text-gray-500">Growth Trend</div>
      </div>
      <div class="text-center">
        <div class="text-2xl font-bold ${r}">
          ${e.growthRate>0?"+":""}${e.growthRate.toFixed(1)}%
        </div>
        <div class="text-sm text-gray-500">vs. Last Month</div>
      </div>
      <div class="text-center">
        <div class="text-lg font-semibold">${e.deploymentsThisMonth}</div>
        <div class="text-sm text-gray-500">This Month</div>
      </div>
      <div class="text-center">
        <div class="text-lg font-semibold">${e.deploymentsLastMonth}</div>
        <div class="text-sm text-gray-500">Last Month</div>
      </div>
    </div>
    ${e.trend&&e.trend.length>0?`
    <div class="mt-4">
      <div class="text-sm font-medium text-gray-600 mb-2">6-Month Trend:</div>
      <div class="flex justify-between items-end h-16 bg-gray-50 rounded p-2">
        ${e.trend.map(s=>`
          <div class="flex flex-col items-center">
            <div class="bg-purple-600 rounded-t" style="height: ${Math.max(4,s.deployments/Math.max(...e.trend.map(d=>d.deployments),1)*48)}px; width: 12px;"></div>
            <div class="text-xs mt-1">${s.month}</div>
            <div class="text-xs text-gray-500">${s.deployments}</div>
          </div>
        `).join("")}
      </div>
    </div>
    `:""}
  `,n()})}function K(){const e=document.getElementById("kpi-cards");e&&(e.innerHTML=`
      <div class="col-span-full text-center py-8">
        <div class="text-red-500 text-lg">Error loading dashboard data</div>
        <button onclick="window.location.reload()" class="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
          Retry
        </button>
      </div>
    `)}

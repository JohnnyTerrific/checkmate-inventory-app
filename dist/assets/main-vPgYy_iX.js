import{o as A,a as j}from"./users-CxsDH44-.js";import{l as M,a as z}from"./inventory-Qxuz6K7Y.js";import{loadProducts as B}from"./products-DhfRoo0v.js";A(j,n=>{n?(document.body.style.visibility="visible",E()):window.location.href="/login.html"});async function E(){const n=await B(),a=await M(),o=await z();window.inventory=a;const s={};n.forEach(e=>s[e.name]=e);let r=0,l=0,t=0,d=0,f=0;const L=new Date,v={factory:[],shipping:[],port:[],warehouse:[],installed:[],unknown:[]},y=[];a.forEach(e=>{var w,x,C,$,k;const c=s[e.model]||s[e.product],p=parseFloat(c==null?void 0:c.price)||0,h=o.locations.find(b=>b.name===e.location),g=(h==null?void 0:h.parent)||"other";let i="unknown";if(g==="public"||(w=e.status)!=null&&w.includes("Installed")?i="installed":g==="warehouse"?i="warehouse":(x=e.location)!=null&&x.toLowerCase().includes("port")?i="port":(C=e.location)!=null&&C.toLowerCase().includes("shipping")?i="shipping":($=e.location)!=null&&$.toLowerCase().includes("factory")&&(i="factory"),i&&i!=="installed"&&v[i]&&v[i].push(e),e.isPublicAsset||g==="public"){if(r++,d+=p,i==="installed"||(k=e.status)!=null&&k.includes("Installed")){const b=parseFloat(c==null?void 0:c.depreciationRate)/100||.15,D=new Date(e.installedDate||e.lastAction||e.created),I=(L-D)/(365.25*24*3600*1e3),S=p*Math.pow(1-b,I);y.push({chargerId:e.chargerId,model:e.model,installDate:D.toLocaleDateString(),originalValue:p,depreciationRate:b,years:I.toFixed(2),currentValue:S.toFixed(0),location:e.location})}}else g==="other"?t++:c&&(l++,f+=p)});const u={};o.parentContainers.forEach(e=>{u[e.id]=e.color});const m=[u.public||"#ef4444",u.warehouse||"#38bdf8",u.other||"#f59e0b",u.customer||"#22c55e"],P=[{label:"Public Chargers",value:r,value2:`$${d.toLocaleString()}`},{label:"Inventory Chargers",value:l,value2:`$${f.toLocaleString()}`},{label:"Unknown Chargers",value:t,value2:""},{label:"Total Chargers",value:a.length,value2:""}].map((e,c)=>({...e,color:m[c%m.length]}));F(P),R(d,f),T(v),V(y)}function F(n){const a=document.getElementById("kpi-cards");a&&(a.innerHTML=n.map(o=>`
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full">
      <div class="flex items-center justify-between mb-4">
        <div>
          <div class="text-3xl font-bold">${o.value}</div>
          ${o.value2?`<div class="text-xl text-gray-500 mt-1">${o.value2}</div>`:'<div class="h-7"></div>'}
        </div>
        <div class="w-14 h-14 rounded-full flex items-center justify-center" style="background-color: ${o.color}25">
          <svg class="w-7 h-7" style="color: ${o.color}" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      <div class="text-base text-gray-500 mt-auto pt-2 font-medium">${o.label}</div>
    </div>
  `).join(""))}function R(n,a){console.log("Rendering donut chart with values:",{publicValue:n,inventoryValue:a});const o=document.getElementById("assetDonut");if(!o){console.error("Donut chart container not found!");return}const s=o.getContext("2d");window.valueChart&&typeof window.valueChart.destroy=="function"&&window.valueChart.destroy();const r=n+a;window.valueChart=new Chart(s,{type:"doughnut",data:{labels:["Public Assets","Inventory Assets"],datasets:[{data:[n,a],backgroundColor:["#ef4444","#38bdf8"],borderColor:["#dc2626","#0ea5e9"],borderWidth:1,hoverOffset:30,hoverBorderWidth:3,borderRadius:4,hoverBorderColor:"#ffffff"}]},options:{cutout:"60%",responsive:!0,maintainAspectRatio:!1,layout:{padding:20},plugins:{title:{display:!0,text:"Asset Value Distribution",font:{size:18,weight:"bold"},padding:{bottom:15}},legend:{position:"bottom",labels:{padding:25,font:{size:16},usePointStyle:!0,pointStyle:"circle"}},tooltip:{backgroundColor:"rgba(255,255,255,0.95)",titleColor:"#333",bodyColor:"#333",bodyFont:{size:16},titleFont:{size:18},borderColor:"#ccc",borderWidth:1,padding:15,boxPadding:8,cornerRadius:6,displayColors:!0,callbacks:{label:function(l){const t=l.raw,d=r>0?Math.round(t/r*100):0;return`${l.label}: $${t.toLocaleString()} (${d}%)`}}}}}})}function T(n){const a=document.getElementById("milestone-progress");if(!a)return;const o=[{key:"factory",label:"Factory"},{key:"shipping",label:"Shipping"},{key:"port",label:"Port"},{key:"warehouse",label:"Warehouse"}],s=o.map(l=>{var t;return((t=n[l.key])==null?void 0:t.length)||0}),r=s.reduce((l,t)=>l+t,0);a.innerHTML=`
    <div class="bg-gray-100 dark:bg-gray-700 rounded-full h-6 mb-5">
      ${o.map((l,t)=>`<div class="h-full rounded-full transition-all duration-500" 
                    style="width:${r>0?s[t]/r*100:0}%; background:${["#f97316","#0ea5e9","#8b5cf6","#10b981"][t]}; display:inline-block;"></div>`).join("")}
    </div>
    <div class="flex justify-between mt-8">
      ${o.map((l,t)=>`
          <div class="text-center flex flex-col items-center">
            <div class="w-10 h-10 rounded-full mb-2 flex items-center justify-center" 
                 style="background-color: ${["#f97316","#0ea5e9","#8b5cf6","#10b981"][t]}">
              <span class="text-white font-bold">${s[t]}</span>
            </div>
            <div class="text-sm font-medium">${l.label}</div>
          </div>
        `).join("")}
    </div>
    <div class="flex mt-12 justify-center">
      <div class="text-center py-4 px-8 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm">
        <div class="text-xl font-bold">${r}</div>
        <div class="text-sm text-gray-500">Total Units in Pipeline</div>
      </div>
    </div>
  `}function V(n){const a=document.getElementById("depreciation-summary");if(!a)return;const o=n.reduce((l,t)=>l+Number(t.originalValue),0),s=n.reduce((l,t)=>l+Number(t.currentValue),0),r=o-s;a.innerHTML=`
    <div class="text-lg font-semibold">
      Total Depreciation: <span class="text-purple-600">$${r.toLocaleString()}</span>
      <span class="text-sm text-gray-500">(${n.length} public assets, yearly calculation)</span>
    </div>
  `}

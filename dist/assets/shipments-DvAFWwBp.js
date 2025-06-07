import{l as V,d as B,s as N}from"./inventory-CiL_UlbO.js";import"./users-CxsDH44-.js";function O(){return JSON.parse(localStorage.getItem("cm_shipments_v1")||"[]")}function _(e){localStorage.setItem("cm_shipments_v1",JSON.stringify(e))}function E(){return JSON.parse(localStorage.getItem("cm_products_v1")||"[]").map(n=>({...n,name:n.name||n.model||""}))}function F(){const e=JSON.parse(localStorage.getItem("cm_settings_v2")||"{}").vendors||[];return e.length?e:JSON.parse(localStorage.getItem("cm_settings_v1")||"{}").vendors||[]}const j=["FOB","CIF","DAP","EXW","DDP"],R=["Sea","Air","Rail","Truck"],J=["Haifa","Ashdod","Eilat","Ben Gurion","Other"];function H(){const e=document.getElementById("shipmentDialog"),n=E(),I=F();e.innerHTML=`
        <form method="dialog"
          class="flex flex-col gap-4 w-full sm:w-[40rem] max-w-3xl"
          style="margin:0 auto;">
        
          <!-- Scrollable main content -->
          <div class="flex-1 overflow-y-auto p-6">
            <h3 class="font-bold text-xl mb-4 text-blue-800 dark:text-blue-300">Create New Shipment</h3>
            <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-semibold mb-1">Vendor <span class="text-red-500">*</span></label>
                      <select id="shipVendor" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                        <option value="">Select Vendor</option>
                        ${I.map(t=>`<option value="${t}">${t}</option>`).join("")}
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold mb-1">Shipment ID</label>
                      <input id="shipId" type="text" placeholder="Auto if blank" class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                    </div>
                    <div>
                      <label class="block text-sm font-semibold mb-1">Incoterm <span class="text-red-500">*</span></label>
                      <select id="incoterm" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                        <option value="">Select Incoterm</option>
                        ${j.map(t=>`<option value="${t}">${t}</option>`).join("")}
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold mb-1">Shipment Type <span class="text-red-500">*</span></label>
                      <select id="shipType" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                        <option value="">Shipment Type</option>
                        ${R.map(t=>`<option value="${t}">${t}</option>`).join("")}
                      </select>
                    </div>
                    <div>
                      <label class="block text-sm font-semibold mb-1">Port of Arrival <span class="text-red-500">*</span></label>
                      <select id="port" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                        <option value="">Port of Arrival</option>
                        ${J.map(t=>`<option value="${t}">${t}</option>`).join("")}
                      </select>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                      <div>
                        <label class="block text-sm font-semibold mb-1">Departure Date <span class="text-red-500">*</span></label>
                        <input id="departure" type="date" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                      </div>
                      <div>
                        <label class="block text-sm font-semibold mb-1">Arrival Date <span class="text-red-500">*</span></label>
                        <input id="arrival" type="date" required class="w-full border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
                      </div>
                    </div>
                  </div>
                
                    <div class="mt-4 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border">
      <label class="block text-sm font-semibold mb-2">Products <span class="text-red-500">*</span></label>
      <div id="productsArea" class="space-y-2"></div>
      <button id="addProdRowBtn" type="button" class="mt-2 text-blue-600 dark:text-blue-300 underline">+ Add Product</button>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
      <input id="sumVat" type="number" placeholder="VAT Paid" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
      <input id="sumDuty" type="number" placeholder="Duty Paid" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
      <input id="sumShip" type="number" placeholder="Shipping Cost" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
      <input id="sumCustoms" type="number" placeholder="Customs Fee" class="border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800">
    </div>
    <textarea id="shipNotes" placeholder="Notes (optional)" class="mt-4 border rounded px-3 py-2 bg-gray-50 dark:bg-gray-800 w-full"></textarea>
  </div>
    <!-- Sticky footer for actions -->
  <div class="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex justify-end gap-2 p-4 z-10">
    <button type="button" value="cancel" class="px-5 py-2 bg-gray-300 dark:bg-gray-700 rounded">Cancel</button>
    <button value="ok" class="px-5 py-2 bg-purple-600 text-white rounded">Create Shipment</button>
  </div>
</form>
`,e.showModal();const u=e.querySelector("#productsArea");function b(t="",r=""){const o=document.createElement("div");o.className="flex items-center gap-2 mb-1",o.innerHTML=`
              <select class="prodSel border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 rounded flex-1" required>
                <option value="">Select Product</option>
                ${n.map(d=>`<option value="${d.name}">${d.name}</option>`).join("")}
              </select>
              <input class="prodQty border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-2 py-1 rounded w-20" type="number" min="1" placeholder="Qty" value="${r}" required>
              <button type="button" class="text-red-600 text-lg font-bold removeRowBtn ml-2">&times;</button>
            `,u.appendChild(o),o.querySelector(".removeRowBtn").onclick=()=>{o.remove()},o.querySelector(".prodSel").value=t}e.querySelector("#addProdRowBtn").onclick=()=>b(),u.children.length===0&&b(),e.querySelector('button[value="cancel"]').onclick=t=>{t.preventDefault(),e.close()},e.querySelector("form").onsubmit=t=>{var q,k,w,D;t.preventDefault(),e.querySelectorAll("input, select").forEach(l=>l.classList.remove("border-red-500"));const r=e.querySelector("#formError");r.textContent="";const o=e.querySelector("#shipVendor").value.trim();let d=e.querySelector("#shipId").value.trim();const y=e.querySelector("#incoterm").value,g=e.querySelector("#shipType").value,v=e.querySelector("#port").value,m=e.querySelector("#departure").value,f=e.querySelector("#arrival").value,A=parseFloat(e.querySelector("#sumVat").value)||0,C=parseFloat(e.querySelector("#sumDuty").value)||0,P=parseFloat(e.querySelector("#sumShip").value)||0,$=parseFloat(e.querySelector("#sumCustoms").value)||0,L=e.querySelector("#shipNotes").value.trim();let c=[],S=!1;for(let l of u.children){const p=(q=l.querySelector(".prodSel"))==null?void 0:q.value,i=parseInt((k=l.querySelector(".prodQty"))==null?void 0:k.value);if(!p||!i){(w=l.querySelector(".prodSel"))==null||w.classList.add("border-red-500"),(D=l.querySelector(".prodQty"))==null||D.classList.add("border-red-500"),S=!0;continue}c.push({model:p,qty:i})}let a=!0;if(o?y?g?v?m?f?(!c.length||S)&&(a=!1,r.textContent="Add at least one product (model and quantity required)."):(a=!1,r.textContent="Arrival date required.",e.querySelector("#arrival").classList.add("border-red-500")):(a=!1,r.textContent="Departure date required.",e.querySelector("#departure").classList.add("border-red-500")):(a=!1,r.textContent="Port required.",e.querySelector("#port").classList.add("border-red-500")):(a=!1,r.textContent="Shipment type required.",e.querySelector("#shipType").classList.add("border-red-500")):(a=!1,r.textContent="Incoterm required.",e.querySelector("#incoterm").classList.add("border-red-500")):(a=!1,r.textContent="Vendor required.",e.querySelector("#shipVendor").classList.add("border-red-500")),!a)return;d||(d="SHIP"+Date.now());const T={shipmentId:d,vendor:o,incoterm:y,shipType:g,port:v,departure:m,eta:f,products:c,milestones:[{name:"Order Placed",date:new Date(m).toISOString(),complete:!0},{name:"Dispatched",date:"",complete:!1},{name:"At Port",date:"",complete:!1},{name:"In Transit",date:"",complete:!1},{name:"Arrived",date:"",complete:!1}],sums:{vat:A,duty:C,shipping:P,customs:$},notes:L,arrived:!1},h=O();h.push(T),_(h);const x=V();c.forEach(({model:l,qty:p})=>{let i=0;for(let s of x)if(s.model===l&&(s.location==="Factory"||s.location==="Back Warehouse")&&s.status!=="Shipping"&&(s.location="Shipping",s.status="Shipping",s.lastAction=new Date().toISOString(),i++,i>=p))break}),B(x),N("Shipment created","green"),e.close(),typeof updateAlertBell=="function"&&updateAlertBell(),typeof renderShipmentList=="function"&&renderShipmentList()}}window.openShipmentDialog=H;export{H as openShipmentDialog};

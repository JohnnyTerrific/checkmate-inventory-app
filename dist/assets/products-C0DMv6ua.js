import{d as P,c as _,e as A,s as k,i as j,a as z,f as $,h as O}from"./style-M5oUV0tE.js";const G=j(O),S=_(G),M="products",T="categories",C=8;async function g(){try{const e=P(S,"appdata",M),t=await A(e);if(t.exists()){const s=t.data().products||[];return s.forEach((n,a)=>{typeof n.order!="number"&&(n.order=a)}),s}return[]}catch(e){return console.error("Error loading products:",e),[]}}async function w(e){try{await k(P(S,"appdata",M),{products:e})}catch(t){console.error("Error saving products:",t)}}async function U(){try{const e=P(S,"appdata",T),t=await A(e);return t.exists()?t.data().categories||["AC Charger","DC Charger","Spare Part"]:["AC Charger","DC Charger","Spare Part"]}catch(e){return console.error("Error loading categories:",e),["AC Charger","DC Charger","Spare Part"]}}async function V(e){try{await k(P(S,"appdata",T),{categories:e})}catch(t){console.error("Error saving categories:",t)}}let i=[],l=1;async function Z(){i=await g(),p(),b(),document.getElementById("addProductBtn").onclick=()=>B().then(K)}async function p(){i=await g(),i.sort((n,a)=>n.order-a.order);const e=document.getElementById("productsGrid");e.innerHTML="",e.className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch min-h-[620px]";const t=(l-1)*C,s=i.slice(t,t+C);for(let n=0;n<s.length;++n){const a=s[n],r=document.createElement("div");r.className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col gap-2 cursor-grab group",r.draggable=!0,r.setAttribute("data-index",t+n),r.innerHTML=`
      <div class="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button title="Edit" class="edit-btn text-blue-600"><svg width="20" height="20"><path d="M4 13.5V16h2.5l7.3-7.3-2.5-2.5L4 13.5zM17.7 6.3c.4-.4.4-1 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.8 1.8 4 4 1.8-1.8z" fill="currentColor"/></svg></button>
        <button title="Delete" class="delete-btn text-red-600"><svg width="20" height="20"><path d="M6 19c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/></svg></button>
        <span class="drag-handle cursor-grab text-gray-400" title="Drag">&#9776;</span>
      </div>
      <div><span class="font-bold">Model:</span> ${c(a.name)}</div>
      <div><span class="font-bold">Vendor:</span> ${c(a.vendor)}</div>
      <div><span class="font-bold">HS Code:</span> ${c(a.hsCode)}</div>
      <div><span class="font-bold">Category:</span> ${c(a.category)}</div>
      <div><span class="font-bold">Price:</span> ${parseFloat(a.price).toLocaleString(void 0,{style:"currency",currency:"USD"})}</div>
      <div><span class="font-bold">Duty Rate:</span> ${a.dutyRate}%</div>
      <div><span class="font-bold">Customs Liability:</span> ${c(a.customsLiability)}</div>
      <div><span class="font-bold">Depreciation Rate:</span> ${a.depreciationRate}%</div>
      <div><span class="font-bold">Description:</span> ${c(a.description)}</div>
    `,r.querySelector(".edit-btn").onclick=()=>B(a,t+n).then(o=>Y(o,t+n)),r.querySelector(".delete-btn").onclick=()=>F(a).then(o=>{o&&J(t+n)}),r.querySelector(".drag-handle").onmousedown=o=>o.stopPropagation(),r.ondragstart=o=>{o.dataTransfer.setData("dragIndex",t+n),r.classList.add("opacity-50")},r.ondragend=()=>r.classList.remove("opacity-50"),r.ondragover=o=>{o.preventDefault(),r.classList.add("ring-2","ring-purple-400")},r.ondragleave=o=>r.classList.remove("ring-2","ring-purple-400"),r.ondrop=o=>{r.classList.remove("ring-2","ring-purple-400");const m=+o.dataTransfer.getData("dragIndex");m!==t+n&&Q(m,t+n)},e.appendChild(r)}}function b(){const e=Math.ceil(i.length/C)||1,t=document.getElementById("pagination");t.innerHTML=`
    <div class="flex justify-center items-center gap-4 py-4">
      <button id="productsPrevPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${l===1?"opacity-50 cursor-not-allowed":""}" ${l===1?"disabled":""}>Prev</button>
      <span class="font-semibold" id="pageNumSpan">Page ${l} of ${e}</span>
      <button id="productsNextPageBtn" class="px-4 py-1 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition ${l===e?"opacity-50 cursor-not-allowed":""}" ${l===e?"disabled":""}>Next</button>
      <label class="ml-6">Show
        <select id="productsPageSizeSelect" class="border px-2 py-1 rounded ml-2">
          <option value="8" selected>8</option>
          <option value="16" >16</option>
          <option value="25" >25</option>
          <option value="50" >50</option>
          <option value="100" >100</option>
        </select>
        entries per page
      </label>
    </div>
  `,t.querySelector("#productsPrevPageBtn").onclick=()=>{l>1&&(l--,p(),b())},t.querySelector("#productsNextPageBtn").onclick=()=>{l<e&&(l++,p(),b())},t.querySelector("#productsPageSizeSelect").onchange=s=>{window.PRODUCTS_PER_PAGE=parseInt(s.target.value,10),l=1,p(),b()}}async function B(e=null,t=null){return new Promise(async s=>{const n=(await z()).vendors||[],a=await U();let r=e||{name:"",vendor:"",hsCode:"",category:"",price:"",dutyRate:"",customsLiability:"",depreciationRate:"",description:""};const o=document.getElementById("productDialog");o.innerHTML=`
  <form method="dialog" class="flex flex-col gap-3 w-80">
    <h3 class="font-bold mb-2">${e?"Edit Product":"Add Product"}</h3>
    <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
    <input id="name" type="text" placeholder="Model" required class="border px-2 py-1 rounded" value="${c(r.name)}">
    <select id="vendor" required class="border px-2 py-1 rounded">
      <option value="">-- Select Vendor --</option>
      ${n.map(d=>`<option value="${c(d)}" ${d===r.vendor?"selected":""}>${c(d)}</option>`).join("")}
    </select>
    <input id="hsCode" type="text" placeholder="HS Code" required class="border px-2 py-1 rounded" value="${c(r.hsCode)}">
    <select id="category" required class="border px-2 py-1 rounded">
      <option value="">-- Select Category --</option>
      ${a.map(d=>`<option value="${c(d)}" ${d===r.category?"selected":""}>${c(d)}</option>`).join("")}
    </select>
    <input id="price" type="number" placeholder="Price" min="0" required class="border px-2 py-1 rounded" value="${c(r.price)}">
    <input id="dutyRate" type="number" placeholder="Duty Rate (%)" min="0" max="100" required class="border px-2 py-1 rounded" value="${c(r.dutyRate)}">
    <select id="customsLiability" required class="border px-2 py-1 rounded">
      <option value="">-- Select Customs Liability --</option>
      <option value="Liable" ${r.customsLiability==="Liable"?"selected":""}>Liable</option>
      <option value="Non-Liable" ${r.customsLiability==="Non-Liable"?"selected":""}>Non-Liable</option>
    </select>
    <input id="depreciationRate" type="number" placeholder="Depreciation Rate (%)" min="0" max="100" required class="border px-2 py-1 rounded" value="${c(r.depreciationRate)}">
    <!-- Add your checkbox here -->
    <label class="flex items-center gap-2">
      <input type="checkbox" id="isPublicAsset" ${r.isPublicAsset?"checked":""}/>
      Public Asset
    </label>
    <textarea id="description" placeholder="Description" required class="border px-2 py-1 rounded">${c(r.description)}</textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">${e?"Save":"Add"}</button>
    </div>
    <button id="addCatBtn" type="button" class="text-xs text-blue-500 underline mt-1">Add new category</button>
  </form>
`;const m=o.querySelector('button[value="cancel"]');m&&(m.onclick=d=>{d.preventDefault(),o.close()}),o.showModal(),o.querySelector("#addCatBtn").onclick=()=>{const d=prompt("Enter new category name:");d&&!a.includes(d)&&(a.push(d),V(a),o.querySelector("#category").innerHTML=`
          <option value="">-- Select Category --</option>
          ${a.map(y=>`<option value="${c(y)}">${c(y)}</option>`).join("")}
        `)},o.querySelector("form").onsubmit=d=>{if(d.preventDefault(),document.activeElement.value==="cancel"){o.close(),s(void 0);return}o.querySelectorAll("input, select, textarea").forEach(f=>f.classList.remove("border-red-500")),o.querySelector("#formError").textContent="";const y=o.querySelector("#name").value.trim(),q=o.querySelector("#vendor").value,L=o.querySelector("#hsCode").value.trim(),D=o.querySelector("#category").value,v=o.querySelector("#price").value,h=o.querySelector("#dutyRate").value,E=o.querySelector("#customsLiability").value,x=o.querySelector("#depreciationRate").value,R=o.querySelector("#description").value.trim();let N=!0;function u(f){o.querySelector(f).classList.add("border-red-500"),N=!1}if(y||u("#name"),q||u("#vendor"),L||u("#hsCode"),D||u("#category"),(!v||isNaN(v)||Number(v)<=0)&&u("#price"),(!h||isNaN(h)||Number(h)<0)&&u("#dutyRate"),E||u("#customsLiability"),(x===""||isNaN(x)||Number(x)<0)&&u("#depreciationRate"),R||u("#description"),i.some((f,H)=>f.name.toLowerCase()===y.toLowerCase()&&H!==t)){u("#name"),o.querySelector("#formError").textContent="Product name must be unique!";return}if(!N){o.querySelector("#formError").textContent="Please fill in all required fields correctly.";return}const I=o.querySelector("#isPublicAsset").checked;o.close(),s({name:y,vendor:q,hsCode:L,category:D,price:Number(v),dutyRate:Number(h),customsLiability:E,depreciationRate:Number(x),description:R,isPublicAsset:I})}})}function F(e){return new Promise(t=>{const s=document.getElementById("confirmProductDialog");s.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4 w-64">
        <p>Delete product <span class="font-bold">${c(e.name)}</span>? This cannot be undone.</p>
        <div class="flex justify-end gap-2">
          <button value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </form>
    `,s.showModal(),s.querySelector("form").onsubmit=n=>{n.preventDefault(),t(document.activeElement.value==="ok"),s.close()}})}async function K(e){e&&(i=await g(),e.order=i.length>0?Math.max(...i.map(t=>t.order))+1:0,i.push(e),await w(i),$("Product added","green"),await p(),b())}async function Y(e,t){e&&(i=await g(),Object.assign(i[t],e),await w(i),$("Product updated","blue"),await p())}async function J(e){i=await g(),i.splice(e,1),await w(i),$("Product deleted","red"),await p(),b()}async function Q(e,t){i=await g(),i.sort((n,a)=>n.order-a.order);const[s]=i.splice(e,1);i.splice(t,0,s),i.forEach((n,a)=>n.order=a),await w(i),await p()}function c(e){return(""+e).replace(/[<>&"']/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"})[t])}async function ee(e){return(await g()).filter(s=>s.vendor===e).map(s=>s.name)}export{Z as initProducts,U as loadCategories,g as loadProducts,V as saveCategories,w as saveProducts,ee as vendorInUse};

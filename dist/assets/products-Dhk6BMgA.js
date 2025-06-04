import{b as j,s as q}from"./inventory-CC2awVC6.js";import{f as w,h as S,i as k,s as M}from"./users-B1oCCdPH.js";const A="products",I="categories",C=8;async function g(){try{const e=w(S,"appdata",A),o=await k(e);if(o.exists()){const a=o.data().products||[];return a.forEach((i,n)=>{typeof i.order!="number"&&(i.order=n)}),a}return[]}catch(e){return console.error("Error loading products:",e),[]}}async function P(e){try{await M(w(S,"appdata",A),{products:e})}catch(o){console.error("Error saving products:",o)}}async function _(){try{const e=w(S,"appdata",I),o=await k(e);return o.exists()?o.data().categories||[]:[]}catch(e){return console.error("Error loading categories:",e),[]}}async function O(e){try{await M(w(S,"appdata",I),{categories:e})}catch(o){console.error("Error saving categories:",o)}}let s=[],l=1;async function W(){s=await g(),y(),b(),document.getElementById("addProductBtn").onclick=()=>T().then(G)}async function y(){s=await g(),s.sort((i,n)=>i.order-n.order);const e=document.getElementById("productsGrid");e.innerHTML="",e.className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start";const o=(l-1)*C,a=s.slice(o,o+C);for(let i=0;i<a.length;++i){const n=a[i],r=document.createElement("div");r.className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col gap-2 cursor-grab group",r.draggable=!0,r.setAttribute("data-index",o+i),r.innerHTML=`
      <div class="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button title="Edit" class="edit-btn text-blue-600"><svg width="20" height="20"><path d="M4 13.5V16h2.5l7.3-7.3-2.5-2.5L4 13.5zM17.7 6.3c.4-.4.4-1 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.8 1.8 4 4 1.8-1.8z" fill="currentColor"/></svg></button>
        <button title="Delete" class="delete-btn text-red-600"><svg width="20" height="20"><path d="M6 19c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/></svg></button>
        <span class="drag-handle cursor-grab text-gray-400" title="Drag">&#9776;</span>
      </div>
      <div><span class="font-bold">Model:</span> ${c(n.name)}</div>
      <div><span class="font-bold">Vendor:</span> ${c(n.vendor)}</div>
      <div><span class="font-bold">HS Code:</span> ${c(n.hsCode)}</div>
      <div><span class="font-bold">Category:</span> ${c(n.category)}</div>
      <div><span class="font-bold">Price:</span> ${parseFloat(n.price).toLocaleString(void 0,{style:"currency",currency:"USD"})}</div>
      <div><span class="font-bold">Duty Rate:</span> ${n.dutyRate}%</div>
      <div><span class="font-bold">Customs Liability:</span> ${c(n.customsLiability)}</div>
      <div><span class="font-bold">Depreciation Rate:</span> ${n.depreciationRate}%</div>
      <div><span class="font-bold">Description:</span> ${c(n.description)}</div>
    `,r.querySelector(".edit-btn").onclick=()=>T(n,o+i).then(t=>U(t,o+i)),r.querySelector(".delete-btn").onclick=()=>z(n).then(t=>{t&&V(o+i)}),r.querySelector(".drag-handle").onmousedown=t=>t.stopPropagation(),r.ondragstart=t=>{t.dataTransfer.setData("dragIndex",o+i),r.classList.add("opacity-50")},r.ondragend=()=>r.classList.remove("opacity-50"),r.ondragover=t=>{t.preventDefault(),r.classList.add("ring-2","ring-purple-400")},r.ondragleave=t=>r.classList.remove("ring-2","ring-purple-400"),r.ondrop=t=>{r.classList.remove("ring-2","ring-purple-400");const p=+t.dataTransfer.getData("dragIndex");p!==o+i&&F(p,o+i)},e.appendChild(r)}}function b(){const e=Math.ceil(s.length/C)||1,o=document.getElementById("pagination");o.innerHTML=`
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
  `,o.querySelector("#productsPrevPageBtn").onclick=()=>{l>1&&(l--,y(),b())},o.querySelector("#productsNextPageBtn").onclick=()=>{l<e&&(l++,y(),b())},o.querySelector("#productsPageSizeSelect").onchange=a=>{window.PRODUCTS_PER_PAGE=parseInt(a.target.value,10),l=1,y(),b()}}async function T(e=null,o=null){return new Promise(async a=>{const i=(await j()).vendors||[],n=await _();let r=e||{name:"",vendor:"",hsCode:"",category:"",price:"",dutyRate:"",customsLiability:"",depreciationRate:"",description:""};const t=document.getElementById("productDialog");t.innerHTML=`
  <form method="dialog" class="flex flex-col gap-3 w-80">
    <h3 class="font-bold mb-2">${e?"Edit Product":"Add Product"}</h3>
    <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
    <input id="name" type="text" placeholder="Model" required class="border px-2 py-1 rounded" value="${c(r.name)}">
    <select id="vendor" required class="border px-2 py-1 rounded">
      <option value="">-- Select Vendor --</option>
      ${i.map(d=>`<option value="${c(d)}" ${d===r.vendor?"selected":""}>${c(d)}</option>`).join("")}
    </select>
    <input id="hsCode" type="text" placeholder="HS Code" required class="border px-2 py-1 rounded" value="${c(r.hsCode)}">
    <select id="category" required class="border px-2 py-1 rounded">
      <option value="">-- Select Category --</option>
      ${n.map(d=>`<option value="${c(d)}" ${d===r.category?"selected":""}>${c(d)}</option>`).join("")}
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
`;const p=t.querySelector('button[value="cancel"]');p&&(p.onclick=d=>{d.preventDefault(),t.close()}),t.showModal(),t.querySelector("#addCatBtn").onclick=async()=>{const d=await K(n);d&&!n.includes(d)&&(n.push(d),await O(n),t.querySelector("#category").innerHTML=`
      <option value="">-- Select Category --</option>
      ${n.map(m=>`<option value="${c(m)}">${c(m)}</option>`).join("")}
    `)},t.querySelector("form").onsubmit=d=>{if(d.preventDefault(),document.activeElement.value==="cancel"){t.close(),a(void 0);return}t.querySelectorAll("input, select, textarea").forEach(f=>f.classList.remove("border-red-500")),t.querySelector("#formError").textContent="";const m=t.querySelector("#name").value.trim(),$=t.querySelector("#vendor").value,L=t.querySelector("#hsCode").value.trim(),D=t.querySelector("#category").value,v=t.querySelector("#price").value,h=t.querySelector("#dutyRate").value,E=t.querySelector("#customsLiability").value,x=t.querySelector("#depreciationRate").value,R=t.querySelector("#description").value.trim();let N=!0;function u(f){t.querySelector(f).classList.add("border-red-500"),N=!1}if(m||u("#name"),$||u("#vendor"),L||u("#hsCode"),D||u("#category"),(!v||isNaN(v)||Number(v)<=0)&&u("#price"),(!h||isNaN(h)||Number(h)<0)&&u("#dutyRate"),E||u("#customsLiability"),(x===""||isNaN(x)||Number(x)<0)&&u("#depreciationRate"),R||u("#description"),s.some((f,H)=>f.name.toLowerCase()===m.toLowerCase()&&H!==o)){u("#name"),t.querySelector("#formError").textContent="Product name must be unique!";return}if(!N){t.querySelector("#formError").textContent="Please fill in all required fields correctly.";return}const B=t.querySelector("#isPublicAsset").checked;t.close(),a({name:m,vendor:$,hsCode:L,category:D,price:Number(v),dutyRate:Number(h),customsLiability:E,depreciationRate:Number(x),description:R,isPublicAsset:B})}})}function z(e){return new Promise(o=>{const a=document.getElementById("confirmProductDialog");a.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4 w-64">
        <p>Delete product <span class="font-bold">${c(e.name)}</span>? This cannot be undone.</p>
        <div class="flex justify-end gap-2">
          <button value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </form>
    `,a.showModal(),a.querySelector("form").onsubmit=i=>{i.preventDefault(),o(document.activeElement.value==="ok"),a.close()}})}async function G(e){e&&(s=await g(),e.order=s.length>0?Math.max(...s.map(o=>o.order))+1:0,s.push(e),await P(s),q("Product added","green"),await y(),b())}async function U(e,o){e&&(s=await g(),Object.assign(s[o],e),await P(s),q("Product updated","blue"),await y())}async function V(e){s=await g(),s.splice(e,1),await P(s),q("Product deleted","red"),await y(),b()}async function F(e,o){s=await g(),s.sort((i,n)=>i.order-n.order);const[a]=s.splice(e,1);s.splice(o,0,a),s.forEach((i,n)=>i.order=n),await P(s),await y()}function K(e=[]){return new Promise(o=>{const a=document.getElementById("addCategoryDialog");a.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80 p-4 bg-white dark:bg-gray-800 rounded-xl">
        <h3 class="font-bold mb-2 text-purple-700">Add New Category</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="catFormError"></div>
        <input id="catNameInput" type="text" placeholder="Category name" required class="border px-2 py-1 rounded" autofocus>
        <div class="flex justify-end gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </form>
    `,a.showModal();const i=a.querySelector("form"),n=a.querySelector("#catNameInput"),r=a.querySelector("#catFormError");a.querySelector('button[value="cancel"]').onclick=t=>{t.preventDefault(),a.close(),o(null)},i.onsubmit=t=>{t.preventDefault();const p=n.value.trim();if(!p){r.textContent="Category name is required.",n.classList.add("border-red-500");return}if(e.includes(p)){r.textContent="Category already exists.",n.classList.add("border-red-500");return}a.close(),o(p)}})}function c(e){return(""+e).replace(/[<>&"']/g,o=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"})[o])}async function X(e){return(await g()).filter(a=>a.vendor===e).map(a=>a.name)}export{W as initProducts,_ as loadCategories,g as loadProducts,O as saveCategories,P as saveProducts,X as vendorInUse};

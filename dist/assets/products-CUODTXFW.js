import{a as T,s as C}from"./inventory-DH0gflHQ.js";import{q as H,p as j,r as k,j as p,t as z,i as f,k as U,s as _,u as O,v as V,h as F,w as B}from"./users-BQb8VeAn.js";async function G(){const e=f(p,"appdata","categories"),a=await U(e);return a.exists()?a.data().categories||[]:[]}async function J(e){await _(f(p,"appdata","categories"),{categories:e})}const x=["Products"],q=8;async function w(){const e=H(k(p,...x),j("order","asc"));return(await z(e)).docs.map(r=>({id:r.id,...r.data()}))}async function K(e){await O(k(p,...x),e)}async function Q(e,a){await V(f(p,...x,e),a)}async function W(e){await F(f(p,...x,e))}async function ie(e){const a=B(p);e.forEach((r,i)=>{a.update(f(p,...x,r),{order:i})}),await a.commit()}let c=[],l=1;async function se(){c=await w(),m(),g(),document.getElementById("addProductBtn").onclick=()=>M().then(Y)}async function m(){c=await w(),c.sort((i,n)=>i.order-n.order);const e=document.getElementById("productsGrid");e.innerHTML="",e.className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start";const a=(l-1)*q,r=c.slice(a,a+q);for(let i=0;i<r.length;++i){const n=r[i],o=document.createElement("div");o.className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col gap-2 cursor-grab group",o.draggable=!0,o.setAttribute("data-index",a+i),o.innerHTML=`
      <div class="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
        <button title="Edit" class="edit-btn text-blue-600"><svg width="20" height="20"><path d="M4 13.5V16h2.5l7.3-7.3-2.5-2.5L4 13.5zM17.7 6.3c.4-.4.4-1 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0l-1.8 1.8 4 4 1.8-1.8z" fill="currentColor"/></svg></button>
        <button title="Delete" class="delete-btn text-red-600"><svg width="20" height="20"><path d="M6 19c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/></svg></button>
        <span class="drag-handle cursor-grab text-gray-400" title="Drag">&#9776;</span>
      </div>
      <div><span class="font-bold">Model:</span> ${s(n.name)}</div>
      <div><span class="font-bold">Vendor:</span> ${s(n.vendor)}</div>
      <div><span class="font-bold">HS Code:</span> ${s(n.hsCode)}</div>
      <div><span class="font-bold">Category:</span> ${s(n.category)}</div>
      <div><span class="font-bold">Price:</span> ${isNaN(parseFloat(n.price))?"-":parseFloat(n.price).toLocaleString(void 0,{style:"currency",currency:"USD"})}</div>
      <div><span class="font-bold">Duty Rate:</span> ${n.dutyRate}%</div>
      <div><span class="font-bold">Customs Liability:</span> ${s(n.customsLiability)}</div>
      <div><span class="font-bold">Depreciation Rate:</span> ${n.depreciationRate}%</div>
      <div><span class="font-bold">Description:</span> ${s(n.description)}</div>
    `,o.querySelector(".edit-btn").onclick=()=>M(n,a+i).then(t=>Z(t)),o.querySelector(".delete-btn").onclick=()=>X(n).then(t=>{t&&ee(n)}),o.querySelector(".drag-handle").onmousedown=t=>t.stopPropagation(),o.ondragstart=t=>{t.dataTransfer.setData("dragIndex",a+i),o.classList.add("opacity-50")},o.ondragend=()=>o.classList.remove("opacity-50"),o.ondragover=t=>{t.preventDefault(),o.classList.add("ring-2","ring-purple-400")},o.ondragleave=t=>o.classList.remove("ring-2","ring-purple-400"),o.ondrop=t=>{o.classList.remove("ring-2","ring-purple-400");const y=+t.dataTransfer.getData("dragIndex");y!==a+i&&te(y,a+i)},e.appendChild(o)}}function g(){const e=Math.ceil(c.length/q)||1,a=document.getElementById("pagination");a.innerHTML=`
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
  `,a.querySelector("#productsPrevPageBtn").onclick=()=>{l>1&&(l--,m(),g())},a.querySelector("#productsNextPageBtn").onclick=()=>{l<e&&(l++,m(),g())},a.querySelector("#productsPageSizeSelect").onchange=r=>{window.PRODUCTS_PER_PAGE=parseInt(r.target.value,10),l=1,m(),g()}}async function M(e=null,a=null){return new Promise(async r=>{const i=(await T()).vendors||[],n=await G();console.log("Loaded categories:",n);let o=e||{name:"",vendor:"",hsCode:"",category:"",price:"",dutyRate:"",customsLiability:"",depreciationRate:"",description:""};const t=document.getElementById("productDialog");t.innerHTML=`
  <form method="dialog" class="flex flex-col gap-3 w-80">
    <h3 class="font-bold mb-2">${e?"Edit Product":"Add Product"}</h3>
    <div class="text-red-600 text-xs min-h-[1em]" id="formError"></div>
    <input id="name" type="text" placeholder="Model" required class="border px-2 py-1 rounded" value="${s(o.name)}">
    <select id="vendor" required class="border px-2 py-1 rounded">
      <option value="">-- Select Vendor --</option>
      ${i.map(d=>`<option value="${s(d)}" ${d===o.vendor?"selected":""}>${s(d)}</option>`).join("")}
    </select>
    <input id="hsCode" type="text" placeholder="HS Code" required class="border px-2 py-1 rounded" value="${s(o.hsCode)}">
    <select id="category" required class="border px-2 py-1 rounded">
  <option value="">-- Select Category --</option>
  ${n.map(d=>`<option value="${s(d)}" ${d===o.category?"selected":""}>${s(d)}</option>`).join("")}
</select>
    <input id="price" type="number" placeholder="Price" min="0" required class="border px-2 py-1 rounded" value="${s(o.price)}">
    <input id="dutyRate" type="number" placeholder="Duty Rate (%)" min="0" max="100" required class="border px-2 py-1 rounded" value="${s(o.dutyRate)}">
    <select id="customsLiability" required class="border px-2 py-1 rounded">
      <option value="">-- Select Customs Liability --</option>
      <option value="Liable" ${o.customsLiability==="Liable"?"selected":""}>Liable</option>
      <option value="Non-Liable" ${o.customsLiability==="Non-Liable"?"selected":""}>Non-Liable</option>
    </select>
    <input id="depreciationRate" type="number" placeholder="Depreciation Rate (%)" min="0" max="100" required class="border px-2 py-1 rounded" value="${s(o.depreciationRate)}">
    <!-- Add your checkbox here -->
    <label class="flex items-center gap-2">
      <input type="checkbox" id="isPublicAsset" ${o.isPublicAsset?"checked":""}/>
      Public Asset
    </label>
    <textarea id="description" placeholder="Description" required class="border px-2 py-1 rounded">${s(o.description)}</textarea>
    <div class="flex justify-between gap-2 mt-3">
      <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
      <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">${e?"Save":"Add"}</button>
    </div>
    <button id="addCatBtn" type="button" class="text-xs text-blue-500 underline mt-1">Add new category</button>
  </form>
`;const y=t.querySelector('button[value="cancel"]');y&&(y.onclick=d=>{d.preventDefault(),t.close()}),t.showModal(),t.querySelector("#addCatBtn").onclick=async()=>{const d=await oe(n);d&&!n.includes(d)&&(n.push(d),await J(n),t.querySelector("#category").innerHTML=`
      <option value="">-- Select Category --</option>
      ${n.map(b=>`<option value="${s(b)}">${s(b)}</option>`).join("")}
    `)},t.querySelector("form").onsubmit=d=>{if(d.preventDefault(),document.activeElement.value==="cancel"){t.close(),r(void 0);return}t.querySelectorAll("input, select, textarea").forEach(h=>h.classList.remove("border-red-500")),t.querySelector("#formError").textContent="";const b=t.querySelector("#name").value.trim(),$=t.querySelector("#vendor").value,L=t.querySelector("#hsCode").value.trim(),D=t.querySelector("#category").value,v=t.querySelector("#price").value,P=t.querySelector("#dutyRate").value,N=t.querySelector("#customsLiability").value,S=t.querySelector("#depreciationRate").value,R=t.querySelector("#description").value.trim();let E=!0;function u(h){t.querySelector(h).classList.add("border-red-500"),E=!1}if(b||u("#name"),$||u("#vendor"),L||u("#hsCode"),D||u("#category"),(!v||isNaN(v)||Number(v)<=0)&&u("#price"),(!P||isNaN(P)||Number(P)<0)&&u("#dutyRate"),N||u("#customsLiability"),(S===""||isNaN(S)||Number(S)<0)&&u("#depreciationRate"),R||u("#description"),c.some((h,I)=>h.name.toLowerCase()===b.toLowerCase()&&I!==a)){u("#name"),t.querySelector("#formError").textContent="Product name must be unique!";return}if(!E){t.querySelector("#formError").textContent="Please fill in all required fields correctly.";return}const A=t.querySelector("#isPublicAsset").checked;t.close(),r({name:b,vendor:$,hsCode:L,category:D,price:v===""?null:Number(v),dutyRate:Number(P),customsLiability:N,depreciationRate:Number(S),description:R,isPublicAsset:A,id:e&&e.id?e.id:void 0})}})}function X(e){return new Promise(a=>{const r=document.getElementById("confirmProductDialog");r.innerHTML=`
      <form method="dialog" class="flex flex-col gap-4 w-64">
        <p>Delete product <span class="font-bold">${s(e.name)}</span>? This cannot be undone.</p>
        <div class="flex justify-end gap-2">
          <button value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
        </div>
      </form>
    `,r.showModal(),r.querySelector("form").onsubmit=i=>{i.preventDefault(),a(document.activeElement.value==="ok"),r.close()}})}async function Y(e){e&&(c=await w(),e.order=c.length>0?Math.max(...c.map(a=>a.order))+1:0,"id"in e&&delete e.id,await K(e),C("Product added","green"),await m(),g())}async function Z(e,a){e&&(await Q(e.id,e),C("Product updated","blue"),await m())}async function ee(e){await W(e.id),C("Product deleted","red"),await m(),g()}async function te(e,a){c=await w(),c.sort((n,o)=>n.order-o.order);const[r]=c.splice(e,1);c.splice(a,0,r);const i=B(p);c.forEach((n,o)=>{i.update(f(p,"Products",n.id),{order:o})}),await i.commit(),await m(),g()}function oe(e=[]){return new Promise(a=>{const r=document.getElementById("addCategoryDialog");r.innerHTML=`
      <form method="dialog" class="flex flex-col gap-3 w-80 p-4 bg-white dark:bg-gray-800 rounded-xl">
        <h3 class="font-bold mb-2 text-purple-700">Add New Category</h3>
        <div class="text-red-600 text-xs min-h-[1em]" id="catFormError"></div>
        <input id="catNameInput" type="text" placeholder="Category name" required class="border px-2 py-1 rounded" autofocus>
        <div class="flex justify-end gap-2 mt-3">
          <button type="button" value="cancel" class="bg-gray-300 px-3 py-1 rounded">Cancel</button>
          <button value="ok" class="bg-purple-600 text-white px-3 py-1 rounded">Add</button>
        </div>
      </form>
    `,r.showModal();const i=r.querySelector("form"),n=r.querySelector("#catNameInput"),o=r.querySelector("#catFormError");r.querySelector('button[value="cancel"]').onclick=t=>{t.preventDefault(),r.close(),a(null)},i.onsubmit=t=>{t.preventDefault();const y=n.value.trim();if(!y){o.textContent="Category name is required.",n.classList.add("border-red-500");return}if(e.includes(y)){o.textContent="Category already exists.",n.classList.add("border-red-500");return}r.close(),a(y)}})}function s(e){return(""+e).replace(/[<>&"']/g,a=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"})[a])}async function de(e){return(await w()).filter(r=>r.vendor===e).map(r=>r.name)}export{W as deleteProductById,se as initProducts,G as loadCategories,w as loadProducts,ie as reorderProducts,J as saveCategories,K as saveProduct,Q as updateProduct,de as vendorInUse};

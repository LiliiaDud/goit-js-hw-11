import{a as p,S as g,i}from"./assets/vendor-F7a2Vas_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",h="52351583-282e675a2a1d7a615546b9ab7";async function b(s){try{return(await p.get(y,{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch{throw console.error(err),new Error("Failed to fetch images")}}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:200});function w(s){const r=s.map(({webformatURL:a,largeImageURL:o,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
          <li class="gallery-item">
            <a href="${o}">
              <img src="${a}" alt="${e}" loading="lazy"/>
            </a>
            <div class="info">
              <p><b>Likes</b> ${t}</p>
              <p><b>Views</b> ${n}</p>
              <p><b>Comments</b> ${f}</p>
              <p><b>Downloads</b> ${m}</p>
            </div>
          </li>
        `).join("");u.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){u.innerHTML=""}function $(){d.classList.remove("hidden")}function q(){d.classList.add("hidden")}const l=document.querySelector(".form"),c={position:"topRight",timeout:2e3};l.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){i.warning({...c,title:"Warning",message:"Please enter a search query!"});return}S(),$(),b(r).then(a=>{const{hits:o}=a;if(o.length===0){i.info({...c,message:"Sorry, there are no images matching your search query. Please try again!"});return}w(o),i.success({...c,message:`Found ${o.length} images for "${r}".`})}).catch(a=>{i.error({...c,title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{q(),l.reset()})});
//# sourceMappingURL=index.js.map

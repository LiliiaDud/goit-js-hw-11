import{a as g,S as p,i}from"./assets/vendor-8-pyTk71.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",y="52351583-282e675a2a1d7a615546b9ab7";function b(a){return g.get(h,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{throw t})}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new p(".gallery a",{captionsData:"alt",captionDelay:200});function S(a){const t=a.map(({webformatURL:n,largeImageURL:o,tags:e,likes:r,views:s,comments:f,downloads:m})=>`
          <li class="gallery-item">
            <a href="${o}">
              <img src="${n}" alt="${e}" loading="lazy"/>
            </a>
            <div class="info">
              <p><b>Likes</b> ${r}</p>
              <p><b>Views</b> ${s}</p>
              <p><b>Comments</b> ${f}</p>
              <p><b>Downloads</b> ${m}</p>
            </div>
          </li>
        `).join("");l.insertAdjacentHTML("beforeend",t),L.refresh()}function w(){l.innerHTML=""}function $(){u.classList.remove("hidden")}function q(){u.classList.add("hidden")}const d=document.querySelector(".form"),c={position:"topRight",timeout:2e3};d.addEventListener("submit",P);function P(a){a.preventDefault();const t=a.target.elements["search-text"].value.trim();if(!t){i.warning({...c,title:"Warning",message:"Please enter a search query!"});return}w(),$(),b(t).then(n=>{const{hits:o}=n;if(o.length===0){i.info({...c,message:"Sorry, there are no images matching your search query. Please try again!"});return}S(o),i.success({...c,message:`Found ${o.length} images for "${t}".`})}).catch(()=>{i.error({...c,title:"Error",message:"Something went wrong. Please try again later."})}).finally(()=>{q(),d.reset()})}
//# sourceMappingURL=index.js.map

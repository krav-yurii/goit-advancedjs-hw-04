import{a as L,S as E,i as b,b as p}from"./assets/vendor-ea274875.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const v="42508369-6cc99fb978405cb8598a23b23",w="https://pixabay.com/api/",$="photo",R="horizontal",S=!0,h=15;async function g(r,t=1){try{const i=encodeURIComponent(r),n=`${w}?key=${v}&q=${i}&image_type=${$}&orientation=${R}&safesearch=${S}&per_page=${h}&page=${t}`,e=await L.get(n);if(e.status!==200)throw new Error("Image error");return e.data}catch(i){throw console.error("Error fetching images:",i),new Error("Error while fetching images from pixabay",i)}}function I(r){r.innerHTML=""}function y(r,t){const i=r.map(e=>`

        <li class="gallery-item" >

         <a href="${e.webformatURL}"><img class="card-image" src="${e.webformatURL}" alt="${e.tags}" />
         <div class="card-info">
           <p>Likes: <span>${e.likes}</span></p>
           <p>Views: <span>${e.views}</span></p>
           <p>Comments: <span>${e.comments}</span></p>
           <p>Downloads:<span>${e.downloads}</span></p>
         </div></a>
       </li> `).join("");t.innerHTML+=i,new E(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function a(r){b.error({title:"Error",message:r,position:"topRight"})}const P=document.querySelector(".form"),m=document.querySelector(".search-input"),d=document.querySelector(".gallery"),f=document.getElementById("loader"),o=document.querySelector("#loadMoreBtn");let l="",c=1;P.addEventListener("submit",async function(r){if(r.preventDefault(),l=m.value.trim(),l===""){a("Please fill input");return}m.value="",f.classList.remove("is-hidden"),I(d),c=1;try{const t=await g(l,c);if(t.hits.length===0){a("Sorry, there are no images matching your search query. Please try again!"),o.classList.add("is-hidden");return}y(t.hits,d),t.totalHits>h&&o.classList.remove("is-hidden")}catch(t){console.error("Error during search:",t),a("Error during search")}finally{f.classList.add("is-hidden")}});o.addEventListener("click",async function(){if(!navigator.onLine){d.innerHTML="",o.classList.add("is-hidden"),p.error({title:"Error",message:"No internet connection",position:"topRight"});return}const r=document.getElementById("load-more-loader");r.classList.remove("is-hidden"),o.classList.add("is-hidden");try{const t=await g(l,c+1);c++,M(t),c*h>=t.totalHits&&(o.classList.add("is-hidden"),q()),o.scrollIntoView({behavior:"smooth",block:"end"})}catch(t){console.error("Error during loading more images:",t),a("Error loading more images")}finally{r.classList.add("is-hidden"),o.disabled=!1}});function q(){p.info({title:"",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function M(r){var t;if(r.hits.length===0){console.log(r.hits),a("Sorry, there are no images matching your search query. Please try again!"),o.classList.add("is-hidden");return}o.classList.contains("is-hidden")&&o.classList.remove("is-hidden"),y(r.hits,d),(t=document.querySelector(".gallery-item"))!=null&&t.getBoundingClientRect().height}
//# sourceMappingURL=commonHelpers.js.map

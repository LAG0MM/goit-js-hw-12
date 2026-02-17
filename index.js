import{a as c,S as m,i as a}from"./assets/vendor-D-hiYp1V.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";const g="54667544-34f53a0b28c965f6e0120a2cf";function y(i){return c.get("",{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:9}}).then(r=>r.data.hits)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),h=new m(".gallery a",{nav:!0,close:!0,captions:!0,captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({comments:o,downloads:n,likes:e,views:t,tags:s,webformatURL:f,largeImageURL:p})=>`
     <div class="gallery__card">
        <a href="${p}" class="gallery__image-link">
          <img src="${f}" alt="${s}" loading="lazy" class="gallery__image"/>
        </a>
        <div class="gallery__info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${t}</p>
          <p><b>Comments:</b> ${o}</p>
          <p><b>Downloads:</b> ${n}</p>
        </div>
      </div>
     `).join("");u.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){u.innerHTML="",console.log("Галерею очищенно")}function _(){d.classList.remove("is-hidden"),console.log("Завантаження")}function l(){d.classList.add("is-hidden"),console.log("Закінчення завантаження")}const v=document.querySelector(".form");v.addEventListener("submit",S);function S(i){i.preventDefault();const r=i.target["search-text"].value.trim();if(r===""){a.error({title:"Увага",message:"Введіть пошукове слово!",position:"topRight"});return}L(),_(),y(r).then(o=>{if(l(),o.length===0){a.error({message:"Нічого не знайдено",position:"topRight"});return}b(o)}).catch(o=>{l(),console.error(o)})}
//# sourceMappingURL=index.js.map

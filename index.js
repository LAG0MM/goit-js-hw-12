import{a as u,S as p,i as l}from"./assets/vendor-CMfzsMay.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";const g="54667544-34f53a0b28c965f6e0120a2cf";function m(o){return u.get("",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:9}})}const n=document.querySelector(".gallery");function y(o){const r=o.map(({comments:i,downloads:s,likes:e,views:t,tags:a,webformatURL:f,largeImageURL:d})=>`
     <div class="gallery__card">
        <a href="${d}" class="gallery__image-link">
          <img src="${f}" alt="${a}" loading="lazy" class="gallery__image"/>
        </a>
        <div class="gallery__info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${t}</p>
          <p><b>Comments:</b> ${i}</p>
          <p><b>Downloads:</b> ${s}</p>
        </div>
      </div>
     `).join("");n.insertAdjacentHTML("beforeend",r)}function h(){n.innerHTML="",console.log("Галерею очищенно")}function b(){n.classList.add("loading"),console.log("Завантаження")}function c(){n.classList.remove("loading"),console.log("Закінчення завантаження")}const L=document.querySelector(".form"),_=new p(".gallery a",{nav:!0,close:!0,captions:!0,captionsData:"alt",captionDelay:250});L.addEventListener("submit",v);function v(o){o.preventDefault();const r=o.target["search-text"].value.trim();if(r===""){l.error({title:"Увага",message:"Введіть пошукове слово!",position:"topRight"});return}h(),b(),m(r).then(i=>{c();const s=i.data.hits;if(s.length===0){l.error({message:"Нічого не знайдено",position:"topRight"});return}y(s),_.refresh()}).catch(i=>{c(),console.error(i)})}
//# sourceMappingURL=index.js.map

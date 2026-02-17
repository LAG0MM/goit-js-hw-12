import{a as u,S as p,i as l}from"./assets/vendor-CMfzsMay.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();u.defaults.baseURL="https://pixabay.com/api/";const g="54667544-34f53a0b28c965f6e0120a2cf";function m(o){return u.get("",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:9}})}const n=document.querySelector(".gallery");function y(o){const r=o.map(({comments:s,downloads:a,likes:e,views:t,tags:i,webformatURL:f,largeImageURL:d})=>`
     <div class="gallery__card">
        <a href="${d}" class="gallery__image-link">
          <img src="${f}" alt="${i}" loading="lazy" class="gallery__image"/>
        </a>
        <div class="gallery__info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${t}</p>
          <p><b>Comments:</b> ${s}</p>
          <p><b>Downloads:</b> ${a}</p>
        </div>
      </div>
     `).join("");n.insertAdjacentHTML("beforeend",r)}function h(){n.innerHTML="",console.log("Галерею очищенно")}function b(){n.classList.add("loader"),console.log("Завантаження")}function c(){n.classList.remove("loader"),console.log("Закінчення завантаження")}const L=document.querySelector(".form"),_=new p(".gallery a",{nav:!0,close:!0,captions:!0,captionsData:"alt",captionDelay:250});L.addEventListener("submit",v);function v(o){o.preventDefault();const r=o.target["search-text"].value.trim();if(r===""){l.error({title:"Увага",message:"Введіть пошукове слово!",position:"topRight"});return}h(),b(),m(r).then(s=>{c();const a=s.data.hits;if(a.length===0){l.error({message:"Нічого не знайдено",position:"topRight"});return}y(a),_.refresh()}).catch(s=>{c(),console.error(s)})}
//# sourceMappingURL=index.js.map

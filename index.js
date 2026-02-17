import{a as l,S as m,i as n}from"./assets/vendor-CMfzsMay.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";const g="54667544-34f53a0b28c965f6e0120a2cf";function y(o){return l.get("",{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:9}})}const u=document.querySelector(".gallery"),d=document.querySelector(".loader");function h(o){const r=o.map(({comments:s,downloads:i,likes:e,views:t,tags:a,webformatURL:f,largeImageURL:p})=>`
     <div class="gallery__card">
        <a href="${p}" class="gallery__image-link">
          <img src="${f}" alt="${a}" loading="lazy" class="gallery__image"/>
        </a>
        <div class="gallery__info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${t}</p>
          <p><b>Comments:</b> ${s}</p>
          <p><b>Downloads:</b> ${i}</p>
        </div>
      </div>
     `).join("");u.insertAdjacentHTML("beforeend",r)}function b(){u.innerHTML="",console.log("Галерею очищенно")}function L(){d.classList.add("is-hidden"),console.log("Завантаження")}function c(){d.classList.remove("is-hidden"),console.log("Закінчення завантаження")}const _=document.querySelector(".form"),v=new m(".gallery a",{nav:!0,close:!0,captions:!0,captionsData:"alt",captionDelay:250});_.addEventListener("submit",S);function S(o){o.preventDefault();const r=o.target["search-text"].value.trim();if(r===""){n.error({title:"Увага",message:"Введіть пошукове слово!",position:"topRight"});return}b(),L(),y(r).then(s=>{c();const i=s.data.hits;if(i.length===0){n.error({message:"Нічого не знайдено",position:"topRight"});return}h(i),v.refresh()}).catch(s=>{c(),console.error(s)})}
//# sourceMappingURL=index.js.map

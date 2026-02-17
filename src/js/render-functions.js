import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    
  nav: true,       
  close: true,     
  captions: true,
  captionsData: 'alt', 
  captionDelay: 250  
});

export  function createGallery(images) { 
     const markup = images
     .map(({ comments, downloads, likes, views, tags, webformatURL, largeImageURL }) => `
     <div class="gallery__card">
        <a href="${largeImageURL}" class="gallery__image-link">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery__image"/>
        </a>
        <div class="gallery__info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </div>
     `).join('');
     gallery.insertAdjacentHTML('beforeend', markup)

      lightbox.refresh();
    };

export function clearGallery() {
    gallery.innerHTML = '';
    console.log('Галерею очищенно')
}

export function showLoader() {
    loader.classList.add('is-hidden')
    console.log('Завантаження')
}

export function hideLoader() { 
    loader.classList.remove('is-hidden')
    console.log('Закінчення завантаження')
}

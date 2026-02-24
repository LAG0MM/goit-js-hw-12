import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
 

import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader, hideLoadButton, showLoadButton } from './js/render-functions.js';
import { fromJSON } from 'postcss';


const form = document.querySelector('.form');
const loadBtn = document.querySelector('.btn');
let query = '';
let page = 1;

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    query = event.currentTarget.elements['search-text'].value.trim();

    if(!query) {
    iziToast.warning({ message: "Search field cannot be empty!" });
    return;
    }
    page = 1;
    clearGallery();
    hideLoadButton();
    showLoadButton();

    try {
      const data = await getImagesByQuery(query, page);

      if(data.hits.length === 0) {
            iziToast.error({
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: 'topRight'
          });
      }else {
        createGallery(data.hits);

        const totalPages = Math.ceil(data.totalHits / 15);
        if(page < totalPages) {
          showLoadButton();
        }else {
          iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
        }
      }
    }
    catch (error) {
      console.log(error);
       iziToast.error({ message: "Something went wrong. Please try again." });
    }
    finally {
      hideLoader();
      event.target.reset();
    }
  
});



loadBtn.addEventListener('click', async () => {
    hideLoadButton();
    showLoader();

    page += 1;

    try {
      const data = await getImagesByQuery(query, page);
      createGallery(data.hits);
      const galleryCard = document.querySelector('.gallery__card');
      const cardHeight = galleryCard.getBoundingClientRect().height;
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });

      const totalPages = Math.ceil(data.totalHits / 15);
        if (page >= totalPages) {
            hideLoadButton();
            iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
        } else {
            showLoadButton();
        }
      
    }
    catch (error) {
      iziToast.error({ message: "Error fetching images!" });
      console.log(error);
    }
    finally { hideLoader(); }
})



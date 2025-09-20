import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

const form = document.querySelector(".form");
const messageDefaults = { position: 'topRight', timeout: 2000 };

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // не перезавантажуємо сторінку
    
    const query = event.target.elements["search-text"].value.trim();
  //Якщо рядок пустий
    if (!query) {
    iziToast.warning({
      ...messageDefaults,
      title: "Warning",
      message: "Please enter a search query!",
    });
    return;
  }
//очищаємо DOM
    clearGallery();
    showLoader();

    getImagesByQuery(query)
    .then(data => {
      // const { hits = [] } = data || {};
      const { hits } = data;

      if (hits.length === 0) {
        iziToast.info({
          ...messageDefaults,
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
        /*
    getImagesByQuery(query)
    .then(data => {
      const hits = Array.isArray(data?.hits) ? data.hits : [];

      if (hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 2000,
        });
        return;
      }*/

      createGallery(hits);

      iziToast.success({
        ...messageDefaults,
        message: `Found ${hits.length} images for "${query}".`,
      });
    })
    .catch(err => {
      iziToast.error({
        ...messageDefaults,
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
})
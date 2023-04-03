import { galleryItems } from './gallery-items.js';


const galleryListEl = document.querySelector('.gallery');
galleryListEl.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
          </a>
        </li>`,
    )
    .join('');
}

galleryListEl.addEventListener('click', (event) => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const modalWindowImg = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  modalWindowImg.show();

  const closeOriginalImgByClick = () => {
    modalWindowImg.close();
    modalWindowImg.element().removeEventListener('click', closeOriginalImgByClick);
    window.removeEventListener('keydown', closeOriginalImgByBtn);
  };

  const closeOriginalImgByBtn = (event) => {
    if (event.code === 'Escape') {
      modalWindowImg.close();
      modalWindowImg.element().removeEventListener('keydown', closeOriginalImgByBtn);
      window.removeEventListener('click', closeOriginalImgByClick);
    }
  };

  modalWindowImg.element().addEventListener('click', closeOriginalImgByClick);
  window.addEventListener('keydown', closeOriginalImgByBtn);
});




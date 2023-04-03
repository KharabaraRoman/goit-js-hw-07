import { galleryItems } from './gallery-items.js';

const galleryListEl = document.querySelector('.gallery');
galleryListEl.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}">
          </a>
        </li>`,
    )
    .join('');
}

const galleryItem = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
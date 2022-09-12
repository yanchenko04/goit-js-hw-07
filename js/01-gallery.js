import { galleryItems } from './gallery-items.js';
// Change code below this line


const imgContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
imgContainer.insertAdjacentHTML('beforeend', cardsMarkup);
imgContainer.addEventListener('click', onImgClick);

function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
  <a class="gallery__link" 
  href="${original}">
    <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    }).join('');
}


imgContainer.addEventListener('click', onImgClick);
function onImgClick(evt){
    evt.preventDefault();
    const isGalleryImage = evt.target.classList.contains('gallery__image')
    if(!isGalleryImage){
        return
    }
    
const bigUrl = evt.target.dataset.source;
const instance = basicLightbox.create(`<img class="modal__image" src="${bigUrl}"/>`);
instance.show()
}

 
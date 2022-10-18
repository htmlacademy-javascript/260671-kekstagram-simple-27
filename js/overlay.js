import {isEscapeKey} from './util.js';
const fileInput = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeOverlayButton = document.querySelector('#upload-cancel');
const scaleValue = document.querySelector('.scale__control--value');
const commentField = document.querySelector('.text__description');
const imageContainer = document.querySelector('.img-upload__preview');

const onOverlayEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

const openUploadOverlay = () => {
  imageOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onOverlayEscKeydown);
};

function closeUploadOverlay() {
  imageOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onOverlayEscKeydown);
  fileInput.value = '';
  commentField.value = '';
  scaleValue.value = '100%';
  imageContainer.style.transform = 'scale(1)';
}

fileInput.addEventListener('change', ()=> {
  openUploadOverlay();
});

closeOverlayButton.addEventListener('click', ()=> {
  closeUploadOverlay();
});

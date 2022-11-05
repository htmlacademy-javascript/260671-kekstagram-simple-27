import {isEscapeKey} from './util.js';
const sliderFieldset = document.querySelector('.img-upload__effect-level');
const fileInput = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeOverlayButton = document.querySelector('#upload-cancel');
const scaleValue = document.querySelector('.scale__control--value');
const commentField = document.querySelector('.text__description');
const imageContainer = document.querySelector('.img-upload__preview');
const imageCore = imageContainer.querySelector('img');

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
  imageCore.style.transform = 'scale(1)';
  imageCore.style.filter = 'none';
  sliderFieldset.style.display = 'none';
}

fileInput.addEventListener('change', ()=> {
  openUploadOverlay();
});

closeOverlayButton.addEventListener('click', ()=> {
  closeUploadOverlay();
});

export {closeUploadOverlay};

import {onFilterChange} from './slider.js';
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageContainer = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.img-upload__effects');

const setScale = (scale) => {
  scaleValue.value = `${scale}%`;
  imageContainer.style.transform = `scale(${scale / 100})`;
};

biggerButton.addEventListener('click', () => {
  const scale = parseInt(scaleValue.value, 10);
  if (scale < 100 && scale >= 25) {
    setScale(scale + 25);
  }
});

smallerButton.addEventListener('click', () => {
  const scale = parseInt(scaleValue.value, 10);
  if (scale <= 100 && scale > 25) {
    setScale(scale - 25);
  }
});

effectsList.addEventListener('change', onFilterChange);

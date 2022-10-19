const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageContainer = document.querySelector('.img-upload__preview');

const setScale = (scale) => {
  scaleValue.value = `${scale}%`;
  imageContainer.style.transform = `scale(${scale / 100})`;
};

biggerButton.addEventListener('click', () => {
  const scale = parseInt(scaleValue.value);
  if (scale < 100 && scale >= 25) {
    setScale(scale + 25);
  }
});

smallerButton.addEventListener('click', () => {
  const scale = parseInt(scaleValue.value);
  if (scale <= 100 && scale > 25) {
    setScale(scale - 25);
  }
});

//Наложение фильтров

const effectsList = document.querySelector('form');

let previousClass;
effectsList.addEventListener('change', (evt) => {
  const imageCore = imageContainer.querySelector('img');
  imageCore.classList.remove(previousClass);
  const imageEditedClass = `effects__preview--${evt.target.value}`;
  imageCore.classList.add(imageEditedClass);
  previousClass = imageEditedClass;
});

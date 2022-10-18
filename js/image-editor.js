const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imageContainer = document.querySelector('.img-upload__preview');
let imageScaleValue = parseInt(scaleValue.value);

const fn = () => {
  scaleValue.value = `${imageScaleValue}%`;
  const scalePercent = imageScaleValue / 100;
  imageContainer.style.transform = `scale(${scalePercent})`;
};

biggerButton.addEventListener('click', () => {
  if (imageScaleValue < 100 && imageScaleValue >= 25) {
    imageScaleValue += 25;
    fn();
  }
});

smallerButton.addEventListener('click', () => {
  if (imageScaleValue <= 100 && imageScaleValue > 25) {
    imageScaleValue -= 25;
    fn();
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

const sliderFieldset = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const radioList = document.querySelector('.effects__list');
const radioButtons = radioList.querySelectorAll('input[type="radio"]');
const effectsList = document.querySelector('.img-upload__effects');
const imageContainer = document.querySelector('.img-upload__preview');
const imageCore = imageContainer.querySelector('img');

valueElement.value = 0;
//Создание слайдера
noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  step: 2,
  connect: 'lower',
});

const updateValue = (val) => {
  valueElement.value = val;
  sliderElement.noUiSlider.set(val);
};

//При измененмм значения слайдера обновляем значение в инпуте

//При смене фильтра обновляем максимальное и минимальное значения и шаг слайдера. Генерируем стиль фильтра
function onFilterChange (evt) {
  if (evt.target.value === 'none') {
    sliderFieldset.style.display = 'none';
    imageCore.style.filter = 'none';
  } else {
    sliderFieldset.style.display = 'block';
    if (evt.target.matches('input[type="radio"]')) {
      imageCore.style.filter = 'none';
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: +evt.target.dataset.minValue,
          max: +evt.target.dataset.maxValue
        },
        start: +evt.target.dataset.startValue,
        step: +evt.target.dataset.step
      });
      sliderElement.noUiSlider.on('update', () => {
        valueElement.value = sliderElement.noUiSlider.get();
        imageCore.style.filter = 'none';
        setTimeout(() => {
          imageCore.style.filter = `${evt.target.dataset.styleName}(${valueElement.value}${evt.target.dataset.styleSuffix})`;
        },0);
      });
      setTimeout(() => {
        imageCore.style.filter = `${evt.target.dataset.styleName}(${valueElement.value}${evt.target.dataset.styleSuffix})`;
      },0);
    }
  }
}

export {onFilterChange};

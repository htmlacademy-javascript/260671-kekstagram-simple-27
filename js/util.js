const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  } else if (min > max) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return Number(lastGeneratedId);
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const userPhotosLoadError = () => {
  const errorModal = document.createElement('div');
  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'При загрузке данных произошла ошибка, попробуйте перезагрузить страницу';
  errorMessage.style.color = 'black';
  errorModal.appendChild(errorMessage);
  errorModal.style.position = 'absolute';
  errorModal.style.top = '50%';
  errorModal.style.left = '50%';
  errorModal.style.marginTop = '-100px';
  errorModal.style.marginLeft = '-150px';
  errorModal.style.width = '300px';
  errorModal.style.backgroundColor = 'white';
  errorModal.style.borderRadius = '8px';
  errorModal.style.border = '5px solid #ffaa00';
  errorModal.style.padding = ' 5px 10px';
  document.body.append(errorModal);

  setTimeout(() => {
    errorModal.remove();
  }, 5000);
};

export {getRandomNumber};
export {createIdGenerator};
export {isEscapeKey};
export {userPhotosLoadError};

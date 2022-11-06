const isEscapeKey = (evt) => evt.key === 'Escape';
const ERROR_DISPLAY_TIME = 5000;

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
  }, ERROR_DISPLAY_TIME);
};

export {isEscapeKey};
export {userPhotosLoadError};

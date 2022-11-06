import { isEscapeKey } from './util.js';
import { onOverlayEscKeydown } from './overlay.js';
const uploadForm = document.querySelector('#upload-select-image');
const submitButton = document.querySelector('#upload-submit');
const body = document.querySelector('body');
const uploadSuccessTemplate = document.querySelector('#success').content;
const uploadErrorTemplate = document.querySelector('#error').content;
const SERVER_ADDRESS_SEND = 'https://27.javascript.pages.academy/kekstagram-simple';

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__form--element',
  errorTextParent: 'img-upload__form--element',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const showUploadSuccess = () => {
  const successElement = uploadSuccessTemplate.cloneNode(true);
  body.appendChild(successElement);
  const closeSuccessButton = document.querySelector('.success__button');
  const successModal = document.querySelector('.success');
  const successInner = successModal.querySelector('.success__inner');

  const onSuccessModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successModal.remove();
      document.removeEventListener('keydown', onSuccessModalEscKeydown);
    }
  };

  const missClickSuccessClose = (node) => {
    const closeSuccessMessage = (element) => {
      const target = element.target;
      const itsMessage = target === node || node.contains(target);

      if (!itsMessage) {
        successModal.remove();
        document.removeEventListener('keydown', onSuccessModalEscKeydown);
        document.removeEventListener('click', closeSuccessMessage);
      }
    };

    document.addEventListener('click', closeSuccessMessage);
  };

  missClickSuccessClose(successInner);
  closeSuccessButton.addEventListener('click', () => {
    successModal.remove();
    document.removeEventListener('keydown', onSuccessModalEscKeydown);
  });

  document.addEventListener('keydown', onSuccessModalEscKeydown);
};

const showUploadError = () => {
  document.removeEventListener('keydown', onOverlayEscKeydown); //тест
  const errorElement = uploadErrorTemplate.cloneNode(true);
  body.appendChild(errorElement);
  const closeErrorButton = document.querySelector('.error__button');
  const errorModal = document.querySelector('.error');
  const errorInner = errorModal.querySelector('.error__inner');

  const onErrorModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorModal.remove();
      document.removeEventListener('keydown', onErrorModalEscKeydown);
      document.addEventListener('keydown', onOverlayEscKeydown); //тест
    }
  };

  const missClickErrorClose = (node) => {

    const closeErrorMessage = (element) => {
      const target = element.target;
      const itsMessage = target === node || node.contains(target);

      if (!itsMessage) {
        errorModal.remove();
        document.removeEventListener('keydown', onErrorModalEscKeydown);
        document.removeEventListener('click', closeErrorMessage);
      }
    };

    document.addEventListener('click', closeErrorMessage);
  };

  missClickErrorClose(errorInner);
  closeErrorButton.addEventListener('click', () => {
    errorModal.remove();
    document.removeEventListener('keydown', onErrorModalEscKeydown);
  });

  document.addEventListener('keydown', onErrorModalEscKeydown);
};

const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      blockSubmitButton();

      fetch(
        SERVER_ADDRESS_SEND,
        {
          method: 'POST',
          body: formData,
        },
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
            showUploadSuccess();
            return;
          }
          showUploadError();
        })
        .catch(() => {
          showUploadError();
        })
        .finally(() => {
          unblockSubmitButton();
        });
    }
  });
};

export {setUploadFormSubmit};

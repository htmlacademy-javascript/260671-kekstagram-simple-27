const uploadForm = document.querySelector('#upload-select-image');
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__form--element',
  errorTextParent: 'img-upload__form--element',
});

const setUploadFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);

      fetch(
        'https://27.javascript.pages.academy/kekstagram-simple',
        {
          method: 'POST',
          body: formData,
        },
      ).then(() => onSuccess());
    } else {

    }
  });
};

export {setUploadFormSubmit};

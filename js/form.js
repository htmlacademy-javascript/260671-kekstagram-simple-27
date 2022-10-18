const uploadForm = document.querySelector('#upload-select-image');
const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__form--element',
  errorTextParent: 'img-upload__form--element',
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    uploadForm.submit();
  }
});


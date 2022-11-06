import {userPhotosLoadError} from './util.js';
const userPicturesContainer = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture ')
  .content
  .querySelector('.picture');
const SERVER_ADDRESS_GET = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const picturesFragment = document.createDocumentFragment();

const createUserPictures = (pictures) => {
  pictures.forEach(({url, likes, comments}) => {
    const pictureElement = userPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    picturesFragment.appendChild(pictureElement);
  });
  userPicturesContainer.appendChild(picturesFragment);
};

fetch(SERVER_ADDRESS_GET)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    userPhotosLoadError();
  })
  .then((array) => {
    createUserPictures(array);
  })
  .catch(() => {
    userPhotosLoadError();
  });

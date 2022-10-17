import {createDescription} from './data.js';
const createPhotoDescriptions = () => Array.from({length: 25}, createDescription);

const userPicturesContainer = document.querySelector('.pictures');
const userPictureTemplate = document.querySelector('#picture ')
  .content
  .querySelector('.picture');

const userPictures = createPhotoDescriptions();

const picturesFragment = document.createDocumentFragment();

userPictures.forEach(({url, likes, comments}) => {
  const pictureElement = userPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  picturesFragment.appendChild(pictureElement);
});

userPicturesContainer.appendChild(picturesFragment);

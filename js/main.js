function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max < 0 || min === max) {
    return NaN;
  } else if (min > max) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return Number(lastGeneratedId);
  };
}

function calcStringLength(string, maxLength) {
  if (string.length >= +maxLength) {
    return false;
  }
  return true;
}

calcStringLength('sdhjfdshffsdjfkhdskfhsdjfkskd', 20);

const orderedId = createIdGenerator();
const orderedUrl = createIdGenerator();

const createDescription = () => ({
  id: orderedId(),
  url: `photos/${orderedUrl()}.jpg`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200),
});


const createPhotoDescriptions = Array.from({length: 25}, createDescription);
createPhotoDescriptions();

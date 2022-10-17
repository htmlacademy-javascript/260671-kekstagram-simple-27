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

const calcStringLength = (string, maxLength) => {
  if (string.length >= +maxLength) {
    return false;
  }
  return true;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

calcStringLength('sdhjfdshffsdjfkhdskfhsdjfkskd', 20);

export {getRandomNumber};
export {createIdGenerator};
export {isEscapeKey};

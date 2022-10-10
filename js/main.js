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

function calcStringLength(string, maxLength) {
  if (string.length >= +maxLength) {
    return false;
  }
  return true;
}

calcStringLength('sdhjfdshffsdjfkhdskfhsdjfkskd', 20);
getRandomNumber(20, 0);

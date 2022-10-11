import {getRandomNumber} from './util.js';
import {createIdGenerator} from './util.js';

const orderedId = createIdGenerator();
const orderedUrl = createIdGenerator();

const createDescription = () => ({
  id: orderedId(),
  url: `photos/${orderedUrl()}.jpg`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  likes: getRandomNumber(15, 200),
  comments: getRandomNumber(0, 200),
});

export {createDescription};

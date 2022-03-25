export const shuffleArray = (array) => {
  const newArray = array;
  let i = array.length;
  while (i) {
    i += -1;
    const ri = Math.floor(Math.random() * i);
    [newArray[i], newArray[ri]] = [newArray[ri], newArray[i]];
  }
  return newArray;
};

export const sampleArrayFromRange = (min, max, len) => {
  const array = [];
  for (let i = 0; i < len; i += 1) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!array.includes(num)) array.push(num);
  }
  return array;
};

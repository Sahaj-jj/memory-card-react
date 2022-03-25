const shuffleArray = (array) => {
  const newArray = array;
  let i = array.length;
  while (i) {
    i += -1;
    const ri = Math.floor(Math.random() * i);
    [newArray[i], newArray[ri]] = [newArray[ri], newArray[i]];
  }
  return newArray;
};

export default shuffleArray;

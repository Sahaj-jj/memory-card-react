const fetchImages = async (url, idArray) => {
  const characters = [];
  await Promise.all(idArray.map(async (id) => {
    const response = await fetch(`${url}/${id}`);
    const character = await response.json();
    characters.push(character);
  }));
  return characters;
};

export default fetchImages;

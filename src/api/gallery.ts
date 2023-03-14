const getRandomCat = async () => {
  const response = await fetch('http://localhost:8080/api/randomcat');
  const data = await response.json();
  return data;
};

const addToFavorites = async (url: string) => {
  const response = await fetch('http://localhost:8080/api/randomcat');
  const data = await response.json();
  return data;
}

export {
  getRandomCat,
  addToFavorites
};
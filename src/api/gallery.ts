const getRandomCat = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  return data;
};

export {
  getRandomCat
};
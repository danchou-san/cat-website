const getFavourites = async () => {
  const response = await fetch('http://localhost:8080/api/favorites');
  const data = await response.json();
  return data;
};

export {
  getFavourites
};
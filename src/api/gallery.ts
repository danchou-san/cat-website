const getRandomCat = async () => {
  const response = await fetch('http://localhost:8080/api/randomcat');
  const data = await response.json();
  return data;
};

const addToFavorites = async (imageUrl: string) => {
  const data = {value: imageUrl};
  const url = 'http://localhost:8080/api/addfavorite';
  
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  
  fetch(url, options);
}

export {
  getRandomCat,
  addToFavorites
};
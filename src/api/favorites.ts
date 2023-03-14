const getFavourites = async () => {
  const response = await fetch('http://localhost:8080/api/favorites');
  const data = await response.json();
  return data;
};

const deleteCat = async (id: string) => {
  const data = {value: id};
  const url = 'http://localhost:8080/api/deletecat';
  
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  
  fetch(url, options);
};

export {
  getFavourites,
  deleteCat
};
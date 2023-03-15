const getCat = async (
  breed: string,
  category: string,
  type: string,
  page: string) => {

  // const data = {
  //   breed: breed,
  //   category: category,
  //   type: type,
  //   page: page,
  // }

  const response = await fetch(`http://localhost:8080/api/searchcat/${breed}/${category}/${type}`);
  const result = await response.json();
  return result;
};

export {
  getCat,
};
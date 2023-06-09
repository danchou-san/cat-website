import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { neutral } from '../../reducers/appSlice';
import { catUrls } from '../../reducers/searchCatSlice';
import { getCat } from '../../api/searchcat';
import { RootState } from '../../store';
import { addToFavorites } from '../../api/gallery';
import './SearchCat.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchCat = () => {
  const dispatch = useDispatch();
  const [breed, setBreed] = useState('any');
  const [category, setCategory] = useState('4');
  const [type, setType] = useState('jpg');
  const [page, setPage] = useState('');
  const [data, setData] = useState([]);
  const catUrlsState = useSelector((state: RootState) => state.searchCat.catUrls);

  const fetchCats = useCallback(async ( ) => {
    const response = await fetch(`http://localhost:8080/api/searchcat/${breed}/${category}/${type}`);
    const data = await response.json();
    setData(data);
  }, [breed, category, type]);

  useEffect(() => {
    dispatch(neutral());
    fetchCats();

  }, [breed, category, dispatch, page, type, catUrlsState, fetchCats]);

  const handleQuery = async () => {
    // await getCat(
    //   breed,
    //   category,
    //   type,
    //   page,
    // )
    //   .then(data => dispatch(catUrls(data)));
    console.log(await fetchCats());
  };

  const handleBreed = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBreed(event.target.value);
    handleQuery();
  }

  const handleCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
    handleQuery();
  }

  const handleType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
    handleQuery();
  }

  const handlePage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(event.target.value);
    handleQuery();
  }

  const onFavorites = async (url: string) => {
    await addToFavorites(url);
    toast("Successfully favorited a cat!");
  };

  return (
    <div className="content">
      <h1>Search Cat</h1>
      <div className="filter-div">
        <div className="filter-left">
          <div className="filter-box">
            <label htmlFor="">Breed</label>
            <select onChange={handleBreed}>
              <option value="any">Any</option>
              <option value="abys">Abyssinian</option>
              <option value="beng">Bengal</option>
              <option value="chau">Chausie</option>
              <option value="kuri">Kurilian</option>
            </select>  
          </div>

          <div className="filter-box">
            <label htmlFor="any">Type</label>
            <select onChange={handleType}>
              {/* <option value="">Any</option> */}
              <option value="jpg,png">Static</option>
              <option value="gif">Animated</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="search-cats">
      {data.map(item => {
        const key = Object.keys(item)[1];
        const value = item[key];
        return (
          <div key={key} className="cat-div">
            <img className="catImage" src={value} alt="No cat :("></img>
            <button className="fav-cat-button" onClick={() => onFavorites(value)}><b>Favorite</b></button>
            <ToastContainer/>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default SearchCat;
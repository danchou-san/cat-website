import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { neutral } from '../../reducers/appSlice';
import { favorites } from '../../reducers/favoritesSlice';
import { getFavourites, deleteCat } from '../../api/favorites';
import { RootState } from '../../store';
import './Favorites.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Favorites = () => {
  const dispatch = useDispatch();

  const favCats = useSelector((state: RootState) => state.favorites.favorites);

  useEffect(() => {
    dispatch(neutral());
    getFavourites()
      .then(data => dispatch(favorites(data)))
    console.log(favCats);
  }, [dispatch, favCats]);

  const onDelete = (id: string) => {
    deleteCat(id);
    toast("Successfully deleted a cat!");
  };;

  return (
    <div className="content">
      <h1>My Favorite Cats</h1>
      <div className="favorite-cats">
        {favCats.map((item, index) => (
          <div id={String(index)} className="cat-div">
            <img className="catImage" src={item} alt="no cat :(" />
            <button className="fav-cat-button" onClick={() => onDelete(String(index+1))}><b>Remove cat</b></button>
            <ToastContainer />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
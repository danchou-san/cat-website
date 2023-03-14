import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { neutral } from '../../reducers/appSlice';
import { favorites } from '../../reducers/favoritesSlice';
import { getFavourites } from '../../api/favorites';
import { RootState } from '../../store';
import './Favorites.scss';

const Favorites = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(neutral());

    getFavourites()
      .then(data => dispatch(favorites(data)))
  }, [dispatch]);

  const favCats = useSelector((state: RootState) => state.favorites.favorites);

  return (
    <div className="content">
      <h1>My favorite cats</h1>
      <div className="favorite-cats">
        {favCats.map((item) => (
          <div className="cat-div">
            <img src={item} alt="no cat :(" />
            <button className="fav-cat-button">Remove cat</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { neutral } from '../../reducers/appSlice';
import { imageUrl } from '../../reducers/gallerySlice';
import './Gallery.scss';
import { getRandomCat, addToFavorites } from '../../api/gallery';
import { RootState } from '../../store';

const Gallery = () => {
  const dispatch = useDispatch();
  const catImage = useSelector((state: RootState) => state.gallery.randomImageUrl);

  useEffect(() => {
    dispatch(neutral());
  }, [dispatch]);

  const fetchCat = () => {
    getRandomCat()
      .then(data => dispatch(imageUrl(data[0].url)));
  };

  const onFavorites = () => {
    addToFavorites(catImage);
  };

  let imageDiv;

  if (catImage) {
    imageDiv = 
    <>
      <img className="catImage" src={catImage} alt="No cat :("/>
      <br />
      <br />
      <div className="optionsDiv">
        <button className="button">I like this</button>
        <button className="button">I dislike this</button>
        <button className="button" onClick={() => onFavorites()}>Favorite</button>
      </div>
    </>
  }

  return (
    <div className="content">
      <h1>Cat Gallery</h1>
      <button className='button' onClick={() => fetchCat()}>Get a random cat!</button>
      <br />
      <br />
      {imageDiv}
    </div>
  );
};

export default Gallery;
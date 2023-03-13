import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { neutral } from '../../reducers/appSlice';
import { imageUrl } from '../../reducers/gallerySlice';
import './Gallery.scss';
import { getRandomCat } from '../../api/gallery';
import { RootState } from '../../store';

const Gallery = () => {
  const dispatch = useDispatch();

  dispatch(neutral());

  const fetchCat = () => {
    getRandomCat()
    .then(data => dispatch(imageUrl(data[0].url)));
  };

  const catImage = useSelector((state: RootState) => state.gallery.randomImageUrl);

  // console.log(process.env.SECRET_KEY);

  return (
    <div className="content">
      <h1>Cat Gallery</h1>
      <button className='button' onClick={() => fetchCat()}>Get a random cat!</button>
      <br />
      <br />
      <img className="catImage" src={catImage} alt="No cat :("/>
      <div className="optionsDiv">
        <button className="button">I like this</button>
        <button className="button">I dislike this</button>
        <button className="button">Favorite</button>
      </div>
    </div>
  );
};

export default Gallery;
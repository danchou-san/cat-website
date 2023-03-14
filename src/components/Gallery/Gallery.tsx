import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { neutral } from '../../reducers/appSlice';
import { imageUrl } from '../../reducers/gallerySlice';
import './Gallery.scss';
import { getRandomCat, addToFavorites } from '../../api/gallery';
import { RootState } from '../../store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Gallery = () => {
  const dispatch = useDispatch();
  const catImage = useSelector((state: RootState) => state.gallery.randomImageUrl);

  useEffect(() => {
    dispatch(neutral());
  }, [dispatch]);

  const fetchCat = async () => {
    await getRandomCat()
      .then(data => dispatch(imageUrl(data[0].url)));
  };

  const onFavorites = async () => {
    await addToFavorites(catImage);
    toast("Successfully favorited a cat!")
  };

  let imageDiv;

  if (catImage) {
    imageDiv = 
    <>
      <div className="randomCatDiv">
        <img className="catImage" src={catImage} alt="No cat :("/>
        <div className="optionsDiv">
          <button className="optionButton">I like this cat</button>
          <button className="optionButton">I dislike this cat</button>
          <button className="optionButton" onClick={() => onFavorites()}>Favorite</button>
        </div>
      </div>
    </>
  }

  return (
    <div className="content">
      <h1>Cat Gallery</h1>
      {imageDiv}
      <button className='button' onClick={() => fetchCat()}>Get a random cat!</button>
      <ToastContainer/>
    </div>
  );
};

export default Gallery;
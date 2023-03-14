import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { neutral } from '../../reducers/appSlice';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(neutral());
  }, [dispatch]);

  return (
    <div className='content'>
      <h1>Welcome to the Cat Website!</h1>
      <br />
      <br />
      Choose one of the fun <b>cat</b>ivities in the navigation bar!
    </div>
  );
};

export default Home;
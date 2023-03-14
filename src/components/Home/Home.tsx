import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { neutral } from '../../reducers/appSlice';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(neutral());
  }, [dispatch]);

  return (
    <div className='content'>
      <h1 className="welcome">Welcome to the Cat Website!</h1>
      <br />
      <p className="cativities">
        Choose one of the fun <b>cat</b>ivities in the navigation bar!
      </p>
    </div>
  );
};

export default Home;
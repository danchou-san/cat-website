import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { neutral } from '../../reducers/appSlice';

const About = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(neutral());
  }, [dispatch]);

  return (
    <div className="content">
      <p>A website about cats, that's it.</p>
    </div>
  );
};

export default About;
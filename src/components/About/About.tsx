import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { neutral } from '../../reducers/appSlice';

const About = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(neutral());
  }, [dispatch]);

  return (
    <div>
      I'm Chunsuke
    </div>
  );
};

export default About;
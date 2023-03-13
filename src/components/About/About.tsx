import React from 'react';
import { useDispatch } from 'react-redux';
import { neutral } from '../../reducers/appSlice';

const About = () => {
  const dispatch = useDispatch();
  dispatch(neutral());

  return (
    <div>
      I'm Chunsuke
    </div>
  );
};

export default About;
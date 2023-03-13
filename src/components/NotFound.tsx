import React from 'react';
import { useDispatch } from 'react-redux'
import { sad } from '../reducers/appSlice';

const NotFound = () => {
  const dispatch = useDispatch();

  dispatch(sad());

  return (
    <div>
      404 :(
    </div>
  );
};

export default NotFound;
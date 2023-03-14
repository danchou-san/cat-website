import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { sad } from '../reducers/appSlice';

const NotFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sad());
  }, [dispatch]);

  return (
    <div>
      404 :(
    </div>
  );
};

export default NotFound;
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { sad } from '../reducers/appSlice';

const NotFound = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sad());
  }, [dispatch]);

  return (
    <div className="content">
      <h1>404</h1>
      <p>Page not found :(</p>
    </div>
  );
};

export default NotFound;
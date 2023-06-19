import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

function Rockets() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <>
      <h2>Rockets</h2>
    </>
  );
}

export default Rockets;

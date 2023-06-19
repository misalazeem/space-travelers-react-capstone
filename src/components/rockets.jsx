import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import '../styles/rocket.css';
import Rocket from './rocket';

function Rockets() {
  const rocketList = useSelector((state) => state.rockets.Rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div className="rocket-container">
      {rocketList.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.image}
        />
      ))}
    </div>
  );
}

export default Rockets;

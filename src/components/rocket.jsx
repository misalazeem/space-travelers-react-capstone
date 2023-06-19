import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

function Rocket({
  id, name, description, image,
}) {
  const dispatch = useDispatch();

  const handleReserveRocket = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <div key={id} className="rocket">
      <img alt="rocket" className="rocket-image" src={image} />
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <button
          type="button"
          onClick={handleReserveRocket}
          className="rocket-button"
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;

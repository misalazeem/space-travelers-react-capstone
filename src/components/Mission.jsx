import React from 'react';
import PropTypes from 'prop-types';

function Mission({ id, name, description }) {
  return (
    <tr key={id}>
      <td><b>{name}</b></td>
      <td>{description}</td>
      <td><button type="button" className="btn-width">NOT A MEMBER</button></td>
      <td><button type="button" className="btn-join">JOIN MISSION</button></td>
    </tr>
  );
}

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;

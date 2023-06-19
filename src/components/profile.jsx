import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/profile.css';

function Profile() {
  const missionList = useSelector((state) => state.missions.Missions);
  const rocketList = useSelector((state) => state.rockets.Rockets);
  const joinedMissions = missionList.filter((mission) => mission.joined);
  const reservedRockets = rocketList.filter((rocket) => rocket.reserved);
  return (
    <div className="profile-section">
      <div className="profile-missions">
        <h2>My Missions</h2>
        <table className="mission-table">
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="profile-rockets">
        <h2>My Rockets</h2>
        <table className="mission-table">
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>{rocket.rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Profile;

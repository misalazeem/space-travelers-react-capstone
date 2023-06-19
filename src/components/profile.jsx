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
            {joinedMissions.length === 0
              && (
              <>
                <tr>
                  <td>No Missions Joined</td>
                </tr>
              </>
              )}
            {joinedMissions.map((mission) => (
              <tr className="profile-rows" key={mission.mission_id}>
                <td className="profile-columns">{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="profile-rockets">
        <h2>My Rockets</h2>
        <table className="mission-table">
          <tbody>
            {reservedRockets.length === 0
              && (
              <>
                <tr>
                  <td>No Rockets Reserved</td>
                </tr>
              </>
              )}
            {reservedRockets.map((rocket) => (
              <tr className="profile-rows" key={rocket.id}>
                <td className="profile-columns">{rocket.rocket_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Profile;

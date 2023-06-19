import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionSlice';

function Missions() {
  // const missionList = useSelector((state) => state.missions.Missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <>
      <h2>Missions</h2>
    </>
  );
}

export default Missions;

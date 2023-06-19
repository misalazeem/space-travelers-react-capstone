import { configureStore } from '@reduxjs/toolkit';
import missionSlice, { loadMissions } from './missions/missionSlice';

export const store = configureStore({
  reducer: {
    missions: missionSlice,
  },
});

const mission = { mission_id: '1', mission_name: 'Apollo 13', description: 'Mission to the Moon' };
store.dispatch(loadMissions(mission));

export default store;

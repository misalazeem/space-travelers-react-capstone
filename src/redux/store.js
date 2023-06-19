import { configureStore } from '@reduxjs/toolkit';
import missionSlice, { loadMissions } from './missions/missionSlice';
import rocketsSlice, { loadRockets } from './rockets/rocketsSlice';

export const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: rocketsSlice,
  },
});

const mission = {
  mission_id: '1',
  mission_name: 'Apollo 13',
  description: 'Mission to the Moon',
};
store.dispatch(loadMissions(mission));
const rocket = {
  id: '1',
  rocket_name: 'Apollo 13',
  description: 'Mission to the Moon',
  flickr_images: '/images/img.png',
};
store.dispatch(loadRockets(rocket));
export default store;

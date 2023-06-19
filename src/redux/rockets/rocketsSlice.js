import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rocketlist',
  initialState,
  reducers: {
    loadRockets: (state, action) => {
      const rocketid = action.payload.id;
      const rocketname = action.payload.rocket_name;
      const rocketdescription = action.payload.description;
      const images = action.payload.flickr_images;
      const rocket = {
        id: rocketid,
        rocket_name: rocketname,
        description: rocketdescription,
        flickr_images: images,
      };
      state.Rockets.push(rocket);
    },
  },
});

export const { loadRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;

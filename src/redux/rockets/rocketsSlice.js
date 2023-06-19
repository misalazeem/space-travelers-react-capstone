import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Rockets: [],
  isLoading: true,
};

export const fetchRockets = createAsyncThunk('rockets/', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch rockets');
  }
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.name,
          description: rocket.description,
          image: rocket.flickr_images[0],
        }));
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { loadRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;

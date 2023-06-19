import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Missions: [],
};

const missionSlice = createSlice({
  name: 'missionlist',
  initialState,
  reducers: {
    loadMissions: (state, action) => {
      const missionid = action.payload.mission_id;
      const missionname = action.payload.mission_name;
      const missiondescription = action.payload.description;
      const mission = {
        mission_id: missionid,
        mission_name: missionname,
        description: missiondescription,
      };
      state.Missions.push(mission);
    },
  },
});

export const { loadMissions } = missionSlice.actions;
export default missionSlice.reducer;

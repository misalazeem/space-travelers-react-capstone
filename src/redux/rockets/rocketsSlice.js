import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export const { actions, recuder } = rocketsSlice;
export default rocketsSlice.reducer;

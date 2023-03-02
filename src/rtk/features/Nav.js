/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  route: '',
};

const NavSlice = createSlice({
  name: 'Nav',
  initialState,
  reducers: {
    setRoute: (state, data) => {
      state.route = data.payload;
    },
  },
});
const NavReducer = NavSlice.reducer;
export default NavReducer;
export const NavActions = NavSlice.actions;

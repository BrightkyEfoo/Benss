/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  isDisplayed: false,
};

const DetailsViewSlice = createSlice({
  name: 'DetailsView',
  initialState,
  reducers: {
    setRoute: (state, data) => {
      state.route = data.payload;
    },
  },
});
const DetailsViewReducer = DetailsViewSlice.reducer;
export default DetailsViewReducer;
export const DetailsViewActions = DetailsViewSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { toursApi } from '../api/toursApi';

const initialState = {
   places: [],
   category: '',
};

const discoverSlice = createSlice({
   name: 'discover',
   initialState,
   reducers: {
      addCategory: (state, action) => {
         state.category = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addMatcher(toursApi.endpoints.getTours.matchFulfilled, (state, action) => {
         state.places = action.payload;
      });
   },
});

export const { addCategory } = discoverSlice.actions;

export default discoverSlice.reducer;

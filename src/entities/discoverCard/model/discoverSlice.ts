import { createSlice } from '@reduxjs/toolkit';
import { toursApi } from '../api/toursApi';
import { StateTypes } from './types';

const initialState: StateTypes = {
   places: [],
   category: 'getByPopular',
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

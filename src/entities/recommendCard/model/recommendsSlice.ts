import { createSlice } from '@reduxjs/toolkit';
import { recommendsApi } from '../api/recommendsApi';

import { StateTypes } from './types';

const initialState: StateTypes = {
   recommendedPlaces: [],
   pageSize: 12,
   currentPage: 1,
   totalPages: 0,
};

const recommendsSlice = createSlice({
   name: 'recommends',
   initialState,
   reducers: {
      setCurrentPage: (state, action) => {
         state.currentPage = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder.addMatcher(
         recommendsApi.endpoints.getRecommendsPlaces.matchFulfilled,
         (state, action) => {
            state.recommendedPlaces = action.payload.items;
            state.totalPages = action.payload.meta.total_pages;
            state.currentPage = action.payload.meta.current_page;
         }
      );
   },
});

export const { setCurrentPage } = recommendsSlice.actions;

export default recommendsSlice.reducer;

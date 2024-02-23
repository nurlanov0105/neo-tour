import { createSlice } from '@reduxjs/toolkit';
import { recommendsApi } from '../api/recommendsApi';

const initialState = {
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
            state.recommendedPlaces = action.payload.tripResponseList;
            state.totalPages = action.payload.pageSize;
            state.currentPage = action.payload.currentPage;
         }
      );
   },
});

export const { setCurrentPage } = recommendsSlice.actions;

export default recommendsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { recommendsApi } from '../api/recommendsApi';

const initialState = {
   recommendedPlaces: [],
   limit: 12,
   totalPages: 0,
   currentPage: 1,
};

const recommendsSlice = createSlice({
   name: 'recommends',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addMatcher(
         recommendsApi.endpoints.getRecommendsPlaces.matchFulfilled,
         (state, action) => {
            state.recommendedPlaces = action.payload;
            // const { total_pages, current_page } = action.payload.meta;
            // state.totalPages = total_pages;
            // state.currentPage = current_page;
         }
      );
   },
});

export const {} = recommendsSlice.actions;

export default recommendsSlice.reducer;

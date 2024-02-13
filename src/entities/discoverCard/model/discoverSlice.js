import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   cards: [],
   category: 'Popular',
};

const discoverSlice = createSlice({
   name: 'discover',
   initialState,
   reducers: {
      addCategory: (state, action) => {
         state.category = action.payload;
      },
   },
});

export const { addCategory } = discoverSlice.actions;

export default discoverSlice.reducer;

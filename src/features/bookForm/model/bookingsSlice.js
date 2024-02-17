import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   bookings: [],
};

const booksSlice = createSlice({
   name: 'bookings',
   initialState,
   reducers: {
      addTour: (state, action) => {
         state.bookings.push(action.payload);
      },
   },
});

export const { addTour } = booksSlice.actions;

export default booksSlice.reducer;

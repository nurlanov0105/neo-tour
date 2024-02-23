import { createSlice } from '@reduxjs/toolkit';
import { getBookingsFromLS } from '@/shared/utils/getBookingFromLS';

const { bookings } = getBookingsFromLS();

const initialState = {
   bookings,
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

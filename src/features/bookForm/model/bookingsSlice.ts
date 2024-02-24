import { createSlice } from '@reduxjs/toolkit';
import { DetailsPlaceType } from '@/shared/types';
import { bookingApi } from '../api/bookingApi';

// const { bookings } = getBookingsFromLS();

type StateProps = {
   bookings: any;
};

const initialState: StateProps = {
   bookings: [],
};

const booksSlice = createSlice({
   name: 'bookings',
   initialState,
   reducers: {
      addTour: (state, action) => {
         state.bookings.push(action.payload);
      },
      deleteBooking: (state, action) => {
         state.bookings = state.bookings.filter(
            (booking: DetailsPlaceType) => booking.tripId !== action.payload
         );
      },
   },
   extraReducers: (builder) => {
      builder.addMatcher(bookingApi.endpoints.getBookings.matchFulfilled, (state, action) => {
         state.bookings = action.payload.filter((book: any) => book.tripId !== 0);
      });
   },
});

export const { addTour, deleteBooking } = booksSlice.actions;

export default booksSlice.reducer;

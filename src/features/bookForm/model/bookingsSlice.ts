import { createSlice } from '@reduxjs/toolkit';
import { ReviewInterface } from '@/shared/types';

// type BookingsAction = {
//    id: number;
//    name: string;
//    image: string;
//    category: string;
//    description: string;
//    reviews: ReviewInterface[];

//    tel: string;
//    comment: string;
//    peopleCount: number;
// };

const initialState = {
   bookings: [],
};

const booksSlice = createSlice({
   name: 'bookings',
   initialState,
   reducers: {
      addTour: (state, action) => {
         // @ts-ignore

         state.bookings.push(action.payload);
      },
   },
});

export const { addTour } = booksSlice.actions;

export default booksSlice.reducer;

import BookForm from './ui/BookForm';
import bookingsSlice from './model/bookingsSlice';
import { addTour, deleteBooking } from './model/bookingsSlice';
import {
   bookingApi,
   useBookingTourMutation,
   useGetBookingsQuery,
   useDeleteBookingMutation,
} from './api/bookingApi';
export {
   BookForm,
   bookingsSlice,
   addTour,
   deleteBooking,
   bookingApi,
   useBookingTourMutation,
   useGetBookingsQuery,
   useDeleteBookingMutation,
};

import { RootState } from '@/app/appStore';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const bookingApi = createApi({
   reducerPath: 'bookingApi',
   baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL,
      prepareHeaders: (headers, { getState }) => {
         const token = (getState() as RootState).user.token;
         if (token) {
            headers.set('authorization', `Bearer ${token}`);
         }
         return headers;
      },
   }),
   tagTypes: ['Bookings'],
   endpoints: (builder) => ({
      getBookings: builder.query({
         query: () => {
            return {
               url: `bookings`,
               method: 'GET',
            };
         },
         providesTags: ['Bookings'],
      }),
      bookingTour: builder.mutation({
         query: (params) => {
            const {
               parentId,
               name,
               description,
               image,
               tel,
               comment,
               peopleCount,
               dateFrom,
               dateTo,
            } = params;
            return {
               url: `bookings`,
               method: 'POST',
               body: {
                  parentId,
                  name,
                  description,
                  image,
                  phoneNumber: tel,
                  wishesToTrip: comment,
                  userSum: peopleCount,
                  dateFrom,
                  dateTo,
               },
            };
         },
         invalidatesTags: ['Bookings'],
      }),
      deleteBooking: builder.mutation({
         query: (params) => {
            const { id } = params;
            return {
               url: `bookings/${id}`,
               method: 'DELETE',
            };
         },
         invalidatesTags: ['Bookings'],
      }),
   }),
});

export const { useBookingTourMutation, useGetBookingsQuery, useDeleteBookingMutation } = bookingApi;

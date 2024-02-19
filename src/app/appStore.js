import { configureStore } from '@reduxjs/toolkit';
import { recommendsApi, recommendsSlice } from '@/entities/recommendCard';
import { discoverSlice, toursApi } from '@/entities/discoverCard';
import { bookingsSlice } from '@/features/bookForm';
import { detailsApi } from '@/features/placeInfo';

export const store = configureStore({
   reducer: {
      discover: discoverSlice,
      recommends: recommendsSlice,
      [toursApi.reducerPath]: toursApi.reducer,
      [recommendsApi.reducerPath]: recommendsApi.reducer,
      [detailsApi.reducerPath]: detailsApi.reducer,
      bookings: bookingsSlice,
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         toursApi.middleware,
         recommendsApi.middleware,
         detailsApi.middleware
      ),
});

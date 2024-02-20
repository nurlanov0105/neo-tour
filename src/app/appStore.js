import { configureStore } from '@reduxjs/toolkit';
import { recommendsApi, recommendsSlice } from '@/entities/recommendCard';
import { discoverSlice, toursApi } from '@/entities/discoverCard';
import { bookingsSlice } from '@/features/bookForm';
import { detailsApi } from '@/features/placeInfo';
import { authApi, userSlice } from '@/features/auth';

export const store = configureStore({
   reducer: {
      user: userSlice,
      discover: discoverSlice,
      recommends: recommendsSlice,
      bookings: bookingsSlice,
      [toursApi.reducerPath]: toursApi.reducer,
      [recommendsApi.reducerPath]: recommendsApi.reducer,
      [detailsApi.reducerPath]: detailsApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         toursApi.middleware,
         recommendsApi.middleware,
         detailsApi.middleware,
         authApi.middleware
      ),
});

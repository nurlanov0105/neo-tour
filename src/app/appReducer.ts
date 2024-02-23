import { discoverSlice, toursApi } from '@/entities/discoverCard';
import { recommendsApi, recommendsSlice } from '@/entities/recommendCard';
import { authApi, userSlice } from '@/features/auth';
import { bookingsSlice } from '@/features/bookForm';
import { detailsApi } from '@/features/placeInfo';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
   user: userSlice,
   discover: discoverSlice,
   recommends: recommendsSlice,
   bookings: bookingsSlice,
   [toursApi.reducerPath]: toursApi.reducer,
   [recommendsApi.reducerPath]: recommendsApi.reducer,
   [detailsApi.reducerPath]: detailsApi.reducer,
   [authApi.reducerPath]: authApi.reducer,
});

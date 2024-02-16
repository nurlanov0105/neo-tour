import { configureStore } from '@reduxjs/toolkit';
import discoverSlice from '@/entities/discoverCard/model/discoverSlice';
import recommendsSlice from '@/entities/recommendCard/model/recommendsSlice';
import { toursApi } from '@/entities/discoverCard/api/toursApi';
import { recommendsApi } from '@/entities/recommendCard/api/recommendsApi';

export const store = configureStore({
   reducer: {
      discover: discoverSlice,
      recommends: recommendsSlice,
      [toursApi.reducerPath]: toursApi.reducer,
      [recommendsApi.reducerPath]: recommendsApi.reducer,
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(toursApi.middleware, recommendsApi.middleware),
});

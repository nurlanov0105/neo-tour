import { configureStore } from '@reduxjs/toolkit';
import discoverSlice from '@/entities/discoverCard/model/discoverSlice';
import recommendsSlice from '@/entities/recommendCard/model/recommendsSlice';
import { toursApi } from '@/entities/discoverCard/api/toursApi';
import { recommendsApi } from '@/entities/recommendCard/api/recommendsApi';
import { detailsApi } from '@/features/placeInfo/api/detailsApi';

export const store = configureStore({
   reducer: {
      discover: discoverSlice,
      recommends: recommendsSlice,
      [toursApi.reducerPath]: toursApi.reducer,
      [recommendsApi.reducerPath]: recommendsApi.reducer,
      [detailsApi.reducerPath]: detailsApi.reducer,
   },

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         toursApi.middleware,
         recommendsApi.middleware,
         detailsApi.middleware
      ),
});

import { configureStore } from '@reduxjs/toolkit';
import discoverSlice from '@/entities/discoverCard/model/discoverSlice';

export const store = configureStore({
   reducer: {
      discover: discoverSlice,
   },
});

import { configureStore } from '@reduxjs/toolkit';
import { recommendsApi } from '@/entities/recommendCard';
import { toursApi } from '@/entities/discoverCard';
import { detailsApi } from '@/features/placeInfo';
import { authApi } from '@/features/auth';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './appReducer';
import { bookingApi } from '@/features/bookForm';

export const store = configureStore({
   reducer: rootReducer,

   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
         toursApi.middleware,
         recommendsApi.middleware,
         detailsApi.middleware,
         authApi.middleware,
         bookingApi.middleware
      ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

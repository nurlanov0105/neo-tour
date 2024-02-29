import { CardType } from '@/shared/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetToursArgs } from '../model/types';
import { RootState } from '@/app/appStore';
const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const toursApi = createApi({
   reducerPath: 'toursApi',
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
   endpoints: (builder) => ({
      getTours: builder.query<CardType[], GetToursArgs>({
         keepUnusedDataFor: 0,
         query: ({ category }) => {
            return {
               url: `discover`,
               params: {
                  category,
               },
            };
         },
      }),
   }),
});

export const { useGetToursQuery } = toursApi;

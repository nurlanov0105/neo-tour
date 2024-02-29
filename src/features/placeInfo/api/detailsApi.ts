import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DetailsPlaceType } from '@/shared/types';
import { GetDetailsArgs } from '../model/types';
import { RootState } from '@/app/appStore';
const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const detailsApi = createApi({
   reducerPath: 'detailsApi',
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
      getPlaceDetails: builder.query<[DetailsPlaceType], GetDetailsArgs>({
         query: (params) => {
            const { id } = params;
            return {
               url: 'details',
               params: {
                  id,
               },
            };
         },
      }),
   }),
});

export const { useGetPlaceDetailsQuery } = detailsApi;

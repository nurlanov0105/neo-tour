import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetFetchData, GetRecommendsArgs } from '../model/types';
import { RootState } from '@/app/appStore';
const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const recommendsApi = createApi({
   reducerPath: 'recommendsApi',
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
      getRecommendsPlaces: builder.query<GetFetchData, GetRecommendsArgs>({
         keepUnusedDataFor: 0,
         query: (params) => {
            const { pageSize, currentPage } = params;
            return {
               url: `api/trips/getByRecommended?pageSize=${pageSize}&&currentPage=${currentPage}`,
            };
         },
      }),
   }),
});

export const { useGetRecommendsPlacesQuery } = recommendsApi;

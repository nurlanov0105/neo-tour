import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_TOURS_API_KEY;
const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const recommendsApi = createApi({
   reducerPath: 'recommendsApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({
      getRecommendsPlaces: builder.query({
         query: (params) => {
            const { limit } = params;
            return {
               url: 'api/trips/getByRecommended',
               // params: {
               //    limit,
               // },
            };
         },
      }),
   }),
});

export const { useGetRecommendsPlacesQuery } = recommendsApi;

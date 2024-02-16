import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_TOURS_API_KEY;
const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const toursApi = createApi({
   reducerPath: 'toursApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({
      getTours: builder.query({
         keepUnusedDataFor: 0,
         query: (params) => {
            const { category } = params;
            return {
               url: 'discover',
               params: {
                  category,
               },
            };
         },
      }),
   }),
});

export const { useGetToursQuery } = toursApi;

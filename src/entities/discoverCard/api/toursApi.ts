import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const toursApi = createApi({
   reducerPath: 'toursApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({
      getTours: builder.query({
         keepUnusedDataFor: 0,
         query: ({ category }) => {
            return `api/trips/${category}`;
         },
         // query: (category) => {
         //    return {
         //       url: 'api/trips',
         //       params: {
         //          [category]: category,
         //       },
         //    };
         // },
      }),
   }),
});

export const { useGetToursQuery } = toursApi;

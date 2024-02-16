import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_TOURS_API_KEY;
const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const detailsApi = createApi({
   reducerPath: 'detailsApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({
      getPlaceDetails: builder.query({
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

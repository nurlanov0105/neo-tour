import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const detailsApi = createApi({
   reducerPath: 'detailsApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({
      getPlaceDetails: builder.query({
         query: (params) => {
            const { id } = params;
            return {
               url: `api/trips/getTripById/${id}`,
            };
         },
      }),
   }),
});

export const { useGetPlaceDetailsQuery } = detailsApi;

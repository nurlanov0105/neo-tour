import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const recommendsApi = createApi({
   reducerPath: 'recommendsApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({
      getRecommendsPlaces: builder.query({
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

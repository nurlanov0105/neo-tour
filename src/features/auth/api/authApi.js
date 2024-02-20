import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({
      register: builder.mutation({
         query: (params) => {
            const { name: fullName, email, password } = params;
            return {
               url: 'register',
               method: 'POST',
               headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
               },
               body: {
                  fullName,
                  email,
                  password,
               },
            };
         },
      }),
      login: builder.mutation({
         query: (params) => {
            const { email, password } = params;
            return {
               url: 'auth',
               method: 'POST',
               headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
               },
               body: {
                  email,
                  password,
               },
            };
         },
      }),
   }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;

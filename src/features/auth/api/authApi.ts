import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = import.meta.env.VITE_TOURS_BASE_API_URL;

export const authApi = createApi({
   reducerPath: 'authApi',
   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
   endpoints: (builder) => ({
      register: builder.mutation({
         query: (params) => {
            const { firstName, lastName, email, userImage, password } = params;
            return {
               url: 'api/users/signUp',
               method: 'POST',
               // headers: {
               //    Accept: 'application/json',
               //    'Content-Type': 'application/json',
               // },
               body: {
                  firstName,
                  lastName,
                  email,
                  userImage,
                  password,
               },
            };
         },
      }),
      login: builder.mutation({
         query: (params) => {
            const { email, password } = params;
            return {
               url: 'api/users/signIn',
               method: 'POST',
               // headers: {
               //    Accept: 'application/json',
               //    'Content-Type': 'application/json',
               // },
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

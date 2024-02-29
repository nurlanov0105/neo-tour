import { getUserFromLS } from '@/shared/utils/getUserFromLS';
import { createSlice } from '@reduxjs/toolkit';
import { LoginApiResponse } from './types';

const { id, fullName, email, token } = getUserFromLS();

const initialState: LoginApiResponse = {
   id,
   fullName,
   token,
   email,
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser(state, action) {
         state.id = action.payload.id;
         state.fullName = action.payload.fullName;
         state.email = action.payload.email;
         state.token = action.payload.token;
      },
      removeUser(state) {
         state.id = 0;
         state.fullName = '';
         state.email = '';
         state.token = '';
      },
   },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

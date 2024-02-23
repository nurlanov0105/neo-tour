import { getUserFromLS } from '@/shared/utils/getUserFromLS';
import { createSlice } from '@reduxjs/toolkit';
import { LoginApiResponse } from './types';

const { id, fullName, email, token, role } = getUserFromLS();

const initialState: LoginApiResponse = {
   id,
   fullName,
   token,
   email,
   role,
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
         state.role = action.payload.role;
      },
      removeUser(state) {
         state.id = 0;
         state.fullName = '';
         state.email = '';
         state.token = '';
         state.role = '';
      },
   },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

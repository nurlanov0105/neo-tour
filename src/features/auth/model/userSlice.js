import { getUserFromLS } from '@/shared/utils/getUserFromLS';
import { createSlice } from '@reduxjs/toolkit';

const { fullName: name, email, id, token } = getUserFromLS();

const initialState = {
   name,
   email,
   token,
   id,
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setUser(state, action) {
         state.name = action.payload.data.fullName;
         state.email = action.payload.data.email;
         state.id = action.payload.data.id;
         state.token = action.payload.token;
      },
      removeUser(state) {
         state.name = null;
         state.email = null;
         state.token = null;
         state.id = null;
      },
   },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

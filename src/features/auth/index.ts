import LoginForm from './ui/loginForm/LoginForm';
import RegisterForm from './ui/registerForm/RegisterForm';
import PasswordCheck from './ui/passwordCheck/PasswordCheck';

import userSlice, { setUser, removeUser } from './model/userSlice';
import { authApi, useRegisterMutation, useLoginMutation } from './api/authApi';

export {
   LoginForm,
   RegisterForm,
   PasswordCheck,
   userSlice,
   setUser,
   removeUser,
   authApi,
   useRegisterMutation,
   useLoginMutation,
};

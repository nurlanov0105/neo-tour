import React from 'react';
import { LoginForm, setUser, useLoginMutation } from '@/features/auth';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();

   const [login, { isLoading, error }] = useLoginMutation();

   const handleSubmit = async (email, password) => {
      try {
         const result = await login({ email, password }).unwrap();
         if (result.error) {
            console.error(result.error);
         } else {
            const token = result.token;
            const { fullName, email, id } = result.data;
            const userJson = JSON.stringify({ fullName, email, id, token });
            localStorage.setItem('user', userJson);

            dispatch(setUser(result));
            const redirectTo = location.state?.from || '/';
            navigate(redirectTo);
         }
      } catch (error) {
         console.error(error);
      }
   };
   return (
      <div className={styles.content}>
         <h2>Логин</h2>
         <LoginForm handleSubmit={handleSubmit} />
      </div>
   );
};

export default Login;

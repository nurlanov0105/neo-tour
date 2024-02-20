import React from 'react';
import { LoginForm, setUser, useLoginMutation } from '@/features/auth';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();

   const [login, { isLoading, error }] = useLoginMutation();

   const handleSubmit = async (email, password) => {
      try {
         const result = await login({ email, password }).unwrap();
         if (result.error) {
            switch (result.error.status) {
               case 401:
                  toast.error('Пользователь не авторизован');
                  console.error(error);
                  break;
               case 500:
                  toast.error('Внутренняя ошибка сервера');
                  console.error(error);
                  break;
               default:
                  toast.error('Произошла ошибка');
                  console.error(error);
            }
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
         switch (error.status) {
            case 401:
               toast.error('Пользователь не авторизован');
               console.error(error);
               break;
            case 500:
               toast.error('Внутренняя ошибка сервера');
               console.error(error);
               break;
            default:
               toast.error('Произошла ошибка');
               console.error(error);
         }
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

import React, { useState } from 'react';
import { LoginForm, setUser, useLoginMutation } from '@/features/auth';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Modal } from '@/features/modal';
import { ProoveForm, TelForm } from '@/features/resetPassword';

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   const [resetModal, setResetModal] = useState(false);
   const [selectedTelForm, setSelectedTelForm] = useState(true);
   const [tel, setTel] = useState('');

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
            toast.success('Вы вошли в аккаунт!');
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

   const handleTel = (tel) => {
      setTel(tel);
      console.log(tel);
   };

   return (
      <div className={styles.content}>
         <h2>Логин</h2>
         <LoginForm handleSubmit={handleSubmit} setResetModal={setResetModal} />
         <Modal active={resetModal} setActive={setResetModal}>
            {selectedTelForm ? <TelForm handleTel={handleTel} /> : <ProoveForm />}
         </Modal>
      </div>
   );
};

export default Login;

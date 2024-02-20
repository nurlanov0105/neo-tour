import React, { useRef, useState } from 'react';
import { PasswordCheck, RegisterForm, useRegisterMutation } from '@/features/auth';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Register = () => {
   const navigate = useNavigate();

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [passSelected, setPassSelected] = useState(false);

   const [register, { isLoading, error }] = useRegisterMutation();

   const handleNextClick = (name, email) => {
      setName(name);
      setEmail(email);
      setPassSelected(!passSelected);
   };

   // const handleBackClick = () => setPassSelected(!passSelected);

   const handleRegister = async (password) => {
      try {
         const result = await register({ name, email, password }).unwrap();
         if (result.error) {
            switch (result.error.status) {
               case 401:
                  toast.error('Пользователь уже авторизован');
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
            navigate('/login');
         }
      } catch (error) {
         switch (error.status) {
            case 401:
               toast.error('Пользователь уже авторизован');
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
         <h2>Регистрация</h2>

         {passSelected ? (
            <PasswordCheck handlePsw={handleRegister} />
         ) : (
            <RegisterForm onNextClick={handleNextClick} />
         )}
         {/* {passSelected && (
            <span className={styles.content__link} onClick={handleBackClick}>
               Вернуться назад
            </span>
         )} */}
      </div>
   );
};

export default Register;

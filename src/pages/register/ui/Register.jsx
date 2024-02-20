import React, { useState } from 'react';
import { PasswordCheck, RegisterForm, useRegisterMutation } from '@/features/auth';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Register = () => {
   const navigate = useNavigate();

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [passSelected, setPassSelected] = useState(false);

   const [register, { isLoading, error }] = useRegisterMutation();

   const handleNextClick = (name, email) => {
      setName(name);
      setEmail(email);
      setPassSelected(true);
   };

   const handleRegister = async (password) => {
      try {
         const result = await register({ name, email, password }).unwrap();
         if (result.error) {
            console.error(result.error);
         } else {
            navigate('/login');
         }
      } catch (error) {
         console.error(error);
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
      </div>
   );
};

export default Register;

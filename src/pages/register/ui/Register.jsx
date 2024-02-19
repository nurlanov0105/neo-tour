import React from 'react';
import { PasswordCheck, RegisterForm } from '@/features/auth';
import styles from './styles.module.scss';

const Register = () => {
   return (
      <div className={styles.content}>
         <h2>Регистрация</h2>
         <RegisterForm />
         {/* <PasswordCheck /> */}
      </div>
   );
};

export default Register;

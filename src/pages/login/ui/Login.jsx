import React from 'react';
import { LoginForm } from '@/features/auth';
import styles from './styles.module.scss';

const Login = () => {
   return (
      <div className={styles.content}>
         <h2>Логин</h2>
         <LoginForm />
      </div>
   );
};

export default Login;

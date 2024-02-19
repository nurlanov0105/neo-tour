import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles.module.scss';

import eyeImg from '@/shared/assets/imgs/auth/eye.svg';
import eyeDisImg from '@/shared/assets/imgs/auth/eye-disable.svg';

const LoginForm = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <div className={styles.formWrapper}>
         <form onSubmit={handleSubmit} className={`${styles.form} ${styles.form_login}`}>
            <div className={styles.form__col}>
               <div className={styles.form__box}>
                  <input
                     className={styles.form__input}
                     type='text'
                     placeholder='Имя пользователя'
                  />
               </div>
               <div className={styles.form__box}>
                  <input
                     className={`${styles.form__input} ${styles.form__input_psw}`}
                     type='password'
                     placeholder='Пароль'
                  />
                  <img
                     className={`${styles.form__eye} ${styles.eyeChoosen}`}
                     src={eyeDisImg}
                     alt='eye isOpen'
                  />
                  <img className={styles.form__eye} src={eyeImg} alt='eye isOpen' />
               </div>
            </div>
            <Link className={styles.link}>Забыли пароль</Link>

            <button className={`btn ${styles.btn}`}>
               <span>Войти</span>
            </button>
         </form>
         <Link to='/register' className={styles.btnLight}>
            <span>Зарегистрироваться</span>
         </Link>
      </div>
   );
};

export default LoginForm;

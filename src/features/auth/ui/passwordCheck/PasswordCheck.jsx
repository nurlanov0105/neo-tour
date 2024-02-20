import React, { useCallback, useState } from 'react';
import styles from '../styles.module.scss';
import lockImg from '@/shared/assets/imgs/auth/lock.svg';
import eyeImg from '@/shared/assets/imgs/auth/eye.svg';
import eyeDisImg from '@/shared/assets/imgs/auth/eye-disable.svg';

const PasswordCheck = ({ handlePsw }) => {
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handlePswChange = (e) => setPassword(e.target.value);
   const handleConfirmPswChange = (e) => setConfirmPassword(e.target.value);

   const onSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         alert('Пароли не совпадают!');
      } else {
         handlePsw(password);
      }
   };

   return (
      <form className={styles.passForm} onSubmit={onSubmit}>
         <div className={styles.passForm__top}>
            <img src={lockImg} className={styles.passForm__img} alt='lock img' />
            <h3 className={styles.passForm__title}>Придумайте пароль</h3>
            <p className={styles.passForm__descr}>
               Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы и цифры.
            </p>
         </div>
         <div className={styles.passForm__col}>
            <div className={styles.form__box}>
               <input
                  className={`${styles.form__input} ${styles.form__input_psw}`}
                  type='password'
                  placeholder='Пароль'
                  value={password}
                  onChange={handlePswChange}
               />
               <img
                  className={`${styles.form__eye} ${styles.eyeChoosen}`}
                  src={eyeDisImg}
                  alt='eye isOpen'
               />
               <img className={styles.form__eye} src={eyeImg} alt='eye isOpen' />
            </div>
            <div className={styles.form__box}>
               <input
                  className={`${styles.form__input} ${styles.form__input_psw}`}
                  type='password'
                  placeholder='Повторите пароль'
                  value={confirmPassword}
                  onChange={handleConfirmPswChange}
               />
               <img
                  className={`${styles.form__eye} ${styles.eyeChoosen}`}
                  src={eyeDisImg}
                  alt='eye isOpen'
               />
               <img className={styles.form__eye} src={eyeImg} alt='eye isOpen' />
            </div>
         </div>
         <button className={`btn ${styles.btn}`}>
            <span>Далее</span>
         </button>
      </form>
   );
};

export default PasswordCheck;

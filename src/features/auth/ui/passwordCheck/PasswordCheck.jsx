import React from 'react';
import styles from '../styles.module.scss';
import lockImg from '@/shared/assets/imgs/auth/lock.svg';
import eyeImg from '@/shared/assets/imgs/auth/eye.svg';
import eyeDisImg from '@/shared/assets/imgs/auth/eye-disable.svg';

const PasswordCheck = () => {
   return (
      <div className={styles.passForm}>
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
      </div>
   );
};

export default PasswordCheck;

import React from 'react';
import styles from '../styles.module.scss';

const RegisterForm = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <div className={styles.formWrapper}>
         <form onSubmit={handleSubmit} className={`${styles.form} ${styles.form_register}`}>
            <div className={styles.form__col}>
               <div className={styles.form__box}>
                  <input
                     className={styles.form__input}
                     type='text'
                     placeholder='Имя пользователя'
                  />
               </div>
               <div className={styles.form__box}>
                  <input className={styles.form__input} type='email' placeholder='Почта' />
               </div>
            </div>

            <button className={`btn ${styles.btn}`}>
               <span>Далее</span>
            </button>
         </form>
      </div>
   );
};

export default RegisterForm;

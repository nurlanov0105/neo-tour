import React from 'react';
import styles from '../styles.module.scss';
import { useRegisterMutation } from '../../api/authApi';

const RegisterForm = ({ onNextClick }) => {
   const [name, setName] = React.useState('');
   const [email, setEmail] = React.useState('');

   const handleNameChange = (e) => setName(e.target.value);
   const handleEmailChange = (e) => setEmail(e.target.value);

   const onSubmit = (e) => {
      e.preventDefault();
      onNextClick(name, email);
   };

   return (
      <div className={styles.formWrapper}>
         <form className={`${styles.form} ${styles.form_register}`} onSubmit={onSubmit}>
            <div className={styles.form__col}>
               <div className={styles.form__box}>
                  <input
                     className={styles.form__input}
                     type='text'
                     placeholder='Имя пользователя'
                     value={name}
                     onChange={handleNameChange}
                  />
               </div>
               <div className={styles.form__box}>
                  <input
                     className={styles.form__input}
                     type='email'
                     placeholder='Почта'
                     value={email}
                     onChange={handleEmailChange}
                  />
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import styles from '../styles.module.scss';

import eyeImg from '@/shared/assets/imgs/auth/eye.svg';
import eyeDisImg from '@/shared/assets/imgs/auth/eye-disable.svg';

const LoginForm = ({ handleSubmit }) => {
   const [showPassword, setShowPassword] = useState(false);

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const validationSchema = Yup.object().shape({
      email: Yup.string().email('Неверный формат Email').required('Обязательное поле'),
      password: Yup.string()
         .min(8, 'Минимальная длина пароля - 8 символов')
         .required('Обязательное поле'),
   });

   const inputPswClassnames = `${styles.form__input} ${styles.form__input_psw}`;

   const getDisEyeClass = (isShown) => {
      return `${styles.form__eye} ${isShown ? '' : styles.eyeChoosen}`;
   };
   const getEyeClass = (isShown) => {
      return `${styles.form__eye} ${isShown ? styles.eyeChoosen : ''}`;
   };

   return (
      <div className={styles.formWrapper}>
         <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
               handleSubmit(values.email, values.password);
            }}>
            {({ errors, dirty }) => {
               const isButtonDisabled = () => !dirty || errors.email || errors.password;
               return (
                  <Form className={`${styles.form} ${styles.form_login}`}>
                     <div className={styles.form__col}>
                        <div className={styles.form__box}>
                           <Field
                              className={styles.form__input}
                              type='text'
                              name='email'
                              placeholder='Email пользователя'
                           />
                        </div>
                        <div className={styles.form__box}>
                           <Field
                              className={inputPswClassnames}
                              type={showPassword ? 'text' : 'password'}
                              name='password'
                              placeholder='Пароль'
                           />
                           <img
                              className={getDisEyeClass(showPassword)}
                              src={eyeDisImg}
                              alt='eye isOpen'
                              onClick={toggleShowPassword}
                           />
                           <img
                              className={getEyeClass(showPassword)}
                              src={eyeImg}
                              alt='eye isOpen'
                              onClick={toggleShowPassword}
                           />
                        </div>
                     </div>
                     <Link className={styles.link}>Забыли пароль</Link>

                     <button
                        className={`btn ${styles.btn}`}
                        type='submit'
                        disabled={isButtonDisabled()}>
                        <span>Войти</span>
                     </button>
                  </Form>
               );
            }}
         </Formik>
         <Link to='/register' className={styles.btnLight}>
            <span>Зарегистрироваться</span>
         </Link>
      </div>
   );
};

export default LoginForm;

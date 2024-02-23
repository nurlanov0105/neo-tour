import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import styles from '../styles.module.scss';

import eyeImg from '@/shared/assets/imgs/auth/eye.svg';
import eyeDisImg from '@/shared/assets/imgs/auth/eye-disable.svg';

type Props = {
   handleSubmit: (email: string, password: string) => void;
   setResetModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const validationSchema = Yup.object().shape({
   email: Yup.string().email('Неверный формат Email').required('Обязательное поле'),
   password: Yup.string()
      .min(8, 'Минимальная длина пароля - 8 символов')
      .required('Обязательное поле'),
});

const LoginForm: FC<Props> = ({ handleSubmit, setResetModal }) => {
   const [showPassword, setShowPassword] = useState<boolean>(false);

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };

   const inputPswClassnames = `${styles.form__input} ${styles.form__input_psw}`;

   const getDisEyeClass = (isShown: boolean) => {
      return `${styles.form__eye} ${isShown ? '' : styles.eyeChoosen}`;
   };
   const getEyeClass = (isShown: boolean) => {
      return `${styles.form__eye} ${isShown ? styles.eyeChoosen : ''}`;
   };

   const handleActiveModal = () => setResetModal(true);

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
                     <span className={styles.link} onClick={handleActiveModal}>
                        Забыли пароль
                     </span>

                     <button
                        className={`btn ${styles.btn}`}
                        type='submit'
                        disabled={!!isButtonDisabled()}>
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

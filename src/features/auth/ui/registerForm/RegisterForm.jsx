import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../styles.module.scss';

const validationSchema = Yup.object({
   name: Yup.string().required('Обязательное поле'),
   email: Yup.string().email('Неверный формат электронной почты').required('Обязательное поле'),
});

const RegisterForm = ({ onNextClick }) => {
   return (
      <div className={styles.formWrapper}>
         <Formik
            initialValues={{
               name: '',
               email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
               onNextClick(values.name, values.email);
            }}>
            {({ errors, dirty }) => {
               const isButtonDisabled = () => !dirty || errors.name || errors.email;

               return (
                  <Form className={`${styles.form} ${styles.form_register}`}>
                     <div className={styles.form__col}>
                        <div className={styles.form__box}>
                           <Field
                              className={styles.form__input}
                              type='text'
                              name='name'
                              placeholder='Имя пользователя'
                           />
                        </div>
                        <div className={styles.form__box}>
                           <Field
                              className={styles.form__input}
                              type='email'
                              name='email'
                              placeholder='Почта'
                           />
                        </div>
                     </div>

                     <button
                        className={`btn ${styles.btn}`}
                        type='submit'
                        disabled={isButtonDisabled()}>
                        <span>Далее</span>
                     </button>
                  </Form>
               );
            }}
         </Formik>
      </div>
   );
};

export default RegisterForm;

import { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import styles from '../styles.module.scss';

const validationSchema = Yup.object({
   firstName: Yup.string().required('Обязательное поле'),
   lastName: Yup.string().required('Обязательное поле'),
   email: Yup.string().email('Неверный формат электронной почты').required('Обязательное поле'),
});

type Props = {
   onNextClick: (firstName: string, lastName: string, email: string, userImage: string) => void;
};

const RegisterForm: FC<Props> = ({ onNextClick }) => {
   return (
      <div className={styles.formWrapper}>
         <Formik
            initialValues={{
               firstName: '',
               lastName: '',
               email: '',
               userImage: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
               onNextClick(values.firstName, values.lastName, values.email, values.userImage);
            }}>
            {({ errors, dirty }) => {
               const isButtonDisabled = () =>
                  !dirty || errors.firstName || errors.lastName || errors.email;

               return (
                  <Form className={`${styles.form} ${styles.form_register}`}>
                     <div className={styles.form__col}>
                        <div className={styles.form__box}>
                           <Field
                              className={styles.form__input}
                              type='text'
                              name='firstName'
                              placeholder='Имя'
                           />
                        </div>
                        <div className={styles.form__box}>
                           <Field
                              className={styles.form__input}
                              type='text'
                              name='lastName'
                              placeholder='Фамилия'
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
                        <div className={styles.form__box}>
                           <Field
                              className={styles.form__input}
                              type='file'
                              name='userImage'
                              accept='image/*'
                           />
                        </div>
                     </div>

                     <button
                        className={`btn ${styles.btn}`}
                        type='submit'
                        disabled={!!isButtonDisabled()}>
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

import { FC, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styles from '../styles.module.scss';
import lockImg from '@/shared/assets/imgs/auth/lock.svg';
import eyeImg from '@/shared/assets/imgs/auth/eye.svg';
import eyeDisImg from '@/shared/assets/imgs/auth/eye-disable.svg';

const validationSchema = Yup.object({
   password: Yup.string()
      .min(8, 'Пароль должен содержать не менее 8 символов')
      .required('Обязательное поле'),
   confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Пароли должны совпадать')
      .required('Обязательное поле'),
});

type Props = {
   handlePsw: (password: string) => void;
};

const PasswordCheck: FC<Props> = ({ handlePsw }) => {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfPassword, setShowConfPassword] = useState(false);

   const toggleShowPassword = () => {
      setShowPassword(!showPassword);
   };
   const toggleShowConfPassword = () => {
      setShowConfPassword(!showConfPassword);
   };

   const inputPswClassnames = `${styles.form__input} ${styles.form__input_psw}`;

   const getDisEyeClass = (isShown: boolean) => {
      return `${styles.form__eye} ${isShown ? '' : styles.eyeChoosen}`;
   };
   const getEyeClass = (isShown: boolean) => {
      return `${styles.form__eye} ${isShown ? styles.eyeChoosen : ''}`;
   };

   return (
      <Formik
         initialValues={{
            password: '',
            confirmPassword: '',
         }}
         validationSchema={validationSchema}
         onSubmit={(values) => {
            handlePsw(values.password);
         }}>
         {({ errors, dirty }) => {
            const isButtonDisabled = () => !dirty || errors.password || errors.confirmPassword;

            return (
               <Form className={styles.passForm}>
                  <div className={styles.passForm__top}>
                     <img src={lockImg} className={styles.passForm__img} alt='lock img' />
                     <h3 className={styles.passForm__title}>Придумайте пароль</h3>
                     <p className={styles.passForm__descr}>
                        Минимальная длина — 8 символов. Для надежности пароль должен содержать буквы
                        и цифры.
                     </p>
                  </div>
                  <div className={styles.passForm__col}>
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
                     <div className={styles.form__box}>
                        <Field
                           className={inputPswClassnames}
                           type={showConfPassword ? 'text' : 'password'}
                           name='confirmPassword'
                           placeholder='Повторите пароль'
                        />
                        <img
                           className={getDisEyeClass(showConfPassword)}
                           src={eyeDisImg}
                           alt='eye isOpen'
                           onClick={toggleShowConfPassword}
                        />
                        <img
                           className={getEyeClass(showConfPassword)}
                           src={eyeImg}
                           alt='eye isOpen'
                           onClick={toggleShowConfPassword}
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
   );
};

export default PasswordCheck;

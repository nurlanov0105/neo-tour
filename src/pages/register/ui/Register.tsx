import { FC, useState } from 'react';
import { PasswordCheck, RegisterForm, useRegisterMutation } from '@/features/auth';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register: FC = () => {
   const navigate = useNavigate();

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [userImage, setUserImage] = useState('');

   const [passSelected, setPassSelected] = useState(false);

   const [register] = useRegisterMutation();

   const handleNextClick = (
      firstName: string,
      lastName: string,
      email: string,
      userImage: string
   ) => {
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
      setUserImage(userImage);
      setPassSelected(!passSelected);
   };

   // const handleBackClick = () => setPassSelected(!passSelected);

   const handleRegister = async (password: string) => {
      try {
         const result = await register({
            firstName,
            lastName,
            email,
            userImage,
            password,
         }).unwrap();

         if (result.status) {
            switch (result.status) {
               case 403:
                  toast.error('Пользователь уже авторизован');
                  console.error(result);
                  break;
               case 404:
                  toast.error('Пользователь не найден');
                  console.error(result);
                  break;
               case 409:
                  toast.error('Конфликт');
                  console.error(result);
                  break;
               case 500:
                  toast.error('Внутренняя ошибка сервера');
                  console.error(result);
                  break;
               default:
                  toast.error('Произошла ошибка');
                  console.error(result);
            }
         } else {
            navigate('/login');
            toast.success('Вы зарегистрировались!');
         }
      } catch (error) {
         // @ts-ignore
         switch (error.status) {
            case 403:
               toast.error('Доступ запрещен');
               console.error(error);
               break;
            case 404:
               toast.error('Пользователь не найден');
               console.error(error);
               break;
            case 409:
               toast.error('Пользователь уже авторизован');
               console.error(error);
               break;
            case 500:
               toast.error('Внутренняя ошибка сервера');
               console.error(error);
               break;
            default:
               toast.error('Произошла ошибка');
               console.error(error);
         }
      }
   };

   return (
      <div className={styles.content}>
         <h2>Регистрация</h2>

         {passSelected ? (
            <PasswordCheck handlePsw={handleRegister} />
         ) : (
            <RegisterForm onNextClick={handleNextClick} />
         )}
         {/* {passSelected && (
            <span className={styles.content__link} onClick={handleBackClick}>
               Вернуться назад
            </span>
         )} */}
      </div>
   );
};

export default Register;

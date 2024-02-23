import { FC, useState } from 'react';
import { LoginForm, setUser, useLoginMutation } from '@/features/auth';
import styles from './styles.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Modal } from '@/features/modal';
import { ProoveForm, TelForm } from '@/features/resetPassword';
import { useAppDispatch } from '@/app/appStore';

const Login: FC = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   const [resetModal, setResetModal] = useState(false);
   const [selectedTelForm, setSelectedTelForm] = useState(true);

   const [login] = useLoginMutation();

   const handleSubmit = async (email: string, password: string) => {
      try {
         const result = await login({ email, password }).unwrap();

         if (result.error) {
            switch (result.status) {
               case 403:
                  toast.error('Доступ запрещен');
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
            const { userId, fullName, email, token, role } = result;
            const userJson = JSON.stringify({ userId, fullName, email, token, role });
            localStorage.setItem('user', userJson);

            dispatch(setUser(result));
            const redirectTo = location.state?.from || '/';
            navigate(redirectTo);
            toast.success('Вы вошли в аккаунт!');
         }
      } catch (error) {
         //@ts-ignore
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
               toast.error('Конфликт');
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
         <h2>Логин</h2>
         <LoginForm handleSubmit={handleSubmit} setResetModal={setResetModal} />
         <Modal active={resetModal} setActive={setResetModal}>
            {selectedTelForm ? <TelForm setSelectedTelForm={setSelectedTelForm} /> : <ProoveForm />}
         </Modal>
      </div>
   );
};

export default Login;

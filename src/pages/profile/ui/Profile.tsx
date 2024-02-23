import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import arrowLeftImg from '@/shared/assets/imgs/profile/arrow-left.svg';
import { Navbar } from '@/widgets/navbar';
import { Modal } from '@/features/modal';
import { RemoveUser } from '@/features/removeUser';
import { useAppDispatch } from '@/app/appStore';
import { removeUser } from '@/features/auth';
import { BookingsCard } from '@/features/bookingsCard';

const Profile: FC = () => {
   const dispatch = useAppDispatch();
   const [modalAcitve, setModalActive] = useState<boolean>(false);
   const handleSignout = () => {
      localStorage.removeItem('user');
      dispatch(removeUser());
      setModalActive(!modalAcitve);
   };

   const toggleModal = () => {
      setModalActive(!modalAcitve);
   };

   return (
      <main className={styles.profile}>
         <Navbar toggleModal={toggleModal} />
         <div className={styles.profile__content}>
            <div className={styles.profile__top}>
               <Link to='/' className={styles.profile__btn}>
                  <img src={arrowLeftImg} alt='arrow-left' />
                  <span>Назад</span>
               </Link>
               <h2 className={styles.profile__title}>Забронированные туры</h2>
            </div>
            <div className={styles.profile__list}>
               {[...Array(5)].map((_: any, i: number) => (
                  <BookingsCard
                     key={i}
                     name='Nurs'
                     tripImage='Test'
                     description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, aut?'
                  />
               ))}
            </div>
         </div>

         <Modal active={modalAcitve} setActive={setModalActive}>
            <RemoveUser toggleModal={toggleModal} handleSignout={handleSignout} />
         </Modal>
      </main>
   );
};

export default Profile;

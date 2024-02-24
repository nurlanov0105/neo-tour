import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { deleteBooking, useDeleteBookingMutation, useGetBookingsQuery } from '@/features/bookForm';
import { removeUser } from '@/features/auth';

import { Navbar } from '@/widgets/navbar';
import { RemoveUser } from '@/features/removeUser';
import { BookingsCard } from '@/features/bookingsCard';
import { Modal } from '@/features/modal';

import { toast } from 'react-toastify';
import styles from './styles.module.scss';
import arrowLeftImg from '@/shared/assets/imgs/profile/arrow-left.svg';
import { DetailsPlaceType } from '@/shared/types';
import { UserPanel } from '@/features/userPanel';

const Profile: FC = () => {
   const dispatch = useAppDispatch();
   const [modalAcitve, setModalActive] = useState<boolean>(false);
   const [navbarActive, setNavBarActive] = useState<boolean>(false);
   useGetBookingsQuery({});

   const [deleteBookingApi] = useDeleteBookingMutation();
   const bookings = useAppSelector((state) => state.bookings.bookings);

   const toggleNavBar = () => {
      setNavBarActive(!navbarActive);
   };

   const handleSignout = () => {
      localStorage.removeItem('user');
      dispatch(removeUser());
      setModalActive(!modalAcitve);
   };

   const toggleModal = () => {
      setModalActive(!modalAcitve);
   };

   const handleDeleteClick = async (tripId: number) => {
      try {
         dispatch(deleteBooking(tripId));
         const result = await deleteBookingApi({ tripId });

         if (result) {
            toast.success('Tour deleted!');
         }
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <main className={styles.profile}>
         <Navbar
            toggleModal={toggleModal}
            navbarActive={navbarActive}
            toggleNavBar={toggleNavBar}
         />
         <div className={styles.profile__content}>
            <div className={styles.profile__user} onClick={toggleNavBar}>
               <UserPanel isReverse={true} />
            </div>
            <div className={styles.profile__top}>
               <Link to='/' className={styles.profile__btn}>
                  <img src={arrowLeftImg} alt='arrow-left' />
                  <span>Назад</span>
               </Link>
               <h2 className={styles.profile__title}>Забронированные туры</h2>
            </div>

            <div className={styles.profile__list}>
               {bookings.map((bookedTour: DetailsPlaceType) => (
                  <BookingsCard
                     key={bookedTour.tripId}
                     tripId={bookedTour.tripId}
                     name={bookedTour.name}
                     tripImage={bookedTour.tripImage}
                     description={bookedTour.description}
                     handleDeleteClick={handleDeleteClick}
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

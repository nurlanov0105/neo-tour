import { useState } from 'react';

import { CommonSection } from '@/features/commonSection';
import { PlaceInfo } from '@/features/placeInfo';
import { Modal } from '@/features/modal';

import styles from './styles.module.scss';
import { BookForm } from '@/features/bookForm';
import { useParams } from 'react-router-dom';
import { useGetPlaceDetailsQuery } from '@/features/placeInfo/api/detailsApi';
import { BookedAlert, NotBookedAlert } from '@/entities/alerts';
import { useSelector } from 'react-redux';
import DetailsSkeleton from '@/shared/ui/detailsSkeleton/DetailsSkeleton';

const DetailsPlace = () => {
   const { id } = useParams();
   const { data, isLoading } = useGetPlaceDetailsQuery({ id });
   const bookings = useSelector((state) => state.bookings.bookings);

   const [modalAcitve, setModalActive] = useState(false);
   const [bookedAlert, setBookedAlert] = useState(false);
   const [notBookedAlert, setNotBookedAlert] = useState(false);

   const onBtnBook = () => {
      const isBooked = bookings.some((book) => book.id === data[0].id);
      if (isBooked) {
         setNotBookedAlert(true);
      } else {
         setModalActive(true);
      }
   };

   return isLoading ? (
      <DetailsSkeleton />
   ) : (
      <>
         <CommonSection bgImg={data[0].image} />
         <div className={styles.info}>
            <PlaceInfo
               onBtnBook={onBtnBook}
               name={data[0].name}
               description={data[0].description}
               detailsId={data[0].id}
               image={data[0].image}
               category={data[0].category}
               reviews={data[0].reviews}
            />
         </div>
         <Modal active={modalAcitve} setActive={setModalActive}>
            <BookForm data={data[0]} setActive={setModalActive} setBookedAlert={setBookedAlert} />
         </Modal>

         {/* Alerts */}
         <Modal active={bookedAlert} setActive={setBookedAlert}>
            <BookedAlert setBookedAlert={setBookedAlert} />
         </Modal>
         <Modal active={notBookedAlert} setActive={setNotBookedAlert}>
            <NotBookedAlert setNotBookedAlert={setNotBookedAlert} />
         </Modal>
      </>
   );
};

export default DetailsPlace;

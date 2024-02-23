import { useEffect, useState } from 'react';

import { CommonSection } from '@/features/commonSection';
import { PlaceInfo, useGetPlaceDetailsQuery } from '@/features/placeInfo';
import { Modal } from '@/features/modal';

import { BookForm } from '@/features/bookForm';
import { useParams } from 'react-router-dom';
import { BookedAlert, NotBookedAlert } from '@/entities/alerts';
import DetailsSkeleton from '@/shared/ui/detailsSkeleton/DetailsSkeleton';
import { useAppSelector } from '@/app/appStore';
import { BookedCardType } from '@/shared/types';

const DetailsPlace = () => {
   const { id } = useParams();
   const { data, isLoading, error } = useGetPlaceDetailsQuery({ id });
   const bookings = useAppSelector((state) => state.bookings.bookings);

   const [modalAcitve, setModalActive] = useState<boolean>(false);
   const [bookedAlert, setBookedAlert] = useState<boolean>(false);
   const [notBookedAlert, setNotBookedAlert] = useState<boolean>(false);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const onBtnBook = () => {
      const isBooked = bookings.some((book: BookedCardType) => book.tripId === data?.tripId);
      if (isBooked) {
         setNotBookedAlert(true);
      } else {
         setModalActive(true);
      }
   };

   if (error) {
      console.log(error);
      return (
         <h2>
            {/* @ts-ignore */}
            Ошибка при запросе данных. {error.status}
         </h2>
      );
   }

   return isLoading ? (
      <DetailsSkeleton />
   ) : data ? (
      <main>
         <CommonSection tripImage={data.tripImage} />
         <div>
            <PlaceInfo
               onBtnBook={onBtnBook}
               name={data.name}
               description={data.description}
               tripId={data.tripId}
               tripImage={data.tripImage}
               place={data.place}
               commentResponse={data.commentResponse}
            />
         </div>
         <Modal active={modalAcitve} setActive={setModalActive}>
            <BookForm data={data} setActive={setModalActive} setBookedAlert={setBookedAlert} />
         </Modal>

         {/* Alerts */}
         <Modal active={bookedAlert} setActive={setBookedAlert}>
            <BookedAlert setBookedAlert={setBookedAlert} />
         </Modal>
         <Modal active={notBookedAlert} setActive={setNotBookedAlert}>
            <NotBookedAlert setNotBookedAlert={setNotBookedAlert} />
         </Modal>
      </main>
   ) : (
      ''
   );
};

export default DetailsPlace;

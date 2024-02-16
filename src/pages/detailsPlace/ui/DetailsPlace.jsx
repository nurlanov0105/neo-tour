import { useState } from 'react';

import { CommonSection } from '@/features/commonSection';
import { PlaceInfo } from '@/features/placeInfo';
import { Modal } from '@/features/modal';

import styles from './styles.module.scss';
import { BookForm } from '@/features/bookForm';
import { useParams } from 'react-router-dom';
import { useGetPlaceDetailsQuery } from '@/features/placeInfo/api/detailsApi';

const DetailsPlace = () => {
   const { id } = useParams();

   const { data, isLoading } = useGetPlaceDetailsQuery({ id });

   const [modalAcitve, setModalActive] = useState(false);
   const onBtnBook = () => {
      setModalActive(true);
   };
   return isLoading ? (
      <h2>Загрузка..</h2>
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
            <BookForm setActive={setModalActive} />
         </Modal>
      </>
   );
};

export default DetailsPlace;

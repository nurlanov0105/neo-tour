import { useState } from 'react';

import { CommonSection } from '@/features/commonSection';
import { PlaceInfo } from '@/features/placeInfo';
import { Modal } from '@/features/modal';

import styles from './styles.module.scss';
import bgImg from '@/shared/assets/imgs/detailsPage/bg.jpg';
import { BookForm } from '@/features/bookForm';

const DetailsPage = () => {
   const [modalAcitve, setModalActive] = useState(false);
   const onBtnBook = () => {
      setModalActive(true);
   };
   return (
      <>
         <CommonSection bgImg={bgImg} />
         <div className={styles.info}>
            <PlaceInfo onBtnBook={onBtnBook} />
         </div>
         <Modal active={modalAcitve} setActive={setModalActive}>
            <BookForm setActive={setModalActive} />
         </Modal>
      </>
   );
};

export default DetailsPage;

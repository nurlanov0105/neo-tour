import { FC } from 'react';
import styles from './styles.module.scss';
import { UserPanel } from '@/features/userPanel';

import toursImg from '@/shared/assets/imgs/profile/toursIcon.svg';
import arrowImg from '@/shared/assets/imgs/profile/arrow-right.svg';
import exitImg from '@/shared/assets/imgs/profile/exit.svg';

type Props = {
   toggleModal: () => void;
};

const Navbar: FC<Props> = ({ toggleModal }) => {
   const className = `${styles.navbar__item} ${styles.navbar__item_active}`;

   return (
      <nav className={styles.navbar}>
         <div className={styles.navbar__top}>
            <UserPanel isReverse={true} />
            <ul className={styles.navbar__list}>
               <li className={className}>
                  <div className={styles.navbar__box}>
                     <img src={toursImg} alt='tours img' />
                     <span>Забронированные туры</span>
                  </div>
                  <img src={arrowImg} className={styles.navbar__arrow} alt='arrow right' />
               </li>
               <li className={styles.navbar__item} onClick={toggleModal}>
                  <div className={styles.navbar__box}>
                     <img src={exitImg} alt='exit img' />
                     <span>Выйти</span>
                  </div>
                  <img src={arrowImg} className={styles.navbar__arrow} alt='arrow right' />
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;

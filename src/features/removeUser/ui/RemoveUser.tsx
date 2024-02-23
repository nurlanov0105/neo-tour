import exitImg from '@/shared/assets/imgs/profile/exit.svg';
import styles from './styles.module.scss';
import { FC } from 'react';

type Props = {
   toggleModal: () => void;
   handleSignout: () => void;
};

const RemoveUser: FC<Props> = ({ toggleModal, handleSignout }) => {
   return (
      <div className={styles.box}>
         <img src={exitImg} alt='trash' className={styles.box__img} />
         <h4 className={styles.box__title}>Вы действительно хотите выйти?</h4>
         <div className={styles.box__btns}>
            <button
               onClick={handleSignout}
               className={`${styles.box__btn} ${styles.box__btn_active}`}>
               Выйти
            </button>
            <button className={styles.box__btn} onClick={toggleModal}>
               Отмена
            </button>
         </div>
      </div>
   );
};

export default RemoveUser;

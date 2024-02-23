import trashImg from '@/shared/assets/imgs/profile/trash.svg';
import styles from './styles.module.scss';
import { FC } from 'react';

type Props = {
   toggleModal: () => void;
   handleSignout: () => void;
};

const RemoveUser: FC<Props> = ({ toggleModal, handleSignout }) => {
   return (
      <div className={styles.box}>
         <img src={trashImg} alt='trash' className={styles.box__img} />
         <h4 className={styles.box__title}>Вы действительно хотите удалить данный товар?</h4>
         <div className={styles.box__btns}>
            <button
               onClick={handleSignout}
               className={`${styles.box__btn} ${styles.box__btn_active}`}>
               Удалить
            </button>
            <button className={styles.box__btn} onClick={toggleModal}>
               Отмена
            </button>
         </div>
      </div>
   );
};

export default RemoveUser;

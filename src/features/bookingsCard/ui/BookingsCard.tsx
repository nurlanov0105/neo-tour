import { FC } from 'react';
import styles from './styles.module.scss';
type Props = {
   name: string;
   tripImage: string;
   description: string;
};

const BookingsCard: FC<Props> = ({ name, tripImage, description }) => {
   return (
      <div className={styles.card}>
         <img src={tripImage} className={styles.card__img} alt='card img' />
         <div className={styles.card__box}>
            <h4 className={styles.card__name}>{name}</h4>
            <p className={styles.card__descr}>{description}</p>
         </div>

         <button>Отменить тур</button>
      </div>
   );
};

export default BookingsCard;

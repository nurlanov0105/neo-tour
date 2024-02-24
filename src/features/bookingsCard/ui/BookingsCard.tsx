import { FC } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
type Props = {
   tripId: number;
   name: string;
   tripImage: string;
   description: string;
   handleDeleteClick: (tripId: number) => void;
};

const BookingsCard: FC<Props> = ({ tripId, name, tripImage, description, handleDeleteClick }) => {
   const className = `btn ${styles.btn}`;

   const onDelete = () => {
      handleDeleteClick(tripId);
   };

   return (
      <div className={styles.card}>
         <Link to={`/details-place/${tripId}`} className={styles.card__content}>
            <img src={tripImage} className={styles.card__img} alt='card img' />

            <div className={styles.card__box}>
               <h4 className={styles.card__name}>{name}</h4>
               <p className={styles.card__descr}>{description}</p>
            </div>
         </Link>

         <button onClick={onDelete} className={className}>
            <span>Отменить тур</span>
         </button>
      </div>
   );
};

export default BookingsCard;

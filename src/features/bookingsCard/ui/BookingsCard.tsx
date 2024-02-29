import { FC } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
type Props = {
   id: number;
   parentId: number;
   name: string;
   image: string;
   description: string;
   handleDeleteClick: (id: number, parentId: number) => void;
};

const BookingsCard: FC<Props> = ({ id, parentId, name, image, description, handleDeleteClick }) => {
   const className = `btn ${styles.btn}`;

   const onDelete = () => {
      handleDeleteClick(id, parentId);
   };

   return (
      <div className={styles.card}>
         <Link to={`/details/${parentId}`} className={styles.card__content}>
            <img src={image} className={styles.card__img} alt='card img' />

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

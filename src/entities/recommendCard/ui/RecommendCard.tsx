import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Skeleton from '@/shared/ui/skeleton/Skeleton';
import { CardType } from '@/shared/types';

export const RecommendCard = ({ id, name, image, isLoading }: CardType) => {
   return isLoading ? (
      <div className={styles.card}>
         <Skeleton />
      </div>
   ) : (
      <Link
         to={`details/${id}`}
         className={styles.card}
         style={{ backgroundImage: `url(${image})` }}>
         <div>{name}</div>
      </Link>
   );
};

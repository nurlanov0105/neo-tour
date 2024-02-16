import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Skeleton from '@/shared/ui/skeleton/Skeleton';

export const DiscoverCard = ({ id, name, image, category, isLoading }) => {
   return isLoading ? (
      <div className={styles.card}>
         <Skeleton />
      </div>
   ) : (
      <Link
         to={`details-place/${id}`}
         className={styles.card}
         style={{ backgroundImage: `url(${image})` }}>
         <div></div>
         <div className={styles.title}>{name}</div>
      </Link>
   );
};

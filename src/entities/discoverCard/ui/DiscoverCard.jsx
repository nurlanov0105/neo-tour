import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import Skeleton from '@/shared/ui/skeleton/Skeleton';

export const DiscoverCard = ({ tripId, name, tripImage, isLoading }) => {
   return isLoading ? (
      <div className={styles.card}>
         <Skeleton />
      </div>
   ) : (
      <Link
         to={`details-place/${tripId}`}
         className={styles.card}
         style={{ backgroundImage: `url(${tripImage})` }}>
         <div></div>
         <div className={styles.title}>{name}</div>
      </Link>
   );
};

import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const DiscoverCard = ({ image }) => {
   return (
      <Link
         to={`details-place/id`}
         className={styles.card}
         style={{ backgroundImage: `url(${image})` }}>
         <div></div>
         <div className={styles.title}>Northern Mountain</div>
      </Link>
   );
};

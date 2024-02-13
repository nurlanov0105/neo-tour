import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const RecommendCard = ({ image }) => {
   return (
      <Link
         to='details-place/id'
         className={styles.card}
         style={{ backgroundImage: `url(${image})` }}>
         <div>Greenough, Montana</div>
      </Link>
   );
};

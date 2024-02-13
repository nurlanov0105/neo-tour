import bgImg from '@/shared/assets/imgs/detailsPage/bg.jpg';
import styles from './styles.module.scss';
import { CommonSection } from '@/features/commonSection';
import { PlaceInfo } from '@/features/placeInfo';

const DetailsPage = () => {
   return (
      <div>
         <CommonSection bgImg={bgImg} />
         <div className={styles.info}>
            <PlaceInfo />
         </div>
      </div>
   );
};

export default DetailsPage;

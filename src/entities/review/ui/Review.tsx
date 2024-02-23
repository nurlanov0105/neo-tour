import { ReviewInterface } from '@/shared/types';
import styles from './styles.module.scss';
import { FC } from 'react';

type Props = {
   review: ReviewInterface;
};

const Review: FC<Props> = ({ review }) => {
   const { userImage, fullName, comment } = review;
   return (
      <div className={styles.review}>
         <div className={styles.row}>
            <div className={styles.img}>
               <img src={userImage} alt='avatar img' />
            </div>
            <h6>{fullName}</h6>
         </div>
         <div className={styles.descr}>{comment}</div>
      </div>
   );
};

export default Review;

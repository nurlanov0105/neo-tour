import { ReviewInterface } from '@/shared/types';
import styles from './styles.module.scss';
import { FC } from 'react';

type Props = {
   reviewObj: ReviewInterface;
};

const Review: FC<Props> = ({ reviewObj }) => {
   const { authorImage, authorName, review } = reviewObj;
   return (
      <div className={styles.review}>
         <div className={styles.row}>
            <div className={styles.img}>
               <img src={authorImage} alt='avatar img' />
            </div>
            <h6>{authorName}</h6>
         </div>
         <div className={styles.descr}>{review}</div>
      </div>
   );
};

export default Review;

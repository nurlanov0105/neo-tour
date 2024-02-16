import styles from './styles.module.scss';

const Review = ({ reviewObj }) => {
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

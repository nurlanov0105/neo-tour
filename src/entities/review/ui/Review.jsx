import styles from './styles.module.scss';

const Review = ({ image }) => {
   return (
      <div className={styles.review}>
         <div className={styles.row}>
            <div className={styles.img}>
               <img src={image} alt='avatar img' />
            </div>
            <h6>Wanda Maximoff</h6>
         </div>
         <div className={styles.descr}>
            That was such a nice place. The most beautiful place I’ve ever seen. My advice to
            everyone not to forget to take warm coat
         </div>
      </div>
   );
};

export default Review;

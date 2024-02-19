import React from 'react';
import styles from './styles.module.scss';

const DetailsSkeleton = () => {
   return (
      <>
         <div className={styles.CommonSection}></div>
         <div className={styles.PlaceInfo}>
            <div className='container'>
               <div className={styles.heading}>
                  <h1 className={styles.title}></h1>
                  <div className={styles.location}></div>
               </div>
               <div className={styles.descr}>
                  <h3></h3>
                  <p></p>
               </div>
               <div className={styles.reviews}>
                  <h3></h3>
                  <div className={styles.list}>
                     <div className={styles.review}></div>
                     <div className={styles.review}></div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default DetailsSkeleton;

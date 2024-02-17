import React from 'react';
import styles from './styles.module.scss';

const BookedAlert = ({ setBookedAlert }) => {
   return (
      <>
         <div className={styles.content}>
            <h2>Your trip has been booked!</h2>
            <button type='button' className='btn' onClick={() => setBookedAlert(false)}>
               <span>Ok</span>
            </button>
         </div>
      </>
   );
};

export default BookedAlert;

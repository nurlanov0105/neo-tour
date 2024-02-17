import React from 'react';
import styles from './styles.module.scss';

const NotBookedAlert = ({ setNotBookedAlert }) => {
   return (
      <>
         <div className={styles.content}>
            <h2>The tour can’t be booked</h2>
            <button type='button' className='btn' onClick={() => setNotBookedAlert(false)}>
               <span>Ok</span>
            </button>
         </div>
      </>
   );
};

export default NotBookedAlert;

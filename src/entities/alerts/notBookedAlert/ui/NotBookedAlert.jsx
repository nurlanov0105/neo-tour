import React from 'react';
import styles from './styles.module.scss';

const NotBookedAlert = ({ setNotBookedAlert }) => {
   const handleClick = () => setNotBookedAlert(false);
   return (
      <>
         <div className={styles.content}>
            <h2>The tour can’t be booked</h2>
            <button type='button' className='btn' onClick={handleClick}>
               <span>Ok</span>
            </button>
         </div>
      </>
   );
};

export default NotBookedAlert;

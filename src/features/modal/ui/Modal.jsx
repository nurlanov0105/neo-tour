import React from 'react';
import styles from './styles.module.scss';

const Modal = ({ active, setActive, children }) => {
   const handleClick = (e) => e.stopPropagation();

   return (
      <div
         className={`${styles.modal} ${active ? styles.active : ''}`}
         onClick={() => setActive(false)}>
         <div className={styles.content} onClick={handleClick}>
            {children}
         </div>
      </div>
   );
};

export default Modal;

import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
   active: boolean;
   setActive: React.Dispatch<React.SetStateAction<boolean>>;
   children: React.ReactNode;
};

const Modal: FC<Props> = ({ active, setActive, children }) => {
   const handleClick = (e: any) => e.stopPropagation();

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

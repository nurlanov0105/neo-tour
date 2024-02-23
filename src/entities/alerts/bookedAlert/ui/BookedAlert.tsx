import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
   setBookedAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

const BookedAlert: FC<Props> = ({ setBookedAlert }) => {
   const handleClick = () => setBookedAlert(false);

   return (
      <>
         <div className={styles.content}>
            <h2>Your trip has been booked!</h2>
            <button type='button' className='btn' onClick={handleClick}>
               <span>Ok</span>
            </button>
         </div>
      </>
   );
};

export default BookedAlert;

import { FC } from 'react';
import styles from './styles.module.scss';
import userIcon from '@/shared/assets/imgs/profile/userIcon.svg';
import { useAppSelector } from '@/app/appStore';
import { Link } from 'react-router-dom';

type Props = {
   isReverse?: boolean;
};

const UserPanel: FC<Props> = ({ isReverse }) => {
   const fullName = useAppSelector((state) => state.user.fullName);
   const lastName = fullName.split(' ')[1];

   const classNames = `${styles.profile} ${isReverse ? styles.profile_reverse : ''}`;
   return isReverse ? (
      <div className={classNames}>
         <div className={styles.profile__name}>{lastName}</div>
         <img src={userIcon} className={styles.profile__img} alt='user icon' />
      </div>
   ) : (
      <Link to='profile' className={classNames}>
         <div className={styles.profile__name}>{lastName}</div>
         <img src={userIcon} className={styles.profile__img} alt='user icon' />
      </Link>
   );
};

export default UserPanel;

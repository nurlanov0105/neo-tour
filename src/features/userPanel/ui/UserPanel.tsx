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

   const classNames = `${styles.profile} ${isReverse ? styles.profile_reverse : ''}`;
   return (
      <Link to='profile' className={classNames}>
         <div className={styles.profile__name}>{fullName}</div>
         <img src={userIcon} className={styles.profile__img} alt='user icon' />
      </Link>
   );
};

export default UserPanel;

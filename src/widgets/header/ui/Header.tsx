import styles from './styles.module.scss';
import personImg from '@/shared/assets/imgs/header/person.png';
import mobBgImg from '@/shared/assets/imgs/header/mob-bg.jpeg';
import { FC } from 'react';

const Header: FC = () => {
   return (
      <header className={`header ${styles.header}`}>
         <div className='container'>
            <div className={styles.row}>
               <div className={styles.info}>
                  <h1>Winter Vacation Trips</h1>
                  <p>
                     Enjoy your winter vacations with warmth and amazing sightseeing on the
                     mountains. Enjoy the best experience with us!
                  </p>
                  <a href='#discover' className='btn btn--arrow'>
                     <span>Let’s Go!</span>
                     <svg className='arrow-btn-desc'>
                        <path d='M48.7071 8.70711C49.0976 8.31658 49.0976 7.68342 48.7071 7.29289L42.3431 0.928932C41.9526 0.538408 41.3195 0.538408 40.9289 0.928932C40.5384 1.31946 40.5384 1.95262 40.9289 2.34315L46.5858 8L40.9289 13.6569C40.5384 14.0474 40.5384 14.6805 40.9289 15.0711C41.3195 15.4616 41.9526 15.4616 42.3431 15.0711L48.7071 8.70711ZM0 9H48V7H0V9Z' />
                     </svg>
                     <svg className='arrow-btn-mob'>
                        <path
                           fillRule='evenodd'
                           clipRule='evenodd'
                           d='M36.8064 7.19142C36.9128 7.29757 36.9972 7.42367 37.0548 7.5625C37.1124 7.70133 37.1421 7.85016 37.1421 8.00047C37.1421 8.15077 37.1124 8.2996 37.0548 8.43843C36.9972 8.57726 36.9128 8.70336 36.8064 8.80951L29.9501 15.6658C29.7355 15.8804 29.4445 16.0009 29.141 16.0009C28.8376 16.0009 28.5466 15.8804 28.332 15.6658C28.1174 15.4512 27.9969 15.1602 27.9969 14.8568C27.9969 14.5533 28.1174 14.2623 28.332 14.0477L34.3815 8.00047L28.332 1.95321C28.1174 1.73863 27.9969 1.44761 27.9969 1.14416C27.9969 0.840711 28.1174 0.549689 28.332 0.335117C28.5466 0.120545 28.8376 -3.63002e-07 29.141 -3.49738e-07C29.4445 -3.36473e-07 29.7355 0.120545 29.9501 0.335117L36.8064 7.19142Z'
                        />
                        <rect y='7' width='35' height='2' rx='1' fill='white' />
                     </svg>
                  </a>
               </div>
               <div className={styles.img}>
                  <img className={styles.deskImg} src={personImg} alt='person img' />
                  <div className={styles.mobImg} style={{ backgroundImage: `url(${mobBgImg})` }} />
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;

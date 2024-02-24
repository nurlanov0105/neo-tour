import { FC } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

type Props = {
   tripImage: string;
};

const CommonSection: FC<Props> = ({ tripImage }) => {
   const navigate = useNavigate();
   const handleGoBack = () => {
      navigate(-1);
   };
   return (
      <section className={styles.commonSection} style={{ backgroundImage: `url(${tripImage})` }}>
         <div className='container'>
            <div onClick={handleGoBack} className={styles.btnDesc}>
               <svg>
                  <path d='M0.292892 8.70711C-0.0976295 8.31658 -0.0976295 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41422 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM49 9H1V7H49V9Z' />
               </svg>

               <span>Go back</span>
            </div>
            <div onClick={handleGoBack} className={styles.btnMob}>
               <svg>
                  <path d='M15 20.67C14.81 20.67 14.62 20.6 14.47 20.45L7.95 13.93C6.89 12.87 6.89 11.13 7.95 10.07L14.47 3.54999C14.76 3.25999 15.24 3.25999 15.53 3.54999C15.82 3.83999 15.82 4.31999 15.53 4.60999L9.01 11.13C8.53 11.61 8.53 12.39 9.01 12.87L15.53 19.39C15.82 19.68 15.82 20.16 15.53 20.45C15.38 20.59 15.19 20.67 15 20.67Z' />
               </svg>
               <span>Back</span>
            </div>
         </div>
      </section>
   );
};

export default CommonSection;

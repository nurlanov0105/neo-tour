import { Slider } from '@/features/slider';
import { Categories } from '@/features/categories';
import styles from './styles.module.scss';
import { FC } from 'react';

export const Discover: FC = () => {
   return (
      <section id='discover' className='section discover'>
         <div className='container'>
            <div className={styles.discover}>
               <Slider>
                  <Categories />
               </Slider>
            </div>
         </div>
      </section>
   );
};

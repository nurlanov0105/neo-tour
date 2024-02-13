import { RecommendCard } from '@/entities/recommendCard';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import image from '@/shared/assets/imgs/mini.jpg';

const Recommends = () => {
   const dispatch = useDispatch();

   return (
      <section className='section'>
         <div className='container'>
            <h2 className={styles.title}>Recommended</h2>
            <div className={styles.list}>
               {[...Array(12)].map((card, i) => (
                  <RecommendCard key={i} image={image} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default Recommends;

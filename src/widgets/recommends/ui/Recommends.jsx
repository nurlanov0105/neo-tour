import { RecommendCard, useGetRecommendsPlacesQuery } from '@/entities/recommendCard';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const Recommends = () => {
   const { recommendedPlaces, limit, currentPage, totalPages } = useSelector(
      (state) => state.recommends
   );

   const { isLoading, error } = useGetRecommendsPlacesQuery({ limit });

   const recommendsPlaces = isLoading
      ? [...Array(12)].map((_, i) => <RecommendCard key={i} isLoading={isLoading} />)
      : recommendedPlaces.map((recomPlace, i) => (
           <RecommendCard key={recomPlace.id} {...recomPlace} />
        ));

   return (
      <section className='section'>
         <div className='container'>
            <h2 className={styles.title}>Recommended</h2>
            <div className={styles.list}>{recommendsPlaces}</div>
         </div>
      </section>
   );
};

export default Recommends;

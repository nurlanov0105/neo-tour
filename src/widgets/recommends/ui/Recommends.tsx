import {
   RecommendCard,
   setCurrentPage,
   useGetRecommendsPlacesQuery,
} from '@/entities/recommendCard';
import styles from './styles.module.scss';
import { FC } from 'react';
import { CardType } from '@/shared/types';
import { Pagination } from '@/features/pagination';
import { useAppDispatch, useAppSelector } from '@/app/appStore';

const Recommends: FC = () => {
   const dispatch = useAppDispatch();
   const { recommendedPlaces, pageSize, currentPage, totalPages } = useAppSelector(
      (state) => state.recommends
   );

   const { isLoading, error } = useGetRecommendsPlacesQuery({ pageSize, currentPage });

   const handleNextPage = () => {
      if (currentPage < totalPages) {
         dispatch(setCurrentPage(currentPage + 1));
      }
   };

   const handlePreviousPage = () => {
      if (currentPage > 1) {
         dispatch(setCurrentPage(currentPage - 1));
      }
   };

   const handlePageClick = (pageNumber: number) => {
      dispatch(setCurrentPage(pageNumber));
   };

   const recommendsPlaces = error ? (
      <h3>
         {/* @ts-ignore */}
         Ошибка при запросе данных. {error.status} {error.data.message}
      </h3>
   ) : isLoading ? (
      [...Array(12)].map((_, i) => (
         <RecommendCard
            key={i}
            isLoading={isLoading}
            tripId={-1}
            name=''
            tripImage=''
            category=''
         />
      ))
   ) : (
      recommendedPlaces.map((recomPlace: CardType) => (
         <RecommendCard key={recomPlace.tripId} {...recomPlace} />
      ))
   );

   return (
      <section className='section'>
         <div className='container'>
            <h2 className={styles.title}>Recommended</h2>
            <div className={styles.list}>{recommendsPlaces}</div>
            <div className={styles.paginationWrapper}>
               <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  handleNextPage={handleNextPage}
                  handlePreviousPage={handlePreviousPage}
                  handlePageClick={handlePageClick}
               />
            </div>
         </div>
      </section>
   );
};

export default Recommends;

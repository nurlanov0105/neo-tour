import React, { useEffect, useRef, useState } from 'react';
import { useAppSelector } from '@/app/appStore';

import { DiscoverCard, useGetToursQuery } from '@/entities/discoverCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper/core';

import styles from './styles.module.scss';
import 'swiper/css';
import { CardType } from '@/shared/types';

type Props = {
   children: React.ReactNode;
};

export const Slider = ({ children }: Props) => {
   const { places, category } = useAppSelector((state) => state.discover);
   const { isLoading, error } = useGetToursQuery({ category });

   const [isBeginning, setIsBeginning] = useState(true);
   const [isEnd, setIsEnd] = useState(false);

   const swiperRef = useRef<SwiperClass | null>(null);

   useEffect(() => {
      if (swiperRef.current) {
         swiperRef.current.slideTo(0);
      }
   }, [category]);

   const onSwiper = (swiper: SwiperClass) => {
      swiperRef.current = swiper;
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
      swiper.on('slideChange', () => {
         setIsBeginning(swiper.isBeginning);
         setIsEnd(swiper.isEnd);
      });
   };

   const pagination = {
      clickable: true,
      renderBullet: function (index: number, className: string) {
         return '<span class="' + className + '">' + '</span>';
      },
   };

   const readyPlaces = error ? (
      <h3>
         {/* @ts-ignore */}
         Ошибка при запросе данных. {error.status} {error.data.message}
      </h3>
   ) : isLoading ? (
      [...Array(4)].map((_, i: number) => (
         <SwiperSlide key={i}>
            <DiscoverCard
               key={i}
               isLoading={isLoading}
               tripId={-1}
               name=''
               tripImage=''
               category=''
            />
         </SwiperSlide>
      ))
   ) : (
      places.map((tourPlace: CardType, i: number) => (
         <SwiperSlide key={i}>
            <DiscoverCard key={tourPlace.tripId} {...tourPlace} />
         </SwiperSlide>
      ))
   );

   const handlePrevBtn = () => swiperRef.current?.slidePrev();
   const handleNextBtn = () => swiperRef.current?.slideNext();

   return (
      <div className={styles.slider}>
         <div className={styles.row}>
            <h2>Discover</h2>
            <div className={styles.btns}>
               <button disabled={isBeginning} onClick={handlePrevBtn}>
                  <svg>
                     <path d='M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM25 9H1V7H25V9Z' />
                  </svg>
               </button>
               <button disabled={isEnd} onClick={handleNextBtn}>
                  <svg>
                     <path d='M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z' />
                  </svg>
               </button>
            </div>
         </div>

         {children}

         <div className={styles.swiperWrapper}>
            <Swiper
               onSwiper={onSwiper}
               slidesPerView='auto'
               pagination={pagination}
               modules={[Pagination]}
               breakpoints={{
                  0: {
                     spaceBetween: 12,
                  },

                  900: {
                     spaceBetween: 20,
                  },
                  1100: {
                     spaceBetween: 24,
                  },
               }}>
               {readyPlaces}
            </Swiper>
         </div>
      </div>
   );
};

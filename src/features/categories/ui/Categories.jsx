import React from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '@/entities/discoverCard/model/discoverSlice';

const categories = ['Popular', 'Featured', 'Most Visited', 'Europe', 'Asia'];

export const Categories = () => {
   const dispatch = useDispatch();
   const selectedCategory = useSelector((state) => state.discover.category);

   return (
      <div className={styles.categories}>
         {categories.map((category) => (
            <button
               key={category}
               data-text={category}
               onClick={() => dispatch(addCategory(category))}
               className={`${styles.category} ${selectedCategory === category && styles.active}`}>
               {category}
            </button>
         ))}
      </div>
   );
};

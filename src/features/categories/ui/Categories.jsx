import React from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '@/entities/discoverCard';

const categories = ['Popular', 'Featured', 'Most Visited', 'Europe', 'Asia'];

export const Categories = () => {
   const dispatch = useDispatch();
   const selectedCategory = useSelector((state) => state.discover.category);
   const getCategoryClassName = (category) =>
      `${styles.category} ${selectedCategory === category && styles.active}`;

   return (
      <div className={styles.categories}>
         {categories.map((category) => (
            <button
               key={category}
               data-text={category}
               onClick={() => dispatch(addCategory(category))}
               className={getCategoryClassName(category)}>
               {category}
            </button>
         ))}
      </div>
   );
};

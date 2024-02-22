import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '@/entities/discoverCard';

const categories = ['Popular', 'Featured', 'Most Visited', 'Europe', 'Asia'];

const endpointCategories = {
   Popular: '',
   'Most Visited': 'getByMostVisit',
   Featured: 'getByFeatured',
   Europe: 'getByEurope',
   Asia: 'getByAsia',
};

export const Categories = () => {
   const dispatch = useDispatch();
   const [activeCategory, setActiveCategory] = useState('Popular');

   const getCategoryClassName = (category) =>
      `${styles.category} ${activeCategory === category ? styles.active : ''}`;

   const handleCategoryClick = (category) => {
      setActiveCategory(category);
      dispatch(addCategory(endpointCategories[category]));
   };

   return (
      <div className={styles.categories}>
         {categories.map((category) => (
            <button
               key={category}
               data-text={category}
               onClick={() => handleCategoryClick(category)}
               className={getCategoryClassName(category)}>
               {category}
            </button>
         ))}
      </div>
   );
};

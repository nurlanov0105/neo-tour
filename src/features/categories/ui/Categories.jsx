import React from 'react';
import styles from './styles.module.scss';

export const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
   return (
      <div className={styles.categories}>
         {categories.map((category) => (
            <button
               key={category}
               data-text={category}
               onClick={() => setSelectedCategory(category)}
               className={`${styles.category} ${selectedCategory === category && styles.active}`}>
               {category}
            </button>
         ))}
      </div>
   );
};

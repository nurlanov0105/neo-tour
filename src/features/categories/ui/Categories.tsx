import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { useDispatch } from 'react-redux';
import { addCategory } from '@/entities/discoverCard';

const categories = ['Popular', 'Featured', 'Most Visited', 'Europe', 'Asia'];

const endpointCategories = {
   Popular: 'getByPopular',
   'Most Visited': 'getByMostVisit',
   Featured: 'getByFeatured',
   Europe: 'getEuropeTrips',
   Asia: 'getAsiaTrips',
};

export const Categories: FC = () => {
   const dispatch = useDispatch();
   const [activeCategory, setActiveCategory] = useState('Popular');

   const getCategoryClassName = (category: string) =>
      `${styles.category} ${activeCategory === category ? styles.active : ''}`;

   const handleCategoryClick = (category: string) => {
      setActiveCategory(category);
      dispatch(addCategory(endpointCategories[category as keyof typeof endpointCategories]));
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

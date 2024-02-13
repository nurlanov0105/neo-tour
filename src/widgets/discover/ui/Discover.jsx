import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '@/entities/discoverCard/model/discoverSlice';

import { Slider } from '@/features/slider';
import { Categories } from '@/features/categories';

const categories = ['Popular', 'Featured', 'Most Visited', 'Europe', 'Asia'];

export const Discover = () => {
   const dispatch = useDispatch();
   const { category } = useSelector((state) => state.discover);

   return (
      <section id='discover' className='section'>
         <div className='container'>
            <Slider>
               <Categories
                  categories={categories}
                  selectedCategory={category}
                  setSelectedCategory={(category) => dispatch(addCategory(category))}
               />
            </Slider>
         </div>
      </section>
   );
};

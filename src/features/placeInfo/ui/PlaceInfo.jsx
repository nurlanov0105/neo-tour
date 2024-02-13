import { Review } from '@/entities/review';
import styles from './styles.module.scss';
import reviewImg from '@/shared/assets/imgs/detailsPage/avatar.jpg';

const PlaceInfo = () => {
   return (
      <section className={styles.place}>
         <div className='container'>
            <div className={styles.heading}>
               <h1>Mount Fuji</h1>
               <div className={styles.location}>
                  <svg>
                     <path d='M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 13.4 7.05 19.5 7.35 19.76C7.53113 19.9149 7.76165 20.0001 8 20.0001C8.23835 20.0001 8.46887 19.9149 8.65 19.76C9 19.5 16 13.4 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM8 17.65C5.87 15.65 2 11.34 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8C14 11.34 10.13 15.66 8 17.65ZM8 4C7.20887 4 6.43552 4.2346 5.77772 4.67412C5.11992 5.11365 4.60723 5.73836 4.30448 6.46927C4.00173 7.20017 3.92252 8.00444 4.07686 8.78036C4.2312 9.55628 4.61216 10.269 5.17157 10.8284C5.73098 11.3878 6.44371 11.7688 7.21964 11.9231C7.99556 12.0775 8.79983 11.9983 9.53073 11.6955C10.2616 11.3928 10.8864 10.8801 11.3259 10.2223C11.7654 9.56448 12 8.79113 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06086 4 8 4ZM8 10C7.60444 10 7.21776 9.8827 6.88886 9.66294C6.55996 9.44318 6.30362 9.13082 6.15224 8.76537C6.00086 8.39991 5.96126 7.99778 6.03843 7.60982C6.1156 7.22186 6.30608 6.86549 6.58579 6.58579C6.86549 6.30608 7.22186 6.1156 7.60982 6.03843C7.99778 5.96126 8.39991 6.00087 8.76537 6.15224C9.13082 6.30362 9.44318 6.55996 9.66294 6.88886C9.8827 7.21776 10 7.60444 10 8C10 8.53043 9.78928 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10Z' />
                  </svg>
                  <span>Honshu, Japan</span>
               </div>
            </div>
            <div className={styles.descr}>
               <h3>Description</h3>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim eget amet
                  viverra eget fames rhoncus. Eget enim venenatis enim porta egestas malesuada et.
                  Consequat mauris lacus euismod montes.
               </p>
            </div>
            <div className={styles.reviews}>
               <h3>Reviews</h3>
               <div className={styles.list}>
                  {[...Array(2)].map((item, i) => (
                     <Review key={i} image={reviewImg} />
                  ))}
               </div>
            </div>
            <button className='btn'>Book now</button>
         </div>
      </section>
   );
};

export default PlaceInfo;

import { Review } from '@/entities/review';
import styles from './styles.module.scss';
import reviewImg from '@/shared/assets/imgs/detailsPage/avatar.jpg';

const PlaceInfo = ({ onBtnBook }) => {
   return (
      <section className={styles.place}>
         <div className='container'>
            <div className={styles.heading}>
               <h1>Mount Fuji</h1>
               <div className={styles.location}>
                  <svg className={styles.locationDesc}>
                     <path d='M8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 13.4 7.05 19.5 7.35 19.76C7.53113 19.9149 7.76165 20.0001 8 20.0001C8.23835 20.0001 8.46887 19.9149 8.65 19.76C9 19.5 16 13.4 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM8 17.65C5.87 15.65 2 11.34 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2C9.5913 2 11.1174 2.63214 12.2426 3.75736C13.3679 4.88258 14 6.4087 14 8C14 11.34 10.13 15.66 8 17.65ZM8 4C7.20887 4 6.43552 4.2346 5.77772 4.67412C5.11992 5.11365 4.60723 5.73836 4.30448 6.46927C4.00173 7.20017 3.92252 8.00444 4.07686 8.78036C4.2312 9.55628 4.61216 10.269 5.17157 10.8284C5.73098 11.3878 6.44371 11.7688 7.21964 11.9231C7.99556 12.0775 8.79983 11.9983 9.53073 11.6955C10.2616 11.3928 10.8864 10.8801 11.3259 10.2223C11.7654 9.56448 12 8.79113 12 8C12 6.93913 11.5786 5.92172 10.8284 5.17157C10.0783 4.42143 9.06086 4 8 4ZM8 10C7.60444 10 7.21776 9.8827 6.88886 9.66294C6.55996 9.44318 6.30362 9.13082 6.15224 8.76537C6.00086 8.39991 5.96126 7.99778 6.03843 7.60982C6.1156 7.22186 6.30608 6.86549 6.58579 6.58579C6.86549 6.30608 7.22186 6.1156 7.60982 6.03843C7.99778 5.96126 8.39991 6.00087 8.76537 6.15224C9.13082 6.30362 9.44318 6.55996 9.66294 6.88886C9.8827 7.21776 10 7.60444 10 8C10 8.53043 9.78928 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10Z' />
                  </svg>
                  <svg className={styles.locationMob}>
                     <path d='M5.00001 0.166668C3.76233 0.166668 2.57535 0.658333 1.70018 1.5335C0.825009 2.40867 0.333344 3.59566 0.333344 4.83333C0.333344 7.98333 4.44584 11.5417 4.62084 11.6933C4.7265 11.7837 4.86097 11.8334 5.00001 11.8334C5.13905 11.8334 5.27352 11.7837 5.37918 11.6933C5.58334 11.5417 9.66668 7.98333 9.66668 4.83333C9.66668 3.59566 9.17501 2.40867 8.29984 1.5335C7.42467 0.658333 6.23769 0.166668 5.00001 0.166668ZM5.00001 10.4625C3.75751 9.29583 1.50001 6.78167 1.50001 4.83333C1.50001 3.90508 1.86876 3.01484 2.52514 2.35846C3.18151 1.70208 4.07175 1.33333 5.00001 1.33333C5.92827 1.33333 6.81851 1.70208 7.47488 2.35846C8.13126 3.01484 8.50001 3.90508 8.50001 4.83333C8.50001 6.78167 6.24251 9.30167 5.00001 10.4625ZM5.00001 2.5C4.53852 2.5 4.08739 2.63685 3.70368 2.89324C3.31996 3.14963 3.0209 3.51405 2.84429 3.94041C2.66769 4.36677 2.62148 4.83592 2.71151 5.28855C2.80154 5.74117 3.02377 6.15693 3.35009 6.48325C3.67642 6.80957 4.09218 7.0318 4.5448 7.12183C4.99742 7.21187 5.46658 7.16566 5.89294 6.98905C6.3193 6.81245 6.68371 6.51338 6.9401 6.12966C7.19649 5.74595 7.33334 5.29482 7.33334 4.83333C7.33334 4.2145 7.08751 3.621 6.64993 3.18342C6.21234 2.74583 5.61885 2.5 5.00001 2.5ZM5.00001 6C4.76926 6 4.5437 5.93158 4.35184 5.80338C4.15999 5.67519 4.01045 5.49298 3.92215 5.2798C3.83385 5.06662 3.81074 4.83204 3.85576 4.60573C3.90078 4.37942 4.01189 4.17154 4.17505 4.00838C4.33821 3.84522 4.54609 3.7341 4.7724 3.68908C4.99872 3.64407 5.23329 3.66717 5.44647 3.75547C5.65965 3.84378 5.84186 3.99331 5.97006 4.18517C6.09825 4.37703 6.16668 4.60259 6.16668 4.83333C6.16668 5.14275 6.04376 5.4395 5.82497 5.65829C5.60617 5.87708 5.30943 6 5.00001 6Z' />
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
            <button onClick={onBtnBook} className='btn'>
               Book now
            </button>
         </div>
      </section>
   );
};

export default PlaceInfo;

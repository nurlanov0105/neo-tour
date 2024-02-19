import { Header } from '@/widgets/header';
import { Discover } from '@/widgets/discover';
import { Recommends } from '@/widgets/recommends';
import styles from './styles.module.scss';
import { useEffect } from 'react';

const Main = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <main>
         <Header />
         <Discover />
         <Recommends />
      </main>
   );
};

export default Main;

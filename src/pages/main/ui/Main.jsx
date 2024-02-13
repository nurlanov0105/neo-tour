import { Header } from '@/widgets/header';
import { Discover } from '@/widgets/discover';
import { Recommends } from '@/widgets/recommends';
import styles from './styles.module.scss';

const Main = () => {
   return (
      <main>
         <Header />
         <Discover />
         <Recommends />
      </main>
   );
};

export default Main;

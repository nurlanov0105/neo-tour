import { Routes, Route } from 'react-router';
import { Main } from '../../pages/main';
import { NotFound } from '@/pages/notFound';
import { DetailsPlace } from '@/pages/detailsPlace';
import { Login } from '@/pages/login';
import { Register } from '@/pages/register';
import ProtectedRoute from './ProtectedRoute';

const Routers = () => {
   return (
      <Routes>
         {/* <Route path='/*' element={<ProtectedRoute />}> */}
         <Route index element={<Main />} />
         <Route path='details-place/:id' element={<DetailsPlace />} />
         {/* </Route> */}

         <Route path='login' element={<Login />} />
         <Route path='register' element={<Register />} />

         <Route path='*' element={<NotFound />} />
      </Routes>
   );
};

export default Routers;

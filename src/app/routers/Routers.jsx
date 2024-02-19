import { Routes, Route } from 'react-router';
import ProtectedRoute from './ProtectedRoute';
import { Main } from '../../pages/main';
import { NotFound } from '@/pages/notFound';
import { DetailsPlace } from '@/pages/detailsPlace';
import { Login } from '@/pages/login';
import { Register } from '@/pages/register';

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Main />} />
         <Route path='/details-place/:id' element={<DetailsPlace />} />
         <Route path='login' element={<Login />} />
         <Route path='register' element={<Register />} />

         {/* <Route path='/*' element={<ProtectedRoute />}>
            <Route path='cart' element={<Cart />} />
         </Route> */}

         {/* <Route path='login' element={<LoginPage />} />
         <Route path='register' element={<RegisterPage />} /> */}
         <Route path='*' element={<NotFound />} />
      </Routes>
   );
};

export default Routers;

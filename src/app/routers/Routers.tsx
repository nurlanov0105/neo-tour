import { Routes, Route } from 'react-router';
import { Main } from '@/pages/main';
import { NotFound } from '@/pages/notFound';
import { DetailsPlace } from '@/pages/detailsPlace';
import { Login } from '@/pages/login';
import { Register } from '@/pages/register';
import ProtectedRoute from './ProtectedRoute';
import { FC } from 'react';
import { Profile } from '@/pages/profile';

const Routers: FC = () => {
   return (
      <Routes>
         <Route path='/*' element={<ProtectedRoute />}>
            <Route index element={<Main />} />
            <Route path='details-place/:id' element={<DetailsPlace />} />
            <Route path='profile' element={<Profile />} />
         </Route>

         <Route path='login' element={<Login />} />
         <Route path='register' element={<Register />} />

         <Route path='*' element={<NotFound />} />
      </Routes>
   );
};

export default Routers;

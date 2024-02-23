import { useAuth } from '@/shared/hooks/useAuth';
import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const ProtectedRoute: FC = () => {
   const { isAuth } = useAuth();
   const location = useLocation();

   return isAuth ? <Outlet /> : <Navigate to='/login' state={{ from: location }} />;
};

export default ProtectedRoute;

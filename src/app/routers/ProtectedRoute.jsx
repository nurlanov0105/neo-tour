import React from 'react';
import { useAuth } from '@/shared/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
   const { isAuth } = useAuth();
   const location = useLocation();

   return isAuth ? <Outlet /> : <Navigate to='/login' state={{ from: location }} />;
};

export default ProtectedRoute;

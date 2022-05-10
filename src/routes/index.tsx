import React from 'react';
import useAuth from '../hooks/useAuth';
import AuthRoutes from './Auth.routes';
import PLayerRoutes from './PLayer.routes';

const Routes = () => {
  const {loading, isAuthenticated} = useAuth();

  if (loading) {
    return null;
  }

  return isAuthenticated ? <PLayerRoutes /> : <AuthRoutes />;
};

export default Routes;

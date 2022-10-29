import type { NextPage } from 'next';
import { Dashboard } from '../components/dashboard';
import React from 'react';
import WithPrivateRoute from '../components/wrappers/PrivateRoutes';

const Home: NextPage = () => {
  return (
    <div className="p-0">
      <Dashboard />
    </div>
  );
};

export default WithPrivateRoute(Home);

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  HomeScreen,
  NotFound,
} from '../screens';
import { ProtectedRoute } from '../components';

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/work" exact component={HomeScreen} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;

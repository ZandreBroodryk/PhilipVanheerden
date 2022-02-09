import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import {
  HomeScreen,
  NotFound,
} from '../screens';
import { AppLayout, RouteWrapper } from '../components';

const RootRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper path="/work" exact component={HomeScreen} layout={AppLayout}/>
        <RouteWrapper path="*" component={NotFound} layout={AppLayout}/>
      </Switch>
    </BrowserRouter>
  );
};

export default RootRouter;

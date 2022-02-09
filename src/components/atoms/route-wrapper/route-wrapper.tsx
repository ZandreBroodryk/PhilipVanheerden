import React from 'react';
import { Route } from 'react-router-dom';
import { RouteLayoutProps } from './route-wrapper-props';


export const RouteWrapper: React.FC<RouteLayoutProps> = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  if (Component && Layout) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }
  if (Component) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }
  return null;
};

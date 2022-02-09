import { RouteComponentProps, RouteProps } from 'react-router';

export interface RouteLayoutProps extends RouteProps {
  layout?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined;
}

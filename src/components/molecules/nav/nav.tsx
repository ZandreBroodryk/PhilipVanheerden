import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { KeyboardArrowDown } from '@material-ui/icons';

import './nav.css';
import { useSelector } from 'react-redux';
import { userAuthService } from '../../../services';
import { NavIconButtonProps } from '../../../types';
import { userSelector } from '../../../reducers';

export const Nav: React.FC = ({ children }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { user } = useSelector(userSelector);
  const notifications = 0;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signOut = () => {
    return userAuthService.logout().then(() => {
      history.push('/');
    });
  };

  const NavIconButton: React.FC<NavIconButtonProps> = ({ icon, count }) => {
    return (
      <IconButton className="mx-1">
        <Badge badgeContent={count} color="secondary">
          <Icon className="nav-icon-color">{icon}</Icon>
        </Badge>
      </IconButton>
    );
  };

  const DropDownMenu = () => (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      className="mt-10"
    >
      <MenuItem>
        <Link to="/profile" role="menuitem">
          Your Profile
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/settings" role="menuitem">
          Settings
        </Link>
      </MenuItem>
      <MenuItem onClick={signOut}>Sign out</MenuItem>
    </Menu>
  );

  return (
    <div className="nav-container">
      <nav className='bg-color-gradient fixed top-0 w-screen p-6 justify-between flex flex-row'>
        <h1 className='text-4xl'>Philip van Heerden</h1>
        <h1>Work | Collaborate | Info</h1>
      </nav>
      <div className="overflow-y-auto pt-12">{children}</div>
    </div>
  );
};

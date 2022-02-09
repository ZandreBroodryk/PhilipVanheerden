import React from 'react';

import { Drawer, Nav } from '../../molecules';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <div className="flex">
      <Nav>{children}</Nav>
    </div>
  );
};

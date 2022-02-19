import React from 'react';
import { useHistory } from 'react-router-dom';

import './nav.css';
import { UnderlineButton } from '../../atoms';

export const Nav: React.FC = ({ children }) => {
  const history = useHistory();


  return (
    <>
      <nav className='bg-nav-color-gradient fixed top-0 w-screen p-6 justify-between flex flex-row z-10'>
        <UnderlineButton className='text-4xl' underlineStyle='noUnderlineOnHover'>Philip van Heerden</UnderlineButton>
        <div>
          <UnderlineButton onClick={() => history.push('/work')}>Work</UnderlineButton> | 
          <UnderlineButton onClick={() => history.push('/collaborate')}>Collaborate</UnderlineButton> |
          <UnderlineButton onClick={() => history.push('/info')}>Info</UnderlineButton>
        </div>
      </nav>
      <div className="overflow-y-auto pt-12 flex w-full justify-center">{children}</div>
    </>
  );
};

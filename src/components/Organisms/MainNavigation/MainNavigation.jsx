import React from 'react';
import MainMenuItem from '../MainMenuItem/MainMenuItem';
import './MainNavigation.scss';
import navMenu from '../../../../mainNavigation';

function MainNavigation() {
  return (
    <ul className="nav-menu">
      {navMenu.map((link) => (
        <MainMenuItem
          linkLabel={link.label}
          subMenu={link.subMenu}
          key={link.key}
        />
      ))}
    </ul>
  );
}

export default MainNavigation;

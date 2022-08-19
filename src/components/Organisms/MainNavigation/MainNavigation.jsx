import React from 'react';
import MainMenuItem from '../MainMenuItem/MainMenuItem';
import './MainNavigation.scss';
import navMenu from '../../../../mainNavigation';

console.log(navMenu);

function MainNavigation() {
  return (
    <ul className="nav-menu">
      {navMenu.map((link) => (
        <MainMenuItem linkLabel={link.label} subMenu={link.subMenu} />
      ))}
    </ul>
  );
}

export default MainNavigation;

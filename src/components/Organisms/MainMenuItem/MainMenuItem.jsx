import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainMenuLink from '../../Atoms/MainMenuLink/MainMenuLink';
import MenuLinkList from '../../Molecules/MenuLinkList/MenuLinkList';
import './MainMenuItem.scss';

function MainMenuItem({ linkLabel, subMenu }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="nav-menu-item"
    >
      <MainMenuLink label={linkLabel} />
      {isHovered && <MenuLinkList menuLinkArray={subMenu} />}
    </li>
  );
}

MainMenuItem.propTypes = {
  linkLabel: PropTypes.string.isRequired,
  subMenu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MainMenuItem;

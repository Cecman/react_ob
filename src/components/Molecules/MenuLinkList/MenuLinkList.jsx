import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from '../../Atoms/MenuLink/MenuLink';
import './MenuLinkList.scss';

function MenuLinkList({ menuLinkArray }) {
  return (
    <ul className="menu-link-list">
      {menuLinkArray.map((link) => (
        <li key={link.key} className="menu-link-list__item">
          <MenuLink label={link.label} url={link.url} />
        </li>
      ))}
    </ul>
  );
}

MenuLinkList.propTypes = {
  menuLinkArray: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MenuLinkList;

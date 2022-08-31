import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from '../../Atoms/MenuLink/MenuLink';
import { MenuList, MenuListItem } from './MenuLinkList.styled';

function MenuLinkList({ menuLinkArray }) {
  return (
    <MenuList>
      {menuLinkArray.map((link) => (
        <MenuListItem key={link.key}>
          <MenuLink label={link.label} url={link.url} />
        </MenuListItem>
      ))}
    </MenuList>
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

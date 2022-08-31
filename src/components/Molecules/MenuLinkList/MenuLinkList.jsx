import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuLink from '../../Atoms/MenuLink/MenuLink';

const MenuList = styled.ul`
  list-style: none;
  padding: 0.5rem, 0;
  border-color: rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  color: #212529;
  background-color: #fff;
`;

const MenuListItem = styled.li`
  display: flex;
  line-height: 1.5;
  &:hover {
    color: #16181b;
    background-color: #f8f9fa;
    cursor: pointer;
  }
`;
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

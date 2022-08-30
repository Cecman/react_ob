import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

function MenuLink({ label, url }) {
  const MenuLinkItem = styled.a`
    color: #000;
    text-decoration: none;
  `;

  return <MenuLinkItem href={url}>{label}</MenuLinkItem>;
}

MenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuLink;

import React from 'react';
import PropTypes from 'prop-types';
import MenuLinkItem from './MenuLink.styled';

function MenuLink({ label, url }) {
  return <MenuLinkItem href={url}>{label}</MenuLinkItem>;
}

MenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuLink;

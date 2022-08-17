import React from 'react';
import PropTypes from 'prop-types';
import './MenuLink.scss';

function MenuLink({ label, url }) {
  return (
    <a href={url} className="menu__link">
      {label}
    </a>
  );
}

MenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default MenuLink;

import React from 'react';
import PropTypes from 'prop-types';

import './MainMenuLink.scss';

function Link({ label, url }) {
  const handleClick = (evt) => {
    //  prevent redirect
    evt.preventDefault();
  };

  return (
    <a href={url} onClick={handleClick} className="main-menu-link">
      {label}
    </a>
  );
}

Link.defaultProps = {
  url: '#',
};

Link.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Link;

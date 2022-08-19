import React from 'react';
import PropTypes from 'prop-types';

import './MainMenuLink.scss';

function MainMenuLink({ label, url }) {
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

MainMenuLink.defaultProps = {
  url: '#',
};

MainMenuLink.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default MainMenuLink;

import React from 'react';
import PropTypes from 'prop-types';
import MainMenuLink from './MainMenuLink.styled';

function Link({ label, url }) {
  const handleClick = (evt) => {
    //  prevent redirect
    evt.preventDefault();
  };
  return (
    <MainMenuLink href={url} onClick={handleClick}>
      {label}
    </MainMenuLink>
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

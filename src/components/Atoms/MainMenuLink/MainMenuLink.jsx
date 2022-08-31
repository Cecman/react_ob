import React from 'react';
import PropTypes from 'prop-types';
import MainMenuLinkItem from './MainMenuLink.styled';

function MainMenuLink({ label, url }) {
  const handleClick = (evt) => {
    //  prevent redirect
    evt.preventDefault();
  };
  return (
    <MainMenuLinkItem href={url} onClick={handleClick}>
      {label}
    </MainMenuLinkItem>
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

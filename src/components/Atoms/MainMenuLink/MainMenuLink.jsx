import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MainMenuLink = styled.a`
  display: flex;
  padding: 0.5rem;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
`;
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

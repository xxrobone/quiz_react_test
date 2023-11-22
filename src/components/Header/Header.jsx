import React from 'react';
import './header.scss';

const Header = ({ title='Code Quiz' }) => {
  return (
    <header data-testid='header'>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;

import React from 'react';
import './header.scss';

const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;

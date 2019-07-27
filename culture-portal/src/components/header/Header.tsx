import React from 'react';

import NavigationUI from './Navigation/NavigationUI';
import './header.css';

const Header = () => (
  <header className="header">
    <h1 className="title">CULTURE<br />PORTAL</h1>
    <NavigationUI />
  </header>
);

export default Header;

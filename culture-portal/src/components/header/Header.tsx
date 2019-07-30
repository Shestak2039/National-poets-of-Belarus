import React from 'react';

import NavigationUI from './Navigation/NavigationUI';
import LangSelect from './LangSelect';

import './header.css';

const Header = () => (
  <header className="header">
    <h1 className="main-title">CULTURE<br />PORTAL</h1>
    <NavigationUI />
    <LangSelect />
  </header>
);

export default Header;

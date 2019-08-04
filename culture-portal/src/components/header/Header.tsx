import React from 'react';

import Navigation from './Navigation/Navigation';
import LangSelect from './LangSelect';

import './header.css';

const Header = () => (
  <header className="header">
    <h1 className="main-title">CULTURE<br />PORTAL</h1>
    <Navigation />
    <LangSelect />
  </header>
);

export default Header;

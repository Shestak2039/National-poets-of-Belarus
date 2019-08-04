import React from 'react';

import Navigation from './Navigation/Navigation';
import LangSelect from './LangSelect';

import './header.css';

const Header = () => (
  <header className='header'>
    <div className='container-wrapper'>
      <a href='/'>
        <h1 className='main-title'>CULTURE<br />PORTAL</h1>
      </a>
      <Navigation />
      <LangSelect />
    </div>
  </header>
);

export default Header;

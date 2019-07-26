import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/Header';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import MainPage from './components/mainPage/MainPage';
import AuthorsWrapper from './components/Authors/authorsWrapper/index';
import Author from './components/Authors/1/index';
import AboutUs from './components/AboutUs/AboutUs';

import './App.css';

const App = () => (
  <BrowserRouter>
      <Route component={Header} />
      <Route component={ContentWrapper}>
        <Route exact path="/" component={MainPage} />
        <Route>
          <Route exact path="/authors" component={AuthorsWrapper} />
          <Route path="/authors/1" component={Author} />
          <Route path="/authors/2" component={Author} />
          <Route path="/authors/3" component={Author} />
          <Route path="/authors/4" component={Author} />
          <Route path="/authors/5" component={Author} />
        </Route>
        <Route path="/about-us" component={AboutUs} />
      </Route>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import MainPage from './components/mainPage/MainPage';
import AuthorsWrapper from './components/Authors/authorsWrapper/index';
import Author from './components/Authors/1/index';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Route component={Navigation} />
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
    </Route>
  </BrowserRouter>
);

export default App;

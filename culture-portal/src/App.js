import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from './components/navigation/Navigation';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import MainPage from './components/mainPage/MainPage';
import AuthorsWrapper from './components/Authors/authorsWrapper/index';
import Author from './components/Authors/1/index';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route component = {Navigation} />
      <Route component={ContentWrapper}>
        <Route exact path="/" component={MainPage} />
        <Route path="/authors/" component={AuthorsWrapper} />
        <Route path="/1" component={Author} />
        <Route path="/2" component={Author} />
        <Route path="/3" component={Author} />
        <Route path="/4" component={Author} />
        <Route path="/5" component={Author} />
      </Route>
    </BrowserRouter>
  );
}

export default App;

import React, { Component } from 'react';

import { createClient } from 'contentful';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import MainPage from './components/mainPage/MainPage';
import AuthorsWrapper from './components/Authors/authorsWrapper/index';
import Author from './components/Authors/1/index';

import './App.css';

const fetchEntries = createClient({
    space: 't4022xc623v3',
    accessToken: 'G2lO0Ziy3f72VA7IZ-0olzL4AbSk-f9J61YJOp9DSt8'
});

class App extends Component {

  state = {
    content: null
  };

  componentDidMount() {
    fetchEntries.getEntries({
      content_type: 'authorPost',
      include: 2,
      locale: 'ru'
    }).then(({ items }) => {
      this.setState({content: items})
    })
    .catch(err => global.console.error(err));

  }

  render() {
    const { content } = this.state;

    if (!content) {
      return null;
    }
    global.console.log(this.state);
    return (
      <BrowserRouter>
        <Route component={Navigation}/>
        <Route component={ContentWrapper}>
          <Route exact path="/" component={MainPage}/>
          <Route>
            <Route exact path="/authors" component={AuthorsWrapper}/>
            <Route path="/authors/1" component={Author}/>
            <Route path="/authors/2" component={Author}/>
            <Route path="/authors/3" component={Author}/>
            <Route path="/authors/4" component={Author}/>
            <Route path="/authors/5" component={Author}/>
          </Route>
        </Route>
      </BrowserRouter>
      );
  }
}

export default App;

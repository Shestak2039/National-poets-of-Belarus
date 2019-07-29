import React, {Component, Suspense} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { getAuthors } from "./content-api/content-service";

import Header from './components/header/Header';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import MainPage from './components/mainPage/MainPage';
import AuthorsWrapper from './components/Authors/authorsWrapper/index';
import Author from './components/Authors/1/index';
import AboutUs from './components/AboutUs/AboutUs';

import './App.css';

class App extends Component {
  state = {
    authors: []
  };

  componentDidMount(): void {
    const authors: Promise<any> = getAuthors();
    authors.then(({ items }) => {
      this.setState({authors: items})
    });
  }

  renderCollection () {
    const { authors } = this.state;
    return (
      authors.map((author: any ) => {
        const {fields} = author;

        return <Route key={fields.slug}
                 path={`/authors/${fields.slug}`}
                 component={() => (
                   <Author data={fields}/>
                 )
                 } />

      })
    );

  }

  render() {
    const { authors } = this.state;

    if(!authors) {
      return null;
    }

    return (
      <BrowserRouter>
        <Suspense fallback="Loading...">
          <Route component={Header} />
          <Route component={ContentWrapper}>
            <Route exact={true} path="/" component={MainPage} />
            <Route>
              <Route exact={true} path="/authors" component={() => (
                <AuthorsWrapper authors={authors} />
              )}  />
              {this.renderCollection()}
            </Route>
            <Route path="/about-us" component={AboutUs} />
          </Route>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App;

import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { getAuthors, getCreaters } from "./content-api/content-service";

import Header from './components/header/Header';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import MainPage from './components/mainPage';
import AuthorsWrapper from './components/Authors/authorsWrapper/index';
import Author from './components/Authors/1/index';
import AboutUs from './components/AboutUs/AboutUs';

import './App.css';
import Footer from "./components/footer";

class App extends Component {
  state = {
    authors: [],
    creaters: []
  };

  componentDidMount(): void {
    const authors: Promise<any> = getAuthors();
    authors.then(({ items }) => {
      this.setState({ authors: items })
    });
    const creaters: Promise<any> = getCreaters();
    creaters.then(({ items }) => {
      this.setState({ creaters: items })
    });
  }

  renderCollection() {
    const { authors } = this.state;
    return (
      authors.map((author: any) => {
        const { fields } = author;

        return <Route key={fields.slug}
          path={`/authors/${fields.slug}`}
          component={() => (
            <Author data={fields} />
          )
          } />

      })
    );

  }

  render() {
    const { authors, creaters } = this.state;

    if (!authors) {
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
              )} />
              {this.renderCollection()}
            </Route>
            <Route path="/about-us" component={() => (<AboutUs data={creaters} />)} />
          </Route>
          <Route component={Footer} />
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App;

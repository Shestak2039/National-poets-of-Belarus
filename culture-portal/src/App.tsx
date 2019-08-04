import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { getAuthors, getCreaters, getAuthorsPreviews, getMain } from "./content-api/content-service";

import Header from './components/header/Header';
import ContentWrapper from './components/contentWrapper/ContentWrapper';
import MainPage from './components/mainPage';
import AuthorsWrapper from './components/Authors/authorsWrapper/index';
import Author from './components/AuthorPostPage';
import AboutUs from './components/AboutUs/AboutUs';
import Loading from './components/Loading/Loading';

import './App.css';
import Footer from "./components/footer";

class App extends Component {
  state = {
    authors: [],
    creaters: [],
    main: [],
    authorsPreviews: []
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
    const main: Promise<any> = getMain();
    main.then(({ items }) => {
      this.setState({ main: items })
    });
    const authorsPreviews: Promise<any> = getAuthorsPreviews();
    authorsPreviews.then(({ items }) => {
      this.setState({ authorsPreviews: items })
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
    const { authors, creaters, main, authorsPreviews } = this.state;

    if (!authors) {
      return null;
    }

    return (
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Route component={Header} />
          <Route component={ContentWrapper}>
            <Route
              exact={true}
              path="/"
              component={() => (<MainPage main={main} prev={authorsPreviews} authors={authors} />)}
            />
            <Route>
              <Route
                exact={true}
                path="/authors"
                component={() => (<AuthorsWrapper authors={authors} data={authorsPreviews} />)}
              />
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

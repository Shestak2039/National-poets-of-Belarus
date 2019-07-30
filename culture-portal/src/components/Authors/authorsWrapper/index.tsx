import React, { Component } from 'react';

import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';

type AuthorsProps = {authors: any };

interface AuthorsState {
  authorsList?: Array<object>,
}

class AuthorsWrapper extends Component<AuthorsProps, AuthorsState> {

  static propTypes: { authors: PropTypes.Validator<unknown[]>; };

  handleSearch = (e: any) => {
    const searchResult = [...this.props.authors].filter(item => {
      const authorName = item.fields.nameAuthor.toLowerCase();
      const searchdata = e.target.value.toLowerCase();
      return authorName.includes(searchdata);
    });
    this.setState({
      authorsList: searchResult,
    });
  }
  render() {
    const authors = this.state === null ? this.props.authors : this.state.authorsList;
    return (
      <>
        <SearchForm changeHandler={this.handleSearch}/>
        {authors.length ? <AuthorsList authors={authors} /> : <p>Sorry. We're didn't find anything :(</p>}
      </>
    )
  }
}

AuthorsWrapper.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default AuthorsWrapper;

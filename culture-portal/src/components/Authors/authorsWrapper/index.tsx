import React, { Component } from 'react';

import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';
import i18n from '../../../i18n';
import SearchFallback from './searchForm/SearchFallback/SearchFallback';

type AuthorsProps = {authors: any };

interface AuthorsState {
  authorsList?: Array<object>,
}

class AuthorsWrapper extends Component<AuthorsProps, AuthorsState> {

  static propTypes: { authors: PropTypes.Validator<unknown[]>; };

  handleSearch = (e: any) => {
    const searchResult = [...this.props.authors].filter(item => {
      const authorName = i18n.t(item.fields.nameAuthor).toLowerCase();
      const searchData = e.target.value.toLowerCase();
      return authorName.includes(searchData);
    });
    this.setState({
      authorsList: searchResult,
    });
  }

  render() {
    const authors = this.state === null ? this.props.authors : this.state.authorsList;
    return (
      <>
        <SearchForm changeHandler={this.handleSearch} />
        {authors.length ? <AuthorsList authors={authors} /> : <SearchFallback />}
      </>
    )
  }
}

AuthorsWrapper.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default AuthorsWrapper;

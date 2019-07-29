import React from 'react';

import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';

type AuthorsProps = {authors: any };
type AuthorsState = {
  searchData: '',
}

class AuthorsWrapper extends React.Component<AuthorsProps, AuthorsState> {

  static propTypes: { authors: PropTypes.Validator<unknown[]>; };

  handleSearch(e: any) {
    console.log(e.target.value);
  }
  render() {
    const {authors} = this.props;
    return (
      <>
        <SearchForm changeHandler={this.handleSearch}/>
        <AuthorsList authors={authors} />
      </>
    )
  }
}

AuthorsWrapper.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default AuthorsWrapper;

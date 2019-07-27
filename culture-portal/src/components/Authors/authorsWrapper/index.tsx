import React from 'react';

import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';

type AuthorsProps = {authors: any };
const AuthorsWrapper = ( { authors } : AuthorsProps ) => (
  <>
    <SearchForm />
    <AuthorsList authors={authors} />
  </>
);

AuthorsWrapper.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default AuthorsWrapper;

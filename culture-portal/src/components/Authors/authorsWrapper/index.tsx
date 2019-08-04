import React from 'react';

import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';

type AuthorsProps = {
  authors: any,
  data: any
};
const AuthorsWrapper = ({ authors, data }: AuthorsProps) => (
  <>
    <SearchForm />
    <AuthorsList authors={authors} data={data} />
  </>
);

AuthorsWrapper.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default AuthorsWrapper;

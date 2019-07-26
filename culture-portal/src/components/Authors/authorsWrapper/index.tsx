import React from 'react';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';

const AuthorsWrapper = () => (
  <>
    <SearchForm />
    <AuthorsList />
  </>
);

export default AuthorsWrapper;

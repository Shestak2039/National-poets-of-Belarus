import React, { useEffect } from 'react';

import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';

type AuthorsProps = {
  authors: any,
  data: any
};
const AuthorsWrapper = ({ data }: AuthorsProps) => {
  useEffect(() => {
    document.title = `Authors list`;
  });

  return (
    <>
      <SearchForm />
      <AuthorsList data={data} />
    </>
  )
};

AuthorsWrapper.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default AuthorsWrapper;

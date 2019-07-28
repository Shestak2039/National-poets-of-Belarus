import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './author-list.css';

const AuthorList = ({ authors = [] } : {authors: any }) => {
  return (
    authors.map((author: any) => (
          <li key={author.fields.slug} className="authors-list__item">
            <Link to={`/authors/${author.fields.slug}`}>{author.fields.nameAuthor}</Link>
          </li>
      )
    )
  );
};

AuthorList.propTypes = {
  authors: PropTypes.instanceOf(Array)
};

export default AuthorList;


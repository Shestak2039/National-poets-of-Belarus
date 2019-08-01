import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './author-list.css';

const AuthorList = ({ authors = [] } : {authors: any }) => {
  const { t } = useTranslation();

  return (
    <ul>
    {authors.map((author: any) => (
      <li key={author.fields.slug} className="authors-list__item">
        <Link to={`/authors/${author.fields.slug}`}>{t(author.fields.nameAuthor)}</Link>
      </li>
      ))
    }
    </ul>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.instanceOf(Array)
};

export default AuthorList;


import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';
import AuthorPreview from '../../../authorPreview';
import './author-list.css';

const AuthorList = ({ authors = [], data }: { authors: any, data: any }) => {
  const { t } = useTranslation();
  // if (data.length === 0) {
  //   return null;
  // }
  const list = authors.map((author: any, index: number) => {
    return (
      <li key={author.fields.slug} className="authors-list__item">
        {/* <Link to={`/authors/${author.fields.slug}`}>{t(author.fields.nameAuthor)}</Link> */}
        <AuthorPreview
          title=""
          name={data[0].fields.list[index].fields.name}
          description={data[0].fields.list[index].fields.description}
          picture={data[0].fields.list[index].fields.picture.fields.file.url}
          button={data[0].fields.list[index].fields.button}
          link={authors}
          slag={data[0].fields.list[index].fields.slag}
        />
      </li>
    )
  })

  return (
    <ul>
      {list}
    </ul>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.instanceOf(Array)
};

export default AuthorList;


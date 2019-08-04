import React from 'react';
import PropTypes from 'prop-types';

import AuthorPreview from '../../../authorPreview';
import './author-list.css';

const AuthorList = ({ authors = [], data }: { authors: any, data: any }) => {
  if (data.length === 0) {
    return <div />;
  }
  const list = authors.map((author: any, index: number) => {
    const { url } = data[0].fields.list[index].fields.picture.fields.file;
    return (
      <li key={author.fields.slug} className="authors-list__item">
        <AuthorPreview
          title=""
          name={author.fields.nameAuthor}
          description={author.fields.description}
          picture={url}
          button='Go to author'
          link={authors}
          slag={author.fields.slug}
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

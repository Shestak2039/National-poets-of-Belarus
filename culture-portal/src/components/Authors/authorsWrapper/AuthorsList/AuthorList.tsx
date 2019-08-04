import React from 'react';
import PropTypes from 'prop-types';

import AuthorPreview from '../../../authorPreview';
import './author-list.css';

const AuthorList = ({ authors = [], data }: { authors: any, data: any }) => {

  // if (data.length === 0) {
  //   return null;
  // }
  // console.log(data[0].fields.list[0].fields.name);
  const list = authors.map((author: any, index: number) => {
    return (
      <li key={author.fields.slug} className="authors-list__item">
        {/* <Link to={`/authors/${author.fields.slug}`}>{t(author.fields.nameAuthor)}</Link> */}
        <AuthorPreview
          title=""
          name={author.fields.nameAuthor}
          description={author.fields.description}
          picture={author.fields.picture.fields.file.url}
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


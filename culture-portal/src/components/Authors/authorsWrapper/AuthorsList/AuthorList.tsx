import React from 'react';
import PropTypes from 'prop-types';

import AuthorPreview from '../../../authorPreview';
import './author-list.css';

const AuthorList = ({ data }: { data: any }) => {

  if (data.length === 0) {
    return null;
  }
  const list = data[0].fields.list.map((author: any, index: number) => {
    const { name, description, picture, button, slag } = data[0].fields.list[index].fields;
    const urlPicture = picture.fields.file.url;
    return (
      <li key={author.fields.slug} className="authors-list__item">
        {/* <Link to={`/authors/${author.fields.slug}`}>{t(author.fields.nameAuthor)}</Link> */}
        <AuthorPreview
          title=""
          name={name}
          description={description}
          picture={urlPicture}
          button={button}
          slag={slag}
        />
      </li>
    )
  });

  return (
    <ul>
      {list}
    </ul>
  );
};

export default AuthorList;


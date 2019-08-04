import React from 'react';

import AuthorPreview from '../../../authorPreview';
import './author-list.css';

const AuthorList = ({ data }: { data: any }) => {

  if (data.length === 0) {
    return null;
  }

  const listAuthors = data[0].fields.list;
  const list = listAuthors.map((author: any) => {
    const { name, description, picture, button, slag } = author.fields;
    const urlPicture = picture.fields.file.url;

    return (
      <li key={slag} className="authors-list__item">
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


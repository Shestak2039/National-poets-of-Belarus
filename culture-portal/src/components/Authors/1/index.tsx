import React from 'react';
import PropTypes  from 'prop-types';

const Author = ({ data } : { data: any }) => (

  <div>Some info about author {data.nameAuthor}</div>
);

Author.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default Author;

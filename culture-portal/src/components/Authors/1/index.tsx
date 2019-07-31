import React from 'react';
import PropTypes from 'prop-types';

import Foto from '../../OverlayFoto';
import Video from '../../OverlayVideo';

import TimeLine from '../../Timeline';

const Author = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <>
      <div> Some info about author {data.nameAuthor}</div>
      <TimeLine data={data} />
      <Foto data={data} />
      <Video data={data} />
    </>
  )
};

Author.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default Author;

import React from 'react';
import PropTypes from 'prop-types';
import BigPicture from "react-bigpicture";

BigPicture.propTypes.noLoader = PropTypes.bool;

const Video = ({ data }: { data: any }) => {
  return (
    <div className='VideoOverlay'>
      <BigPicture
        type="youtube"
        src={data.linkVideo}
      >
        <img src={data.prevVideo.fields.file.url} alt="#" />
      </BigPicture>
    </div>
  );
};

export default Video;

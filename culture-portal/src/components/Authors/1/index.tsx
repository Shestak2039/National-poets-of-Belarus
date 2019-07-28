import React from 'react';
import PropTypes from 'prop-types';
import BigPicture, { BigPictureGallery } from "react-bigpicture";

const Galery = ({ data }: { data: any }) => {
  const images = data.gallery.map((el: any) => (
    <img
      key={`key${el.fields.file.url}`}
      src={el.fields.file.url}
      alt="#"
      height="200px"
    />

  ));
  const videoYoutoobe =
    <BigPicture
      type="youtube"
      src={data.linkVideo}
    >
      <img src={data.prevVideo.fields.file.url} alt="#" />
    </BigPicture>
    ;

  return (
    <>
      <div className='autorsPhoto'><BigPictureGallery loop>{images}</BigPictureGallery></div>
      {videoYoutoobe}
    </>
  )
};

const Author = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <>
      <div> Some info about author {data.nameAuthor}</div>
      <Galery data={data} />
    </>
  )
};






Author.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default Author;

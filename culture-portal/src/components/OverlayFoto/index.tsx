import React from 'react';
import PropTypes from 'prop-types';
import { BigPictureGallery } from "react-bigpicture";

BigPictureGallery.propTypes.noLoader = PropTypes.bool;

const Foto = ({ data }: { data: any }) => {
  const images = data.gallery.map((el: any) => (
    <img
      key={`key${el.fields.file.url}`}
      src={el.fields.file.url}
      alt="#"
      height="200px"
    />

  ));
  return (
    <div className='autorsPhoto'>
      <BigPictureGallery loop>{images}</BigPictureGallery>
    </div>
  )
};

export default Foto;

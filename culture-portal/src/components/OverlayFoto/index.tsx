import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/styles";
import { BigPictureGallery } from "react-bigpicture";

BigPictureGallery.propTypes.noLoader = PropTypes.bool;

const useStyles = makeStyles({
  authorsPhoto: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});


const Foto = ({ data }: { data: any }) => {
  const classes = useStyles();
  const images = data.gallery.map((el: any) => (
    <img
      key={`key${el.fields.file.url}`}
      src={el.fields.file.url}
      alt="#"
      height="200px"
    />

  ));
  return (
    <div className={classes.authorsPhoto}>
      <BigPictureGallery loop={true}>{images}</BigPictureGallery>
    </div>
  )
};

export default Foto;

import React from 'react';
import PropTypes from 'prop-types';
import BigPicture from "react-bigpicture";

import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import './styles.css';

BigPicture.propTypes.noLoader = PropTypes.bool;

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      transition: 'all 0.3s linear',
      cursor: 'pointer',
      boxShadow: '0px 0px 5px black',
      margin: '10px 0',
      '&:hover + span': {
        color: 'rgba(255, 0, 0, 1)',
        transform: 'scale(3.2)',
      },
      '& + span:hover': {
        color: 'rgba(255, 0, 0, 1)',
        transform: 'scale(3.2)',
        cursor: 'pointer',
      },
    },
    icon: {
      position: 'absolute',
      color: 'rgba(128, 128, 128, 1)',
      left: '50%',
      top: '48%',
      width: '30px',
      transform: 'scale(3)',
      transition: 'all 0.3s linear',
    },
  }),
);

const Video = ({ data }: { data: any }) => {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div className='video-overlay'>
      <BigPicture
        type="youtube"
        src={data.linkVideo}
      >
        <img className={classes.image} src={data.prevVideo.fields.file.url} alt="#" />
              <Icon className={clsx(classes.icon, 'fab fa-youtube')} />
      </BigPicture>
    </div>
  );
};

export default Video;

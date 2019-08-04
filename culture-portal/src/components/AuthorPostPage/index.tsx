import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Grid, Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Foto from '../OverlayFoto';
import Video from '../OverlayVideo';
import TimeLine from '../Timeline';
import WorkLog from '../WorkLog';
import YandexMap from '../YandexMap/YandexMap';

const useStyles = makeStyles({
  pageTitle: {
    marginBottom: '40px',
    fontSize: '48px'
  },
  pageSubTitle: {
    fontSize: '48px',
    color: '#3F51B5'
  },
  mainContainer: {
    maxWidth: '1200px',
    marginBottom: '60px',
  },
  containerAvatar: {
    display: 'flex',
    justifyContent: 'center'
  },
  postAvatar: {
    maxWidth: '270px',
    width: '100%',
    height: 'auto',
    borderRadius: 0,
  },
  description: {
    fontSize: '16px',
    lineHeight: '24px'
  },
  dateLife: {
    marginTop: '20px',
    fontSize: '20px',
  },
  structuralElement: {
    '&:not(:last-of-type)': {
      marginBottom: '60px'
    }
  },
  gallerySection: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px 0 40px 0',
    backgroundColor: '#3F51B5',
    cursor: 'pointer',
    '& h2': {
      width: '100%',
      marginBottom: '20px',
      color: '#fff'
    },
    '& img': {
      boxShadow: '0px 9px 12px rgba(0, 0, 0, 0.14), 0px 3px 16px rgba(0, 0, 0, 0.12), 0px 5px 6px rgba(0, 0, 0, 0.2)'
    },
    '@media (min-width: 560px)': {
      '& img': {
        '&:not(:last-child)': {
          marginRight: '30px',
          marginBottom: '30px'
        }
      },
    },
    '@media (max-width: 560px)': {
      '& img': {
        width: 'calc(100% - 30px)',
        maxWidth: '420px',
        height: 'auto',
        '&:not(:last-child)': {
          marginRight: '0px',
          marginBottom: '30px'
        }
      },
    }
  }
}, { index: 2 });

const Author = ({ data }: { data: any }): JSX.Element => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const classes = useStyles();
  const { nameAuthor, yearsOfLife, description, picture } = data;
  const urlPicture = picture.fields.file.url;
  const { works } = data.works.fields;
  const { t } = useTranslation();
  return (
    <>
      <Container maxWidth='lg' className={classes.mainContainer}>
        <Typography align='center' component='h1' className={classes.pageTitle} > {t(nameAuthor)} </Typography>
        <Grid container={true} spacing={3}>
          <Grid item={true} lg={6} xs={12}>
            <Typography component='p'>{t(description)}</Typography>
            <Typography component='p' className={classes.dateLife}><strong>{t('Years of life: ')}</strong> {t(yearsOfLife)}</Typography>
          </Grid>
          <Grid item={true} lg={6} xs={12}>
            <div className={classes.containerAvatar}>
              <Avatar alt={t(data.nameAuthor)} src={urlPicture} className={classes.postAvatar} />
            </div>
          </Grid>
        </Grid>
      </Container>
      <section className={classes.structuralElement}>
        <Typography align='center' component='h2' className={classes.pageSubTitle}> {t('Timeline')} </Typography>
        <TimeLine data={data} />
      </section>
      <section className={classes.structuralElement}>
        <Typography align='center' component='h2' className={classes.pageSubTitle}> {t('WorkLog')} </Typography>
        <WorkLog data={works} />
      </section>
      <section className={classes.structuralElement}>
        <Typography align='center' component='h2' className={classes.pageSubTitle}> {t('Video')} </Typography>
        <Video data={data} />
      </section>
      <section className={`${classes.structuralElement} ${classes.gallerySection}`}>
        <Typography align='center' component='h2' className={classes.pageSubTitle}> {t('Gallery')} </Typography>
        <Foto data={data} />
      </section>
      <YandexMap coordinates={data.map.coordinates} />
    </>
  )
};

export default Author;

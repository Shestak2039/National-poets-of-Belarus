import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/";
import AuthorPreview from "../authorPreview";

const useStyles = makeStyles(() => {
  return ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '90vw',
      margin: '0 auto',
      maxWidth: '1200px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
    },
    description: {
      padding: '30px 0',
      fontSize: '1.2rem',
    },
    descriptionHeader: {
      margin: '1vw 0',
      fontSize: '3rem',
      textAlign: 'center',
      lineHeight: '72px',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    descriptionText: {
      textIndent: '1.5rem',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '27px',
      color: 'rgba(0, 0, 0, 0.7)'
    }
  });
});

export default function MainPage(): JSX.Element {

  const classes = useStyles();

  return (
      <div className={classes.container}>
        <div className={classes.description}>
          <Typography component="h2" className={classes.descriptionHeader}>Народные поэты Беларуси</Typography>
          <Typography component="p" className={classes.descriptionText}>
            Этот портал посвящен народным поэтам Беларуси.
            Мы говорим “спасибо” тем людям, кто оставил огромный след в истории белорусской культуры
            и чьи произведения с гордостью изучают сейчас в рамках школьной программы.
          </Typography>
          <Typography component="p" className={classes.descriptionText}>Народный поэт Беларуси — почётное звание, которое присуждается поэтам,
            создавшим выдающиеся произведения литературы и имеющим большие достижения
            в развитии белорусской литературы. Введено Указом Президиума Верховного Совета БССР
            от 27 марта 1956 года. С 1994 года присваивается Президентом Республики Беларусь.
          </Typography>
        </div>
      <AuthorPreview title="Автор дня"/>
      </div>
    );
};



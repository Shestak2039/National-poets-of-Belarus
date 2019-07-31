import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import Container from "@material-ui/core/Container/Container";

const useStyles = makeStyles((theme) => {
  return ({
    footer: {
      width: '100%',
      height: '60px',
      background: '#212121',
      display: 'flex',
      alignItems: 'center',
      marginTop: 'auto'
    },
    text: {
      color: '#FFFFFF',
      letterSpacing: '1.25px',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '18px',
    }
  });
});

export default function Footer(): JSX.Element {

   const classes = useStyles();

    return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography  component="p" className={classes.text}>Copyright 2019 - RSSchool Group 9.</Typography>
        </Container>
      </footer>
    );
};

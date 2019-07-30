import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";

const useStyles = makeStyles(() => ({
    footerBlock: {
      position: "fixed",
      left: "0",
      bottom: "0",
      width: '100%',
      height: '60px',
      background: '#212121',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    phantom: {
      display: 'block',
      padding: '20px 0',
      height: '60px',
      width: '100%',
    },
    text: {
      color: '#FFFFFF',
      letterSpacing: '1.25px',
      textTransform: 'uppercase',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '18px',
    }
}));

export default function Footer(): JSX.Element {

   const classes = useStyles();

    return (
      <footer>
        <div className={classes.phantom} />
        <div className={classes.footerBlock}>
          <Typography component="p" className={classes.text}> Copyright 2019 - RSSchool Group 9.</Typography>
        </div>
      </footer>
    );
};

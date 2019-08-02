import Typography from "@material-ui/core/Typography/";
import Button from '@material-ui/core/Button';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Props } from "./props";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => {
  return ({
    container: {
      display: 'flex',
      width: '90vw',
      maxWidth: '1200px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      border: '1px solid #E5E5E5',
      borderRadius: '4px',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      margin: '2vw auto',
      paddingTop: '20px',
      '@media screen and (max-width: 700px)': {
        flexWrap: 'wrap',
        margin: '0 auto 50px'
      }
    },
    description: {
      width: '60%',
      paddingLeft: '20px',
      '@media screen and (max-width: 700px)': {
        width: '90%'
      }
    },
    containerHeader: {
      mixBlendMode: 'normal',
      letterSpacing: '0.15px',
      fontSize: '1.9rem',
      color: 'rgba(0, 0, 0, 0.6)',
      lineHeight: '2rem',
      height: '28px',
    },
    containerName: {
      margin: '15px 0',
      height: '49px',
      lineHeight: '40px',
      color: 'rgba(0, 0, 0, 0.87)',
      mixBlendMode: 'normal',
      letterSpacing: '0.15px',
      fontSize: '3rem',
    },
    containerTextInfo: {
      letterSpacing: '0.15px',
      padding: '0 0 30px',
      textIndent: '.5rem',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: 'px'
    },
    button: {
      background: '#3F51B5',
      boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12)',
      borderRadius: '4px',
      marginBottom: '22px',
      color: "#FFFFFF",
      '@media screen and (max-width: 700px)': {
        display: 'flex',
        margin: '20px auto'
      }

    },
    imageContainer: {
      margin: '10px',
      display: 'flex',
      alignItems: 'center',
      width: '40%',
      '@media screen and (max-width: 700px)': {
        width: '100%',
        display: 'flex',
        margin: '0 auto',
        paddingBottom: '50px',
        justifyContent: 'center'
      }
    },
    authorImage: {
      width: '100%',
      maxWidth: '250px',
      minWidth: '180px',
      height: '100%',
      maxHeight: '250px',
      minHeight: '180px',
      paddingLeft: '20px',
      display: 'flex',
      margin: '0 auto',
      borderRadius: '50%',
    }
  });
});

export default function AuthorPreview(props: Props): JSX.Element {

  const classes = useStyles();
  if (props.link.length === 0) {
    return <div />;
  }

  console.log(props.link);
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <Typography component="h3" className={classes.containerHeader}>{props.title}</Typography>
        <Typography component="h2" className={classes.containerName}>{props.name}</Typography>
        <Typography component="p" className={classes.containerTextInfo}>
          {props.description}
        </Typography>
        <Button
          variant="contained"
          component="button"
          size="large"
          className={classes.button}
        >
          <Link to={`/authors/${props.link[0].fields.slug}`}>{props.button}</Link>
        </Button>
      </div>
      <div className={classes.imageContainer}>
        <img src={props.picture} alt="author-logo" className={classes.authorImage} />
      </div>
    </div>
  );
}


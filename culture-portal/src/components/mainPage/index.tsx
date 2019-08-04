import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/";
import AuthorPreview from "../authorPreview";
import { Props } from "./props";
import {useTranslation} from "react-i18next";

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
}, { index: 2 });

export default function MainPage(props: Props): JSX.Element {
  const { t } = useTranslation();
  const classes = useStyles();
  const randomAuthor = Math.floor(Math.random() * (props.prev[0].fields.list.length - 1));

  if (props.main.length === 0) {
    return <div />;
  }
  if (props.prev.length === 0) {
    return <div />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <Typography component="h2" className={classes.descriptionHeader}>{t(props.main[0].fields.headline)}</Typography>
        <Typography component="p" className={classes.descriptionText}>
          {t(props.main[0].fields.paragraph1)}
        </Typography>
        <Typography component="p" className={classes.descriptionText}>
          {t(props.main[0].fields.paragraph2)}
        </Typography>
      </div>
      <AuthorPreview
        title={props.main[0].fields.blockTitle}
        name={props.prev[0].fields.list[randomAuthor].fields.name}
        description={props.prev[0].fields.list[randomAuthor].fields.description}
        picture={props.prev[0].fields.list[randomAuthor].fields.picture.fields.file.url}
        button={props.prev[0].fields.list[randomAuthor].fields.button}
        link={props.authors}
        slag={props.prev[0].fields.list[randomAuthor].fields.slag}
      />
    </div>
  );
};



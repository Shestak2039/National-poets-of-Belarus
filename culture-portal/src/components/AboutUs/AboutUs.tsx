import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import PersonFromTeam from './personFromTeam/PersonFromTeam';

import './about-us.css';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      marginTop: '40px !important',
    },
  }),
);



const AboutUs = ({ data }: { data: any }) => {
  const classes = useStyles();
  if (data.length === 0) {
    return null;
  }
  const listOfUs = data[0].fields.creatersList.map((el: any) => {
    return (
      <PersonFromTeam
        key={el.sys.id}
        photo={el.fields.photo.fields.file.url}
        githubAccount={el.fields.nicname}
        nickname={el.fields.name}
        contribution={el.fields.contribution}
      />
    )
  })
  return (
    <>
      <Typography className={classes.title} align='center' variant="h3" component="h2">
        About us
      </Typography>
      <ul className="about-us__team-description">
        {listOfUs}
      </ul>
    </>
  );
}

export default AboutUs;

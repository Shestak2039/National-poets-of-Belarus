import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import PersonFromTeam from './personFromTeam/PersonFromTeam';

import './about-us.css';

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      fontWeight: 600,
      marginTop: '40px',
    },
  }),
);

const AboutUs = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} align='center' variant="h4" component="h2">
        About us
      </Typography>
      <ul className="about-us__team-description">
        <PersonFromTeam
          photo="Something photo"
          githubAccount="Shestak2039"
          nickname="Shestakov Vladislav"
          contribution="Something contribution contribution contribution contribution contribution contribution contribution contribution"
        />
        <PersonFromTeam
          photo="Something photo"
          githubAccount="Shestak2039"
          nickname="Shestakov Vladislav"
          contribution="Something contribution contribution contribution contribution contribution contribution contribution contribution"
        />
        <PersonFromTeam
          photo="Something photo"
          githubAccount="Shestak2039"
          nickname="Shestakov Vladislav"
          contribution="Something contribution contribution contribution contribution contribution contribution contribution contribution"
        />
        <PersonFromTeam
          photo="Something photo"
          githubAccount="Shestak2039"
          nickname="Shestakov Vladislav"
          contribution="Something contribution contribution contribution contribution contribution contribution contribution contribution"
        />
        <PersonFromTeam
          photo="Something photo"
          githubAccount="Shestak2039"
          nickname="Shestakov Vladislav"
          contribution="Something contribution contribution contribution contribution contribution contribution contribution contribution"
        />
        <PersonFromTeam
          photo="Something photo"
          githubAccount="Shestak2039"
          nickname="Shestakov Vladislav"
          contribution="Something contribution contribution contribution contribution contribution contribution contribution contribution"
        />
      </ul>
    </>
  );
}

export default AboutUs;

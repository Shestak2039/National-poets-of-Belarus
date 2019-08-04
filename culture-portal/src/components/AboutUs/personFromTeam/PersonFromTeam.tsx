import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { useTranslation } from "react-i18next";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import { DataProps } from '../../../types';

import './person-from-team.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      margin: 40,
      padding: 0,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '4px',
    },
    icon: {
      margin: theme.spacing(2),
      color: blue[800],
    },
    iconHover: {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    linkHover: {
      color: 'rgba(63, 81, 181, 0.87)',
      transition: 'all 0.3s linear',
      '&:hover': {
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
    contribution: {
      whiteSpace: 'pre-wrap',
      fontSize: '18px',
    }
  }),
);

const PersonFromTeam = (props: DataProps) => {
  const {
    photo, githubAccount, nickname, contribution,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="350"
        image={photo}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom={true} variant="h5" component="h2">
          {t(nickname)}
        </Typography>
        <Link className={classes.linkHover} href={`https://github.com/${githubAccount}`} underline='none' target='_blank'>
          <Box display="flex" bgcolor="background.paper">
            <Box>
              <Icon className={clsx(classes.iconHover, 'fab fa-github')} />
            </Box>
            <Box alignSelf="center">
              <Typography variant="h6" component="h3">
                {githubAccount}
              </Typography>
            </Box>
          </Box>
        </Link>
        <Typography className={classes.contribution} variant="h6" color="textSecondary" component="p">
          {t(contribution)}
        </Typography>
      </CardContent>
    </Card>
  );
};

PersonFromTeam.propTypes = {
  photo: PropTypes.string,
  githubAccount: PropTypes.string,
  nickname: PropTypes.string,
  contribution: PropTypes.string,
};

PersonFromTeam.defaultProps = {
  photo: 'Something photo',
  githubAccount: 'Something github account',
  nickname: 'Something',
  contribution: 'Something contribution',
};

export default PersonFromTeam;

import React from 'react';
import PropTypes from 'prop-types';
import { DataProps } from '../../../types/index';

import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { red, blue } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './person-from-team.css';

import img from './photo_tel.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      margin: 40,
      padding: 0,
    },
    icon: {
      margin: theme.spacing(2),
      color: blue[800],
    },
    iconHover: {
      margin: theme.spacing(2),
      '&:hover': {
        color: red[800],
      },
    },
  }),
);

const PersonFromTeam = (props: DataProps) => {
  const {
    photo, githubAccount, nickname, contribution,
  } = props;
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="350"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Nickname
          </Typography>
          <Box display="flex" bgcolor="background.paper">
            <Box ml={-1.6}>
              <Icon className={clsx(classes.icon, 'fab fa-github')} />
            </Box>
            <Box alignSelf="center">
              <Typography variant="h6" component="h3">
                Shestak2039
              </Typography>
            </Box>
          </Box>
          <Typography variant="body2" color="textSecondary" component="p">
            contribution contribution contribution contribution contribution contribution
            contribution contribution contribution contribution contribution contribution
          </Typography>
        </CardContent>
      </CardActionArea>
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

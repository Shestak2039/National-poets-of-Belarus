import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppBar, Tab } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import {useTranslation} from "react-i18next";


function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    headerMenu: {
      flexDirection: 'row',
      backgroundColor: 'white',
      boxShadow: 'none',
      '@media screen and (max-width: 560px)': {
        flexDirection: 'column',
        margin: '0 auto'
      }
    },
    button: {
      '&:hover': {
        backgroundColor: 'rgba(89, 114, 255, 0.4)',
        color: '#3f51b5',
      },
      borderRadius: '5px',
    },
    navLink: {
      '&.active': {
        backgroundColor: 'rgba(89, 114, 255, 0.4)',
        color: '#3f51b5 !important',
        padding: '10.5px 0px 16px 0px',
        borderRadius: '5px',
      },
    }
  }),
);

export default function SimpleTabs() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <nav className="nav">
      <ul className="navigation">
        <div className={classes.root}>
          <AppBar className={classes.headerMenu} position="static">
            <li className="navigation__link"><NavLink exact to="/" activeClassName='active' className={classes.navLink}><Tab className={classes.button} label={t('Main')} {...a11yProps(0)} /></NavLink></li>
            <li className="navigation__link"><NavLink to="/authors/" activeClassName='active' className={classes.navLink}><Tab className={classes.button} label={t('Authors')} {...a11yProps(1)} /></NavLink></li>
            <li className="navigation__link"><NavLink to="/about-us/" activeClassName='active' className={classes.navLink}><Tab className={classes.button} label={t('About us')} {...a11yProps(2)} /></NavLink></li>
          </AppBar>
        </div >
      </ul>
    </nav>
  );
}

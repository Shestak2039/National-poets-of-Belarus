import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { NavLink } from "react-router-dom";

interface TabPanelProps {

  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}


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
  const [setValue] = React.useState(0);


  return (
    <nav className="nav">
      <ul className="navigation">
        <div className={classes.root}>
          <AppBar className={classes.headerMenu} position="static">
            <li className="navigation__link"><NavLink exact to="/" activeClassName='active' className={classes.navLink}><Tab className={classes.button} label="Main" {...a11yProps(0)} /></NavLink></li>
            <li className="navigation__link"><NavLink to="/authors/" activeClassName='active' className={classes.navLink}><Tab className={classes.button} label="Authors" {...a11yProps(1)} /></NavLink></li>
            <li className="navigation__link"><NavLink to="/about-us/" activeClassName='active' className={classes.navLink}><Tab className={classes.button} label="About us" {...a11yProps(2)} /></NavLink></li>
          </AppBar>
        </div >
      </ul>
    </nav>
  );
}

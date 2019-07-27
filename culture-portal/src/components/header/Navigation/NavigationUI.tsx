import React, { Fragment } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Switch, Route, NavLink, BrowserRouter } from "react-router-dom";
import AuthorsWrapper from '../../Authors/authorsWrapper/index';

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
  }),
);

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }



  //   return (
  //     <BrowserRouter>
  //       <div className="App">
  //         <Route
  //           path="/"
  //           render={({ location }) => (
  //             <Fragment>
  //               <Tabs value={location.pathname}>
  //                 <Tab label="Item One" component={NavLink} to="/" />
  //                 <Tab label="Item Two" component={NavLink} to="/authors/" />
  //                 <Tab
  //                   label="Item Three"
  //                   href="#basic-tabs"
  //                   component={NavLink}
  //                   to="/about-us/"
  //                 />
  //               </Tabs>
  //               <Switch>
  //                 <Route exact path="/authors" component={AuthorsWrapper} />
  //                 <Route path="/tab3" render={() => <div>Tab 3</div>} />
  //                 <Route path="/" render={() => <div>Tab 1</div>} />
  //               </Switch>
  //             </Fragment>
  //           )}
  //         />
  //       </div>
  //     </BrowserRouter>
  //   );
  // }
  return (
    <nav className="nav">
      <ul className="navigation">
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <li className="navigation__link"><NavLink to="/" activeClassName='active'><Tab label="Main" {...a11yProps(0)} /></NavLink></li>
              <li className="navigation__link"><NavLink to="/authors/" activeClassName='active'><Tab label="Authors" {...a11yProps(1)} /></NavLink></li>
              <li className="navigation__link"><NavLink to="/about-us/" activeClassName='active'><Tab label="About us" {...a11yProps(2)} /></NavLink></li>
            </Tabs>
          </AppBar>
        </div >
      </ul>
    </nav>
  );
}

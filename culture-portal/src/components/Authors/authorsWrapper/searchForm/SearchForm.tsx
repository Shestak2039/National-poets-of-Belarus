import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import './search-form.css';

const SearchForm = ()  => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));

  const classes = useStyles();
    return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-search"
        label="S field"
        type="search"
        className={classes.textField}
        margin="normal"
      />
    </form>
    );
}

export default SearchForm;

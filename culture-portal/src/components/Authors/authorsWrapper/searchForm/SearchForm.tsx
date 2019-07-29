import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import './search-form.css';

const SearchForm = ({changeHandler = null} : {changeHandler: any}) => {
  const handleChange = (e: any) => {
    changeHandler(e);
  }
  return (
    <TextField
      id="standard-search"
      type="search"
      margin="normal"
      style={{ margin: 16 }}
      placeholder='search smth'
      fullWidth
      onChange={handleChange}
  />
  );
}

SearchForm.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default SearchForm;

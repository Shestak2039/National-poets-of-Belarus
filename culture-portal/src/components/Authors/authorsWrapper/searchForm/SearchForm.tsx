import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


import './search-form.css';

const SearchForm = () => {

  const handleChangle = (e: any) => {
    console.log(e.target.value);
  }
  return (
    <TextField
      id="standard-search"
      type="search"
      margin="normal"
      style={{ margin: 16 }}
      placeholder='a'
      fullWidth
      onChange={handleChangle}
  />
  );
}

export default SearchForm;

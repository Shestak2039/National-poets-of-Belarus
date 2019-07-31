import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

import './search-form.css';

const SearchForm = ({changeHandler = null} : {changeHandler: any}) => {
  const handleChange = (e: object) => {
    changeHandler(e);
  }
  return (
    <TextField
      id="outlined-search"
      type="search"
      margin="normal"
      placeholder='Find author...'
      onChange={handleChange}
      autoComplete="off"
      variant="outlined"
      style={{margin: 4, width: "calc(100% - 8px)"}}
  />
  );
}

SearchForm.propTypes = {
  changeHandler: PropTypes.func.isRequired,
};

export default SearchForm;

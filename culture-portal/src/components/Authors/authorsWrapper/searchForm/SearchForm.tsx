import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes, { func } from 'prop-types';

import './search-form.css';

const SearchForm = ({changeHandler, focusHandler} : {changeHandler: any, focusHandler: any}) => {
  const handleChange = (e: object) => {
    changeHandler(e);
  }

  const handleFocus = (flag: boolean) => {
    focusHandler(flag);
  }

  return (
    <TextField
      id="outlined-search"
      type="search"
      margin="normal"
      placeholder='Find author...'
      onChange={handleChange}
      onFocus={handleFocus.bind(null, true)}
      onBlur={handleFocus.bind(null, false)}
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

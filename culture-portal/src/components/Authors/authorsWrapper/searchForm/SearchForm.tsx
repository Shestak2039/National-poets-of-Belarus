import React from 'react';
import TextField from '@material-ui/core/TextField';
import './search-form.css';

const SearchForm = ({changeHandler, focusHandler} : {changeHandler: any, focusHandler: any}) => {
  const handleChange = (e: object) => {
    changeHandler(e);
  }

  const handleFocus = () => {
    focusHandler();
  }

  return (
    <TextField
      id="outlined-search"
      type="search"
      margin="normal"
      placeholder='Find author...'
      onChange={handleChange}
      onFocus={handleFocus}
      autoComplete="off"
      variant="outlined"
      style={{margin: 4, width: "calc(100% - 8px)"}}
    />
  );
}

export default SearchForm;

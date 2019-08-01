import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import {Close} from '@material-ui/icons';

const styles: any = (theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  formControl: {
    margin: '5px',
  },
});

type FilterProps = {
  classes: any,
  handleFilter: any,
  handleClose?: any,
};

interface FilterState {
  value: any,
}

class SearchFilter extends Component<FilterProps, FilterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: 'nameAuthor'
    }
  }

  handleChange = (e: any) => {
    this.setState({
      value: e.target.value,
    });
    this.props.handleFilter(e.target.value);
  }
  handleClose = () => {
    this.props.handleClose();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="search-filter">
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Search by:</FormLabel>
          <RadioGroup
            className={classes.root}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="nameAuthor" control={<Radio color="primary" />} label="Name" />
            <FormControlLabel value="Birhtplace" control={<Radio color="primary" />} label="Birthplace" />
            <FormControlLabel value="yearsOfLife" control={<Radio color="primary" />} label="Works" />
          </RadioGroup>
        </FormControl>
        <p onClick={this.handleClose}>Close filter</p>
        {/* <CloseIcon onClick={this.handleClose} />
        <Icon>close</Icon> */}
      </div>
    );
  }
}


export default withStyles(styles)(SearchFilter);

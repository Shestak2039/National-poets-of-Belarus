import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles: any = (theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  formControl: {
    margin: '5px',
  },
});

type FilterProps = {classes: any };

interface FilterState {
  value: any,
}

class SearchFilter extends Component<FilterProps, FilterState> {
  state = {
    value: 'Name',
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
            // onChange={handleChange}
          >
            <FormControlLabel value="Name" control={<Radio color="primary" />} label="Name" />
            <FormControlLabel value="Birhtplace" control={<Radio color="primary" />} label="Birthplace" />
            <FormControlLabel value="Works" control={<Radio color="primary" />} label="Works" />
          </RadioGroup>
        </FormControl>
        <p>Close</p>
      </div>
    );
  }
}


export default withStyles(styles)(SearchFilter);

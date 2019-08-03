import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CloseIcon from '@material-ui/icons/Close';
import { red } from '@material-ui/core/colors';
import i18n from '../../../../../i18n';

const styles: any = (theme: any) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  formControl: {
    margin: '5px',
  },
  icon: {
    marginRight: '10px',
    '&:hover': {
      color: red[800],
      cursor: 'pointer',
    },
  }
});

type FilterProps = {
  classes: any,
  handleFilter: any,
  handleClose?: any,
  filterValue: any,
};

interface FilterState {
  value: any,
}

class SearchFilter extends Component<FilterProps, FilterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: props.filterValue,
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
    const formLegend = i18n.t('Search by:');
    const nameLabel = i18n.t('Name');
    const birthplaceLabel = i18n.t('Birthplace');
    const yearsLabel = i18n.t('Years of live');
    return (
      <div className={classes.container}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{formLegend}</FormLabel>
          <RadioGroup
            className={classes.root}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="nameAuthor" control={<Radio color="primary" />} label={nameLabel} />
            <FormControlLabel value="Birhtplace" control={<Radio color="primary" />} label={birthplaceLabel} />
            <FormControlLabel value="yearsOfLife" control={<Radio color="primary" />} label={yearsLabel} />
          </RadioGroup>
        </FormControl>
        <CloseIcon onClick={this.handleClose} className={classes.icon} />
      </div>
    );
  }
}


export default withStyles(styles)(SearchFilter);

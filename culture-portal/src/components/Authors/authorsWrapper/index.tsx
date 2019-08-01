import React, { Component } from 'react';
import SearchFilter from './searchForm/searchFilter/SearchFilter';


import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';
import i18n from '../../../i18n';

type AuthorsProps = {authors: any };

interface AuthorsState {
  authorsList?: Array<object>,
  filterIsOpen: boolean,
  filterValue: string,
}

class AuthorsWrapper extends Component<AuthorsProps, AuthorsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      filterIsOpen: false,
      authorsList: props.authors,
      filterValue: 'nameAuthor',
    }
  }
  static propTypes: { authors: PropTypes.Validator<unknown[]>; };

  handleSearch = (e: any) => {
    const searchResult = [...this.props.authors].filter(item => {
      const itemForSearch = i18n.t(item.fields[this.state.filterValue]).toLowerCase();
      const searchData = e.target.value.toLowerCase();
      return itemForSearch.includes(searchData);
    });
    this.setState({
      authorsList: searchResult,
    });
  }

  handleFocus = (flag: boolean) => {
    this.setState({
      filterIsOpen: true,
    });
  }

  changeFilter = (value: any) => {
    this.setState({
      filterValue: value,
    })
  }

  closeFilter = () => {
    this.setState({
      filterIsOpen: false,
    })
  }

  render() {
    const authors = this.state === null ? this.props.authors : this.state.authorsList;
    console.log(authors);
    return (
      <>
        <SearchForm changeHandler={this.handleSearch}  focusHandler={this.handleFocus} />
        {this.state.filterIsOpen ? <SearchFilter handleFilter={this.changeFilter} handleClose={this.closeFilter} /> : null}
        {authors.length ? <AuthorsList authors={authors} /> : <p>Sorry. We're didn't find anything :(</p>}
      </>
    )
  }
}

AuthorsWrapper.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default AuthorsWrapper;

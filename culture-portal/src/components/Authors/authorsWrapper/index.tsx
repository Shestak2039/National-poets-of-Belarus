import React, { Component } from 'react';
import SearchFilter from './searchForm/searchFilter/SearchFilter';


import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';
import i18n from '../../../i18n';
import SearchFallback from './searchForm/SearchFallback/SearchFallback';

type AuthorsProps = {authors: any, data: any };

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

  handleClose = (e: any) => {
    console.log(e.target);
    this.setState({
      filterIsOpen: false,
    })
  }

  render() {
    const authors = this.state.authorsList || this.props.authors;
    const { data } = this.props;
    return (
      <>
        <SearchForm changeHandler={this.handleSearch}  focusHandler={this.handleFocus} />
        {authors.length ? <AuthorsList authors={authors} data={data}/> : <SearchFallback />}
      </>
    )
  }
}

AuthorsWrapper.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default AuthorsWrapper;

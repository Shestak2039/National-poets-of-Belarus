import React, { Component } from 'react';

import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';
import i18n from '../../../i18n';
import SearchFallback from './searchForm/SearchFallback/SearchFallback';

type AuthorsProps = {authors: any, data: any };

interface AuthorsState {
  authorsList?: Array<object>,
  filterIsOpen: boolean
}

class AuthorsWrapper extends Component<AuthorsProps, AuthorsState> {
  constructor(props: any) {
    super(props);

    this.state = {
      filterIsOpen: false,
      authorsList: props.authors,
    }
  }
  static propTypes: { authors: PropTypes.Validator<unknown[]>; };

  handleSearch = (e: any) => {
    const searchResult = [...this.props.authors].filter(item => {
      const authorName = i18n.t(item.fields.nameAuthor).toLowerCase();
      // console.log('name', authorName);
      const searchData = e.target.value.toLowerCase();
      // console.log('data', searchData);
      // console.log('return', authorName.includes(searchData));
      return authorName.includes(searchData);
    });
    this.setState({
      authorsList: searchResult,
    });
  }

  handleFocus = (flag: boolean) => {
    this.setState({filterIsOpen: flag ? true : false}); // if e.target !== filter => false
  }
  componentWillUpdate() {
    console.log('upd');
  }

  render() {
    const authors = this.state.authorsList || this.props.authors;
    const { data } = this.props;
    console.log(authors);
    console.log(data);
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

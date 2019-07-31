import React, { Component } from 'react';

import PropTypes from 'prop-types';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';
import i18n from '../../../i18n';

type AuthorsProps = {authors: any };

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
      const searchData = e.target.value.toLowerCase();
      return authorName.includes(searchData);
    });
    this.setState({
      authorsList: searchResult,
    });
  }

  handleFocus = (flag: boolean) => {
    this.setState({filterIsOpen: flag ? true : false}); // if e.target !== filter => false
  }

  render() {
    const authors = this.state === null ? this.props.authors : this.state.authorsList;
    return (
      <>
        <SearchForm changeHandler={this.handleSearch}  focusHandler={this.handleFocus} />
        {authors.length ? <AuthorsList authors={authors} /> : <p>Sorry. We're didn't find anything :(</p>}
      </>
    )
  }
}

AuthorsWrapper.propTypes = {
  authors: PropTypes.instanceOf(Array).isRequired
};

export default AuthorsWrapper;

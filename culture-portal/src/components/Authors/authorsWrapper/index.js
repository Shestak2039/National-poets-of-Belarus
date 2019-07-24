import React from 'react';

import SearchForm from './searchForm/SearchForm';
import AuthorsList from './AuthorsList/AuthorList';

class AuthorsWrapper extends React.Component {
    render() {
        return (
            <>
                <SearchForm />
                <AuthorsList />
            </>
        );
    }
}

export default AuthorsWrapper;
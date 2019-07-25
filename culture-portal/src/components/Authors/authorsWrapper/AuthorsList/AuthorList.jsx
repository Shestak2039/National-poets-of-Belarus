import React from 'react';
import { Link } from 'react-router-dom';

import './author-list.css';

const AuthorList = () => (
  <ul className="authors-list">
    <li className="authors-list__item">
      <Link to="/authors/1">1</Link>
    </li>
    <li className="authors-list__item">
      <Link to="/authors/2">2</Link>
    </li>
    <li className="authors-list__item">
      <Link to="/authors/3">3</Link>
    </li>
    <li className="authors-list__item">
      <Link to="/authors/4">4</Link>
    </li>
    <li className="authors-list__item">
      <Link to="/authors/5">5</Link>
    </li>
  </ul>
);

export default AuthorList;

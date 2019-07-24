import React from 'react';
import { Link } from "react-router-dom";

import './navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className = 'nav'>
        <ul className = 'navigation'>
          <li className = 'navigation__link'><Link to="/">Main</Link></li>
          <li className = 'navigation__link'><Link to="/authors">Authors</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
import React from 'react';

import './content-wrapper.css';

class ContentWrapper extends React.Component {
  render() {
    return (
      <main className = 'content-wrapper'>
        {this.props.children}
      </main>
    )
  }
}

export default ContentWrapper;

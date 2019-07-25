import React from 'react';
import PropTypes from 'prop-types';

import './content-wrapper.css';

const ContentWrapper = (props) => {
  const { children } = props;
  return (
    <main className="content-wrapper">
      {children}
    </main>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.element,
};

ContentWrapper.defaultProps = {
  children: 'Content',
};

export default ContentWrapper;

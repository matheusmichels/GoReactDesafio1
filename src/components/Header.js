import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="header">
    <p className="headerTitle">
      {props.title}
    </p>
  </div>
);

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Default Title',
};

export default Header;

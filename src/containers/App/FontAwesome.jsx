import React from 'react';
import PropTypes from 'prop-types';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCheck, faMinus, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faPlusSquare, faMinusSquare} from '@fortawesome/free-regular-svg-icons';

library.add(
  faPlusSquare,
  faMinusSquare,
  faCheck,
  faMinus,
  faTimes
);

class FontAwesome extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <React.Fragment>{children}</React.Fragment>
    );
  }
}

FontAwesome.propTypes = {
  children: PropTypes.array.isRequired
};
FontAwesome.defaultProps = {};

export default FontAwesome;

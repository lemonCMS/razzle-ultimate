import React from 'react';
import PropTypes from 'prop-types';
import _isFunction from 'lodash/isFunction';
import _get from 'lodash/get';
import AppContext from '../context/AppContext';

class Show extends React.Component {

  render() {
    if (this.props.hidden && _isFunction(this.props.hidden)) {
      if (this.props.context.checkCondition(this.props.hidden, _get(this.props, 'parent')) === true) {
        return null;
      }
    } else if (this.props.show && _isFunction(this.props.show)) {
      if (this.props.context.checkCondition(this.props.show, _get(this.props, 'parent')) !== true) {
        return null;
      }
    }
    return (this.props.children);
  }
}

Show.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  hidden: PropTypes.func,
  show: PropTypes.func,
  context: PropTypes.object
};
Show.defaultProps = {};

export default function (props) {
  return (
    <AppContext.Consumer>
      {(context) => <Show context={context} {...props} />}
    </AppContext.Consumer>
  );
};

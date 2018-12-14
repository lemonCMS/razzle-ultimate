import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import _isFunction from 'lodash/isFunction';
import AppContext from "../context/AppContext";

class Message extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    hidden: PropTypes.func,
    show: PropTypes.func,
    type: PropTypes.string,
    context: PropTypes.object
  };

  render() {
    const {submitting, valid, submitFailed, submitSucceeded} = this.props.context.status;

    if (this.props.hidden && _isFunction(this.props.hidden)) {
      if (this.props.context.checkCondition(this.props.hidden) === true) {
        return null;
      }
    } else if (this.props.show && _isFunction(this.props.show)) {
      if (this.props.context.checkCondition(this.props.show) !== true) {
        return null;
      }
    }

    if (this.props.type === 'success' && !submitting) {
      if (valid === true && submitSucceeded === true && submitting === false) {
        return (<Alert bsStyle="success">{this.props.children}</Alert>);
      }
    }

    if (this.props.type === 'error' && !submitting) {
      if (valid === false && submitFailed === true) {
        return (<Alert bsStyle="danger">{this.props.children}</Alert>);
      }
    }
    return <span />;
  }
}

export default function (props) {
  return (
    <AppContext.Consumer>
      {(context) => <Message context={context} {...props} />}
    </AppContext.Consumer>
  );
};

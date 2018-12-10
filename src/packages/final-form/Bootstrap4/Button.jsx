import React, {Component} from 'react';
import BSButton from 'react-bootstrap/lib/Button';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

class Button extends Component {
  render() {
    const {children, ...rest} = this.props;

    if (this.props.context.isStatic === true) {
      return null;
    }

    return (
      <BSButton {...rest}
                disabled={(this.props.context.status.submitting === true || this.props.context.status.valid === false || this.props.context.status.pristine === true) && this.props.context.status.dirtySinceLastSubmit === false}>
        {children}
        {this.props.type === 'submit' && this.props.context.status.submitting && ' '}
        {this.props.type === 'submit' && this.props.context.status.submitting &&
        <i className="fa fa-circle-o-notch fa-spin" />}
      </BSButton>
    );
  }
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  type: PropTypes.string,
  context: PropTypes.object
};
Button.defaultProps = {};

const Binder = (props) => (
  <AppContext.Consumer>
    {(context) => <Button context={context} {...props} />}
  </AppContext.Consumer>);

export default Binder;


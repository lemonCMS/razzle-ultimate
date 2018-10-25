import PropTypes from 'prop-types';
import React from 'react';
import {FormSpy} from 'react-final-form';
import _isFunction from 'lodash/isFunction';

class ContextWrapper extends React.Component {

  static childContextTypes = {
    checkCondition: PropTypes.func.isRequired,
    isStatic: PropTypes.bool.isRequired,
    debug: PropTypes.bool.isRequired,
    status: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.checkCondition = this.checkCondition.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.values = {};
  }

  getChildContext() {
    return {
      checkCondition: this.checkCondition,
      isStatic: this.props.static,
      debug: this.props.debug,
      status: this.getStatus()
    };
  }

  getStatus() {
    const {dirty, dirtySinceLastSubmit, error, errors, invalid, pristine, submitError, submitErrors, submitFailed, submitSucceeded, submitting, valid, validating} = this.props;
    return {
      dirty, dirtySinceLastSubmit, error, errors, invalid, pristine, submitError, submitErrors, submitFailed, submitSucceeded, submitting, valid, validating
    };
  }

  checkCondition(args) {
    return args(this.props.values);
  }

  render() {
    if (this.props.debug) {
      return (
        <div>
          {this.props.children}
          <FormSpy subscription={{values: true}}>
            {({values}) => {
              if (this.props.listen && _isFunction(this.props.listen)) {
                this.props.listen(values);
              }

              return (
                <pre>
                  {JSON.stringify(values, 0, 2)}
                </pre>
              );
            }}
          </FormSpy>
        </div>);
    }

    return (
      <React.Fragment>
        {this.props.children}
        {
          this.props.listen
          && _isFunction(this.props.listen)
          && <FormSpy
            subscription={{values: true}}
            onChange={(props) => {
              this.props.listen(props.values);
            }}/>
        }
      </React.Fragment>
    );
  }
}

ContextWrapper.propTypes = {
  children: PropTypes.object,
  'static': PropTypes.bool,
  values: PropTypes.object,
  debug: PropTypes.bool,
  dirty: PropTypes.bool,
  dirtySinceLastSubmit: PropTypes.bool,
  errors: PropTypes.object,
  error: PropTypes.bool,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitError: PropTypes.bool,
  submitErrors: PropTypes.object,
  submitFailed: PropTypes.bool,
  submitSucceeded: PropTypes.bool,
  submitting: PropTypes.bool,
  valid: PropTypes.bool,
  validating: PropTypes.bool,
  listen: PropTypes.func
};

ContextWrapper.defaultProps = {
  'static': false,
  debug: false
};

export default ContextWrapper;

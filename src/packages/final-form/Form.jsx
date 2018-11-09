import arrayMutators from 'final-form-arrays';
import PropTypes from 'prop-types';
import React from 'react';
import {Form as FinalForm} from 'react-final-form';
import isEqual from 'react-fast-compare';
import _omit from 'lodash/omit';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown'
import {faChevronUp} from '@fortawesome/free-solid-svg-icons/faChevronUp'
import ContextWrapper from './ContextWrapper';

library.add(faTrash);
library.add(faChevronDown);
library.add(faChevronUp);

const onSubmit = async (values) => {
  console.warn('Implement onSubmit handler');
  console.warn(values);
};

class FormObj extends React.Component {
  shouldComponentUpdate(nextProps) {

    if (!isEqual(nextProps.initialValues, this.props.initialValues)) {
      return true;
    }

    switch (typeof this.props.shouldComponentUpdate) {
      case 'undefined':
        return false;
      case 'function':
        return this.props.shouldComponentUpdate();
      default:
        return this.props.shouldComponentUpdate !== nextProps.shouldComponentUpdate;
    }
  }

  render() {
    return (<FinalForm
      keepDirtyOnReinitialize={this.props.keepDirtyOnReinitialize}
      onSubmit={this.props.onSubmit || onSubmit}
      subscription={this.props.subscription}
      validate={this.props.validate || (() => ({}))}
      initialValues={this.props.initialValues || {}}
      mutators={{...arrayMutators}}
      render={({handleSubmit, ...rest}) =>
        (
          <ContextWrapper {..._omit(this.props, ['onSubmit', 'validate', 'initialValues', 'subscription', 'shouldComponentUpdate'])} {...rest}>
            <form
              onSubmit={handleSubmit}
              className={this.props.className}>
              {this.props.children}
            </form>
          </ContextWrapper>)
      } />);
  }
}

FormObj.propTypes = {
  keepDirtyOnReinitialize: PropTypes.bool,
  initialValues: PropTypes.object,
  subscription: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSubmit: PropTypes.func,
  validate: PropTypes.func,
  className: PropTypes.string,
  shouldComponentUpdate: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool, PropTypes.string]),
  listen: PropTypes.func,
  debug: PropTypes.bool
};
FormObj.defaultProps = {
  debug: false,
  keepDirtyOnReinitialize: false
};

export default FormObj;

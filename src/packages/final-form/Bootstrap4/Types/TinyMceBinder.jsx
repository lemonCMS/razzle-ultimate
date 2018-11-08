/* eslint react/no-danger: "off" */
import React from 'react';
import PropTypes from 'prop-types';
import TinyMceInput from './TinyMceInput';
import AppContext from '../../context/AppContext';

class ContextBinder extends React.Component {

  render() {
    if (this.props.context.isStatic || this.props.field.static) {
      return (
        <div className={'rte-readonly'} dangerouslySetInnerHTML={{__html: this.props.input.value}} />
      );
    }

    return (
      <TinyMceInput readOnly {...this.props.input} className={this.props.field.className} tinymceConfig={Object.assign({}, this.props.field.config)} />
    );
  }
}

ContextBinder.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object,
  context: PropTypes.object,
};


const Binder = (props) => (
  <AppContext.Consumer>
    {(context) => <ContextBinder context={context} {...props} />}
  </AppContext.Consumer>);

export default Binder;


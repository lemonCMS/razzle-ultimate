import React from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/lib/FormControl'

const Binder = ({input, field}) => (
  <FormControl type={field.type} {...input} />
);

Binder.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object,
};

export default Binder;

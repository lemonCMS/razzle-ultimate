import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import connectToList from '../../packages/laravel/decorators/connectToList';

@connectToList({
  key: 'users',
  api: '/users',
  path: '/laravel',
  cols: [
    {
      name: 'Status',
      show: 'active',
      translate: {
        false: <FontAwesomeIcon icon={['fas', 'minus']} fixedWidth />,
        true: <FontAwesomeIcon icon={['fas', 'check']} fixedWidth />
      }
    },
    {name: 'ID', show: 'id', order: true},
    {name: 'Name', show: 'name', order: true, edit: true},
    {name: 'Email', show: 'email', order: true, edit: true},
  ]
})
class List extends Component {
  render() {
    return (
      this.props.children
    );
  }
}

List.propTypes = {
  children: PropTypes.object
};
List.defaultProps = {};

export default List;

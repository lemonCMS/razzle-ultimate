import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import MenuItem from './MenuItem';

class MenuWrap extends Component {
  static propTypes = {
    menu: PropTypes.array.isRequired,
    location: PropTypes.object,
    match: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string,
    role: PropTypes.string,
  };

  render() {
    const {menu, className, id, role, location, match} = this.props;
    return (
      <ul className={className} id={id} role={role}>
        {_.map(menu, (item, i) => (<MenuItem key={i} item={item} location={location} match={match}/>))}
      </ul>
    );
  }
}

export default withRouter(MenuWrap);

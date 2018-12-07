import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MenuWrap from './MenuWrap';

// require('./animate.css');
// require('./menu.css');

class Menu extends Component {

  render() {
    const {menu, className, id, role} = this.props;
    return (
      <MenuWrap className={className} id={id} role={role} menu={menu} active />
    );
  }
}

Menu.propTypes = {
  menu: PropTypes.array,
  className: PropTypes.string,
  id: PropTypes.string,
  role: PropTypes.string,
};

export default Menu;

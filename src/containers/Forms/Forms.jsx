import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink, Switch} from 'react-router-dom'
import {renderRoutes} from 'react-router-config';

class Forms extends Component {
  render() {
    const {route: {routes}} = this.props;
    return (
      <div className={'container'}>
        <div className={'row'}>
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item">
                <NavLink to={'/forms'} activeClassName={'active'}>
                  Login
                </NavLink>
              </li>
              <li className="list-group-item">
                <NavLink to={'/forms/register'} activeClassName={'active'}>
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <Switch>
              {renderRoutes(routes)}
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

Forms.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired
};
Forms.defaultProps = {
};

export default Forms;

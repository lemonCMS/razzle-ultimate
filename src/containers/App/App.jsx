import React from 'react';
import PropTypes from 'prop-types';
import {Switch} from 'react-router';
import {renderRoutes} from 'react-router-config';
import {NavLink} from 'react-router-dom';
import './app.scss';

class App extends React.Component {
  render() {
    const {route: {routes}} = this.props;
    return (
      <div className={'container'}>
        <ul className="nav">
          <li className="nav-item">
            <NavLink exact className="nav-link" to={'/'} activeClassName={'active'}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/counters'} activeClassName={'active'}>Counters</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={'/forms'} activeClassName={'active'}>Forms</NavLink>
          </li>
        </ul>
        <Switch>{renderRoutes(routes)}</Switch>
      </div>
    );
  }
}

App.propTypes = {
  route: PropTypes.instanceOf(Object)
};

export default App;

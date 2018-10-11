import React from 'react';
import PropTypes from 'prop-types';
import {Switch} from 'react-router';
import {renderRoutes} from 'react-router-config';
import {Link} from 'react-router-dom';
import logo from './react.svg';
import './app.scss';

class App extends React.Component {



  render() {
    const {route: {routes}} = this.props;
    return (
      <div>
        ALA

        <Switch>{renderRoutes(routes)}</Switch>
      </div>
    );
  }
}

export default App;

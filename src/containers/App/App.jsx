import React from 'react';
import Helmet from 'react-helmet';
// import PropTypes from 'prop-types';
import {Switch} from 'react-router';
import {renderRoutes} from 'react-router-config';
import {NavLink} from 'react-router-dom';
// import logo from './react.svg';
import './app.scss';

class App extends React.Component {
  render() {
    const {route: {routes}} = this.props;
    return (
      <div className={'container'}>
        <Helmet>
          <script type={"text/javascript"} src={'/js/plupload-2.1.9/plupload.full.min.js'} />
          <script type={"text/javascript"} src={'/js/tinymce/js/tinymce/tinymce.min.js'} />
        </Helmet>
        <div className="jumbotron">
          <h1 className="display-4">Welcome to @Wicked_query/UltimateJS</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention
            to featured content or information.
          </p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="http://tweakers.net" role="button">Learn more</a>
            </p>
        </div>

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

export default App;

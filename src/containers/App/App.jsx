import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {Switch} from 'react-router';
import {renderRoutes} from 'react-router-config';
import Menu from '../../packages/admin/Menu/Menu';
import menu from '../../menu';
import './app.scss';

const txt = require('./bla.txt');

class App extends React.Component {

  render() {


    const {route: {routes}} = this.props;
    return (
      <React.Fragment>
        <Helmet
          script={[
            {type: 'text/javascript', src: '/js/plupload-2.1.9/plupload.full.min.js'},
            {type: 'text/javascript', src: '/js/tinymce/js/tinymce/tinymce.min.js'}
          ]}
        />
        <div id="sidebar-wrapper">

          <Menu menu={menu} className={'sidebar-nav'}/>

        </div>

        <div id={'page-content-wrapper'}>
          {txt}
          <Switch>{renderRoutes(routes)}</Switch>
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  route: PropTypes.instanceOf(Object)
};

export default App;

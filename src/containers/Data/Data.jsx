import React, {Component} from 'react';
import {provideHooks} from '../../packages/redial';
import {load, isLoaded} from '../../packages/redux/store/actions';
// import PropTypes from 'prop-types';
/* eslint-disable */
@provideHooks({
  fetch: ({store: {dispatch, getState}, params, match, history}) => {
    const state = getState();
    const promise = [];
    console.log('state', state);

    if (!isLoaded('users', state, {})) {
      promise.push(dispatch(load('users', '/users', {})));
    }

    return Promise.all(promise);
  }
})
class Data extends Component {
  render() {
    return (
      <div>
        <h1>Data fetching</h1>
      </div>
    );
  }
}

Data.propTypes = {};
Data.defaultProps = {};

export default Data;

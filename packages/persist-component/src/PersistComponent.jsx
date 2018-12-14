import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _map from 'lodash/map';
import {ReactReduxContext} from 'react-redux';
import prepare from './prepare';

class PersistComponent extends React.Component {

  static contextTypes = {
    store: PropTypes.object
  };

  lastState = {};

  restored = false;

  state = {mounted: false};

  constructor(props) {
    super(props);
    this.append = this.append.bind(this);
  }

  componentDidMount() {
    if (this.state.mounted === false) {
      this.setState({mounted: true}, () => this.append());
    }
  }

  append() {
    const {storage, modules} = this.props;
    const preparedModules = prepare(modules);
    this.props.store.subscribe(() => {
      const state = this.props.store.getState();
      if (this.restored === true) {
        _map(preparedModules, (module, key) => {
          const newState = _get(state, key);
          this.lastState[key] = module.save(newState, this.lastState[key], storage);
        });
      }
    });

    _map(preparedModules, (module, key) => {
      const promise = [];
      promise.push(this.props.storage.getItem(key).then((item) => {
        if (item !== null && item !== 'undefined') {
          try {
            const result = typeof item === 'string' ? JSON.parse(item) : item;
            const state = this.props.store.getState();
            if (state[key] && JSON.stringify(state[key]) !== item) {
              module.restore({dispatch: this.props.store.dispatch, result, currentState: state[key], key})
            }
          } catch (e) {
            console.log('Json parse failed', e);
          }
        }
      }));
      Promise.all(promise).then(() => {
        this.restored = true;
      });
    });
  }

  render() {
    return this.props.children;
  }
}

PersistComponent.propTypes = {
  children: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
  modules: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  storage: PropTypes.object.isRequired
};
PersistComponent.defaultProps = {};


export default (props) => (
  <ReactReduxContext.Consumer>{(context) => <PersistComponent {...context} {...props} />}</ReactReduxContext.Consumer>);

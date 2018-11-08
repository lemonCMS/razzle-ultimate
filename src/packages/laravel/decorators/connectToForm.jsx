import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _has from 'lodash/has';
import {withRouter} from 'react-router';
import {post, update, updateListItem, clearItem, clearList} from '../../redux/store/actions';

export default custom => (Component) => {

  const config = Object.assign({}, {
    api: null,
    key: null
  }, custom);


  if (!config.api) {
    console.warn('Path to your `api` is required');
  }
  if (!config.key) {
    console.warn('Redux store `key` is required');
  }

  @withRouter
  class WrappedComponent extends React.Component {
    static propTypes = {
      dispatch: PropTypes.func.isRequired,
      match: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    };

    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        id: null,
        edit: false,
        confirm: false,
        close: false,
        newItem: false,
        location: ''
      };
    }

    static getDerivedStateFromProps(props) {
      const {history: {location: {pathname}}, match: {params}} = props;
      const edit = _has(pathname.match(/(edit|confirm|close)$/g), [0]);
      const id = edit ? params.id : null;

      return {
        id,
        edit,
        confirm: _has(pathname.match(/confirm$/g), [0]),
        close: _has(pathname.match(/close/g), [0]),
        newItem: _has(pathname.match(/new/g), [0]),
      };
    }

    componentWillUnmount() {
      this.props.dispatch(clearItem('users'));
    }

    onSubmit = async (payload) => new Promise((resolve) => {
      let promise = null;
      if (!this.state.edit) {
        this.props.dispatch(clearList('users'));
        promise = this.props.dispatch(post(config.key, `${config.api}`, payload));
      } else {
        promise = this.props.dispatch(update(config.key, `${config.api}`, this.props.match.params.id, payload));
      }

      promise.then((ret) => {
        if (ret && Object.prototype.hasOwnProperty.call(ret, 'error')) {
          resolve(ret.error);
        }
        if (this.state.newItem) {
          this.props.history.push(`${this.props.history.location.pathname}/${_get(ret, 'id', 'new')}/edit`);
        } else {
          const record = Object.assign({}, payload, {id: parseInt(this.props.match.params.id, 10)});
          this.props.dispatch(updateListItem(config.key, record));
        }
        resolve();

      }).catch((err) => {
        if (err && Object.prototype.hasOwnProperty.call(err, 'error')) {
          resolve(err.error);
        }
        resolve(err);
      });
    });

    render() {
      const props = {
        ...this.props,
        ...this.state,
        onSubmit: this.onSubmit
      };

      return (<Component {...props} />);
    }
  }

  return WrappedComponent;
};


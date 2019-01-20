import PropTypes from 'prop-types';
import React, {Component} from 'react';
import _get from 'lodash/get';
import _has from 'lodash/has';
import _flatten from 'lodash/flatten';
import _compact from 'lodash/compact';
import _cloneDeep from 'lodash/cloneDeep';
import _isFunction from 'lodash/isFunction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {provideHooks} from '@slumdogjs/redial/lib';
import {destroyItem, isLoaded, load} from '@slumdogjs/redux/lib/store/actions';
import DataTable from '../components/DataTable';
import connectToFilter, {createAllParamsForFetch} from './connectToFilter';
import connectToConfirm from './connectToConfirm';
import Search from '../components/Search';
import Pending from '../components/Pending';

export default function connnectToList(properties) {
  return (WrappedComponent) => {
    @provideHooks({
      fetch: ({store: {dispatch, getState}, params, match, history}) => {
        const promises = [];
        const state = createAllParamsForFetch(getState(), match, history);
        const api = () => {
          if (_isFunction(properties.api)) {
            return properties.api(params);
          }
          return properties.api;
        };

        if (!isLoaded(properties.key, getState(), state)) {
          promises.push(dispatch(load(properties.key, api(), state)));
        }

        return Promise.all(promises);
      }
    })
    @withRouter
    @connectToFilter()
    @connectToConfirm()
    @connect(state => (
      {
        data: state.store[properties.key],
        auth: state.auth,
      }))
    class Connection extends Component {

      static propTypes = {
        children: PropTypes.oneOfType([
          PropTypes.array,
          PropTypes.object,
          PropTypes.string
        ]),
        auth: PropTypes.object,
        data: PropTypes.object,
        match: PropTypes.object,
        history: PropTypes.object,
        switchPage: PropTypes.func,
        pushSearch: PropTypes.func,
        pushOnState: PropTypes.func,
        pushStateAttempt: PropTypes.func,
        inputOnStack: PropTypes.func,
        dispatch: PropTypes.func,
        showModal: PropTypes.func,
      };

      constructor() {
        super();
        this.filter = this.filter.bind(this);
        this.show = this.show.bind(this);
        this.edit = this.edit.bind(this);
        this.destroy = this.destroy.bind(this);
        this.path = this.path.bind(this);
        this.state = {
          path: ''
        };
      }

      componentDidMount() {
        this.path();
      }

      componentDidUpdate() {
        // this.path();
      }

      path() {
        let {path} = properties;
        if (_isFunction(path)) {
          path = path(this.props.match.params);
        }
        this.setState({path});
      }

      filter() {
        return (
          <div className="card panel-border-tb">
            <div className="card-body">
              <div className="card-heading">
                <Link to={`${properties.path}/new`}
                      className="float-right"><i className="fa fa-plus" /> nieuw item
                  aanmaken</Link>
                <h4 className="card-title">Verfijn</h4>
              </div>

              <Search
                pushSearch={this.props.pushSearch}
                query={this.props.inputOnStack('search')} />
            </div>
          </div>);
      }

      show(item) {
        this.props.history.push(`${this.state.path}/${item.id}`);
      }

      edit(item) {
        this.props.history.push(`${this.state.path}/${item.id}/edit`);
      }

      destroy(item) {
        this.props.dispatch(destroyItem(properties.key, `${properties.api}`, item.id)).then(() => {
          this.props.pushOnState('d', item.id);
        });
      }

      render() {
        const dropDown = {};
        if (!properties.noDropDown) {
          dropDown.name = 'Acties';

          if (!properties.noEdit) {
            dropDown.dropdownButton = [
              {name: 'bekijken', onClick: this.show},
              {name: 'wijzigen', onClick: this.edit},
            ];
          }

          if (!properties.noDelete) {
            if (!dropDown.dropdownButton) {
              dropDown.dropdownButton = [];
            }

            dropDown.dropdownButton.push({divider: true});
            dropDown.dropdownButton.push({
              name: 'verwijderen',
              onClick: (item) => {
                this.props.showModal(item, this.destroy);
              }
            });
          }
        }

        const rows = _cloneDeep(_has(properties, 'rows') ? properties.rows : [{cols: properties.cols}]);
        if (Object.keys(dropDown).length > 0) {
          rows[0].cols = _compact(_flatten([rows[0].cols, [dropDown]]));
        }

        const getTable = () => {
          if (_get(this.props, ['data', 'success'], false) === true) {
            return (
              <DataTable
                records={this.props.data.list.data}
                rows={rows}
                dispatch={this.props.dispatch}
                pushOnState={this.props.pushOnState}
                inputOnStack={this.props.inputOnStack}
                order={this.props.inputOnStack('order')}
                auth={this.props.auth}
                edit={this.edit}
                show={this.show}
                paginator={{
                  currPage: this.props.data.list.current_page,
                  lastPage: this.props.data.list.last_page,
                  onChange: this.props.switchPage
                }}
              />);
          }
          return null;
        };

        const state = {
          pending: _get(this.props.data, 'pending', false),
          failed: _get(this.props.data, 'failed', false)
        };

        const warning = () => {
          if (_has(this.props, ['data', 'item', 'error'])) {
            return (<Alert variant="danger">{_get(this.props, ['data', 'item', 'error'])}</Alert>);
          }
          return null;
        };

        return (
          <WrappedComponent {...this.props}>
            {this.filter()}
            {warning()}
            <Pending state={state}>
              {getTable()}
            </Pending>
            {this.props.children}
          </WrappedComponent>
        );
      }
    }

    return Connection;
  };
}

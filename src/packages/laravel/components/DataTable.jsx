import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _filter from 'lodash/filter';
import _has from 'lodash/has';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _isString from 'lodash/isString';
import _isArray from 'lodash/isArray';
import _compact from 'lodash/compact';
import _find from 'lodash/find';
import React, {Component} from 'react';
import {Alert, ButtonToolbar, DropdownButton, Dropdown, Image} from 'react-bootstrap';
import {withRouter} from 'react-router';
import Paginator from './Paginator';
import moment from '../utils/moment';
import numeral from '../utils/numeral';

@withRouter
class DataTable extends Component {
  static propTypes = {
    records: PropTypes.array.isRequired,
    cols: PropTypes.array,
    rows: PropTypes.array,
    paginator: PropTypes.shape({
      currPage: PropTypes.number,
      lastPage: PropTypes.number,
      onChange: PropTypes.func
    }),
    edit: PropTypes.func,
    pushOnState: PropTypes.func,
    dispatch: PropTypes.func,
    inputOnStack: PropTypes.func,
    history: PropTypes.object
  };

  constructor() {
    super();
    this.renderRows = this.renderRows.bind(this);
    this.renderCols = this.renderCols.bind(this);
    this.renderRecords = this.renderRecords.bind(this);
    this.renderRecordCols = this.renderRecordCols.bind(this);
    this.renderRecordRows = this.renderRecordRows.bind(this);
    this.renderDropdownItems = this.renderDropdownItems.bind(this);
    this.renderPaginator = this.renderPaginator.bind(this);
    this.getValue = this.getValue.bind(this);
    this.check = this.check.bind(this);
    this.pushIds = this.pushIds.bind(this);
    this.state = {
      orderCol: null,
      checked: {},
      current: {},
      ids: {},
      idsTouched: {}
    };
  }

  getValue(record, col, key) {
    const cell = [];
    if (_has(col, 'checkbox')) {
      const click = (event) => {
        col.checkbox(event, record, this.props.dispatch);
        const {ids, idsTouched} = this.state;
        if (!ids[`box-${key}`]) {
          ids[`box-${key}`] = [];
        }
        if (!idsTouched[`box-${key}`]) {
          idsTouched[`box-${key}`] = [];
        }
        const index = ids[`box-${key}`].indexOf(record.id);
        if (index > -1) {
          ids[`box-${key}`].splice(index, 1);
        }

        if (event.target.checked) {
          ids[`box-${key}`].push(record.id);
        }

        const touched = idsTouched[`box-${key}`].indexOf(record.id);
        if (touched === -1) {
          idsTouched[`box-${key}`].push(record.id);
        }
        this.setState({ids, idsTouched});
      };
      const defaultChecked = _get(record, _get(col, 'show'), false);
      const checked = () => {
        const ids = this.state.ids;
        const idsTouched = this.state.idsTouched;

        if (!idsTouched[`box-${key}`] || !ids[`box-${key}`]) {
          return defaultChecked;
        }

        const touched = idsTouched[`box-${key}`].indexOf(record.id);
        if (touched === -1) {
          return defaultChecked;
        }

        const checkedId = ids[`box-${key}`].indexOf(record.id);
        if (checkedId > -1) {
          return true;
        }
        return false;
      };

      return (
        <input
          key={`checkbox${record.id}`}
          type="checkbox"
          onChange={click}
          checked={checked()}
        />
      );
    }
    if (_has(col, 'image')) {
      if (_has(record, col.image)) {
        cell.push(<Image
          key="image"
          src={`/image/small/${_get(record, col.image)}`}
          responsive
          thumbnail />);
      }
    }

    if (_has(col, 'text')) {
      cell.push(<span
        key="text"
        className="data-table-static-text">{col.text}</span>);
    }

    if (_has(col, 'link') && _has(col, 'onClick')) {
      const click = (event) => {
        event.preventDefault();
        col.onClick(record, this.props.history);
      };
      cell.push((
        <button
          type={'button'}
          className="btn btn-link"
          key="link"
          onClick={click}>{_get(col, 'link')}</button>
      ));
    }

    if (_has(col, 'array') && _has(col, 'arrayShow') && _has(col, 'onClick')) {
      _map(_get(record, col.array, []), (item, key2) => {
        let show = '';
        if (_isArray(col.arrayShow)) {
          _map(col.arrayShow, (arrayCol) => {
            show = show.concat(_get(item, arrayCol, ''), ' ');
          });
          show.trim();
        } else {
          show = _get(item, col.arrayShow, '');
        }

        cell.push(<button
          type="button"
          key={key2}
          className="btn btn-link"
          onClick={() => {
            col.onClick(item, this.props.history);
          }}>
          {show}
        </button>);
      });
    } else if (_has(col, 'array') && _has(col, 'arrayShow')) {
      _map(_get(record, col.array, []), (item) => {
        cell.push(<span>{_get(item, col.arrayShow, '')}</span>);
      });
    }

    if (_has(col, 'show')) {
      let value = '';
      if (_isString(col.show)) {
        if (_has(col, 'translate')) {
          value = _get(col, ['translate', _get(record, col.show, '')], '');
        } else if (_has(col, 'append')) {
          if (!_isEmpty(record, col.show, '')) {
            value = _get(record, col.show, 0) + _get(col, 'append');
          }
        } else if (_has(col, 'filter') && col.filter === 'numeral') {
          value = numeral(Number(_get(record, col.show, 0))).format('$0.00');
        } else if (_has(col, 'filter') && col.filter === 'date') {
          value = moment(_get(record, col.show, '')).format(_get(col, 'format', 'YYYY-MM-DD'));
        } else if (_has(col, 'filter') && col.filter === 'dateTime') {
          value = moment(_get(record, col.show, '')).format(_get(col, 'format', 'YYYY-MM-DD HH:mm'));
        } else if (_has(col, 'filter') && col.filter === 'unixDate') {
          value = moment.unix(_get(record, col.show, '')).format(_get(col, 'format', 'YYYY-MM-DD'));
        } else if (_has(col, 'filter') && col.filter === 'unixDateTime') {
          value = moment.unix(_get(record, col.show, '')).format(_get(col, 'format', 'YYYY-MM-DD HH:mm'));
        } else {
          value = _get(record, col.show, '');
        }
      } else if (_isArray(col.show)) {
        const values = [];
        _map(col.show, (field) => {
          values.push(<span key="'show'">{_get(record, field, '')}</span>);
        });
        value = _compact(value).join(' ');
      }

      if (_has(col, 'edit')) {
        cell.push(<button
          type={'button'}
          className="btn btn-link"
          key="link"
          onClick={() => {
            this.props.edit(record);
          }}>
          {value}
        </button>);
      } else if(_has(col, 'onClick')) {
        const click = (event) => {
          event.preventDefault();
          col.onClick(record, this.props.history);
        };

        cell.push(<button
          type={'button'}
          className="btn btn-link"
          key="showClick"
          onClick={click}>{value}</button>);

      } else {
        cell.push(<span className={'show'} key={'c1'}>{value}</span>);
      }

    }

    if (_has(col, 'fa')) {
      return (
        <div className="btn-group"
          role="group"
          aria-label="Basic example">
          {_map(col.fa, (item, itemKey) => {
            const click = () => {
              if (_has(item, 'onClick')) {
                const {paginator: {currPage}} = this.props;
                item.onClick({record, currPage, router: this.props.history, dispatch: this.props.dispatch});
              }
            };
            return (
              <button key={itemKey}
                type={'button'}
                className="btn btn-sm"
                onClick={click}>
                <i className={`fa fa-${item.icon}`} />
              </button>);
          })}
        </div>);
    }

    if (_has(col, 'dropdownButton')) {
      const dropDownItems = this.renderDropdownItems(_get(col, 'dropdownButton'), record);
      cell.push(<DropdownButton
        key="dbbutton"
        size="sm"
        title={col.name}
        id={`dropDown${key}`}>
        {dropDownItems}
      </DropdownButton>);
    }

    return cell;
  }

  pushIds(props) {
    const {ids} = this.state;
    const current = [];
    _map(props.records, (record) => {
      if (!_find(ids, {id: record.id})) {
        ids.push({id: record.id, checked: false, clicked: false});
        current.push(record.id);
      }
    });
    this.setState({
      ids,
      current
    });
  }

  check(event, key) {
    const {ids, idsTouched, checked} = this.state;
    if (!ids[`box-${key}`]) {
      ids[`box-${key}`] = [];
    }
    if (!idsTouched[`box-${key}`]) {
      idsTouched[`box-${key}`] = [];
    }
    _map(this.props.records, (record) => {
      const index = ids[`box-${key}`].indexOf(record.id);
      if (index > -1) {
        ids[`box-${key}`].splice(index, 1);
      }

      if (event.target.checked) {
        ids[`box-${key}`].push(record.id);
      }

      const touched = idsTouched[`box-${key}`].indexOf(record.id);
      if (touched === -1) {
        idsTouched[`box-${key}`].push(record.id);
      }

    });
    checked[`box-${key}`] = event.target.checked;
    this.setState({ids, idsTouched, checked});
  }

  renderRows() {
    if (_has(this.props, 'rows')) {
      return _map(this.props.rows, (row, key) =>
        (<tr key={key}>
          {this.renderCols(row.cols)}
        </tr>)
      );
    }

    return (
      <tr>
        {this.renderCols(this.props.cols)}
      </tr>
    );
  }

  renderCols(cols) {
    return _map(cols, (col, key) => {
      const orderName = `order-${key}`;
      const dbCol = (orderType) => {
        if (_has(col, 'show')) {
          if (_isString(col.show)) {
            return col.show + orderType;
          }
          if (_isArray(col.show)) {
            return _get(col.show, [0]) + orderType;
          }
        }
        return null;
      };

      const select1 = () => {
        const state = this.state;
        state[orderName] = 'A ... Z';
        state.orderCol = dbCol();
        this.setState(state, () => {
          this.props.pushOnState('order', dbCol('Asc'));
        });
      };

      const select2 = () => {
        const state = this.state;
        state[orderName] = 'Z ... A';
        state.orderCol = dbCol();
        this.setState(state, () => {
          this.props.pushOnState('order', dbCol('Desc'));
        });
      };

      const filter = (value) => {
        const state = this.state;
        state[_get(col, 'show')] = value;
        this.setState(state, () => {
          this.props.pushOnState(_get(col, 'show'), value);
        });
      };

      let actions = false;
      if (_has(col, 'actions')) {
        actions = _map(col.actions, (button, key2) =>
          (<Dropdown.Item
            key={key2}
            eventKey={key2}
            onSelect={() => {
              button.action(_get(this.state.ids, `box-${key}`, []), this.props.dispatch);
            }}>{button.name}</Dropdown.Item>)
        );
      }

      const title = () => {
        if (_get(col, 'filterBy', false) !== false) {
          const onStack = this.props.inputOnStack(_get(col, 'show'));
          if (onStack) {
            const result = _filter(col.filterBy, (item) => String(item.value) === String(onStack));
            if (result) {
              return result[0].desc;
            }
          }

          if (this.state[_get(col, 'show')]) {
            return (
              _get(col, `filterBy[${this.state[_get(col, 'show')]}].desc`, '')
            );
          }
        }

        if (this.state.orderCol === dbCol()) {
          if (_get(this.state, orderName)) {
            return this.state[orderName];
          }
        }

        if (this.state.orderCol === null) {
          if (dbCol('Asc') === _get(this.props, 'order')) {
            return 'A ... Z';
          }

          if (dbCol('Desc') === _get(this.props, 'order')) {
            return 'Z ... A';
          }
        }

        return _get(col, 'name', '');
      };

      const filterBy = _get(col, 'filterBy', false);
      if (filterBy !== false) {
        return (
          <th
            key={key}
            width={_get(col, 'width', 'auto')}
            colSpan={_get(col, 'colSpan', '1')}>
            <ButtonToolbar>
              <DropdownButton
                variant="link"
                title={title()}
                id={`dropdown-size-extra-small${key}`}>
                {_map(_get(col, 'filterBy', []), (item, itemKey) => (
                  <Dropdown.Item
                    key={itemKey}
                    eventKey={itemKey}
                    onSelect={() => {
                      filter(item.value);
                    }}>
                    {item.desc}
                  </Dropdown.Item>
                ))}
                <Dropdown.Divider />
                <Dropdown.Item
                  eventKey={999}
                  onSelect={() => {
                    filter('');
                  }}>
                  reset
                </Dropdown.Item>
                {actions && <Dropdown.Divider />}
                {actions && actions}
              </DropdownButton>
            </ButtonToolbar>
          </th>
        );
      }

      const order = _get(col, 'order', false);
      if (order === true) {
        return (
          <th
            key={key}
            width={_get(col, 'width', 'auto')}
            colSpan={_get(col, 'colSpan', '1')}>
            <ButtonToolbar>
              <DropdownButton
                variant="link"
                title={title()}
                id={`dropdown-size-extra-small${key}`}>
                <Dropdown.Item
                  eventKey="1"
                  onSelect={select1}>A ... Z</Dropdown.Item>
                <Dropdown.Item
                  eventKey="2"
                  onSelect={select2}>Z ... A</Dropdown.Item>
                {actions && <Dropdown.Divider />}
                {actions && actions}
              </DropdownButton>
            </ButtonToolbar>
          </th>
        );
      }

      if (actions) {
        return (
          <th
            key={key}
            width={_get(col, 'width', 'auto')}
            colSpan={_get(col, 'colSpan', '1')}>
            <input
              type="checkbox"
              onChange={(event) => {
                this.check(event, key);
              }}
              defaultChecked={this.state.checked[`box-${key}`]} />
            <ButtonToolbar>
              <DropdownButton
                variant="link"
                title={title()}
                id={`dropdown-size-extra-small${key}`}>
                {actions}
              </DropdownButton>
            </ButtonToolbar>
          </th>
        );
      }

      return (
        <th
          key={key}
          width={_get(col, 'width', 'auto')}
          colSpan={_get(col, 'colSpan', '1')}>
          {_get(col, 'name', '')}
        </th>
      );
    });
  }

  renderRecords() {
    return _map(this.props.records, (record, key) => this.renderRecordRows(key, record));
  };

  renderRecordRows(key, record) {
    if (_has(this.props, 'rows')) {
      return _map(this.props.rows, (row, keyRow) => (
        <tr
          key={(record.id || `${key}-${keyRow}`)}
          className={`data-table-row${keyRow}`}>
          {this.renderRecordCols(row.cols, record)}
        </tr>
      ));
    }

    return (
      <tr key={key}>
        {this.renderRecordCols(this.props.cols, record)}
      </tr>
    );
  }

  renderRecordCols(cols, record) {
    return _map(cols, (col, key) => {
      const value = this.getValue(record, col, key);
      return (<td
        key={key}
        colSpan={_get(col, 'colSpan', '1')}
        className={_get(col, 'className', '')}>{value}</td>);
    });
  }


  renderDropdownItems(buttons, record) {
    return _map(buttons, (button, key) => {
      const click = () => {
        if (_has(button, 'onClick')) {
          button.onClick(record, this.props.history);
        }
      };

      if (_has(button, 'divider')) {
        return <Dropdown.Divider key={`${key}-divider`}/>;
      }

      return <Dropdown.Item
        key={key}
        eventKey={key}
        onSelect={click}>{button.name}</Dropdown.Item>;
    });
  }

  renderPaginator() {
    const {paginator: {currPage, lastPage, onChange}} = this.props;
    return <Paginator
      currPage={currPage}
      lastPage={lastPage}
      onChange={onChange} />;
  }

  render() {
    const noRecords = () => {
      if (!this.props.records || this.props.records.length === 0) {
        return (<Alert variant="warning">No records found.</Alert>);
      }
      return null;
    };

    const paged = (!_isEmpty(this.props.paginator) ? this.renderPaginator() : '');
    const rows = this.renderRows();
    const records = this.renderRecords();
    return (
      <div>
        <div className="table-responsive">
          <table className="table table-bordered table-sm table-data table-hover">
            <thead className="thead-light">
              {rows}
            </thead>
            <tbody>
              {records}
            </tbody>
          </table>
        </div>
        {noRecords()}
        {paged}
      </div>
    );
  }
}

export default DataTable;

import React, {Component} from 'react';
import _get from 'lodash/get';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increase, decrease} from '../../redux/store/counter';


const deco = (props) => {

  class CounterItem extends Component {
    static propTypes = {
      index: PropTypes.number.isRequired,
      increase: PropTypes.func.isRequired,
      decrease: PropTypes.func.isRequired
    };

    static defaultProps = {
      counter: 0
    };

    render() {
      const {counter, index, increase, decrease} = this.props;
      return (
        <div className={'col-sm'}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Counter: {counter}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <button type={'button'} className={'btn'} onClick={() => increase(index)}>+</button>
              <button type={'button'} className={'btn'} onClick={() => decrease(index)}>-</button>
            </div>
          </div>
        </div>
      );
    }
  }

  const TmpComponent = connect(state => ({counter: _get(state.counters, [props.index], 0)}),
    dispatch => bindActionCreators({increase, decrease}, dispatch)
  )(CounterItem);

  return <TmpComponent {...props} />

};

export default deco

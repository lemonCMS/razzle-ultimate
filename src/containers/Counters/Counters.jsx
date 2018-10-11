import React from 'react';
import CounterItem from '../../components/CounterItem/CounterItem';

class Counters extends React.Component {

  render() {
    return (
      <div className={'row'}>
        <CounterItem index={1} />
        <CounterItem index={2} />
        <CounterItem index={3} />
      </div>
    );
  }
}

Counters.propTypes = {

};
Counters.defaultProps = {};

export default Counters;

import React from 'react';
import CounterItem from '../../components/CounterItem/CounterItem';

class Counters extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className={'row'}>
          <div className={'col-md-12'}>
            <h2>Counters stored in cookies</h2>
            <p>
              These counter are refilled on the <strong>server side</strong> with the data stored in the cookies.<br />
              When you disable javascript in your browser you will see these counters are filled.

            </p>
          </div>
          <CounterItem index={1} as={'counterCookie'} />
          <CounterItem index={2} as={'counterCookie'} />
          <CounterItem index={3} as={'counterCookie'} />
        </div>
        <div className={'row'}>
          <div className={'col-md-12'}>
            <h2>Counters stored in Localstorage</h2>
            <p>
              These counters are refilled on the <strong>client side</strong>.<br />
              They are filled through a dispacher, so this will not raise any warning about mismatch content.<br />
            </p>
          </div>
          <CounterItem index={1} as={'counterLocalStorage'} />
          <CounterItem index={2} as={'counterLocalStorage'} />
          <CounterItem index={3} as={'counterLocalStorage'} />
        </div>

      </React.Fragment>
    );
  }
}

Counters.propTypes = {

};
Counters.defaultProps = {};

export default Counters;

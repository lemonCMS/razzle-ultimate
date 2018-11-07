import React from 'react';
import PropTypes from 'prop-types';
// import faDesktop from '@fortawesome/fontawesome-free-solid/faDesktop';
// import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar';
// import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
// import styles from './Cookiebar.scss';
import Level from './Level';

class CookieBar extends React.Component {

  static contextTypes = {
    'toggleCookieSettings': PropTypes.func.isRequired,
    'saveCookieConsent': PropTypes.func.isRequired,
    'cookies': PropTypes.object,
    'cookieConsent': PropTypes.func,
    'config': PropTypes.object
  };

  constructor(props, context) {
    super();
    const level = context.cookieConsent();
    this.state = {
      disabled: level === null,
      level
    };
  }

  componentDidMount() {
    const ctxLevel = this.context.cookieConsent();
    if (this.state.level !== ctxLevel) {
      this.setState({level: ctxLevel, disabled: false});
    }

    if (this.context.config.ignoreUserAgent === false && this.context.config.whitelist === false) {
      if ((window && this.context.cookies.get('cookieAccepted') !== 'true') || this.props.open === true) {
        if (this.context.cookies.get('cookieAccepted') !== 'true') {
          this.ref.style.display = 'block';
        }
      }
    }
  }

  componentDidUpdate(prevProps) {
    const ctxLevel = this.context.cookieConsent();
    if (this.state.level === null && ctxLevel !== null) {
      this.setState({level: ctxLevel, disabled: false});
    }

    if (prevProps.open !== this.props.open) {
      if (this.props.open === true) {
        this.ref.style.display = 'block';
        this.setState({level: this.context.cookieConsent(), disabled: false});

      } else {
        this.ref.style.display = 'none';
      }
    }
  }

  render() {
    const data = this.context.config;
    const levelClick = (level) => {
      this.setState({level: Number(level), disabled: false});
    };

    const save = () => {
      this.context.saveCookieConsent(this.state.level);
      this.ref.style.display = 'none';
    };

    return (
      <div
        style={{display: 'none'}}
        ref={(ref) => {
          this.ref = ref;
        }}>
        <div className={'react-gdr-page-overlay'} />
        <div className={'react-gdr-page-modal-container'}>
          <div className={'react-gdr-page-modal'}>
            {/* eslint-disable-next-line */}
            <div className={'header'} dangerouslySetInnerHTML={{__html: data.title}} />
            <div className={'body'}>
              {/* eslint-disable-next-line */}
              <div className={'info'} dangerouslySetInnerHTML={{__html: data.intro}} />
              {data.level3 !== null &&
              <Level onClick={() => levelClick(3)} active={this.state.level === 3}>
                {data.level3}
              </Level>
              }
              {data.level2 !== null &&
              <Level onClick={() => levelClick(2)} active={this.state.level === 2}>
                {data.level2}
              </Level>
              }
              {data.level1 !== null &&
              <Level onClick={() => levelClick(1)} active={this.state.level === 1}>
                {data.level1}
              </Level>
              }
              <div className={'buttonBar'}>
                <button
                  type={'button'}
                  className={'button'}
                  disabled={this.state.disabled}
                  onClick={save}
                >
                  {data.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CookieBar.propTypes = {
  open: PropTypes.bool
};
CookieBar.defaultProps = {
  open: false
};

export default CookieBar;

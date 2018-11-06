/* eslint react/no-danger: "off" */
import React from 'react';
import PropTypes from 'prop-types';
// import faDesktop from '@fortawesome/fontawesome-free-solid/faDesktop';
// import faChartBar from '@fortawesome/fontawesome-free-solid/faChartBar';
// import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
// import styles from './Cookiebar.scss';
import Level from './Level';

class CookieBarCompact extends React.Component {

  static contextTypes = {
    'toggleCookieSettings': PropTypes.func.isRequired,
    'saveCookieConsent': PropTypes.func.isRequired,
    'cookies': PropTypes.object,
    'cookieConsent': PropTypes.func,
    'config': PropTypes.object
  };

  constructor() {
    super();
    this.state = {
      disabled: true,
      level: null
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
        } else {
          this.refModal.style.display = 'block';
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
        this.refModal.style.display = 'block';
        this.setState({level: this.context.cookieConsent(), disabled: false});

      } else {
        this.refModal.style.display = 'none';
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
      this.refModal.style.display = 'none';
      this.ref.style.display = 'none';
    };

    const choose = (
      <div
        style={{display: 'none'}}
        ref={(ref) => {
          this.refModal = ref;
        }}>

        <div className={'react-gdr-page-overlay'} />
        <div className={'react-gdr-page-modal-container'}>
          <div className={'react-gdr-page-modal'}>
            <div className={'header'}
              dangerouslySetInnerHTML={{__html: data.title}} />
            <div className={'body'}>
              <div className={'info'}
                dangerouslySetInnerHTML={{__html: data.intro}} />
              {data.level3 !== null &&
              <Level onClick={() => levelClick(3)}
                active={this.state.level === 3}>
                {data.level3}
              </Level>
              }
              {data.level2 !== null &&
              <Level onClick={() => levelClick(2)}
                active={this.state.level === 2}>
                {data.level2}
              </Level>
              }
              {data.level1 !== null &&
              <Level onClick={() => levelClick(1)}
                active={this.state.level === 1}>
                {data.level1}
              </Level>
              }
              <div className={'buttonBar'}>
                {data.buttonCancel !== null && <button
                  type={'button'}
                  className={'buttonCancel'}
                  onClick={() => {
                    this.refModal.style.display = 'none';
                  }}
                >
                  {data.buttonCancel}
                </button>}
                {' '}
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


    const bar = (
      <div
        className={'cookiebar'}
        style={{display: 'none'}}
        ref={(ref) => {
          this.ref = ref;
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7"
              dangerouslySetInnerHTML={{__html: data.cookieBar}} />
            <div className="col-sm-5">
              <div className={'cbButtonBar'}>
                <button className={'cbSettings'}
                  type={'button'}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    this.refModal.style.display = 'block';
                  }}>
                  {data.buttonSettings}
                </button>
                {' '}
                <button className={'cbButton'}
                  type={'button'}
                  onClick={() => {
                    this.context.saveCookieConsent(3);
                    this.ref.style.display = 'none';
                  }}>
                  {data.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>);

    return <React.Fragment>{choose}{bar}</React.Fragment>;
  }
}

CookieBarCompact.propTypes = {
  open: PropTypes.bool
};
CookieBarCompact.defaultProps = {
  open: false
};

export default CookieBarCompact;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Index extends Component {

  constructor() {
    super();
    this.scroller = this.scroller.bind(this);
    this.reposition = this.reposition.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.getScrollTop = this.getScrollTop.bind(this);
    this.setFixedProps = this.setFixedProps.bind(this);
    this.scrollTop = null;
    this.rect = null;
    this.sticky = null;
    this.placeHolder = null;
    this.timer = null;
    this.domState = {
      style: {},
      hasStyle: false,
      scrollTop: 0,
      oldStyle: {}
    };
  }

  componentDidMount() {
    if (window && this.sticky) {
      this.props.events.map(event => (window.addEventListener(event, this.scroller)));
    }
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this.reposition();
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.offset !== prevProps.offset) {
      this.reposition();
    }
  }

  componentWillUnmount() {
    if (window && this.sticky) {
      this.props.events.map(event => (window.removeEventListener(event, this.scroller)));
    }
  }

  getScrollTop() {
    this.rect = this.sticky.getBoundingClientRect();
    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }

  setFixedProps() {
    const oldHeight = this.rect.height;
    if (this.props.addClassName) {
      this.sticky.classList.add(this.props.addClassName);
      this.getScrollTop();
    }

    this.domState.scrollTop = this.scrollTop + this.rect.top;
    this.domState.scrollWidth = this.rect.right - this.rect.left;

    this.domState.oldStyle.position = this.sticky.style.position;
    this.domState.oldStyle.top = this.sticky.style.top;
    this.domState.oldStyle.width = this.sticky.style.width;
    this.domState.oldStyle.zIndex = this.sticky.style.zIndex;

    this.sticky.style.position = 'fixed';
    this.sticky.style.top = `${Math.round(this.props.offset)}px`;
    this.sticky.style.width = `${Math.round(this.domState.scrollWidth)}px`;
    this.sticky.style.zIndex = this.props.zIndex;
    this.placeHolder.style.height = `${Math.round(oldHeight)}px`;
    this.domState.hasStyle = true;
    this.sticky.classList.add(this.props.className);
    this.subscribe(this.rect);
  }

  reposition() {
    if (this.domState.hasStyle === true) {
      Object.keys(this.domState.oldStyle).map((key) => {
        this.sticky.style[key] = this.domState.oldStyle[key];
        return null
      });

      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getScrollTop();
        this.setFixedProps();
      }, this.props.timeout);
    }
  }

  subscribe(rect) {
    if (typeof this.props.subscribe === 'function') {
      this.props.subscribe(rect);
    }
  }

  scroller(event) {
    this.getScrollTop();
    if (event.type === 'resize' || event.type === 'pageshow') {
      // Reposition the component;
      this.reposition();
    }

    if (this.domState.hasStyle === false) {
      this.domState.scrollTop = this.scrollTop + this.rect.top;
      this.domState.scrollWidth = this.rect.right - this.rect.left;
    }

    if (Math.round(this.rect.top) <= Math.round(this.props.offset) && Math.round(this.domState.scrollTop) <= Math.round(this.scrollTop + this.props.offset)) {
      if (this.domState.hasStyle === false) {
        this.setFixedProps();
      }
    } else if (this.domState.hasStyle === true) {
      Object.keys(this.domState.oldStyle).map((key) => {
        this.sticky.style[key] = this.domState.oldStyle[key];
        return null;
      });

      this.placeHolder.style.height = 0;
      this.domState.hasStyle = false;
      if (this.props.addClassName) {
        this.sticky.classList.remove(this.props.addClassName);
      }
      this.sticky.classList.remove(this.props.className);
      this.subscribe(this.rect);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div ref={ref => {
          this.sticky = ref;
          return null;
        }}>
          {this.props.children}
        </div>
        <div ref={ref => {
          this.placeHolder = ref;
          return null;
        }} style={{height: '0px'}} />
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  offset: PropTypes.number,
  zIndex: PropTypes.number,
  className: PropTypes.string,
  addClassName: PropTypes.string,
  events: PropTypes.array,
  timeout: PropTypes.number,
  subscribe: PropTypes.func
};
Index.defaultProps = {
  offset: 0,
  zIndex: 1040,
  className: 'sticked',
  addClassName: '',
  events: [
    'scroll',
    'resize',
    'touchstart',
    'touchmove',
    'touchend',
    'pageshow',
    'load'
  ],
  timeout: 0
};

export default Index;

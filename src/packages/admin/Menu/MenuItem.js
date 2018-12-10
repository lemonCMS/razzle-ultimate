import _ from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import {matchPath} from 'react-router';
import {NavLink as Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class MenuItem extends Component {

  constructor(props, context) {
    super(props, context);
    this.content = this.content.bind(this);
    this.children = this.children.bind(this);
    this.icon = this.icon.bind(this);
    this.openClose = this.openClose.bind(this);
    this.state = {active: false};
  }

  static getDerivedStateFromProps(props) {
    if (matchPath(props.location.pathname, props.item.to)) {
      return ({active: true});
    }
    return ({active: false});
  }

  content() {
    const {item} = this.props;
    if (_.has(item, 'to')) {
      return (<Link to={item.to}
                    activeClassName="active">{this.icon()} {item.desc} {this.openClose()}</Link>);
    }
    return (<span>{this.icon()} {item.desc}</span>);
  }

  icon() {
    const {item} = this.props;
    if (_.has(item, 'icon')) {
      return (<i className={classNames('fa', 'fa-lg', 'fa-fw', item.icon)} />);
    }
    return null;
  }

  openClose() {
    const {item} = this.props;
    if (_.has(item, 'children')) {
      if (this.state.active === true) {
        return (
          <FontAwesomeIcon icon={['far', 'minus-square']} className={'float-right'} />
        );
      }

      return (
        <FontAwesomeIcon icon={['far', 'plus-square']} className={'float-right'} />
      );
    }
    return null;
  }

  children() {
    if (_.has(this.props.item, 'children') && (this.state.active === true)) {
      return _.map(_.get(this.props.item, 'children'), (item, key) =>
        (<MenuItem key={key}
                   item={item}
                   location={this.props.location}
                   match={this.props.match} />));
    }
    return null;
  }

  render() {
    return (
      <li className={classNames({'active': this.state.active, 'open': this.state.active})}>
        {this.content()}
        <ReactCSSTransitionGroup component="ul"
                                 transitionName={{
                                   enter: 'animated',
                                   enterActive: 'slideInLeft',
                                   leave: 'animatedOut',
                                   leaveActive: 'slideOutLeft'
                                 }}
                                 transitionEnterTimeout={500}
                                 transitionLeaveTimeout={500}>
          {this.children()}
        </ReactCSSTransitionGroup>
      </li>
    );
  }
}

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  location: PropTypes.object,
  match: PropTypes.object,
};

export default MenuItem;

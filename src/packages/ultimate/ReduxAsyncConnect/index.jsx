/* eslint react/no-unused-state: "off" */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter, Route} from 'react-router';
import NProgress from "nprogress";
import asyncMatchRoutes from "../asyncMatchRoutes";
import asyncMap from "../asyncMap";
import {authorize, trigger} from "../../redial";

const Error = () =>
  (<div>
    <h1>Error</h1>
    <p>Unfortunately there has been an irrecoverable error.</p>
    <p>So... well, yeah nothing we can do right now.</p>
  </div>);


class ReduxAsyncConnect extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    routes: PropTypes.array.isRequired,
    store: PropTypes.objectOf(PropTypes.any).isRequired,
    helpers: PropTypes.objectOf(PropTypes.any).isRequired,
    location: PropTypes.objectOf(PropTypes.any).isRequired,
    errorPage: PropTypes.oneOfType([PropTypes.func, PropTypes.objectOf(PropTypes.any)]),
  };

  constructor(props) {
    super(props);
    this.getAsyncData = this.getAsyncData.bind(this);
    this.state = {
      location: props.location,
      nextLocation: {
        pathname: '',
        search: ''
      },
      inTransition: false,
      authorized: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.location.pathname === state.nextLocation.pathname &&
      props.location.search === state.nextLocation.search
    ) {
      return null;
    }

    if (props.location.pathname !== state.location.pathname ||
      props.location.search !== state.location.search
    ) {
      return {
        nextLocation: Object.assign({}, props.location)
      };
    }
    return false;
  }

  componentDidMount() {
    const {
      history, location, routes, store, helpers
    } = this.props;
    this.getAsyncData(history, location, routes, store, helpers, false);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.inTransition === false) {
      if (prevState.nextLocation.pathname !== this.state.nextLocation.pathname ||
        prevState.nextLocation.search !== this.state.nextLocation.search
      ) {
        const {
          history, location, routes, store, helpers
        } = this.props;
        this.getAsyncData(history, location, routes, store, helpers, false);
      }
    }
  }

  async getAsyncData(history, location, routes, store, helpers, isUpdate) {
    // save the location so we can render the old screen
    NProgress.start();
    this.setState({inTransition: true});
    // load data while the old screen remains
    const {components, match, params} = await asyncMatchRoutes(routes, location.pathname);
    await asyncMap(components, component => authorize('authorized', component, {
      ...helpers,
      store,
      match,
      params,
      history,
      location
    })).then(async () => {
      if (isUpdate === false) {
        const fetchers = async () => {
          await trigger('fetch', components, {
            ...helpers,
            store,
            match,
            params,
            history,
            location
          });
        };

        if (process.env.BUILD_TARGET === 'client') {
          trigger('defer', components, {
            ...helpers,
            store,
            match,
            params,
            history,
            location
          });
        }
        await fetchers();
      } else if (process.env.BUILD_TARGET === 'client') {
        trigger('defer', components, {
          ...helpers,
          store,
          match,
          params,
          history,
          location
        });
      }

      this.setState({authorized: true});
    }).catch(() => {
      this.setState({authorized: false});
    });

    // clear previousLocation so the next screen renders
    this.setState({inTransition: false, location});
    NProgress.done();
  }

  render() {
    const {children} = this.props;
    const {authorized} = this.state;

    if (authorized) {
      return <Route location={this.state.location}
                    render={() => children} />;
    }

    if (this.props.errorPage !== null) {
      const ErrorPage = this.props.errorPage

      return <Route location={this.state.location}
                    render={() => <ErrorPage error={'Not authorized'} />} />;
    }

    return <Route location={this.state.location}
                  render={() => <Error />} />

  }
}

export default withRouter(ReduxAsyncConnect);

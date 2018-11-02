import React, {Component} from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import CookieBar from '../../packages/cookiebar/CookieConsent';

// import Nav from 'react-bootstrap/lib/Nav';
// import {NavLink} from 'react-router-dom';

// import PropTypes from 'prop-types';

class CookieBarPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1>Cookie Consent</h1>
            <p>
              In order to apply to the GDPR almost all websites need to have some kind of cookie consent before setting any, but functional, cookies.
            </p>
            <p>
              With this <code>Cookiebar</code> package you can easely implement cookie consent into your website with minor change in your code.
            </p>
          </Col>
        </Row>
        <CookieBar />
      </Container>
    );
  }
}

CookieBarPage.propTypes = {};
CookieBarPage.defaultProps = {};

export default CookieBarPage;

import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {connect} from 'react-redux';
import Form from '../../../packages/final-form/Form';
import Button from '../../../packages/final-form/Bootstrap4/Button';
import Input from '../../../packages/final-form/Bootstrap4/Input';
import Message from '../../../packages/final-form/Bootstrap4/Message';
import {authenticate} from '../../../redux/store/auth';

@withRouter
@connect(
  state => ({
    auth: state.auth
  }),
  {authenticate}
)
class Authorize extends React.Component {
  render() {
    const size = {
      labelSize: {xs: 3},
      fieldSize: {xs: 9}
    };

    const validate = (values) => {
      const errors = {};
      if (!values.username || values.username === '') errors.username = 'The username is mandatory';
      if (!values.password || values.password === '') errors.password = 'The password is Secret1!';
      return errors;
    };

    const onSubmit = async (payload) =>
      (this.props.authenticate(payload).then((ret) => {
          if (ret && Object.prototype.hasOwnProperty.call(ret, 'error')) {
            return (ret.error);
          }
          this.props.history.push('/data/authorize/needstoken');
          return ({});
        }).catch((err) => err)
      );

    return (
      <Container fluid>
        <Row>
          <Col md={12}>
            <h1>Authorize</h1>

            <Form
              debug
              validate={validate}
              onSubmit={onSubmit}

            >
              <Input label="Username" placeholder="email" name={'username'} type={'text'} {...size} />
              <Input label="Password" placeholder="password" name={'password'} type={'password'} {...size} />

              <Message type={'error'}>Oopsie, we could not verify your account.</Message>
              <Message type={'success'}>Welcome, we will redirect you shortly.</Message>
              <Button type={'submit'}>Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

Authorize.propTypes = {
  auth: PropTypes.object,
  authorize: PropTypes.func,
  history: PropTypes.object
};
Authorize.defaultProps = {
  auth: {

  }
};

export default Authorize;

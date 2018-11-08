import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Card from 'react-bootstrap/lib/Card';
import _get from 'lodash/get';
import {connect} from 'react-redux';
import {provideHooks} from '../../../packages/redial';
import connectToForm from '../../../packages/laravel/decorators/connectToForm';
import {isLoadedItem, loadItem} from '../../../packages/redux/store/actions';
import Form from '../../../packages/final-form/Form';
import Input from '../../../packages/final-form/Bootstrap4/Input';
import Checkbox from '../../../packages/final-form/Bootstrap4/Checkbox';
import Message from '../../../packages/final-form/Bootstrap4/Message';
import validator from '../../../packages/final-form/validator';
import Sticky from '../../../packages/sticky';

const api = '/users';
const key = 'users';

@provideHooks({
  fetch: ({store: {dispatch, getState}, params}) => {
    const promises = [];
    if (params.id && params.id !== 'new') {
      if (!isLoadedItem(key, getState(), params.id)) {
        promises.push(dispatch(loadItem(key, api, params.id, {})));
      }
    }
    return Promise.all(promises);
  }

})
@connect(state => ({
  item: _get(state.store, [key, 'item'], {})
}))
@connectToForm({
  api,
  key
})
class Item extends PureComponent {

  state = {};

  static getDerivedStateFromProps(props, state) {
    if (state.id !== props.item.id || state.updated_at !== props.item.updated_at) {
      return props.item;
    }
    return null;
  }

  validate(data) {
    const errors = {};
    errors.name = validator.mandatory(data.name);
    errors.email = validator.mandatoryEmail(data.email);
    return validator.omit(errors);
  }

  render() {

    const size = {
      labelSize: {md: 2},
      fieldSize: {md: 10},
    };

    return (
      <Container fluid>
        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                You&#39;re editing:
                {' '}
                <strong>
                  {this.state.name || 'new user'}
                </strong>
              </Card.Header>
              <Card.Body>
                <Form
                  className={'horizontal'}
                  initialValues={this.state}
                  validate={this.validate}
                  onSubmit={this.props.onSubmit}
                  debug
                >
                  <Sticky>
                    <Row className={'mb-2'}>
                      <Col md={8}>
                        <Message type={'success'}>
                          Your changes have been saved.
                        </Message>
                        <Message type={'error'}>
                          There is a problem, please check the form.
                        </Message>
                      </Col>
                      <Col md={4}>
                        <Button className={'float-right'}
                          type={'submit'}
                          variant={'primary'}>
                          save
                        </Button>
                      </Col>
                    </Row>
                  </Sticky>
                  <Input label={'Name'}
                    name={'name'}
                    type={'text'} {...size} />
                  <Input label={'Email'}
                    name={'email'}
                    type={'email'} {...size} />
                  <Checkbox name={'active'}
                    fieldSize={{md: {span: 10, offset: 2}}}>
                    <option value>Actief</option>
                  </Checkbox>
                  <Input label={'Created'}
                    name={'created_at'}
                    type={'text'}
                    static {...size} />
                  <Input label={'updated'}
                    name={'updated_at'}
                    type={'text'}
                    static {...size} />
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object,
  onSubmit: PropTypes.func
};
Item.defaultProps = {};

export default Item;

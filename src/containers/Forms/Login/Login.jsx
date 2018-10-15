import React, {Component} from 'react';
import Form from '../../../modules/final-form/Form';
import Button from '../../../modules/final-form/Bootstrap4/Button';
import Input from '../../../modules/final-form/Bootstrap4/Input';
import Select from '../../../modules/final-form/Bootstrap4/Select';
import Radio from '../../../modules/final-form/Bootstrap4/Radio';
import Checkbox from '../../../modules/final-form/Bootstrap4/Checkbox';
import DateTime from '../../../modules/final-form/Bootstrap4/DateTime';
import Dropdown from '../../../modules/final-form/Bootstrap4/Dropdown';
import Plupload from '../../../modules/final-form/Bootstrap4/Plupload';
import TinyMce from '../../../modules/final-form/Bootstrap4/TinyMce';
// import PropTypes from 'prop-types';

class Login extends Component {
  render() {

    const size = {
      labelSize: {xs: 3},
      fieldSize: {xs: 9}
    };

    return (
      <div>
        <h2>
          Login Form
        </h2>
        <Form>
          <Input label="Username" placeholder="email" name={'username'} type={'text'} {...size} />
          <Input label="Password" placeholder="password" name={'password'} type={'password'} {...size} />
          <Select label="Favorite Color"  name={'color'} {...size} >
            <option value={'1'}>White</option>
            <option value={'2'}>Black</option>
            <option value={'3'}>Red</option>
            <option value={'4'}>Pink</option>
            <option value={'5'}>Green</option>
            <option value={'6'}>Brown</option>
            <option value={'7'}>Grey</option>
          </Select>
          <Checkbox label="Favorite Color" name={'colorCB'} {...size} >
            <option value={'1'}>White</option>
            <option value={'2'}>Black</option>
            <option value={'3'}>Red</option>
            <option value={'4'}>Pink</option>
            <option value={'5'}>Green</option>
            <option value={'6'}>Brown</option>
            <option value={'7'}>Grey</option>
          </Checkbox>
          <Radio label="Favorite Color" name={'colorRadio'} {...size} >
            <option value={'1'}>White</option>
            <option value={'2'}>Black</option>
            <option value={'3'}>Red</option>
            <option value={'4'}>Pink</option>
            <option value={'5'}>Green</option>
            <option value={'6'}>Brown</option>
            <option value={'7'}>Grey</option>
          </Radio>
          <DateTime label="Start" name={'date-time'} {...size}/>
          <Dropdown label="Drop down" name={'dropdown'} {...size}>
            <option value={'1'} selected>White</option>
            <option value={'2'}>Black</option>
            <option value={'3'}>Red</option>
            <option value={'4'}>Pink</option>
            <option value={'5'}>Green</option>
            <option value={'6'}>Brown</option>
            <option value={'7'}>Grey</option>
          </Dropdown>
          <Plupload name="plupload" label={'Upload'} {...size} conf={{id: 'plupload'}}/>
          <TinyMce name={'tiny'} label={'tiny'} {...size} />
          <Button type={'button'}>Send</Button>
        </Form>
      </div>
    );
  }
}

Login.propTypes = {};
Login.defaultProps = {};

export default Login;

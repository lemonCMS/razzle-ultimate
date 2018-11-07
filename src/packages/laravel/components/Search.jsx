import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormLabel from 'react-bootstrap/lib/FormLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Search extends React.PureComponent {

  static propTypes = {
    pushSearch: PropTypes.func,
    query: PropTypes.string /* eslint-disable-line */
  };

  constructor() {
    super();
    this.pushSearch = this.pushSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.state = {
      search: '',
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.search === '' && props.query !== state.search) {
      return {search: props.query};
    }
    return null;
  }

  pushSearch(e) {
    const value = e.target.value;
    this.setState({search: value}, () => {
      this.props.pushSearch(value);
    });
  }

  clearSearch() {
    this.setState({
      search: ''
    }, this.props.pushSearch(''));
  }

  render() {
    console.log('RENDER SEARCHBOX');
    return (
      <FormGroup
        controlId="q"
      >
        <FormLabel>Zoeken</FormLabel>
        <InputGroup>
          <FormControl
            type="text"
            value={this.state.search}
            placeholder="Zoeken"
            onChange={this.pushSearch}
          />
          <InputGroup.Append>
            <Button disabled={this.state.search === ''} onClick={this.clearSearch}>
              <FontAwesomeIcon icon={['fas', 'times']} fixedWidth />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </FormGroup>
    );
  }
}

export default Search;

import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormLabel from 'react-bootstrap/lib/FormLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Search extends React.Component {

  static propTypes = {
    pushSearch: PropTypes.func,
    query: PropTypes.string
  };

  constructor() {
    super();
    this.pushSearch = this.pushSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.state = {
      search: '',
      skip: 0
    };
  }

  componentWillMount() {
    this.setState({
      search: this.props.query,
      skip: 0
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.skip === 0) {
      this.setState({search: nextProps.query});
    }

    if (this.state.skip > 0) {
      const {skip} = this.state;
      this.setState({skip: skip - 1});
    }
  }

  pushSearch(e) {
    const value = e.target.value;
    this.setState({search: value, skip: 6}, () => {
      this.props.pushSearch(value);
    });
  }

  clearSearch() {
    this.setState({
      search: ''
    }, this.props.pushSearch(''));
  }

  render() {
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

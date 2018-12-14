import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import _clone from 'lodash/clone';
import _get from 'lodash/get';
import _map from 'lodash/map';
import _filter from 'lodash/filter';
import Plupload from '../../plupload/Plupload';

class PluploadBinder extends React.Component {

  constructor() {
    super();
    this.renderTable = this.renderTable.bind(this);
    this.editRender = this.editRender.bind(this);
    this.fileDelete = this.fileDelete.bind(this);
    this.fileUploaded = this.fileUploaded.bind(this);
    this.staticRender = this.staticRender.bind(this);
    this.allFiles = [];
  }

  fileUploaded(plupload, file, response) {
    const uploadResponse = JSON.parse(response.response);
    if (_get(this.props.field.config, 'multi_selection', true) === false) {
      this.allFiles = [uploadResponse.result];
      this.props.input.onChange(this.allFiles);
    } else {
      const files = _clone(this.allFiles);
      files.push(uploadResponse.result);
      this.allFiles = files;
      this.props.input.onBlur();
      this.props.input.onChange(this.allFiles);
    }
  }

  fileDelete(index) {
    this.allFiles = this.props.input.value;
    this.allFiles[index].deleted = 1;
    this.props.input.onBlur();
    this.props.input.onChange(this.allFiles);
    this.forceUpdate();
  }

  editRender(files) {
    if (files.length > 0) {
      return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Bestand</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {_map(files, (file, key) => (!file.deleted &&
              <tr key={key}>
                <td>{file.file_original_name} {file.deleted}</td>
                <td>
                  <Button onClick={() => {
                    this.fileDelete(key);
                  }}><i className="fa fa-trash-o" /></Button>
                </td>
              </tr>)
            )}
          </tbody>
        </Table>
      );
    }
    return null;
  }

  staticRender(files) {
    if (files.length > 0) {
      return (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Bestand</th>
            </tr>
          </thead>
          <tbody>
            {_map(files, (file, key) => (!file.deleted &&
              <tr key={key}>
                <td>{file.file_original_name} {file.deleted}</td>
              </tr>)
            )}
          </tbody>
        </Table>
      );
    }
    return null;
  }

  renderTable() {
    const staticForm = _get(this.props, 'static', false);
    const files = _filter(this.props.input.value, (file) => !file.deleted);
    if (files.length > 0) {
      return staticForm ? this.staticRender(files) : this.editRender(files);
    }
    return null;
  }

  render() {
    const {field, input} = this.props;
    return (
      <div>
        <Plupload
          className={field.className}
          onFileUploaded={this.fileUploaded}
          id={`plupload_${input.name}`}
          {...field.config} />
        {this.renderTable()}
      </div>
    );
  }
}

PluploadBinder.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object
};

const Binded = ({input, field}) => (<PluploadBinder input={input} field={field} />);
Binded.propTypes = {
  field: PropTypes.object,
  input: PropTypes.object
};

export default Binded;


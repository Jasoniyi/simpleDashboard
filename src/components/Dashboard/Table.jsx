import React, { Component } from "react";
import {
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBIcon
} from "mdbreact";

class Table extends Component {
  onDelete = () => {
    const { name, onDelete } = this.props;
    onDelete(name);
  };

  render() {
    console.log(this.props);
    const items = this.props.data.map((item, i) => {
      return (
        <tr key={i}>
          {/* <th scope="row"></th> */}
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.company}</td>
          <td>{item.country}</td>
          <td>
            <MDBIcon
              icon="trash-alt"
              className="delete-icon ml-2"
              onClick={this.onDelete}
            />
          </td>
        </tr>
      );
    });
    return (
      <MDBRow>
        <MDBTable
          responsive
          className="table table-hover row-wrapper p-3 text-center"
        >
          <MDBTableHead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Company</th>
              <th>Country</th>
              <th>Action</th>
            </tr>
          </MDBTableHead>

          <MDBTableBody className="text-center">{items}</MDBTableBody>
        </MDBTable>
      </MDBRow>
    );
  }
}

export default Table;

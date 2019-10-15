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
    this.props.onDelete(this.props.id);
  };

  render() {
    console.log(this.props);
    // const items = this.props.data.map((item, i) => {
    //   return (
    //     <tr key={i}>
    //       {/* <th scope="row"></th> */}
    //       <td>{item.name}</td>
    //       <td>{item.age}</td>
    //       <td>{item.company}</td>
    //       <td>{item.country}</td>
    //       <td>
    //         <MDBIcon
    //           icon="trash-alt"
    //           className="delete-icon ml-2"
    //           onClick={this.onDelete}
    //         />
    //       </td>
    //     </tr>
    //   );
    // });
    return (
      <MDBTableBody className="text-center">
        <tr>
          <th>{this.props.name}</th>
          <th>{this.props.age}</th>
          <th>{this.props.company}</th>
          <th>{this.props.country}</th>
          <th>
            <MDBIcon
              icon="trash-alt"
              className="delete-icon ml-2"
              onClick={this.onDelete}
            />
          </th>
        </tr>
      </MDBTableBody>
    );
  }
}

export default Table;

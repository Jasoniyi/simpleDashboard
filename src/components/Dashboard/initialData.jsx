import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBIcon,
  MDBCardBody
} from "mdbreact";

const data = {};

class Table extends Component {
  state = {
    data: {
      columns: [
        {
          label: "",
          field: "check",
          sort: "asc"
        },
        {
          label: "First Name",
          field: "firstname",
          sort: "asc"
        },
        {
          label: "Last Name",
          field: "lastname",
          sort: "asc"
        },
        {
          label: "Email",
          field: "email",
          sort: "asc"
        },
        {
          label: "Phone",
          field: "phone",
          sort: "asc"
        },
        {
          label: "Role",
          field: "role",
          sort: "asc"
        },
        {
          label: "",
          field: "heading5",
          sort: "asc"
        }
      ],
      rows: [
        {
          check: (
            <MDBInput
              filled
              type="checkbox"
              id="checkbox1"
              size="1x"
              className="check-size"
            />
          ),
          firstname: "Joshua",
          lastname: "Bakare",
          email: "josh.bakare@gmail.com",
          phone: "+2344536667768",
          role: "Admin",
          heading5: (
            <MDBIcon
              icon="trash-alt"
              className="delete-icon"
              onClick={this.deleteData}
            />
          )
        },
        {
          check: (
            <MDBInput
              filled
              type="checkbox"
              id="checkbox1"
              size="1x"
              className="check-size "
            />
          ),
          firstname: "Jane",
          lastname: "Clement",
          email: "josh.bakare@gmail.com",
          phone: "+2344536667768",
          role: "Staff",
          heading5: <MDBIcon icon="trash-alt" className="delete-icon" />
        },
        {
          check: (
            <MDBInput
              filled
              type="checkbox"
              id="checkbox1"
              size="1x"
              className="check-size"
            />
          ),
          firstname: "July",
          lastname: "Simon",
          email: "josh.bakare@gmail.com",
          phone: "+2344536667768",
          role: "Staff",
          heading5: <MDBIcon icon="trash-alt" className="delete-icon" />
        }
      ]
    }
  };

  getData() {
    return this.state.data;
  }

  deleteData = () => {
    const data = this.getData();
    const newData = { ...data };
    console.log(newData);
  };

  render() {
    return (
      <div className="table-wrapper">
        <div className="table-wrapper-body">
          <MDBContainer>
            <MDBRow className=" p-3">
              <MDBCol md="9" xs="6">
                <h5>Employees</h5>
              </MDBCol>
              <MDBCol xs="6">
                <MDBBtn>Add New</MDBBtn>
              </MDBCol>
            </MDBRow>

            <MDBRow className="my-5 bakery-name p-3">
              <MDBCol md="8">
                <h4>Josh Bakery Ventures</h4>
              </MDBCol>
              <MDBCol>
                <p>64, Auetoro uiuhe, street somewhere</p>
              </MDBCol>
            </MDBRow>

            {/* <MDBRow>
              <MDBTable
                responsive
                className="table table-hover row-wrapper p-3"
              >
                <MDBTableHead columns={this.state.data.columns} />
                <MDBTableBody rows={this.state.data.rows} striped bordered />
              </MDBTable>
            </MDBRow> */}

            <MDBRow>
              <MDBCardBody>
                <MDBIcon
                  icon="trash-alt"
                  className="delete-icon ml-2 float-right"
                />
              </MDBCardBody>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Table;

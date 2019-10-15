import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBInput,
  MDBModalFooter
} from "mdbreact";

import Header from "./Header";
import SideNav from "./SideNav";
import Tables from "./Table";

class index extends Component {
  state = {
    modal: false,
    data: [
      {
        id: 1,
        name: "Aurelia Vega",
        age: 30,
        company: "Deepends",
        country: "Spain"
      },
      {
        id: 2,
        name: "Guerra Cortez",
        age: 45,
        company: "Insectus",
        country: "USA"
      },
      {
        id: 3,
        name: "Guadalupe House",
        age: 27,
        company: "Isotronic",
        country: "Germany"
      },
      {
        id: 4,
        name: "Elisa Gallagher",
        age: 31,
        company: "Portica",
        country: "United Kingdom"
      }
    ]
  };

  getData = () => {
    return this.state.data;
  };

  componentDidMount() {
    return this.getData();
  }

  addItem = () => {
    let newList = [...this.state.data];
    newList.push({
      id: newList.length ? newList[newList.length - 1].id + 1 : 1,
      name: this.state.name,
      age: this.state.age,
      company: this.state.company,
      country: this.state.country
    });
    this.setState({
      data: newList
    });
    this.setState({
      name: "",
      age: "",
      company: "",
      country: ""
    });
  };

  handleInputChange = inputName => value => {
    const nextValue = value;
    this.setState({
      [inputName]: nextValue
    });
  };

  handleDelete = id => {
    console.log(id);
    const data = this.state.data.filter(e => {
      return e.id !== id;
    });

    this.setState({
      data
    });
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="dashboard-wrapper">
        <Header />
        <MDBRow>
          <MDBCol md="1">
            <SideNav />
          </MDBCol>

          <MDBCol>
            <div className="table-wrapper">
              <div className="table-wrapper-body">
                <MDBContainer>
                  <MDBRow className="p-3">
                    <MDBCol md="9" xs="6">
                      <h5>Employees</h5>
                    </MDBCol>
                    <MDBCol xs="6">
                      <MDBBtn onClick={this.toggleModal}>Add New</MDBBtn>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="my-3 bakery-name p-3">
                    <MDBCol md="8">
                      <h4>Josh Bakery Ventures</h4>
                    </MDBCol>
                    <MDBCol>
                      <p>64, Auetoro uiuhe, street somewhere</p>
                    </MDBCol>
                  </MDBRow>
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

                      {this.state.data.map(item => (
                        <Tables
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          age={item.age}
                          company={item.company}
                          country={item.country}
                          onDelete={this.handleDelete}
                        />
                      ))}
                    </MDBTable>
                  </MDBRow>

                  {/* <Tables data={this.state.data} onDelete={this.handleDelete} /> */}
                </MDBContainer>
              </div>
            </div>
          </MDBCol>
        </MDBRow>

        {/* modal */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggleModal}
          >
            Add new event
          </MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput
                name="name"
                label="Name"
                icon="user-alt"
                hint="John"
                group
                type="text"
                getValue={this.handleInputChange("name")}
              />
              <MDBInput
                name="age"
                label="Age"
                icon="edit"
                hint="25"
                group
                type="number"
                getValue={this.handleInputChange("age")}
              />
              <MDBInput
                name="company"
                label="Company"
                icon="building"
                group
                type="text"
                getValue={this.handleInputChange("company")}
              />
              <MDBInput
                name="country"
                label="country"
                icon="flag"
                group
                type="text"
                getValue={this.handleInputChange("country")}
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn
              color="info"
              onClick={() => {
                this.toggleModal();
                this.addItem();
              }}
            >
              Add
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

export default index;

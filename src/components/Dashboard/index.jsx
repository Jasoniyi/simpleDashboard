import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import SideNav from "./SideNav";
import Tables from "./Table";

class index extends Component {
  state = {
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

  componentDidMount = () => {
    return this.getData();
  };

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

  handleDelete = name => {
    console.log(name);
    // const data = this.state.data.filter(e => {
    //   return e.name !== name;
    // });

    // this.setState({
    //   data
    // });
  };

  render() {
    console.log(this.getData());
    return (
      <>
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

                  <Tables data={this.state.data} onDelete={this.handleDelete} />
                </MDBContainer>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </>
    );
  }
}

export default index;

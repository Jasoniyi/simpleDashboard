import React, { Component } from "react";
import "./App.css";

import Pic from "./assets/b11.png";
import FormCard from "./components/FormCard";

import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBModalFooter,
  MDBModal,
  MDBModalHeader,
  MDBModalBody
} from "mdbreact";

class App extends Component {
  state = {
    modal: false
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <div className="app">
        <MDBContainer>
          <h2 className="text-center my-3 font-weight-bold">Gadgets Sale</h2>
          <MDBRow>
            <MDBCol md="7">
              <img src={Pic} alt="img" className="img-fluid p-3 " />
            </MDBCol>
            <MDBCol>
              <FormCard toggleModal={this.toggleModal} />
            </MDBCol>
          </MDBRow>
          {/* modals */}
          {/* <Modals modal={this.state.modal} toggleModal={this.toggleModal} /> */}
          <MDBModal isOpen={this.state.modal} toggle={this.toggleModal} rounded>
            <MDBModalHeader
              className="text-center"
              titleClass="w-100 font-weight-bold"
              toggle={this.toggleModal}
            >
              Create your Free Account
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="First name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Last name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />

                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="info" type="submit">
                Register
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
          <footer className="text-center">
            <p>copyright at niyi</p>
          </footer>
        </MDBContainer>
      </div>
    );
  }
}

export default App;

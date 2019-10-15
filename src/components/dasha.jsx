import React, { Component } from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from "mdbreact";

class dasha extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <MDBCol md="4">
        <MDBCard>
          <MDBCardBody>
            <form>
              <p className="h4 text-center py-4">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  containerClass="d-flex flex-row-reverse"
                  className="ml-0 mr-5"
                  labelClass="ml-0"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="name"
                  value={this.state.name}
                  onInput={this.handleInput}
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  containerClass="d-flex flex-row-reverse"
                  className="ml-0 mr-5"
                  labelClass="ml-0"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  name="email"
                  value={this.state.email}
                  onInput={this.handleInput}
                />
                <MDBInput
                  type="textarea"
                  rows="2"
                  label="Your message"
                  icon="pencil-alt"
                  containerClass="d-flex flex-row-reverse"
                  className="ml-0 mr-5"
                  labelClass="ml-0"
                  name="message"
                  value={this.state.message}
                  onInput={this.handleInput}
                />
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan">Send Message</MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    );
  }
}

export default dasha;

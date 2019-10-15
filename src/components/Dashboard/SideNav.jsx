import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBIcon } from "mdbreact";

class SideNav extends Component {
  render() {
    return (
      <div className="side-wrapper my-0">
        <div className="icon-wrapper">
          <div className="my-5">
            <MDBIcon
              icon="grip-horizontal"
              size="2x"
              className="grey-text pr-3 hov"
            />
          </div>
          <div className="my-5">
            <MDBIcon icon="users" size="2x" className="grey-text pr-3 hov" />
          </div>
          <div className="my-5">
            <MDBIcon
              far
              icon="credit-card"
              size="2x"
              className="grey-text pr-3 hov"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;

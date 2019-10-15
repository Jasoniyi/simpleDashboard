import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon
} from "mdbreact";

const Header = () => {
  return (
    <div>
      <MDBNavbar color="white" dark expand="md">
        <MDBNavbarBrand>
          <strong className="black-text">GetChange</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right className="mr-5">
          {/* <MDBNavItem>
            <MDBNavLink className="waves-effect waves-light" to="#!">
              <MDBIcon far icon="user-circle" />
            </MDBNavLink>
          </MDBNavItem> */}
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret className="black-text">
                <MDBIcon far icon="user-circle black-text">
                  {` `}Hi, Joshua
                </MDBIcon>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    </div>
  );
};

export default Header;

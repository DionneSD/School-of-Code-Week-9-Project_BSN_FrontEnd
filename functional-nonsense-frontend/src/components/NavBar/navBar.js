import React from "react";
// import { NavLink } from "react-router-dom";
import { Nav, NavLink, NavMenu } from "./navBarElements";
  
const NavBar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/join" activeStyle>
            Join the community
          </NavLink>
          <NavLink to="/database" activeStyle>
            Access the database
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
import React from "react";
// import { NavLink } from "react-router-dom";
import { Nav, NavLink, NavMenu } from "./navBarElements";
import logo from "./logo.png";
import "./logo.css";
  
const NavBar = () => {
  return (
    <>
      <Nav>
      <fig>
    <img className="logo" src={logo} alt="logo" />
  </fig>
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
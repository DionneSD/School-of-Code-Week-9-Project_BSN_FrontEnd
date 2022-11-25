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
            home
          </NavLink>
          <NavLink to="/join" activeStyle>
            join the community
          </NavLink>
          <NavLink to="/database" activeStyle>
            access the database
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
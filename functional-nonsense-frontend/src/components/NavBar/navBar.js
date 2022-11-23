import React from "react";
// import { NavLink } from "react-router-dom";
import { Nav, NavLink, NavMenu } from "./navBarElements";
  
const NavBar = () => {
  return (
    <>
      <Nav>
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
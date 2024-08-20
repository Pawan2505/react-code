import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  const NavLinkCSS = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "24px" : "20px",
    };
  };
  return (
    <nav>
      <NavLink to="/" style={NavLinkCSS}>
        Home
      </NavLink>
      <NavLink to="/about" style={NavLinkCSS}>
        About
      </NavLink>
      <NavLink to="/contact" style={NavLinkCSS}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;

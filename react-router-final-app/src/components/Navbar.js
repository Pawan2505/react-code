import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar() {
  const NavCSS = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      fontSize: isActive ? "24px" : "20px",
    };
  };
  return (
    <nav>
      <NavLink to="/" style={NavCSS}>Home</NavLink>
      <NavLink to="/about" style={NavCSS}>About</NavLink>
      <NavLink to="/services" style={NavCSS}>Services</NavLink>
      <NavLink to="/contact" style={NavCSS}>Contact</NavLink>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>
          MyApp
        </Link>
      </div>
      <ul style={styles.navItems}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.link}>
            About
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navItems: {
    listStyle: "none",
    display: "flex",
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Nav;

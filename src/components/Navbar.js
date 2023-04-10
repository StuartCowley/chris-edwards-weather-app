import React from "react";
import logo from "../styles/images/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="www.google.cim">Home</a>
        </li>
        <li>
          <a href="www.google.com">About</a>
        </li>
        <li>
          <a href="www.google.com">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

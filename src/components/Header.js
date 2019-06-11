import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1 className="HeaderLogo">
        <NavLink to="/">
          <img src="/images/logo-5.png" alt="alt" />
        </NavLink>
      </h1>
      <ul className="HeaderList">
        <li className="HeaderItem">
          <NavLink to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li className="HeaderItem">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="HeaderItem">
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;

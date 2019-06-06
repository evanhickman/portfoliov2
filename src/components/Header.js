import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <h1 className="HeaderLogo">EVAN HICKMAN</h1>
      <ul className="HeaderList">
        <li className="HeaderItem">
          <Link to="/">Home</Link>
        </li>
        <li className="HeaderItem">
          <Link to="/about">About</Link>
        </li>
        <li className="HeaderItem">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

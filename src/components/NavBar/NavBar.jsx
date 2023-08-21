import React from "react";
import logo from "../../logo.svg";
import styles from "./NavBarStyle.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="nav-bar">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="listNavBar">
        <ul>
          <NavLink to="/">Characters</NavLink>
          <NavLink to="locations">Locations</NavLink>
          <NavLink to="episodes">Episodes</NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

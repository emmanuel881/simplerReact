import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <h1>JobFinder</h1>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/help">Help</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;

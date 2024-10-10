import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <h1>Cars</h1>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/clients" end>
          Clients
        </NavLink>
        <NavLink to="/rqClients" end>
          React Query clients
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;

import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h1>Website help</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quaerat.
        Asperiores iusto quod esse at illum laboriosam consectetur
        exercitationem mollitia accusamus corrupti dicta inventore nam,
        doloremque, sit eos quam fugit.
      </p>
      <nav>
        <NavLink to="faq">view FAQ</NavLink>
        <NavLink to="contact">Contact-Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

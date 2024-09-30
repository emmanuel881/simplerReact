import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom"; //render child components

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

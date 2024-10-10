import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom"; //render child comonents

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

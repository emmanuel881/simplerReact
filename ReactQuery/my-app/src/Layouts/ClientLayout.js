import React from "react";
import { Outlet } from "react-router-dom"; //render child comonents

const ClientLayout = () => {
  return (
    <div>
      <h2>Client Details</h2>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;

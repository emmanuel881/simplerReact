import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

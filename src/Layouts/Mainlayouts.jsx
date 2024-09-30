import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:flex-row">
      {/* Navbar */}
      <Navbar />

      {/* Main content (Outlet) */}
      <div className="md:flex-grow md:p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

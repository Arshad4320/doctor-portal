import React from "react";
import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;

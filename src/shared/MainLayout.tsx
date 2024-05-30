import React from "react";
import NavHeader from "../components/NavHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavHeader />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;

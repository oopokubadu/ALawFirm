import React from "react";
import NavHeader from "../components/NavHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToComponent from "../components/ScrollToComponent";

const MainLayout = () => {
  return (
    <div>
      <NavHeader />
      <ScrollToComponent selector="#specialist" />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;

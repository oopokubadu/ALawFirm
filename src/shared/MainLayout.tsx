import React from "react";
import NavHeader from "../components/NavHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToComponent from "../components/ScrollToComponent";

const MainLayout = () => {
  return (
    <div className="relative">
      <NavHeader />
      <ScrollToComponent selector="#specialist" />
      <Outlet/>
      <Footer/>
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#262626] h-48 "></div>
    </div>
  );
};

export default MainLayout;

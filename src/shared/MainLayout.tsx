import React, { useState, useEffect } from "react";
import NavHeader from "../components/NavHeader";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToComponent from "../components/ScrollToComponent";

const MainLayout = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.offsetHeight;
      setIsAtBottom(scrollTop >= documentHeight - 1); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <NavHeader />
      <ScrollToComponent selector="#specialist" />
      <Outlet />
      <Footer />
      {!isAtBottom && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#262626] h-48"></div>
      )}
    </div>
  );
};

export default MainLayout;

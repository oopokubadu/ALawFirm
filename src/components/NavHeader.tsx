import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import { LogoWhite } from "../assets";
import SpecialistDropdown from "./SpecialistDropdown";
import NewsInsightsDropdown from "./NewsInsightsDropdown";

const NavHeader = () => {
  const navData = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Our story",
      link: "/our-story",
    },
    {
      title: "News and Insights",
      link: "/news-and-insights",
    },
    {
      title: "Careers",
      link: "/careers",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const threshold = 300; // Change this value to the desired scroll position threshold
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed z-50 top-0 left-0 transition-transform duration-300 ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* <div
        className={`backdrop-blur-lg w-full ${
          location.pathname.startsWith("/news") ? "bg-[#262626]" : "bg-[#262626] bg-opacity-50"
        }`} */}
      <div className="backdrop-blur-lg w-full bg-[#262626] bg-opacity-50">
        <nav className="relative max-w-[85rem] mx-auto z-20 flex shrink-0 items-center space-x-2  px-4 sm:px-6">
          <a href="/">
            {/* Logo */}
            <div>
              <img className="w-20" src={LogoWhite} alt="" />
            </div>
          </a>
          <div className="flex-1"></div>
          <div className="hidden space-x-1.5 md:flex">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `inline-flex text-[#CECECE] relative group h-24 cursor-pointer items-center justify-center px-4 py-2.5 text-base font-light ${
                  isActive
                    ? "font-bold text-white border-b-2 border-[#ED1B24]"
                    : ""
                }`
              }
            >
              Home
              <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-[#ED1B24] group-hover:w-full"></span>
            </NavLink>
            <SpecialistDropdown /> {/* Include the OurSpecialities component */}
            <NavLink
              to="/our-story"
              className={({ isActive }) =>
                `inline-flex text-[#CECECE] relative group h-24 cursor-pointer items-center justify-center px-4 py-2.5 text-base font-light ${
                  isActive
                    ? "font-bold text-white border-b-2 border-[#ED1B24]"
                    : ""
                }`
              }
            >
              Our Story
              <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-[#ED1B24] group-hover:w-full"></span>
            </NavLink>
            <NewsInsightsDropdown />
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `inline-flex text-[#CECECE] relative group h-24 cursor-pointer items-center justify-center px-4 py-2.5 text-base font-light ${
                  isActive
                    ? "font-bold text-white border-b-2 border-[#ED1B24]"
                    : ""
                }`
              }
            >
              Careers
              <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-[#ED1B24] group-hover:w-full"></span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `inline-flex text-[#CECECE] relative group h-24 cursor-pointer items-center justify-center px-4 py-2.5 text-base font-light ${
                  isActive
                    ? "font-bold text-white border-b-2 border-[#ED1B24]"
                    : ""
                }`
              }
            >
              Contact
              <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-[#ED1B24] group-hover:w-full"></span>
            </NavLink>
          </div>

          <Menu as="div" className="h-20 flex relative md:hidden z-50">
            <Menu.Button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl p-2 font-semibold"
            >
              <HiMenuAlt3 className="h-7 w-7 text-white my-auto " />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right bg-[#373636] py-3 shadow-xl focus:outline-none">
                {navData.map((data, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <NavLink
                        to={data.link}
                        className={`${
                          active ? "bg-muted-1 text-heading" : "text-text"
                        } flex w-full cursor-pointer items-center text-white px-4 py-2 text-sm font-semibold`}
                      >
                        {data.title}
                      </NavLink>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </nav>
      </div>
    </div>
  );
};

export default NavHeader;

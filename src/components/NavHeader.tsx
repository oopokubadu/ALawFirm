import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { LogoWhite } from "../assets";

const NavHeader = () => {
  const navData = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Our specialities",
      link: "/our-specialities",
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
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="backdrop-blur-sm bg-gray/50 w-full fixed z-50 top-0 left-0 ">
      <nav className="relative max-w-[85rem]  mx-auto z-20 flex shrink-0 items-center space-x-2 py-4 px-4 sm:px-6">
        <a href="/">
          {/* Logo */}
          <div>
            <img className="w-20" src={LogoWhite} alt="" />
          </div>
        </a>
        <div className="flex-1"></div>
        <div className="hidden  space-x-1.5 md:flex">
          {navData.map((data, index) => (
            <NavLink
              key={index}
              to={data.link}
              className={({ isActive }) =>
                `inline-flex text-[#CECECE] relative group cursor-pointer items-center justify-center px-4 py-2.5 text-base font-light ${
                  isActive
                    ? "font-bold text-white border-b-2 border-[#ED1B24]"
                    : ""
                }`
              }
            >
              {data.title}
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-[#ED1B24] group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        <Menu as="div" className=" relative md:hidden z-50">
          <Menu.Button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-xl  p-2 font-semibold"
          >
            <HiMenuAlt3 className="h-7 w-7 text-white" />
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
            <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl bg-[#373636] py-3 shadow-xl focus:outline-none">
              {navData.map((data, index) => (
                <Menu.Item>
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
  );
};

export default NavHeader;

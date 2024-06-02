import React from "react";
import { LogoWhite } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-10 bg-[#262626]">
      <div className="mx-auto flex max-w-[85rem] flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0 text-[#CECECE]">
        <div className="flex flex-col items-center mx-auto space-y-8 text-center text-sm font-light lg:flex-row lg:space-x-20 lg:space-y-0 lg:text-left">
          <a href="/">
            {/* Logo */}
            <div className="h-7 my-4 text-heading">
              <img className="w-24 " src={LogoWhite} alt="" />
            </div>
          </a>
          <div className="font-light">
            East Legon - Nii Afutu <br /> Tsuru Street GD-185-4362
          </div>
          <div className="font-light ">
            +233 302 954 064 <br /> +233 302 954 104
          </div>
          <div className="font-light underline">info@theeightgeeks.com</div>
          <div className="font-light">
            Copyright © 2020 - Eight Geeks At Law
          </div>
          <Link to="/privacy-policy" className="font-light">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

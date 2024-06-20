import React from "react";
import { LogoBlack } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-10 bg-white">
      <div className="mx-auto flex max-w-[85rem] flex-col items-center justify-between space-y-4 lg:flex-row lg:space-y-0 text-[#1D1D1D]">
        <div className="flex flex-col items-center mx-auto space-y-8 text-center text-sm font-light lg:flex-row lg:space-x-20 lg:space-y-0 lg:text-left">
          <a href="/">
            {/* Logo */}
            <div className="h-7 my-4 text-heading">
              <img className="w-20 " src={LogoBlack} alt="" />
            </div>
          </a>
          <div>
            East Legon - Nii Afutu <br /> Tsuru Street GD-185-4362
          </div>
          <div className=" ">
            +233 302 954 064 <br /> +233 302 954 104
          </div>
          <div className="underline">info@theeightgeeks.com</div>
          <div>Copyright © 2020 - Eight Geeks At Law</div>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

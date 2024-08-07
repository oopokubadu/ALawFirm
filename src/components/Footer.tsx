import React from "react";
const Footer = () => {
  return (
    <footer className="px-4 py-10 bg-white">
      <div className="mx-auto flex max-w-[85rem] flex-col items-center justify-between space-y-4 lg:flex-row sm:space-y-0  px-4 sm:px-6 text-[#1D1D1D]">
        <div className="flex flex-col items-center w-full mx-auto space-y-8 text-center text-sm  lg:flex-row justify-between lg:text-left">
          <a href="/">
            {/* Logo */}
            <div className="h-7 my-4 text-heading">
              <img
                className="w-20 "
                src="https://res.cloudinary.com/djmddrfv2/image/upload/v1720001958/logoBlack_qntrup.png"
                alt=""
              />
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
          {/* <Link to="/privacy-policy">Privacy Policy</Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

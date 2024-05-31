import React from "react";
import { SafeImg } from "../../../assets";
import { BsArrowRightCircle } from "react-icons/bs";

const LatestNews = () => {
  return (
    <div className="bg-[#1D1D1D]">
      <div className="max-w-[85rem] px-4  sm:px-6 lg:px-8 mx-auto">
        <div className="grid  md:grid-cols-2 items-center">
          <a href="#dl" className="group">
            <div className=" flex flex-wrap lg:flex-nowrap gap-6 items-center bg-[#262626]  p-5  border-4 border-transparent  group-hover:border-[#343434] transition ease-in-out duration-200">
              <img className="lg:w-56 lg:h-56 object-cover" src={SafeImg} alt="" />

              <div>
                <div>
                  <h3 className="text-lg font-semibold underline text-white">
                    At a Glance: IP Protection in Ghana
                  </h3>
                  <p className="text-white text-xs font-light my-2">
                    Everyday, new products, processes and services are birthed,
                    increasing the significance of the protection of
                    intellectual property (IP) rights. A robust intellectual
                    property protection (IPP) regime...
                  </p>
                </div>

                <button className="inline-flex cursor-pointer  transition ease-in-out delay-150  duration-300 items-center justify-center mt-2  bg-transparent  text-sm font-light group-hover:font-bold text-white group-hover:text-[#ED1B24]">
                  <span className="underline "> Continue reading</span>
                  <BsArrowRightCircle className="ml-5 h-5 w-5 group-hover:-rotate-45" />
                </button>
              </div>
            </div>
          </a>
          <a href="#dl" className="group">
            <div className=" flex flex-wrap lg:flex-nowrap gap-6 items-center bg-[#1D1D1D]  p-5  border-4 border-transparent  group-hover:border-[#343434] transition ease-in-out duration-200">
              <img className="lg:w-56 lg:h-56 object-cover" src={SafeImg} alt="" />

              <div>
                <div>
                  <h3 className="text-lg font-semibold underline text-white">
                    At a Glance: IP Protection in Ghana
                  </h3>
                  <p className="text-white text-xs font-light my-2">
                    Everyday, new products, processes and services are birthed,
                    increasing the significance of the protection of
                    intellectual property (IP) rights. A robust intellectual
                    property protection (IPP) regime...
                  </p>
                </div>

                <button className="inline-flex cursor-pointer  transition ease-in-out delay-150  duration-300 items-center justify-center mt-2  bg-transparent  text-sm font-light group-hover:font-bold text-white group-hover:text-[#ED1B24]">
                  <span className="underline "> Continue reading</span>
                  <BsArrowRightCircle className="ml-5 h-5 w-5 group-hover:-rotate-45" />
                </button>
              </div>
            </div>
          </a>
          <a href="#dl" className="group">
            <div className=" flex flex-wrap lg:flex-nowrap gap-6 items-center bg-[#1D1D1D]  p-5  border-4 border-transparent  group-hover:border-[#343434] transition ease-in-out duration-200">
              <img className="lg:w-56 lg:h-56 object-cover" src={SafeImg} alt="" />

              <div>
                <div>
                  <h3 className="text-lg font-semibold underline text-white">
                    At a Glance: IP Protection in Ghana
                  </h3>
                  <p className="text-white text-xs font-light my-2">
                    Everyday, new products, processes and services are birthed,
                    increasing the significance of the protection of
                    intellectual property (IP) rights. A robust intellectual
                    property protection (IPP) regime...
                  </p>
                </div>

                <button className="inline-flex cursor-pointer  transition ease-in-out delay-150  duration-300 items-center justify-center mt-2  bg-transparent  text-sm font-light group-hover:font-bold text-white group-hover:text-[#ED1B24]">
                  <span className="underline "> Continue reading</span>
                  <BsArrowRightCircle className="ml-5 h-5 w-5 group-hover:-rotate-45" />
                </button>
              </div>
            </div>
          </a>
          <a href="#dl" className="group">
            <div className=" flex flex-wrap lg:flex-nowrap gap-6 items-center bg-[#262626]  p-5  border-4 border-transparent  group-hover:border-[#343434] transition ease-in-out duration-200">
              <img className="lg:w-56 lg:h-56 object-cover" src={SafeImg} alt="" />

              <div>
                <div>
                  <h3 className="text-lg font-semibold underline text-white">
                    At a Glance: IP Protection in Ghana
                  </h3>
                  <p className="text-white text-xs font-light my-2">
                    Everyday, new products, processes and services are birthed,
                    increasing the significance of the protection of
                    intellectual property (IP) rights. A robust intellectual
                    property protection (IPP) regime...
                  </p>
                </div>

                <button className="inline-flex cursor-pointer  transition ease-in-out delay-150  duration-300 items-center justify-center mt-2  bg-transparent  text-sm font-light group-hover:font-bold text-white group-hover:text-[#ED1B24]">
                  <span className="underline "> Continue reading</span>
                  <BsArrowRightCircle className="ml-5 h-5 w-5 group-hover:-rotate-45" />
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;

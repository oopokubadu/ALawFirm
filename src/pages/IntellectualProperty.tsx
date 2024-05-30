import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { IntellectualBgImage } from "../assets";

const IntellectualProperty = () => {
  return (
    <div>
      <div
        className=" w-full"
        style={{
          backgroundImage: `url(${IntellectualBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-[100vh] items-end w-full">
          <section className="px-4 lg:px-0 py-16 mx-auto max-w-[85rem]">
            <div className="w-full px-4 sm:px-6  lg:w-8/12 ">
              <h1 className="mb-3 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
                Intellectual Property & Technology Transactions
              </h1>

              <button className="inline-flex cursor-pointer group transition ease-in-out delay-150  duration-300 items-center justify-center  bg-[#ED1B24] px-4 py-3 text-xl font-light text-white">
                <span className="group-hover:underline"> Talk to us </span>
                <BsArrowUpRightCircle className="ml-5 h-5 w-5 group-hover:rotate-45" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IntellectualProperty;

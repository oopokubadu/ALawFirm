import React from "react";
import {
  Corporate,
  Intellectual,
  News1,
  News2,
  News3,
  News4,
  News5,
  Regulations,
} from "../../../assets";
import { CgArrowRightO } from "react-icons/cg";

const NewsInsights = () => {
  const newsData = [
    {
      image: News1,
    },
    {
      image: News2,
    },
    {
      image: News3,
    },
    {
      image: News4,
    },
    {
      image: News5,
    },
  ];
  return (
    <div>
      <div className="max-w-[85rem] mx-auto px-4 pt-4 pb-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="text-white  py-10 font-semibold text-3xl">
            News and Insights
          </h1>
          <p className="text-white underline">View ALL</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 my-4">
          {newsData.map((data, index) => (
            <div key={index}>
              <div className="group relative">
                <div className="z-10 h-full w-full overflow-hidden  opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
                  <img
                    src={data.image}
                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                </div>
                <div className="absolute  opacity-0 group-hover:opacity-100 bottom-[5rem] left-[7rem] z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                  <button className=" flex gap-x-2 underline items-center font-extralight text-white ">
                    Read More
                    <CgArrowRightO />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;

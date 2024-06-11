import React from "react";
import { CgArrowRightO } from "react-icons/cg";
import { Link } from "react-router-dom";
import {
  News2,
  News3,
  News4,
  News5,
  News7,
  News8,
  News9,
} from "../../../assets";

const NewsInsights = () => {
  const newsData = [
    {
      image: News8,
      link: "/news/details-5",
    },
    {
      image: News2,
      link: "/news/details-2",
    },
    {
      image: News4,
      link: "/news/details-3",
    },
    {
      image: News7,
      link: "/news/details-4",
    },
    {
      image: News5,
      link: "/news/details-1",
    },
    {
      image: News9,
      link: "/news/details-6",
    },
  ];
  return (
    <div>
      <div className="max-w-[85rem] mx-auto px-4 pt-4 pb-10 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="3000"
          data-aos-once="true"
          className="flex flex-wrap justify-between items-center"
        >
          <h1 className="text-white  py-10 font-semibold text-3xl">
            News and Insights
          </h1>
          <Link
            to="/news-and-insights"
            className="relative after:absolute text-white after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300"
          >
            View All
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 my-4">
          {newsData.map((data, index) => (
            <Link
              to={data.link}
              key={index}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay={index * 200}
            >
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
                  <button className=" flex gap-x-2 underline text-sm hover:font-bold hover:text-[#ED1B24]  items-center font-light text-white transition">
                    Read More
                    <CgArrowRightO className="hover:-rotate-45" />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;

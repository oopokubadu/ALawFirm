import React from "react";
import { BgBlog } from "../../assets";
import { BsArrowUpRightCircle } from "react-icons/bs";
import LatestNews from "./components/LatestNews";
import NewsCarousel from "./components/NewsCarousel";

const NewsInsights = () => {
  return (
    <div>
      <div
        className="h-[100vh] flex pt-10 items-center"
        style={{
          backgroundImage: `url(${BgBlog})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-4xl text-center mx-auto">
            <h1 className="block font-semibold text-white text-4xl md:text-5xl">
              Digital Credit in Ghana: A Closer Look
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-base md:text-lg font-light text-white">
              Last week, the Bank of Ghana posted a notice with a list of
              ninety-seven (97) unlicensed entities that are engaged in the
              provision of loans through mobile applications to the Ghanaian
              public...
            </p>
          </div>

          <div className="text-center">
            <button className="inline-flex cursor-pointer group transition ease-in-out delay-150  duration-300 items-center justify-center  bg-[#ED1B24] px-4 py-3 text-xl font-light text-white">
              <span className="group-hover:underline">
                {" "}
                Continue reading...{" "}
              </span>
              <BsArrowUpRightCircle className="ml-5 h-5 w-5 group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </div>
      <LatestNews />
      <NewsCarousel />
    </div>
  );
};

export default NewsInsights;

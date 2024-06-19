import React from "react";
import { Blog, Library } from "../../assets";
import { CgArrowRightO } from "react-icons/cg";
import { Link } from "react-router-dom";

const InsightsNews = () => {
  return (
    <div>
      <div className=" bg-[#1D1D1D] flex pt-10 items-center">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-3xl text-center py-16 mx-auto">
            <h1
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="block font-semibold text-white text-4xl md:text-5xl"
            >
              Explore Our Legal Insights and Innovations
            </h1>
          </div>
          <div className="max-w-4xl  mx-auto">
            <div className="grid gap-3 sm:grid-cols-2 my-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://eightgeeksatlaw.wordpress.com/"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="200"
                className=" bg-[#262626] hover:bg-[#1D1D1D] border-4 border-transparent  hover:border-[#343434] transition ease-in-out duration-200 p-6"
              >
                <img src={Blog} alt="" className="w-12 h-12" />
                <h6 className="my-5 text-lg  font-medium  text-white">Blog</h6>
                <p className="text-sm mb-6  font-extralight text-white">
                  Discover in-depth articles written by our experienced lawyers,
                  covering a wide range of topics in the legal field. Our Blog
                  provides thoughtful analysis, expert opinions, and practical
                  advice on legal matters that impact the tech industry. Join
                  our community of readers and engage with content designed to
                  enlighten and inspire
                </p>
                <button className=" flex gap-x-2 underline items-center font-extralight text-white ">
                  Visit
                  <CgArrowRightO />
                </button>
              </a>
              <Link
                to="/library"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-delay="400"
                className=" bg-[#262626] hover:bg-[#1D1D1D] border-4 border-transparent  hover:border-[#343434] transition ease-in-out duration-200 p-6"
              >
                <img src={Library} alt="" className="w-12 h-12" />
                <h6 className="my-5 text-lg  font-medium  text-white">
                  Library
                </h6>
                <p className="text-sm mb-6  font-extralight text-white">
                  Dive into our comprehensive collection of short publications
                  that explore the intersection of technology and law. Stay
                  informed with concise, expert-written pieces on the latest
                  trends, emerging issues, and critical developments in the
                  tech-legal space. Whether you’re a professional or enthusiast,
                  our Library offers valuable insights to keep you ahead of the
                  curve.
                </p>
                <button className=" flex gap-x-2 underline items-center font-extralight text-white ">
                  Visit
                  <CgArrowRightO />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsNews;

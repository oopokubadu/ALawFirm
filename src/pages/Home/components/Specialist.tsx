import React from "react";
import { Corporate, Intellectual, Regulations } from "../../../assets";
import { CgArrowRightO } from "react-icons/cg";
import { link } from "fs";
import { Link } from "react-router-dom";

const Specialist = () => {
  const specialistData = [
    {
      link: "/corporate-law",
      icon: Corporate,
      title: "Corporate Law",
      description:
        "We've got your corporate needs covered! Our expertise spans across multiple facets of corporate law, ensuring your interests are safeguarded in mergers and acquisitions, shareholder activism, corporate governance, emerging company structuring, and technology-related contract reviews. Count on us to be your dedicated corporate protectors! 🛡️💼🤝📝🚀",
    },
    {
      link: "/intellectual-property-&-technology-transactions",
      icon: Intellectual,
      title: "Intellectual Property & Technology Transactions",
      description: `At Eight Geeks, we're your fierce defenders of innovation! 
      We shield your brilliant ideas with patents, trademarks, copyrights, and top-notch legal protection. Plus, we're tech wizards who'll help you navigate the tricky waters of privacy, agreements, and user-vendor relationships. Join us in the quest for market disruption and let's geek out together! 🛡️💡🚀`,
    },
    {
      link: "/regulations-and-licensing",
      icon: Regulations,
      title: "Regulations and Licensing",
      description:
        "We simplify regulations, empowering you to make informed decisions for your business. We also offer hassle-free licensing facilitation across various tech areas. Trust us to be your guiding light! 🌟🚀🔒",
    },
  ];
  return (
    <div className="bg-[#1D1D1D]">
      <div className="max-w-[85rem] mx-auto px-4 pt-4 pb-10 sm:px-6 lg:px-8">
        <h1 className="text-white py-10 font-semibold text-3xl">
          We are <span className="italic">specialist!</span>
        </h1>
        <div className="grid gap-4 sm:grid-cols-3 my-4">
          {specialistData.map((data, index) => (
            <Link
              to={data.link}
              key={index}
              className=" bg-[#262626] hover:bg-[#1D1D1D] border-4 border-transparent  hover:border-[#343434] transition ease-in-out duration-200 p-6"
            >
              <img src={data.icon} alt="" className="w-12 h-12" />
              <h6 className="my-5 text-lg  font-medium  text-white">
                {data.title}
              </h6>
              <p className="text-sm mb-6  font-extralight text-white">
                {data.description}
              </p>
              <button className=" flex gap-x-2 underline items-center font-extralight text-white ">
                Read More
                <CgArrowRightO />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialist;
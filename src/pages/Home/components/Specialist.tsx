import React, { useEffect, useRef } from "react";
import { Corporate, Intellectual, Regulations } from "../../../assets";
import { CgArrowRightO } from "react-icons/cg";
import { link } from "fs";
import { Link, useLocation } from "react-router-dom";

const Specialist = () => {
  const location = useLocation();
  const specialistRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (location.state) {
      const { scrollTo } = location.state;
      if (scrollTo === "specialist" && specialistRef.current) {
        specialistRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  const specialistData = [
    {
      link: "/corporate-and-commercial",
      icon: Corporate,
      title: "Corporate and Commercial",
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
      link: "/regulatory-and-licensing",
      icon: Regulations,
      title: "Regulatory and Licensing",
      description:
        "We simplify regulations, empowering you to make informed decisions for your business. We also offer hassle-free licensing facilitation across various tech areas. Trust us to be your guiding light! 🌟🚀🔒",
    },
  ];

  return (
    <div id="specialist" className="bg-[#1D1D1D]">
      <div className="max-w-[85rem] mx-auto px-4 pt-4 pb-10 sm:px-6 lg:px-8">
        <h1
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="3000"
          data-aos-once="true"
          className="text-white py-10 font-semibold text-3xl"
        >
          We are <span className="italic">specialist!</span>
        </h1>
        <div className="grid gap-4 sm:grid-cols-3 my-4">
          {specialistData.map((data, index) => (
            <Link
              to={data.link}
              key={index}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay={index * 200}
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

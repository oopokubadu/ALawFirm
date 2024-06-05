import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  Abiba,
  Augustina,
  Emmanuel,
  Kofi,
  Jude,
  Vanessa,
} from "../../../assets";

const OurPeople = () => {
  const BoardMembers = [
    {
      name: "Kofi Owusu-Nhyira",
      image: Kofi,
      position: "Not Available",
      portfolio: "https://www.linkedin.com/in/kofiowusu-nhyira/",
    },
    {
      name: "Emmanuel Saah",
      image: Emmanuel,
      position: "Not Available",
      portfolio: "",
    },
    {
      name: "Augustina Odame",
      image: Augustina,
      position: "Not Available",
      portfolio: "",
    },
    {
      name: "Vanessa Akuetteh",
      image: Vanessa,
      position: "Not Available",
      portfolio: "",
    },
    {
      name: "Not Available",
      image: Jude,
      position: "Not Available",
      portfolio: "",
    },
    {
      name: "Abiba Tornia",
      image: Abiba,
      position: "Not Available",
      portfolio: "",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl  md:text-3xl font-bold mt-12 mb-10 text-white ">
        The brains behind the awesomeness
      </h1>

      <div className="grid gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-5 justify-center lg:max-w-screen-xl text-white">
        {BoardMembers.map((data, index) => (
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay={index * 200}
            key={index}
            className=""
          >
            <div className="relative bg-[#262626] mb-4 overflow-hidden">
              <img
                className="h-56 mx-auto object-cover transition-all duration-300 hover:scale-110"
                src={data.image}
                alt="Person"
              />
            </div>
            <a href={data.portfolio}>
              <div className="flex flex-row items-center justify-between">
                <div>
                  <p className="text-sm font-bold">{data.name}</p>
                  <p className="text-sm font-light">{data.position}</p>
                </div>
                <FaLinkedin className="text-lg " />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPeople;

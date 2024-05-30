import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  Abena,
  Augustina,
  Emmanuel,
  Kofi,
  Nobody,
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
      portfolio: "https://www.linkedin.com/in/priscahazel",
    },
    {
      name: "Augustina Odame",
      image: Augustina,
      position: "Not Available",
      portfolio: "https://www.linkedin.com/in/priscahazel",
    },
    {
      name: "Vanessa Akuetteh",
      image: Vanessa,
      position: "Not Available",
      portfolio: "https://www.linkedin.com/in/priscahazel",
    },
    {
      name: "Not Available",
      image: Nobody,
      position: "Not Available",
      portfolio: "https://www.linkedin.com/in/priscahazel",
    },
    {
      name: "Abiba Tornia",
      image: Abena,
      position: "Not Available",
      portfolio: "https://www.linkedin.com/in/priscahazel",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl  md:text-3xl font-bold mt-12 mb-10 text-white ">
        The brains behind the awesomeness
      </h1>

      <div className="grid gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-5 lg:max-w-screen-xl text-white">
        {BoardMembers.map((data, index) => (
          <div key={index}>
            <div className="relative mb-4">
              <img
                className=" object-cover transition-all duration-300 hover:scale-110"
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

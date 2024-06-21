import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  Abiba,
  Augustina,
  Emmanuel,
  Kofi,
  Jude,
  Vanessa,
  Naa,
} from "../../../assets";

const OurPeople = () => {
  const BoardMembers = [
    {
      name: "Kofi Owusu-Nhyira",
      image: Kofi,
      position: "Founding Partner",
      portfolio: "https://www.linkedin.com/in/kofiowusu-nhyira/",
    },
    {
      name: "Emmanuel Saah",
      image: Emmanuel,
      position: "Managing Partner",
      portfolio: "https://www.linkedin.com/in/emmanuel-saah-4a451a222/",
    },
    {
      name: "Augustina Odame",
      image: Augustina,
      position: "Consultant",
      portfolio: "https://www.linkedin.com/in/augustinaodame/",
    },
    {
      name: "Vanesa Akuetteh",
      image: Vanessa,
      position: "Associate",
      portfolio: "https://www.linkedin.com/in/vanesa-akuetteh/",
    },

    {
      name: "Abiba Tornia",
      image: Abiba,
      position: "Associate",
      portfolio: "https://www.linkedin.com/in/abiba-tornia-a026a766/",
    },
    {
      name: "Jude Serbeh Boateng",
      image: Jude,
      position: "Associate",
      portfolio: "https://www.linkedin.com/in/jude-serbeh-boateng-816033149/",
    },
    {
      name: "Princess Judith Allotey",
      image: Naa,
      position: "Associate",
      portfolio:
        "https://www.linkedin.com/in/princess-judith-n-a-allotey-0469a41a0/",
    },
  ];
  return (
    <div className="pb-16 overflow-x-hidden">
      <h1 className="text-2xl  md:text-3xl font-bold pt-12 pb-10 text-[#262626] ">
        The brains behind the awesomeness
      </h1>

      {/* <div className="grid gap-5 mx-auto sm:grid-cols-2 lg:grid-cols-5 justify-center lg:max-w-screen-xl text-[#262626]">
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
            <div className="relative bg-[#F9F9F9] mb-4 overflow-hidden">
              <img
                className="h-56 pt-5 mx-auto object-cover transition-all duration-300 hover:scale-110"
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
                <FaLinkedin className="text-lg text-[#0076B2]" />
              </div>
            </a>
          </div>
        ))}
      </div> */}
      <ul
        role="list"
        className="mx-auto mt-20 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-5"
      >
        {BoardMembers.map((person) => (
          <li key={person.name}>
            <div className="relative bg-[#F9F9F9] mb-4 overflow-hidden">
              <img
                className="aspect-[10/16]  pt-3 w-full rounded-2xl object-cover transition-all duration-300 hover:scale-110"
                src={person.image}
                alt=""
              />
            </div>
            <a href={person.portfolio}>
              <div className="flex flex-row items-center mt-4 justify-between">
                <div>
                  <p className="text-sm font-bold">{person.name}</p>
                  <p className="text-sm font-light">{person.position}</p>
                </div>
                <FaLinkedin className="text-lg text-[#0076B2]" />
              </div>
            </a>
            {/* <p className="text-sm leading-6 text-gray-500">{person.location}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurPeople;

import React from "react";

import { BgQuote, BgQuoteBlack, StoryBgImage } from "../../assets";
import OurPeople from "./components/OurPeople";

const OurStory = () => {
  return (
    <div>
      <div
        className="h-[80vh]"
        style={{
          backgroundImage: `url(${StoryBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[85rem] mx-auto px-4 lg:px-6 flex h-[70vh] items-end">
          <div>
            <h1 className="font-bold max-w-3xl text-white text-4xl lg:text-5xl">
              The Eight Geeks Story
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1D1D] pb-14">
        <div className="mx-auto max-w-[85rem]  px-4 lg:px-6 ">
          {/* 1/3 and 2/3 */}

          <div
            className="flex flex-col bg-right-bottom text-white bg-no-repeat p-5  lg:p-8 bg-[#ED1B24]"
            style={{
              backgroundImage: `url(${BgQuote})`,
              backgroundSize: "10rem",
            }}
          >
            <h2 className="text-base font-bold mb-10">Who We Are</h2>
            <p className="text-base font-light text-center mb-10 lg:px-8">
              We are a team of lawyers who are fiercely passionate about
              technology and innovation; and the many opportunities they present
              for developing solutions to Africa’s development challenges. We
              are thus equally passionate about the regulations, laws and
              policies which govern the development of technology and
              innovation; and about democratizing access to the legal and
              regulatory support needed to profitably explore the boundaries of
              technology innovation, particularly in Africa.
            </p>
          </div>

          <div
            className="flex flex-col text-[#262626] bg-right-bottom  bg-no-repeat p-5  lg:p-8 bg-white"
            style={{
              backgroundImage: `url(${BgQuoteBlack})`,
              backgroundSize: "10rem",
            }}
          >
            <h2 className="text-base font-bold mb-10">Who We Represent</h2>
            <p className="text-base font-light text-center mb-10 lg:px-8">
              We represent technology pioneers and disruptors associated with
              market-changing innovations across the gamut of business size and
              maturity - from start-ups who need guidance setting up and
              situating their operations within the appropriate regulatory
              landscape, to multinational and global firms who require expert
              contextualized advice for operating in, or launching into Africa.
              We also represent entities whose primary functions although not
              technology-based, transact with other players in the technology
              ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-5 gap-x-36 p-5 lg:p-10 md:grid-cols-2 text-white bg-[#262626]">
            <div>
              <h2 className="text-base font-bold text-[#ED1B24]">Philosophy</h2>
              <p className="mt-8 font-light text-sm">
                Africa; the next frontier! We are primed towards the growth of
                Africa’s high tech and innovation industries and we work with
                the brightest innovators and entrepreneurs across the globe to
                push the boundaries of technology and innovation in Africa.
              </p>
            </div>
            <div>
              <h2 className="text-base font-bold text-[#ED1B24] ">Culture</h2>
              <p className="mt-8 font-light text-sm">
                <span className="font-bold">Quirky;</span> Unconventional -
                Unusual - Not your everyday law firm.
                <br />
                <span className="font-bold">Serious fun;</span> Easy on the
                outside, serious on the inside.
                <br />
                <span className="font-bold">Encore;</span> Get it right the
                first time. Put that on replay.
              </p>
            </div>
          </div>
          <OurPeople />
        </div>
      </div>
    </div>
  );
};

export default OurStory;

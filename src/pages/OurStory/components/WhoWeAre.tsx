import React from "react";
import { BgQuote, BgQuoteBlack } from "../../../assets";
import { CgQuote } from "react-icons/cg";

const WhoWeAre = () => {
  return (
    <div>
      {/* <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-once="true"
        className="flex flex-col bg-right-bottom text-white bg-no-repeat p-5  lg:p-8 bg-[#ED1B24]"
        style={{
          backgroundImage: `url(${BgQuote})`,
          backgroundSize: "10rem",
        }}
      >
        <h2 className="text-base font-bold mb-10">Who We Are</h2>
        <p className="text-base font-light text-center mb-10 lg:px-8">
          We are a team of lawyers who are fiercely passionate about technology
          and innovation; and the many opportunities they present for developing
          solutions to Africa’s development challenges. We are thus equally
          passionate about the regulations, laws and policies which govern the
          development of technology and innovation; and about democratizing
          access to the legal and regulatory support needed to profitably
          explore the boundaries of technology innovation, particularly in
          Africa.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-once="true"
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
          maturity - from start-ups who need guidance setting up and situating
          their operations within the appropriate regulatory landscape, to
          multinational and global firms who require expert contextualized
          advice for operating in, or launching into Africa. We also represent
          entities whose primary functions although not technology-based,
          transact with other players in the technology ecosystem.
        </p>
      </div> */}
      <div className="grid grid-cols-1 my-4 gap-6 md:grid-cols-3 text-[#262626]">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
          className="flex flex-col bg-right-bottom bg-no-repeat p-5 h-auto lg:p-8 bg-[#F9F9F9]"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
          className="rounded-3xl p-5 lg:p-10 md:col-span-2"
        >
          <h2 className="text-base font-bold mb-2">Who We Are</h2>
          <p className="text-base  mb-5">
            We are a team of lawyers who are fiercely passionate about
            technology and innovation; and the many opportunities they present
            for developing solutions to Africa’s development challenges. We are
            thus equally passionate about the regulations, laws and policies
            which govern the development of technology and innovation; and about
            democratizing access to the legal and regulatory support needed to
            profitably explore the boundaries of technology innovation,
            particularly in Africa.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 my-4 gap-6 md:grid-cols-3 text-[#262626]">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
          className="flex flex-col bg-right-bottom bg-no-repeat p-5 h-auto lg:p-8 bg-[#F9F9F9]"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
          className="rounded-3xl p-5 lg:p-10 md:col-span-2"
        >
          <h2 className="text-base font-bold mb-2">Who We Represent</h2>
          <p className="text-base  mb-5">
            We represent technology pioneers and disruptors associated with
            market-changing innovations across the gamut of business size and
            maturity - from start-ups who need guidance setting up and situating
            their operations within the appropriate regulatory landscape, to
            multinational and global firms who require expert contextualized
            advice for operating in, or launching into Africa. We also represent
            entities whose primary functions although not technology-based,
            transact with other players in the technology ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

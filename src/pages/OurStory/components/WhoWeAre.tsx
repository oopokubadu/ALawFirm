import React from "react";

const WhoWeAre = () => {
  return (
    <div>
      <div className="flex flex-col my-2 overflow-hidden bg-white lg:flex-row sm:mx-auto">
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
          className="relative lg:w-[30%] overflow-hidden"
        >
          <img
            src="https://res.cloudinary.com/djmddrfv2/image/upload/v1720011502/img_who-we-represent_udkssw.webp"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full transition-all duration-300 hover:scale-110"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
          className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-[70%]"
        >
          <h2 className="text-base font-bold mb-2">Who We Are</h2>
          <p className="text-base mb-3 text-[#262626]">
            We are a team of lawyers who are fiercely passionate about
            technology and innovation; and the many opportunities they present
            for developing solutions to Africa’s development challenges. We are
            thus equally passionate about the regulations, laws and policies
            which govern the development of technology and innovation; and about
            democratizing access to the legal and regulatory support needed to
            profitably explore the boundaries of technology innovation,
            particularly in Africa.
          </p>
          <h2 className="text-base font-bold mb-2">Who We Repreent</h2>
          <p className="text-base text-[#262626]">
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

import React from "react";

import { BgQuote, BgQuoteBlack, Hero2, HeroVid2 } from "../../assets";
import OurPeople from "./components/OurPeople";
import WhoWeAre from "./components/WhoWeAre";

const OurStory = () => {
  return (
    <div>
      <div className="h-[80vh] relative">
        <video
          className="w-full h-[80vh] absolute object-cover"
          src={HeroVid2}
          muted
          loop
          autoPlay
        />

        <div className="max-w-[85rem] mx-auto px-4 lg:px-6 flex h-[70vh] items-end">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="font-bold max-w-3xl text-[#262626] text-4xl lg:text-5xl"
            >
              The Eight Geeks Story
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white pb-14">
        <div className="mx-auto max-w-[85rem]  px-4 lg:px-6 ">
          {/* 1/3 and 2/3 */}
          <OurPeople />
          <WhoWeAre />
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className="grid grid-cols-1 gap-y-5 gap-x-8 py-5 lg:py-10 md:grid-cols-2 text-[#262626]"
          >
            <div className="bg-[#F9F9F9] p-6 md:p-12">
              <h2 className="text-base font-bold text-[#ED1B24]">Philosophy</h2>
              <p className="mt-8 text-base">
                Africa; the next frontier! We are primed towards the growth of
                Africa’s high tech and innovation industries and we work with
                the brightest innovators and entrepreneurs across the globe to
                push the boundaries of technology and innovation in Africa.
              </p>
            </div>
            <div className="bg-[#F9F9F9] p-6 md:p-12">
              <h2 className="text-base font-bold text-[#ED1B24] ">Culture</h2>
              <p className="mt-8 text-base">
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
        </div>
      </div>
    </div>
  );
};

export default OurStory;

import React from "react";
import { HeroVid2 } from "../../assets";
import OurPeople from "./components/OurPeople";
import WhoWeAre from "./components/WhoWeAre";

const OurStory = () => {
  return (
    <div>
      <div className="h-[80vh] relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-[80vh] w-full overflow-hidden bg-black bg-fixed opacity-20"></div>
        <video
          className="w-full h-[80vh] absolute object-cover"
          src={HeroVid2}
          muted={true}
          loop={true}
          autoPlay={true}
          controls={false}
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
            <div className="relative bg-[#F9F9F9] p-6 md:p-12 group overflow-hidden">
            <div className="absolute top-0 right-full w-full h-full bg-[#ED1B24] transform group-hover:translate-x-full group-hover:scale-102 transition duration-300"></div>
              <h2 className="relative text-base font-bold text-[#ED1B24] group-hover:text-white z-50">Philosophy</h2>
              <p className="relative mt-8 text-base group-hover:text-white z-50">
                Africa; the next frontier! We are primed towards the growth of
                Africa’s high tech and innovation industries and we work with
                the brightest innovators and entrepreneurs across the globe to
                push the boundaries of technology and innovation in Africa.
              </p>
            </div>
            <div className="relative bg-[#F9F9F9] p-6 md:p-12 group overflow-hidden">
            <div className="absolute top-0 right-full w-full h-full bg-[#262626] transform group-hover:translate-x-full group-hover:scale-102 transition duration-300"></div>
              <h2 className="relative text-base font-bold text-[#ED1B24] group-hover:text-white z-50">Culture</h2>
              <p className="relative mt-8 text-base group-hover:text-white z-50">
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

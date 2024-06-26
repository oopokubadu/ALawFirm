import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Player } from "@lottiefiles/react-lottie-player";
import { EmptyDrawer } from "../assets";

const Careers = () => {
  return (
    <div>
      <div className=" bg-[#F9F9F9] flex pt-10 items-center">
        <div className="max-w-[85rem] flex flex-col  h-[100vh] justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="max-w-4xl text-center mx-auto">
            <h1
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay="200"
              className="block font-semibold text-[#262626] text-4xl md:text-5xl"
            >
              Join our world-class team of tech legal experts.
            </h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="400"
            className="max-w-3xl text-center mx-auto"
          >
            <p className="text-base md:text-lg  text-[#262626]">
              We are primed towards the growth of Africa’s high tech and
              innovation industries and we work with the brightest innovators
              and entrepreneurs across the globe to push the boundaries of
              technology and innovation in Africa.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="600"
            className="text-center"
          >
            <Player src={EmptyDrawer} className="player w-48" loop autoplay />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-XNsbSSQFF5xG1nxqvhA0dsZMcgGrk8VosjLv1rYYAzGztA/viewform?usp=send_form"
              className="inline-flex cursor-pointer group transition ease-in-out delay-150  duration-300 items-center justify-center  bg-[#ED1B24] px-4 py-3 text-xl font-light text-white"
            >
              <span className="group-hover:underline">Upload CV</span>
              <BsArrowUpRightCircle className="ml-5 h-5 w-5 group-hover:rotate-45" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

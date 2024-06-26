import React from "react";
import { ContactUsModal } from "../../../components/ContactUsModal";
import BgRandomVideo from "./BgRandomVideo";

const Hero = () => {
  return (
    <div className="h-[100vh] relative">
      <BgRandomVideo />
      <div className="max-w-[85rem] mx-auto px-4 lg:px-6 flex h-[90vh] items-end">
        <div>
          <h1
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-duration="1000"
            data-aos-once="true"
            data-aos-delay="200"
            className="font-bold max-w-4xl text-[#1D1D1D] mb-6 text-4xl lg:text-5xl"
          >
            The Technology and Innovation Law Firm.
          </h1>

          <ContactUsModal />
        </div>
      </div>
    </div>
  );
};

export default Hero;

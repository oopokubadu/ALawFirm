import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BgQuote, ReguLicenseBgImage } from "../assets";
import { CgQuote } from "react-icons/cg";
import FocusAreas from "./Home/components/FocusAreas";
import { ContactUsModal } from "../components/ContactUsModal";

const ReguLicensing = () => {
  return (
    <div>
      <div
        className="h-[80vh]"
        style={{
          backgroundImage: `url(${ReguLicenseBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[85rem] mx-auto px-4 lg:px-6 flex h-[70vh] items-end">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="font-bold max-w-3xl text-white text-4xl mb-6 lg:text-5xl"
            >
              Regulations and Licensing
            </h1>

            <ContactUsModal />
          </div>
        </div>
      </div>
      <div className="bg-[#1D1D1D] pb-14">
        <div className="mx-auto max-w-[85rem]  px-4 lg:px-6 space-y-8 md:space-y-20">
          {/* 1/3 and 2/3 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-white">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="flex flex-col bg-right-bottom bg-no-repeat p-5  lg:p-8 bg-[#262626]"
              style={{
                backgroundImage: `url(${BgQuote})`,
                backgroundSize: "15rem",
              }}
            >
              <CgQuote className="text-7xl" />
              <h2 className="text-2xl font-medium ">
                The strength of the law lies not in its mere existence, but in
                its ability to protect and uphold the rights and dignity of
                every individual in society.
              </h2>
              <p className="mt-4 font-bold text-sm">-Ruth Bader Ginsburg</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="rounded-3xl p-5 lg:p-10 md:col-span-2"
            >
              <p className="text-sm font-light mb-5">
                Our goal is to demystify complex regulations and legal jargon,
                empowering you to navigate the intricate world of business with
                confidence. From startups to established enterprises, we're here
                to provide you with the knowledge and guidance needed to make
                informed decisions that fuel your success.
              </p>
              <p className="text-sm font-light mb-5">
                With our deep understanding of the ever-changing legal
                landscape, we ensure that you stay compliant and avoid costly
                pitfalls. Our team of experts will work hand in hand with you,
                translating legal intricacies into plain language, making it
                easier for you to focus on what you do best – driving your
                business forward.
              </p>
              <p className="text-sm font-light">
                In addition to our regulatory prowess, we excel in licensing
                facilitation across various tech areas. Whether you're
                developing cutting-edge software, creating innovative hardware
                solutions, or venturing into the exciting world of AI and
                blockchain, we've got you covered. Our hassle-free licensing
                process ensures that you can protect your intellectual property
                and collaborate seamlessly with partners, giving you the freedom
                to explore new horizons. Trust us to be your guiding light,
                illuminating the path to success in this dynamic tech-driven
                world. With Eight Geeks by your side, you can confidently propel
                your ideas to market, disrupt industries, and soar to new
                heights. Let's embark on this thrilling journey together! 🌟🚀🔒
              </p>
            </div>
          </div>
        </div>
      </div>
      <FocusAreas />
    </div>
  );
};

export default ReguLicensing;

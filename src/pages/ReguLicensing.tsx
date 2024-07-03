import React from "react";
import { CgQuote } from "react-icons/cg";
import FocusAreas from "./Home/components/FocusAreas";
import { ContactUsModal } from "../components/ContactUsModal";

const ReguLicensing = () => {
  return (
    <div>
      <div
        className="h-[80vh]"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/djmddrfv2/image/upload/v1720012620/bg_img_regulations_and_licensing_knvuor.webp)`,
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
              Regulatory and Licensing
            </h1>

            <ContactUsModal />
          </div>
        </div>
      </div>
      <div className="bg-white pb-14">
        <div className="mx-auto max-w-[85rem]  px-4 lg:px-6 space-y-8 md:space-y-20">
          {/* 1/3 and 2/3 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-[#262626]">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="relative flex flex-col p-5 group lg:p-8 transition duration-300 ease-in-out delay-150 bg-[#F9F9F9] hover:bg-[#ED1B24]"
            >
              <div className="absolute bottom-0 right-0">
                <svg
                  className="fill-[#f9f9f9] stroke-[#262626] group-hover:fill-[#ED1B24] group-hover:stroke-white"
                  width="244"
                  height="108"
                  viewBox="0 0 294 158"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_335_440"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="294"
                    height="158"
                  >
                    <rect width="294" height="158" />
                  </mask>
                  <g mask="url(#mask0_335_440)">
                    <path d="M261.662 45.1916L261.949 44.5001L261.2 44.5001L180.2 44.5001L179.798 44.5001L179.712 44.8929L147.312 192.493L147.179 193.1L147.8 193.1L200 193.1L200.334 193.1L200.462 192.792L261.662 45.1916ZM145.862 45.1916L146.149 44.5001L145.4 44.5001L65.0002 44.5001L64.5996 44.5001L64.5123 44.891L31.5122 192.491L31.3761 193.1L32.0002 193.1L84.2002 193.1L84.5341 193.1L84.6621 192.792L145.862 45.1916Z" />
                  </g>
                </svg>
              </div>
              <CgQuote className="text-7xl group-hover:text-white" />
              <h2 className="text-2xl z-50 font-medium group-hover:text-white">
                The strength of the law lies not in its mere existence, but in
                its ability to protect and uphold the rights and dignity of
                every individual in society.
              </h2>
              <p className="mt-4 font-bold text-sm group-hover:text-white">
                -Ruth Bader Ginsburg
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="rounded-3xl p-5 lg:p-10 md:col-span-2"
            >
              <p className="text-sm mb-5">
                Our goal is to demystify complex regulations and legal jargon,
                empowering you to navigate the intricate world of business with
                confidence. From startups to established enterprises, we're here
                to provide you with the knowledge and guidance needed to make
                informed decisions that fuel your success.
              </p>
              <p className="text-sm mb-5">
                With our deep understanding of the ever-changing legal
                landscape, we ensure that you stay compliant and avoid costly
                pitfalls. Our team of experts will work hand in hand with you,
                translating legal intricacies into plain language, making it
                easier for you to focus on what you do best – driving your
                business forward.
              </p>
              <p className="text-sm ">
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
                heights. Let's embark on this thrilling journey together!
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

import React from "react";
import { CgQuote } from "react-icons/cg";
import FocusAreas from "./Home/components/FocusAreas";
import { ContactUsModal } from "../components/ContactUsModal";

const IntellectualProperty = () => {
  return (
    <div>
      <div
        className="h-[80vh]"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/djmddrfv2/image/upload/v1720012616/bg_img_intellectual_property_rlpiul.webp)`,
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
              className="font-bold max-w-3xl text-white mb-6 text-4xl lg:text-5xl"
            >
              Intellectual Property & Technology Transactions
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
              className="relative flex flex-col p-5 group lg:p-8 bg-[#F9F9F9] overflow-hidden"
              >
                <div className="absolute top-0 right-full w-full h-full bg-[#ED1B24] transform group-hover:translate-x-full group-hover:scale-102 transition duration-300"></div>
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
              <CgQuote className="text-7xl group-hover:text-white z-10" />
              <h2 className="text-2xl z-50 font-medium group-hover:text-white">
                Intellectual property is the fuel of genius, the sustenance of
                innovation, and the cornerstone of progress.
              </h2>
              <p className="mt-4 font-bold text-sm group-hover:text-white">-Unknown</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="rounded-3xl p-5 lg:p-10 md:col-span-2"
            >
              <p className="text-sm mb-5">
                The ultimate fortress of innovation! Our team of legal
                superheroes are dedicated to safeguarding your brilliant ideas
                from the clutches of copycats and imitators. With our expertise
                in patents, trademarks, and copyrights, we'll build an
                impenetrable shield around your intellectual property, ensuring
                you reap the rewards of your hard work.
              </p>
              <p className="text-sm mb-5">
                But that's not all! We are tech wizards, well-versed in the
                rapidly evolving landscape of technology and its legal
                implications. Whether it's data privacy, user agreements, or
                complex vendor relationships, we've got your back. Navigating
                these tricky waters can be daunting, but fear not! We'll be your
                guiding star and ensure that you stay compliant while still
                pushing the boundaries of innovation.
              </p>
              <p className="text-sm ">
                Join us in our quest for market disruption, as we set out to
                redefine industries, revolutionize products, and create
                groundbreaking solutions that change the world. When you geek
                out with us, you become part of a powerful alliance that
                embraces creativity, empowers inventors, and champions
                forward-thinking endeavors. So, if you're ready to unleash the
                full potential of your ideas and revolutionize the world with
                your innovations, partner with Eight Geeks, and together, we'll
                forge a path to success and change the tech landscape forever!
            
              </p>
            </div>
          </div>
        </div>
      </div>
      <FocusAreas />
    </div>
  );
};

export default IntellectualProperty;

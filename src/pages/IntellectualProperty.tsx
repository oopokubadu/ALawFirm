import React from "react";
import { BgQuote, IntellectualBgImage } from "../assets";
import { CgQuote } from "react-icons/cg";
import FocusAreas from "./Home/components/FocusAreas";
import { ContactUsModal } from "../components/ContactUsModal";

const IntellectualProperty = () => {
  return (
    <div>
      <div
        className="h-[80vh]"
        style={{
          backgroundImage: `url(${IntellectualBgImage})`,
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
      <div className="bg-[#1D1D1D] pb-14">
        <div className="mx-auto max-w-[85rem]  px-4 lg:px-6 space-y-8 md:space-y-20">
          {/* 1/3 and 2/3 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-white">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="flex flex-col bg-right-bottom bg-no-repeat p-5  lg:p-8 bg-[#ED1B24]"
              style={{
                backgroundImage: `url(${BgQuote})`,
                backgroundSize: "15rem",
              }}
            >
              <CgQuote className="text-7xl" />
              <h2 className="text-2xl font-medium ">
                Intellectual property is the fuel of genius, the sustenance of
                innovation, and the cornerstone of progress.
              </h2>
              <p className="mt-4 font-bold text-sm">-Unknown</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="rounded-3xl p-5 lg:p-10 md:col-span-2"
            >
              <p className="text-sm font-light mb-5">
                The ultimate fortress of innovation! Our team of legal
                superheroes are dedicated to safeguarding your brilliant ideas
                from the clutches of copycats and imitators. With our expertise
                in patents, trademarks, and copyrights, we'll build an
                impenetrable shield around your intellectual property, ensuring
                you reap the rewards of your hard work.
              </p>
              <p className="text-sm font-light mb-5">
                But that's not all! We are tech wizards, well-versed in the
                rapidly evolving landscape of technology and its legal
                implications. Whether it's data privacy, user agreements, or
                complex vendor relationships, we've got your back. Navigating
                these tricky waters can be daunting, but fear not! We'll be your
                guiding star and ensure that you stay compliant while still
                pushing the boundaries of innovation.
              </p>
              <p className="text-sm font-light">
                Join us in our quest for market disruption, as we set out to
                redefine industries, revolutionize products, and create
                groundbreaking solutions that change the world. When you geek
                out with us, you become part of a powerful alliance that
                embraces creativity, empowers inventors, and champions
                forward-thinking endeavors. So, if you're ready to unleash the
                full potential of your ideas and revolutionize the world with
                your innovations, partner with Eight Geeks, and together, we'll
                forge a path to success and change the tech landscape forever!
                🛡️💡🚀
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

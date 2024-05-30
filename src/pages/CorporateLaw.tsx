import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BgQuote, CorporateLawBgImage } from "../assets";
import { CgQuote } from "react-icons/cg";
import FocusAreas from "./Home/components/FocusAreas";

const CorporateLaw = () => {
  return (
    <div>
      <div
        className="h-[100vh]"
        style={{
          backgroundImage: `url(${CorporateLawBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[85rem] mx-auto px-4 lg:px-6 flex h-[90vh] items-end">
          <div>
            <h1 className="font-bold max-w-3xl text-white text-4xl lg:text-5xl">
              Corporate Law
            </h1>

            <button className="inline-flex mt-10 cursor-pointer group transition ease-in-out delay-150  duration-300 items-center justify-center  bg-[#ED1B24] px-4 py-3 text-xl font-light text-white">
              <span className="group-hover:underline"> Talk to us </span>
              <BsArrowUpRightCircle className="ml-5 h-5 w-5 group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#1D1D1D] pb-14">
        <div className="mx-auto max-w-[85rem]  px-4 lg:px-6 space-y-8 md:space-y-20">
          {/* 1/3 and 2/3 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-white">
            <div
              className="flex flex-col bg-right-bottom bg-no-repeat p-5  lg:p-8 bg-[#ED1B24]"
              style={{
                backgroundImage: `url(${BgQuote})`,
                backgroundSize: "15rem"
              }}
            >
              <CgQuote className="text-7xl" />
              <h2 className="text-2xl font-medium ">
                Corporate success lies in the harmony of strategic vision,
                ethical principles, and meticulous legal protection.
              </h2>
              <p className="mt-4 font-bold text-sm">-Mary Jo White</p>
            </div>
            <div className="rounded-3xl p-5 lg:p-10 md:col-span-2">
              <p className="text-sm font-light mb-5">
                With our comprehensive expertise in corporate law, we are here
                to safeguard your business interests at every turn. Whether you
                are navigating the intricacies of mergers and acquisitions,
                facing shareholder activism, or fine-tuning your corporate
                governance, we've got your back. In the dynamic world of
                business, we understand that emerging companies require tailored
                legal solutions. Our adept team specializes in structuring
                startups and emerging ventures, providing you with the solid
                foundation needed to flourish in a competitive market.
              </p>
              <p className="text-sm font-light mb-5">
                As technology enthusiasts ourselves, we are well-versed in the
                complexities of technology-related contracts. From reviewing
                software licenses to negotiating tech partnerships, our precise
                attention to detail ensures that your agreements align perfectly
                with your business goals. We don't just offer legal counsel; we
                become your dedicated partners, invested in the growth and
                success of your corporation. Our innovative solutions are
                designed to minimize risks, optimize operations, and unlock new
                opportunities for your company to thrive.
              </p>
              <p className="text-sm font-light">
                No matter the size of your enterprise, our services are tailored
                to meet your specific needs. Trust us to be your corporate
                sentinels, continuously monitoring the legal landscape, and
                providing proactive solutions to any challenges that may arise.
                When you partner with Eight Geeks, you gain access to a
                powerhouse of legal expertise, dedicated to defending your
                corporate interests and empowering you to reach new heights of
                success. Let's join forces and embark on a journey of corporate
                excellence together! 🛡️💼🤝📝🚀
              </p>
            </div>
          </div>
        </div>
      </div>
      <FocusAreas />
    </div>
  );
};

export default CorporateLaw;

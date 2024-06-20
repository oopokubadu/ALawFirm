import React from "react";
import { BgQuoteBlack, CorporateLawBgImage } from "../assets";
import { CgQuote } from "react-icons/cg";
import FocusAreas from "./Home/components/FocusAreas";
import { ContactUsModal } from "../components/ContactUsModal";

const CorporateLaw = () => {
  return (
    <div>
      <div
        className="h-[80vh] relative"
        style={{
          backgroundImage: `url(${CorporateLawBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
        <div className="max-w-[85rem] mx-auto px-4 lg:px-6 flex h-[70vh] items-end">
          <div>
            <h1
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="font-bold max-w-3xl text-white mb-6 text-4xl lg:text-5xl"
            >
              Corporate and Commercial
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
              className="flex flex-col bg-right-bottom bg-no-repeat p-5  lg:p-8 bg-[#F9F9F9]"
              style={{
                backgroundImage: `url(${BgQuoteBlack})`,
                backgroundSize: "15rem",
              }}
            >
              <CgQuote className="text-7xl" />
              <h2 className="text-2xl font-medium ">
                Corporate success lies in the harmony of strategic vision,
                ethical principles, and meticulous legal protection.
              </h2>
              <p className="mt-4 font-bold text-sm">-Mary Jo White</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              className="rounded-3xl p-5 lg:p-10 md:col-span-2"
            >
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

import React from "react";
import { CgQuote } from "react-icons/cg";
import FocusAreas from "./Home/components/FocusAreas";
import { ContactUsModal } from "../components/ContactUsModal";

const CorporateLaw = () => {
  return (
    <div>
      <div
        className="h-[80vh] relative"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/djmddrfv2/image/upload/v1720012612/bg_img_corporate_law_z25x37.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div> */}
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
                Corporate success lies in the harmony of strategic vision,
                ethical principles, and meticulous legal protection.
              </h2>
              <p className="mt-4 font-bold group-hover:text-white text-sm">
                -Mary Jo White
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
              <p className="text-sm mb-5">
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
              <p className="text-sm">
                No matter the size of your enterprise, our services are tailored
                to meet your specific needs. Trust us to be your corporate
                sentinels, continuously monitoring the legal landscape, and
                providing proactive solutions to any challenges that may arise.
                When you partner with Eight Geeks, you gain access to a
                powerhouse of legal expertise, dedicated to defending your
                corporate interests and empowering you to reach new heights of
                success. Let's join forces and embark on a journey of corporate
                excellence together!
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

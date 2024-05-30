import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Screenshot1,
  Screenshot2,
  Screenshot3,
  Screenshot4,
} from "../../../assets";

const Hero = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-36 ">
      <div className="max-w-4xl">
        <h1 className="block text-3xl font-semibold text-white mb-5 sm:text-4xl md:text-5xl">
          The Technology and Innovation Law Firm
        </h1>

        <button className="inline-flex cursor-pointer group transition ease-in-out delay-150  duration-300 items-center justify-center  bg-[#ED1B24] px-4 py-3 text-xl font-light text-white">
          <span className="group-hover:underline"> Talk to us </span>
          <BsArrowUpRightCircle className="ml-5 h-5 w-5 group-hover:rotate-45" />
        </button>
      </div>

      <div className="mt-16  ">
        <Swiper
          spaceBetween={10}
          loop={true}
          slidesPerView={1}
          navigation={false}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="object-cover w-full" src={Screenshot1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full" src={Screenshot2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full" src={Screenshot3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="object-cover w-full" src={Screenshot4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;

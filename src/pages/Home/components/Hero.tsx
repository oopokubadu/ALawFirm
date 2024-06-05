import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HeroVideo,
  Screenshot1,
  Screenshot2,
  Screenshot3,
  Screenshot4,
} from "../../../assets";
import { ContactUsModal } from "../../../components/ContactUsModal";

const Hero = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-36 ">
      <div className="max-w-4xl">
        <h1
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration="1000"
          data-aos-once="true"
          className="block text-3xl font-semibold text-white mb-5 sm:text-4xl md:text-5xl"
        >
          The Technology and Innovation Law Firm
        </h1>

        <ContactUsModal />
      </div>

      <div
        className="mt-16"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <Swiper
          spaceBetween={10}
          loop={true}
          slidesPerView={1}
          navigation={true}
          // autoplay={{
          //   delay: 20000,
          //   disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <video
              className="w-full aspect-video"
              autoPlay
              src={HeroVideo}
              controls
              loop
            />
          </SwiperSlide>
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

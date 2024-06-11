import React from "react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ContactUsModal } from "../../../components/ContactUsModal";
import { Hero1, Hero2, Hero3 } from "../../../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroImgData = [
    {
      image: Hero2,
    },
    {
      image: Hero1,
    },
    {
      image: Hero3,
    },
  ];
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
          navigation={false}
          effect={"fade"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          {heroImgData.map((data, index) => (
            <SwiperSlide key={index}>
              <Link to="/our-story">
                <img
                  className="object-cover w-full h-[35rem]"
                  src={data.image}
                  alt=""
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-30"></div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;

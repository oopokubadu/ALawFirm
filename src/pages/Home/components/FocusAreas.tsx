import React from "react";
import {
  AI,
  Agric,
  Aviation,
  Biotechnology,
  Blockchain,
  CommNet,
  ConsElect,
  DataStorage,
  DigitalHealth,
  DigitalMedia,
  EGaming,
  Internet,
  Regulations,
  Software,
} from "../../../assets";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FocusAreas = () => {
  const specialistData = [
    {
      icon: Regulations,
      title: "Financial Services & Financial Technology",
    },
    {
      icon: Blockchain,
      title: "Blockchain & Cryptocurrency",
    },
    {
      icon: DataStorage,
      title: "Data Storage & Cloud Computing",
    },
    {
      icon: ConsElect,
      title: "Consumer Electronics",
    },
    {
      icon: CommNet,
      title: "Communications & Networking",
    },
    {
      icon: DigitalMedia,
      title: "Digital Media & Entertainment",
    },
    {
      icon: Internet,
      title: "Internet",
    },
    {
      icon: Software,
      title: "Software",
    },
    {
      icon: Biotechnology,
      title: "Biotechnology",
    },
    {
      icon: Aviation,
      title: "Aviation",
    },
    {
      icon: EGaming,
      title: "Electronic Gaming",
    },
    {
      icon: DigitalHealth,
      title: "Digital Health",
    },
    {
      icon: Agric,
      title: "Agricultural Technology",
    },
    {
      icon: AI,
      title: "Artificial Intelligent",
    },
  ];
  return (
    <div className="bg-[#1D1D1D]">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-once="true"
        className=" mx-auto px-4 pt-4 pb-10 sm:px-6 lg:px-8"
      >
        <h1 className="text-white lg:ps-20 py-10 font-semibold text-3xl">
          Our focus areas
        </h1>
        <Swiper
          spaceBetween={10}
          loop={true}
          slidesPerView={6}
          navigation={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            375: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            575: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            767: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 10,
              slidesPerView: 4,
            },
            1440: {
              spaceBetween: 10,
              slidesPerView: 5,
            },
            2560: {
              spaceBetween: 10,
              slidesPerView: 6,
            },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
        >
          <div className="my-4">
            {specialistData.map((data, index) => (
              <SwiperSlide key={index}>
                <div className=" bg-[#262626] hover:bg-[#1D1D1D] h-[14rem] border-4 border-transparent  hover:border-[#343434] transition ease-in-out duration-200 p-4">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-[#232323] mx-auto ">
                    <img src={data.icon} alt="" className="w-10 h-10 mx-auto" />
                  </div>
                  <h6 className="my-5 text-lg text-center  font-medium  text-white">
                    {data.title}
                  </h6>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default FocusAreas;

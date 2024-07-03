import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FocusAreas = () => {
  const specialistData = [
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720003255/regulatory-Licensing_dkteta.png",
      title: "Financial Services & Financial Technology",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010839/Blockchain_sedjnu.png",
      title: "Blockchain & Cryptocurrency",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010846/DataStorage-CloudComp_jmzx6p.png",
      title: "Data Storage & Cloud Computing",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720015713/ConsumerElectronics_cm9ipw.png",
      title: "Consumer Electronics",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010841/ComNetwork_oywpfr.png",
      title: "Communications & Networking",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010851/DigiMedia_pbof7s.png",
      title: "Digital Media & Entertainment",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010860/Internet_hq1o6r.png",
      title: "Internet",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010981/Software_z7xkrx.png",
      title: "Software",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720015039/biotechnology_sh5hey.png",
      title: "Biotechnology",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010835/Aviation_drb3si.png",
      title: "Aviation",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010855/Gaming_o0inw3.png",
      title: "Electronic Gaming",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720015005/digiHealth_awygbq.png",
      title: "Digital Health",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010831/AgricTech_omzmme.png",
      title: "Agricultural Technology",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720010832/AI_c9fygs.png",
      title: "Artificial Intelligence",
    },
  ];
  return (
    <div className="bg-[#F9F9F9]">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-once="true"
        className=" mx-auto px-4 pt-4 pb-10 sm:px-6 lg:px-8"
      >
        <h1 className="text-[#1D1D1D] lg:ps-20 py-10 font-semibold text-3xl">
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
                <div className=" bg-white hover:bg-[#F0F0F0] h-[14rem] border-4 border-transparent  hover:border-[#DFDFDF] transition ease-in-out duration-200 p-4">
                  <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-[#F9F9F9] mx-auto ">
                    <img src={data.icon} alt="" className="w-9 mx-auto" />
                  </div>
                  <h6 className="my-5 text-lg text-center  font-medium  text-[#1D1D1D]">
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

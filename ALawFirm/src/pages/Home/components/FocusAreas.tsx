import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FocusAreas = () => {
  const specialistData = [
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016975/ic_regulations_licensing_o15hjq.svg",
      title: "Financial Services & Financial Technology",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016434/ic_blockchain_lvmi4v.svg",
      title: "Blockchain & Cryptocurrency",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016435/ic_dataStorage_uatepw.svg",
      title: "Data Storage & Cloud Computing",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016126/ic_consumer_electronics_qeyxyg.svg",
      title: "Consumer Electronics",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720117096/ic_communication_networking_hytrmi.svg",
      title: "Communications & Networking",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016442/ic_digital_media_eoadrn.svg",
      title: "Digital Media & Entertainment",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016452/ic_Internet_oyc7kd.svg",
      title: "Internet",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016459/ic_software_urzj4k.svg",
      title: "Software",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016054/ic_biotechnology_ipt9gi.svg",
      title: "Biotechnology",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016430/ic_aviation_spdgxw.svg",
      title: "Aviation",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016445/ic_electronic_gaming_r5pdvn.svg",
      title: "Electronic Gaming",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016440/ic_digital_health_nvvpz2.svg",
      title: "Digital Health",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016426/ic_agric_slrfqf.svg",
      title: "Agricultural Technology",
    },
    {
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720016427/ic_ai_dk7xzg.svg",
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
                    <img src={data.icon} alt="" className="w-10 h-10 mx-auto" />
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

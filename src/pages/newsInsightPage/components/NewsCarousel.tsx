import React from "react";
import { CgArrowRightO } from "react-icons/cg";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { News2, News3, News4, News5, News7, News8, News9 } from "../../../assets";
import { Link } from "react-router-dom";

const NewsCarousel = () => {
  const newsData = [
    {
      image: News8,
      link: "/news/details-5",
    },
    {
      image: News2,
      link: "/news/details-2",
    },
    {
      image: News4,
      link: "/news/details-3",
    },
    {
      image: News7,
      link: "/news/details-4",
    },
    {
      image: News5,
      link: "/news/details-1",
    },
    {
      image: News9,
      link: "/news/details-6",
    },
  ];
  return (
    <div className="bg-[#1D1D1D] py-4">
      <Swiper
        spaceBetween={10}
        loop={true}
        slidesPerView={6}
        navigation={false}
        autoplay={{
          delay: 5000,
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
            slidesPerView: 1,
          },
          767: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 10,
            slidesPerView: 3,
          },
          1440: {
            spaceBetween: 10,
            slidesPerView: 4,
          },
          2560: {
            spaceBetween: 10,
            slidesPerView: 5,
          },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
          className="my-4"
        >
          {newsData.map((data, index) => (
            <SwiperSlide key={index}>
              <Link to={data.link} className="group relative">
                <div className="z-10 h-full w-full overflow-hidden  opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
                  <img
                    src={data.image}
                    className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                    alt=""
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                </div>
                <div className="absolute  opacity-0 group-hover:opacity-100 bottom-[5rem] left-[7rem] z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                  <button className=" flex gap-x-2 underline text-sm hover:font-bold hover:text-[#ED1B24]  items-center font-light text-white transition">
                    Read More
                    <CgArrowRightO className="hover:-rotate-45" />
                  </button>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default NewsCarousel;

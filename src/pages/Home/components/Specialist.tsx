import React, { useEffect, useRef } from "react";
import { CgArrowRightO } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

const Specialist = () => {
  const location = useLocation();
  const specialistRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (location.state) {
      const { scrollTo } = location.state;
      if (scrollTo === "specialist" && specialistRef.current) {
        specialistRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  const specialistData = [
    {
      link: "/corporate-and-commercial",
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720003255/corporate-commercial_ygcaru.png",
      title: "Corporate and Commercial",
      description:
        " Our Corporate and Commercial practice covers a wide range of commercial activities. The team provides legal support to clients on all aspects of their equity and debt capital market transactions, shareholder activism, corporate governance, emerging company structuring and technology-related contract review.",
    },
    {
      link: "/regulatory-and-licensing",
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720003255/regulatory-Licensing_dkteta.png",
      title: "Regulatory and Licensing",
      description:
        "Our Regulatory and Licensing team ensures that you fulfil all applicable regulatory obligations with targeted guidance so you can focus on your core business. Our licensing support services has involved interfacing with regulatory bodies to represent our clients’ best interests while also ensuring their compliance with applicable law.",
    },
    {
      link: "/intellectual-property-&-technology-transactions",
      icon: "https://res.cloudinary.com/djmddrfv2/image/upload/v1720003255/intellectual-property_ekm2uy.png",
      title: "Intellectual Property & Technology Transactions",
      description:
        " Our Intellectual Property practice offers strategic counsel to clients concerning all aspects of intellectual property rights including trademarks and passing off, patents, confidential information, copyright, designs and database rights and related regulatory issues.",
    },
  ];

  return (
    <div id="specialist" className="bg-[#F9F9F9]">
      <div className="max-w-[85rem] mx-auto px-4 pt-4 pb-10 sm:px-6 lg:px-8">
        <h1
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          data-aos-once="true"
          className="text-[#1D1D1D] py-10 font-semibold text-3xl"
        >
          We are Specialists!
        </h1>
        <div className="grid gap-4 sm:grid-cols-3 my-4">
          {specialistData.map((data, index) => (
            <Link
              to={data.link}
              key={index}
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-delay={index * 200}
              className=" bg-white hover:bg-[#F0F0F0] border-4 border-transparent  hover:border-[#DFDFDF] transition ease-in-out duration-200 p-6"
            >
              <img src={data.icon} alt="" className="" />
              <h6 className="my-5 text-lg  font-medium  text-[#1D1D1D]">
                {data.title}
              </h6>
              <p className="text-sm mb-6  text-[#1D1D1D]">{data.description}</p>
              <button className=" flex gap-x-2 underline items-center text-[#1D1D1D] ">
                Read More
                <CgArrowRightO />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialist;

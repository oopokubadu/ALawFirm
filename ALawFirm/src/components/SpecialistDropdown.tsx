import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const SpecialistDropdown = () => {
  return (
    <FlyoutLink href="/home#specialist" FlyoutContent={SpecialitiesContent}>
      Our Specialities
    </FlyoutLink>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit"
    >
      <NavLink
        to={href}
        className="inline-flex text-[#CECECE] relative group h-24 cursor-pointer items-center justify-center px-4 py-2.5 text-base font-light"
      >
        {children}

        <span className="absolute -bottom-0 left-0 w-0 transition-all h-0.5 bg-[#ED1B24] group-hover:w-full"></span>
      </NavLink>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-[6rem] bg-white text-black shadow-xl"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />

            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SpecialitiesContent = () => {
  const specialistData = [
    {
      link: "/corporate-and-commercial",
      title: "Corporate and Commercial",
      description:
        " Our Corporate and Commercial practice covers a wide range of commercial activities. The team provides legal support to clients on all aspects of their equity and debt capital market transactions, shareholder activism, corporate governance, emerging company structuring and technology-related contract review.",
    },
    {
      link: "/regulatory-and-licensing",
      title: "Regulatory and Licensing",
      description:
        "Our Regulatory and Licensing team ensures that you fulfil all applicable regulatory obligations with targeted guidance so you can focus on your core business. Our licensing support services has involved interfacing with regulatory bodies to represent our clients’ best interests while also ensuring their compliance with applicable law.",
    },
    {
      link: "/intellectual-property-&-technology-transactions",
      title: "Intellectual Property & Technology Transactions",
      description:
        " Our Intellectual Property practice offers strategic counsel to clients concerning all aspects of intellectual property rights including trademarks and passing off, patents, confidential information, copyright, designs and database rights and related regulatory issues.",
    },
  ];
  return (
    <div className="w-[60rem] bg-[#F9F9F9] shadow-sm">
      <div className="grid  gap-2 sm:grid-cols-3">
        {specialistData.map((data, index) => (
          <Link
            to={data.link}
            key={index}
            className="p-4 border-4 border-transparent hover:bg-[#F0F0F0] "
          >
            <h6 className="my-5 text-lg  font-medium  text-[#262626]">
              {data.title}
            </h6>
            <p className="text-sm mb-6 text-[#262626]">
              {data.description.substring(0, 150)}
              {data.description.length > 150 && (
                <span className="font-bold"> ... Read More</span>
              )}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialistDropdown;

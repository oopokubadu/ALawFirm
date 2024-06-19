import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

const NewsInsightsDropdown = () => {
  return (
    <FlyoutLink href="/news-and-insights" FlyoutContent={SpecialitiesContent}>
      News and Insights
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
  return (
    <ul className="w-64 text-lg font-medium text-white bg-[#1D1D1D] shadow-xl">
      <a
        href="https://eightgeeksatlaw.wordpress.com/"
        target="_blank"
        rel="noreferrer"
      >
        <li className="w-full px-6 py-4  hover:bg-[#2F2F2F] ">Blog</li>
      </a>
      <Link to="/library">
        {" "}
        <li className="w-full px-6 py-4  hover:bg-[#2F2F2F] ">Library</li>
      </Link>
    </ul>
  );
};

export default NewsInsightsDropdown;

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ExternalLinks = ({ url }) => {
  const location = useLocation();
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (hasReloaded !== "true") {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);

  const determineHeight = () => {
    if (location.pathname === "/library") {
      return "h-[90vh]";
    } else if (
      location.pathname === "/news/details-3" ||
      location.pathname === "/news/details-2" ||
      location.pathname === "/news/details-1"
    ) {
      return "h-[550rem]";
    } else if (
      location.pathname === "/news/details-5" ||
      location.pathname === "/news/details-4"
    ) {
      return "h-[1000rem]";
    } else if (["/news/details-6"].includes(location.pathname)) {
      return "h-[260rem]";
    } else {
      return "h-[90vh]"; // Default height if no match is found
    }
  };

  const iframeHeightClass = determineHeight();
  return (
    <div className="overflow-hidden bg-white">
      <iframe
        className={`max-w-[85rem] my-10 w-full mx-auto ${iframeHeightClass} overflow-y-auto overflow-x-hidden`}
        src={url}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        title="External Content"
        seamless={true}
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default ExternalLinks;

import React, { useEffect } from "react";

const ExternalLinks = ({ url }) => {
  useEffect(() => {
    const hasReloaded = sessionStorage.getItem("hasReloaded");

    if (hasReloaded !== "true") {
      sessionStorage.setItem("hasReloaded", "true");
      window.location.reload();
    }
  }, []);
  return (
    <div className="overflow-hidden bg-[#1D1D1D]">
      {" "}
      <iframe
        className="max-w-[85rem] my-10 w-full mx-auto h-[100rem] overflow-hidden"
        src={url}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        // scrolling="no"
        // style={{ flexGrow: 1, border: "none" }}
        title="External Content"
      ></iframe>
    </div>
  );
};

export default ExternalLinks;

import React from "react";

const ExternalLinks = ({ url }) => {
  return (
    <div className="overflow-hidden">
      {" "}
      <iframe
        className="max-w-[85rem] my-10 w-full mx-auto h-[100rem] overflow-hidden"
        src={url}
        // style={{ flexGrow: 1, border: "none" }}
        title="External Content"
      ></iframe>
    </div>
  );
};

export default ExternalLinks;

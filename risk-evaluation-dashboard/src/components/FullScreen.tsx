import React from "react";
import { RxEnterFullScreen } from "react-icons/rx";

const FullScreen = () => {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return (
    <div>
      <RxEnterFullScreen className="h-6 w-6 dark:text-white" onClick={toggleFullScreen} />
    </div>
  );
};

export default FullScreen;

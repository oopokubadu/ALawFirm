import React, { useState } from "react";
import { HeroVid1, HeroVid2, HeroVid3 } from "../../../assets";

const videos = [HeroVid1, HeroVid2, HeroVid3];

const BgRandomVideo: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const getRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];
    setVideoUrl(randomVideo);
  };

  useState(getRandomVideo);

  return (
    <div className="">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-[100vh] w-full overflow-hidden bg-black bg-fixed opacity-20"></div>
      <video
        className="w-full h-[100vh] absolute object-cover"
        src={videoUrl}
        muted={true}
        loop={true}
        autoPlay={true}
        controls={false}
      />
    </div>
  );
};
export default BgRandomVideo;

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
    <div>
      <video
        className="w-full h-[100vh] absolute object-cover"
        src={videoUrl}
        muted
        loop
        autoPlay
      />
    </div>
  );
};
export default BgRandomVideo;

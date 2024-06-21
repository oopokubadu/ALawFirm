import React, { useEffect, useState } from "react";
import { HeroVid1, HeroVid2, HeroVid3 } from "../../../assets";

const videos = [HeroVid1, HeroVid2, HeroVid3];

const BgRandomVideo: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState(HeroVid1);

  useEffect(() => {
    const lastVideoIndex = localStorage.getItem("lastVideoIndex");
    let nextVideoIndex = 0;

    if (lastVideoIndex !== null) {
      nextVideoIndex = (parseInt(lastVideoIndex, 10) + 1) % videos.length;
    }

    setVideoUrl(videos[nextVideoIndex]);
    localStorage.setItem("lastVideoIndex", nextVideoIndex.toString());
  }, []);
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

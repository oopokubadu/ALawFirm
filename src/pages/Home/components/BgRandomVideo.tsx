import React, { useEffect, useState } from "react";
import { HeroVid1, HeroVid2, HeroVid3, MobileHeroBg } from "../../../assets";

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
      <video
        className="w-full h-[100vh] absolute object-cover hidden lg:block"
        src={videoUrl}
        muted={true}
        loop={true}
        autoPlay={true}
        controls={false}
      />
      <div
        style={{
          backgroundImage: `url(${MobileHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute bottom-0 left-0 right-0 top-0 h-[100vh] w-full overflow-hidden bg-black bg-fixed lg:hidden"
      ></div>
    </div>
  );
};
export default BgRandomVideo;

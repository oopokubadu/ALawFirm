import React, { useEffect, useState } from "react";

const videos = [
  "https://res.cloudinary.com/djmddrfv2/video/upload/v1720002325/video_hero1_sm8wcm.webm",
  "https://res.cloudinary.com/djmddrfv2/video/upload/v1720002345/video_hero2_hrzhto.webm",
  "https://res.cloudinary.com/djmddrfv2/video/upload/v1720002325/video_hero3_d46spp.webm",
];

const BgRandomVideo: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState("https://res.cloudinary.com/djmddrfv2/video/upload/v1720002325/video_hero1_sm8wcm.webm");

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
        className="w-full h-[100vh] absolute top-0 left-0 object-cover pointer-events-none"
        src={videoUrl}
        muted
        loop
        autoPlay
        playsInline
        controls={false}
      />
    </div>
  );
};
export default BgRandomVideo;

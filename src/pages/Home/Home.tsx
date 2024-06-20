import React from "react";

import Hero from "./components/Hero";
import Specialist from "./components/Specialist";
import NewsInsights from "./components/NewsInsights";
import FocusAreas from "./components/FocusAreas";

const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Specialist />
      <NewsInsights />
      <FocusAreas />
    </div>
  );
};

export default Home;

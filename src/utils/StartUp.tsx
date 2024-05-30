import React from "react";
import AppRouter from "./AppRouter";
import { ScrollToTop } from "../components/ScrollToTop";

const StartUp = () => {
  return (
    <div>
      <ScrollToTop/>
      <AppRouter />
    </div>
  );
};

export default StartUp;

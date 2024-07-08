import React from "react";
import AppRouter from "./AppRouter";
import { ScrollToTop } from "../components/ScrollToTop";
import { Toaster } from "react-hot-toast";

const StartUp = () => {
  return (
    <div>
      <ScrollToTop />
      <Toaster />
      <AppRouter />
    </div>
  );
};

export default StartUp;

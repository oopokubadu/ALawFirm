import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../shared/MainLayout";
import IntellectualProperty from "../pages/IntellectualProperty";
import CorporateLaw from "../pages/CorporateLaw";
import ReguLicensing from "../pages/ReguLicensing";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route
          path="intellectual-property-&-technology-transactions"
          element={<IntellectualProperty />}
        />
        <Route path="corporate-law" element={<CorporateLaw />} />
        <Route path="regulations-and-licensing" element={<ReguLicensing />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
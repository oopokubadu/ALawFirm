import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../shared/MainLayout";
import IntellectualProperty from "../pages/IntellectualProperty";
import CorporateLaw from "../pages/CorporateLaw";
import ReguLicensing from "../pages/ReguLicensing";
import OurStory from "../pages/OurStory/OurStory";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import ExternalLinks from "../pages/ExternalLinks";
import InsightsNews from "../pages/InsightsNews";

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
        <Route path="corporate-and-commercial" element={<CorporateLaw />} />
        <Route path="regulatory-and-licensing" element={<ReguLicensing />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="news-and-insights" element={<InsightsNews />} />
        <Route path="Careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="library"
          element={
            <ExternalLinks url="https://fliphtml5.com/bookcase/pqijl/silver" />
          }
        />
        <Route path="news">
          <Route
            path="details-1"
            element={
              <ExternalLinks url="https://eightgeeksatlaw.wordpress.com/2024/02/21/elon-v-delaware-an-examination-of-the-rescission-of-elon-musks-2018-compensation-plan-by-the-court-of-chancery-in-delaware-and-its-implications-for-technology-companies/" />
            }
          />
          <Route
            path="details-2"
            element={
              <ExternalLinks url="https://eightgeeksatlaw.wordpress.com/2023/08/24/unveiling-the-seal-decoding-the-distinction-between-digital-signatures-and-electronic-signatures/" />
            }
          />
          <Route
            path="details-3"
            element={
              <ExternalLinks url="https://eightgeeksatlaw.wordpress.com/2023/08/24/unveiling-the-seal-decoding-the-distinction-between-digital-signatures-and-electronic-signatures/" />
            }
          />
          <Route
            path="details-4"
            element={
              <ExternalLinks url="https://eightgeeksatlaw.wordpress.com/2024/03/27/unlocking-artificial-intelligences-legal-code-navigating-patent-law-in-the-era-of-ai/" />
            }
          />
          <Route
            path="details-5"
            element={
              <ExternalLinks url="https://eightgeeksatlaw.wordpress.com/2024/05/23/demystifying-copyright-in-the-age-of-artificial-intelligence-legal-perspectives-unveiled/" />
            }
          />
          <Route
            path="details-6"
            element={
              <ExternalLinks url="https://eightgeeksatlaw.wordpress.com/2023/12/12/informed-consent/" />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;

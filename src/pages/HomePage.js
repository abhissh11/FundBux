import React from "react";
import Hero from "../components/Hero";
import CampaignsCarousel from "../components/CampaignsCarousel";
import AboutComponent from "../components/AboutComponent";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CampaignsCarousel />
      <AboutComponent />
    </div>
  );
}

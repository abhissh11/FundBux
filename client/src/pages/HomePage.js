import React from "react";
import Hero from "../components/Hero";
import CampaignsCarousel from "../components/CampaignsCarousel";
import AboutComponent from "../components/AboutComponent";
import Features from "../components/Features";
import Mission from "../components/Mission";
import Cta from "../components/Cta";
import FaqComponent from "../components/FaqComponent";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CampaignsCarousel />
      <AboutComponent />
      <Features />
      <Mission />
      <Cta />
      <FaqComponent />
    </div>
  );
}

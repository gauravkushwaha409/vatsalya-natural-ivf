import React from "react";
import HeroSection from "./partials/HeroSection";
import Gallery from "./partials/Gallery";

const page = () => {
  return (
    <div className="bg-primary-50">
      <HeroSection />
      <Gallery />
    </div>
  );
};

export default page;

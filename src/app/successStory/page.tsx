import React from "react";
import TestimonialSection from "./partials/TestimonialSection";
import StoriesSection from "./partials/StoriesSection";
import YourJourney from "./partials/YourJourney";
import HeroSuccess from "./partials/HeroSuccess";

const SuccessStory = () => {
  return (
    <div>
      <HeroSuccess />
      <TestimonialSection />
      <StoriesSection />
      <YourJourney />
    </div>
  );
};

export default SuccessStory;
